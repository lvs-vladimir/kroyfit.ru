<template>
  <div>
    <div class="d-flex align-center mb-6">
      <v-btn
        icon
        variant="text"
        color="grey-darken-2"
        to="/admin/users"
        class="mr-3"
      >
        <v-icon size="20">mdi-arrow-left</v-icon>
      </v-btn>
      <div>
        <h1 class="text-h4 font-weight-bold mb-1" style="color: #020617;">
          Редактирование пользователя
        </h1>
        <p class="text-body-2 text-grey-darken-1">
          Изменение данных ученика
        </p>
      </div>
    </div>

    <v-row>
      <v-col cols="12" md="8">
        <v-form @submit.prevent="saveUser">
          <div class="mb-4">
            <label class="text-caption text-grey-darken-1 d-block mb-1">Имя</label>
            <v-text-field
              v-model="form.name"
              placeholder="Имя пользователя"
              variant="outlined"
              density="compact"
              hide-details
              class="mb-4"
            />
          </div>

          <div class="mb-4">
            <label class="text-caption text-grey-darken-1 d-block mb-1">Email</label>
            <v-text-field
              v-model="form.email"
              type="email"
              placeholder="email@example.com"
              variant="outlined"
              density="compact"
              hide-details
              class="mb-4"
            />
          </div>

          <div class="mb-4">
            <label class="text-caption text-grey-darken-1 d-block mb-1">VK ID</label>
            <v-text-field
              v-model="form.vkId"
              placeholder="123456789"
              variant="outlined"
              density="compact"
              hide-details
              class="mb-4"
            />
          </div>

          <div class="mb-4">
            <label class="text-caption text-grey-darken-1 d-block mb-1">Аватар URL</label>
            <v-text-field
              v-model="form.avatar"
              placeholder="https://..."
              variant="outlined"
              density="compact"
              hide-details
              class="mb-4"
            />
          </div>

          <div class="mb-4">
            <label class="text-caption text-grey-darken-1 d-block mb-1">VK ID</label>
            <v-text-field
              v-model="form.vk"
              placeholder="123456789"
              variant="outlined"
              density="compact"
              hide-details
              class="mb-4"
            />
          </div>

          <div class="mb-4">
            <label class="text-caption text-grey-darken-1 d-block mb-1">Купленные курсы</label>
            <v-select
              v-model="form.courses"
              :items="courses"
              item-title="title"
              item-value="slug"
              multiple
              chips
              variant="outlined"
              density="compact"
              hide-details
              class="mb-4"
            />
          </div>

          <div class="d-flex ga-2">
            <v-btn
              type="submit"
              color="green-darken-3"
              variant="flat"
              :loading="saving"
              style="border-radius: 8px;"
            >
              Сохранить
            </v-btn>
            <v-btn
              variant="text"
              color="grey-darken-2"
              to="/admin/users"
            >
              Отмена
            </v-btn>
          </div>
        </v-form>
      </v-col>

      <v-col cols="12" md="4">
        <div class="preview-card">
          <p class="text-caption text-grey-darken-1 font-weight-medium mb-4">Информация</p>
          <div class="mb-4">
            <p class="text-caption text-grey-darken-1">Имя</p>
            <p class="text-body-2 font-weight-medium" style="color: #020617;">
              {{ form.name || 'Имя пользователя' }}
            </p>
          </div>
          <div class="mb-4">
            <p class="text-caption text-grey-darken-1">Email</p>
            <p class="text-body-2" style="color: #020617;">
              {{ form.email || 'email@example.com' }}
            </p>
          </div>
          <div class="mb-4">
            <p class="text-caption text-grey-darken-1">VK ID</p>
            <p class="text-body-2" style="color: #020617;">
              <a
                v-if="form.vkId"
                :href="`https://vk.com/id${form.vkId}`"
                target="_blank"
                class="text-decoration-none"
              >
                VK {{ form.vkId }}
              </a>
              <span v-else class="text-grey-lighten-1">—</span>
            </p>
          </div>
          <div class="mb-4">
            <p class="text-caption text-grey-darken-1">ID</p>
            <p class="text-body-2" style="color: #020617;">
              {{ userId }}
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

definePageMeta({ middleware: 'admin', layout: 'admin' })

const route = useRoute()
const router = useRouter()
const userId = route.params.id

const loading = ref(true)
const saving = ref(false)

const form = reactive({
  name: '',
  email: '',
  vkId: '',
  avatar: '',
})

const saveUser = async () => {
  saving.value = true
  try {
    console.log('📝 [Frontend] Сохранение пользователя:', form)
    
    await $fetch('/api/admin/settings', {
      method: 'POST',
      body: {
        type: 'user-update',
        data: {
          id: userId,
          name: form.name,
          email: form.email,
          vkId: form.vkId,
          avatar: form.avatar,
        },
      },
    })
    
    console.log('✅ [Frontend] Пользователь сохранен')
    await router.push('/admin/users')
  } catch (e: any) {
    console.error('❌ [Frontend] Ошибка сохранения:', e)
    alert('Ошибка: ' + (e.data?.message || 'Не удалось сохранить пользователя'))
  } finally {
    saving.value = false
  }
}

onMounted(async () => {
  try {
    console.log('🔵 [Frontend] Загрузка пользователя:', userId)
    
    // Загружаем данные пользователя
    const userResponse = await $fetch(`/api/users/${userId}`)
    const userData = userResponse.user
    
    form.name = userData.name || ''
    form.email = userData.email || ''
    form.vkId = userData.vkId || ''
    form.avatar = userData.avatar || ''
    
    console.log('✅ [Frontend] Данные загружены')
  } catch (e) {
    console.error('❌ [Frontend] Ошибка загрузки:', e)
    alert('Ошибка загрузки пользователя')
  } finally {
    loading.value = false
  }
})

useSeoMeta({
  title: 'Редактирование пользователя — Админка',
})
</script>

<style scoped>
.preview-card {
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 24px;
}

.ga-2 {
  gap: 8px;
}
</style>
