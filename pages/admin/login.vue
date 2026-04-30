<template>
  <div class="login-page">
    <div class="login-card">
      <div class="mb-8">
        <div class="text-h6 font-weight-bold mb-1" style="color: #020617;">
          ✂️ Генетика Кроя
        </div>
        <p class="text-body-2 text-grey-darken-1">Вход в админку</p>
      </div>

      <v-alert v-if="error" type="error" variant="tonal" density="compact" class="mb-6">
        {{ error }}
      </v-alert>

      <v-form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="text-caption text-grey-darken-1 d-block mb-1">Email</label>
          <v-text-field
            v-model="email"
            type="email"
            placeholder="admin@kroyfit.ru"
            variant="outlined"
            density="compact"
            hide-details
            :disabled="loading"
          />
        </div>

        <div class="mb-6">
          <label class="text-caption text-grey-darken-1 d-block mb-1">Пароль</label>
          <v-text-field
            v-model="password"
            type="password"
            placeholder="••••••••"
            variant="outlined"
            density="compact"
            hide-details
            :disabled="loading"
          />
        </div>

        <v-btn
          type="submit"
          color="green-darken-3"
          block
          :loading="loading"
          style="border-radius: 8px; text-transform: none; font-weight: 500;"
        >
          Войти
        </v-btn>
      </v-form>

      <v-divider class="my-6" />

      <div class="text-center">
        <p class="text-caption text-grey-darken-1">
          Забыли пароль? <a href="mailto:admin@kroyfit.ru" class="text-decoration-none" style="color: #00DC82;">Свяжитесь с администратором</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  error.value = ''
  loading.value = true

  try {
    const response = await $fetch('/api/admin/login', {
      method: 'POST',
      body: { email: email.value, password: password.value },
    })

    if (response.token) {
      // Сохраняем токен в cookie
      const cookie = useCookie('admin-token')
      cookie.value = response.token
      
      // Перенаправляем на админку
      await navigateTo('/admin')
    }
  } catch (e: any) {
    error.value = e.data?.message || 'Ошибка входа. Проверьте email и пароль.'
  } finally {
    loading.value = false
  }
}

useSeoMeta({
  title: 'Вход в админку — Генетика Кроя',
})
</script>

<style scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 100%);
}

.login-card {
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background: white;
  border-radius: 16px;
  border: 1px solid #E2E8F0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}
</style>
