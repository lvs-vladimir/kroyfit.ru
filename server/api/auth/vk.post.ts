import { db } from '../../database/db'
import { users } from '../../database/schema'
import { eq } from 'drizzle-orm'
import crypto from 'crypto'

const VK_APP_ID = process.env.VK_APP_ID || '54572308'
const VK_APP_SECRET = process.env.VK_APP_SECRET || ''
const VK_REDIRECT_URL = process.env.VK_REDIRECT_URL || 'https://kroyfit.ru'

export default defineEventHandler(async (event) => {
  console.log('🟡 [API] POST /api/auth/vk - Авторизация через VK ID')
  
  try {
    const body = await readBody(event)
    const { code, deviceId, state } = body
    
    if (!code || !deviceId) {
      throw createError({ statusCode: 400, message: 'code и deviceId обязательны' })
    }
    
    // Обмен code на access_token через VK API
    console.log('🟡 [API] Обмен code на access_token...')
    
    const tokenResponse = await $fetch('https://id.vk.com/oauth2/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: VK_APP_ID,
        client_secret: VK_APP_SECRET,
        redirect_uri: VK_REDIRECT_URL,
        code: code,
        device_id: deviceId,
      }).toString(),
    })
    
    if (!tokenResponse.access_token) {
      throw createError({ statusCode: 400, message: 'Ошибка получения токена VK' })
    }
    
    // Получаем данные пользователя из VK API
    const vkUserData = await $fetch('https://api.vk.com/method/users.get', {
      params: {
        access_token: tokenResponse.access_token,
        v: '5.131',
        fields: 'photo_200',
      },
    })
    
    if (!vkUserData.response || !vkUserData.response[0]) {
      throw createError({ statusCode: 400, message: 'Ошибка получения данных пользователя VK' })
    }
    
    const vkUser = vkUserData.response[0]
    
    console.log('✅ [API] Данные пользователя VK получены:', vkUser.id)
    
    // Проверяем, существует ли пользователь с таким vkId
    const existingUsers = await db.select()
      .from(users)
      .where(eq(users.vkId, vkUser.id.toString()))
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
        vkId: vkUser.id.toString(),
        name: vkUser.first_name + (vkUser.last_name ? ' ' + vkUser.last_name : ''),
        email: null,
        avatar: vkUser.photo_200 || null,
        createdAt: new Date().toISOString(),
      })
      
      user = {
        id: userId,
        vkId: vkUser.id.toString(),
        name: vkUser.first_name + (vkUser.last_name ? ' ' + vkUser.last_name : ''),
        email: null,
        avatar: vkUser.photo_200 || null,
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
    console.error('❌ [API] Ошибка авторизации VK:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Ошибка авторизации'
    })
  }
})