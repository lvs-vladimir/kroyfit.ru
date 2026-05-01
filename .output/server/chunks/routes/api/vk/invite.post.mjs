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

const invite_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { userId, courseSlug, vkId } = body;
  if (!userId || !courseSlug || !vkId) {
    throw createError({
      statusCode: 400,
      message: "\u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B: userId, courseSlug, vkId"
    });
  }
  const groupSettings = await getGroupSettings(courseSlug);
  if (!groupSettings || !groupSettings.vkId || !groupSettings.token) {
    throw createError({
      statusCode: 404,
      message: "\u0413\u0440\u0443\u043F\u043F\u0430 \u0412\u041A \u0434\u043B\u044F \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043A\u0443\u0440\u0441\u0430 \u043D\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0430"
    });
  }
  try {
    const response = await $fetch("https://api.vk.com/method/groups.invite", {
      method: "POST",
      body: new URLSearchParams({
        group_id: groupSettings.vkId,
        user_id: vkId,
        access_token: groupSettings.token,
        v: "5.131"
      })
    });
    if (response.error) {
      throw new Error(response.error.error_msg || "\u041E\u0448\u0438\u0431\u043A\u0430 VK API");
    }
    return {
      success: true,
      message: `\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ${vkId} \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D \u0432 \u0433\u0440\u0443\u043F\u043F\u0443 "${groupSettings.name}"`,
      data: response.response
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: `\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F \u0432 \u0433\u0440\u0443\u043F\u043F\u0443: ${error.message}`
    });
  }
});
async function getGroupSettings(courseSlug) {
  const groups = [
    {
      courseSlug: "tekhnologiya-poshiva",
      vkId: "123456",
      name: "\u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0430 \u041A\u0440\u043E\u044F \u2014 \u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043F\u043E\u0448\u0438\u0432\u0430",
      token: process.env.VK_COMMUNITY_TOKEN || ""
    },
    {
      courseSlug: "master-konstruirovaniya",
      vkId: "234567",
      name: "\u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0430 \u041A\u0440\u043E\u044F \u2014 \u041C\u0430\u0441\u0442\u0435\u0440 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
      token: process.env.VK_COMMUNITY_TOKEN || ""
    }
  ];
  return groups.find((g) => g.courseSlug === courseSlug) || null;
}

export { invite_post as default };
//# sourceMappingURL=invite.post.mjs.map
