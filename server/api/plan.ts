import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  const method = event.method
  const planPath = join(process.cwd(), 'PLAN.md')

  if (method === 'GET') {
    try {
      const content = readFileSync(planPath, 'utf-8')
      return { success: true, content }
    } catch (e) {
      throw createError({
        statusCode: 404,
        message: 'PLAN.md не найден',
      })
    }
  }

  if (method === 'POST') {
    const body = await readBody(event)
    
    if (!body.content) {
      throw createError({
        statusCode: 400,
        message: 'Контент не передан',
      })
    }

    try {
      writeFileSync(planPath, body.content, 'utf-8')
      return { success: true, message: 'План сохранен' }
    } catch (e) {
      throw createError({
        statusCode: 500,
        message: 'Ошибка сохранения файла',
      })
    }
  }

  throw createError({
    statusCode: 405,
    message: 'Метод не поддерживается',
  })
})
