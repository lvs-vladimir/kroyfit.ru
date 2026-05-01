import { d as defineEventHandler, r as readBody, c as createError, g as getCookie, a as db, f as courses, p as purchases } from '../../../nitro/nitro.mjs';
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
import 'drizzle-orm/sqlite-core';

const SHOP_ID = process.env.YOOKASSA_SHOP_ID || "1344393";
const API_KEY = process.env.YOOKASSA_SECRET_KEY || "live_Gn0WbDxR3hthCMkTu13qWuaVhXo-LPDJI_QN2P54-OM";
const create_post = defineEventHandler(async (event) => {
  console.log("\u{1F7E1} [API] POST /api/payments/create - \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 \u042E\u041A\u0430\u0441\u0441\u0430");
  try {
    const body = await readBody(event);
    const { courseId, returnUrl } = body;
    if (!courseId) {
      throw createError({ statusCode: 400, message: "ID \u043A\u0443\u0440\u0441\u0430 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D" });
    }
    const userCookie = getCookie(event, "user");
    if (!userCookie) {
      throw createError({ statusCode: 401, message: "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F" });
    }
    let user;
    try {
      user = JSON.parse(userCookie);
    } catch (e) {
      throw createError({ statusCode: 401, message: "\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0435\u0441\u0441\u0438\u044F" });
    }
    const [course] = await db.select().from(courses).where(eq(courses.id, courseId)).limit(1);
    if (!course) {
      throw createError({ statusCode: 404, message: "\u041A\u0443\u0440\u0441 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D" });
    }
    const existingPurchase = await db.select().from(purchases).where(eq(purchases.userId, user.id)).limit(100);
    const alreadyPurchased = existingPurchase.some((p) => p.courseId === courseId && p.status === "completed");
    if (alreadyPurchased) {
      throw createError({ statusCode: 400, message: "\u041A\u0443\u0440\u0441 \u0443\u0436\u0435 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D" });
    }
    const idempotenceKey = crypto.randomUUID();
    const purchaseId = crypto.randomUUID();
    await db.insert(purchases).values({
      id: purchaseId,
      userId: user.id,
      courseId,
      amount: course.price,
      status: "pending",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    const paymentData = {
      amount: {
        value: course.price.toFixed(2),
        currency: "RUB"
      },
      capture: true,
      confirmation: {
        type: "redirect",
        return_url: returnUrl || "https://kroyfit.ru/courses/" + course.slug
      },
      description: `\u041E\u043F\u043B\u0430\u0442\u0430 \u043A\u0443\u0440\u0441\u0430: ${course.title}`,
      metadata: {
        purchaseId,
        userId: user.id,
        courseId
      }
    };
    console.log("\u{1F7E1} [API] \u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u0432 \u042E\u041A\u0430\u0441\u0441\u0443:", JSON.stringify(paymentData, null, 2));
    const auth = Buffer.from(`${SHOP_ID}:${API_KEY}`).toString("base64");
    const response = await $fetch("https://api.yookassa.ru/v3/payments", {
      method: "POST",
      headers: {
        "Authorization": `Basic ${auth}`,
        "Content-Type": "application/json",
        "Idempotence-Key": idempotenceKey
      },
      body: paymentData
    });
    console.log("\u2705 [API] \u041F\u043B\u0430\u0442\u0435\u0436 \u0441\u043E\u0437\u0434\u0430\u043D \u0432 \u042E\u041A\u0430\u0441\u0441\u0435:", response.id);
    await db.update(purchases).set({ paymentId: response.id }).where(eq(purchases.id, purchaseId));
    return {
      success: true,
      confirmationUrl: response.confirmation.confirmation_url,
      paymentId: response.id,
      purchaseId
    };
  } catch (error) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u043B\u0430\u0442\u0435\u0436\u0430:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      message: error.message || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u043B\u0430\u0442\u0435\u0436\u0430"
    });
  }
});

export { create_post as default };
//# sourceMappingURL=create.post.mjs.map
