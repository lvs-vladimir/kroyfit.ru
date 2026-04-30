export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('admin-token')
  
  // Если нет токена и пытаемся зайти в админку
  if (!token.value && to.path.startsWith('/admin') && to.path !== '/admin/login') {
    return navigateTo('/admin/login')
  }
  
  // Если есть токен и пытаемся зайти на логин
  if (token.value && to.path === '/admin/login') {
    return navigateTo('/admin')
  }
})