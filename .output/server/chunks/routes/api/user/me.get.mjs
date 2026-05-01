import { d as defineEventHandler, g as getCookie, c as createError, a as db, u as users } from '../../../nitro/nitro.mjs';
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

const me_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/user/me");
  try {
    const userCookie = getCookie(event, "user");
    if (!userCookie) {
      throw createError({ statusCode: 401, message: "\u041D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D" });
    }
    let userData;
    try {
      userData = JSON.parse(userCookie);
    } catch (e) {
      throw createError({ statusCode: 401, message: "\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0435\u0441\u0441\u0438\u044F" });
    }
    const [user] = await db.select().from(users).where(eq(users.id, userData.id)).limit(1);
    if (!user) {
      throw createError({ statusCode: 404, message: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D" });
    }
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      vkId: user.vkId
    };
  } catch (error) {
    if (error.statusCode) {
      throw error;
    }
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430:", error);
    throw createError({ statusCode: 500, message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430" });
  }
});

export { me_get as default };
//# sourceMappingURL=me.get.mjs.map
