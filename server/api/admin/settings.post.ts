import { db } from '../../database/db'
import { roles, admins } from '../../database/schema'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { type, data } = body

  if (!type || !data) {
    throw createError({
      statusCode: 400,
      message: 'Не переданы обязательные параметры',
    })
  }

  try {
    if (type === 'profile') {
      // Сохранение профиля администратора
      const { adminId, email, name, password } = data
      
      const updateData: any = { email, name }
      if (password && password.length > 0) {
        updateData.password = password
      }

      await db.update(admins).set(updateData).where(eq(admins.id, adminId))
      return { success: true, message: 'Профиль обновлен' }
    }

    if (type === 'role') {
      // Сохранение роли
      const { id, name, description, permissions } = data
      
      if (id) {
        // Обновление существующей роли
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
      } else {
        // Создание новой роли
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
      }
      return { success: true, message: 'Роль сохранена' }
    }

    if (type === 'admin') {
      // Сохранение администратора
      const { id, email, name, roleId, isActive } = data
      
      if (id) {
        await db.update(admins).set({
          email,
          name,
          roleId,
          isActive: isActive ? 1 : 0,
        }).where(eq(admins.id, id))
      } else {
        const newId = crypto.randomUUID()
        await db.insert(admins).values({
          id: newId,
          email,
          name,
          password: 'temp_password', // TODO: хешировать
          roleId,
          isActive: isActive ? 1 : 0,
        })
      }
      return { success: true, message: 'Администратор сохранен' }
    }

    throw createError({
      statusCode: 400,
      message: 'Неизвестный тип сохранения',
    })
  } catch (e) {
    console.error('Ошибка сохранения:', e)
    throw createError({
      statusCode: 500,
      message: 'Ошибка сохранения данных',
    })
  }
})
