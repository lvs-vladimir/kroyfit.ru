import { d as defineEventHandler, r as readBody, c as createError, a as db, b as admins, g as getCookie } from '../../../nitro/nitro.mjs';
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

const getAdminIdFromToken = (event) => {
  const token = getCookie(event, "admin-token");
  if (!token) return null;
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    return decoded.split(":")[0];
  } catch (e) {
    return null;
  }
};
const profile_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, name, password } = body;
  const adminId = getAdminIdFromToken(event);
  if (!adminId) {
    throw createError({
      statusCode: 401,
      message: "\u041D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D"
    });
  }
  if (!email || !name) {
    throw createError({
      statusCode: 400,
      message: "Email \u0438 \u0438\u043C\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B"
    });
  }
  try {
    const updateData = {
      email,
      name
    };
    if (password && password.length > 0) {
      updateData.password = password;
    }
    await db.update(admins).set(updateData).where(eq(admins.id, adminId));
    return { success: true, message: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D" };
  } catch (e) {
    console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F"
    });
  }
});

export { profile_post as default };
//# sourceMappingURL=profile.post.mjs.map
