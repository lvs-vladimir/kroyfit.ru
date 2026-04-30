import { db } from '../../database/db'
import { courses } from '../../database/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({ statusCode: 400, message: 'ID курса не указан' })
  }
  
  console.log('🔵 [API] GET /api/courses/:id - Получение курса:', id)
  
  try {
    const [course] = await db.select().from(courses).where(eq(courses.id, id)).limit(1)
    
    if (!course) {
      throw createError({ statusCode: 404, message: 'Курс не найден' })
    }
    
    console.log('✅ [API] Курс загружен:', course.title)
    return { success: true, course }
  } catch (e: any) {
    if (e.statusCode) throw e
    console.error('❌ [API] Ошибка получения курса:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка получения курса',
    })
  }
})