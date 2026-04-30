import { db } from '../../database/db'
import { admins } from '../../database/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  console.log('🔵 [API] GET /api/admin/profile - Получение профиля администратора')
  
  try {
    const admin = await db.query.admins.findFirst({
      where: eq(admins.id, '1'),
    })

    if (!admin) {
      console.error('❌ [API] Администратор не найден')
      throw createError({
        statusCode: 404,
        message: 'Администратор не найден',
      })
    }

    console.log('✅ [API] Профиль загружен:', { email: admin.email, name: admin.name })
    return { success: true, admin }
  } catch (e) {
    console.error('❌ [API] Ошибка получения профиля:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка получения профиля',
    })
  }
})
