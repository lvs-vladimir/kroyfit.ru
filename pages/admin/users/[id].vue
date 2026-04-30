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
            <label class="text-caption text-grey-darken-1 d-block mb-1">Пароль</label>
            <v-text-field
              v-model="form.password"
              type="password"
              placeholder="Оставьте пустым, чтобы не менять"
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
            <p class="text-caption text-grey-darken-1">VK</p>
            <p class="text-body-2" style="color: #020617;">
              <a
                v-if="form.vk"
                :href="`https://vk.com/id${form.vk}`"
                target="_blank"
                class="text-decoration-none"
              >
                VK {{ form.vk }}
              </a>
              <span v-else class="text-grey-lighten-1">—</span>
            </p>
          </div>
          <div class="mb-4">
            <p class="text-caption text-grey-darken-1">Курсов</p>
            <p class="text-h6 font-weight-bold" style="color: #020617;">
              {{ form.courses?.length || 0 }}
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

const courses = [
  { title: 'Технология пошива', slug: 'tekhnologiya-poshiva' },
  { title: 'Мастер конструирования', slug: 'master-konstruirovaniya' },
  { title: 'Дамское бельё', slug: 'damskoe-bele' },
]

const saving = ref(false)

const form = reactive({
  name: 'Анна Иванова',
  email: 'anna@example.com',
  password: '',
  vk: '123456',
  courses: ['tekhnologiya-poshiva'],
})

const saveUser = async () => {
  saving.value = true
  try {
    console.log('Сохранение пользователя:', form)
    await new Promise(resolve => setTimeout(resolve, 500))
    await router.push('/admin/users')
  } finally {
    saving.value = false
  }
}

onMounted(() => {
  // В реальности здесь будет загрузка данных пользователя по ID
  console.log('Загрузка пользователя с ID:', userId)
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
