import { d as defineEventHandler, r as readBody, m as getHeader, a as db, p as purchases } from '../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
import require$$1 from 'crypto';
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

const API_KEY = process.env.YOOKASSA_SECRET_KEY || "live_Gn0WbDxR3hthCMkTu13qWuaVhXo-LPDJI_QN2P54-OM";
const webhook_post = defineEventHandler(async (event) => {
  console.log("\u{1F7E1} [API] POST /api/payments/webhook - Webhook \u043E\u0442 \u042E\u041A\u0430\u0441\u0441\u044B");
  try {
    const body = await readBody(event);
    const signature = getHeader(event, "ye-signature");
    if (signature) {
      const bodyString = JSON.stringify(body);
      const expectedSignature = require$$1.createHmac("sha256", API_KEY).update(bodyString).digest("hex");
      if (signature !== expectedSignature) {
        console.error("\u274C [API] \u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u044C webhook");
      }
    }
    console.log("\u{1F4E8} [API] \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u043E \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435:", body.event);
    const eventType = body.event;
    const object = body.object;
    if (!object || !object.id) {
      console.error("\u274C [API] \u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F");
      return { received: true };
    }
    const paymentId = object.id;
    const metadata = object.metadata || {};
    const purchaseId = metadata.purchaseId;
    if (!purchaseId) {
      console.error("\u274C [API] \u041D\u0435\u0442 purchaseId \u0432 metadata");
      return { received: true };
    }
    switch (eventType) {
      case "payment.succeeded":
        console.log("\u2705 [API] \u041F\u043B\u0430\u0442\u0435\u0436 \u0443\u0441\u043F\u0435\u0448\u0435\u043D:", paymentId);
        await db.update(purchases).set({
          status: "completed",
          paymentId
        }).where(eq(purchases.id, purchaseId));
        console.log("\u2705 [API] \u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430: completed");
        break;
      case "payment.waiting_for_capture":
        console.log("\u23F3 [API] \u041F\u043B\u0430\u0442\u0435\u0436 \u043E\u0436\u0438\u0434\u0430\u0435\u0442 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F:", paymentId);
        await db.update(purchases).set({
          status: "waiting_for_capture",
          paymentId
        }).where(eq(purchases.id, purchaseId));
        break;
      case "payment.canceled":
        console.log("\u274C [API] \u041F\u043B\u0430\u0442\u0435\u0436 \u043E\u0442\u043C\u0435\u043D\u0435\u043D:", paymentId);
        await db.update(purchases).set({
          status: "canceled",
          paymentId
        }).where(eq(purchases.id, purchaseId));
        break;
      case "payment_method.active":
        console.log("\u2705 [API] \u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D:", paymentId);
        break;
      case "refund.succeeded":
        console.log("\u{1F4B0} [API] \u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u0443\u0441\u043F\u0435\u0448\u0435\u043D:", paymentId);
        await db.update(purchases).set({
          status: "refunded",
          paymentId
        }).where(eq(purchases.id, purchaseId));
        break;
      default:
        console.log("\u2139\uFE0F [API] \u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u0435:", eventType);
    }
    return { received: true };
  } catch (error) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 webhook:", error);
    return { received: true };
  }
});

export { webhook_post as default };
//# sourceMappingURL=webhook.post.mjs.map
