import { executeAsync } from "/root/kroyfit/node_modules/unctx/dist/index.mjs";
import { ak as defineNuxtRouteMiddleware, n as navigateTo } from "../server.mjs";
import { u as useCookie } from "./cookie-1eiVNd_S.js";
import { u as useRequestEvent } from "./ssr-BNaGEt3_.js";
import "vue";
import "/root/kroyfit/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/root/kroyfit/node_modules/hookable/dist/index.mjs";
import "/root/kroyfit/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "vue-router";
import "/root/kroyfit/node_modules/defu/dist/defu.mjs";
import "/root/kroyfit/node_modules/ufo/dist/index.mjs";
import "vue/server-renderer";
import "/root/kroyfit/node_modules/cookie-es/dist/index.mjs";
import "/root/kroyfit/node_modules/ohash/dist/index.mjs";
import "/root/kroyfit/node_modules/klona/dist/index.mjs";
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
export {
  admin as default
};
//# sourceMappingURL=admin-D8JCC4y_.js.map
