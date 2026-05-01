import { d as defineEventHandler, a as db, f as courses, c as createError } from '../../nitro/nitro.mjs';
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
import 'drizzle-orm';

const courses_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/courses - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u0430 \u043A\u0443\u0440\u0441\u043E\u0432");
  try {
    const coursesList = await db.select().from(courses);
    console.log("\u2705 [API] \u041A\u0443\u0440\u0441\u043E\u0432 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E:", coursesList.length);
    return { success: true, courses: coursesList };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0443\u0440\u0441\u043E\u0432:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u043A\u0443\u0440\u0441\u043E\u0432"
    });
  }
});

export { courses_get as default };
//# sourceMappingURL=courses.get.mjs.map
