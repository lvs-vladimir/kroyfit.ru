// API для тестирования подключения к VK
// Проверяет валидность токена и доступа к группе

export default defineEventHandler(async (event) => {
  const { vkId, token } = await readBody(event)
  
  if (!vkId || !token) {
    throw createError({ 
      statusCode: 400, 
      message: 'Не указан ID группы или токен' 
    })
  }

  console.log('🧪 [API] Тестирование подключения к VK API')
  console.log('   Группа:', vkId)
  console.log('   Токен:', token.substring(0, 20) + '...')

  try {
    // Пробуем получить информацию о группе через VK API
    const vkResponse = await $fetch('https://api.vk.com/method/groups.getById', {
      method: 'POST',
      body: new URLSearchParams({
        group_id: vkId,
        access_token: token,
        v: '5.131'
      })
    }) as any

    if (vkResponse.error) {
      const errorCode = vkResponse.error.error_code
      const errorMsg = vkResponse.error.error_msg
      
      console.error('❌ [API] VK API вернул ошибку:', { code: errorCode, msg: errorMsg })
      
      let userMessage = 'Не удалось подключиться к VK API'
      
      // Интерпретация ошибок VK API
      switch(errorCode) {
        case 5:
          userMessage = 'Токен недействителен или истек'
          break
        case 15:
          userMessage = 'Нет доступа к группе. Проверьте, что токен получен от имени сообщества'
          break
        case 100:
          userMessage = 'Неверный ID группы'
          break
        case 113:
          userMessage = 'Группа не найдена. Проверьте ID группы'
          break
        default:
          userMessage = `Ошибка VK API (${errorCode}): ${errorMsg}`
      }
      
      return {
        success: false,
        error: userMessage,
        vkError: { code: errorCode, message: errorMsg }
      }
    }

    if (vkResponse.response && vkResponse.response.length > 0) {
      const group = vkResponse.response[0]
      console.log('✅ [API] Подключение успешно! Группа:', group.name)
      
      return {
        success: true,
        groupName: group.name,
        groupId: group.id,
        membersCount: group.members_count || 'неизвестно',
        isClosed: group.is_closed,
        type: group.type
      }
    }

    return {
      success: false,
      error: 'Группа не найдена или API вернул пустой ответ'
    }

  } catch (e: any) {
    console.error('❌ [API] Ошибка тестирования:', e)
    
    if (e.message?.includes('fetch failed')) {
      return {
        success: false,
        error: 'Не удалось подключиться к VK API. Проверьте интернет-соединение.'
      }
    }
    
    return {
      success: false,
      error: 'Ошибка при тестировании: ' + (e.message || 'Неизвестная ошибка')
    }
  }
})