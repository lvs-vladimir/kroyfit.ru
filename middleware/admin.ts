export default defineNuxtRouteMiddleware(async (to) => {
  // Получаем токен из cookie (работает и на клиенте, и на сервере)
  let token = useCookie('admin-token').value
  
  // На сервере дополнительно проверяем заголовки запроса
  if (process.server && !token) {
    try {
      const event = useRequestEvent()
      if (event) {
        token = getCookie(event, 'admin-token')
      }
    } catch(e) {
      // ignore
    }
  }
  
  // Если пытаемся зайти на логин - проверяем, авторизованы ли уже
  if (to.path === '/admin/login') {
    if (!token) return
    
    // Проверяем токен
    try {
      await $fetch('/api/admin/verify-token')
      // Токен валиден - редиректим в админку
      return navigateTo('/admin')
    } catch (e) {
      // Токен невалиден - оставляем на странице логина
      const cookie = useCookie('admin-token')
      cookie.value = null
    }
    return
  }
  
  // Для всех остальных страниц админки
  if (!token) {
    return navigateTo('/admin/login')
  }
  
  // Проверяем токен через API
  try {
    await $fetch('/api/admin/verify-token')
  } catch (e) {
    // Токен невалиден - чистим и редиректим на логин
    const cookie = useCookie('admin-token')
    cookie.value = null
    return navigateTo('/admin/login')
  }
})