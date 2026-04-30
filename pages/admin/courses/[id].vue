<template>
  <div>
    <div class="d-flex align-center mb-6">
      <v-btn
        icon
        variant="text"
        color="grey-darken-2"
        to="/admin/courses"
        class="mr-3"
      >
        <v-icon size="20">mdi-arrow-left</v-icon>
      </v-btn>
      <div>
        <h1 class="text-h4 font-weight-bold mb-1" style="color: #020617;">
          Редактирование курса
        </h1>
        <p class="text-body-2 text-grey-darken-1">
          Изменение данных курса
        </p>
      </div>
    </div>

    <v-row>
      <v-col cols="12" md="8">
        <v-form @submit.prevent="saveCourse">
          <div class="mb-4">
            <label class="text-caption text-grey-darken-1 d-block mb-1">Название</label>
            <v-text-field
              v-model="form.title"
              placeholder="Название курса"
              variant="outlined"
              density="compact"
              hide-details
              class="mb-4"
            />
          </div>

          <div class="mb-4">
            <label class="text-caption text-grey-darken-1 d-block mb-1">Описание</label>
            <v-textarea
              v-model="form.description"
              placeholder="Описание курса"
              variant="outlined"
              density="compact"
              rows="4"
              hide-details
              class="mb-4"
            />
          </div>

          <v-row>
            <v-col cols="12" sm="6">
              <label class="text-caption text-grey-darken-1 d-block mb-1">Цена (₽)</label>
              <v-text-field
                v-model.number="form.price"
                type="number"
                placeholder="0"
                variant="outlined"
                density="compact"
                hide-details
                class="mb-4"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <label class="text-caption text-grey-darken-1 d-block mb-1">Длительность</label>
              <v-text-field
                v-model="form.duration"
                placeholder="2 месяца"
                variant="outlined"
                density="compact"
                hide-details
                class="mb-4"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <label class="text-caption text-grey-darken-1 d-block mb-1">Категория</label>
              <v-select
                v-model="form.category"
                :items="categories"
                variant="outlined"
                density="compact"
                hide-details
                class="mb-4"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <label class="text-caption text-grey-darken-1 d-block mb-1">Уроков</label>
              <v-text-field
                v-model.number="form.lessonsCount"
                type="number"
                placeholder="0"
                variant="outlined"
                density="compact"
                hide-details
                class="mb-4"
              />
            </v-col>
          </v-row>

          <v-checkbox
            v-model="form.isPublished"
            label="Опубликовать курс"
            hide-details
            class="mb-6"
            color="green-darken-3"
          />

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
              to="/admin/courses"
            >
              Отмена
            </v-btn>
          </div>
        </v-form>
      </v-col>

      <v-col cols="12" md="4">
        <div class="preview-card">
          <p class="text-caption text-grey-darken-1 font-weight-medium mb-4">Предпросмотр</p>
          <div class="mb-4">
            <p class="text-caption text-grey-darken-1">Название</p>
            <p class="text-body-2 font-weight-medium" style="color: #020617;">
              {{ form.title || 'Название курса' }}
            </p>
          </div>
          <div class="mb-4">
            <p class="text-caption text-grey-darken-1">Цена</p>
            <p class="text-h6 font-weight-bold" style="color: #020617;">
              {{ form.price ? `${form.price} ₽` : '0 ₽' }}
            </p>
          </div>
          <div class="mb-4">
            <p class="text-caption text-grey-darken-1">Категория</p>
            <v-chip size="x-small" color="green-darken-3" text-color="white" label>
              {{ form.category || 'Категория' }}
            </v-chip>
          </div>
          <div class="mb-4">
            <p class="text-caption text-grey-darken-1">Статус</p>
            <v-chip
              size="x-small"
              :color="form.isPublished ? 'green-darken-3' : 'grey-lighten-1'"
              text-color="white"
              label
            >
              {{ form.isPublished ? 'Опубликован' : 'Черновик' }}
            </v-chip>
          </div>
          <v-divider class="my-4" />
          <div>
            <p class="text-caption text-grey-darken-1">Описание</p>
            <p class="text-body-2">{{ form.description || 'Описание курса' }}</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'admin', layout: 'admin' })

const route = useRoute()
const router = useRouter()
const courseId = route.params.id

const categories = ['Базовый', 'Продвинутый', 'Спецкурс']

const form = reactive({
  title: '',
  description: '',
  price: 0,
  category: 'Базовый',
  duration: '',
  lessonsCount: 0,
  isPublished: false,
})

// Загрузка курса из БД
onMounted(async () => {
  if (courseId !== 'new') {
    try {
      const data = await $fetch(`/api/courses/${courseId}`)
      if (data.success && data.course) {
        Object.assign(form, {
          title: data.course.title,
          description: data.course.description || '',
          price: data.course.price || 0,
          category: data.course.category || 'Базовый',
          duration: data.course.duration || '',
          lessonsCount: data.course.lessonsCount || 0,
          isPublished: data.course.isPublished || false,
        })
      }
    } catch (e) {
      console.error('Ошибка загрузки курса:', e)
    }
  }
})

const saving = ref(false)

const saveCourse = async () => {
  saving.value = true
  try {
    console.log('📝 [Frontend] Сохранение курса:', form)
    
    const courseId = route.params.id as string
    
    const response = await $fetch('/api/admin/settings', {
      method: 'POST',
      body: {
        type: 'course-update',
        data: {
          id: courseId,
          title: form.title,
          description: form.description,
          slug: form.slug,
          price: form.price,
          category: form.category,
          duration: form.duration,
          lessonsCount: form.lessonsCount,
          isPublished: form.isPublished,
          image: form.image,
        },
      },
    })
    
    console.log('✅ [Frontend] Курс обновлен:', response.course.id)
    await router.push('/admin/courses')
  } catch (e: any) {
    console.error('❌ [Frontend] Ошибка сохранения:', e)
    alert('Ошибка: ' + (e.data?.message || 'Не удалось обновить курс'))
  } finally {
    saving.value = false
  }
}

useSeoMeta({
  title: 'Редактирование курса — Админка',
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
