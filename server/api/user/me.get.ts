import { db } from '../../database/db'
import { users } from '../../database/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  console.log('🔵 [API] GET /api/user/me')
  
  try {
    const userCookie = getCookie(event, 'user')
    
    if (!userCookie) {
      throw createError({ statusCode: 401, message: 'Не авторизован' })
    }
    
    let userData
    try {
      userData = JSON.parse(userCookie)
    } catch (e) {
      throw createError({ statusCode: 401, message: 'Неверная сессия' })
    }
    
    // Получаем актуальные данные пользователя из БД
    const [user] = await db.select().from(users).where(eq(users.id, userData.id)).limit(1)
    
    if (!user) {
      throw createError({ statusCode: 404, message: 'Пользователь не найден' })
    }
    
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      vkId: user.vkId,
    }
    
  } catch (error: any) {
    if (error.statusCode) {
      throw error
    }
    console.error('❌ [API] Ошибка:', error)
    throw createError({ statusCode: 500, message: 'Ошибка сервера' })
  }
})