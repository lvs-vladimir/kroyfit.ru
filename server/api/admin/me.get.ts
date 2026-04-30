import { db } from '../../database/db'
import { admins, roles } from '../../database/schema'
import { eq } from 'drizzle-orm'

// Получение adminId из токена
const getAdminIdFromToken = (event: any) => {
  const token = getCookie(event, 'admin-token')
  if (!token) return null
  
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8')
    return decoded.split(':')[0]
  } catch (e) {
    return null
  }
}

export default defineEventHandler(async (event) => {
  console.log('🔵 [API] GET /api/admin/me - Получение текущего пользователя')
  
  const adminId = getAdminIdFromToken(event)
  
  if (!adminId) {
    throw createError({
      statusCode: 401,
      message: 'Не авторизован',
    })
  }

  try {
    const [admin] = await db.select().from(admins).where(eq(admins.id, adminId)).limit(1)

    if (!admin || !admin.isActive) {
      throw createError({
        statusCode: 401,
        message: 'Администратор не найден или деактивирован',
      })
    }

    // Получаем роль с правами
    let role = null
    if (admin.roleId) {
      const [roleData] = await db.select().from(roles).where(eq(roles.id, admin.roleId)).limit(1)
      role = roleData
    }

    // Убираем пароль
    const { password, ...adminWithoutPassword } = admin

    console.log('✅ [API] Пользователь загружен:', admin.name)
    return { 
      success: true, 
      admin: adminWithoutPassword,
      role: role,
    }
  } catch (e: any) {
    if (e.statusCode) throw e
    console.error('❌ [API] Ошибка получения пользователя:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка получения пользователя',
    })
  }
})