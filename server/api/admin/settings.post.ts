import { db } from '../../database/db'
import { roles, admins, emailSettings, seoSettings, generalSettings } from '../../database/schema'
import { eq } from 'drizzle-orm'

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
      const { adminId, email, name, password } = data
      
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
      
      if (id) {
        console.log('🔄 [API] Обновление существующей роли:', id)
        await db.update(roles).set({
          name,
          description,
          canViewDashboard: permissions.canViewDashboard ? 1 : 0,
          canManageCourses: permissions.canManageCourses ? 1 : 0,
          canManageUsers: permissions.canManageUsers ? 1 : 0,
          canManagePurchases: permissions.canManagePurchases ? 1 : 0,
          canManageSettings: permissions.canManageSettings ? 1 : 0,
          canManageAdmins: permissions.canManageAdmins ? 1 : 0,
          canEditPlan: permissions.canEditPlan ? 1 : 0,
        }).where(eq(roles.id, id))
        console.log('✅ [API] Роль обновлена')
      } else {
        console.log('➕ [API] Создание новой роли')
        const newId = crypto.randomUUID()
        await db.insert(roles).values({
          id: newId,
          name,
          description,
          canViewDashboard: permissions.canViewDashboard ? 1 : 0,
          canManageCourses: permissions.canManageCourses ? 1 : 0,
          canManageUsers: permissions.canManageUsers ? 1 : 0,
          canManagePurchases: permissions.canManagePurchases ? 1 : 0,
          canManageSettings: permissions.canManageSettings ? 1 : 0,
          canManageAdmins: permissions.canManageAdmins ? 1 : 0,
          canEditPlan: permissions.canEditPlan ? 1 : 0,
        })
        console.log('✅ [API] Роль создана:', newId)
      }
      return { success: true, message: 'Роль сохранена' }
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
      }
      return { success: true, message: 'Администратор сохранен' }
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
