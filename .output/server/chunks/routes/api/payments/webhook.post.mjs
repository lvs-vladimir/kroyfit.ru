import { d as defineEventHandler, r as readBody, a as db, p as purchases, u as users, f as courses, v as vkGroups, c as createError } from '../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
import { s as sendEmail, p as purchaseEmailTemplate, v as vkGroupEmailTemplate } from '../../../_/email.mjs';
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
import 'nodemailer';

const webhook_post = defineEventHandler(async (event) => {
  var _a, _b;
  const body = await readBody(event);
  if (body.event === "payment.succeeded") {
    const { object } = body;
    const purchaseId = (_a = object.metadata) == null ? void 0 : _a.purchaseId;
    if (purchaseId) {
      try {
        const purchase = await db.query.purchases.findFirst({
          where: eq(purchases.id, purchaseId)
        });
        if (!purchase) {
          return { success: false, message: "\u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430" };
        }
        await db.update(purchases).set({ status: "paid", paymentId: object.id }).where(eq(purchases.id, purchaseId));
        const user = await db.query.users.findFirst({
          where: eq(users.id, purchase.userId)
        });
        const course = await db.query.courses.findFirst({
          where: eq(courses.id, purchase.courseId)
        });
        if (user && course) {
          if (user.email) {
            await sendEmail(
              user.email,
              `\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u043A\u0443\u0440\u0441\u0430 "${course.title}"!`,
              purchaseEmailTemplate(user.name, course.title, purchase.amount)
            );
          }
          if (user.vkId && course.vkGroupId) {
            try {
              const vkGroup = await db.query.vkGroups.findFirst({
                where: eq(vkGroups.courseSlug, course.slug)
              });
              if (vkGroup && vkGroup.token) {
                const vkResponse = await fetch("https://api.vk.com/method/groups.invite", {
                  method: "POST",
                  body: new URLSearchParams({
                    group_id: vkGroup.vkId,
                    user_id: user.vkId,
                    access_token: vkGroup.token,
                    v: "5.131"
                  })
                });
                const vkData = await vkResponse.json();
                if (!vkData.error) {
                  console.log(`\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ${user.vkId} \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u0433\u0440\u0443\u043F\u043F\u0443 ${vkGroup.name}`);
                  if (user.email) {
                    await sendEmail(
                      user.email,
                      `\u0412\u044B \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B \u0432 VK \u0433\u0440\u0443\u043F\u043F\u0443 "${vkGroup.name}"!`,
                      vkGroupEmailTemplate(user.name, vkGroup.name)
                    );
                  }
                } else {
                  console.error("\u041E\u0448\u0438\u0431\u043A\u0430 VK API:", vkData.error);
                }
              }
            } catch (vkError) {
              console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432 VK \u0433\u0440\u0443\u043F\u043F\u0443:", vkError);
            }
          }
        }
        console.log(`\u041F\u043B\u0430\u0442\u0435\u0436 ${object.id} \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D`);
        return { success: true, message: "\u041F\u043B\u0430\u0442\u0435\u0436 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D" };
      } catch (e) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u0430:", e);
        throw createError({
          statusCode: 500,
          message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"
        });
      }
    }
  }
  if (body.event === "payment.canceled") {
    const { object } = body;
    const purchaseId = (_b = object.metadata) == null ? void 0 : _b.purchaseId;
    if (purchaseId) {
      try {
        await db.update(purchases).set({ status: "cancelled" }).where(eq(purchases.id, purchaseId));
        console.log(`\u041F\u043B\u0430\u0442\u0435\u0436 ${object.id} \u043E\u0442\u043C\u0435\u043D\u0435\u043D`);
        return { success: true, message: "\u041F\u043B\u0430\u0442\u0435\u0436 \u043E\u0442\u043C\u0435\u043D\u0435\u043D" };
      } catch (e) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043C\u0435\u043D\u044B \u043F\u043B\u0430\u0442\u0435\u0436\u0430:", e);
      }
    }
  }
  return { success: true };
});

export { webhook_post as default };
//# sourceMappingURL=webhook.post.mjs.map
