import { aj as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import { u as useCookie } from './cookie-DonjFcxZ.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';
import './ssr-BEZSE_YS.mjs';

const admin = defineNuxtRouteMiddleware((to) => {
  const token = useCookie("admin-token");
  if (!token.value && to.path.startsWith("/admin") && to.path !== "/admin/login") {
    return navigateTo("/admin/login");
  }
  if (token.value && to.path === "/admin/login") {
    return navigateTo("/admin");
  }
});

export { admin as default };
//# sourceMappingURL=admin-o4siUiWx.mjs.map
