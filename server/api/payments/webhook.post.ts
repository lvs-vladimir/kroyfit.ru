import { db } from '../../database/db'
import { purchases, courses } from '../../database/schema'
import { eq } from 'drizzle-orm'
import crypto from 'crypto'

const API_KEY = process.env.YOOKASSA_SECRET_KEY || 'live_Gn0WbDxR3hthCMkTu13qWuaVhXo-LPDJI_QN2P54-OM'

export default defineEventHandler(async (event) => {
  console.log('🟡 [API] POST /api/payments/webhook - Webhook от ЮКассы')
  
  try {
    const body = await readBody(event)
    
    // Проверка подписи webhook (опционально, но рекомендуется)
    const signature = getHeader(event, 'ye-signature')
    if (signature) {
      const bodyString = JSON.stringify(body)
      const expectedSignature = crypto
        .createHmac('sha256', API_KEY)
        .update(bodyString)
        .digest('hex')
      
      if (signature !== expectedSignature) {
        console.error('❌ [API] Неверная подпись webhook')
        // Не возвращаем ошибку, чтобы ЮКасса не повторяла
      }
    }
    
    console.log('📨 [API] Получено уведомление:', body.event)
    
    // Проверяем тип события
    const eventType = body.event
    const object = body.object
    
    if (!object || !object.id) {
      console.error('❌ [API] Неверный формат уведомления')
      return { received: true }
    }
    
    const paymentId = object.id
    const metadata = object.metadata || {}
    const purchaseId = metadata.purchaseId
    const userId = metadata.userId
    const courseId = metadata.courseId
    
    if (!purchaseId || !userId || !courseId) {
      console.error('❌ [API] Нет необходимых данных в metadata')
      return { received: true }
    }
    
    // Обновляем статус покупки в зависимости от события
    switch (eventType) {
      case 'payment.succeeded':
        console.log('✅ [API] Платеж успешен:', paymentId)
        
        // Проверяем, существует ли уже такая покупка
        const existingPurchase = await db.select()
          .from(purchases)
          .where(eq(purchases.id, purchaseId))
          .limit(1)
        
        if (existingPurchase.length === 0) {
          // Получаем информацию о курсе для сохранения цены
          const [course] = await db.select()
            .from(courses)
            .where(eq(courses.id, courseId))
            .limit(1)
          
          // СОЗДАЁМ покупку только при успешном платеже
          await db.insert(purchases).values({
            id: purchaseId,
            userId: userId,
            courseId: courseId,
            amount: course?.price || 0,
            paymentId: paymentId,
            status: 'completed',
            createdAt: new Date().toISOString(),
          })
          console.log('✅ [API] Новая покупка создана:', purchaseId)
        } else {
          // Обновляем существующую покупку
          await db.update(purchases)
            .set({ 
              status: 'completed',
              paymentId: paymentId
            })
            .where(eq(purchases.id, purchaseId))
          console.log('✅ [API] Покупка обновлена: completed')
        }
        break
        
      case 'payment.waiting_for_capture':
        console.log('⏳ [API] Платеж ожидает подтверждения:', paymentId)
        // Не создаём покупку, пока платеж не подтверждён
        break
        
      case 'payment.canceled':
        console.log('❌ [API] Платеж отменен:', paymentId)
        // Удаляем покупку если она была создана
        await db.delete(purchases)
          .where(eq(purchases.id, purchaseId))
        break
        
      case 'payment_method.active':
        console.log('✅ [API] Способ оплаты привязан:', paymentId)
        // Можно сохранить payment_method_id для будущих платежей
        break
        
      case 'refund.succeeded':
        console.log('💰 [API] Возврат успешен:', paymentId)
        await db.update(purchases)
          .set({ 
            status: 'refunded',
            paymentId: paymentId
          })
          .where(eq(purchases.id, purchaseId))
        break
        
      default:
        console.log('ℹ️ [API] Неизвестное событие:', eventType)
    }
    
    // Всегда возвращаем 200 OK
    return { received: true }e }
    
  } catch (error: any) {
    console.error('❌ [API] Ошибка обработки webhook:', error)
    // Всё равно возвращаем 200 чтобы ЮКасса не повторяла запрос
    return { received: true }
  }
})