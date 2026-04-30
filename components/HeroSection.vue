<template>
  <section class="hero" id="hero">
    <div class="container-max">
      <div class="hero-content">
        <!-- Left side -->
        <div class="hero-left">
          <div class="hero-tag text-uppercase text-accent">
            ✂️ Барнаул · С 2014 года
          </div>

          <h1 class="hero-title">
            <span class="hero-title-normal">Шейте одежду</span>
            <span class="hero-title-italic text-accent">как вторая кожа</span>
          </h1>

          <p class="hero-subtitle">
            Авторская методика точного кроя по Злачевской. Идеальная посадка — без примерок.
          </p>

          <div class="hero-buttons">
            <button class="btn-primary">Выбрать курс</button>
            <button class="btn-outline">Написать в VK</button>
          </div>

          <div class="hero-metrics">
            <div class="metric">
              <div class="metric-value">12+</div>
              <div class="metric-label">лет опыта</div>
            </div>
            <div class="metric-divider"></div>
            <div class="metric">
              <div class="metric-value">500+</div>
              <div class="metric-label">выпускниц</div>
            </div>
            <div class="metric-divider"></div>
            <div class="metric">
              <div class="metric-value">★ 5.0</div>
              <div class="metric-label">рейтинг</div>
            </div>
          </div>
        </div>

        <!-- Right side -->
        <div class="hero-right">
          <div class="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=700&fit=crop" 
              alt="Портновский манекен" 
              class="hero-image"
            >
            <div class="hero-badge">
              <span class="badge-icon">🧵</span>
              <span class="badge-text">Методика Злачевской</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative line -->
    <svg class="hero-decoration" viewBox="0 0 1000 100" preserveAspectRatio="none">
      <path d="M0,50 Q250,0 500,50 T1000,50" stroke="var(--color-copper)" stroke-width="2" fill="none" stroke-dasharray="5,5" opacity="0.3"/>
    </svg>
  </section>
</template>

<script setup lang="ts">
onMounted(() => {
  const elements = document.querySelectorAll('.hero-left > *')
  elements.forEach((el, index) => {
    el.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`
    el.style.opacity = '0'
  })
})
</script>

<style scoped>
.hero {
  background-color: var(--color-cream);
  padding: 6rem 0 4rem;
  position: relative;
  overflow: hidden;
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
  color: var(--color-copper);
  letter-spacing: 0.3em;
}

.hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-dark);
  margin: 0;
}

.hero-title-normal {
  display: block;
  font-weight: 400;
}

.hero-title-italic {
  display: block;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 700;
}

.hero-subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.125rem;
  color: var(--color-text);
  line-height: 1.6;
  max-width: 500px;
  margin: 0;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary, .btn-outline {
  padding: 1rem 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'DM Sans', sans-serif;
}

.btn-primary {
  background-color: var(--color-dark);
  color: white;
}

.btn-primary:hover {
  background-color: var(--color-copper);
  transform: translateY(-2px);
}

.btn-outline {
  background-color: transparent;
  color: var(--color-copper);
  border: 2px solid var(--color-copper);
}

.btn-outline:hover {
  background-color: var(--color-copper);
  color: white;
}

.hero-metrics {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}

.metric {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.metric-value {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-dark);
}

.metric-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.metric-divider {
  width: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 0.5rem;
}

.hero-right {
  position: relative;
}

.hero-image-wrapper {
  position: relative;
  aspect-ratio: 3/4;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

.hero-badge {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  background-color: white;
  padding: 1rem 1.5rem;
  border-radius: 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  animation: slideInLeft 0.8s ease-out 0.4s forwards;
  opacity: 0;
}

.badge-icon {
  font-size: 1.5rem;
}

.badge-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-dark);
}

.hero-decoration {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 0 2rem;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-right {
    order: -1;
  }

  .hero-metrics {
    flex-direction: column;
    gap: 1rem;
  }

  .metric-divider {
    display: none;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .btn-primary, .btn-outline {
    width: 100%;
  }
}
</style>
