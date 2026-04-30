import { db } from '../../database/db'
import { roles } from '../../database/schema'

export default defineEventHandler(async (event) => {
  console.log('🔵 [API] GET /api/admin/roles - Получение списка ролей')
  
  try {
    const rolesList = await db.select().from(roles)
    console.log('✅ [API] Роли загружены:', rolesList.length)
    return { success: true, roles: rolesList }
  } catch (e) {
    console.error('❌ [API] Ошибка получения ролей:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка получения ролей',
    })
  }
})