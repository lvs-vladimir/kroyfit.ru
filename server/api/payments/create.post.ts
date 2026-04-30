import { db } from '../../database/db'
import { purchases } from '../../database/schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { userId, courseId, amount } = body

  if (!userId || !courseId || !amount) {
    throw createError({
      statusCode: 400,
      message: 'Не переданы обязательные параметры',
    })
  }

  try {
    // Создаем запись о покупке со статусом pending
    const purchaseId = crypto.randomUUID()
    
    await db.insert(purchases).values({
      id: purchaseId,
      userId,
      courseId,
      amount,
      status: 'pending',
    })

    // TODO: Интеграция с ЮKassa API
    // const yookassa = new YooKassa({
    //   shopId: process.env.YOOKASSA_SHOP_ID,
    //   secretKey: process.env.YOOKASSA_SECRET_KEY,
    // })
    
    // const payment = await yookassa.createPayment({
    //   amount: { value: amount / 100, currency: 'RUB' },
    //   confirmation: { type: 'redirect', return_url: 'https://kroyfit.ru/payment-success' },
    //   metadata: { purchaseId },
    // })

    return {
      success: true,
      purchaseId,
      message: 'Платеж создан (тестовый режим)',
      // paymentUrl: payment.confirmation.confirmation_url,
    }
  } catch (e) {
    console.error('Ошибка создания платежа:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка создания платежа',
    })
  }
})
