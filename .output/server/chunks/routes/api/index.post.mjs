import { d as defineEventHandler, r as readBody, c as createError, a as db, u as users } from '../../nitro/nitro.mjs';
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

const index_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { vkId, name, email, avatar } = body;
  if (!name) {
    throw createError({
      statusCode: 400,
      message: "\u0418\u043C\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
    });
  }
  try {
    const id = crypto.randomUUID();
    await db.insert(users).values({
      id,
      vkId: vkId || null,
      name,
      email: email || null,
      avatar: avatar || null
    });
    return { success: true, message: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0437\u0434\u0430\u043D", id };
  } catch (e) {
    console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
    });
  }
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
