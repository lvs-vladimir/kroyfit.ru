import { db } from '../../database/db'
import { purchases, courses, users, vkGroups } from '../../database/schema'
import { eq } from 'drizzle-orm'
import crypto from 'crypto'

const API_KEY = process.env.YOOKASSA_SECRET_KEY || 'live_Gn0WbDxR3hthCMkTu13qWuaVhXo-LPDJI_QN2P54-OM'

// Отправляем приглашение в VK группу
async function sendVkGroupInvite(userVkId: string, courseSlug: string) {
  try {
    const [vkGroup] = await db.select()
      .from(vkGroups)
      .where(eq(vkGroups.courseSlug, courseSlug))
      .limit(1)

    if (!vkGroup) {
      console.log('ℹ️ [VK] Группа не привязана к курсу:', courseSlug)
      return
    }

    if (!vkGroup.token) {
      console.error('❌ [VK] Нет токена для группы:', vkGroup.name)
      return
    }

    // vk_id может быть строкой (shortname) или числом - получаем числовой ID через API
    let numericGroupId = vkGroup.vkId
    if (isNaN(Number(numericGroupId))) {
      console.log('🟡 [VK] vk_id не числовой, получаем числовой ID через API...')
      const resolveResp = await fetch(
        `https://api.vk.com/method/groups.getById?group_id=${numericGroupId}&access_token=${vkGroup.token}&v=5.131`
      )
      const resolveData = await resolveResp.json()
      if (resolveData.response?.[0]?.id) {
        numericGroupId = String(resolveData.response[0].id)
        console.log('✅ [VK] Числовой ID группы:', numericGroupId)
      } else {
        console.error('❌ [VK] Не удалось получить числовой ID группы:', resolveData)
        return
      }
    }

    console.log(`🟡 [VK] Отправляем приглашение user ${userVkId} в группу ${numericGroupId} (${vkGroup.name})`)

    const url = `https://api.vk.com/method/groups.invite?group_id=${numericGroupId}&user_id=${userVkId}&access_token=${vkGroup.token}&v=5.131`
    const response = await fetch(url)
    const data = await response.json()

    if (data.response === 1) {
      console.log('✅ [VK] Приглашение успешно отправлено!')
    } else if (data.error) {
      console.error('❌ [VK] Ошибка VK API:', data.error.error_code, data.error.error_msg)
    } else {
      console.log('ℹ️ [VK] Ответ VK:', JSON.stringify(data))
    }
  } catch (e: any) {
    console.error('❌ [VK] Исключение при отправке приглашения:', e.message)
  }
}

export default defineEventHandler(async (event) => {
  console.log('🟡 [API] POST /api/payments/webhook - Webhook от ЮКассы')

  try {
    const body = await readBody(event)

    // Проверка подписи webhook
    const signature = getHeader(event, 'ye-signature')
    if (signature) {
      const bodyString = JSON.stringify(body)
      const expectedSignature = crypto
        .createHmac('sha256', API_KEY)
        .update(bodyString)
        .digest('hex')

      if (signature !== expectedSignature) {
        console.error('❌ [API] Неверная подпись webhook')
      }
    }

    console.log('📨 [API] Получено уведомление:', body.event)

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

    switch (eventType) {
      case 'payment.succeeded':
        console.log('✅ [API] Платеж успешен:', paymentId)

        // Проверяем, существует ли уже такая покупка
        const existingPurchase = await db.select()
          .from(purchases)
          .where(eq(purchases.id, purchaseId))
          .limit(1)

        if (existingPurchase.length === 0) {
          // Получаем курс
          const [course] = await db.select()
            .from(courses)
            .where(eq(courses.id, courseId))
            .limit(1)

          // Создаём покупку
          await db.insert(purchases).values({
            id: purchaseId,
            userId: userId,
            courseId: courseId,
            amount: course?.price || 0,
            paymentId: paymentId,
            status: 'completed',
            createdAt: new Date().toISOString(),
          })
          console.log('✅ [API] Покупка создана:', purchaseId)

          // Отправляем приглашение в VK группу
          if (course?.slug) {
            const [user] = await db.select()
              .from(users)
              .where(eq(users.id, userId))
              .limit(1)

            if (user?.vkId) {
              await sendVkGroupInvite(user.vkId, course.slug)
            } else {
              console.log('ℹ️ [VK] У пользователя нет vkId, приглашение не отправлено')
            }
          }
        } else {
          await db.update(purchases)
            .set({ status: 'completed', paymentId: paymentId })
            .where(eq(purchases.id, purchaseId))
          console.log('✅ [API] Покупка обновлена: completed')
        }
        break

      case 'payment.waiting_for_capture':
        console.log('⏳ [API] Платеж ожидает подтверждения:', paymentId)
        break

      case 'payment.canceled':
        console.log('❌ [API] Платеж отменен:', paymentId)
        await db.delete(purchases).where(eq(purchases.id, purchaseId))
        break

      case 'refund.succeeded':
        console.log('💰 [API] Возврат успешен:', paymentId)
        await db.update(purchases)
          .set({ status: 'refunded', paymentId: paymentId })
          .where(eq(purchases.id, purchaseId))
        break

      default:
        console.log('ℹ️ [API] Неизвестное событие:', eventType)
    }

    return { received: true }

  } catch (error: any) {
    console.error('❌ [API] Ошибка обработки webhook:', error)
    return { received: true }
  }
})
