<template>
  <div class="course-page">
    <!-- Loading State -->
    <div v-if="pending" class="loading-container">
      <div class="spinner"></div>
      <p>Загрузка курса...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error || !course" class="error-container">
      <div class="container-max">
        <h1>Курс не найден</h1>
        <p>К сожалению, этот курс не существует или был удален.</p>
        <NuxtLink to="/" class="btn-primary">Вернуться на главную</NuxtLink>
      </div>
    </div>

    <!-- Course Content -->
    <div v-else>
      <!-- Hero Section -->
      <section class="course-hero">
        <div class="container-max">
          <div class="hero-content">
            <div class="hero-left">
              <span class="hero-tag">{{ course.category }}</span>
              <h1 class="hero-title">{{ course.title }}</h1>
              
              <div class="course-meta">
                <div class="meta-item">
                  <span class="meta-icon">⏱️</span>
                  <div>
                    <div class="meta-label">Длительность</div>
                    <div class="meta-value">{{ course.duration }}</div>
                  </div>
                </div>
                <div class="meta-item">
                  <span class="meta-icon">📚</span>
                  <div>
                    <div class="meta-label">Уроков</div>
                    <div class="meta-value">{{ course.lessonsCount }}</div>
                  </div>
                </div>
                <div class="meta-item">
                  <span class="meta-icon">💰</span>
                  <div>
                    <div class="meta-label">Цена</div>
                    <div class="meta-value">{{ course.price }} ₽</div>
                  </div>
                </div>
              </div>

              <div class="hero-buttons">
                <button 
                  v-if="!isLoggedIn" 
                  class="btn-primary"
                  @click="showLoginModal = true"
                >
                  Купить курс
                </button>
                <button 
                  v-else-if="!isPurchased" 
                  class="btn-primary"
                  @click="handlePurchase"
                  :disabled="purchasing"
                >
                  {{ purchasing ? 'Создание платежа...' : 'Купить курс' }}
                </button>
                <div v-else class="purchased-badge">
                  <div class="purchased-badge__icon">✓</div>
                  <div class="purchased-badge__text">
                    <span class="purchased-badge__title">Курс приобретён</span>
                    <span class="purchased-badge__sub">Вы уже записаны на этот курс</span>
                  </div>
                </div>
                <a href="tel:89132101662" class="btn-outline">
                  Позвонить
                </a>
              </div>
            </div>

            <div class="hero-right">
              <div class="course-image-wrapper">
                <img 
                  v-if="course.image" 
                  :src="course.image" 
                  :alt="course.title"
                  class="course-image"
                >
                <div v-else class="course-image-placeholder">
                  📚
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Full Description -->
      <section class="course-details">
        <div class="container-max">
          <div class="details-grid">
            <div class="details-main">
              <h2>Описание курса</h2>
              <div class="course-description" v-html="formatDescription(course.fullDescription || course.description)"></div>
            </div>

            <div class="details-sidebar">
              <div class="sidebar-card">
                <h3>Что вы получите</h3>
                <ul class="benefits-list">
                  <li v-for="benefit in course.benefits" :key="benefit">
                    <span class="benefit-icon">✓</span>
                    {{ benefit }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Other Courses -->
      <section class="other-courses" v-if="otherCourses.length > 0">
        <div class="container-max">
          <h2>Другие курсы</h2>
          <div class="courses-grid">
            <NuxtLink 
              v-for="other in otherCourses" 
              :key="other.id"
              :to="`/courses/${other.slug}`"
              class="course-card-link"
            >
              <div class="course-card">
                <div class="card-header">
                  <h3>{{ other.title }}</h3>
                  <span class="card-level">{{ other.category }}</span>
                </div>
                <p class="card-description">{{ other.description }}</p>
                <div class="card-footer">
                  <span class="card-price">{{ other.price }} ₽</span>
                  <span class="card-arrow">→</span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container-max">
          <h2>Готовы начать обучение?</h2>
          <p>Свяжитесь с нами, чтобы узнать о ближайшем наборе на курс</p>
          <div class="cta-buttons">
            <a href="https://vk.com/write-53091601" target="_blank" class="btn-primary">
              Купить курс
            </a>
            <a href="tel:89132101662" class="btn-outline">
              8 913 210-16-62
            </a>
          </div>
        </div>
      </section>
    </div>

    <!-- Modal for login required -->
    <div v-if="showLoginModal" class="modal-overlay" @click="showLoginModal = false">
      <div class="modal-content" @click.stop>
        <h3 class="modal-title">Вход в аккаунт</h3>
        <p class="modal-text">Для покупки курса необходимо войти через ВКонтакте</p>
        <div id="vk-login-modal"></div>
        <button 
          class="btn-outline" 
          style="margin-top: 1rem; color: var(--color-dark); border-color: var(--color-dark);"
          @click="showLoginModal = false"
        >
          Отмена
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

// Состояние авторизации и покупки
const isLoggedIn = ref(false)
const isPurchased = ref(false)
const purchasing = ref(false)
const showLoginModal = ref(false)
const currentUser = ref<any>(null)

// Проверяем авторизацию при загрузке
onMounted(async () => {
  console.log('🔍 [Auth] Проверяем авторизацию...')
  try {
    const userData = await $fetch('/api/user/me')
    if (userData) {
      isLoggedIn.value = true
      currentUser.value = userData
      console.log('✅ [Auth] Пользователь авторизован:', userData.name)
      
      // Проверяем, купил ли пользователь этот курс
      const purchases = await $fetch('/api/user/purchases')
      if (purchases && purchases.purchases) {
        isPurchased.value = purchases.purchases.some(
          (p: any) => p.courseId === route.params.slug && p.status === 'completed'
        )
        console.log('🛒 [Purchase] Курс уже куплен:', isPurchased.value)
      }
    }
  } catch (e) {
    console.log('ℹ️ [Auth] Пользователь не авторизован')
    isLoggedIn.value = false
  }
})

// Инициализация VK ID виджета в модальном окне
const initVkModalWidget = () => {
  if (!('VKIDSDK' in window)) return
  
  const VKID = (window as any).VKIDSDK
  const container = document.getElementById('vk-login-modal')
  
  if (!container) return
  
  // Очищаем контейнер перед инициализацией
  container.innerHTML = ''
  
  VKID.Config.init({
    app: parseInt(import.meta.env.VK_APP_ID || '54572308'),
    redirectUrl: import.meta.env.VK_REDIRECT_URL || 'https://kroyfit.ru',
    responseMode: VKID.ConfigResponseMode.Callback,
    source: VKID.ConfigSource.LOWCODE,
    scope: '',
  })

  const oneTap = new VKID.OneTap()

  oneTap.render({
    container: container,
    showAlternativeLogin: true
  })
  .on(VKID.WidgetEvents.ERROR, (error: any) => {
    console.error('VK ID Error:', error)
  })
  .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, async function (payload: any) {
    console.log('✅ [VK] Получены данные:', JSON.stringify(payload))

    try {
      // Используем SDK для обмена кода на токены
      const VKID = (window as any).VKIDSDK
      const tokenResponse = await VKID.Auth.exchangeCode(payload.code, payload.device_id)
      
      if (tokenResponse.access_token) {
        // Получаем данные пользователя
        const userInfo = await VKID.Auth.userInfo(tokenResponse.access_token)
        
        // Данные находятся внутри user объекта
        const userData = userInfo.user || userInfo
        
        // Отправляем данные на сервер
        const response = await $fetch('/api/auth/vk', {
          method: 'POST',
          body: { 
            vkId: userData.user_id,
            name: userData.first_name + (userData.last_name ? ' ' + userData.last_name : ''),
            avatar: userData.avatar || null,
          }
        })
        
        if (response.success) {
          currentUser.value = response.user
          isLoggedIn.value = true
          showLoginModal.value = false
          window.location.reload()
        }
      }
    } catch (e: any) {
      console.error('❌ [VK] Ошибка авторизации:', e)
      alert('Ошибка авторизации: ' + (e.message || 'Неизвестная ошибка'))
    }
  })
}

