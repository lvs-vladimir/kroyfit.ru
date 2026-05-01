import { d as defineEventHandler, r as readBody, c as createError, a as db, u as users, s as setCookie } from '../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
import require$$1 from 'crypto';
import { mkdirSync, writeFileSync } from 'fs';
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

const vk_post = defineEventHandler(async (event) => {
  console.log("\u{1F7E1} [API] POST /api/auth/vk - \u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F \u0447\u0435\u0440\u0435\u0437 VK ID");
  try {
    const body = await readBody(event);
    const { vkId, name, email, avatar } = body;
    if (!vkId) {
      throw createError({ statusCode: 400, message: "vkId \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D" });
    }
    console.log("\u{1F7E1} [API] \u0414\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:", { vkId, name });
    let localAvatarPath = null;
    if (avatar) {
      try {
        console.log("\u{1F7E1} [API] \u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0430\u0432\u0430\u0442\u0430\u0440\u043A\u0443:", avatar);
        const avatarsDir = resolve("/root/kroyfit/public/avatars");
        mkdirSync(avatarsDir, { recursive: true });
        const response = await fetch(avatar);
        const buffer = await response.arrayBuffer();
        const filename = `${vkId}-${Date.now()}.jpg`;
        const filepath = resolve(avatarsDir, filename);
        writeFileSync(filepath, Buffer.from(buffer));
        localAvatarPath = `/api/avatars/${filename}`;
        console.log("\u2705 [API] \u0410\u0432\u0430\u0442\u0430\u0440\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430:", localAvatarPath);
      } catch (e) {
        console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u043A\u0438:", e.message);
      }
    }
    const existingUsers = await db.select().from(users).where(eq(users.vkId, vkId.toString())).limit(1);
    let user;
    if (existingUsers.length > 0) {
      user = existingUsers[0];
      console.log("\u2705 [API] \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0430\u0439\u0434\u0435\u043D:", user.id);
    } else {
      const userId = require$$1.randomUUID();
      await db.insert(users).values({
        id: userId,
        vkId: vkId.toString(),
        name: name || "VK \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",
        email: email || null,
        avatar: localAvatarPath || null,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      });
      user = {
        id: userId,
        vkId: vkId.toString(),
        name: name || "VK \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",
        email: email || null,
        avatar: localAvatarPath || null
      };
      console.log("\u2705 [API] \u041D\u043E\u0432\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0437\u0434\u0430\u043D:", userId);
    }
    setCookie(event, "user", JSON.stringify({
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      vkId: user.vkId
    }), {
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 30,
      // 30 дней
      path: "/"
    });
    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar
      }
    };
  } catch (error) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438 VK:", error.message);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438"
    });
  }
});

export { vk_post as default };
//# sourceMappingURL=vk.post.mjs.map
