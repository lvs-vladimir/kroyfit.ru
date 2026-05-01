<template>
  <div class="payment-success-page">
    <!-- Hero Section -->
    <section class="success-hero">
      <div class="container-max">
        <div class="success-content">
          <div class="success-icon">✅</div>
          <h1 class="heading-display">Платёж успешно принят!</h1>
          <p class="subtitle">Спасибо за покупку курса</p>
        </div>
      </div>
    </section>

    <!-- Course Info Section -->
    <section class="course-details" v-if="purchase">
      <div class="container-max">
        <div class="details-card">
          <h2 class="heading-large">{{ purchase.course?.title }}</h2>
          <p class="course-description">{{ purchase.course?.description }}</p>
          <div class="price-display">
            <span class="price-label">Сумма платежа:</span>
            <span class="price-value">{{ purchase.course?.price }} ₽</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Payment Details Section -->
    <section class="payment-details">
      <div class="container-max">
        <div class="details-grid">
          <div class="detail-item">
            <span class="detail-label">ID платежа</span>
            <span class="detail-value">{{ paymentId }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Статус</span>
            <span class="detail-value status-completed">Завершён</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Дата</span>
            <span class="detail-value">{{ new Date().toLocaleDateString('ru-RU') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Next Steps Section -->
    <section class="next-steps">
      <div class="container-max">
        <h2 class="heading-large">Что дальше?</h2>
        <div class="steps-list">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Проверьте почту</h3>
            <p>Письмо с подтверждением отправлено на вашу почту</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>Доступ активирован</h3>
            <p>Курс уже доступен в вашем аккаунте</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Начните обучение</h3>
            <p>Перейдите в профиль и откройте курс</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container-max">
        <div class="cta-content">
          <h2 class="heading-large">Готовы начать?</h2>
          <div class="cta-buttons">
            <NuxtLink to="/" class="btn btn-primary">На главную</NuxtLink>
            <NuxtLink to="/courses" class="btn btn-secondary">К другим курсам</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const paymentId = ref<string>('')
const purchase = ref<any>(null)

onMounted(async () => {
  // Получаем ID платежа из URL параметров
  paymentId.value = (route.query.paymentId as string) || 'N/A'
  
  // Получаем информацию о покупке
  try {
    const purchases = await $fetch('/api/user/purchases')
    if (purchases && purchases.length > 0) {
      // Берём последнюю покупку
      purchase.value = purchases[0]
    }
  } catch (e) {
    console.error('Ошибка при загрузке информации о покупке:', e)
  }
})
</script>

<style scoped>
.payment-success-page {
  background: var(--color-cream);
}

.success-hero {
  padding: 80px 0;
  text-align: center;
  background: linear-gradient(135deg, rgba(196, 98, 45, 0.05) 0%, rgba(232, 213, 196, 0.1) 100%);
}

.success-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.success-icon {
  font-size: 80px;
  animation: bounce 0.6s ease-in-out;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.25rem;
  color: var(--color-text);
  opacity: 0.8;
}

.course-details {
  padding: 60px 0;
}

.details-card {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.course-description {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  color: var(--color-text);
  margin: 1rem 0 2rem 0;
  line-height: 1.6;
}

.price-display {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e0e0e0;
}

.price-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: var(--color-text);
  opacity: 0.7;
}

.price-value {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-copper);
}

.payment-details {
  padding: 60px 0;
  background: white;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  background: var(--color-cream);
  border-radius: 8px;
}

.detail-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: var(--color-text);
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.detail-value {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
}

.status-completed {
  color: #10b981;
  font-weight: 700;
}

.next-steps {
  padding: 80px 0;
}

.steps-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.step {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  border-left: 4px solid var(--color-copper);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--color-copper);
  color: white;
  border-radius: 50%;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 700;
}

.step h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
}

.step p {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: var(--color-text);
  opacity: 0.7;
}

.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(196, 98, 45, 0.1) 0%, rgba(232, 213, 196, 0.15) 100%);
}

.cta-content {
  text-align: center;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  display: inline-block;
}

.btn-primary {
  background: var(--color-copper);
  color: white;
}

.btn-primary:hover {
  background: #b0541f;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(196, 98, 45, 0.3);
}

.btn-secondary {
  background: white;
  color: var(--color-copper);
  border: 2px solid var(--color-copper);
}

.btn-secondary:hover {
  background: var(--color-copper);
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .success-hero {
    padding: 40px 0;
  }

  .success-icon {
    font-size: 60px;
  }

  .heading-display {
    font-size: 2rem;
  }

  .details-card {
    padding: 20px;
  }

  .course-details,
  .payment-details,
  .next-steps,
  .cta-section {
    padding: 40px 0;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>
