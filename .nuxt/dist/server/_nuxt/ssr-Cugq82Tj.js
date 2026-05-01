import "/root/kroyfit/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "vue";
import { b as useNuxtApp } from "../server.mjs";
function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
function useRequestFetch() {
  return useRequestEvent()?.$fetch || globalThis.$fetch;
}
export {
  useRequestFetch as a,
  useRequestEvent as u
};
//# sourceMappingURL=ssr-Cugq82Tj.js.map
