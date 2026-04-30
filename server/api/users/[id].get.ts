import { db } from '../../database/db'
import { users } from '../../database/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({ statusCode: 400, message: 'ID пользователя не указан' })
  }
  
  console.log('🔵 [API] GET /api/users/:id - Получение пользователя:', id)
  
  try {
    const [user] = await db.select().from(users).where(eq(users.id, id)).limit(1)
    
    if (!user) {
      throw createError({ statusCode: 404, message: 'Пользователь не найден' })
    }
    
    console.log('✅ [API] Пользователь загружен:', user.name)
    return user
  } catch (e) {
    console.error('❌ [API] Ошибка получения пользователя:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка получения пользователя',
    })
  }
})