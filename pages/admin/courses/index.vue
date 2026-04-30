<template>
  <div>
    <div class="d-flex align-center mb-6">
      <div>
        <h1 class="text-h4 font-weight-bold mb-1" style="color: #020617;">Курсы</h1>
        <p class="text-body-2 text-grey-darken-1">Управление курсами школы</p>
      </div>
      <v-spacer />
      <v-btn
              color="green-darken-3"
              to="/admin/courses/new"
              variant="flat"
              size="small"
              style="border-radius: 8px;"
      >
        <v-icon start size="18">mdi-plus</v-icon>
        Создать
      </v-btn>
    </div>

    <v-table class="courses-table">
      <thead>
        <tr>
          <th class="text-left text-caption text-grey-darken-1 font-weight-medium">Название</th>
          <th class="text-left text-caption text-grey-darken-1 font-weight-medium">Категория</th>
          <th class="text-left text-caption text-grey-darken-1 font-weight-medium">Цена</th>
          <th class="text-left text-caption text-grey-darken-1 font-weight-medium">Статус</th>
          <th class="text-right text-caption text-grey-darken-1 font-weight-medium">Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course.id">
          <td class="font-weight-medium" style="color: #020617;">{{ course.title }}</td>
          <td class="text-grey-darken-2">{{ course.category }}</td>
          <td class="text-grey-darken-2">{{ course.priceDisplay }}</td>
          <td>
            <v-chip
              :color="course.isPublished ? 'green-darken-3' : 'grey-lighten-1'"
              text-color="white"
              size="x-small"
              label
            >
              {{ course.isPublished ? 'Опубликован' : 'Черновик' }}
            </v-chip>
          </td>
          <td class="text-right">
            <v-btn
              icon
              size="x-small"
              variant="text"
              color="grey-darken-2"
              :to="`/admin/courses/${course.id}`"
              class="mr-1"
            >
              <v-icon size="18">mdi-pencil-outline</v-icon>
            </v-btn>
            <v-btn
              icon
              size="x-small"
              variant="text"
              color="grey-darken-2"
              @click="deleteCourse(course.id)"
            >
              <v-icon size="18">mdi-delete-outline</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'admin', layout: 'admin' })

const courses = ref([])
const loading = ref(true)

// Загрузка курсов из БД
onMounted(async () => {
  try {
    const data = await $fetch('/api/courses')
    if (data.success) {
      courses.value = data.courses.map(c => ({
        id: c.id,
        title: c.title,
        category: c.category || '—',
        priceDisplay: c.price ? `${c.price.toLocaleString('ru-RU')} ₽` : '—',
        isPublished: c.isPublished,
      }))
    }
  } catch (e) {
    console.error('Ошибка загрузки курсов:', e)
  } finally {
    loading.value = false
  }
})

const deleteCourse = async (id: string) => {
  if (!confirm('Удалить курс? Это действие нельзя отменить.')) return
  
  try {
    await $fetch('/api/admin/settings', {
      method: 'POST',
      body: {
        type: 'course-delete',
        data: { id }
      }
    })
    
    courses.value = courses.value.filter(c => c.id !== id)
    console.log('✅ Курс удален:', id)
  } catch (e: any) {
    console.error('❌ Ошибка удаления курса:', e)
    alert('Ошибка: ' + (e.data?.message || 'Не удалось удалить курс'))
  }
}

useSeoMeta({
  title: 'Курсы — Админка',
})
</script>

<style scoped>
.courses-table {
  border: 1px solid #E2E8F0;
  border-radius: 12px;
}

.courses-table :deep(th) {
  border-bottom: 1px solid #E2E8F0;
  padding: 12px 16px;
}

.courses-table :deep(td) {
  padding: 12px 16px;
  border-bottom: 1px solid #F1F5F9;
}

.courses-table :deep(tr:last-child td) {
  border-bottom: none;
}

.v-application {
  font-family: 'Inter', sans-serif !important;
}
</style>