// Следим за изменением showLoginModal и инициализируем виджет
watch(showLoginModal, (newVal) => {
  if (newVal) {
    // Используем nextTick чтобы дождаться рендеринга DOM
    nextTick(() => {
      initVkModalWidget()
    })
  }
})

// Обработка покупки
const handlePurchase = async () => {
  if (!course.value) return
  
  console.log('🛒 [Purchase] Начинаем покупку курса:', course.value.title)
  console.log('🛒 [Purchase] ID курса:', course.value.id)
  
  purchasing.value = true
  try {
    console.log('🟡 [Purchase] Отправляем запрос на создание платежа...')
    
    const response = await $fetch('/api/payments/create', {
      method: 'POST',
      body: {
        courseId: course.value.id,
        returnUrl: window.location.href
      }
    })
    
    console.log('✅ [Purchase] Платеж создан:', response)
    console.log('✅ [Purchase] paymentId:', response.paymentId)
    console.log('✅ [Purchase] Редиректим на:', response.confirmationUrl)
    
    if (response.confirmationUrl) {
      // Переходим на страницу оплаты ЮКассы
      window.location.href = response.confirmationUrl
    }
  } catch (e: any) {
    console.error('❌ [Purchase] Ошибка создания платежа:', e)
    console.error('❌ [Purchase] Детали:', e.data || e.message)
    alert('Ошибка: ' + (e.data?.message || 'Не удалось создать платеж'))
  } finally {
    purchasing.value = false
  }
}

