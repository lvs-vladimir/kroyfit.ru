import { _ as __nuxt_component_0 } from "./nuxt-link-B6u-mv8x.js";
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useRoute, _ as _export_sfc } from "../server.mjs";
import "/root/kroyfit/node_modules/ufo/dist/index.mjs";
import "/root/kroyfit/node_modules/defu/dist/defu.mjs";
import "/root/kroyfit/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/root/kroyfit/node_modules/hookable/dist/index.mjs";
import "/root/kroyfit/node_modules/unctx/dist/index.mjs";
import "/root/kroyfit/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "vue-router";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "payment-success",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const paymentId = ref("");
    const purchase = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "payment-success" }, _attrs))} data-v-b4662b40><div class="container-max" data-v-b4662b40><div class="success-card" data-v-b4662b40><div class="success-icon" data-v-b4662b40>✅</div><h1 data-v-b4662b40>Платёж успешно принят!</h1><p class="subtitle" data-v-b4662b40>Спасибо за покупку курса</p>`);
      if (unref(purchase)) {
        _push(`<div class="course-info" data-v-b4662b40><h2 data-v-b4662b40>${ssrInterpolate(unref(purchase).course?.title)}</h2><p class="price" data-v-b4662b40>${ssrInterpolate(unref(purchase).course?.price)} ₽</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="info-box" data-v-b4662b40><p data-v-b4662b40><strong data-v-b4662b40>ID платежа:</strong> ${ssrInterpolate(unref(paymentId))}</p><p data-v-b4662b40><strong data-v-b4662b40>Статус:</strong> <span class="status-badge" data-v-b4662b40>Завершён</span></p><p data-v-b4662b40><strong data-v-b4662b40>Дата:</strong> ${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleDateString("ru-RU"))}</p></div><div class="actions" data-v-b4662b40>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`На главную`);
          } else {
            return [
              createTextVNode("На главную")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/courses",
        class: "btn btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`К курсам`);
          } else {
            return [
              createTextVNode("К курсам")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="note" data-v-b4662b40> Письмо с подтверждением отправлено на вашу почту.<br data-v-b4662b40> Доступ к курсу активирован в вашем аккаунте. </p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/payment-success.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const paymentSuccess = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b4662b40"]]);
export {
  paymentSuccess as default
};
//# sourceMappingURL=payment-success-DddzDd8n.js.map
