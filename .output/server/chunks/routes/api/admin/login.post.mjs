import { d as defineEventHandler, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
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
import 'path';
import 'drizzle-orm/sqlite-core';

const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;
  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: "Email \u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B"
    });
  }
  console.log("\u{1F535} [API] Login attempt:", email);
  try {
    const [admin] = await db.select().from(admins).where(eq(admins.email, email)).limit(1);
    if (!admin) {
      console.log("\u274C [API] Admin not found:", email);
      throw createError({
        statusCode: 401,
        message: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430"
      });
    }
    if (admin.password !== password) {
      console.log("\u274C [API] Invalid password for:", email);
      throw createError({
        statusCode: 401,
        message: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430"
      });
    }
    if (!admin.isActive) {
      console.log("\u274C [API] Admin account disabled:", email);
      throw createError({
        statusCode: 401,
        message: "\u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u0434\u0435\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D"
      });
    }
    console.log("\u2705 [API] Login successful:", admin.name);
    const token = Buffer.from(`${admin.id}:${admin.email}:${Date.now()}`).toString("base64");
    return {
      token,
      user: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        roleId: admin.roleId
      }
    };
  } catch (e) {
    if (e.statusCode) throw e;
    console.error("\u274C [API] Login error:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0432\u0445\u043E\u0434\u0435"
    });
  }
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
