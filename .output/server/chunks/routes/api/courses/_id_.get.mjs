import { d as defineEventHandler, a as getRouterParam, c as createError } from '../../../nitro/nitro.mjs';
import { d as db, c as courses } from '../../../_/db.mjs';
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

const _id__get = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({ statusCode: 400, message: "ID \u043A\u0443\u0440\u0441\u0430 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D" });
  }
  console.log("\u{1F535} [API] GET /api/courses/:id - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430:", id);
  try {
    const [course] = await db.select().from(courses).where(eq(courses.id, id)).limit(1);
    if (!course) {
      throw createError({ statusCode: 404, message: "\u041A\u0443\u0440\u0441 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D" });
    }
    console.log("\u2705 [API] \u041A\u0443\u0440\u0441 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D:", course.title);
    return { success: true, course };
  } catch (e) {
    if (e.statusCode) throw e;
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0443\u0440\u0441\u0430:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0443\u0440\u0441\u0430"
    });
  }
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
