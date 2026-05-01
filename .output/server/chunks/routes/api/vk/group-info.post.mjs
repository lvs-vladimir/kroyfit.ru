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
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';

const groupInfo_post = defineEventHandler(async (event) => {
  const { groupId } = await readBody(event);
  if (!groupId) {
    throw createError({ statusCode: 400, message: "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D ID \u0433\u0440\u0443\u043F\u043F\u044B" });
  }
  console.log("\u{1F50D} [API] \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0433\u0440\u0443\u043F\u043F\u0435:", groupId);
  try {
    const params = new URLSearchParams();
    params.append("group_id", groupId);
    params.append("v", "5.131");
    const vkResponse = await $fetch("https://api.vk.com/method/groups.getById", {
      method: "POST",
      body: params.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    if (vkResponse.error) {
      console.error("\u274C [API] VK API \u0432\u0435\u0440\u043D\u0443\u043B \u043E\u0448\u0438\u0431\u043A\u0443:", vkResponse.error);
      return {
        success: false,
        error: vkResponse.error.error_msg,
        code: vkResponse.error.error_code
      };
    }
    if (vkResponse.response && vkResponse.response.length > 0) {
      const group = vkResponse.response[0];
      console.log("\u2705 [API] \u0413\u0440\u0443\u043F\u043F\u0430 \u043D\u0430\u0439\u0434\u0435\u043D\u0430:", group.name);
      return { success: true, name: group.name, id: group.id };
    }
    return { success: false, error: "\u0413\u0440\u0443\u043F\u043F\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430" };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0433\u0440\u0443\u043F\u043F\u044B:", e);
    return { success: false, error: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430: " + (e.message || "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430") };
  }
});

export { groupInfo_post as default };
//# sourceMappingURL=group-info.post.mjs.map
