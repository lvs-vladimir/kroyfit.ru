import { db } from '../../database/db'
import { purchases, users, courses, vkGroups } from '../../database/schema'
import { eq } from 'drizzle-orm'
import { sendEmail, purchaseEmailTemplate, vkGroupEmailTemplate } from '../../services/email'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  if (body.event === 'payment.succeeded') {
    const { object } = body
    const purchaseId = object.metadata?.purchaseId

    if (purchaseId) {
      try {
        // Получаем информацию о покупке
        const purchase = await db.query.purchases.findFirst({
          where: eq(purchases.id, purchaseId),
        })

        if (!purchase) {
          return { success: false, message: 'Покупка не найдена' }
        }

        // Обновляем статус покупки
        await db
          .update(purchases)
          .set({ status: 'paid', paymentId: object.id })
          .where(eq(purchases.id, purchaseId))

        // Получаем данные пользователя
        const user = await db.query.users.findFirst({
          where: eq(users.id, purchase.userId),
        })

        // Получаем данные курса
        const course = await db.query.courses.findFirst({
          where: eq(courses.id, purchase.courseId),
        })

        if (user && course) {
          // Отправляем email о покупке
          if (user.email) {
            await sendEmail(
              user.email,
              `Спасибо за покупку курса "${course.title}"!`,
              purchaseEmailTemplate(user.name, course.title, purchase.amount)
            )
          }

          // Добавляем пользователя в VK группу
          if (user.vkId && course.vkGroupId) {
            try {
              const vkGroup = await db.query.vkGroups.findFirst({
                where: eq(vkGroups.courseSlug, course.slug),
              })

              if (vkGroup && vkGroup.token) {
                // Вызываем API VK для добавления в группу
                const vkResponse = await fetch('https://api.vk.com/method/groups.invite', {
                  method: 'POST',
                  body: new URLSearchParams({
                    group_id: vkGroup.vkId,
                    user_id: user.vkId,
                    access_token: vkGroup.token,
                    v: '5.131',
                  }),
                })

                const vkData = await vkResponse.json()

                if (!vkData.error) {
                  console.log(`Пользователь ${user.vkId} добавлен в группу ${vkGroup.name}`)

                  // Отправляем email о добавлении в группу
                  if (user.email) {
                    await sendEmail(
                      user.email,
                      `Вы добавлены в VK группу "${vkGroup.name}"!`,
                      vkGroupEmailTemplate(user.name, vkGroup.name)
                    )
                  }
                } else {
                  console.error('Ошибка VK API:', vkData.error)
                }
              }
            } catch (vkError) {
              console.error('Ошибка добавления в VK группу:', vkError)
            }
          }
        }

        console.log(`Платеж ${object.id} успешно обработан`)
        return { success: true, message: 'Платеж обработан' }
      } catch (e) {
        console.error('Ошибка обработки платежа:', e)
        throw createError({
          statusCode: 500,
          message: 'Ошибка обработки платежа',
        })
      }
    }
  }

  if (body.event === 'payment.canceled') {
    const { object } = body
    const purchaseId = object.metadata?.purchaseId

    if (purchaseId) {
      try {
        await db
          .update(purchases)
          .set({ status: 'cancelled' })
          .where(eq(purchases.id, purchaseId))

        console.log(`Платеж ${object.id} отменен`)
        return { success: true, message: 'Платеж отменен' }
      } catch (e) {
        console.error('Ошибка отмены платежа:', e)
      }
    }
  }

  return { success: true }
})
