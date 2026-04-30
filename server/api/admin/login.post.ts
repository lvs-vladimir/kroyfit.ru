import { db } from '../../database/db'
import { admins } from '../../database/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: 'Email и пароль обязательны',
    })
  }

  console.log('🔵 [API] Login attempt:', email)

  try {
    // Ищем администратора в БД
    const [admin] = await db.select().from(admins).where(eq(admins.email, email)).limit(1)

    if (!admin) {
      console.log('❌ [API] Admin not found:', email)
      throw createError({
        statusCode: 401,
        message: 'Неверные данные для входа',
      })
    }

    // Проверяем пароль
    if (admin.password !== password) {
      console.log('❌ [API] Invalid password for:', email)
      throw createError({
        statusCode: 401,
        message: 'Неверные данные для входа',
      })
    }

    // Проверяем что администратор активен
    if (!admin.isActive) {
      console.log('❌ [API] Admin account disabled:', email)
      throw createError({
        statusCode: 401,
        message: 'Аккаунт деактивирован',
      })
    }

    console.log('✅ [API] Login successful:', admin.name)

    // Генерируем токен
    const token = Buffer.from(`${admin.id}:${admin.email}:${Date.now()}`).toString('base64')

    return {
      token,
      user: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        roleId: admin.roleId,
      },
    }
  } catch (e: any) {
    if (e.statusCode) throw e
    console.error('❌ [API] Login error:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка при входе',
    })
  }
})