export default defineNuxtRouteMiddleware(async (to) => {
  console.log('=== MIDDLEWARE DEBUG ===')
  console.log('Path:', to.path)
  console.log('Client?', process.client)
  console.log('Server?', process.server)
  
  const cookie = useCookie('admin-token')
  console.log('Cookie value from useCookie:', cookie.value)
  
  if (import.meta.server) {
    try {
      const event = useRequestEvent()
      console.log('Event exists?', !!event)
      if (event) {
        const fromEvent = getCookie(event, 'admin-token')
        console.log('Cookie from event:', fromEvent)
      }
    } catch(e) {
      console.log('Error getting event:', e)
    }
  }
  
  // Don't redirect, just log
  return
})
