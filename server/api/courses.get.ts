import { db } from '../database/db'
import { courses } from '../database/schema'

export default defineEventHandler(async (event) => {
  console.log('🔵 [API] GET /api/courses - Получение списка курсов')
  
  try {
    const coursesList = await db.select().from(courses)
    console.log('✅ [API] Курсов загружено:', coursesList.length)
    return { success: true, courses: coursesList }
  } catch (e) {
    console.error('❌ [API] Ошибка получения курсов:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка получения списка курсов',
    })
  }
})