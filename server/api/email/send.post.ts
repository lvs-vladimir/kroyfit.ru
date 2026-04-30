import { sendEmail, purchaseEmailTemplate, welcomeEmailTemplate } from '../../services/email'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { type, to, name, courseName, amount } = body

  if (!type || !to) {
    throw createError({
      statusCode: 400,
      message: 'Не переданы обязательные параметры',
    })
  }

  let subject = ''
  let html = ''

  if (type === 'welcome') {
    subject = 'Добро пожаловать в Генетику Кроя!'
    html = welcomeEmailTemplate(name || 'Ученик')
  } else if (type === 'purchase') {
    subject = `Спасибо за покупку курса "${courseName}"!`
    html = purchaseEmailTemplate(name || 'Ученик', courseName || 'Курс', amount || 0)
  } else {
    throw createError({
      statusCode: 400,
      message: 'Неизвестный тип email',
    })
  }

  try {
    const result = await sendEmail(to, subject, html)
    
    if (result.success) {
      return { success: true, message: 'Email отправлен', messageId: result.messageId }
    } else {
      throw createError({
        statusCode: 500,
        message: 'Ошибка отправки email',
      })
    }
  } catch (e) {
    console.error('Ошибка:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка отправки email',
    })
  }
})
