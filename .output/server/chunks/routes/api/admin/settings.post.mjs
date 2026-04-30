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
  console.log("\u{1F535} [API] /api/admin/settings - \u041F\u043E\u043B\u0443\u0447\u0435\u043D \u0437\u0430\u043F\u0440\u043E\u0441:", { type, data });
  if (!type || !data) {
    console.error("\u274C [API] \u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B");
    throw createError({
      statusCode: 400,
      message: "\u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B"
    });
  }
  try {
    if (type === "profile") {
      console.log("\u{1F7E1} [API] \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430...");
      const { adminId, email, name, password } = data;
      console.log("\u{1F4DD} [API] \u0414\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F:", { adminId, email, name, hasPassword: !!password });
      const updateData = { email, name };
      if (password && password.length > 0) {
        updateData.password = password;
      }
      console.log("\u{1F504} [API] \u0412\u044B\u043F\u043E\u043B\u043D\u044F\u044E UPDATE \u0432 \u0411\u0414...");
      const result = await db.update(admins).set(updateData).where(eq(admins.id, adminId));
      console.log("\u2705 [API] UPDATE \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D \u0443\u0441\u043F\u0435\u0448\u043D\u043E:", result);
      return { success: true, message: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D" };
    }
    if (type === "role") {
      console.log("\u{1F7E1} [API] \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0440\u043E\u043B\u0438...");
      const { id, name, description, permissions } = data;
      if (id) {
        console.log("\u{1F504} [API] \u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u0440\u043E\u043B\u0438:", id);
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
        console.log("\u2705 [API] \u0420\u043E\u043B\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430");
      } else {
        console.log("\u2795 [API] \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0439 \u0440\u043E\u043B\u0438");
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
        console.log("\u2705 [API] \u0420\u043E\u043B\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u0430:", newId);
      }
      return { success: true, message: "\u0420\u043E\u043B\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430" };
    }
    if (type === "admin") {
      console.log("\u{1F7E1} [API] \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430...");
      const { id, email, name, roleId, isActive } = data;
      if (id) {
        console.log("\u{1F504} [API] \u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430:", id);
        await db.update(admins).set({
          email,
          name,
          roleId,
          isActive: isActive ? 1 : 0
        }).where(eq(admins.id, id));
        console.log("\u2705 [API] \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D");
      } else {
        console.log("\u2795 [API] \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430");
        const newId = crypto.randomUUID();
        await db.insert(admins).values({
          id: newId,
          email,
          name,
          password: "temp_password",
          roleId,
          isActive: isActive ? 1 : 0
        });
        console.log("\u2705 [API] \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u043E\u0437\u0434\u0430\u043D:", newId);
      }
      return { success: true, message: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D" };
    }
    console.error("\u274C [API] \u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F:", type);
    throw createError({
      statusCode: 400,
      message: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F"
    });
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445"
    });
  }
});

export { settings_post as default };
//# sourceMappingURL=settings.post.mjs.map
