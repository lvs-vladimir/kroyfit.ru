import { d as defineEventHandler, c as createError, g as getCookie } from '../../../nitro/nitro.mjs';
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
const me_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/admin/me - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F");
  const adminId = getAdminIdFromToken(event);
  if (!adminId) {
    throw createError({
      statusCode: 401,
      message: "\u041D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D"
    });
  }
  try {
    const [admin] = await db.select().from(admins).where(eq(admins.id, adminId)).limit(1);
    if (!admin || !admin.isActive) {
      throw createError({
        statusCode: 401,
        message: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0438\u043B\u0438 \u0434\u0435\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D"
      });
    }
    let role = null;
    if (admin.roleId) {
      const [roleData] = await db.select().from(roles).where(eq(roles.id, admin.roleId)).limit(1);
      role = roleData;
    }
    const { password, ...adminWithoutPassword } = admin;
    console.log("\u2705 [API] \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D:", admin.name);
    return {
      success: true,
      admin: adminWithoutPassword,
      role
    };
  } catch (e) {
    if (e.statusCode) throw e;
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
    });
  }
});

export { me_get as default };
//# sourceMappingURL=me.get.mjs.map
