<template>
  <v-app>
    <!-- Navigation -->
    <v-app-bar color="white" elevation="0" class="border-b">
      <v-container class="d-flex align-center">
        <div class="text-h6 font-weight-bold" style="color: #6366F1;">
          ✂️ {{ siteName }}
        </div>
        <v-spacer />
        <v-btn variant="text" href="#courses" class="text-body-2">Курсы</v-btn>
        <v-btn variant="text" href="#about" class="text-body-2">О нас</v-btn>
        <v-btn variant="text" href="#contacts" class="text-body-2">Контакты</v-btn>
        <v-btn color="primary" variant="flat" href="tel:89132101662" class="ml-4">
          Позвонить
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <!-- Hero Section -->
      <section class="hero-section py-20">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="8" class="text-center">
              <div class="mb-6">
                <h1 class="text-h2 font-weight-800 mb-4 gradient-text">
                  Шейте одежду<br>как вторая кожа
                </h1>
              </div>
              
              <p class="text-h6 text-medium-emphasis mb-8" style="max-width: 600px; margin: 0 auto; line-height: 1.6;">
                Методика точного кроя по Злачевской. Научим вы создавать идеальную посадку без примерок и подгонок.
              </p>

              <!-- VK Login Button -->
              <div id="vk-login-container" class="mb-8"></div>

              <div class="d-flex flex-wrap justify-center ga-4 mb-12">
                <v-btn 
                  color="primary" 
                  size="x-large" 
                  href="#courses"
                  class="px-8"
                  style="border-radius: 12px; font-weight: 600;"
                >
                  Выбрать курс
                </v-btn>
                <v-btn 
                  variant="outlined" 
                  size="x-large"
                  href="https://vk.com/write-53091601"
                  target="_blank"
                  class="px-8"
                  style="border-radius: 12px; font-weight: 600;"
                >
                  Написать в VK
                </v-btn>
              </div>

              <v-row justify="center" class="mt-12">
                <v-col cols="auto" class="text-center">
                  <div class="text-h4 font-weight-800" style="color: #6366F1;">12+</div>
                  <p class="text-body-2 text-medium-emphasis">лет опыта</p>
                </v-col>
                <v-divider vertical class="mx-8" />
                <v-col cols="auto" class="text-center">
                  <div class="text-h4 font-weight-800" style="color: #EC4899;">500+</div>
                  <p class="text-body-2 text-medium-emphasis">выпускниц</p>
                </v-col>
                <v-divider vertical class="mx-8" />
                <v-col cols="auto" class="text-center">
                  <div class="text-h4 font-weight-800" style="color: #06B6D4;">5.0★</div>
                  <p class="text-body-2 text-medium-emphasis">рейтинг</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Problems Section -->
      <section class="py-20" style="background: linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%);">
        <v-container>
          <h2 class="text-h3 font-weight-800 text-center mb-12 gradient-title">
            Знакомые проблемы?
          </h2>
          <v-row>
            <v-col v-for="(problem, i) in problems" :key="i" cols="12" sm="6" md="3">
              <v-card 
                class="pa-6 h-100 glass-card" 
                elevation="0"
              >
                <v-icon size="48" :color="problem.color" class="mb-4">{{ problem.icon }}</v-icon>
                <p class="text-body-1 font-weight-600">{{ problem.title }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Courses Section -->
      <section id="courses" class="py-20">
        <v-container>
          <h2 class="text-h3 font-weight-800 text-center mb-12 gradient-title">
            Наши курсы
          </h2>
          <v-row>
            <v-col v-for="course in courses" :key="course.id" cols="12" md="4">
              <v-card 
                class="h-100 course-card" 
                elevation="0"
                @mouseenter="hoveredCourse = course.id"
                @mouseleave="hoveredCourse = null"
              >
                <div class="course-image-wrapper">
                  <v-img
                    :src="course.image"
                    height="240"
                    cover
                    class="course-image"
                  />
                  <div class="course-overlay" />
                  <v-chip
                    :color="course.color"
                    text-color="white"
                    class="ma-4 chip-badge"
                  >
                    {{ course.category }}
                  </v-chip>
                </div>

                <v-card-text class="pa-6">
                  <h3 class="text-h6 font-weight-800 mb-3">{{ course.title }}</h3>
                  <p class="text-body-2 text-medium-emphasis mb-6 line-clamp-2">
                    {{ course.description }}
                  </p>

                  <div class="mb-6">
                    <div class="d-flex align-center mb-2">
                      <v-icon size="18" color="primary" class="mr-2">mdi-clock-outline</v-icon>
                      <span class="text-caption">{{ course.duration }}</span>
                    </div>
                    <div class="d-flex align-center">
                      <v-icon size="18" color="primary" class="mr-2">mdi-book-outline</v-icon>
                      <span class="text-caption">{{ course.lessonsCount }} уроков</span>
                    </div>
                  </div>
                </v-card-text>

                <v-divider />
                <v-card-actions class="pa-6 d-flex justify-space-between align-center">
                  <span class="text-h6 font-weight-800 price-text">
                    {{ course.priceDisplay }}
                  </span>
                  <v-btn 
                    icon 
                    size="small" 
                    color="primary"
                    @click="$router.push(`/courses/${course.slug}`)"
                  >
                    <v-icon>mdi-arrow-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Results Section -->
      <section class="py-20 gradient-bg-primary">
        <v-container class="text-white">
          <h2 class="text-h3 font-weight-800 text-center mb-12">
            Результаты наших учениц
          </h2>
          <v-row justify="center">
            <v-col v-for="result in results" :key="result.title" cols="12" sm="6" md="3">
              <div class="text-center">
                <v-icon size="64" class="mb-4">{{ result.icon }}</v-icon>
                <p class="text-h6 font-weight-800 mb-2">{{ result.title }}</p>
                <p class="text-body-2 opacity-80">{{ result.desc }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- About Section -->
      <section id="about" class="py-20">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="5" class="text-center mb-8 mb-md-0">
              <v-img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
                aspect-ratio="1"
                cover
                rounded="xl"
                class="mx-auto shadow-lg"
                max-width="300"
              />
            </v-col>
            <v-col cols="12" md="7" class="pl-md-8">
              <h2 class="text-h3 font-weight-800 mb-4 gradient-title">
                Людмила Лукьянова
              </h2>
              <p class="text-h6 text-medium-emphasis mb-6">
                Конструктор-модельер швейных изделий
              </p>
              <p class="text-body-1 mb-6 line-height-lg">
                Мастер с полувековым опытом. Научу шить одежду сидящую как вторая кожа! Я умею множить радость✨
              </p>
              <v-list class="bg-transparent">
                <v-list-item class="px-0 mb-2">
                  <template #prepend>
                    <v-icon color="primary">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title>50+ лет опыта в швейном деле</v-list-item-title>
                </v-list-item>
                <v-list-item class="px-0 mb-2">
                  <template #prepend>
                    <v-icon color="primary">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title>Обучение с 2014 года</v-list-item-title>
                </v-list-item>
                <v-list-item class="px-0">
                  <template #prepend>
                    <v-icon color="primary">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title>Авторская методика по Злачевской</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- CTA Section -->
      <section class="py-20 gradient-bg-secondary">
        <v-container class="text-center text-white">
          <h2 class="text-h3 font-weight-800 mb-4">
            Начните обучение сегодня
          </h2>
          <p class="text-h6 mb-8 opacity-90">
            Первый шаг к идеальной посадке одежды
          </p>
          <div class="d-flex flex-wrap justify-center ga-4">
            <v-btn
              color="white"
              size="x-large"
              href="https://vk.com/write-53091601"
              target="_blank"
              class="text-primary px-8"
              style="border-radius: 12px; font-weight: 600;"
            >
              Написать в VK
            </v-btn>
            <v-btn
              variant="outlined"
              color="white"
              size="x-large"
              href="tel:89132101662"
              class="px-8"
              style="border-radius: 12px; font-weight: 600;"
            >
              Позвонить: 8 913 210-16-62
            </v-btn>
          </div>
        </v-container>
      </section>

      <!-- Contacts Section -->
      <section id="contacts" class="py-20" style="background: #F8FAFC;">
        <v-container>
          <h2 class="text-h3 font-weight-800 text-center mb-12 gradient-title">
            Контакты
          </h2>
          <v-row justify="center">
            <v-col cols="12" md="8">
              <v-card 
                class="pa-8 contact-card" 
                elevation="0"
              >
                <v-row>
                  <v-col cols="12" sm="6">
                    <h3 class="text-h6 font-weight-800 mb-6">Свяжитесь с нами</h3>
                    <v-list class="bg-transparent">
                      <v-list-item class="px-0 mb-4">
                        <template #prepend>
                          <v-icon color="primary" size="24">mdi-phone</v-icon>
                        </template>
                        <v-list-item-title>
                          <a href="tel:89132101662" class="text-decoration-none contact-link">
                            8 913 210-16-62
                          </a>
                          <br><small class="text-medium-emphasis">Людмила</small>
                        </v-list-item-title>
                      </v-list-item>
                      <v-list-item class="px-0 mb-4">
                        <template #prepend>
                          <v-icon color="primary" size="24">mdi-phone</v-icon>
                        </template>
                        <v-list-item-title>
                          <a href="tel:89132790097" class="text-decoration-none contact-link">
                            8 913 279-00-97
                          </a>
                          <br><small class="text-medium-emphasis">Юлия</small>
                        </v-list-item-title>
                      </v-list-item>
                      <v-list-item class="px-0">
                        <template #prepend>
                          <v-icon color="primary" size="24">mdi-email</v-icon>
                        </template>
                        <v-list-item-title>
                          <a href="mailto:missispip@mail.ru" class="text-decoration-none contact-link">
                            missispip@mail.ru
                          </a>
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <h3 class="text-h6 font-weight-800 mb-6">Адрес</h3>
                    <v-list class="bg-transparent">
                      <v-list-item class="px-0 mb-4">
                        <template #prepend>
                          <v-icon color="primary" size="24">mdi-map-marker</v-icon>
                        </template>
                        <v-list-item-title>
                          ул. Профинтерна 7А<br>
                          Барнаул
                        </v-list-item-title>
                      </v-list-item>
                      <v-list-item class="px-0">
                        <template #prepend>
                          <v-icon color="primary" size="24">mdi-clock</v-icon>
                        </template>
                        <v-list-item-title>
                          Пн-Сб: 9:00 - 19:30
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                    <v-btn
                      color="primary"
                      variant="tonal"
                      href="https://vk.com/genetikakroya22"
                      target="_blank"
                      class="mt-4"
                      style="border-radius: 12px;"
                    >
                      <v-icon start>mdi-vk</v-icon>
                      Группа ВКонтакте
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Footer -->
      <v-footer class="bg-slate-900 text-white py-12">
        <v-container>
          <v-row>
            <v-col cols="12" md="4" class="mb-6 mb-md-0">
              <h4 class="text-h6 font-weight-800 mb-3">{{ siteName }}</h4>
              <p class="text-body-2 text-grey-lighten-2">
                Курсы кройки и шитья в Барнауле с 2014 года. Методика точного кроя по Злачевской.
              </p>
            </v-col>
            <v-col cols="12" md="4" class="mb-6 mb-md-0">
              <h4 class="text-h6 font-weight-800 mb-3">Быстрые ссылки</h4>
              <v-list class="bg-transparent" density="compact">
                <v-list-item to="/" class="pa-0 text-grey-lighten-2">Главная</v-list-item>
                <v-list-item href="#courses" class="pa-0 text-grey-lighten-2">Курсы</v-list-item>
                <v-list-item href="#about" class="pa-0 text-grey-lighten-2">О нас</v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="4">
              <h4 class="text-h6 font-weight-800 mb-3">Соцсети</h4>
              <div class="d-flex ga-2">
                <v-btn
                  icon
                  href="https://vk.com/genetikakroya22"
                  target="_blank"
                  variant="text"
                  color="white"
                  size="small"
                >
                  <v-icon>mdi-vk</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <v-divider class="my-6" />
          <p class="text-center text-caption text-grey-lighten-3">
            © {{ new Date().getFullYear() }} {{ siteName }}. Все права защищены.
          </p>
        </v-container>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const hoveredCourse = ref(null)

const problems = [
  { icon: 'mdi-alert-circle-outline', title: 'Выкройки не садятся', color: 'error' },
  { icon: 'mdi-repeat', title: 'Много примерок', color: 'warning' },
  { icon: 'mdi-puzzle-outline', title: 'Сложно разобраться', color: 'info' },
  { icon: 'mdi-image-broken-variant', title: 'Не как на картинке', color: 'secondary' },
]

const courses = [
  {
    id: 1,
    title: 'Технология пошива',
    slug: 'tekhnologiya-poshiva',
    category: 'Базовый',
    color: '#6366F1',
    price: 15000,
    priceDisplay: 'от 15 000 ₽',
    description: 'Основы шитья для начинающих. Юбка, брюки, платье.',
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800',
    duration: '2 месяца',
    lessonsCount: 16,
  },
  {
    id: 2,
    title: 'Мастер конструирования',
    slug: 'master-konstruirovaniya',
    category: 'Продвинутый',
    color: '#EC4899',
    price: 25000,
    priceDisplay: 'от 25 000 ₽',
    description: 'Методика точного кроя по Злачевской. Диплом.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    duration: '3 месяца',
    lessonsCount: 24,
  },
  {
    id: 3,
    title: 'Дамское бельё',
    slug: 'damskoe-bele',
    category: 'Спецкурс',
    color: '#06B6D4',
    price: 12000,
    priceDisplay: 'от 12 000 ₽',
    description: 'Конструирование и пошив красивого белья.',
    image: 'https://images.unsplash.com/photo-1617331721458-bd3bd1aa1dd8?w=800',
    duration: '1.5 месяца',
    lessonsCount: 12,
  },
]

const results = [
  { icon: 'mdi-hanger', title: 'Гардероб', desc: 'Шьют для себя и семьи' },
  { icon: 'mdi-store', title: 'Ателье', desc: 'Открывают свои мастерские' },
  { icon: 'mdi-briefcase', title: 'Карьера', desc: 'Работают конструкторами' },
  { icon: 'mdi-trending-up', title: 'Доход', desc: 'Принимают заказы' },
]

useSeoMeta({
  title: '{{ siteName }} — Курсы кройки и шитья в Барнауле',
  description: 'Курсы кройки и шитья в Барнауле. Методика точного кроя по Злачевской. С 2014 года.',
})

// VK ID Login
onMounted(() => {
  if ('VKIDSDK' in window) {
    const VKID = window.VKIDSDK

    VKID.Config.init({
      app: 54572316,
      redirectUrl: 'https://kroyfit.ru',
      responseMode: VKID.ConfigResponseMode.Callback,
      source: VKID.ConfigSource.LOWCODE,
      scope: '',
    })

    const oneTap = new VKID.OneTap()

    oneTap.render({
      container: document.getElementById('vk-login-container'),
      showAlternativeLogin: true,
    })
      .on(VKID.WidgetEvents.ERROR, vkidOnError)
      .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, (payload) => {
        const code = payload.code
        const deviceId = payload.device_id

        VKID.Auth.exchangeCode(code, deviceId)
          .then(vkidOnSuccess)
          .catch(vkidOnError)
      })
  }
})

function vkidOnSuccess(data: any) {
  // data.user - данные пользователя VK
  // data.access_token - токен
  console.log('VK Login Success:', data)
  
  // Сохраняем пользователя в БД через API
  if (data.user) {
    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        vkId: data.user.id,
        name: `${data.user.first_name} ${data.user.last_name}`,
        email: data.user.email || '',
        avatar: data.user.avatar,
      }),
    }).then(() => {
      // Перезагружаем страницу или обновляем состояние
      window.location.reload()
    })
  }
}

