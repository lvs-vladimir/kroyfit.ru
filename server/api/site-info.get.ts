import { db } from '../database/db'
import { courses, generalSettings, seoSettings } from '../database/schema'

export default defineEventHandler(async (event) => {
  console.log('🔵 [API] GET /api/site-info - Получение информации о сайте')
  
  try {
    const [general] = await db.select().from(generalSettings).limit(1)
    const [seo] = await db.select().from(seoSettings).limit(1)
    const coursesList = await db.select().from(courses)

    console.log('✅ [API] Информация о сайте загружена')
    
    return { 
      success: true,
      siteName: general?.siteName || 'Генетика Кроя',
      seo: {
        title: seo?.title || 'Генетика Кроя — Курсы кройки и шитья',
        description: seo?.description || 'Курсы кройки и шитья',
        keywords: seo?.keywords || 'кройка, шитье, курсы',
      },
      courses: coursesList,
    }
  } catch (e) {
    console.error('❌ [API] Ошибка получения информации о сайте:', e)
    // Возвращаем дефолтные значения при ошибке
    return { 
      success: true,
      siteName: 'Генетика Кроя',
      seo: {
        title: 'Генетика Кроя — Курсы кройки и шитья',
        description: 'Курсы кройки и шитья',
        keywords: 'кройка, шитье, курсы',
      },
      courses: [],
    }
  }
})