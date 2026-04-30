import { db } from '../../database/db'
import { users } from '../../database/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, 'id')
  console.log('🔵 [API] GET /api/users/' + userId)
  
  if (!userId) {
    throw createError({
      statusCode: 400,
      message: 'ID пользователя обязателен',
    })
  }
  
  try {
    const [user] = await db.select().from(users).where(eq(users.id, userId)).limit(1)
    
    if (!user) {
      throw createError({
        statusCode: 404,
        message: 'Пользователь не найден',
      })
    }
    
    console.log('✅ [API] Пользователь загружен:', user.name)
    return { 
      success: true, 
      user: {
        ...user,
        courses: [], // Упрощаем - без курсов
      }
    }
  } catch (e: any) {
    if (e.statusCode) throw e
    console.error('❌ [API] Ошибка получения пользователя:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка получения пользователя',
    })
  }
})