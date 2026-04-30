import { d as defineEventHandler, s as setHeader } from '../nitro/nitro.mjs';
import { d as db, c as courses } from '../_/db.mjs';
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

const sitemap_xml = defineEventHandler(async (event) => {
  try {
    const allCourses = await db.select().from(courses);
    const baseUrl = "https://kroyfit.ru";
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    xml += `  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
`;
    for (const course of allCourses) {
      xml += `  <url>
    <loc>${baseUrl}/courses/${course.slug}</loc>
    <lastmod>${new Date(course.createdAt || /* @__PURE__ */ new Date()).toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
    }
    xml += `  <url>
    <loc>${baseUrl}/profile</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
    xml += `  <url>
    <loc>${baseUrl}/cabinet</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
    xml += "</urlset>";
    setHeader(event, "Content-Type", "application/xml");
    return xml;
  } catch (e) {
    console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 sitemap:", e);
    return '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>';
  }
});

export { sitemap_xml as default };
//# sourceMappingURL=sitemap.xml.mjs.map
