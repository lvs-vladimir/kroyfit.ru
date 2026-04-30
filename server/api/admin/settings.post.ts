import { db } from '../../database/db'
import { roles, admins, users, courses, purchases, emailSettings, seoSettings, generalSettings } from '../../database/schema'
import { eq } from 'drizzle-orm'

// Получение adminId из токена
const getAdminIdFromToken = (event: any) => {
  const token = getCookie(event, 'admin-token')
  if (!token) return null
  
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8')
    return decoded.split(':')[0]
  } catch (e) {
    return null
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { type, data } = body

  console.log('🔵 [API] /api/admin/settings - Получен запрос:', { type, data })

  if (!type || !data) {
    console.error('❌ [API] Не переданы обязательные параметры')
    throw createError({
      statusCode: 400,
      message: 'Не переданы обязательные параметры',
    })
  }

  try {
    if (type === 'profile') {
      console.log('🟡 [API] Сохранение профиля администратора...')
      
      // Получаем adminId из токена (безопасно)
      const adminId = getAdminIdFromToken(event)
      if (!adminId) {
        throw createError({
          statusCode: 401,
          message: 'Не авторизован',
        })
      }
      
      const { email, name, password } = data
      
      console.log('📝 [API] Данные для обновления:', { adminId, email, name, hasPassword: !!password })
      
      const updateData: any = { email, name }
      if (password && password.length > 0) {
        updateData.password = password
      }

      console.log('🔄 [API] Выполняю UPDATE в БД...')
      const result = await db.update(admins).set(updateData).where(eq(admins.id, adminId))
      console.log('✅ [API] UPDATE выполнен успешно:', result)
      
      return { success: true, message: 'Профиль обновлен' }
    }

    if (type === 'role') {
      console.log('🟡 [API] Сохранение роли...')
      const { id, name, description, permissions } = data
      
      // Проверяем permissions
      const perms = permissions || {}
      
      if (id) {
        console.log('🔄 [API] Обновление существующей роли:', id)
        await db.update(roles).set({
          name,
          description,
          canViewDashboard: perms.canViewDashboard ? 1 : 0,
          canManageCourses: perms.canManageCourses ? 1 : 0,
          canManageUsers: perms.canManageUsers ? 1 : 0,
          canManagePurchases: perms.canManagePurchases ? 1 : 0,
          canManageSettings: perms.canManageSettings ? 1 : 0,
          canManageAdmins: perms.canManageAdmins ? 1 : 0,
          canEditPlan: perms.canEditPlan ? 1 : 0,
          canManageProfile: perms.canManageProfile ? 1 : 0,
          canManageRoles: perms.canManageRoles ? 1 : 0,
          canManageVkGroups: perms.canManageVkGroups ? 1 : 0,
          canManageEmail: perms.canManageEmail ? 1 : 0,
          canManageSeo: perms.canManageSeo ? 1 : 0,
          canManageGeneralSettings: perms.canManageGeneralSettings ? 1 : 0,
        }).where(eq(roles.id, id))
        console.log('✅ [API] Роль обновлена')
        return { success: true, message: 'Роль сохранена', id }
      } else {
        console.log('➕ [API] Создание новой роли')
        const newId = crypto.randomUUID()
        await db.insert(roles).values({
          id: newId,
          name,
          description,
          canViewDashboard: perms.canViewDashboard ? 1 : 0,
          canManageCourses: perms.canManageCourses ? 1 : 0,
          canManageUsers: perms.canManageUsers ? 1 : 0,
          canManagePurchases: perms.canManagePurchases ? 1 : 0,
          canManageSettings: perms.canManageSettings ? 1 : 0,
          canManageAdmins: perms.canManageAdmins ? 1 : 0,
          canEditPlan: perms.canEditPlan ? 1 : 0,
          canManageProfile: perms.canManageProfile ? 1 : 0,
          canManageRoles: perms.canManageRoles ? 1 : 0,
          canManageVkGroups: perms.canManageVkGroups ? 1 : 0,
          canManageEmail: perms.canManageEmail ? 1 : 0,
          canManageSeo: perms.canManageSeo ? 1 : 0,
          canManageGeneralSettings: perms.canManageGeneralSettings ? 1 : 0,
        })
        console.log('✅ [API] Роль создана:', newId)
        return { success: true, message: 'Роль сохранена', id: newId }
      }
    }

    if (type === 'role-delete') {
      console.log('🗑️ [API] Удаление роли:', data.id)
      await db.delete(roles).where(eq(roles.id, data.id))
      console.log('✅ [API] Роль удалена')
      return { success: true, message: 'Роль удалена' }
    }

    if (type === 'course') {
      console.log('🟡 [API] Создание курса...')
      const { title, description, slug, price, category, duration, lessonsCount, isPublished, image } = data
      
      if (!title || !slug) {
        throw createError({ statusCode: 400, message: 'Название и slug обязательны' })
      }
      
      // Проверяем уникальность slug
      const existing = await db.select().from(courses).where(eq(courses.slug, slug)).limit(1)
      if (existing.length > 0) {
        throw createError({ statusCode: 400, message: 'Курс с таким slug уже существует' })
      }
      
      const newCourse = {
        id: crypto.randomUUID(),
        title,
        description: description || '',
        slug,
        price: price || 0,
        category: category || 'Базовый',
        duration: duration || '',
        lessonsCount: lessonsCount || 0,
        isPublished: isPublished ? 1 : 0,
        image: image || '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      
      await db.insert(courses).values(newCourse)
      console.log('✅ [API] Курс создан:', newCourse.id)
      return { success: true, message: 'Курс создан', course: newCourse }
    }
    
    if (type === 'course-update') {
      console.log('🟡 [API] Обновление курса...')
      const { id: courseId, title, description, slug, price, category, duration, lessonsCount, isPublished, image } = data
      
      if (!courseId) {
        throw createError({ statusCode: 400, message: 'ID курса обязателен' })
      }
      
      const existing = await db.select().from(courses).where(eq(courses.id, courseId)).limit(1)
      if (existing.length === 0) {
        throw createError({ statusCode: 404, message: 'Курс не найден' })
      }
      
      // Проверяем slug если изменился
      if (slug && slug !== existing[0].slug) {
        const slugExists = await db.select().from(courses).where(eq(courses.slug, slug)).limit(1)
        if (slugExists.length > 0 && slugExists[0].id !== courseId) {
          throw createError({ statusCode: 400, message: 'Курс с таким slug уже существует' })
        }
      }
      
      const updateData: any = { updatedAt: new Date().toISOString() }
      if (title !== undefined) updateData.title = title
      if (description !== undefined) updateData.description = description
      if (slug !== undefined) updateData.slug = slug
      if (price !== undefined) updateData.price = price
      if (category !== undefined) updateData.category = category
      if (duration !== undefined) updateData.duration = duration
      if (lessonsCount !== undefined) updateData.lessonsCount = lessonsCount
      if (isPublished !== undefined) updateData.isPublished = isPublished ? 1 : 0
      if (image !== undefined) updateData.image = image
      
      await db.update(courses).set(updateData).where(eq(courses.id, courseId))
      
      const [updatedCourse] = await db.select().from(courses).where(eq(courses.id, courseId)).limit(1)
      console.log('✅ [API] Курс обновлен:', courseId)
      return { success: true, message: 'Курс обновлен', course: updatedCourse }
    }
    
    if (type === 'course-delete') {
      console.log('🗑️ [API] Удаление курса:', data.id)
      
      // Проверяем что курс существует
      const existing = await db.select().from(courses).where(eq(courses.id, data.id)).limit(1)
      if (existing.length === 0) {
        throw createError({ statusCode: 404, message: 'Курс не найден' })
      }
      
      await db.delete(courses).where(eq(courses.id, data.id))
      console.log('✅ [API] Курс удален:', data.id)
      return { success: true, message: 'Курс удален' }
    }

    if (type === 'admin') {
      console.log('🟡 [API] Сохранение администратора...')
      const { id, email, name, roleId, isActive } = data
      
      if (id) {
        console.log('🔄 [API] Обновление администратора:', id)
        await db.update(admins).set({
          email,
          name,
          roleId,
          isActive: isActive ? 1 : 0,
        }).where(eq(admins.id, id))
        console.log('✅ [API] Администратор обновлен')
      } else {
        console.log('➕ [API] Создание нового администратора')
        const newId = crypto.randomUUID()
        await db.insert(admins).values({
          id: newId,
          email,
          name,
          password: 'temp_password',
          roleId,
          isActive: isActive ? 1 : 0,
        })
        console.log('✅ [API] Администратор создан:', newId)
        return { success: true, message: 'Администратор сохранен', id: newId }
      }
      return { success: true, message: 'Администратор сохранен' }
    }

    if (type === 'admin-delete') {
      console.log('🗑️ [API] Удаление администратора:', data.id)
      await db.delete(admins).where(eq(admins.id, data.id))
      console.log('✅ [API] Администратор удален')
      return { success: true, message: 'Администратор удален' }
    }
    
    if (type === 'user-update') {
      console.log('🟡 [API] Обновление пользователя...')
      const { id: userId, name, email, vkId, avatar } = data
      
      if (!userId) {
        throw createError({ statusCode: 400, message: 'ID пользователя обязателен' })
      }
      
      // Проверяем что пользователь существует
      const existing = await db.select().from(users).where(eq(users.id, userId)).limit(1)
      if (existing.length === 0) {
        throw createError({ statusCode: 404, message: 'Пользователь не найден' })
      }
      
      const updateData: any = {}
      if (name !== undefined) updateData.name = name
      if (email !== undefined) updateData.email = email
      if (vkId !== undefined) updateData.vkId = vkId
      if (avatar !== undefined) updateData.avatar = avatar
      
      await db.update(users).set(updateData).where(eq(users.id, userId))
      
      const [updatedUser] = await db.select().from(users).where(eq(users.id, userId)).limit(1)
      console.log('✅ [API] Пользователь обновлен:', userId)
      return { success: true, message: 'Пользователь обновлен', user: updatedUser }
    }

    if (type === 'email') {
      console.log('🟡 [API] Сохранение email настроек...')
      const { smtpHost, smtpPort, smtpUser, smtpPass, smtpFrom, enableWelcome, enablePurchase, enableVkGroup } = data
      await db.update(emailSettings).set({
        smtpHost, smtpPort, smtpUser, smtpPass, smtpFrom,
        enableWelcome: enableWelcome ? 1 : 0,
        enablePurchase: enablePurchase ? 1 : 0,
        enableVkGroup: enableVkGroup ? 1 : 0,
      }).where(eq(emailSettings.id, 1))
      console.log('✅ [API] Email настройки сохранены')
      return { success: true, message: 'Email настройки сохранены' }
    }

    if (type === 'seo') {
      console.log('🟡 [API] Сохранение SEO настроек...')
      const { title, description, keywords, enableSitemap, enableRobots } = data
      await db.update(seoSettings).set({
        title, description, keywords,
        enableSitemap: enableSitemap ? 1 : 0,
        enableRobots: enableRobots ? 1 : 0,
      }).where(eq(seoSettings.id, 1))
      console.log('✅ [API] SEO настройки сохранены')
      return { success: true, message: 'SEO настройки сохранены' }
    }

    if (type === 'general') {
      console.log('🟡 [API] Сохранение общих настроек...')
      const { siteName, adminEmail } = data
      await db.update(generalSettings).set({
        siteName, adminEmail,
      }).where(eq(generalSettings.id, 1))
      console.log('✅ [API] Общие настройки сохранены')
      return { success: true, message: 'Общие настройки сохранены' }
    }

    console.error('❌ [API] Неизвестный тип сохранения:', type)
    throw createError({
      statusCode: 400,
      message: 'Неизвестный тип сохранения',
    })
  } catch (e) {
    console.error('❌ [API] Ошибка сохранения:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка сохранения данных',
    })
  }
})
