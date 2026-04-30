import { db } from '../../database/db'
import { admins } from '../../database/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { adminId, email, name, password } = body

  if (!adminId || !email || !name) {
    throw createError({
      statusCode: 400,
      message: 'Не переданы обязательные параметры',
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
