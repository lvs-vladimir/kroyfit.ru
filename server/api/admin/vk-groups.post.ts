import { db } from '../../database/db'
import { vkGroups } from '../../database/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { action, data } = body

  console.log('🔵 [API] /api/admin/vk-groups - Действие:', action)

  try {
    if (action === 'create') {
      const { name, vkId, courseSlug, token } = data
      const id = crypto.randomUUID()
      await db.insert(vkGroups).values({ id, name, vkId, courseSlug, token })
      console.log('✅ [API] VK группа создана:', id)
      return { success: true, group: { id, name, vkId, courseSlug, token } }
    }

    if (action === 'update') {
      const { id, name, vkId, courseSlug, token } = data
      await db.update(vkGroups).set({ name, vkId, courseSlug, token }).where(eq(vkGroups.id, id))
      console.log('✅ [API] VK группа обновлена:', id)
      return { success: true }
    }

    if (action === 'delete') {
      const { id } = data
      await db.delete(vkGroups).where(eq(vkGroups.id, id))
      console.log('✅ [API] VK группа удалена:', id)
      return { success: true }
    }

    console.error('❌ [API] Неизвестное действие:', action)
    throw createError({ statusCode: 400, message: 'Неизвестное действие' })
  } catch (e) {
    console.error('❌ [API] Ошибка:', e)
    throw createError({ statusCode: 500, message: 'Ошибка операции с VK группой' })
  }
})