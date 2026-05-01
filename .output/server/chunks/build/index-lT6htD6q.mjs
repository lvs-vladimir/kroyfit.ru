import { defineComponent, ref, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-DeVZMDsx.mjs';
import { V as VTable } from './VTable-o6koNZcE.mjs';
import { V as VChip } from './VChip-DrZLESMo.mjs';
import { V as VRow, a as VCol } from './VRow-8dNF8Cjb.mjs';
import { V as VCard } from './VCard-Dpos_d6S.mjs';
import { V as VIcon } from './index-CeIkwuF-.mjs';
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
import './VAvatar-CwPHByUG.mjs';
import './position-DWaOuhIW.mjs';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const recentPurchases = ref([]);
    ref(true);
    useSeoMeta({
      title: "Dashboard — Админка"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-60b1560b><div class="mb-6" data-v-60b1560b><h1 class="text-h4 font-weight-bold mb-1" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-60b1560b>Dashboard</h1><p class="text-body-2 text-grey-darken-1" data-v-60b1560b>Последние покупки</p></div>`);
      _push(ssrRenderComponent(VTable, { class: "data-table mb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead data-v-60b1560b${_scopeId}><tr data-v-60b1560b${_scopeId}><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-60b1560b${_scopeId}>Пользователь</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-60b1560b${_scopeId}>Курс</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-60b1560b${_scopeId}>Сумма</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-60b1560b${_scopeId}>Статус</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-60b1560b${_scopeId}>Дата</th></tr></thead><tbody data-v-60b1560b${_scopeId}><!--[-->`);
            ssrRenderList(unref(recentPurchases), (purchase) => {
              _push2(`<tr data-v-60b1560b${_scopeId}><td class="font-weight-medium" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-60b1560b${_scopeId}>${ssrInterpolate(purchase.user)}</td><td class="text-grey-darken-2" data-v-60b1560b${_scopeId}>${ssrInterpolate(purchase.course)}</td><td class="font-weight-medium" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-60b1560b${_scopeId}>${ssrInterpolate(purchase.amount)}</td><td data-v-60b1560b${_scopeId}>`);
              _push2(ssrRenderComponent(VChip, {
                color: purchase.status === "Оплачено" ? "green-darken-3" : "grey-lighten-1",
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
              _push2(`</td><td class="text-grey-darken-2" data-v-60b1560b${_scopeId}>${ssrInterpolate(purchase.date)}</td></tr>`);
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(recentPurchases), (purchase) => {
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
                        color: purchase.status === "Оплачено" ? "green-darken-3" : "grey-lighten-1",
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
      _push(`<h2 class="text-h6 font-weight-bold mb-4" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-60b1560b>Быстрые действия</h2>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "action-card",
                    elevation: "0",
                    onClick: ($event) => _ctx.$router.push("/admin/courses")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          size: "32",
                          color: "grey-darken-3",
                          class: "mb-3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-book-open-variant`);
                            } else {
                              return [
                                createTextVNode("mdi-book-open-variant")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<p class="text-body-2 font-weight-medium mb-1" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-60b1560b${_scopeId3}>Курсы</p><p class="text-caption text-grey-darken-1" data-v-60b1560b${_scopeId3}>Управление курсами</p>`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            size: "32",
                            color: "grey-darken-3",
                            class: "mb-3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-book-open-variant")
                            ]),
                            _: 1
                          }),
                          createVNode("p", {
                            class: "text-body-2 font-weight-medium mb-1",
                            style: { "color": "#020617" }
                          }, "Курсы"),
                          createVNode("p", { class: "text-caption text-grey-darken-1" }, "Управление курсами")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      class: "action-card",
                      elevation: "0",
                      onClick: ($event) => _ctx.$router.push("/admin/courses")
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          size: "32",
                          color: "grey-darken-3",
                          class: "mb-3"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-book-open-variant")
                          ]),
                          _: 1
                        }),
                        createVNode("p", {
                          class: "text-body-2 font-weight-medium mb-1",
                          style: { "color": "#020617" }
                        }, "Курсы"),
                        createVNode("p", { class: "text-caption text-grey-darken-1" }, "Управление курсами")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "action-card",
                    elevation: "0",
                    onClick: ($event) => _ctx.$router.push("/admin/users")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          size: "32",
                          color: "grey-darken-3",
                          class: "mb-3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-account-group`);
                            } else {
                              return [
                                createTextVNode("mdi-account-group")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<p class="text-body-2 font-weight-medium mb-1" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-60b1560b${_scopeId3}>Пользователи</p><p class="text-caption text-grey-darken-1" data-v-60b1560b${_scopeId3}>Список учеников</p>`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            size: "32",
                            color: "grey-darken-3",
                            class: "mb-3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-account-group")
                            ]),
                            _: 1
                          }),
                          createVNode("p", {
                            class: "text-body-2 font-weight-medium mb-1",
                            style: { "color": "#020617" }
                          }, "Пользователи"),
                          createVNode("p", { class: "text-caption text-grey-darken-1" }, "Список учеников")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      class: "action-card",
                      elevation: "0",
                      onClick: ($event) => _ctx.$router.push("/admin/users")
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          size: "32",
                          color: "grey-darken-3",
                          class: "mb-3"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-account-group")
                          ]),
                          _: 1
                        }),
                        createVNode("p", {
                          class: "text-body-2 font-weight-medium mb-1",
                          style: { "color": "#020617" }
                        }, "Пользователи"),
                        createVNode("p", { class: "text-caption text-grey-darken-1" }, "Список учеников")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "action-card",
                    elevation: "0",
                    onClick: ($event) => _ctx.$router.push("/admin/purchases")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          size: "32",
                          color: "grey-darken-3",
                          class: "mb-3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-cart-outline`);
                            } else {
                              return [
                                createTextVNode("mdi-cart-outline")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<p class="text-body-2 font-weight-medium mb-1" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-60b1560b${_scopeId3}>Покупки</p><p class="text-caption text-grey-darken-1" data-v-60b1560b${_scopeId3}>История платежей</p>`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            size: "32",
                            color: "grey-darken-3",
                            class: "mb-3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-cart-outline")
                            ]),
                            _: 1
                          }),
                          createVNode("p", {
                            class: "text-body-2 font-weight-medium mb-1",
                            style: { "color": "#020617" }
                          }, "Покупки"),
                          createVNode("p", { class: "text-caption text-grey-darken-1" }, "История платежей")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      class: "action-card",
                      elevation: "0",
                      onClick: ($event) => _ctx.$router.push("/admin/purchases")
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          size: "32",
                          color: "grey-darken-3",
                          class: "mb-3"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-cart-outline")
                          ]),
                          _: 1
                        }),
                        createVNode("p", {
                          class: "text-body-2 font-weight-medium mb-1",
                          style: { "color": "#020617" }
                        }, "Покупки"),
                        createVNode("p", { class: "text-caption text-grey-darken-1" }, "История платежей")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "action-card",
                    elevation: "0",
                    onClick: ($event) => _ctx.$router.push("/admin/courses")
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        size: "32",
                        color: "grey-darken-3",
                        class: "mb-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-book-open-variant")
                        ]),
                        _: 1
                      }),
                      createVNode("p", {
                        class: "text-body-2 font-weight-medium mb-1",
                        style: { "color": "#020617" }
                      }, "Курсы"),
                      createVNode("p", { class: "text-caption text-grey-darken-1" }, "Управление курсами")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "action-card",
                    elevation: "0",
                    onClick: ($event) => _ctx.$router.push("/admin/users")
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        size: "32",
                        color: "grey-darken-3",
                        class: "mb-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-account-group")
                        ]),
                        _: 1
                      }),
                      createVNode("p", {
                        class: "text-body-2 font-weight-medium mb-1",
                        style: { "color": "#020617" }
                      }, "Пользователи"),
                      createVNode("p", { class: "text-caption text-grey-darken-1" }, "Список учеников")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "action-card",
                    elevation: "0",
                    onClick: ($event) => _ctx.$router.push("/admin/purchases")
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        size: "32",
                        color: "grey-darken-3",
                        class: "mb-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-cart-outline")
                        ]),
                        _: 1
                      }),
                      createVNode("p", {
                        class: "text-body-2 font-weight-medium mb-1",
                        style: { "color": "#020617" }
                      }, "Покупки"),
                      createVNode("p", { class: "text-caption text-grey-darken-1" }, "История платежей")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-60b1560b"]]);

export { index as default };
//# sourceMappingURL=index-lT6htD6q.mjs.map
