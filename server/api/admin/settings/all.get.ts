import { db } from '../../../database/db'
import { vkGroups, emailSettings, seoSettings, generalSettings } from '../../../database/schema'

export default defineEventHandler(async (event) => {
  console.log('🔵 [API] GET /api/admin/settings/all - Получение всех настроек')
  
  try {
    const vk = await db.select().from(vkGroups)
    const email = await db.select().from(emailSettings)
    const seo = await db.select().from(seoSettings)
    const general = await db.select().from(generalSettings)

    console.log('✅ [API] Настройки загружены:', {
      vkGroups: vk.length,
      email: email.length,
      seo: seo.length,
      general: general.length
    })

    return { 
      success: true, 
      vkGroups: vk,
      email: email[0] || null,
      seo: seo[0] || null,
      general: general[0] || null
    }
  } catch (e) {
    console.error('❌ [API] Ошибка получения настроек:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка получения настроек',
    })
  }
})