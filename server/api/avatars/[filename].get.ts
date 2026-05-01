import { readFileSync } from 'fs'
import { resolve } from 'path'

export default defineEventHandler(async (event) => {
  const filename = getRouterParam(event, 'filename')
  
  if (!filename) {
    throw createError({ statusCode: 400, message: 'Filename required' })
  }
  
  try {
    const filepath = resolve('/root/kroyfit/public/avatars', filename)
    
    // Проверяем, что путь безопасен (не выходит за пределы директории)
    if (!filepath.startsWith('/root/kroyfit/public/avatars')) {
      throw createError({ statusCode: 403, message: 'Access denied' })
    }
    
    const imageBuffer = readFileSync(filepath)
    
    // Устанавливаем правильный Content-Type
    setHeader(event, 'Content-Type', 'image/jpeg')
    setHeader(event, 'Cache-Control', 'public, max-age=31536000')
    
    return imageBuffer
  } catch (error: any) {
    console.error('❌ [API] Ошибка загрузки аватарки:', error.message)
    throw createError({ statusCode: 404, message: 'Avatar not found' })
  }
})
