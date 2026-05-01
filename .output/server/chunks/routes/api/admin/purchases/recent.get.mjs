import { d as defineEventHandler, a as db, p as purchases, f as courses, u as users, c as createError } from '../../../../nitro/nitro.mjs';
import { eq, desc } from 'drizzle-orm';
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

const recent_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/admin/purchases/recent - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0445 \u043F\u043E\u043A\u0443\u043F\u043E\u043A");
  try {
    const recentPurchases = await db.select({
      id: purchases.id,
      userId: purchases.userId,
      userName: users.name,
      userEmail: users.email,
      courseId: purchases.courseId,
      courseTitle: courses.title,
      amount: purchases.amount,
      status: purchases.status,
      createdAt: purchases.createdAt
    }).from(purchases).leftJoin(users, eq(purchases.userId, users.id)).leftJoin(courses, eq(purchases.courseId, courses.id)).orderBy(desc(purchases.createdAt)).limit(10);
    console.log("\u2705 [API] \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u043E \u043F\u043E\u043A\u0443\u043F\u043E\u043A:", recentPurchases.length);
    return { success: true, purchases: recentPurchases };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u043A\u0443\u043F\u043E\u043A:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u043E\u043A\u0443\u043F\u043E\u043A"
    });
  }
});

export { recent_get as default };
//# sourceMappingURL=recent.get.mjs.map
