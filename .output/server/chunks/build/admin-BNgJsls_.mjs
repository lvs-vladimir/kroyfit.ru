import { z as executeAsync } from '../nitro/nitro.mjs';
import { aj as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import { u as useCookie } from './cookie-DonjFcxZ.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';
import './ssr-BEZSE_YS.mjs';

const admin = defineNuxtRouteMiddleware(async (to) => {
  let __temp, __restore;
  const token = useCookie("admin-token");
  if (to.path === "/admin/login") {
    if (!token.value) return;
    try {
      ;
      [__temp, __restore] = executeAsync(() => $fetch("/api/admin/verify-token")), await __temp, __restore();
      ;
      return navigateTo("/admin");
    } catch (e) {
      token.value = null;
    }
    return;
  }
  if (!token.value) {
    return navigateTo("/admin/login");
  }
  try {
    ;
    [__temp, __restore] = executeAsync(() => $fetch("/api/admin/verify-token")), await __temp, __restore();
    ;
  } catch (e) {
    token.value = null;
    return navigateTo("/admin/login");
  }
});

export { admin as default };
//# sourceMappingURL=admin-BNgJsls_.mjs.map
