import { d as defineEventHandler, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
import { d as db, p as purchases } from '../../../_/db.mjs';
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

const create_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { userId, courseId, amount } = body;
  if (!userId || !courseId || !amount) {
    throw createError({
      statusCode: 400,
      message: "\u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B"
    });
  }
  try {
    const purchaseId = crypto.randomUUID();
    await db.insert(purchases).values({
      id: purchaseId,
      userId,
      courseId,
      amount,
      status: "pending"
    });
    return {
      success: true,
      purchaseId,
      message: "\u041F\u043B\u0430\u0442\u0435\u0436 \u0441\u043E\u0437\u0434\u0430\u043D (\u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0440\u0435\u0436\u0438\u043C)"
      // paymentUrl: payment.confirmation.confirmation_url,
    };
  } catch (e) {
    console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u043B\u0430\u0442\u0435\u0436\u0430:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u043B\u0430\u0442\u0435\u0436\u0430"
    });
  }
});

export { create_post as default };
//# sourceMappingURL=create.post.mjs.map
