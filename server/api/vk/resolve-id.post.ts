// Серверный endpoint для получения VK ID по screen_name
// Использует публичный метод VK API через прокси

export default defineEventHandler(async (event) => {
  const { screenName } = await readBody(event)
  
  if (!screenName) {
    throw createError({ statusCode: 400, message: 'Не указан screen_name' })
  }

  console.log('🔍 [API] Получение VK ID для:', screenName)

  try {
    // Пробуем получить через VK API (требует токен)
    // Если нет токена, возвращаем ошибку с подсказкой
    
    // Проверяем есть ли токен в настройках
    const settings = await $fetch('/api/admin/settings/all').catch(() => null)
    
    // Если это числовой ID - возвращаем его сразу
    if (/^\d+$/.test(screenName)) {
      return { success: true, id: screenName, type: 'group' }
    }

    // Пытаемся получить через VK API
    // Для этого нужен access_token
    const vkToken = process.env.VK_SERVICE_TOKEN || ''
    
    if (!vkToken) {
      // Если нет токена - возвращаем подсказку
      return { 
        success: false, 
        error: 'Требуется VK access_token для определения ID по короткому имени',
        hint: 'Получите ID вручную на https://regvk.com/id/',
        manualUrl: `https://regvk.com/id/`
      }
    }

    // Делаем запрос к VK API
    const vkResponse = await $fetch(`https://api.vk.com/method/utils.resolveScreenName`, {
      params: {
        screen_name: screenName,
        access_token: vkToken,
        v: '5.131'
      }
    }) as any

    if (vkResponse.response && vkResponse.response.object_id) {
      const id = vkResponse.response.object_id
      const type = vkResponse.response.type
      console.log('✅ [API] VK ID найден:', { id, type })
      return { success: true, id: String(id), type }
    }

    return { 
      success: false, 
      error: 'Не удалось определить ID',
      hint: 'Проверьте правильность ссылки или получите ID на https://regvk.com/id/',
      manualUrl: `https://regvk.com/id/`
    }

  } catch (e: any) {
    console.error('❌ [API] Ошибка получения VK ID:', e)
    return { 
      success: false, 
      error: 'Ошибка запроса к VK API',
      hint: 'Получите ID вручную на https://regvk.com/id/',
      manualUrl: `https://regvk.com/id/`
    }
  }
})