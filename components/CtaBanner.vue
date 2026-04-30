<template>
  <section class="cta-banner">
    <div class="cta-decoration"></div>
    <div class="container-max">
      <div class="cta-content">
        <h2 class="cta-title">Начните сегодня</h2>
        <p class="cta-subtitle">
          Присоединитесь к 500+ ученицам, которые уже шьют идеально сидящую одежду
        </p>
        
        <div class="cta-buttons">
          <button class="btn-cta btn-cta-primary">Выбрать курс</button>
          <button class="btn-cta btn-cta-secondary">Написать в VK</button>
        </div>

        <div class="cta-contacts">
          <div class="contact-item">
            <span class="contact-icon">📞</span>
            <span class="contact-text">8 913 210-16-62</span>
          </div>
          <div class="contact-divider"></div>
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <span class="contact-text">Барнаул, ул. Профинтерна 7А</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-banner {
  background-color: var(--color-dark);
  color: white;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.cta-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(196, 98, 45, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(196, 98, 45, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.container-max {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
}

.cta-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.cta-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin: 0;
  color: white;
}

.cta-subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-cta {
  padding: 1rem 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'DM Sans', sans-serif;
  border-radius: 0;
}

.btn-cta-primary {
  background-color: var(--color-copper);
  color: white;
}

.btn-cta-primary:hover {
  background-color: white;
  color: var(--color-dark);
  transform: translateY(-2px);
}

.btn-cta-secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn-cta-secondary:hover {
  background-color: white;
  color: var(--color-dark);
  transform: translateY(-2px);
}

.cta-contacts {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
}

.contact-icon {
  font-size: 1.25rem;
}

.contact-divider {
  width: 1px;
  height: 24px;
  background-color: rgba(255, 255, 255, 0.3);
}

@media (max-width: 768px) {
  .cta-banner {
    padding: 3rem 0;
  }

  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }

  .btn-cta {
    width: 100%;
  }

  .cta-contacts {
    flex-direction: column;
    gap: 1rem;
  }

  .contact-divider {
    display: none;
  }
}
</style>
