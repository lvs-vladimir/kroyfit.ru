import nodemailer from 'nodemailer'

// Конфигурация email (используем переменные окружения)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@kroyfit.ru',
      to,
      subject,
      html,
    })
    console.log('Email отправлен:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Ошибка отправки email:', error)
    return { success: false, error }
  }
}

// Шаблон: Добро пожаловать
export function welcomeEmailTemplate(name: string) {
  return `
    <h2>Добро пожаловать в Генетику Кроя! 👋</h2>
    <p>Привет, ${name}!</p>
    <p>Спасибо за регистрацию. Вы успешно создали аккаунт.</p>
    <p><a href="https://kroyfit.ru/admin">Перейти в личный кабинет</a></p>
    <hr>
    <p>С уважением,<br>Команда Генетики Кроя</p>
  `
}

// Шаблон: Успешная покупка
export function purchaseEmailTemplate(name: string, courseName: string, amount: number) {
  return `
    <h2>Спасибо за покупку! 🎉</h2>
    <p>Привет, ${name}!</p>
    <p>Вы успешно приобрели курс <strong>${courseName}</strong></p>
    <p><strong>Сумма:</strong> ${amount} ₽</p>
    <p>Доступ к курсу активирован. Вы добавлены в закрытую VK группу курса.</p>
    <p><a href="https://kroyfit.ru/admin">Начать обучение</a></p>
    <hr>
    <p>С уважением,<br>Команда Генетики Кроя</p>
  `
}

// Шаблон: Добавлен в VK группу
export function vkGroupEmailTemplate(name: string, groupName: string) {
  return `
    <h2>Вы добавлены в VK группу! 👥</h2>
    <p>Привет, ${name}!</p>
    <p>Вы успешно добавлены в закрытую VK группу: <strong>${groupName}</strong></p>
    <p><a href="https://vk.com">Перейти в ВКонтакте</a></p>
    <hr>
    <p>С уважением,<br>Команда Генетики Кроя</p>
  `
}
