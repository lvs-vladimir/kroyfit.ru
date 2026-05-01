import { ak as defineNuxtRouteMiddleware } from "../server.mjs";
import { u as useCookie } from "./cookie-1eiVNd_S.js";
import { u as useRequestEvent } from "./ssr-BNaGEt3_.js";
import "vue";
import "/root/kroyfit/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/root/kroyfit/node_modules/hookable/dist/index.mjs";
import "/root/kroyfit/node_modules/unctx/dist/index.mjs";
import "/root/kroyfit/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "vue-router";
import "/root/kroyfit/node_modules/defu/dist/defu.mjs";
import "/root/kroyfit/node_modules/ufo/dist/index.mjs";
import "vue/server-renderer";
import "/root/kroyfit/node_modules/cookie-es/dist/index.mjs";
import "/root/kroyfit/node_modules/ohash/dist/index.mjs";
import "/root/kroyfit/node_modules/klona/dist/index.mjs";
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
export {
  test as default
};
//# sourceMappingURL=test-D4Sys7p8.js.map
