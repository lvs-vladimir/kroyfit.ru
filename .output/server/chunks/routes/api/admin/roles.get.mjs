import { d as defineEventHandler, a as db, e as roles, c as createError } from '../../../nitro/nitro.mjs';
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

const roles_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/admin/roles - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u0430 \u0440\u043E\u043B\u0435\u0439");
  try {
    const rolesList = await db.select().from(roles);
    console.log("\u2705 [API] \u0420\u043E\u043B\u0438 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B:", rolesList.length);
    return { success: true, roles: rolesList };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0440\u043E\u043B\u0435\u0439:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0440\u043E\u043B\u0435\u0439"
    });
  }
});

export { roles_get as default };
//# sourceMappingURL=roles.get.mjs.map