// Загрузка курса
const { data: courseData, pending, error } = await useFetch(
  `/api/courses/${route.params.slug}`
)

// Загрузка всех курсов для "Других курсов"
const { data: allCoursesData } = await useFetch('/api/courses')

// Преобразуем данные курса
const course = computed(() => {
  if (!courseData.value) return null
  
  const c = courseData.value
  
  // Проверяем, опубликован ли курс
  if (!c.isPublished) return null
  
  return {
    id: c.id,
    slug: c.slug,
    title: c.title,
    description: c.description,
    fullDescription: c.fullDescription,
    price: c.price ? c.price.toLocaleString('ru-RU') : '0',
    category: c.category || 'Базовый',
    duration: c.duration || '2 месяца',
    lessonsCount: c.lessonsCount || 0,
    image: c.image,
    benefits: c.benefits ? JSON.parse(c.benefits) : generateBenefits(c.title, c.category),
  }
})

// Фильтруем другие опубликованные курсы
const otherCourses = computed(() => {
  if (!allCoursesData.value?.courses) return []
  
  return allCoursesData.value.courses
    .filter((c: any) => c.slug !== route.params.slug && c.isPublished === true)
    .map((c: any) => ({
      id: c.id,
      slug: c.slug,
      title: c.title,
      description: c.description,
      price: c.price ? c.price.toLocaleString('ru-RU') : '0',
      category: c.category || 'Базовый',
    }))
    .slice(0, 3)
})

// Генерируем benefits на основе названия курса
const generateBenefits = (title: string, category: string): string[] => {
  const benefitsMap: Record<string, string[]> = {
    'Технология пошива': [
      'Основы шитья и работа с тканями',
      'Построение выкроек',
      'Пошив юбки, брюк и платья',
      'Практические навыки',
      'Сертификат об окончании'
    ],
    'Мастер конструирования': [
      'Методика точного кроя по Злачевской',
      'Конструирование одежды',
      'Точные расчеты и измерения',
      'Профессиональный уровень',
      'Диплом'
    ],
    'Дамское бельё': [
      'Конструирование белья',
      'Работа с деликатными тканями',
      'Дизайн и моделирование',
      'Пошив красивого белья',
      'Сертификат'
    ],
  }
  
  return benefitsMap[title] || [
    'Практические навыки',
    'Работа с опытным преподавателем',
    'Индивидуальный подход',
    'Сертификат об окончании'
  ]
}

// Форматируем описание
const formatDescription = (text: string) => {
  if (!text) return '<p>Описание курса будет добавлено позже.</p>'
  
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

// Загружаем SEO настройки из БД
const { data: siteInfo } = await useFetch('/api/site-info')

const siteName = computed(() => siteInfo.value?.siteName || 'Генетика Кроя')

// SEO
useSeoMeta({
  title: () => course.value ? `${course.value.title} — ${siteName.value}` : 'Курс не найден',
  description: () => course.value?.description || siteInfo.value?.seo?.description || 'Курсы кройки и шитья',
  ogImage: () => course.value?.image || siteInfo.value?.seo?.ogImage || '',
})
</script>

<style scoped>
.course-page {
  background-color: var(--color-cream);
}

.loading-container,
.error-container {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-cream);
}

.loading-container {
  flex-direction: column;
  gap: 2rem;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(196, 98, 45, 0.2);
  border-top-color: var(--color-copper);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-container {
  text-align: center;
}

.error-container h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.5rem;
  color: var(--color-dark);
  margin-bottom: 1rem;
}

.error-container p {
  font-size: 1.125rem;
  color: var(--color-text);
  margin-bottom: 2rem;
}

.container-max {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Hero Section */
.course-hero {
  background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-copper) 100%);
  color: white;
  padding: 6rem 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-left {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-tag {
  font-size: 0.875rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  opacity: 0.9;
}

.hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.6;
  opacity: 0.95;
  margin: 0;
}

