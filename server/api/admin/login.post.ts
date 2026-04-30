// Временная база админов (позже будет в БД)
const admins = [
  {
    id: '1',
    email: 'admin@kroyfit.ru',
    password: 'admin123456', // В реальности должен быть хеш
    name: 'Admin',
    role: 'admin',
  },
]

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: 'Email и пароль обязательны',
    })
  }

  const admin = admins.find(a => a.email === email && a.password === password)

  if (!admin) {
    throw createError({
      statusCode: 401,
      message: 'Неверные данные для входа',
    })
  }

  // Генерируем простой токен (в реальности используйте JWT)
  const token = Buffer.from(`${admin.id}:${admin.email}:${Date.now()}`).toString('base64')

  return {
    token,
    user: {
      id: admin.id,
      email: admin.email,
      name: admin.name,
      role: admin.role,
    },
  }
})