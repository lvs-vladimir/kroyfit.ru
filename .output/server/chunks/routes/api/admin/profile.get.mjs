import { d as defineEventHandler, g as getCookie, c as createError, a as db, b as admins } from '../../../nitro/nitro.mjs';
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

const profile_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/admin/profile - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430");
  const token = getCookie(event, "admin-token");
  if (!token) {
    throw createError({
      statusCode: 401,
      message: "\u041D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D"
    });
  }
  let adminId;
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    adminId = decoded.split(":")[0];
  } catch (e) {
    throw createError({
      statusCode: 401,
      message: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0442\u043E\u043A\u0435\u043D"
    });
  }
  try {
    const admin = await db.query.admins.findFirst({
      where: eq(admins.id, adminId)
    });
    if (!admin) {
      console.error("\u274C [API] \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
      throw createError({
        statusCode: 404,
        message: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"
      });
    }
    console.log("\u2705 [API] \u041F\u0440\u043E\u0444\u0438\u043B\u044C \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D:", { email: admin.email, name: admin.name });
    const { password, ...adminWithoutPassword } = admin;
    return { success: true, admin: adminWithoutPassword };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F"
    });
  }
});

export { profile_get as default };
//# sourceMappingURL=profile.get.mjs.map
