import { d as defineEventHandler, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
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

const resolveId_post = defineEventHandler(async (event) => {
  const { screenName } = await readBody(event);
  if (!screenName) {
    throw createError({ statusCode: 400, message: "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D screen_name" });
  }
  console.log("\u{1F50D} [API] \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 VK ID \u0434\u043B\u044F:", screenName);
  try {
    const settings = await $fetch("/api/admin/settings/all").catch(() => null);
    if (/^\d+$/.test(screenName)) {
      return { success: true, id: screenName, type: "group" };
    }
    const vkToken = process.env.VK_SERVICE_TOKEN || "";
    if (!vkToken) {
      return {
        success: false,
        error: "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F VK access_token \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F ID \u043F\u043E \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u043C\u0443 \u0438\u043C\u0435\u043D\u0438",
        hint: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 ID \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u043D\u0430 https://regvk.com/id/",
        manualUrl: `https://regvk.com/id/`
      };
    }
    const vkResponse = await $fetch(`https://api.vk.com/method/utils.resolveScreenName`, {
      params: {
        screen_name: screenName,
        access_token: vkToken,
        v: "5.131"
      }
    });
    if (vkResponse.response && vkResponse.response.object_id) {
      const id = vkResponse.response.object_id;
      const type = vkResponse.response.type;
      console.log("\u2705 [API] VK ID \u043D\u0430\u0439\u0434\u0435\u043D:", { id, type });
      return { success: true, id: String(id), type };
    }
    return {
      success: false,
      error: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C ID",
      hint: "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0438 \u0438\u043B\u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 ID \u043D\u0430 https://regvk.com/id/",
      manualUrl: `https://regvk.com/id/`
    };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F VK ID:", e);
    return {
      success: false,
      error: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043A VK API",
      hint: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 ID \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u043D\u0430 https://regvk.com/id/",
      manualUrl: `https://regvk.com/id/`
    };
  }
});

export { resolveId_post as default };
//# sourceMappingURL=resolve-id.post.mjs.map
