<template>
  <section class="contacts" id="contacts">
    <div class="container-max">
      <div class="contacts-grid">
        <div class="contact-block">
          <h3 class="contact-title">Телефон</h3>
          <p class="contact-value">8 913 210-16-62</p>
          <p class="contact-hours">Пн-Пт: 10:00 - 18:00</p>
        </div>

        <div class="contact-block">
          <h3 class="contact-title">Адрес</h3>
          <p class="contact-value">ул. Профинтерна 7А</p>
          <p class="contact-hours">Барнаул, Алтайский край</p>
        </div>

        <div class="contact-block">
          <h3 class="contact-title">Соцсети</h3>
          <div class="social-links">
            <a href="https://vk.com/genetikakroya22" target="_blank" class="social-link">ВКонтакте</a>
            <a href="https://instagram.com" target="_blank" class="social-link">Instagram</a>
          </div>
        </div>
      </div>

      <div class="contacts-footer">
        <p class="footer-text">
          © {{ new Date().getFullYear() }} Генетика Кроя. Все права защищены.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.contacts {
  background-color: var(--color-cream);
  padding: 4rem 0 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.container-max {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.contacts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.contact-block {
  text-align: center;
}

.contact-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-dark);
  margin: 0 0 0.75rem 0;
}

.contact-value {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-copper);
  margin: 0 0 0.5rem 0;
}

.contact-hours {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: var(--color-text);
  margin: 0;
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.social-link {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: var(--color-copper);
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
}

.social-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-copper);
  transition: width 0.3s ease;
}

.social-link:hover {
  color: var(--color-dark);
}

.social-link:hover::after {
  width: 100%;
}

.contacts-footer {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.footer-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: var(--color-text);
  margin: 0;
}

@media (max-width: 768px) {
  .contacts {
    padding: 2rem 0 1rem;
  }

  .contacts-grid {
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .contact-block {
    text-align: left;
  }

  .social-links {
    justify-content: flex-start;
  }
}
</style>
