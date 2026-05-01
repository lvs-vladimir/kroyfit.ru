import { d as defineEventHandler, a as db, p as purchases, f as courses, c as createError } from '../../../nitro/nitro.mjs';
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

const courses_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/user/courses - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F");
  const userId = "1";
  try {
    const userPurchases = await db.select({
      courseId: purchases.courseId
    }).from(purchases).where(eq(purchases.userId, userId));
    const courseIds = userPurchases.map((p) => p.courseId);
    if (courseIds.length === 0) {
      return { success: true, courses: [] };
    }
    const allCourses = await db.select().from(courses);
    const userCourses = allCourses.filter((c) => courseIds.includes(c.id));
    console.log("\u2705 [API] \u041A\u0443\u0440\u0441\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E:", userCourses.length);
    return { success: true, courses: userCourses };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0443\u0440\u0441\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0443\u0440\u0441\u043E\u0432"
    });
  }
});

export { courses_get as default };
//# sourceMappingURL=courses.get.mjs.map
