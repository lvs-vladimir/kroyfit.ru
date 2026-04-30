import { d as defineEventHandler, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
import { d as db, a as admins, r as roles, e as emailSettings, s as seoSettings, g as generalSettings } from '../../../_/db.mjs';
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
      const perms = permissions || {};
      if (id) {
        console.log("\u{1F504} [API] \u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u0440\u043E\u043B\u0438:", id);
        await db.update(roles).set({
          name,
          description,
          canViewDashboard: perms.canViewDashboard ? 1 : 0,
          canManageCourses: perms.canManageCourses ? 1 : 0,
          canManageUsers: perms.canManageUsers ? 1 : 0,
          canManagePurchases: perms.canManagePurchases ? 1 : 0,
          canManageSettings: perms.canManageSettings ? 1 : 0,
          canManageAdmins: perms.canManageAdmins ? 1 : 0,
          canEditPlan: perms.canEditPlan ? 1 : 0
        }).where(eq(roles.id, id));
        console.log("\u2705 [API] \u0420\u043E\u043B\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430");
        return { success: true, message: "\u0420\u043E\u043B\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430", id };
      } else {
        console.log("\u2795 [API] \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0439 \u0440\u043E\u043B\u0438");
        const newId = crypto.randomUUID();
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
          canEditPlan: perms.canEditPlan ? 1 : 0
        });
        console.log("\u2705 [API] \u0420\u043E\u043B\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u0430:", newId);
        return { success: true, message: "\u0420\u043E\u043B\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430", id: newId };
      }
    }
    if (type === "role-delete") {
      console.log("\u{1F5D1}\uFE0F [API] \u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0440\u043E\u043B\u0438:", data.id);
      await db.delete(roles).where(eq(roles.id, data.id));
      console.log("\u2705 [API] \u0420\u043E\u043B\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0430");
      return { success: true, message: "\u0420\u043E\u043B\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0430" };
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
        return { success: true, message: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D", id: newId };
      }
      return { success: true, message: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D" };
    }
    if (type === "admin-delete") {
      console.log("\u{1F5D1}\uFE0F [API] \u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430:", data.id);
      await db.delete(admins).where(eq(admins.id, data.id));
      console.log("\u2705 [API] \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0443\u0434\u0430\u043B\u0435\u043D");
      return { success: true, message: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0443\u0434\u0430\u043B\u0435\u043D" };
    }
    if (type === "email") {
      console.log("\u{1F7E1} [API] \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 email \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A...");
      const { smtpHost, smtpPort, smtpUser, smtpPass, smtpFrom, enableWelcome, enablePurchase, enableVkGroup } = data;
      await db.update(emailSettings).set({
        smtpHost,
        smtpPort,
        smtpUser,
        smtpPass,
        smtpFrom,
        enableWelcome: enableWelcome ? 1 : 0,
        enablePurchase: enablePurchase ? 1 : 0,
        enableVkGroup: enableVkGroup ? 1 : 0
      }).where(eq(emailSettings.id, 1));
      console.log("\u2705 [API] Email \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B");
      return { success: true, message: "Email \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B" };
    }
    if (type === "seo") {
      console.log("\u{1F7E1} [API] \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 SEO \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A...");
      const { title, description, keywords, enableSitemap, enableRobots } = data;
      await db.update(seoSettings).set({
        title,
        description,
        keywords,
        enableSitemap: enableSitemap ? 1 : 0,
        enableRobots: enableRobots ? 1 : 0
      }).where(eq(seoSettings.id, 1));
      console.log("\u2705 [API] SEO \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B");
      return { success: true, message: "SEO \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B" };
    }
    if (type === "general") {
      console.log("\u{1F7E1} [API] \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043E\u0431\u0449\u0438\u0445 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A...");
      const { siteName, adminEmail } = data;
      await db.update(generalSettings).set({
        siteName,
        adminEmail
      }).where(eq(generalSettings.id, 1));
      console.log("\u2705 [API] \u041E\u0431\u0449\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B");
      return { success: true, message: "\u041E\u0431\u0449\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B" };
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
