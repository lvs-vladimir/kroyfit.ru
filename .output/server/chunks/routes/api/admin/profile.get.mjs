import { d as defineEventHandler, c as createError } from '../../../nitro/nitro.mjs';
import { d as db, a as admins } from '../../../_/db.mjs';
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

const profile_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/admin/profile - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430");
  try {
    const admin = await db.query.admins.findFirst({
      where: eq(admins.id, "1")
    });
    if (!admin) {
      console.error("\u274C [API] \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
      throw createError({
        statusCode: 404,
        message: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"
      });
    }
    console.log("\u2705 [API] \u041F\u0440\u043E\u0444\u0438\u043B\u044C \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D:", { email: admin.email, name: admin.name });
    return { success: true, admin };
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
