export default defineNuxtRouteMiddleware(async (to) => {
  const token = useCookie('admin-token')
  
  // Если пытаемся зайти на логин - проверяем, авторизованы ли уже
  if (to.path === '/admin/login') {
    if (!token.value) return
    
    // Проверяем токен
    try {
      await $fetch('/api/admin/verify-token')
      // Токен валиден - редиректим в админку
      return navigateTo('/admin')
    } catch (e) {
      // Токен невалиден - оставляем на странице логина
      token.value = null
    }
    return
  }
  
  // Для всех остальных страниц админки
  if (!token.value) {
    return navigateTo('/admin/login')
  }
  
  // Проверяем токен через API
  try {
    await $fetch('/api/admin/verify-token')
  } catch (e) {
    // Токен невалиден - чистим и редиректим на логин
    token.value = null
    return navigateTo('/admin/login')
  }
})