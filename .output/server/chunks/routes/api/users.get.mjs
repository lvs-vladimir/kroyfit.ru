import { d as defineEventHandler, c as createError } from '../../nitro/nitro.mjs';
import { d as db, u as users, p as purchases } from '../../_/db.mjs';
import { count, eq } from 'drizzle-orm';
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

const users_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/users - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439");
  try {
    const usersList = await db.select().from(users);
    const usersWithCourses = await Promise.all(
      usersList.map(async (user) => {
        var _a;
        const coursesCount = await db.select({ count: count() }).from(purchases).where(eq(purchases.userId, user.id));
        return {
          ...user,
          coursesCount: ((_a = coursesCount[0]) == null ? void 0 : _a.count) || 0
        };
      })
    );
    console.log("\u2705 [API] \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E:", usersWithCourses.length);
    return { success: true, users: usersWithCourses };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439"
    });
  }
});

export { users_get as default };
//# sourceMappingURL=users.get.mjs.map
