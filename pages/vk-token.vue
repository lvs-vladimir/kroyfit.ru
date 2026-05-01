<template>
  <div class="vk-token-page">
    <div class="card">
      <div v-if="token">
        <div class="icon success">✓</div>
        <h1>Токен получен!</h1>
        <p class="subtitle">Скопируйте токен и вставьте его в настройки ВКонтакте</p>

        <div class="token-box">
          <code class="token-value">{{ token }}</code>
          <button class="copy-btn" @click="copyToken">
            {{ copied ? '✓ Скопировано!' : 'Копировать' }}
          </button>
        </div>

        <div class="info-box">
          <p><strong>Срок действия:</strong> {{ expiresIn }}</p>
        </div>

        <div class="steps">
          <p>Теперь:</p>
          <ol>
            <li>Перейдите в <a href="/admin/settings" style="color: var(--color-copper)">Настройки → ВКонтакте</a></li>
            <li>Найдите нужную группу и нажмите «Редактировать»</li>
            <li>Вставьте скопированный токен в поле «Токен»</li>
            <li>Нажмите «Сохранить»</li>
          </ol>
        </div>

        <a href="/admin/settings" class="btn">Перейти в настройки</a>
      </div>

      <div v-else-if="error">
        <div class="icon error">✕</div>
        <h1>Ошибка авторизации</h1>
        <p class="subtitle">{{ error }}</p>
        <a href="/admin/settings" class="btn">Вернуться в настройки</a>
      </div>

      <div v-else>
        <div class="spinner"></div>
        <p>Получаем токен...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const token = ref('')
const expiresIn = ref('')
const error = ref('')
const copied = ref(false)

onMounted(() => {
  const hash = window.location.hash.substring(1)
  const params = new URLSearchParams(hash)

  const accessToken = params.get('access_token')
  const expires = params.get('expires_in')
  const errorParam = params.get('error')
  const errorDesc = params.get('error_description')

  if (accessToken) {
    token.value = accessToken
    if (expires) {
      const hours = Math.floor(parseInt(expires) / 3600)
      expiresIn.value = hours > 0 ? `${hours} часов` : `${expires} секунд`
    } else {
      expiresIn.value = 'Бессрочно'
    }
  } else if (errorParam) {
    error.value = errorDesc || errorParam
  } else {
    error.value = 'Токен не найден в URL'
  }
})

const copyToken = async () => {
  try {
    await navigator.clipboard.writeText(token.value)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    // Fallback для старых браузеров
    const el = document.createElement('textarea')
    el.value = token.value
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}
</script>

<style scoped>
.vk-token-page {
  min-height: 100vh;
  background: var(--color-cream, #f5f0e8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: 'DM Sans', sans-serif;
}

.card {
  background: white;
  padding: 3rem;
  max-width: 560px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  text-align: center;
}

.icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 1.5rem;
}

.icon.success { background: #c4622d; color: white; }
.icon.error   { background: #ef4444; color: white; }

h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 700;
  color: #1c1917;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  margin-bottom: 2rem;
  font-size: 0.95rem;
}

.token-box {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-left: 4px solid #c4622d;
  padding: 1rem;
  margin-bottom: 1.5rem;
  text-align: left;
}

.token-value {
  font-family: monospace;
  font-size: 0.75rem;
  word-break: break-all;
  color: #333;
  line-height: 1.6;
}

.copy-btn {
  background: #c4622d;
  color: white;
  border: none;
  padding: 0.5rem 1.25rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  transition: background 0.2s;
}

.copy-btn:hover { background: #b0541f; }

.info-box {
  background: #f9f9f9;
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.85rem;
  color: #666;
  text-align: left;
}

.steps {
  text-align: left;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #444;
}

.steps ol {
  padding-left: 1.25rem;
  margin-top: 0.5rem;
}

.steps li {
  margin-bottom: 0.4rem;
  line-height: 1.5;
}

.btn {
  display: inline-block;
  background: #c4622d;
  color: white;
  padding: 0.875rem 2rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background 0.2s;
}

.btn:hover { background: #b0541f; }

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #f0e8e0;
  border-top-color: #c4622d;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
