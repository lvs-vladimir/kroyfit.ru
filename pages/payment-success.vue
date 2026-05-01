<template>
  <div class="payment-success">
    <div class="container-max">
      <div class="success-card">
        <div class="success-icon">✅</div>
        <h1>Платёж успешно принят!</h1>
        <p class="subtitle">Спасибо за покупку курса</p>
        
        <div class="course-info" v-if="purchase">
          <h2>{{ purchase.course?.title }}</h2>
          <p class="price">{{ purchase.course?.price }} ₽</p>
        </div>
        
        <div class="info-box">
          <p><strong>ID платежа:</strong> {{ paymentId }}</p>
          <p><strong>Статус:</strong> <span class="status-badge">Завершён</span></p>
          <p><strong>Дата:</strong> {{ new Date().toLocaleDateString('ru-RU') }}</p>
        </div>
        
        <div class="actions">
          <NuxtLink to="/" class="btn btn-primary">На главную</NuxtLink>
          <NuxtLink to="/courses" class="btn btn-secondary">К курсам</NuxtLink>
        </div>
        
        <p class="note">
          Письмо с подтверждением отправлено на вашу почту.<br>
          Доступ к курсу активирован в вашем аккаунте.
        </p>
      </div>
    </div>
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
.payment-success {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.container-max {
  width: 100%;
  max-width: 600px;
}

.success-card {
  background: white;
  border-radius: 16px;
  padding: 60px 40px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.success-icon {
  font-size: 80px;
  margin-bottom: 20px;
  animation: bounce 0.6s ease-in-out;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

h1 {
  font-size: 32px;
  color: #1a1a1a;
  margin-bottom: 10px;
  font-weight: 700;
}

.subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}

.course-info {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  text-align: left;
}

.course-info h2 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #1a1a1a;
}

.price {
  font-size: 24px;
  font-weight: 700;
  color: #667eea;
}

.info-box {
  background: #f9f9f9;
  border-left: 4px solid #667eea;
  padding: 20px;
  margin-bottom: 30px;
  text-align: left;
  border-radius: 8px;
}

.info-box p {
  margin: 10px 0;
  font-size: 14px;
  color: #666;
}

.status-badge {
  display: inline-block;
  background: #10b981;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.actions {
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
}

.btn {
  flex: 1;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #5568d3;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #f0f0f0;
  color: #1a1a1a;
}

.btn-secondary:hover {
  background: #e0e0e0;
  transform: translateY(-2px);
}

.note {
  font-size: 14px;
  color: #999;
  line-height: 1.6;
}

@media (max-width: 640px) {
  .success-card {
    padding: 40px 20px;
  }

  h1 {
    font-size: 24px;
  }

  .actions {
    flex-direction: column;
  }
}
</style>
