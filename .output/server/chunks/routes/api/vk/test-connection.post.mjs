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

const testConnection_post = defineEventHandler(async (event) => {
  var _a;
  const { vkId, token } = await readBody(event);
  if (!vkId || !token) {
    throw createError({
      statusCode: 400,
      message: "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D ID \u0433\u0440\u0443\u043F\u043F\u044B \u0438\u043B\u0438 \u0442\u043E\u043A\u0435\u043D"
    });
  }
  console.log("\u{1F9EA} [API] \u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043A VK API");
  console.log("   \u0413\u0440\u0443\u043F\u043F\u0430:", vkId);
  console.log("   \u0422\u043E\u043A\u0435\u043D:", token.substring(0, 20) + "...");
  try {
    const vkResponse = await $fetch("https://api.vk.com/method/groups.getById", {
      method: "POST",
      body: new URLSearchParams({
        group_id: vkId,
        access_token: token,
        v: "5.131"
      })
    });
    if (vkResponse.error) {
      const errorCode = vkResponse.error.error_code;
      const errorMsg = vkResponse.error.error_msg;
      console.error("\u274C [API] VK API \u0432\u0435\u0440\u043D\u0443\u043B \u043E\u0448\u0438\u0431\u043A\u0443:", { code: errorCode, msg: errorMsg });
      let userMessage = "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A VK API";
      switch (errorCode) {
        case 5:
          userMessage = "\u0422\u043E\u043A\u0435\u043D \u043D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u0435\u043D \u0438\u043B\u0438 \u0438\u0441\u0442\u0435\u043A";
          break;
        case 15:
          userMessage = "\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0433\u0440\u0443\u043F\u043F\u0435. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435, \u0447\u0442\u043E \u0442\u043E\u043A\u0435\u043D \u043F\u043E\u043B\u0443\u0447\u0435\u043D \u043E\u0442 \u0438\u043C\u0435\u043D\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430";
          break;
        case 100:
          userMessage = "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ID \u0433\u0440\u0443\u043F\u043F\u044B";
          break;
        case 113:
          userMessage = "\u0413\u0440\u0443\u043F\u043F\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 ID \u0433\u0440\u0443\u043F\u043F\u044B";
          break;
        default:
          userMessage = `\u041E\u0448\u0438\u0431\u043A\u0430 VK API (${errorCode}): ${errorMsg}`;
      }
      return {
        success: false,
        error: userMessage,
        vkError: { code: errorCode, message: errorMsg }
      };
    }
    if (vkResponse.response && vkResponse.response.length > 0) {
      const group = vkResponse.response[0];
      console.log("\u2705 [API] \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E! \u0413\u0440\u0443\u043F\u043F\u0430:", group.name);
      return {
        success: true,
        groupName: group.name,
        groupId: group.id,
        membersCount: group.members_count || "\u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E",
        isClosed: group.is_closed,
        type: group.type
      };
    }
    return {
      success: false,
      error: "\u0413\u0440\u0443\u043F\u043F\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 \u0438\u043B\u0438 API \u0432\u0435\u0440\u043D\u0443\u043B \u043F\u0443\u0441\u0442\u043E\u0439 \u043E\u0442\u0432\u0435\u0442"
    };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F:", e);
    if ((_a = e.message) == null ? void 0 : _a.includes("fetch failed")) {
      return {
        success: false,
        error: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A VK API. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435."
      };
    }
    return {
      success: false,
      error: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438: " + (e.message || "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430")
    };
  }
});

export { testConnection_post as default };
//# sourceMappingURL=test-connection.post.mjs.map
