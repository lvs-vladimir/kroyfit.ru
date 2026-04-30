import { _ as __nuxt_component_0 } from './nuxt-link-BOwjWdni.mjs';
import { defineComponent, ref, reactive, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, isRef, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-CsgbRhqC.mjs';
import { V as VSpacer } from './VSpacer-D4seJII7.mjs';
import { V as VBtn } from './VBtn-DVf6sXjQ.mjs';
import { V as VIcon } from './index-BGySj97a.mjs';
import { V as VTable } from './VTable-Bhlz99YA.mjs';
import { V as VDialog } from './VDialog-DXCxqdt8.mjs';
import { V as VCard, a as VCardTitle, b as VCardText } from './VCard-Csr2dFxs.mjs';
import { V as VForm } from './VForm-CD1z17QD.mjs';
import { V as VTextField } from './VTextField-Dtjej8un.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './position-BBaEnnBn.mjs';
import './VOverlay-BxD_N9aQ.mjs';
import './forwardRefs-yM0wzxMx.mjs';
import './scopeId-DrHQwwj5.mjs';
import './VAvatar-CmpUZe0a.mjs';
import './autofocus-DjPPY-aF.mjs';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const users = ref([]);
    ref(true);
    const showCreateDialog = ref(false);
    const saving = ref(false);
    const newUser = reactive({
      name: "",
      email: "",
      password: "",
      vk: ""
    });
    const createUser = async () => {
      saving.value = true;
      try {
        const user = {
          id: String(Date.now()),
          name: newUser.name,
          email: newUser.email,
          vk: newUser.vk,
          coursesCount: 0,
          registered: (/* @__PURE__ */ new Date()).toLocaleDateString("ru-RU")
        };
        users.value.push(user);
        showCreateDialog.value = false;
        newUser.name = "";
        newUser.email = "";
        newUser.password = "";
        newUser.vk = "";
      } finally {
        saving.value = false;
      }
    };
    useSeoMeta({
      title: "Пользователи — Админка"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f9dba961><div class="d-flex align-center mb-6" data-v-f9dba961><div data-v-f9dba961><h1 class="text-h4 font-weight-bold mb-1" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-f9dba961>Пользователи</h1><p class="text-body-2 text-grey-darken-1" data-v-f9dba961>Управление учениками</p></div>`);
      _push(ssrRenderComponent(VSpacer, null, null, _parent));
      _push(ssrRenderComponent(VBtn, {
        color: "green-darken-3",
        variant: "flat",
        size: "small",
        style: { "border-radius": "8px" },
        onClick: ($event) => showCreateDialog.value = true
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
      _push(ssrRenderComponent(VTable, { class: "data-table" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead data-v-f9dba961${_scopeId}><tr data-v-f9dba961${_scopeId}><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-f9dba961${_scopeId}>Имя</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-f9dba961${_scopeId}>Email</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-f9dba961${_scopeId}>VK</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-f9dba961${_scopeId}>Курсов</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-f9dba961${_scopeId}>Дата</th></tr></thead><tbody data-v-f9dba961${_scopeId}><!--[-->`);
            ssrRenderList(unref(users), (user) => {
              _push2(`<tr data-v-f9dba961${_scopeId}><td data-v-f9dba961${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_link, {
                to: `/admin/users/${user.id}`,
                class: "text-decoration-none font-weight-medium",
                style: { "color": "#020617" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(user.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(user.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td class="text-grey-darken-2" data-v-f9dba961${_scopeId}>${ssrInterpolate(user.email)}</td><td data-v-f9dba961${_scopeId}>`);
              if (user.vk) {
                _push2(`<a${ssrRenderAttr("href", `https://vk.com/id${user.vk}`)} target="_blank" class="text-decoration-none text-grey-darken-2" data-v-f9dba961${_scopeId}> VK ${ssrInterpolate(user.vk)}</a>`);
              } else {
                _push2(`<span class="text-grey-lighten-1" data-v-f9dba961${_scopeId}>—</span>`);
              }
              _push2(`</td><td class="text-grey-darken-2" data-v-f9dba961${_scopeId}>${ssrInterpolate(user.coursesCount)}</td><td class="text-grey-darken-2" data-v-f9dba961${_scopeId}>${ssrInterpolate(user.registered)}</td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-left text-caption text-grey-darken-1 font-weight-medium" }, "Имя"),
                  createVNode("th", { class: "text-left text-caption text-grey-darken-1 font-weight-medium" }, "Email"),
                  createVNode("th", { class: "text-left text-caption text-grey-darken-1 font-weight-medium" }, "VK"),
                  createVNode("th", { class: "text-left text-caption text-grey-darken-1 font-weight-medium" }, "Курсов"),
                  createVNode("th", { class: "text-left text-caption text-grey-darken-1 font-weight-medium" }, "Дата")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(users), (user) => {
                  return openBlock(), createBlock("tr", {
                    key: user.id
                  }, [
                    createVNode("td", null, [
                      createVNode(_component_nuxt_link, {
                        to: `/admin/users/${user.id}`,
                        class: "text-decoration-none font-weight-medium",
                        style: { "color": "#020617" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(user.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]),
                    createVNode("td", { class: "text-grey-darken-2" }, toDisplayString(user.email), 1),
                    createVNode("td", null, [
                      user.vk ? (openBlock(), createBlock("a", {
                        key: 0,
                        href: `https://vk.com/id${user.vk}`,
                        target: "_blank",
                        class: "text-decoration-none text-grey-darken-2"
                      }, " VK " + toDisplayString(user.vk), 9, ["href"])) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: "text-grey-lighten-1"
                      }, "—"))
                    ]),
                    createVNode("td", { class: "text-grey-darken-2" }, toDisplayString(user.coursesCount), 1),
                    createVNode("td", { class: "text-grey-darken-2" }, toDisplayString(user.registered), 1)
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(showCreateDialog),
        "onUpdate:modelValue": ($event) => isRef(showCreateDialog) ? showCreateDialog.value = $event : null,
        "max-width": "500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { style: { "border-radius": "12px" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "pa-6 pb-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-h6 font-weight-bold" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-f9dba961${_scopeId3}>Создание пользователя</h2>`);
                      } else {
                        return [
                          createVNode("h2", {
                            class: "text-h6 font-weight-bold",
                            style: { "color": "#020617" }
                          }, "Создание пользователя")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pa-6 pt-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, { onSubmit: createUser }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mb-4" data-v-f9dba961${_scopeId4}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-f9dba961${_scopeId4}>Имя</label>`);
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(newUser).name,
                                "onUpdate:modelValue": ($event) => unref(newUser).name = $event,
                                placeholder: "Имя пользователя",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="mb-4" data-v-f9dba961${_scopeId4}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-f9dba961${_scopeId4}>Email</label>`);
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(newUser).email,
                                "onUpdate:modelValue": ($event) => unref(newUser).email = $event,
                                type: "email",
                                placeholder: "email@example.com",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="mb-4" data-v-f9dba961${_scopeId4}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-f9dba961${_scopeId4}>Пароль</label>`);
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(newUser).password,
                                "onUpdate:modelValue": ($event) => unref(newUser).password = $event,
                                type: "password",
                                placeholder: "••••••••",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="mb-4" data-v-f9dba961${_scopeId4}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-f9dba961${_scopeId4}>VK ID</label>`);
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(newUser).vk,
                                "onUpdate:modelValue": ($event) => unref(newUser).vk = $event,
                                placeholder: "123456789",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="d-flex ga-2 mt-2" data-v-f9dba961${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                type: "submit",
                                color: "green-darken-3",
                                variant: "flat",
                                loading: unref(saving),
                                style: { "border-radius": "8px" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Создать `);
                                  } else {
                                    return [
                                      createTextVNode(" Создать ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                variant: "text",
                                color: "grey-darken-2",
                                onClick: ($event) => showCreateDialog.value = false
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Отмена `);
                                  } else {
                                    return [
                                      createTextVNode(" Отмена ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                                  createVNode(VTextField, {
                                    modelValue: unref(newUser).name,
                                    "onUpdate:modelValue": ($event) => unref(newUser).name = $event,
                                    placeholder: "Имя пользователя",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                  createVNode(VTextField, {
                                    modelValue: unref(newUser).email,
                                    "onUpdate:modelValue": ($event) => unref(newUser).email = $event,
                                    type: "email",
                                    placeholder: "email@example.com",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Пароль"),
                                  createVNode(VTextField, {
                                    modelValue: unref(newUser).password,
                                    "onUpdate:modelValue": ($event) => unref(newUser).password = $event,
                                    type: "password",
                                    placeholder: "••••••••",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "VK ID"),
                                  createVNode(VTextField, {
                                    modelValue: unref(newUser).vk,
                                    "onUpdate:modelValue": ($event) => unref(newUser).vk = $event,
                                    placeholder: "123456789",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "d-flex ga-2 mt-2" }, [
                                  createVNode(VBtn, {
                                    type: "submit",
                                    color: "green-darken-3",
                                    variant: "flat",
                                    loading: unref(saving),
                                    style: { "border-radius": "8px" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Создать ")
                                    ]),
                                    _: 1
                                  }, 8, ["loading"]),
                                  createVNode(VBtn, {
                                    variant: "text",
                                    color: "grey-darken-2",
                                    onClick: ($event) => showCreateDialog.value = false
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Отмена ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VForm, {
                            onSubmit: withModifiers(createUser, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                                createVNode(VTextField, {
                                  modelValue: unref(newUser).name,
                                  "onUpdate:modelValue": ($event) => unref(newUser).name = $event,
                                  placeholder: "Имя пользователя",
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                createVNode(VTextField, {
                                  modelValue: unref(newUser).email,
                                  "onUpdate:modelValue": ($event) => unref(newUser).email = $event,
                                  type: "email",
                                  placeholder: "email@example.com",
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Пароль"),
                                createVNode(VTextField, {
                                  modelValue: unref(newUser).password,
                                  "onUpdate:modelValue": ($event) => unref(newUser).password = $event,
                                  type: "password",
                                  placeholder: "••••••••",
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "VK ID"),
                                createVNode(VTextField, {
                                  modelValue: unref(newUser).vk,
                                  "onUpdate:modelValue": ($event) => unref(newUser).vk = $event,
                                  placeholder: "123456789",
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "d-flex ga-2 mt-2" }, [
                                createVNode(VBtn, {
                                  type: "submit",
                                  color: "green-darken-3",
                                  variant: "flat",
                                  loading: unref(saving),
                                  style: { "border-radius": "8px" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Создать ")
                                  ]),
                                  _: 1
                                }, 8, ["loading"]),
                                createVNode(VBtn, {
                                  variant: "text",
                                  color: "grey-darken-2",
                                  onClick: ($event) => showCreateDialog.value = false
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Отмена ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                      default: withCtx(() => [
                        createVNode("h2", {
                          class: "text-h6 font-weight-bold",
                          style: { "color": "#020617" }
                        }, "Создание пользователя")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "pa-6 pt-2" }, {
                      default: withCtx(() => [
                        createVNode(VForm, {
                          onSubmit: withModifiers(createUser, ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-4" }, [
                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                              createVNode(VTextField, {
                                modelValue: unref(newUser).name,
                                "onUpdate:modelValue": ($event) => unref(newUser).name = $event,
                                placeholder: "Имя пользователя",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mb-4" }, [
                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                              createVNode(VTextField, {
                                modelValue: unref(newUser).email,
                                "onUpdate:modelValue": ($event) => unref(newUser).email = $event,
                                type: "email",
                                placeholder: "email@example.com",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mb-4" }, [
                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Пароль"),
                              createVNode(VTextField, {
                                modelValue: unref(newUser).password,
                                "onUpdate:modelValue": ($event) => unref(newUser).password = $event,
                                type: "password",
                                placeholder: "••••••••",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mb-4" }, [
                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "VK ID"),
                              createVNode(VTextField, {
                                modelValue: unref(newUser).vk,
                                "onUpdate:modelValue": ($event) => unref(newUser).vk = $event,
                                placeholder: "123456789",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "d-flex ga-2 mt-2" }, [
                              createVNode(VBtn, {
                                type: "submit",
                                color: "green-darken-3",
                                variant: "flat",
                                loading: unref(saving),
                                style: { "border-radius": "8px" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Создать ")
                                ]),
                                _: 1
                              }, 8, ["loading"]),
                              createVNode(VBtn, {
                                variant: "text",
                                color: "grey-darken-2",
                                onClick: ($event) => showCreateDialog.value = false
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Отмена ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { style: { "border-radius": "12px" } }, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                    default: withCtx(() => [
                      createVNode("h2", {
                        class: "text-h6 font-weight-bold",
                        style: { "color": "#020617" }
                      }, "Создание пользователя")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "pa-6 pt-2" }, {
                    default: withCtx(() => [
                      createVNode(VForm, {
                        onSubmit: withModifiers(createUser, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                            createVNode(VTextField, {
                              modelValue: unref(newUser).name,
                              "onUpdate:modelValue": ($event) => unref(newUser).name = $event,
                              placeholder: "Имя пользователя",
                              variant: "outlined",
                              density: "compact",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                            createVNode(VTextField, {
                              modelValue: unref(newUser).email,
                              "onUpdate:modelValue": ($event) => unref(newUser).email = $event,
                              type: "email",
                              placeholder: "email@example.com",
                              variant: "outlined",
                              density: "compact",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Пароль"),
                            createVNode(VTextField, {
                              modelValue: unref(newUser).password,
                              "onUpdate:modelValue": ($event) => unref(newUser).password = $event,
                              type: "password",
                              placeholder: "••••••••",
                              variant: "outlined",
                              density: "compact",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "VK ID"),
                            createVNode(VTextField, {
                              modelValue: unref(newUser).vk,
                              "onUpdate:modelValue": ($event) => unref(newUser).vk = $event,
                              placeholder: "123456789",
                              variant: "outlined",
                              density: "compact",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "d-flex ga-2 mt-2" }, [
                            createVNode(VBtn, {
                              type: "submit",
                              color: "green-darken-3",
                              variant: "flat",
                              loading: unref(saving),
                              style: { "border-radius": "8px" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Создать ")
                              ]),
                              _: 1
                            }, 8, ["loading"]),
                            createVNode(VBtn, {
                              variant: "text",
                              color: "grey-darken-2",
                              onClick: ($event) => showCreateDialog.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Отмена ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/users/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f9dba961"]]);

export { index as default };
//# sourceMappingURL=index-ClMf_w5Z.mjs.map
