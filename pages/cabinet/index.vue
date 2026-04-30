<template>
  <v-app>
    <v-app-bar color="white" elevation="0" class="border-b">
      <v-container class="d-flex align-center">
        <v-btn icon to="/" class="mr-3">
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <div class="text-h6 font-weight-bold" style="color: #00DC82;">
          ✂️ Личный кабинет
        </div>
        <v-spacer />
        <v-btn icon to="/profile" class="mr-2">
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn variant="text" size="small" @click="logout">Выйти</v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-4">
      <v-container class="py-8">
        <h1 class="text-h4 font-weight-bold mb-6">Мои курсы</h1>

        <v-row>
          <v-col v-for="course in courses" :key="course.id" cols="12" md="6" lg="4">
            <v-card class="pa-4" style="border-radius: 12px; cursor: pointer;" @click="selectCourse(course)">
              <div class="mb-3">
                <v-chip size="small" color="green-darken-3" text-color="white">
                  {{ course.progress }}% завершено
                </v-chip>
              </div>

              <h3 class="text-h6 font-weight-bold mb-2">{{ course.title }}</h3>
              <p class="text-body-2 text-grey-darken-1 mb-3">{{ course.description }}</p>

              <v-progress-linear :value="course.progress" color="green-darken-3" class="mb-3" />

              <div class="d-flex justify-space-between align-center">
                <span class="text-caption text-grey-darken-1">{{ course.completedLessons }}/{{ course.totalLessons }} уроков</span>
                <v-icon size="20" color="green-darken-3">mdi-arrow-right</v-icon>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- Просмотр курса -->
        <v-dialog v-model="showCourseDialog" max-width="900">
          <v-card v-if="selectedCourse" style="border-radius: 12px;">
            <v-card-title class="pa-6 pb-2">
              <div class="d-flex align-center justify-space-between">
                <h2 class="text-h5 font-weight-bold">{{ selectedCourse.title }}</h2>
                <v-btn icon variant="text" @click="showCourseDialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </div>
            </v-card-title>

            <v-card-text class="pa-6">
              <h3 class="text-h6 font-weight-bold mb-4">Уроки</h3>

              <v-list>
                <v-list-item v-for="(lesson, index) in selectedCourse.lessons" :key="index" class="mb-2">
                  <template #prepend>
                    <v-icon :color="lesson.completed ? 'green-darken-3' : 'grey-lighten-1'">
                      {{ lesson.completed ? 'mdi-check-circle' : 'mdi-circle-outline' }}
                    </v-icon>
                  </template>

                  <v-list-item-title class="font-weight-medium">
                    {{ lesson.title }}
                  </v-list-item-title>

                  <v-list-item-subtitle>
                    {{ lesson.duration }} мин
                  </v-list-item-subtitle>

                  <template #append>
                    <v-btn
                      size="small"
                      variant="text"
                      color="green-darken-3"
                      :disabled="!lesson.available"
                      @click="watchLesson(lesson)"
                    >
                      {{ lesson.completed ? 'Пересмотреть' : 'Смотреть' }}
                    </v-btn>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const showCourseDialog = ref(false)
const selectedCourse = ref(null)

const courses = ref([
  {
    id: '1',
    title: 'Технология пошива',
    description: 'Основы шитья для начинающих',
    progress: 65,
    completedLessons: 13,
    totalLessons: 20,
    lessons: [
      { title: 'Введение в шитье', duration: 15, completed: true, available: true },
      { title: 'Выбор ткани и инструментов', duration: 20, completed: true, available: true },
      { title: 'Основные швы', duration: 25, completed: true, available: true },
      { title: 'Пошив юбки', duration: 30, completed: false, available: true },
      { title: 'Пошив брюк', duration: 35, completed: false, available: false },
    ],
  },
  {
    id: '2',
    title: 'Дамское бельё',
    description: 'Конструирование и пошив белья',
    progress: 30,
    completedLessons: 3,
    totalLessons: 10,
    lessons: [
      { title: 'Основы конструирования', duration: 20, completed: true, available: true },
      { title: 'Выбор материалов', duration: 15, completed: true, available: true },
      { title: 'Пошив лифчика', duration: 40, completed: true, available: true },
      { title: 'Пошив трусиков', duration: 30, completed: false, available: true },
      { title: 'Отделка и украшение', duration: 25, completed: false, available: false },
    ],
  },
])

const selectCourse = (course: any) => {
  selectedCourse.value = course
  showCourseDialog.value = true
}

const watchLesson = (lesson: any) => {
  console.log('Просмотр урока:', lesson.title)
  // TODO: Открыть видеоплеер
}

const logout = () => {
  navigateTo('/')
}

useSeoMeta({
  title: 'Личный кабинет',
})
</script>
