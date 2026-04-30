<template>
  <section class="results" id="results">
    <div class="container-max">
      <div class="section-header">
        <p class="section-tag text-uppercase text-accent">Результаты</p>
        <h2 class="section-title">Что получают наши ученицы</h2>
      </div>

      <div class="results-grid">
        <div v-for="(result, index) in results" :key="index" class="result-card" :class="`reveal-stagger-${index + 1}`">
          <div class="result-icon">{{ result.icon }}</div>
          <h3 class="result-title">{{ result.title }}</h3>
          <p class="result-description">{{ result.description }}</p>
          <div class="result-stat">{{ result.stat }}</div>
        </div>
      </div>

      <div class="results-footer">
        <p class="results-footer-text">
          <span class="results-number">500+</span> выпускниц уже шьют идеально сидящую одежду
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const results = [
  {
    icon: '👗',
    title: 'Идеальный гардероб',
    description: 'Одежда, которая сидит как вторая кожа и подчеркивает вашу красоту',
    stat: '100% посадка'
  },
  {
    icon: '🏪',
    title: 'Собственное ателье',
    description: 'Многие ученицы открывают свой бизнес и шьют на заказ',
    stat: '50+ ателье'
  },
  {
    icon: '💼',
    title: 'Карьера в моде',
    description: 'Работа в дизайн-студиях, ателье и модных домах',
    stat: '30+ мест'
  },
  {
    icon: '💰',
    title: 'Дополнительный доход',
    description: 'Шитье на заказ приносит от 50 000 ₽ в месяц',
    stat: '50k+ ₽/мес'
  }
]

onMounted(() => {
  const { observeElements } = useScrollReveal()
  observeElements('.result-card')
})
</script>

<style scoped>
.results {
  background-color: var(--color-cream);
  padding: 6rem 0;
  position: relative;
}

.results::before {
  content: '500+';
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-family: 'Cormorant Garamond', serif;
  font-size: 15rem;
  font-weight: 700;
  color: rgba(196, 98, 45, 0.05);
  line-height: 1;
  z-index: 0;
  pointer-events: none;
}

.container-max {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
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

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.result-card {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border-radius: 0;
  transition: all 0.3s ease;
  opacity: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.result-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: var(--color-copper);
}

.result-icon {
  font-size: 2.5rem;
}

.result-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-dark);
  margin: 0;
}

.result-description {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: var(--color-text);
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
}

.result-stat {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-copper);
  margin-top: auto;
}

.results-footer {
  text-align: center;
  padding: 2rem;
  background-color: rgba(196, 98, 45, 0.05);
  border: 1px solid rgba(196, 98, 45, 0.1);
  border-radius: 0;
}

.results-footer-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.125rem;
  color: var(--color-text);
  margin: 0;
}

.results-number {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-copper);
}

.reveal-stagger-1 { animation-delay: 0.1s; }
.reveal-stagger-2 { animation-delay: 0.2s; }
.reveal-stagger-3 { animation-delay: 0.3s; }
.reveal-stagger-4 { animation-delay: 0.4s; }

.result-card.reveal {
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
  .results {
    padding: 3rem 0;
  }

  .results::before {
    font-size: 8rem;
    top: 1rem;
    right: 1rem;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .results-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .result-card {
    padding: 1.5rem;
  }
}
</style>
