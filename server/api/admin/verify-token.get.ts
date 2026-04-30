import { db } from '../../database/db'
import { admins } from '../../database/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'admin-token')
  
  if (!token) {
    throw createError({
      statusCode: 401,
      message: 'Токен не найден',
    })
  }

  console.log('🔵 [API] Token verification')

  try {
    // Декодируем токен
    const decoded = Buffer.from(token, 'base64').toString('utf-8')
    const [adminId] = decoded.split(':')
    
    if (!adminId) {
      throw createError({
        statusCode: 401,
        message: 'Неверный токен',
      })
    }

    // Проверяем администратора в БД
    const [admin] = await db.select().from(admins).where(eq(admins.id, adminId)).limit(1)

    if (!admin || !admin.isActive) {
      throw createError({
        statusCode: 401,
        message: 'Администратор не найден или деактивирован',
      })
    }

    console.log('✅ [API] Token valid for admin:', admin.name)

    return {
      success: true,
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        roleId: admin.roleId,
      },
    }
  } catch (e: any) {
    if (e.statusCode) throw e
    console.error('❌ [API] Token verification error:', e)
    throw createError({
      statusCode: 401,
      message: 'Ошибка проверки токена',
    })
  }
})