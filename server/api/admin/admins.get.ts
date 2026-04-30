import { db } from '../../database/db'
import { admins } from '../../database/schema'

export default defineEventHandler(async (event) => {
  console.log('🔵 [API] GET /api/admin/admins - Получение списка администраторов')
  
  try {
    const adminsList = await db.select().from(admins)
    console.log('✅ [API] Администраторы загружены:', adminsList.length)
    return { success: true, admins: adminsList }
  } catch (e) {
    console.error('❌ [API] Ошибка получения администраторов:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка получения администраторов',
    })
  }
})
