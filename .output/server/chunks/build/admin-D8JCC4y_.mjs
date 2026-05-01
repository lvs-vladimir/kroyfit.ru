import { L as executeAsync } from '../nitro/nitro.mjs';
import { ak as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import { u as useCookie } from './cookie-1eiVNd_S.mjs';
import { u as useRequestEvent } from './ssr-BNaGEt3_.mjs';
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
import 'vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const admin = defineNuxtRouteMiddleware(async (to) => {
  let __temp, __restore;
  let token = useCookie("admin-token").value;
  if (!token) {
    try {
      const event = useRequestEvent();
      if (event) {
        token = getCookie(event, "admin-token");
      }
    } catch (e) {
    }
  }
  if (to.path === "/admin/login") {
    if (!token) return;
    try {
      ;
      [__temp, __restore] = executeAsync(() => $fetch("/api/admin/verify-token")), await __temp, __restore();
      ;
      return navigateTo("/admin");
    } catch (e) {
      const cookie = useCookie("admin-token");
      cookie.value = null;
    }
    return;
  }
  if (!token) {
    return navigateTo("/admin/login");
  }
  try {
    ;
    [__temp, __restore] = executeAsync(() => $fetch("/api/admin/verify-token")), await __temp, __restore();
    ;
  } catch (e) {
    const cookie = useCookie("admin-token");
    cookie.value = null;
    return navigateTo("/admin/login");
  }
});

export { admin as default };
//# sourceMappingURL=admin-D8JCC4y_.mjs.map
