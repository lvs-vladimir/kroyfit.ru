import { db } from '../../database/db'
import { admins } from '../../database/schema'
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
  const body = await readBody(event)
  const { email, name, password } = body
  
  // Получаем adminId из токена
  const adminId = getAdminIdFromToken(event)
  
  if (!adminId) {
    throw createError({
      statusCode: 401,
      message: 'Не авторизован',
    })
  }

  if (!email || !name) {
    throw createError({
      statusCode: 400,
      message: 'Email и имя обязательны',
    })
  }

  try {
    const updateData: any = {
      email,
      name,
    }

    // Если передан пароль, обновляем его
    if (password && password.length > 0) {
      // TODO: хешировать пароль перед сохранением
      updateData.password = password
    }

    await db
      .update(admins)
      .set(updateData)
      .where(eq(admins.id, adminId))

    return { success: true, message: 'Профиль обновлен' }
  } catch (e) {
    console.error('Ошибка обновления профиля:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка обновления профиля',
    })
  }
})