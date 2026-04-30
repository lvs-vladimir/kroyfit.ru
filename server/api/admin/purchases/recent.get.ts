import { db } from '../../../database/db'
import { purchases, users, courses } from '../../../database/schema'
import { eq, desc } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  console.log('🔵 [API] GET /api/admin/purchases/recent - Получение последних покупок')
  
  try {
    const recentPurchases = await db
      .select({
        id: purchases.id,
        userId: purchases.userId,
        userName: users.name,
        userEmail: users.email,
        courseId: purchases.courseId,
        courseTitle: courses.title,
        amount: purchases.amount,
        status: purchases.status,
        createdAt: purchases.createdAt,
      })
      .from(purchases)
      .leftJoin(users, eq(purchases.userId, users.id))
      .leftJoin(courses, eq(purchases.courseId, courses.id))
      .orderBy(desc(purchases.createdAt))
      .limit(10)

    console.log('✅ [API] Получено покупок:', recentPurchases.length)
    return { success: true, purchases: recentPurchases }
  } catch (e) {
    console.error('❌ [API] Ошибка получения покупок:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка получения списка покупок',
    })
  }
})