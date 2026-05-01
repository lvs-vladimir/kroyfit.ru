import { ak as defineNuxtRouteMiddleware } from './server.mjs';
import { u as useCookie } from './cookie-1eiVNd_S.mjs';
import { u as useRequestEvent } from './ssr-BNaGEt3_.mjs';
import 'vue';
import '../nitro/nitro.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const test = defineNuxtRouteMiddleware(async (to) => {
  console.log("=== MIDDLEWARE DEBUG ===");
  console.log("Path:", to.path);
  console.log("Client?", false);
  console.log("Server?", true);
  const cookie = useCookie("admin-token");
  console.log("Cookie value from useCookie:", cookie.value);
  {
    try {
      const event = useRequestEvent();
      console.log("Event exists?", !!event);
      if (event) {
        const fromEvent = getCookie(event, "admin-token");
        console.log("Cookie from event:", fromEvent);
      }
    } catch (e) {
      console.log("Error getting event:", e);
    }
  }
  return;
});

export { test as default };
//# sourceMappingURL=test-D4Sys7p8.mjs.map
