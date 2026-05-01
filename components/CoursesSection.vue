<template>
  <section class="courses" id="courses">
    <div class="container-max">
      <div class="section-header">
        <p class="section-tag text-uppercase text-accent">Обучение</p>
        <h2 class="section-title">Наши курсы</h2>
      </div>

      <div class="courses-grid">
        <div v-for="(course, index) in courses" :key="index" class="course-card" :class="`reveal-stagger-${index + 1}`">
          <div class="course-header">
            <h3 class="course-title">{{ course.title }}</h3>
            <span class="course-level">{{ course.level }}</span>
          </div>

          <div class="course-details">
            <div class="detail">
              <span class="detail-icon">⏱️</span>
              <span class="detail-text">{{ course.duration }}</span>
            </div>
            <div class="detail">
              <span class="detail-icon">📚</span>
              <span class="detail-text">{{ course.lessons }} уроков</span>
            </div>
          </div>

          <p class="course-description">{{ course.description }}</p>

          <div class="course-skills">
            <p class="skills-label">Вы научитесь:</p>
            <ul class="skills-list">
              <li v-for="skill in course.skills" :key="skill">{{ skill }}</li>
            </ul>
          </div>

          <div class="course-footer">
            <div class="course-price">{{ course.price }} ₽</div>
            <NuxtLink :to="`/courses/${course.slug}`" class="btn-course">Купить курс</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const courses = ref([])
const loading = ref(true)

// Загрузка курсов из БД
onMounted(async () => {
  try {
    const data = await $fetch('/api/courses')
    if (data.success && data.courses) {
      // Фильтруем только опубликованные курсы
      const publishedCourses = data.courses.filter((course: any) => course.isPublished === true)
      
      courses.value = publishedCourses.map((course: any) => ({
        id: course.id,
        slug: course.slug,
        title: course.title,
        level: course.category || 'Базовый',
        duration: course.duration || '2 месяца',
        lessons: course.lessonsCount || 0,
        description: course.description ? course.description.substring(0, 80) + (course.description.length > 80 ? '...' : '') : 'Описание курса',
        skills: course.benefits ? (() => { try { return JSON.parse(course.benefits) } catch(e) { return [] } })() : [],
        price: course.price ? course.price.toLocaleString('ru-RU') : '0',
      }))
    }
  } catch (e) {
    console.error('Ошибка загрузки курсов:', e)
    // Используем fallback данные если ошибка
    courses.value = [
      {
        id: '1',
        slug: 'osnovy-kroya',
        title: 'Основы кроя',
        level: 'Начинающий',
        duration: '2 месяца',
        lessons: 16,
        description: 'Научитесь снимать мерки, строить выкройки и шить простую одежду.',
        skills: ['Снятие мерок', 'Построение выкроек', 'Пошив юбки', 'Пошив платья'],
        price: '15 000'
      },
      {
        id: '2',
        slug: 'prodvinutyy-kroy',
        title: 'Продвинутый крой',
        level: 'Продвинутый',
        duration: '3 месяца',
        lessons: 24,
        description: 'Освойте сложные техники кроя и создавайте уникальные модели.',
        skills: ['Сложные выкройки', 'Моделирование', 'Пошив брюк', 'Работа с тканями'],
        price: '25 000'
      }
    ]
  } finally {
    loading.value = false
    const { observeElements } = useScrollReveal()
    observeElements('.course-card')
  }
})

// Генерируем skills на основе названия и категории курса
const generateSkills = (title: string, category: string): string[] => {
  const skillsMap: Record<string, string[]> = {
    'Технология пошива': ['Основы шитья', 'Работа с тканями', 'Пошив одежды', 'Практические навыки'],
    'Мастер конструирования': ['Конструирование', 'Методика кроя', 'Точные расчеты', 'Профессиональный уровень'],
    'Дамское бельё': ['Конструирование белья', 'Работа с деликатными тканями', 'Дизайн', 'Пошив'],
  }
  
  return skillsMap[title] || ['Основные навыки', 'Практика', 'Сертификат']
}
</script>

<style scoped>
.courses {
  background-color: var(--color-cream);
  padding: 6rem 0;
}

.container-max {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-tag {
  font-size: 0.875rem;
  color: var(--color-copper);
  letter-spacing: 0.3em;
  display: block;
  margin-bottom: 0.5rem;
}

.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: var(--color-dark);
  margin: 0;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.course-card {
  background-color: var(--color-dark);
  color: white;
  padding: 2rem;
  border-radius: 0;
  transition: all 0.3s ease;
  opacity: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
}

.course-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M10,50 Q25,40 40,50 T70,50" stroke="rgba(196,98,45,0.1)" stroke-width="1" fill="none"/></svg>');
  background-repeat: repeat;
  opacity: 0.5;
  pointer-events: none;
}

.course-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.course-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.course-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: white;
}

.course-level {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-copper);
  background-color: rgba(196, 98, 45, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 0;
  white-space: nowrap;
}

.course-details {
  display: flex;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
}

.detail {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

.detail-icon {
  font-size: 1rem;
}

.course-description {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin: 0;
  position: relative;
  z-index: 1;
}

.course-skills {
  position: relative;
  z-index: 1;
}

.skills-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-copper);
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.skills-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skills-list li {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  padding-left: 1.5rem;
  position: relative;
}

.skills-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-copper);
  font-weight: bold;
}

.course-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
  position: relative;
  z-index: 1;
  padding-top: 1rem;
  border-top: 1px solid rgba(196, 98, 45, 0.3);
}

.course-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-copper);
}

.btn-course {
  background-color: var(--color-copper);
  color: white;
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
  display: inline-block;
  text-decoration: none;
}

.btn-course:hover {
  background-color: white;
  color: var(--color-dark);
  transform: translateY(-2px);
}

.reveal-stagger-1 { animation-delay: 0.1s; }
.reveal-stagger-2 { animation-delay: 0.2s; }
.reveal-stagger-3 { animation-delay: 0.3s; }

.course-card.reveal {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .courses {
    padding: 3rem 0;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .courses-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .course-card {
    padding: 1.5rem;
  }

  .course-title {
    font-size: 1.25rem;
  }

  .course-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .btn-course {
    width: 100%;
  }
}
</style>
