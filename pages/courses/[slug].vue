<template>
  <v-app>
    <!-- Header -->
    <v-app-bar color="white" elevation="1">
      <v-container class="d-flex align-center">
        <v-btn icon to="/" class="mr-4">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <span class="text-h5 font-weight-bold" style="color: #8B5A6B;">Генетика Кроя</span>
        <v-spacer />
        <v-btn variant="text" href="tel:89132101662">Позвонить</v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container v-if="pending" class="py-16 text-center">
        <v-progress-circular indeterminate color="primary" size="64" />
      </v-container>

      <v-container v-else-if="error" class="py-16">
        <v-alert type="error" variant="tonal">
          Курс не найден
        </v-alert>
      </v-container>

      <div v-else>
        <!-- Hero Section -->
        <section class="course-hero" style="background: linear-gradient(135deg, #8B5A6B 0%, #D4A574 100%);">
          <v-container class="py-16 text-white">
            <v-row align="center">
              <v-col cols="12" md="7">
                <span class="text-subtitle-1 opacity-80">{{ course.category }}</span>
                <h1 class="text-h2 font-weight-bold mb-4">{{ course.title }}</h1>
                <p class="text-h6 opacity-90 mb-8">{{ course.description }}</p>
                <div class="d-flex flex-wrap ga-4 mb-8">
                  <div>
                    <div class="text-caption opacity-80">Длительность</div>
                    <div class="text-h6 font-weight-bold">{{ course.duration }}</div>
                  </div>
                  <div>
                    <div class="text-caption opacity-80">Уроков</div>
                    <div class="text-h6 font-weight-bold">{{ course.lessonsCount }}</div>
                  </div>
                  <div>
                    <div class="text-caption opacity-80">Цена</div>
                    <div class="text-h5 font-weight-bold">{{ course.priceDisplay }}</div>
                  </div>
                </div>
                <v-btn
                  color="white"
                  size="x-large"
                  href="https://vk.com/write-53091601"
                  target="_blank"
                  class="text-primary"
                >
                  Записаться на курс
                </v-btn>
              </v-col>
              <v-col cols="12" md="5">
                <v-img :src="course.image" aspect-ratio="1" cover rounded="lg" />
              </v-col>
            </v-row>
          </v-container>
        </section>

        <!-- Full Description -->
        <section class="py-16">
          <v-container>
            <v-row>
              <v-col cols="12" md="8">
                <div class="course-description text-body-1 mb-12">
                  <div v-html="formatDescription(course.fullDescription)" />
                </div>
              </v-col>
              <v-col cols="12" md="4">
                <v-card class="pa-6 sticky" style="top: 100px;">
                  <h3 class="text-h6 font-weight-bold mb-4">Что вы получите</h3>
                  <v-list class="bg-transparent">
                    <v-list-item v-for="item in course.includes" :key="item" density="compact" class="px-0">
                      <template #prepend>
                        <v-icon size="small" color="success" class="mr-2">mdi-check-circle</v-icon>
                      </template>
                      <v-list-item-title class="text-body-2">{{ item }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                  <v-divider class="my-6" />
                  <div class="text-h4 font-weight-bold mb-4" style="color: #8B5A6B;">
                    {{ course.priceDisplay }}
                  </div>
                  <v-btn
                    color="primary"
                    size="large"
                    block
                    href="https://vk.com/write-53091601"
                    target="_blank"
                  >
                    Записаться
                  </v-btn>
                  <v-btn
                    variant="outlined"
                    size="large"
                    block
                    href="tel:89132101662"
                    class="mt-2"
                  >
                    Позвонить
                  </v-btn>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </section>

        <!-- Other Courses -->
        <section class="py-16" style="background: #FAF8F5;">
          <v-container>
            <h2 class="text-h3 font-weight-bold mb-8">Другие курсы</h2>
            <v-row>
              <v-col v-for="other in otherCourses" :key="other.id" cols="12" md="4">
                <v-card class="h-100 cursor-pointer" @click="$router.push(`/courses/${other.slug}`)">
                  <v-img :src="other.image" height="200" cover />
                  <v-card-text>
                    <h3 class="text-h6 font-weight-bold mb-2">{{ other.title }}</h3>
                    <p class="text-body-2 text-medium-emphasis mb-4">{{ other.description }}</p>
                    <div class="d-flex justify-space-between align-center">
                      <span class="font-weight-bold" style="color: #8B5A6B;">{{ other.priceDisplay }}</span>
                      <v-btn icon size="small" color="primary">
                        <v-icon>mdi-arrow-right</v-icon>
                      </v-btn>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </section>

        <!-- CTA Section -->
        <section class="py-16" style="background: linear-gradient(135deg, #8B5A6B 0%, #D4A574 100%);">
          <v-container class="text-center text-white">
            <h2 class="text-h3 font-weight-bold mb-4">Готовы начать?</h2>
            <p class="text-h6 mb-8 opacity-80">
              Напишите нам в VK или позвоните, чтобы узнать о ближайшем наборе
            </p>
            <div class="d-flex flex-wrap justify-center ga-4">
              <v-btn
                color="white"
                size="x-large"
                href="https://vk.com/write-53091601"
                target="_blank"
                class="text-primary"
              >
                Написать в VK
              </v-btn>
              <v-btn
                variant="outlined"
                color="white"
                size="x-large"
                href="tel:89132101662"
              >
                8 913 210-16-62
              </v-btn>
            </div>
          </v-container>
        </section>
      </div>

      <!-- Footer -->
      <v-footer class="bg-grey-darken-4 text-white">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <h4 class="text-h6 font-weight-bold mb-2">Генетика Кроя</h4>
              <p class="text-body-2 text-grey-lighten-2">
                Курсы кройки и шитья в Барнауле<br>
                с 2014 года
              </p>
            </v-col>
            <v-col cols="12" md="4">
              <h4 class="text-h6 font-weight-bold mb-2">Контакты</h4>
              <p class="text-body-2 text-grey-lighten-2">
                тел: 8 913 210-16-62<br>
                г. Барнаул, ул. Профинтерна 7А
              </p>
            </v-col>
            <v-col cols="12" md="4">
              <h4 class="text-h6 font-weight-bold mb-2">Соцсети</h4>
              <v-btn
                icon
                href="https://vk.com/genetikakroya22"
                target="_blank"
                variant="text"
                color="white"
              >
                <v-icon>mdi-vk</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-divider class="my-4" />
          <p class="text-center text-caption text-grey-lighten-3">
            © {{ new Date().getFullYear() }} Генетика Кроя. Все права защищены.
          </p>
        </v-container>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const { data: course, pending, error } = await useFetch(
  `/api/courses/${route.params.slug}`
)

const { data: allCourses } = await useFetch('/api/courses')

const otherCourses = computed(() => {
  return allCourses.value?.courses?.filter(
    (c: any) => c.slug !== route.params.slug
  ) || []
})

const formatDescription = (text: string) => {
  if (!text) return ''
  return text
    .split('\n')
    .map(line => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return `<strong>${line.replace(/\*\*/g, '')}</strong>`
      }
      if (line.startsWith('- ')) {
        return `<li>${line.substring(2)}</li>`
      }
      if (line.trim()) {
        return `<p>${line}</p>`
      }
      return ''
    })
    .join('')
}

useSeoMeta({
  title: () => `${course.value?.title} — Генетика Кроя`,
  description: () => course.value?.description,
})
</script>

<style scoped>
.course-description {
  line-height: 1.8;
}

.course-description :deep(strong) {
  color: #8B5A6B;
  font-weight: 600;
}

.course-description :deep(li) {
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
}

.sticky {
  position: sticky;
  top: 100px;
}

.cursor-pointer {
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.cursor-pointer:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
</style>