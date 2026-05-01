import { defineComponent, ref, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-DeVZMDsx.mjs';
import { V as VTable } from './VTable-o6koNZcE.mjs';
import { V as VChip } from './VChip-DrZLESMo.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './index-CeIkwuF-.mjs';
import './VAvatar-CwPHByUG.mjs';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const purchases = ref([]);
    ref(true);
    useSeoMeta({
      title: "Покупки — Админка"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-63d39aa9><div class="mb-6" data-v-63d39aa9><h1 class="text-h4 font-weight-bold mb-1" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-63d39aa9>Покупки</h1><p class="text-body-2 text-grey-darken-1" data-v-63d39aa9>История покупок и платежей</p></div>`);
      _push(ssrRenderComponent(VTable, { class: "data-table" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead data-v-63d39aa9${_scopeId}><tr data-v-63d39aa9${_scopeId}><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-63d39aa9${_scopeId}>Пользователь</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-63d39aa9${_scopeId}>Курс</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-63d39aa9${_scopeId}>Сумма</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-63d39aa9${_scopeId}>Статус</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-63d39aa9${_scopeId}>Дата</th></tr></thead><tbody data-v-63d39aa9${_scopeId}><!--[-->`);
            ssrRenderList(unref(purchases), (purchase) => {
              _push2(`<tr data-v-63d39aa9${_scopeId}><td class="font-weight-medium" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-63d39aa9${_scopeId}>${ssrInterpolate(purchase.user)}</td><td class="text-grey-darken-2" data-v-63d39aa9${_scopeId}>${ssrInterpolate(purchase.course)}</td><td class="font-weight-medium" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-63d39aa9${_scopeId}>${ssrInterpolate(purchase.amount)}</td><td data-v-63d39aa9${_scopeId}>`);
              _push2(ssrRenderComponent(VChip, {
                color: purchase.status === "Оплачено" ? "grey-darken-4" : "grey-lighten-1",
                "text-color": "white",
                size: "x-small",
                label: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(purchase.status)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(purchase.status), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td class="text-grey-darken-2" data-v-63d39aa9${_scopeId}>${ssrInterpolate(purchase.date)}</td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-left text-caption text-grey-darken-1 font-weight-medium" }, "Пользователь"),
                  createVNode("th", { class: "text-left text-caption text-grey-darken-1 font-weight-medium" }, "Курс"),
                  createVNode("th", { class: "text-left text-caption text-grey-darken-1 font-weight-medium" }, "Сумма"),
                  createVNode("th", { class: "text-left text-caption text-grey-darken-1 font-weight-medium" }, "Статус"),
                  createVNode("th", { class: "text-left text-caption text-grey-darken-1 font-weight-medium" }, "Дата")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(purchases), (purchase) => {
                  return openBlock(), createBlock("tr", {
                    key: purchase.id
                  }, [
                    createVNode("td", {
                      class: "font-weight-medium",
                      style: { "color": "#020617" }
                    }, toDisplayString(purchase.user), 1),
                    createVNode("td", { class: "text-grey-darken-2" }, toDisplayString(purchase.course), 1),
                    createVNode("td", {
                      class: "font-weight-medium",
                      style: { "color": "#020617" }
                    }, toDisplayString(purchase.amount), 1),
                    createVNode("td", null, [
                      createVNode(VChip, {
                        color: purchase.status === "Оплачено" ? "grey-darken-4" : "grey-lighten-1",
                        "text-color": "white",
                        size: "x-small",
                        label: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(purchase.status), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])
                    ]),
                    createVNode("td", { class: "text-grey-darken-2" }, toDisplayString(purchase.date), 1)
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/purchases/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-63d39aa9"]]);

export { index as default };
//# sourceMappingURL=index-MKzYB-Wa.mjs.map