function vkidOnError(error: any) {
  console.error('VK Login Error:', error)
}
</script>

<style scoped>
.v-application {
  font-family: 'Inter', sans-serif !important;
}

.text-h1, .text-h2, .text-h3, .text-h4, .text-h5, .text-h6 {
  font-family: 'Playfair Display', serif !important;
}

.hero-section {
  background: linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%);
}

.border-b {
  border-bottom: 1px solid #E2E8F0;
}

.gradient-text {
  background: linear-gradient(135deg, #6366F1 0%, #EC4899 50%, #06B6D4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
}

.gradient-title {
  background: linear-gradient(135deg, #6366F1 0%, #EC4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-bg-primary {
  background: linear-gradient(135deg, #6366F1 0%, #EC4899 100%);
}

.gradient-bg-secondary {
  background: linear-gradient(135deg, #6366F1 0%, #06B6D4 100%);
}

.glass-card {
  background: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  border-radius: 16px;
}

.course-card {
  border: 1px solid #E2E8F0 !important;
  border-radius: 16px;
  transition: all 0.3s ease;
}

.course-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
}

.course-image-wrapper {
  position: relative;
  overflow: hidden;
  height: 240px;
}

.course-image {
  transition: transform 0.3s ease;
}

.course-card:hover .course-image {
  transform: scale(1.05);
}

.course-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1));
}

.chip-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-height-lg {
  line-height: 1.8;
}

.contact-card {
  border: 1px solid #E2E8F0 !important;
  border-radius: 16px;
}

.contact-link {
  color: #6366F1;
  font-weight: 600;
  transition: color 0.2s;
}

.contact-link:hover {
  color: #EC4899;
}

.price-text {
  color: #6366F1;
}

.shadow-lg {
  box-shadow: 0 20px 60px rgba(99, 102, 241, 0.2);
}

.bg-slate-900 {
  background-color: #0F172A;
}
</style>
