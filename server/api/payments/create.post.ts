import { db } from '../../database/db'
import { purchases, courses } from '../../database/schema'
import { eq } from 'drizzle-orm'

const SHOP_ID = process.env.YOOKASSA_SHOP_ID || '1344393'
const API_KEY = process.env.YOOKASSA_SECRET_KEY || 'live_Gn0WbDxR3hthCMkTu13qWuaVhXo-LPDJI_QN2P54-OM'

export default defineEventHandler(async (event) => {
  console.log('🟡 [API] POST /api/payments/create - Создание платежа ЮКасса')
  
  try {
    // Получаем текущего пользователя из cookie/session
    const body = await readBody(event)
    const { courseId, returnUrl } = body
    
    if (!courseId) {
      throw createError({ statusCode: 400, message: 'ID курса обязателен' })
    }
    
    // Проверяем, что пользователь авторизован (должен быть в cookie)
    const userCookie = getCookie(event, 'user')
    if (!userCookie) {
      throw createError({ statusCode: 401, message: 'Требуется авторизация' })
    }
    
    let user
    try {
      user = JSON.parse(userCookie)
    } catch (e) {
      throw createError({ statusCode: 401, message: 'Неверная сессия' })
    }
    
    // Получаем информацию о курсе
    const [course] = await db.select().from(courses).where(eq(courses.id, courseId)).limit(1)
    if (!course) {
      throw createError({ statusCode: 404, message: 'Курс не найден' })
    }
    
    // Проверяем, не покупал ли уже пользователь этот курс
    const existingPurchase = await db.select().from(purchases)
      .where(eq(purchases.userId, user.id))
      .limit(100)
    
    const alreadyPurchased = existingPurchase.some(p => p.courseId === courseId && p.status === 'completed')
    if (alreadyPurchased) {
      throw createError({ statusCode: 400, message: 'Курс уже приобретен' })
    }
    
    // Создаем уникальный idempotency key
    const idempotenceKey = crypto.randomUUID()
    
    // Создаем запись о покупке в БД (pending)
    const purchaseId = crypto.randomUUID()
    await db.insert(purchases).values({
      id: purchaseId,
      userId: user.id,
      courseId: courseId,
      amount: course.price,
      status: 'pending',
      createdAt: new Date().toISOString(),
    })
    
    // Создаем платеж в ЮКассе
    const paymentData = {
      amount: {
        value: course.price.toFixed(2),
        currency: 'RUB'
      },
      capture: true,
      confirmation: {
        type: 'redirect',
        return_url: returnUrl || 'https://kroyfit.ru/courses/' + course.slug
      },
      description: `Оплата курса: ${course.title}`,
      metadata: {
        purchaseId: purchaseId,
        userId: user.id,
        courseId: courseId
      }
    }
    
    console.log('🟡 [API] Отправка запроса в ЮКассу:', JSON.stringify(paymentData, null, 2))
    
    // Запрос к API ЮКассы
    const auth = Buffer.from(`${SHOP_ID}:${API_KEY}`).toString('base64')
    
    const response = await $fetch('https://api.yookassa.ru/v3/payments', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
        'Idempotence-Key': idempotenceKey
      },
      body: paymentData
    })
    
    console.log('✅ [API] Платеж создан в ЮКассе:', response.id)
    
    // Обновляем запись о покупке с payment_id
    await db.update(purchases)
      .set({ paymentId: response.id })
      .where(eq(purchases.id, purchaseId))
    
    return {
      success: true,
      confirmationUrl: response.confirmation.confirmation_url,
      paymentId: response.id,
      purchaseId: purchaseId
    }
    
  } catch (error: any) {
    console.error('❌ [API] Ошибка создания платежа:', error)
    
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      message: error.message || 'Ошибка создания платежа'
    })
  }
})