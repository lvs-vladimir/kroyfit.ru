<template>
  <header class="app-header" :class="{ scrolled: isScrolled }">
    <div class="container-max">
      <div class="header-content">
        <!-- Logo -->
        <NuxtLink to="/" class="logo">
          <span class="logo-icon">✂️</span>
          <span class="logo-text">Генетика Кроя</span>
        </NuxtLink>

        <!-- Navigation -->
        <nav class="nav-menu">
          <NuxtLink :to="getNavLink('#courses')" class="nav-link">Курсы</NuxtLink>
          <NuxtLink :to="getNavLink('#about')" class="nav-link">О нас</NuxtLink>
          <NuxtLink :to="getNavLink('#results')" class="nav-link">Результаты</NuxtLink>
          <NuxtLink :to="getNavLink('#contacts')" class="nav-link">Контакты</NuxtLink>
        </nav>

        <!-- VK ID Auth / User Info -->
        <div class="header-auth">
          <div v-if="currentUser" class="user-info">
            <img v-if="currentUser.avatar" :src="currentUser.avatar" class="user-avatar" alt="avatar">
            <span v-else class="user-avatar-default">{{ currentUser.name?.charAt(0) || '?' }}</span>
            <span class="user-name">{{ currentUser.name }}</span>
            <button class="btn-logout" @click="logout">Выйти</button>
          </div>
          <div v-else id="vk-auth-container" class="vk-auth-widget"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const isScrolled = ref(false)
const currentUser = ref<any>(null)

// Загружаем данные пользователя
onMounted(async () => {
  // Слушаем скролл
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
  
  // Проверяем авторизацию
  try {
    const user = await $fetch('/api/user/me')
    if (user) {
      currentUser.value = user
    }
  } catch (e) {
    // Пользователь не авторизован
  }
  
  // Инициализируем VK ID виджет если пользователь не авторизован
  if (!currentUser.value && typeof window !== 'undefined' && 'VKIDSDK' in window) {
    initVkAuth()
  }
})

// Инициализация VK ID
const initVkAuth = () => {
  if (!('VKIDSDK' in window)) return
  
  const VKID = (window as any).VKIDSDK
  
  VKID.Config.init({
    app: parseInt(import.meta.env.VK_APP_ID || '54572308'),
    redirectUrl: import.meta.env.VK_REDIRECT_URL || 'https://kroyfit.ru',
    responseMode: VKID.ConfigResponseMode.Callback,
    source: VKID.ConfigSource.LOWCODE,
    scope: '',
  })

  const oneTap = new VKID.OneTap()

  oneTap.render({
    container: document.getElementById('vk-auth-container'),
    showAlternativeLogin: true
  })
  .on(VKID.WidgetEvents.ERROR, (error: any) => {
    console.error('VK ID Error:', error)
  })
  .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, async function (payload: any) {
    console.log('✅ [VK] Получены данные:', JSON.stringify(payload))

    // Если есть access_token напрямую (Implicit Flow)
    if (payload.access_token) {
      console.log('✅ [VK] Получен access_token напрямую, получаем данные пользователя...')
      
      try {
        // Получаем данные пользователя
        const VKID = (window as any).VKIDSDK
        const userInfo = await VKID.Auth.userInfo(tokenResponse.access_token)
        
        console.log('✅ [VK] Данные пользователя:', userInfo)
        
        // Данные находятся внутри user объекта
        const userData = userInfo.user || userInfo
        
        // Отправляем данные на сервер
        const response = await $fetch('/api/auth/vk', {
          method: 'POST',
          body: { 
            vkId: userData.user_id,
            name: userData.first_name + (userData.last_name ? ' ' + userData.last_name : ''),
            avatar: userData.avatar || null,
          }
        })
        
        if (response.success) {
          currentUser.value = response.user
          window.location.reload()
        }
      } catch (e: any) {
        console.error('❌ [VK] Ошибка:', e)
        alert('Ошибка авторизации: ' + (e.message || 'Неизвестная ошибка'))
      }
      return
    }

    // Иначе используем код - обмениваем через SDK
    const code = payload.code
    const deviceId = payload.device_id
    
    if (!code) {
      console.error('❌ [VK] Нет кода в ответе')
      return
    }

    console.log('✅ [VK] Получен код, обмениваем через SDK...')

    try {
      // Используем SDK для обмена кода на токены
      const VKID = (window as any).VKIDSDK
      const tokenResponse = await VKID.Auth.exchangeCode(code, deviceId)
      
      console.log('✅ [VK] Токены получены, получаем данные пользователя...')
      
      if (tokenResponse.access_token) {
        // Получаем данные пользователя
        const userInfo = await VKID.Auth.userInfo(tokenResponse.access_token)
        
        console.log('✅ [VK] Данные пользователя:', userInfo)
        
        // Данные находятся внутри user объекта
        const userData = userInfo.user || userInfo
        
        // Отправляем данные на сервер
        const response = await $fetch('/api/auth/vk', {
          method: 'POST',
          body: { 
            vkId: userData.user_id,
            name: userData.first_name + (userData.last_name ? ' ' + userData.last_name : ''),
            avatar: userData.avatar || null,
          }
        })
        
        if (response.success) {
          currentUser.value = response.user
          window.location.reload()
        }
      }
    } catch (e: any) {
      console.error('❌ [VK] Ошибка при обмене кода:', e)
      alert('Ошибка авторизации: ' + (e.message || 'Неизвестная ошибка'))
    }
  })
}

// Проверяем, есть ли код в URL (после редиректа от VK)
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  const code = urlParams.get('code')
  const deviceId = urlParams.get('device_id')
  
  if (code && deviceId && !currentUser.value) {
    console.log('✅ [VK] Найден код в URL после редиректа')
    
    $fetch('/api/auth/vk', {
      method: 'POST',
      body: { code, deviceId }
    }).then((response: any) => {
      if (response.success) {
        currentUser.value = response.user
        // Убираем параметры из URL
        window.history.replaceState({}, document.title, window.location.pathname)
        window.location.reload()
      }
    }).catch((e: any) => {
      console.error('❌ [VK] Ошибка при обмене кода из URL:', e)
    })
  }
})

// Logout
const logout = () => {
  document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  currentUser.value = null
  window.location.reload()
}

// Если на главной странице — используем якоря, иначе — ссылки на главную с якорем
const getNavLink = (anchor: string) => {
  if (route.path === '/') {
    return anchor
  }
  return '/' + anchor
}
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

.header-auth {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.user-avatar-default {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-copper);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
}

.user-name {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-dark);
}

.btn-logout {
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.25rem 0.75rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-logout:hover {
  background: var(--color-copper);
  color: white;
  border-color: var(--color-copper);
}

.vk-auth-widget {
  min-width: 210px;
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

  .user-name {
    display: none;
  }

  .vk-auth-widget {
    min-width: 100px;
    transform: scale(0.85);
    transform-origin: right;
  }
}
</style>
