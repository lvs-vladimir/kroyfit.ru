import { db } from '../database/db'
import { users, purchases } from '../database/schema'
import { eq, count } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  console.log('🔵 [API] GET /api/users - Получение списка пользователей')
  
  try {
    const usersList = await db.select().from(users)
    
    // Получаем количество курсов для каждого пользователя
    const usersWithCourses = await Promise.all(
      usersList.map(async (user) => {
        const coursesCount = await db
          .select({ count: count() })
          .from(purchases)
          .where(eq(purchases.userId, user.id))
        
        return {
          ...user,
          coursesCount: coursesCount[0]?.count || 0,
        }
      })
    )
    
    console.log('✅ [API] Пользователей загружено:', usersWithCourses.length)
    return { success: true, users: usersWithCourses }
  } catch (e) {
    console.error('❌ [API] Ошибка получения пользователей:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка получения списка пользователей',
    })
  }
})