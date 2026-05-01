import { defineComponent, ref, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-DeVZMDsx.mjs';
import { V as VSpacer } from './VSpacer-DwAbcE_h.mjs';
import { V as VBtn } from './VBtn-Djm3DFQI.mjs';
import { V as VIcon } from './index-CeIkwuF-.mjs';
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
import './position-DWaOuhIW.mjs';
import './VAvatar-CwPHByUG.mjs';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const courses = ref([]);
    ref(true);
    const deleteCourse = async (id) => {
      if (!confirm("Удалить курс? Это действие нельзя отменить.")) return;
      try {
        await $fetch("/api/admin/settings", {
          method: "POST",
          body: {
            type: "course-delete",
            data: { id }
          }
        });
        courses.value = courses.value.filter((c) => c.id !== id);
        console.log("✅ Курс удален:", id);
      } catch (e) {
        console.error("❌ Ошибка удаления курса:", e);
        alert("Ошибка: " + (e.data?.message || "Не удалось удалить курс"));
      }
    };
    useSeoMeta({
      title: "Курсы — Админка"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-45e09239><div class="d-flex align-center mb-6" data-v-45e09239><div data-v-45e09239><h1 class="text-h4 font-weight-bold mb-1" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-45e09239>Курсы</h1><p class="text-body-2 text-grey-darken-1" data-v-45e09239>Управление курсами школы</p></div>`);
      _push(ssrRenderComponent(VSpacer, null, null, _parent));
      _push(ssrRenderComponent(VBtn, {
        color: "green-darken-3",
        to: "/admin/courses/new",
        variant: "flat",
        size: "small",
        style: { "border-radius": "8px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              start: "",
              size: "18"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-plus`);
                } else {
                  return [
                    createTextVNode("mdi-plus")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Создать `);
          } else {
            return [
              createVNode(VIcon, {
                start: "",
                size: "18"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-plus")
                ]),
                _: 1
              }),
              createTextVNode(" Создать ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VTable, { class: "courses-table" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead data-v-45e09239${_scopeId}><tr data-v-45e09239${_scopeId}><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-45e09239${_scopeId}>Название</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-45e09239${_scopeId}>Категория</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-45e09239${_scopeId}>Цена</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-45e09239${_scopeId}>Статус</th><th class="text-right text-caption text-grey-darken-1 font-weight-medium" data-v-45e09239${_scopeId}>Действия</th></tr></thead><tbody data-v-45e09239${_scopeId}><!--[-->`);
            ssrRenderList(unref(courses), (course) => {
              _push2(`<tr data-v-45e09239${_scopeId}><td class="font-weight-medium" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-45e09239${_scopeId}>${ssrInterpolate(course.title)}</td><td class="text-grey-darken-2" data-v-45e09239${_scopeId}>${ssrInterpolate(course.category)}</td><td class="text-grey-darken-2" data-v-45e09239${_scopeId}>${ssrInterpolate(course.priceDisplay)}</td><td data-v-45e09239${_scopeId}>`);
              _push2(ssrRenderComponent(VChip, {
                color: course.isPublished ? "green-darken-3" : "grey-lighten-1",
                "text-color": "white",
                size: "x-small",
                label: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(course.isPublished ? "Опубликован" : "Черновик")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(course.isPublished ? "Опубликован" : "Черновик"), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td class="text-right" data-v-45e09239${_scopeId}>`);
              _push2(ssrRenderComponent(VBtn, {
                icon: "",
                size: "x-small",
                variant: "text",
                color: "grey-darken-2",
                to: `/admin/courses/${course.id}`,
                class: "mr-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { size: "18" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`mdi-pencil-outline`);
                        } else {
                          return [
                            createTextVNode("mdi-pencil-outline")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, { size: "18" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-pencil-outline")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VBtn, {
                icon: "",
                size: "x-small",
                variant: "text",
                color: "grey-darken-2",
                onClick: ($event) => deleteCourse(course.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { size: "18" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`mdi-delete-outline`);
                        } else {
                          return [
                            createTextVNode("mdi-delete-outline")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, { size: "18" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-delete-outline")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-left text-caption text-grey-darken-1 font-weight-medium" }, "Название"),
                  createVNode("th", { class: "text-left text-caption text-grey-darken-1 font-weight-medium" }, "Категория"),
                  createVNode("th", { class: "text-left text-caption text-grey-darken-1 font-weight-medium" }, "Цена"),
                  createVNode("th", { class: "text-left text-caption text-grey-darken-1 font-weight-medium" }, "Статус"),
                  createVNode("th", { class: "text-right text-caption text-grey-darken-1 font-weight-medium" }, "Действия")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(courses), (course) => {
                  return openBlock(), createBlock("tr", {
                    key: course.id
                  }, [
                    createVNode("td", {
                      class: "font-weight-medium",
                      style: { "color": "#020617" }
                    }, toDisplayString(course.title), 1),
                    createVNode("td", { class: "text-grey-darken-2" }, toDisplayString(course.category), 1),
                    createVNode("td", { class: "text-grey-darken-2" }, toDisplayString(course.priceDisplay), 1),
                    createVNode("td", null, [
                      createVNode(VChip, {
                        color: course.isPublished ? "green-darken-3" : "grey-lighten-1",
                        "text-color": "white",
                        size: "x-small",
                        label: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(course.isPublished ? "Опубликован" : "Черновик"), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])
                    ]),
                    createVNode("td", { class: "text-right" }, [
                      createVNode(VBtn, {
                        icon: "",
                        size: "x-small",
                        variant: "text",
                        color: "grey-darken-2",
                        to: `/admin/courses/${course.id}`,
                        class: "mr-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { size: "18" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-pencil-outline")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createVNode(VBtn, {
                        icon: "",
                        size: "x-small",
                        variant: "text",
                        color: "grey-darken-2",
                        onClick: ($event) => deleteCourse(course.id)
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { size: "18" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-delete-outline")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/courses/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-45e09239"]]);

export { index as default };
//# sourceMappingURL=index-BoLuUVHt.mjs.map
