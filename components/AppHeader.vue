<template>
  <header class="app-header" :class="{ scrolled: isScrolled }">
    <div class="container-max">
      <div class="header-content">
        <!-- Logo -->
        <div class="logo">
          <span class="logo-icon">✂️</span>
          <span class="logo-text">Генетика Кроя</span>
        </div>

        <!-- Navigation -->
        <nav class="nav-menu">
          <a href="#courses" class="nav-link">Курсы</a>
          <a href="#about" class="nav-link">О нас</a>
          <a href="#results" class="nav-link">Результаты</a>
          <a href="#contacts" class="nav-link">Контакты</a>
        </nav>

        <!-- CTA Button -->
        <button class="btn-primary">Записаться</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-cream);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  padding: 1rem 0;
}

.app-header.scrolled {
  background-color: rgba(245, 240, 232, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.container-max {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  cursor: pointer;
  flex-shrink: 0;
}

.logo-icon {
  font-size: 1.5rem;
}

.logo-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-dark);
  letter-spacing: -0.02em;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  flex: 1;
  justify-content: center;
}

.nav-link {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text);
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-copper);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--color-copper);
}

.nav-link:hover::after {
  width: 100%;
}

.btn-primary {
  background-color: var(--color-dark);
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
  white-space: nowrap;
  flex-shrink: 0;
}

.btn-primary:hover {
  background-color: var(--color-copper);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .header-content {
    gap: 1rem;
  }

  .logo-text {
    font-size: 1rem;
  }

  .btn-primary {
    padding: 0.625rem 1rem;
    font-size: 0.75rem;
  }
}
</style>
