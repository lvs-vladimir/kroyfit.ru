import { d as defineEventHandler, r as readBody, c as createError, g as getCookie } from '../../../nitro/nitro.mjs';
import { d as db, a as admins, r as roles, c as courses, u as users, e as emailSettings, s as seoSettings, g as generalSettings } from '../../../_/db.mjs';
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
import 'path';
import 'drizzle-orm/sqlite-core';

const getAdminIdFromToken = (event) => {
  const token = getCookie(event, "admin-token");
  if (!token) return null;
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    return decoded.split(":")[0];
  } catch (e) {
    return null;
  }
};
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
      const adminId = getAdminIdFromToken(event);
      if (!adminId) {
        throw createError({
          statusCode: 401,
          message: "\u041D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D"
        });
      }
      const { email, name, password } = data;
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
          canEditPlan: perms.canEditPlan ? 1 : 0,
          canManageProfile: perms.canManageProfile ? 1 : 0,
          canManageRoles: perms.canManageRoles ? 1 : 0,
          canManageVkGroups: perms.canManageVkGroups ? 1 : 0,
          canManageEmail: perms.canManageEmail ? 1 : 0,
          canManageSeo: perms.canManageSeo ? 1 : 0,
          canManageGeneralSettings: perms.canManageGeneralSettings ? 1 : 0
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
          canEditPlan: perms.canEditPlan ? 1 : 0,
          canManageProfile: perms.canManageProfile ? 1 : 0,
          canManageRoles: perms.canManageRoles ? 1 : 0,
          canManageVkGroups: perms.canManageVkGroups ? 1 : 0,
          canManageEmail: perms.canManageEmail ? 1 : 0,
          canManageSeo: perms.canManageSeo ? 1 : 0,
          canManageGeneralSettings: perms.canManageGeneralSettings ? 1 : 0
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
    if (type === "course") {
      console.log("\u{1F7E1} [API] \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430...");
      const { title, description, slug, price, category, duration, lessonsCount, isPublished, image } = data;
      if (!title || !slug) {
        throw createError({ statusCode: 400, message: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438 slug \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B" });
      }
      const existing = await db.select().from(courses).where(eq(courses.slug, slug)).limit(1);
      if (existing.length > 0) {
        throw createError({ statusCode: 400, message: "\u041A\u0443\u0440\u0441 \u0441 \u0442\u0430\u043A\u0438\u043C slug \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442" });
      }
      const newCourse = {
        id: crypto.randomUUID(),
        title,
        description: description || "",
        slug,
        price: price || 0,
        category: category || "\u0411\u0430\u0437\u043E\u0432\u044B\u0439",
        duration: duration || "",
        lessonsCount: lessonsCount || 0,
        isPublished: isPublished ? 1 : 0,
        image: image || "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      await db.insert(courses).values(newCourse);
      console.log("\u2705 [API] \u041A\u0443\u0440\u0441 \u0441\u043E\u0437\u0434\u0430\u043D:", newCourse.id);
      return { success: true, message: "\u041A\u0443\u0440\u0441 \u0441\u043E\u0437\u0434\u0430\u043D", course: newCourse };
    }
    if (type === "course-update") {
      console.log("\u{1F7E1} [API] \u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430...");
      const { id: courseId, title, description, slug, price, category, duration, lessonsCount, isPublished, image } = data;
      if (!courseId) {
        throw createError({ statusCode: 400, message: "ID \u043A\u0443\u0440\u0441\u0430 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D" });
      }
      const existing = await db.select().from(courses).where(eq(courses.id, courseId)).limit(1);
      if (existing.length === 0) {
        throw createError({ statusCode: 404, message: "\u041A\u0443\u0440\u0441 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D" });
      }
      if (slug && slug !== existing[0].slug) {
        const slugExists = await db.select().from(courses).where(eq(courses.slug, slug)).limit(1);
        if (slugExists.length > 0 && slugExists[0].id !== courseId) {
          throw createError({ statusCode: 400, message: "\u041A\u0443\u0440\u0441 \u0441 \u0442\u0430\u043A\u0438\u043C slug \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442" });
        }
      }
      const updateData = { updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
      if (title !== void 0) updateData.title = title;
      if (description !== void 0) updateData.description = description;
      if (slug !== void 0) updateData.slug = slug;
      if (price !== void 0) updateData.price = price;
      if (category !== void 0) updateData.category = category;
      if (duration !== void 0) updateData.duration = duration;
      if (lessonsCount !== void 0) updateData.lessonsCount = lessonsCount;
      if (isPublished !== void 0) updateData.isPublished = isPublished ? 1 : 0;
      if (image !== void 0) updateData.image = image;
      await db.update(courses).set(updateData).where(eq(courses.id, courseId));
      const [updatedCourse] = await db.select().from(courses).where(eq(courses.id, courseId)).limit(1);
      console.log("\u2705 [API] \u041A\u0443\u0440\u0441 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D:", courseId);
      return { success: true, message: "\u041A\u0443\u0440\u0441 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D", course: updatedCourse };
    }
    if (type === "course-delete") {
      console.log("\u{1F5D1}\uFE0F [API] \u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430:", data.id);
      const existing = await db.select().from(courses).where(eq(courses.id, data.id)).limit(1);
      if (existing.length === 0) {
        throw createError({ statusCode: 404, message: "\u041A\u0443\u0440\u0441 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D" });
      }
      await db.delete(courses).where(eq(courses.id, data.id));
      console.log("\u2705 [API] \u041A\u0443\u0440\u0441 \u0443\u0434\u0430\u043B\u0435\u043D:", data.id);
      return { success: true, message: "\u041A\u0443\u0440\u0441 \u0443\u0434\u0430\u043B\u0435\u043D" };
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
    if (type === "user-update") {
      console.log("\u{1F7E1} [API] \u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F...");
      const { id: userId, name, email, vkId, avatar } = data;
      if (!userId) {
        throw createError({ statusCode: 400, message: "ID \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D" });
      }
      const existing = await db.select().from(users).where(eq(users.id, userId)).limit(1);
      if (existing.length === 0) {
        throw createError({ statusCode: 404, message: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D" });
      }
      const updateData = {};
      if (name !== void 0) updateData.name = name;
      if (email !== void 0) updateData.email = email;
      if (vkId !== void 0) updateData.vkId = vkId;
      if (avatar !== void 0) updateData.avatar = avatar;
      await db.update(users).set(updateData).where(eq(users.id, userId));
      const [updatedUser] = await db.select().from(users).where(eq(users.id, userId)).limit(1);
      console.log("\u2705 [API] \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D:", userId);
      return { success: true, message: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D", user: updatedUser };
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
