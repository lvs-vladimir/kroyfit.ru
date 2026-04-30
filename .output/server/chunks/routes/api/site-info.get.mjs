import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import { d as db, g as generalSettings, s as seoSettings, c as courses } from '../../_/db.mjs';
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

const siteInfo_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/site-info - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0441\u0430\u0439\u0442\u0435");
  try {
    const [general] = await db.select().from(generalSettings).limit(1);
    const [seo] = await db.select().from(seoSettings).limit(1);
    const coursesList = await db.select().from(courses);
    console.log("\u2705 [API] \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0441\u0430\u0439\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u0430");
    return {
      success: true,
      siteName: (general == null ? void 0 : general.siteName) || "\u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0430 \u041A\u0440\u043E\u044F",
      seo: {
        title: (seo == null ? void 0 : seo.title) || "\u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0430 \u041A\u0440\u043E\u044F \u2014 \u041A\u0443\u0440\u0441\u044B \u043A\u0440\u043E\u0439\u043A\u0438 \u0438 \u0448\u0438\u0442\u044C\u044F",
        description: (seo == null ? void 0 : seo.description) || "\u041A\u0443\u0440\u0441\u044B \u043A\u0440\u043E\u0439\u043A\u0438 \u0438 \u0448\u0438\u0442\u044C\u044F",
        keywords: (seo == null ? void 0 : seo.keywords) || "\u043A\u0440\u043E\u0439\u043A\u0430, \u0448\u0438\u0442\u044C\u0435, \u043A\u0443\u0440\u0441\u044B"
      },
      courses: coursesList
    };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0441\u0430\u0439\u0442\u0435:", e);
    return {
      success: true,
      siteName: "\u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0430 \u041A\u0440\u043E\u044F",
      seo: {
        title: "\u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0430 \u041A\u0440\u043E\u044F \u2014 \u041A\u0443\u0440\u0441\u044B \u043A\u0440\u043E\u0439\u043A\u0438 \u0438 \u0448\u0438\u0442\u044C\u044F",
        description: "\u041A\u0443\u0440\u0441\u044B \u043A\u0440\u043E\u0439\u043A\u0438 \u0438 \u0448\u0438\u0442\u044C\u044F",
        keywords: "\u043A\u0440\u043E\u0439\u043A\u0430, \u0448\u0438\u0442\u044C\u0435, \u043A\u0443\u0440\u0441\u044B"
      },
      courses: []
    };
  }
});

export { siteInfo_get as default };
//# sourceMappingURL=site-info.get.mjs.map
