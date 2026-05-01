import { db } from '../../database/db'
import { users } from '../../database/schema'
import { eq } from 'drizzle-orm'
import crypto from 'crypto'
import { writeFileSync, mkdirSync } from 'fs'
import { resolve } from 'path'

export default defineEventHandler(async (event) => {
  console.log('🟡 [API] POST /api/auth/vk - Авторизация через VK ID')
  
  try {
    const body = await readBody(event)
    const { vkId, name, email, avatar } = body
    
    // Проверяем, что пришли данные пользователя
    if (!vkId) {
      throw createError({ statusCode: 400, message: 'vkId обязателен' })
    }
    
    console.log('🟡 [API] Данные пользователя:', { vkId, name })
    
    // Загружаем аватарку локально если она есть
    let localAvatarPath = null
    if (avatar) {
      try {
        console.log('🟡 [API] Загружаем аватарку:', avatar)
        
        // Создаём директорию для аватарок если её нет
        const avatarsDir = resolve('/root/kroyfit/public/avatars')
        mkdirSync(avatarsDir, { recursive: true })
        
        // Скачиваем аватарку используя встроенный fetch
        const response = await fetch(avatar)
        const buffer = await response.arrayBuffer()
        
        // Сохраняем с уникальным именем
        const filename = `${vkId}-${Date.now()}.jpg`
        const filepath = resolve(avatarsDir, filename)
        writeFileSync(filepath, Buffer.from(buffer))
        
        localAvatarPath = `/avatars/${filename}`
        console.log('✅ [API] Аватарка сохранена:', localAvatarPath)
      } catch (e: any) {
        console.error('❌ [API] Ошибка загрузки аватарки:', e.message)
        // Продолжаем без аватарки
      }
    }
    
    // Проверяем, существует ли пользователь
    const existingUsers = await db.select()
      .from(users)
      .where(eq(users.vkId, vkId.toString()))
      .limit(1)
    
    let user
    
    if (existingUsers.length > 0) {
      // Обновляем существующего пользователя
      user = existingUsers[0]
      console.log('✅ [API] Пользователь найден:', user.id)
    } else {
      // Создаем нового пользователя
      const userId = crypto.randomUUID()
      await db.insert(users).values({
        id: userId,
        vkId: vkId.toString(),
        name: name || 'VK Пользователь',
        email: email || null,
        avatar: localAvatarPath || null,
        createdAt: new Date().toISOString(),
      })
      
      user = {
        id: userId,
        vkId: vkId.toString(),
        name: name || 'VK Пользователь',
        email: email || null,
        avatar: localAvatarPath || null,
      }
      
      console.log('✅ [API] Новый пользователь создан:', userId)
    }
    
    // Устанавливаем cookie
    setCookie(event, 'user', JSON.stringify({
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      vkId: user.vkId,
    }), {
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 30, // 30 дней
      path: '/',
    })
    
    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      }
    }
    
  } catch (error: any) {
    console.error('❌ [API] Ошибка авторизации VK:', error.message)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Ошибка авторизации'
    })
  }
})
