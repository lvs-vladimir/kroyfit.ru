import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, isRef, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useCookie } from "./cookie-Cpnsk9ER.js";
import { n as navigateTo, _ as _export_sfc } from "../server.mjs";
import { a as useSeoMeta } from "./composables-CzQ6E5OB.js";
import { V as VAlert } from "./VAlert-72Jb0rGQ.js";
import { V as VForm } from "./VForm-CAy4CCZm.js";
import { V as VTextField } from "./VTextField-B_sJgnT5.js";
import { V as VBtn } from "./VBtn-B_84wQjp.js";
import { V as VDivider } from "./VDivider-Dk5F695k.js";
import "/root/kroyfit/node_modules/cookie-es/dist/index.mjs";
import "/root/kroyfit/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "/root/kroyfit/node_modules/ohash/dist/index.mjs";
import "/root/kroyfit/node_modules/klona/dist/index.mjs";
import "./ssr-Cugq82Tj.js";
import "/root/kroyfit/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/root/kroyfit/node_modules/hookable/dist/index.mjs";
import "/root/kroyfit/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "/root/kroyfit/node_modules/defu/dist/defu.mjs";
import "/root/kroyfit/node_modules/ufo/dist/index.mjs";
import "/root/kroyfit/node_modules/@unhead/vue/dist/index.mjs";
import "./position-BO6_vXaU.js";
import "./index-CXrZw6YX.js";
import "./autofocus-BmpXWPzV.js";
import "./forwardRefs-sHFik_ks.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const password = ref("");
    const loading = ref(false);
    const error = ref("");
    const handleLogin = async () => {
      error.value = "";
      loading.value = true;
      try {
        const response = await $fetch("/api/admin/login", {
          method: "POST",
          body: { email: email.value, password: password.value }
        });
        if (response.token) {
          const cookie = useCookie("admin-token");
          cookie.value = response.token;
          await navigateTo("/admin");
        }
      } catch (e) {
        error.value = e.data?.message || "Ошибка входа. Проверьте email и пароль.";
      } finally {
        loading.value = false;
      }
    };
    useSeoMeta({
      title: "Вход в админку"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-page" }, _attrs))} data-v-40ec7473><div class="login-card" data-v-40ec7473><div class="mb-8" data-v-40ec7473><div class="text-h6 font-weight-bold mb-1" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-40ec7473> ✂️ ${ssrInterpolate(_ctx.siteName)}</div><p class="text-body-2 text-grey-darken-1" data-v-40ec7473>Вход в админку</p></div>`);
      if (unref(error)) {
        _push(ssrRenderComponent(VAlert, {
          type: "error",
          variant: "tonal",
          density: "compact",
          class: "mb-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(error))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(error)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(VForm, { onSubmit: handleLogin }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4" data-v-40ec7473${_scopeId}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-40ec7473${_scopeId}>Email</label>`);
            _push2(ssrRenderComponent(VTextField, {
              modelValue: unref(email),
              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
              type: "email",
              placeholder: "Введите email",
              variant: "outlined",
              density: "compact",
              "hide-details": "",
              disabled: unref(loading)
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mb-6" data-v-40ec7473${_scopeId}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-40ec7473${_scopeId}>Пароль</label>`);
            _push2(ssrRenderComponent(VTextField, {
              modelValue: unref(password),
              "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
              type: "password",
              placeholder: "••••••••",
              variant: "outlined",
              density: "compact",
              "hide-details": "",
              disabled: unref(loading)
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(VBtn, {
              type: "submit",
              color: "green-darken-3",
              block: "",
              loading: unref(loading),
              style: { "border-radius": "8px", "text-transform": "none", "font-weight": "500" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Войти `);
                } else {
                  return [
                    createTextVNode(" Войти ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-4" }, [
                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                createVNode(VTextField, {
                  modelValue: unref(email),
                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                  type: "email",
                  placeholder: "Введите email",
                  variant: "outlined",
                  density: "compact",
                  "hide-details": "",
                  disabled: unref(loading)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Пароль"),
                createVNode(VTextField, {
                  modelValue: unref(password),
                  "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                  type: "password",
                  placeholder: "••••••••",
                  variant: "outlined",
                  density: "compact",
                  "hide-details": "",
                  disabled: unref(loading)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
              ]),
              createVNode(VBtn, {
                type: "submit",
                color: "green-darken-3",
                block: "",
                loading: unref(loading),
                style: { "border-radius": "8px", "text-transform": "none", "font-weight": "500" }
              }, {
                default: withCtx(() => [
                  createTextVNode(" Войти ")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDivider, { class: "my-6" }, null, _parent));
      _push(`<div class="text-center" data-v-40ec7473><p class="text-caption text-grey-darken-1" data-v-40ec7473> Забыли пароль? Обратитесь к главному администратору </p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-40ec7473"]]);
export {
  login as default
};
//# sourceMappingURL=login-D9LidqsN.js.map
