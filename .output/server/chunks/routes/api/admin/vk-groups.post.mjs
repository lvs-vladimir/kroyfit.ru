import { d as defineEventHandler, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
import { d as db, v as vkGroups } from '../../../_/db.mjs';
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

const vkGroups_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { action, data } = body;
  console.log("\u{1F535} [API] /api/admin/vk-groups - \u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435:", action);
  try {
    if (action === "create") {
      const { name, vkId, courseSlug, token } = data;
      const id = crypto.randomUUID();
      await db.insert(vkGroups).values({ id, name, vkId, courseSlug, token });
      console.log("\u2705 [API] VK \u0433\u0440\u0443\u043F\u043F\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430:", id);
      return { success: true, group: { id, name, vkId, courseSlug, token } };
    }
    if (action === "update") {
      const { id, name, vkId, courseSlug, token } = data;
      await db.update(vkGroups).set({ name, vkId, courseSlug, token }).where(eq(vkGroups.id, id));
      console.log("\u2705 [API] VK \u0433\u0440\u0443\u043F\u043F\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430:", id);
      return { success: true };
    }
    if (action === "delete") {
      const { id } = data;
      await db.delete(vkGroups).where(eq(vkGroups.id, id));
      console.log("\u2705 [API] VK \u0433\u0440\u0443\u043F\u043F\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430:", id);
      return { success: true };
    }
    console.error("\u274C [API] \u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435:", action);
    throw createError({ statusCode: 400, message: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435" });
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430:", e);
    throw createError({ statusCode: 500, message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 VK \u0433\u0440\u0443\u043F\u043F\u043E\u0439" });
  }
});

export { vkGroups_post as default };
//# sourceMappingURL=vk-groups.post.mjs.map
