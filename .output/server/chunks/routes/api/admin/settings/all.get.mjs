import { d as defineEventHandler, a as db, v as vkGroups, h as emailSettings, i as seoSettings, j as generalSettings, c as createError } from '../../../../nitro/nitro.mjs';
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
import 'drizzle-orm';

const all_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/admin/settings/all - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0432\u0441\u0435\u0445 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A");
  try {
    const vk = await db.select().from(vkGroups);
    const email = await db.select().from(emailSettings);
    const seo = await db.select().from(seoSettings);
    const general = await db.select().from(generalSettings);
    console.log("\u2705 [API] \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B:", {
      vkGroups: vk.length,
      email: email.length,
      seo: seo.length,
      general: general.length
    });
    return {
      success: true,
      vkGroups: vk,
      email: email[0] || null,
      seo: seo[0] || null,
      general: general[0] || null
    };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A"
    });
  }
});

export { all_get as default };
//# sourceMappingURL=all.get.mjs.map
