import { d as defineEventHandler, k as getRouterParam, c as createError, l as setHeader } from '../../../nitro/nitro.mjs';
import { readFileSync } from 'fs';
import { resolve } from 'path';
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

const _filename__get = defineEventHandler(async (event) => {
  const filename = getRouterParam(event, "filename");
  if (!filename) {
    throw createError({ statusCode: 400, message: "Filename required" });
  }
  try {
    const filepath = resolve("/root/kroyfit/public/avatars", filename);
    if (!filepath.startsWith("/root/kroyfit/public/avatars")) {
      throw createError({ statusCode: 403, message: "Access denied" });
    }
    const imageBuffer = readFileSync(filepath);
    setHeader(event, "Content-Type", "image/jpeg");
    setHeader(event, "Cache-Control", "public, max-age=31536000");
    return imageBuffer;
  } catch (error) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u043A\u0438:", error.message);
    throw createError({ statusCode: 404, message: "Avatar not found" });
  }
});

export { _filename__get as default };
//# sourceMappingURL=_filename_.get.mjs.map
