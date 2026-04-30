import { db } from '../../database/db'
import { users } from '../../database/schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { vkId, name, email, avatar } = body

  if (!name) {
    throw createError({
      statusCode: 400,
      message: 'Имя обязательно',
    })
  }

  try {
    const id = crypto.randomUUID()
    await db.insert(users).values({
      id,
      vkId: vkId || null,
      name,
      email: email || null,
      avatar: avatar || null,
    })

    return { success: true, message: 'Пользователь создан', id }
  } catch (e) {
    console.error('Ошибка создания пользователя:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка создания пользователя',
    })
  }
})
