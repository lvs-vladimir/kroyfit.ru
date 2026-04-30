<template>
  <section class="pain-points" id="pain-points">
    <div class="container-max">
      <div class="section-header">
        <p class="section-tag text-uppercase text-accent">Знакомые проблемы?</p>
        <h2 class="section-title">Почему шить сложно</h2>
      </div>

      <div class="pain-grid">
        <div v-for="(point, index) in painPoints" :key="index" class="pain-card" :class="`reveal-stagger-${index + 1}`">
          <div class="pain-icon">{{ point.icon }}</div>
          <h3 class="pain-title">{{ point.title }}</h3>
          <p class="pain-description">{{ point.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const painPoints = [
  {
    icon: '📏',
    title: 'Неправильные мерки',
    description: 'Стандартные размеры не подходят вашей фигуре, и одежда сидит неудачно'
  },
  {
    icon: '✂️',
    title: 'Сложный крой',
    description: 'Выкройки из интернета часто ошибочны, а разобраться в них сложно'
  },
  {
    icon: '🧵',
    title: 'Много примерок',
    description: 'Приходится переделывать, потому что посадка не идеальна'
  },
  {
    icon: '😤',
    title: 'Разочарование',
    description: 'Потратили время и деньги, а результат не оправдал ожидания'
  }
]

onMounted(() => {
  const { observeElements } = useScrollReveal()
  observeElements('.pain-card')
})
</script>

<style scoped>
.pain-points {
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

.pain-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.pain-card {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border-radius: 0;
  transition: all 0.3s ease;
  opacity: 0;
}

.pain-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: var(--color-copper);
}

.pain-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.pain-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-dark);
  margin: 0 0 0.75rem 0;
}

.pain-description {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: var(--color-text);
  line-height: 1.6;
  margin: 0;
}

.reveal-stagger-1 { animation-delay: 0.1s; }
.reveal-stagger-2 { animation-delay: 0.2s; }
.reveal-stagger-3 { animation-delay: 0.3s; }
.reveal-stagger-4 { animation-delay: 0.4s; }

.pain-card.reveal {
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
  .pain-points {
    padding: 3rem 0;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .pain-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .pain-card {
    padding: 1.5rem;
  }
}
</style>
