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
import 'drizzle-orm/sqlite-core';

const verifyToken_get = defineEventHandler(async (event) => {
  const token = getCookie(event, "admin-token");
  if (!token) {
    throw createError({
      statusCode: 401,
      message: "\u0422\u043E\u043A\u0435\u043D \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"
    });
  }
  console.log("\u{1F535} [API] Token verification");
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const [adminId] = decoded.split(":");
    if (!adminId) {
      throw createError({
        statusCode: 401,
        message: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0442\u043E\u043A\u0435\u043D"
      });
    }
    const [admin] = await db.select().from(admins).where(eq(admins.id, adminId)).limit(1);
    if (!admin || !admin.isActive) {
      throw createError({
        statusCode: 401,
        message: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0438\u043B\u0438 \u0434\u0435\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D"
      });
    }
    console.log("\u2705 [API] Token valid for admin:", admin.name);
    return {
      success: true,
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        roleId: admin.roleId
      }
    };
  } catch (e) {
    if (e.statusCode) throw e;
    console.error("\u274C [API] Token verification error:", e);
    throw createError({
      statusCode: 401,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0442\u043E\u043A\u0435\u043D\u0430"
    });
  }
});

export { verifyToken_get as default };
//# sourceMappingURL=verify-token.get.mjs.map
