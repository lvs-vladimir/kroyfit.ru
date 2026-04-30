// API для получения информации о группе ВК (название)
// Использует публичный доступ VK API с токеном сервиса

export default defineEventHandler(async (event) => {
  const { groupId } = await readBody(event)
  
  if (!groupId) {
    throw createError({ statusCode: 400, message: 'Не указан ID группы' })
  }

  console.log('🔍 [API] Получение информации о группе:', groupId)

  try {
    // Пробуем получить через VK API
    // Используем URL с параметрами напрямую для POST запроса
    const params = new URLSearchParams()
    params.append('group_id', groupId)
    params.append('v', '5.131')
    
    const vkResponse = await $fetch('https://api.vk.com/method/groups.getById', {
      method: 'POST',
      body: params.toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }) as any

    if (vkResponse.error) {
      console.error('❌ [API] VK API вернул ошибку:', vkResponse.error)
      return { 
        success: false, 
        error: vkResponse.error.error_msg,
        code: vkResponse.error.error_code 
      }
    }

    if (vkResponse.response && vkResponse.response.length > 0) {
      const group = vkResponse.response[0]
      console.log('✅ [API] Группа найдена:', group.name)
      return { success: true, name: group.name, id: group.id }
    }

    return { success: false, error: 'Группа не найдена' }

  } catch (e: any) {
    console.error('❌ [API] Ошибка получения группы:', e)
    return { success: false, error: 'Ошибка запроса: ' + (e.message || 'Неизвестная ошибка') }
  }
})