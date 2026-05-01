import { d as defineEventHandler, g as getCookie, c as createError, a as db, p as purchases, f as courses } from '../../../nitro/nitro.mjs';
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

const purchases_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/user/purchases");
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
    const userPurchases = await db.select().from(purchases).where(eq(purchases.userId, userData.id));
    const purchasesWithCourses = await Promise.all(
      userPurchases.map(async (purchase) => {
        const [course] = await db.select().from(courses).where(eq(courses.id, purchase.courseId)).limit(1);
        return {
          ...purchase,
          course: course || null
        };
      })
    );
    return {
      purchases: purchasesWithCourses
    };
  } catch (error) {
    if (error.statusCode) {
      throw error;
    }
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430:", error);
    throw createError({ statusCode: 500, message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430" });
  }
});

export { purchases_get as default };
//# sourceMappingURL=purchases.get.mjs.map
