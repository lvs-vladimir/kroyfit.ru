import { d as defineEventHandler, c as createError, r as readBody } from '../../nitro/nitro.mjs';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
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

const plan = defineEventHandler(async (event) => {
  const method = event.method;
  const planPath = join(process.cwd(), "PLAN.md");
  if (method === "GET") {
    try {
      const content = readFileSync(planPath, "utf-8");
      return { success: true, content };
    } catch (e) {
      throw createError({
        statusCode: 404,
        message: "PLAN.md \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"
      });
    }
  }
  if (method === "POST") {
    const body = await readBody(event);
    if (!body.content) {
      throw createError({
        statusCode: 400,
        message: "\u041A\u043E\u043D\u0442\u0435\u043D\u0442 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D"
      });
    }
    try {
      writeFileSync(planPath, body.content, "utf-8");
      return { success: true, message: "\u041F\u043B\u0430\u043D \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D" };
    } catch (e) {
      throw createError({
        statusCode: 500,
        message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0444\u0430\u0439\u043B\u0430"
      });
    }
  }
  throw createError({
    statusCode: 405,
    message: "\u041C\u0435\u0442\u043E\u0434 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F"
  });
});

export { plan as default };
//# sourceMappingURL=plan.mjs.map