.course-meta {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 0;
}

.meta-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.meta-icon {
  font-size: 1.5rem;
}

.meta-label {
  font-size: 0.875rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.meta-value {
  font-size: 1.25rem;
  font-weight: 600;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.hero-right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  max-height: 600px;
}

.course-image-wrapper {
  width: 100%;
  height: 100%;
  max-height: 600px;
  position: relative;
  overflow: hidden;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.course-image {
  width: 100%;
  height: 100%;
  max-height: 600px;
  object-fit: contain;
  object-position: center;
}

.course-image-placeholder {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
}

/* Course Details */
.course-details {
  padding: 6rem 0;
}

.details-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

.details-main h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  color: var(--color-dark);
  margin-bottom: 2rem;
}

.course-description {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text);
}

.course-description :deep(p) {
  margin-bottom: 1.5rem;
}

.course-description :deep(strong) {
  color: var(--color-copper);
  font-weight: 600;
}

.course-description :deep(li) {
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
}

/* Sidebar */
.details-sidebar {
  position: sticky;
  top: 100px;
  height: fit-content;
}

.sidebar-card {
  background-color: white;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0;
}

.sidebar-card h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  color: var(--color-dark);
  margin: 0 0 1.5rem 0;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.benefits-list li {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  font-size: 0.95rem;
  color: var(--color-text);
}

.benefit-icon {
  color: var(--color-copper);
  font-weight: bold;
  flex-shrink: 0;
}

.price-section {
  padding: 1.5rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

.price-label {
  font-size: 0.875rem;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.price-value {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-copper);
}

.sidebar-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Other Courses */
.other-courses {
  background-color: white;
  padding: 6rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.other-courses h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  color: var(--color-dark);
  margin-bottom: 3rem;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.course-card-link {
  text-decoration: none;
  color: inherit;
}

.course-card {
  background-color: var(--color-dark);
  color: white;
  padding: 2rem;
  border-radius: 0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
}

.course-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.card-header h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
}

.card-level {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-copper);
  background-color: rgba(196, 98, 45, 0.2);
  padding: 0.25rem 0.75rem;
  white-space: nowrap;
}

.card-description {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(196, 98, 45, 0.3);
  display: none;
}

.card-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-copper);
}

.card-arrow {
  font-size: 1.5rem;
  color: var(--color-copper);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-copper) 100%);
  color: white;
  padding: 6rem 0;
  text-align: center;
}

.cta-section h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin: 0 0 1rem 0;
}

.cta-section p {
  font-size: 1.125rem;
  opacity: 0.95;
  margin: 0 0 2rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Buttons */
.btn-primary,
.btn-outline {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background-color: var(--color-copper);
  color: white;
}

.btn-primary:hover {
  background-color: white;
  color: var(--color-dark);
  transform: translateY(-2px);
}

.btn-outline {
  background-color: transparent;
  border: 2px solid white;
  color: white;
}

.btn-outline:hover {
  background-color: white;
  color: var(--color-dark);
  transform: translateY(-2px);
}

.btn-block {
  width: 100%;
}

.purchased-badge {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, rgba(196, 98, 45, 0.08) 0%, rgba(232, 213, 196, 0.15) 100%);
  border: 1px solid var(--color-copper);
  padding: 0.875rem 1.5rem;
  position: relative;
  overflow: hidden;
}

.purchased-badge::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--color-copper);
}

.purchased-badge__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--color-copper);
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  flex-shrink: 0;
}

.purchased-badge__text {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.purchased-badge__title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-dark);
  letter-spacing: -0.01em;
}

.purchased-badge__sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  color: var(--color-copper);
  font-weight: 500;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

/* Modal overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 2rem;
  max-width: 400px;
  width: 90%;
  border-radius: 8px;
  text-align: center;
}

.modal-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-dark);
}

.modal-text {
  font-family: 'DM Sans', sans-serif;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .course-hero {
    padding: 3rem 0;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .course-meta {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .meta-item {
    flex: 1;
    min-width: 150px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .btn-primary,
  .btn-outline {
    width: 100%;
  }

  .course-details {
    padding: 3rem 0;
  }

  .details-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .details-sidebar {
    position: static;
  }

  .other-courses {
    padding: 3rem 0;
  }

  .cta-section {
    padding: 3rem 0;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .cta-buttons a {
    width: 100%;
  }
}
</style>
