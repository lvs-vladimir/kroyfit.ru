import { db } from '../../database/db'
import { purchases, courses } from '../../database/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  console.log('🔵 [API] GET /api/user/courses - Получение курсов пользователя')
  
  // TODO: Получать userId из сессии/токена
  const userId = '1' // Временно для теста
  
  try {
    const userPurchases = await db
      .select({
        courseId: purchases.courseId,
      })
      .from(purchases)
      .where(eq(purchases.userId, userId))
    
    const courseIds = userPurchases.map(p => p.courseId)
    
    if (courseIds.length === 0) {
      return { success: true, courses: [] }
    }
    
    // Получаем все курсы и фильтруем вручную для SQLite
    const allCourses = await db.select().from(courses)
    const userCourses = allCourses.filter(c => courseIds.includes(c.id))
    
    console.log('✅ [API] Курсов пользователя загружено:', userCourses.length)
    return { success: true, courses: userCourses }
  } catch (e) {
    console.error('❌ [API] Ошибка получения курсов пользователя:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка получения курсов',
    })
  }
})