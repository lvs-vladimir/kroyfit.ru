import { db } from '../../database/db'
import { purchases, courses } from '../../database/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  console.log('🔵 [API] GET /api/user/purchases')
  
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
    
    // Получаем покупки пользователя
    const userPurchases = await db.select()
      .from(purchases)
      .where(eq(purchases.userId, userData.id))
    
    // Получаем информацию о курсах
    const purchasesWithCourses = await Promise.all(
      userPurchases.map(async (purchase) => {
        const [course] = await db.select()
          .from(courses)
          .where(eq(courses.id, purchase.courseId))
          .limit(1)
        
        return {
          ...purchase,
          course: course || null
        }
      })
    )
    
    return {
      purchases: purchasesWithCourses
    }
    
  } catch (error: any) {
    if (error.statusCode) {
      throw error
    }
    console.error('❌ [API] Ошибка:', error)
    throw createError({ statusCode: 500, message: 'Ошибка сервера' })
  }
})