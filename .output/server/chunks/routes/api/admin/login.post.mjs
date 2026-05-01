import { d as defineEventHandler, r as readBody, c as createError, a as db, b as admins, s as setCookie } from '../../../nitro/nitro.mjs';
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
    console.log("\u{1F535} [API] \u041F\u043E\u0438\u0441\u043A \u0430\u0434\u043C\u0438\u043D\u0430:", email);
    console.log("\u{1F535} [API] \u041D\u0430\u0439\u0434\u0435\u043D \u0430\u0434\u043C\u0438\u043D:", admin ? admin.email : "\u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
    if (!admin) {
      console.log("\u274C [API] Admin not found:", email);
      throw createError({
        statusCode: 401,
        message: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430"
      });
    }
    console.log("\u{1F535} [API] \u041F\u0430\u0440\u043E\u043B\u044C \u0432 \u0411\u0414:", admin.password);
    console.log("\u{1F535} [API] \u041F\u0430\u0440\u043E\u043B\u044C \u043E\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:", password);
    console.log("\u{1F535} [API] \u0421\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442?", admin.password === password);
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
    setCookie(event, "admin-token", token, {
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 7,
      // 7 дней
      path: "/"
    });
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
