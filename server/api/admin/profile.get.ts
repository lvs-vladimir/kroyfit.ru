import { db } from '../../database/db'
import { admins } from '../../database/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  console.log('🔵 [API] GET /api/admin/profile - Получение профиля администратора')
  
  // Получаем токен из cookie
  const token = getCookie(event, 'admin-token')
  
  if (!token) {
    throw createError({
      statusCode: 401,
      message: 'Не авторизован',
    })
  }
  
  // Декодируем токен
  let adminId
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8')
    adminId = decoded.split(':')[0]
  } catch (e) {
    throw createError({
      statusCode: 401,
      message: 'Неверный токен',
    })
  }
  
  try {
    const admin = await db.query.admins.findFirst({
      where: eq(admins.id, adminId),
    })

    if (!admin) {
      console.error('❌ [API] Администратор не найден')
      throw createError({
        statusCode: 404,
        message: 'Администратор не найден',
      })
    }

    console.log('✅ [API] Профиль загружен:', { email: admin.email, name: admin.name })
    // Убираем пароль из ответа
    const { password, ...adminWithoutPassword } = admin
    return { success: true, admin: adminWithoutPassword }
  } catch (e) {
    console.error('❌ [API] Ошибка получения профиля:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка получения профиля',
    })
  }
})
