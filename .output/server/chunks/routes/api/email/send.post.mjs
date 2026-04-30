import { d as defineEventHandler, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
import { s as sendEmail, w as welcomeEmailTemplate, p as purchaseEmailTemplate } from '../../../_/email.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'nodemailer';

const send_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { type, to, name, courseName, amount } = body;
  if (!type || !to) {
    throw createError({
      statusCode: 400,
      message: "\u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B"
    });
  }
  let subject = "";
  let html = "";
  if (type === "welcome") {
    subject = "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0443 \u041A\u0440\u043E\u044F!";
    html = welcomeEmailTemplate(name || "\u0423\u0447\u0435\u043D\u0438\u043A");
  } else if (type === "purchase") {
    subject = `\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u043A\u0443\u0440\u0441\u0430 "${courseName}"!`;
    html = purchaseEmailTemplate(name || "\u0423\u0447\u0435\u043D\u0438\u043A", courseName || "\u041A\u0443\u0440\u0441", amount || 0);
  } else {
    throw createError({
      statusCode: 400,
      message: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0438\u043F email"
    });
  }
  try {
    const result = await sendEmail(to, subject, html);
    if (result.success) {
      return { success: true, message: "Email \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D", messageId: result.messageId };
    } else {
      throw createError({
        statusCode: 500,
        message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 email"
      });
    }
  } catch (e) {
    console.error("\u041E\u0448\u0438\u0431\u043A\u0430:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 email"
    });
  }
});

export { send_post as default };
//# sourceMappingURL=send.post.mjs.map
