import { db } from '../../database/db'
import { courses } from '../../database/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const param = getRouterParam(event, 'id')
  
  if (!param) {
    throw createError({ statusCode: 400, message: 'ID или slug курса не указан' })
  }
  
  console.log('🔵 [API] GET /api/courses/:id - Получение курса:', param)
  
  try {
    // Сначала пытаемся найти по ID (UUID формат)
    let [course] = await db.select().from(courses).where(eq(courses.id, param)).limit(1)
    
    // Если не найдено по ID, ищем по slug
    if (!course) {
      [course] = await db.select().from(courses).where(eq(courses.slug, param)).limit(1)
    }
    
    if (!course) {
      throw createError({ statusCode: 404, message: 'Курс не найден' })
    }
    
    console.log('✅ [API] Курс загружен:', course.title)
    return course
  } catch (e: any) {
    if (e.statusCode) throw e
    console.error('❌ [API] Ошибка получения курса:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка получения курса',
    })
  }
})
