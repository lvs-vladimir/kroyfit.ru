import { d as defineEventHandler, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
import { d as db, a as admins, r as roles } from '../../../_/db.mjs';
import { eq } from 'drizzle-orm';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'drizzle-orm/better-sqlite3';
import 'better-sqlite3';
import 'drizzle-orm/sqlite-core';

const settings_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { type, data } = body;
  if (!type || !data) {
    throw createError({
      statusCode: 400,
      message: "\u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B"
    });
  }
  try {
    if (type === "profile") {
      const { adminId, email, name, password } = data;
      const updateData = { email, name };
      if (password && password.length > 0) {
        updateData.password = password;
      }
      await db.update(admins).set(updateData).where(eq(admins.id, adminId));
      return { success: true, message: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D" };
    }
    if (type === "role") {
      const { id, name, description, permissions } = data;
      if (id) {
        await db.update(roles).set({
          name,
          description,
          canViewDashboard: permissions.canViewDashboard ? 1 : 0,
          canManageCourses: permissions.canManageCourses ? 1 : 0,
          canManageUsers: permissions.canManageUsers ? 1 : 0,
          canManagePurchases: permissions.canManagePurchases ? 1 : 0,
          canManageSettings: permissions.canManageSettings ? 1 : 0,
          canManageAdmins: permissions.canManageAdmins ? 1 : 0,
          canEditPlan: permissions.canEditPlan ? 1 : 0
        }).where(eq(roles.id, id));
      } else {
        const newId = crypto.randomUUID();
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
          canEditPlan: permissions.canEditPlan ? 1 : 0
        });
      }
      return { success: true, message: "\u0420\u043E\u043B\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430" };
    }
    if (type === "admin") {
      const { id, email, name, roleId, isActive } = data;
      if (id) {
        await db.update(admins).set({
          email,
          name,
          roleId,
          isActive: isActive ? 1 : 0
        }).where(eq(admins.id, id));
      } else {
        const newId = crypto.randomUUID();
        await db.insert(admins).values({
          id: newId,
          email,
          name,
          password: "temp_password",
          // TODO: хешировать
          roleId,
          isActive: isActive ? 1 : 0
        });
      }
      return { success: true, message: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D" };
    }
    throw createError({
      statusCode: 400,
      message: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F"
    });
  } catch (e) {
    console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445"
    });
  }
});

export { settings_post as default };
//# sourceMappingURL=settings.post.mjs.map
