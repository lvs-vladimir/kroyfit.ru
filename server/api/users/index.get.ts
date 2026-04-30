import { db } from '../../database/db'
import { users } from '../../database/schema'

export default defineEventHandler(async () => {
  try {
    const allUsers = await db.select().from(users)
    return { success: true, users: allUsers }
  } catch (e) {
    // Если таблица не существует, возвращаем пустой массив
    return { success: true, users: [] }
  }
})
