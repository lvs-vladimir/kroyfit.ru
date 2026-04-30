import { defineComponent, ref, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-CsgbRhqC.mjs';
import { V as VApp, a as VMain } from './VMain-_oYNW9Kv.mjs';
import { V as VAppBar, a as VContainer } from './VAppBar-Drwdp8qS.mjs';
import { V as VSpacer } from './VSpacer-B2jXCgcb.mjs';
import { V as VBtn } from './VBtn-p5cu1pGV.mjs';
import { V as VRow, a as VCol } from './VRow-CwXPvlwe.mjs';
import { V as VDivider } from './VDivider-Batqhoho.mjs';
import { V as VCard, b as VCardText, c as VCardActions } from './VCard-DZcCz6yh.mjs';
import { V as VIcon } from './index-C1EJcibQ.mjs';
import { a as VImg } from './VAvatar-DVIor7ga.mjs';
import { V as VChip } from './VChip-nD7Rsxz9.mjs';
import { V as VList, a as VListItem, c as VListItemTitle } from './VList-B7WBdDJv.mjs';
import { V as VFooter } from './VFooter-9te_s92V.mjs';
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
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './ssrBoot-ZQn7gOuX.mjs';
import './position-D2_Ao4AV.mjs';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const siteName = ref("Генетика Кроя");
    const courses = ref([]);
    ref({ title: "", description: "" });
    const hoveredCourse = ref(null);
    const problems = [
      { icon: "mdi-alert-circle-outline", title: "Выкройки не садятся", color: "error" },
      { icon: "mdi-repeat", title: "Много примерок", color: "warning" },
      { icon: "mdi-puzzle-outline", title: "Сложно разобраться", color: "info" },
      { icon: "mdi-image-broken-variant", title: "Не как на картинке", color: "secondary" }
    ];
    const results = [
      { icon: "mdi-hanger", title: "Гардероб", desc: "Шьют для себя и семьи" },
      { icon: "mdi-store", title: "Ателье", desc: "Открывают свои мастерские" },
      { icon: "mdi-briefcase", title: "Карьера", desc: "Работают конструкторами" },
      { icon: "mdi-trending-up", title: "Доход", desc: "Принимают заказы" }
    ];
    useSeoMeta({
      title: "{{ siteName }} — Курсы кройки и шитья в Барнауле",
      description: "Курсы кройки и шитья в Барнауле. Методика точного кроя по Злачевской. С 2014 года."
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAppBar, {
              color: "white",
              elevation: "0",
              class: "border-b"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, { class: "d-flex align-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-h6 font-weight-bold" style="${ssrRenderStyle({ "color": "#6366F1" })}" data-v-8e554a82${_scopeId3}> ✂️ ${ssrInterpolate(unref(siteName))}</div>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "text",
                          href: "#courses",
                          class: "text-body-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Курсы`);
                            } else {
                              return [
                                createTextVNode("Курсы")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "text",
                          href: "#about",
                          class: "text-body-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`О нас`);
                            } else {
                              return [
                                createTextVNode("О нас")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "text",
                          href: "#contacts",
                          class: "text-body-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Контакты`);
                            } else {
                              return [
                                createTextVNode("Контакты")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          variant: "flat",
                          href: "tel:89132101662",
                          class: "ml-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Позвонить `);
                            } else {
                              return [
                                createTextVNode(" Позвонить ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", {
                            class: "text-h6 font-weight-bold",
                            style: { "color": "#6366F1" }
                          }, " ✂️ " + toDisplayString(unref(siteName)), 1),
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            variant: "text",
                            href: "#courses",
                            class: "text-body-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Курсы")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            variant: "text",
                            href: "#about",
                            class: "text-body-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("О нас")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            variant: "text",
                            href: "#contacts",
                            class: "text-body-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Контакты")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "primary",
                            variant: "flat",
                            href: "tel:89132101662",
                            class: "ml-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Позвонить ")
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
                    createVNode(VContainer, { class: "d-flex align-center" }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "text-h6 font-weight-bold",
                          style: { "color": "#6366F1" }
                        }, " ✂️ " + toDisplayString(unref(siteName)), 1),
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          variant: "text",
                          href: "#courses",
                          class: "text-body-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Курсы")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          variant: "text",
                          href: "#about",
                          class: "text-body-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("О нас")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          variant: "text",
                          href: "#contacts",
                          class: "text-body-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Контакты")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "primary",
                          variant: "flat",
                          href: "tel:89132101662",
                          class: "ml-4"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Позвонить ")
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
            _push2(ssrRenderComponent(VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<section class="hero-section py-20" data-v-8e554a82${_scopeId2}>`);
                  _push3(ssrRenderComponent(VContainer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, {
                          align: "center",
                          justify: "center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "8",
                                class: "text-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="mb-6" data-v-8e554a82${_scopeId5}><h1 class="text-h2 font-weight-800 mb-4 gradient-text" data-v-8e554a82${_scopeId5}> Шейте одежду<br data-v-8e554a82${_scopeId5}>как вторая кожа </h1></div><p class="text-h6 text-medium-emphasis mb-8" style="${ssrRenderStyle({ "max-width": "600px", "margin": "0 auto", "line-height": "1.6" })}" data-v-8e554a82${_scopeId5}> Методика точного кроя по Злачевской. Научим вы создавать идеальную посадку без примерок и подгонок. </p><div id="vk-login-container" class="mb-8" data-v-8e554a82${_scopeId5}></div><div class="d-flex flex-wrap justify-center ga-4 mb-12" data-v-8e554a82${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "primary",
                                      size: "x-large",
                                      href: "#courses",
                                      class: "px-8",
                                      style: { "border-radius": "12px", "font-weight": "600" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Выбрать курс `);
                                        } else {
                                          return [
                                            createTextVNode(" Выбрать курс ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      variant: "outlined",
                                      size: "x-large",
                                      href: "https://vk.com/write-53091601",
                                      target: "_blank",
                                      class: "px-8",
                                      style: { "border-radius": "12px", "font-weight": "600" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Написать в VK `);
                                        } else {
                                          return [
                                            createTextVNode(" Написать в VK ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(VRow, {
                                      justify: "center",
                                      class: "mt-12"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "auto",
                                            class: "text-center"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="text-h4 font-weight-800" style="${ssrRenderStyle({ "color": "#6366F1" })}" data-v-8e554a82${_scopeId7}>12+</div><p class="text-body-2 text-medium-emphasis" data-v-8e554a82${_scopeId7}>лет опыта</p>`);
                                              } else {
                                                return [
                                                  createVNode("div", {
                                                    class: "text-h4 font-weight-800",
                                                    style: { "color": "#6366F1" }
                                                  }, "12+"),
                                                  createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "лет опыта")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VDivider, {
                                            vertical: "",
                                            class: "mx-8"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "auto",
                                            class: "text-center"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="text-h4 font-weight-800" style="${ssrRenderStyle({ "color": "#EC4899" })}" data-v-8e554a82${_scopeId7}>500+</div><p class="text-body-2 text-medium-emphasis" data-v-8e554a82${_scopeId7}>выпускниц</p>`);
                                              } else {
                                                return [
                                                  createVNode("div", {
                                                    class: "text-h4 font-weight-800",
                                                    style: { "color": "#EC4899" }
                                                  }, "500+"),
                                                  createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "выпускниц")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VDivider, {
                                            vertical: "",
                                            class: "mx-8"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "auto",
                                            class: "text-center"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="text-h4 font-weight-800" style="${ssrRenderStyle({ "color": "#06B6D4" })}" data-v-8e554a82${_scopeId7}>5.0★</div><p class="text-body-2 text-medium-emphasis" data-v-8e554a82${_scopeId7}>рейтинг</p>`);
                                              } else {
                                                return [
                                                  createVNode("div", {
                                                    class: "text-h4 font-weight-800",
                                                    style: { "color": "#06B6D4" }
                                                  }, "5.0★"),
                                                  createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "рейтинг")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "auto",
                                              class: "text-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", {
                                                  class: "text-h4 font-weight-800",
                                                  style: { "color": "#6366F1" }
                                                }, "12+"),
                                                createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "лет опыта")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VDivider, {
                                              vertical: "",
                                              class: "mx-8"
                                            }),
                                            createVNode(VCol, {
                                              cols: "auto",
                                              class: "text-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", {
                                                  class: "text-h4 font-weight-800",
                                                  style: { "color": "#EC4899" }
                                                }, "500+"),
                                                createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "выпускниц")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VDivider, {
                                              vertical: "",
                                              class: "mx-8"
                                            }),
                                            createVNode(VCol, {
                                              cols: "auto",
                                              class: "text-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", {
                                                  class: "text-h4 font-weight-800",
                                                  style: { "color": "#06B6D4" }
                                                }, "5.0★"),
                                                createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "рейтинг")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "mb-6" }, [
                                        createVNode("h1", { class: "text-h2 font-weight-800 mb-4 gradient-text" }, [
                                          createTextVNode(" Шейте одежду"),
                                          createVNode("br"),
                                          createTextVNode("как вторая кожа ")
                                        ])
                                      ]),
                                      createVNode("p", {
                                        class: "text-h6 text-medium-emphasis mb-8",
                                        style: { "max-width": "600px", "margin": "0 auto", "line-height": "1.6" }
                                      }, " Методика точного кроя по Злачевской. Научим вы создавать идеальную посадку без примерок и подгонок. "),
                                      createVNode("div", {
                                        id: "vk-login-container",
                                        class: "mb-8"
                                      }),
                                      createVNode("div", { class: "d-flex flex-wrap justify-center ga-4 mb-12" }, [
                                        createVNode(VBtn, {
                                          color: "primary",
                                          size: "x-large",
                                          href: "#courses",
                                          class: "px-8",
                                          style: { "border-radius": "12px", "font-weight": "600" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Выбрать курс ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          variant: "outlined",
                                          size: "x-large",
                                          href: "https://vk.com/write-53091601",
                                          target: "_blank",
                                          class: "px-8",
                                          style: { "border-radius": "12px", "font-weight": "600" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Написать в VK ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode(VRow, {
                                        justify: "center",
                                        class: "mt-12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "auto",
                                            class: "text-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", {
                                                class: "text-h4 font-weight-800",
                                                style: { "color": "#6366F1" }
                                              }, "12+"),
                                              createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "лет опыта")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VDivider, {
                                            vertical: "",
                                            class: "mx-8"
                                          }),
                                          createVNode(VCol, {
                                            cols: "auto",
                                            class: "text-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", {
                                                class: "text-h4 font-weight-800",
                                                style: { "color": "#EC4899" }
                                              }, "500+"),
                                              createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "выпускниц")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VDivider, {
                                            vertical: "",
                                            class: "mx-8"
                                          }),
                                          createVNode(VCol, {
                                            cols: "auto",
                                            class: "text-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", {
                                                class: "text-h4 font-weight-800",
                                                style: { "color": "#06B6D4" }
                                              }, "5.0★"),
                                              createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "рейтинг")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "8",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mb-6" }, [
                                      createVNode("h1", { class: "text-h2 font-weight-800 mb-4 gradient-text" }, [
                                        createTextVNode(" Шейте одежду"),
                                        createVNode("br"),
                                        createTextVNode("как вторая кожа ")
                                      ])
                                    ]),
                                    createVNode("p", {
                                      class: "text-h6 text-medium-emphasis mb-8",
                                      style: { "max-width": "600px", "margin": "0 auto", "line-height": "1.6" }
                                    }, " Методика точного кроя по Злачевской. Научим вы создавать идеальную посадку без примерок и подгонок. "),
                                    createVNode("div", {
                                      id: "vk-login-container",
                                      class: "mb-8"
                                    }),
                                    createVNode("div", { class: "d-flex flex-wrap justify-center ga-4 mb-12" }, [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        size: "x-large",
                                        href: "#courses",
                                        class: "px-8",
                                        style: { "border-radius": "12px", "font-weight": "600" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Выбрать курс ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        variant: "outlined",
                                        size: "x-large",
                                        href: "https://vk.com/write-53091601",
                                        target: "_blank",
                                        class: "px-8",
                                        style: { "border-radius": "12px", "font-weight": "600" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Написать в VK ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode(VRow, {
                                      justify: "center",
                                      class: "mt-12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "auto",
                                          class: "text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              class: "text-h4 font-weight-800",
                                              style: { "color": "#6366F1" }
                                            }, "12+"),
                                            createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "лет опыта")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VDivider, {
                                          vertical: "",
                                          class: "mx-8"
                                        }),
                                        createVNode(VCol, {
                                          cols: "auto",
                                          class: "text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              class: "text-h4 font-weight-800",
                                              style: { "color": "#EC4899" }
                                            }, "500+"),
                                            createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "выпускниц")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VDivider, {
                                          vertical: "",
                                          class: "mx-8"
                                        }),
                                        createVNode(VCol, {
                                          cols: "auto",
                                          class: "text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              class: "text-h4 font-weight-800",
                                              style: { "color": "#06B6D4" }
                                            }, "5.0★"),
                                            createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "рейтинг")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, {
                            align: "center",
                            justify: "center"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "8",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mb-6" }, [
                                    createVNode("h1", { class: "text-h2 font-weight-800 mb-4 gradient-text" }, [
                                      createTextVNode(" Шейте одежду"),
                                      createVNode("br"),
                                      createTextVNode("как вторая кожа ")
                                    ])
                                  ]),
                                  createVNode("p", {
                                    class: "text-h6 text-medium-emphasis mb-8",
                                    style: { "max-width": "600px", "margin": "0 auto", "line-height": "1.6" }
                                  }, " Методика точного кроя по Злачевской. Научим вы создавать идеальную посадку без примерок и подгонок. "),
                                  createVNode("div", {
                                    id: "vk-login-container",
                                    class: "mb-8"
                                  }),
                                  createVNode("div", { class: "d-flex flex-wrap justify-center ga-4 mb-12" }, [
                                    createVNode(VBtn, {
                                      color: "primary",
                                      size: "x-large",
                                      href: "#courses",
                                      class: "px-8",
                                      style: { "border-radius": "12px", "font-weight": "600" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Выбрать курс ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      variant: "outlined",
                                      size: "x-large",
                                      href: "https://vk.com/write-53091601",
                                      target: "_blank",
                                      class: "px-8",
                                      style: { "border-radius": "12px", "font-weight": "600" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Написать в VK ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode(VRow, {
                                    justify: "center",
                                    class: "mt-12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "auto",
                                        class: "text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: "text-h4 font-weight-800",
                                            style: { "color": "#6366F1" }
                                          }, "12+"),
                                          createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "лет опыта")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, {
                                        vertical: "",
                                        class: "mx-8"
                                      }),
                                      createVNode(VCol, {
                                        cols: "auto",
                                        class: "text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: "text-h4 font-weight-800",
                                            style: { "color": "#EC4899" }
                                          }, "500+"),
                                          createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "выпускниц")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, {
                                        vertical: "",
                                        class: "mx-8"
                                      }),
                                      createVNode(VCol, {
                                        cols: "auto",
                                        class: "text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: "text-h4 font-weight-800",
                                            style: { "color": "#06B6D4" }
                                          }, "5.0★"),
                                          createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "рейтинг")
                                        ]),
                                        _: 1
                                      })
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
                  }, _parent3, _scopeId2));
                  _push3(`</section><section class="py-20" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)" })}" data-v-8e554a82${_scopeId2}>`);
                  _push3(ssrRenderComponent(VContainer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-h3 font-weight-800 text-center mb-12 gradient-title" data-v-8e554a82${_scopeId3}> Знакомые проблемы? </h2>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(problems, (problem, i) => {
                                _push5(ssrRenderComponent(VCol, {
                                  key: i,
                                  cols: "12",
                                  sm: "6",
                                  md: "3"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCard, {
                                        class: "pa-6 h-100 glass-card",
                                        elevation: "0"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, {
                                              size: "48",
                                              color: problem.color,
                                              class: "mb-4"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(problem.icon)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(problem.icon), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<p class="text-body-1 font-weight-600" data-v-8e554a82${_scopeId6}>${ssrInterpolate(problem.title)}</p>`);
                                          } else {
                                            return [
                                              createVNode(VIcon, {
                                                size: "48",
                                                color: problem.color,
                                                class: "mb-4"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(problem.icon), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"]),
                                              createVNode("p", { class: "text-body-1 font-weight-600" }, toDisplayString(problem.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCard, {
                                          class: "pa-6 h-100 glass-card",
                                          elevation: "0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              size: "48",
                                              color: problem.color,
                                              class: "mb-4"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(problem.icon), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"]),
                                            createVNode("p", { class: "text-body-1 font-weight-600" }, toDisplayString(problem.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(problems, (problem, i) => {
                                  return createVNode(VCol, {
                                    key: i,
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        class: "pa-6 h-100 glass-card",
                                        elevation: "0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            size: "48",
                                            color: problem.color,
                                            class: "mb-4"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(problem.icon), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"]),
                                          createVNode("p", { class: "text-body-1 font-weight-600" }, toDisplayString(problem.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h2", { class: "text-h3 font-weight-800 text-center mb-12 gradient-title" }, " Знакомые проблемы? "),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(problems, (problem, i) => {
                                return createVNode(VCol, {
                                  key: i,
                                  cols: "12",
                                  sm: "6",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      class: "pa-6 h-100 glass-card",
                                      elevation: "0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          size: "48",
                                          color: problem.color,
                                          class: "mb-4"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(problem.icon), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]),
                                        createVNode("p", { class: "text-body-1 font-weight-600" }, toDisplayString(problem.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</section><section id="courses" class="py-20" data-v-8e554a82${_scopeId2}>`);
                  _push3(ssrRenderComponent(VContainer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-h3 font-weight-800 text-center mb-12 gradient-title" data-v-8e554a82${_scopeId3}> Наши курсы </h2>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(courses), (course) => {
                                _push5(ssrRenderComponent(VCol, {
                                  key: course.id,
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCard, {
                                        class: "h-100 course-card",
                                        elevation: "0",
                                        onMouseenter: ($event) => hoveredCourse.value = course.id,
                                        onMouseleave: ($event) => hoveredCourse.value = null
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="course-image-wrapper" data-v-8e554a82${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VImg, {
                                              src: course.image,
                                              height: "240",
                                              cover: "",
                                              class: "course-image"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<div class="course-overlay" data-v-8e554a82${_scopeId6}></div>`);
                                            _push7(ssrRenderComponent(VChip, {
                                              color: course.color,
                                              "text-color": "white",
                                              class: "ma-4 chip-badge"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(course.category)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(course.category), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                            _push7(ssrRenderComponent(VCardText, { class: "pa-6" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<h3 class="text-h6 font-weight-800 mb-3" data-v-8e554a82${_scopeId7}>${ssrInterpolate(course.title)}</h3><p class="text-body-2 text-medium-emphasis mb-6 line-clamp-2" data-v-8e554a82${_scopeId7}>${ssrInterpolate(course.description)}</p><div class="mb-6" data-v-8e554a82${_scopeId7}><div class="d-flex align-center mb-2" data-v-8e554a82${_scopeId7}>`);
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    size: "18",
                                                    color: "primary",
                                                    class: "mr-2"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`mdi-clock-outline`);
                                                      } else {
                                                        return [
                                                          createTextVNode("mdi-clock-outline")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(`<span class="text-caption" data-v-8e554a82${_scopeId7}>${ssrInterpolate(course.duration)}</span></div><div class="d-flex align-center" data-v-8e554a82${_scopeId7}>`);
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    size: "18",
                                                    color: "primary",
                                                    class: "mr-2"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`mdi-book-outline`);
                                                      } else {
                                                        return [
                                                          createTextVNode("mdi-book-outline")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(`<span class="text-caption" data-v-8e554a82${_scopeId7}>${ssrInterpolate(course.lessonsCount)} уроков</span></div></div>`);
                                                } else {
                                                  return [
                                                    createVNode("h3", { class: "text-h6 font-weight-800 mb-3" }, toDisplayString(course.title), 1),
                                                    createVNode("p", { class: "text-body-2 text-medium-emphasis mb-6 line-clamp-2" }, toDisplayString(course.description), 1),
                                                    createVNode("div", { class: "mb-6" }, [
                                                      createVNode("div", { class: "d-flex align-center mb-2" }, [
                                                        createVNode(VIcon, {
                                                          size: "18",
                                                          color: "primary",
                                                          class: "mr-2"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-clock-outline")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode("span", { class: "text-caption" }, toDisplayString(course.duration), 1)
                                                      ]),
                                                      createVNode("div", { class: "d-flex align-center" }, [
                                                        createVNode(VIcon, {
                                                          size: "18",
                                                          color: "primary",
                                                          class: "mr-2"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-book-outline")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode("span", { class: "text-caption" }, toDisplayString(course.lessonsCount) + " уроков", 1)
                                                      ])
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VDivider, null, null, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VCardActions, { class: "pa-6 d-flex justify-space-between align-center" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="text-h6 font-weight-800 price-text" data-v-8e554a82${_scopeId7}>${ssrInterpolate(course.priceDisplay)}</span>`);
                                                  _push8(ssrRenderComponent(VBtn, {
                                                    icon: "",
                                                    size: "small",
                                                    color: "primary",
                                                    onClick: ($event) => _ctx.$router.push(`/courses/${course.slug}`)
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VIcon, null, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`mdi-arrow-right`);
                                                            } else {
                                                              return [
                                                                createTextVNode("mdi-arrow-right")
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VIcon, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode("mdi-arrow-right")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode("span", { class: "text-h6 font-weight-800 price-text" }, toDisplayString(course.priceDisplay), 1),
                                                    createVNode(VBtn, {
                                                      icon: "",
                                                      size: "small",
                                                      color: "primary",
                                                      onClick: ($event) => _ctx.$router.push(`/courses/${course.slug}`)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-arrow-right")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }, 8, ["onClick"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode("div", { class: "course-image-wrapper" }, [
                                                createVNode(VImg, {
                                                  src: course.image,
                                                  height: "240",
                                                  cover: "",
                                                  class: "course-image"
                                                }, null, 8, ["src"]),
                                                createVNode("div", { class: "course-overlay" }),
                                                createVNode(VChip, {
                                                  color: course.color,
                                                  "text-color": "white",
                                                  class: "ma-4 chip-badge"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(course.category), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"])
                                              ]),
                                              createVNode(VCardText, { class: "pa-6" }, {
                                                default: withCtx(() => [
                                                  createVNode("h3", { class: "text-h6 font-weight-800 mb-3" }, toDisplayString(course.title), 1),
                                                  createVNode("p", { class: "text-body-2 text-medium-emphasis mb-6 line-clamp-2" }, toDisplayString(course.description), 1),
                                                  createVNode("div", { class: "mb-6" }, [
                                                    createVNode("div", { class: "d-flex align-center mb-2" }, [
                                                      createVNode(VIcon, {
                                                        size: "18",
                                                        color: "primary",
                                                        class: "mr-2"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-clock-outline")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode("span", { class: "text-caption" }, toDisplayString(course.duration), 1)
                                                    ]),
                                                    createVNode("div", { class: "d-flex align-center" }, [
                                                      createVNode(VIcon, {
                                                        size: "18",
                                                        color: "primary",
                                                        class: "mr-2"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-book-outline")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode("span", { class: "text-caption" }, toDisplayString(course.lessonsCount) + " уроков", 1)
                                                    ])
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VDivider),
                                              createVNode(VCardActions, { class: "pa-6 d-flex justify-space-between align-center" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "text-h6 font-weight-800 price-text" }, toDisplayString(course.priceDisplay), 1),
                                                  createVNode(VBtn, {
                                                    icon: "",
                                                    size: "small",
                                                    color: "primary",
                                                    onClick: ($event) => _ctx.$router.push(`/courses/${course.slug}`)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-arrow-right")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCard, {
                                          class: "h-100 course-card",
                                          elevation: "0",
                                          onMouseenter: ($event) => hoveredCourse.value = course.id,
                                          onMouseleave: ($event) => hoveredCourse.value = null
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "course-image-wrapper" }, [
                                              createVNode(VImg, {
                                                src: course.image,
                                                height: "240",
                                                cover: "",
                                                class: "course-image"
                                              }, null, 8, ["src"]),
                                              createVNode("div", { class: "course-overlay" }),
                                              createVNode(VChip, {
                                                color: course.color,
                                                "text-color": "white",
                                                class: "ma-4 chip-badge"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(course.category), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"])
                                            ]),
                                            createVNode(VCardText, { class: "pa-6" }, {
                                              default: withCtx(() => [
                                                createVNode("h3", { class: "text-h6 font-weight-800 mb-3" }, toDisplayString(course.title), 1),
                                                createVNode("p", { class: "text-body-2 text-medium-emphasis mb-6 line-clamp-2" }, toDisplayString(course.description), 1),
                                                createVNode("div", { class: "mb-6" }, [
                                                  createVNode("div", { class: "d-flex align-center mb-2" }, [
                                                    createVNode(VIcon, {
                                                      size: "18",
                                                      color: "primary",
                                                      class: "mr-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-clock-outline")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode("span", { class: "text-caption" }, toDisplayString(course.duration), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex align-center" }, [
                                                    createVNode(VIcon, {
                                                      size: "18",
                                                      color: "primary",
                                                      class: "mr-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-book-outline")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode("span", { class: "text-caption" }, toDisplayString(course.lessonsCount) + " уроков", 1)
                                                  ])
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VDivider),
                                            createVNode(VCardActions, { class: "pa-6 d-flex justify-space-between align-center" }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "text-h6 font-weight-800 price-text" }, toDisplayString(course.priceDisplay), 1),
                                                createVNode(VBtn, {
                                                  icon: "",
                                                  size: "small",
                                                  color: "primary",
                                                  onClick: ($event) => _ctx.$router.push(`/courses/${course.slug}`)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-arrow-right")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["onMouseenter", "onMouseleave"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(courses), (course) => {
                                  return openBlock(), createBlock(VCol, {
                                    key: course.id,
                                    cols: "12",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        class: "h-100 course-card",
                                        elevation: "0",
                                        onMouseenter: ($event) => hoveredCourse.value = course.id,
                                        onMouseleave: ($event) => hoveredCourse.value = null
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "course-image-wrapper" }, [
                                            createVNode(VImg, {
                                              src: course.image,
                                              height: "240",
                                              cover: "",
                                              class: "course-image"
                                            }, null, 8, ["src"]),
                                            createVNode("div", { class: "course-overlay" }),
                                            createVNode(VChip, {
                                              color: course.color,
                                              "text-color": "white",
                                              class: "ma-4 chip-badge"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(course.category), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ]),
                                          createVNode(VCardText, { class: "pa-6" }, {
                                            default: withCtx(() => [
                                              createVNode("h3", { class: "text-h6 font-weight-800 mb-3" }, toDisplayString(course.title), 1),
                                              createVNode("p", { class: "text-body-2 text-medium-emphasis mb-6 line-clamp-2" }, toDisplayString(course.description), 1),
                                              createVNode("div", { class: "mb-6" }, [
                                                createVNode("div", { class: "d-flex align-center mb-2" }, [
                                                  createVNode(VIcon, {
                                                    size: "18",
                                                    color: "primary",
                                                    class: "mr-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-clock-outline")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("span", { class: "text-caption" }, toDisplayString(course.duration), 1)
                                                ]),
                                                createVNode("div", { class: "d-flex align-center" }, [
                                                  createVNode(VIcon, {
                                                    size: "18",
                                                    color: "primary",
                                                    class: "mr-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-book-outline")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("span", { class: "text-caption" }, toDisplayString(course.lessonsCount) + " уроков", 1)
                                                ])
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VDivider),
                                          createVNode(VCardActions, { class: "pa-6 d-flex justify-space-between align-center" }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "text-h6 font-weight-800 price-text" }, toDisplayString(course.priceDisplay), 1),
                                              createVNode(VBtn, {
                                                icon: "",
                                                size: "small",
                                                color: "primary",
                                                onClick: ($event) => _ctx.$router.push(`/courses/${course.slug}`)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-arrow-right")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["onMouseenter", "onMouseleave"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h2", { class: "text-h3 font-weight-800 text-center mb-12 gradient-title" }, " Наши курсы "),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(courses), (course) => {
                                return openBlock(), createBlock(VCol, {
                                  key: course.id,
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      class: "h-100 course-card",
                                      elevation: "0",
                                      onMouseenter: ($event) => hoveredCourse.value = course.id,
                                      onMouseleave: ($event) => hoveredCourse.value = null
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "course-image-wrapper" }, [
                                          createVNode(VImg, {
                                            src: course.image,
                                            height: "240",
                                            cover: "",
                                            class: "course-image"
                                          }, null, 8, ["src"]),
                                          createVNode("div", { class: "course-overlay" }),
                                          createVNode(VChip, {
                                            color: course.color,
                                            "text-color": "white",
                                            class: "ma-4 chip-badge"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(course.category), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])
                                        ]),
                                        createVNode(VCardText, { class: "pa-6" }, {
                                          default: withCtx(() => [
                                            createVNode("h3", { class: "text-h6 font-weight-800 mb-3" }, toDisplayString(course.title), 1),
                                            createVNode("p", { class: "text-body-2 text-medium-emphasis mb-6 line-clamp-2" }, toDisplayString(course.description), 1),
                                            createVNode("div", { class: "mb-6" }, [
                                              createVNode("div", { class: "d-flex align-center mb-2" }, [
                                                createVNode(VIcon, {
                                                  size: "18",
                                                  color: "primary",
                                                  class: "mr-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-clock-outline")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("span", { class: "text-caption" }, toDisplayString(course.duration), 1)
                                              ]),
                                              createVNode("div", { class: "d-flex align-center" }, [
                                                createVNode(VIcon, {
                                                  size: "18",
                                                  color: "primary",
                                                  class: "mr-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-book-outline")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("span", { class: "text-caption" }, toDisplayString(course.lessonsCount) + " уроков", 1)
                                              ])
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VDivider),
                                        createVNode(VCardActions, { class: "pa-6 d-flex justify-space-between align-center" }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "text-h6 font-weight-800 price-text" }, toDisplayString(course.priceDisplay), 1),
                                            createVNode(VBtn, {
                                              icon: "",
                                              size: "small",
                                              color: "primary",
                                              onClick: ($event) => _ctx.$router.push(`/courses/${course.slug}`)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-arrow-right")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["onMouseenter", "onMouseleave"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</section><section class="py-20 gradient-bg-primary" data-v-8e554a82${_scopeId2}>`);
                  _push3(ssrRenderComponent(VContainer, { class: "text-white" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-h3 font-weight-800 text-center mb-12" data-v-8e554a82${_scopeId3}> Результаты наших учениц </h2>`);
                        _push4(ssrRenderComponent(VRow, { justify: "center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(results, (result) => {
                                _push5(ssrRenderComponent(VCol, {
                                  key: result.title,
                                  cols: "12",
                                  sm: "6",
                                  md: "3"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="text-center" data-v-8e554a82${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VIcon, {
                                        size: "64",
                                        class: "mb-4"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(result.icon)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(result.icon), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<p class="text-h6 font-weight-800 mb-2" data-v-8e554a82${_scopeId5}>${ssrInterpolate(result.title)}</p><p class="text-body-2 opacity-80" data-v-8e554a82${_scopeId5}>${ssrInterpolate(result.desc)}</p></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "text-center" }, [
                                          createVNode(VIcon, {
                                            size: "64",
                                            class: "mb-4"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(result.icon), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode("p", { class: "text-h6 font-weight-800 mb-2" }, toDisplayString(result.title), 1),
                                          createVNode("p", { class: "text-body-2 opacity-80" }, toDisplayString(result.desc), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(results, (result) => {
                                  return createVNode(VCol, {
                                    key: result.title,
                                    cols: "12",
                                    sm: "6",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-center" }, [
                                        createVNode(VIcon, {
                                          size: "64",
                                          class: "mb-4"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(result.icon), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode("p", { class: "text-h6 font-weight-800 mb-2" }, toDisplayString(result.title), 1),
                                        createVNode("p", { class: "text-body-2 opacity-80" }, toDisplayString(result.desc), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h2", { class: "text-h3 font-weight-800 text-center mb-12" }, " Результаты наших учениц "),
                          createVNode(VRow, { justify: "center" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(results, (result) => {
                                return createVNode(VCol, {
                                  key: result.title,
                                  cols: "12",
                                  sm: "6",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-center" }, [
                                      createVNode(VIcon, {
                                        size: "64",
                                        class: "mb-4"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(result.icon), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("p", { class: "text-h6 font-weight-800 mb-2" }, toDisplayString(result.title), 1),
                                      createVNode("p", { class: "text-body-2 opacity-80" }, toDisplayString(result.desc), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</section><section id="about" class="py-20" data-v-8e554a82${_scopeId2}>`);
                  _push3(ssrRenderComponent(VContainer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, {
                          align: "center",
                          justify: "center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "5",
                                class: "text-center mb-8 mb-md-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VImg, {
                                      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
                                      "aspect-ratio": "1",
                                      cover: "",
                                      rounded: "xl",
                                      class: "mx-auto shadow-lg",
                                      "max-width": "300"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VImg, {
                                        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
                                        "aspect-ratio": "1",
                                        cover: "",
                                        rounded: "xl",
                                        class: "mx-auto shadow-lg",
                                        "max-width": "300"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "7",
                                class: "pl-md-8"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h2 class="text-h3 font-weight-800 mb-4 gradient-title" data-v-8e554a82${_scopeId5}> Людмила Лукьянова </h2><p class="text-h6 text-medium-emphasis mb-6" data-v-8e554a82${_scopeId5}> Конструктор-модельер швейных изделий </p><p class="text-body-1 mb-6 line-height-lg" data-v-8e554a82${_scopeId5}> Мастер с полувековым опытом. Научу шить одежду сидящую как вторая кожа! Я умею множить радость✨ </p>`);
                                    _push6(ssrRenderComponent(VList, { class: "bg-transparent" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VListItem, { class: "px-0 mb-2" }, {
                                            prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VIcon, { color: "primary" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-check-circle`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-check-circle")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VIcon, { color: "primary" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-check-circle")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VListItemTitle, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`50+ лет опыта в швейном деле`);
                                                    } else {
                                                      return [
                                                        createTextVNode("50+ лет опыта в швейном деле")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("50+ лет опыта в швейном деле")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VListItem, { class: "px-0 mb-2" }, {
                                            prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VIcon, { color: "primary" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-check-circle`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-check-circle")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VIcon, { color: "primary" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-check-circle")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VListItemTitle, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Обучение с 2014 года`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Обучение с 2014 года")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Обучение с 2014 года")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VListItem, { class: "px-0" }, {
                                            prepend: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VIcon, { color: "primary" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-check-circle`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-check-circle")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VIcon, { color: "primary" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-check-circle")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VListItemTitle, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Авторская методика по Злачевской`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Авторская методика по Злачевской")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Авторская методика по Злачевской")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VListItem, { class: "px-0 mb-2" }, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, { color: "primary" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-check-circle")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("50+ лет опыта в швейном деле")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItem, { class: "px-0 mb-2" }, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, { color: "primary" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-check-circle")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Обучение с 2014 года")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItem, { class: "px-0" }, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, { color: "primary" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-check-circle")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Авторская методика по Злачевской")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("h2", { class: "text-h3 font-weight-800 mb-4 gradient-title" }, " Людмила Лукьянова "),
                                      createVNode("p", { class: "text-h6 text-medium-emphasis mb-6" }, " Конструктор-модельер швейных изделий "),
                                      createVNode("p", { class: "text-body-1 mb-6 line-height-lg" }, " Мастер с полувековым опытом. Научу шить одежду сидящую как вторая кожа! Я умею множить радость✨ "),
                                      createVNode(VList, { class: "bg-transparent" }, {
                                        default: withCtx(() => [
                                          createVNode(VListItem, { class: "px-0 mb-2" }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, { color: "primary" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-check-circle")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("50+ лет опыта в швейном деле")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItem, { class: "px-0 mb-2" }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, { color: "primary" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-check-circle")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Обучение с 2014 года")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItem, { class: "px-0" }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, { color: "primary" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-check-circle")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Авторская методика по Злачевской")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "5",
                                  class: "text-center mb-8 mb-md-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
                                      "aspect-ratio": "1",
                                      cover: "",
                                      rounded: "xl",
                                      class: "mx-auto shadow-lg",
                                      "max-width": "300"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "7",
                                  class: "pl-md-8"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h2", { class: "text-h3 font-weight-800 mb-4 gradient-title" }, " Людмила Лукьянова "),
                                    createVNode("p", { class: "text-h6 text-medium-emphasis mb-6" }, " Конструктор-модельер швейных изделий "),
                                    createVNode("p", { class: "text-body-1 mb-6 line-height-lg" }, " Мастер с полувековым опытом. Научу шить одежду сидящую как вторая кожа! Я умею множить радость✨ "),
                                    createVNode(VList, { class: "bg-transparent" }, {
                                      default: withCtx(() => [
                                        createVNode(VListItem, { class: "px-0 mb-2" }, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, { color: "primary" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-check-circle")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("50+ лет опыта в швейном деле")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, { class: "px-0 mb-2" }, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, { color: "primary" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-check-circle")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Обучение с 2014 года")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, { class: "px-0" }, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, { color: "primary" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-check-circle")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Авторская методика по Злачевской")
                                              ]),
                                              _: 1
                                            })
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, {
                            align: "center",
                            justify: "center"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "5",
                                class: "text-center mb-8 mb-md-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
                                    "aspect-ratio": "1",
                                    cover: "",
                                    rounded: "xl",
                                    class: "mx-auto shadow-lg",
                                    "max-width": "300"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "7",
                                class: "pl-md-8"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h2", { class: "text-h3 font-weight-800 mb-4 gradient-title" }, " Людмила Лукьянова "),
                                  createVNode("p", { class: "text-h6 text-medium-emphasis mb-6" }, " Конструктор-модельер швейных изделий "),
                                  createVNode("p", { class: "text-body-1 mb-6 line-height-lg" }, " Мастер с полувековым опытом. Научу шить одежду сидящую как вторая кожа! Я умею множить радость✨ "),
                                  createVNode(VList, { class: "bg-transparent" }, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, { class: "px-0 mb-2" }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { color: "primary" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-check-circle")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("50+ лет опыта в швейном деле")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, { class: "px-0 mb-2" }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { color: "primary" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-check-circle")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Обучение с 2014 года")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, { class: "px-0" }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { color: "primary" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-check-circle")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Авторская методика по Злачевской")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
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
                  }, _parent3, _scopeId2));
                  _push3(`</section><section class="py-20 gradient-bg-secondary" data-v-8e554a82${_scopeId2}>`);
                  _push3(ssrRenderComponent(VContainer, { class: "text-center text-white" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-h3 font-weight-800 mb-4" data-v-8e554a82${_scopeId3}> Начните обучение сегодня </h2><p class="text-h6 mb-8 opacity-90" data-v-8e554a82${_scopeId3}> Первый шаг к идеальной посадке одежды </p><div class="d-flex flex-wrap justify-center ga-4" data-v-8e554a82${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, {
                          color: "white",
                          size: "x-large",
                          href: "https://vk.com/write-53091601",
                          target: "_blank",
                          class: "text-primary px-8",
                          style: { "border-radius": "12px", "font-weight": "600" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Написать в VK `);
                            } else {
                              return [
                                createTextVNode(" Написать в VK ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "outlined",
                          color: "white",
                          size: "x-large",
                          href: "tel:89132101662",
                          class: "px-8",
                          style: { "border-radius": "12px", "font-weight": "600" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Позвонить: 8 913 210-16-62 `);
                            } else {
                              return [
                                createTextVNode(" Позвонить: 8 913 210-16-62 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("h2", { class: "text-h3 font-weight-800 mb-4" }, " Начните обучение сегодня "),
                          createVNode("p", { class: "text-h6 mb-8 opacity-90" }, " Первый шаг к идеальной посадке одежды "),
                          createVNode("div", { class: "d-flex flex-wrap justify-center ga-4" }, [
                            createVNode(VBtn, {
                              color: "white",
                              size: "x-large",
                              href: "https://vk.com/write-53091601",
                              target: "_blank",
                              class: "text-primary px-8",
                              style: { "border-radius": "12px", "font-weight": "600" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Написать в VK ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              variant: "outlined",
                              color: "white",
                              size: "x-large",
                              href: "tel:89132101662",
                              class: "px-8",
                              style: { "border-radius": "12px", "font-weight": "600" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Позвонить: 8 913 210-16-62 ")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</section><section id="contacts" class="py-20" style="${ssrRenderStyle({ "background": "#F8FAFC" })}" data-v-8e554a82${_scopeId2}>`);
                  _push3(ssrRenderComponent(VContainer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-h3 font-weight-800 text-center mb-12 gradient-title" data-v-8e554a82${_scopeId3}> Контакты </h2>`);
                        _push4(ssrRenderComponent(VRow, { justify: "center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "8"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCard, {
                                      class: "pa-8 contact-card",
                                      elevation: "0"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VRow, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<h3 class="text-h6 font-weight-800 mb-6" data-v-8e554a82${_scopeId8}>Свяжитесь с нами</h3>`);
                                                      _push9(ssrRenderComponent(VList, { class: "bg-transparent" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VListItem, { class: "px-0 mb-4" }, {
                                                              prepend: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VIcon, {
                                                                    color: "primary",
                                                                    size: "24"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(`mdi-phone`);
                                                                      } else {
                                                                        return [
                                                                          createTextVNode("mdi-phone")
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VIcon, {
                                                                      color: "primary",
                                                                      size: "24"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("mdi-phone")
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VListItemTitle, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(`<a href="tel:89132101662" class="text-decoration-none contact-link" data-v-8e554a82${_scopeId11}> 8 913 210-16-62 </a><br data-v-8e554a82${_scopeId11}><small class="text-medium-emphasis" data-v-8e554a82${_scopeId11}>Людмила</small>`);
                                                                      } else {
                                                                        return [
                                                                          createVNode("a", {
                                                                            href: "tel:89132101662",
                                                                            class: "text-decoration-none contact-link"
                                                                          }, " 8 913 210-16-62 "),
                                                                          createVNode("br"),
                                                                          createVNode("small", { class: "text-medium-emphasis" }, "Людмила")
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VListItemTitle, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode("a", {
                                                                          href: "tel:89132101662",
                                                                          class: "text-decoration-none contact-link"
                                                                        }, " 8 913 210-16-62 "),
                                                                        createVNode("br"),
                                                                        createVNode("small", { class: "text-medium-emphasis" }, "Людмила")
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VListItem, { class: "px-0 mb-4" }, {
                                                              prepend: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VIcon, {
                                                                    color: "primary",
                                                                    size: "24"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(`mdi-phone`);
                                                                      } else {
                                                                        return [
                                                                          createTextVNode("mdi-phone")
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VIcon, {
                                                                      color: "primary",
                                                                      size: "24"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("mdi-phone")
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VListItemTitle, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(`<a href="tel:89132790097" class="text-decoration-none contact-link" data-v-8e554a82${_scopeId11}> 8 913 279-00-97 </a><br data-v-8e554a82${_scopeId11}><small class="text-medium-emphasis" data-v-8e554a82${_scopeId11}>Юлия</small>`);
                                                                      } else {
                                                                        return [
                                                                          createVNode("a", {
                                                                            href: "tel:89132790097",
                                                                            class: "text-decoration-none contact-link"
                                                                          }, " 8 913 279-00-97 "),
                                                                          createVNode("br"),
                                                                          createVNode("small", { class: "text-medium-emphasis" }, "Юлия")
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VListItemTitle, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode("a", {
                                                                          href: "tel:89132790097",
                                                                          class: "text-decoration-none contact-link"
                                                                        }, " 8 913 279-00-97 "),
                                                                        createVNode("br"),
                                                                        createVNode("small", { class: "text-medium-emphasis" }, "Юлия")
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VListItem, { class: "px-0" }, {
                                                              prepend: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VIcon, {
                                                                    color: "primary",
                                                                    size: "24"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(`mdi-email`);
                                                                      } else {
                                                                        return [
                                                                          createTextVNode("mdi-email")
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VIcon, {
                                                                      color: "primary",
                                                                      size: "24"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("mdi-email")
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VListItemTitle, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(`<a href="mailto:missispip@mail.ru" class="text-decoration-none contact-link" data-v-8e554a82${_scopeId11}> missispip@mail.ru </a>`);
                                                                      } else {
                                                                        return [
                                                                          createVNode("a", {
                                                                            href: "mailto:missispip@mail.ru",
                                                                            class: "text-decoration-none contact-link"
                                                                          }, " missispip@mail.ru ")
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VListItemTitle, null, {
                                                                      default: withCtx(() => [
                                                                        createVNode("a", {
                                                                          href: "mailto:missispip@mail.ru",
                                                                          class: "text-decoration-none contact-link"
                                                                        }, " missispip@mail.ru ")
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                                prepend: withCtx(() => [
                                                                  createVNode(VIcon, {
                                                                    color: "primary",
                                                                    size: "24"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("mdi-phone")
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                default: withCtx(() => [
                                                                  createVNode(VListItemTitle, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode("a", {
                                                                        href: "tel:89132101662",
                                                                        class: "text-decoration-none contact-link"
                                                                      }, " 8 913 210-16-62 "),
                                                                      createVNode("br"),
                                                                      createVNode("small", { class: "text-medium-emphasis" }, "Людмила")
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                                prepend: withCtx(() => [
                                                                  createVNode(VIcon, {
                                                                    color: "primary",
                                                                    size: "24"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("mdi-phone")
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                default: withCtx(() => [
                                                                  createVNode(VListItemTitle, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode("a", {
                                                                        href: "tel:89132790097",
                                                                        class: "text-decoration-none contact-link"
                                                                      }, " 8 913 279-00-97 "),
                                                                      createVNode("br"),
                                                                      createVNode("small", { class: "text-medium-emphasis" }, "Юлия")
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VListItem, { class: "px-0" }, {
                                                                prepend: withCtx(() => [
                                                                  createVNode(VIcon, {
                                                                    color: "primary",
                                                                    size: "24"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("mdi-email")
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                default: withCtx(() => [
                                                                  createVNode(VListItemTitle, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode("a", {
                                                                        href: "mailto:missispip@mail.ru",
                                                                        class: "text-decoration-none contact-link"
                                                                      }, " missispip@mail.ru ")
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
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode("h3", { class: "text-h6 font-weight-800 mb-6" }, "Свяжитесь с нами"),
                                                        createVNode(VList, { class: "bg-transparent" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                              prepend: withCtx(() => [
                                                                createVNode(VIcon, {
                                                                  color: "primary",
                                                                  size: "24"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("mdi-phone")
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              default: withCtx(() => [
                                                                createVNode(VListItemTitle, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode("a", {
                                                                      href: "tel:89132101662",
                                                                      class: "text-decoration-none contact-link"
                                                                    }, " 8 913 210-16-62 "),
                                                                    createVNode("br"),
                                                                    createVNode("small", { class: "text-medium-emphasis" }, "Людмила")
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                              prepend: withCtx(() => [
                                                                createVNode(VIcon, {
                                                                  color: "primary",
                                                                  size: "24"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("mdi-phone")
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              default: withCtx(() => [
                                                                createVNode(VListItemTitle, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode("a", {
                                                                      href: "tel:89132790097",
                                                                      class: "text-decoration-none contact-link"
                                                                    }, " 8 913 279-00-97 "),
                                                                    createVNode("br"),
                                                                    createVNode("small", { class: "text-medium-emphasis" }, "Юлия")
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VListItem, { class: "px-0" }, {
                                                              prepend: withCtx(() => [
                                                                createVNode(VIcon, {
                                                                  color: "primary",
                                                                  size: "24"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("mdi-email")
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              default: withCtx(() => [
                                                                createVNode(VListItemTitle, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode("a", {
                                                                      href: "mailto:missispip@mail.ru",
                                                                      class: "text-decoration-none contact-link"
                                                                    }, " missispip@mail.ru ")
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
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<h3 class="text-h6 font-weight-800 mb-6" data-v-8e554a82${_scopeId8}>Адрес</h3>`);
                                                      _push9(ssrRenderComponent(VList, { class: "bg-transparent" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VListItem, { class: "px-0 mb-4" }, {
                                                              prepend: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VIcon, {
                                                                    color: "primary",
                                                                    size: "24"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(`mdi-map-marker`);
                                                                      } else {
                                                                        return [
                                                                          createTextVNode("mdi-map-marker")
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VIcon, {
                                                                      color: "primary",
                                                                      size: "24"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("mdi-map-marker")
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VListItemTitle, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(` ул. Профинтерна 7А<br data-v-8e554a82${_scopeId11}> Барнаул `);
                                                                      } else {
                                                                        return [
                                                                          createTextVNode(" ул. Профинтерна 7А"),
                                                                          createVNode("br"),
                                                                          createTextVNode(" Барнаул ")
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VListItemTitle, null, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(" ул. Профинтерна 7А"),
                                                                        createVNode("br"),
                                                                        createTextVNode(" Барнаул ")
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(VListItem, { class: "px-0" }, {
                                                              prepend: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VIcon, {
                                                                    color: "primary",
                                                                    size: "24"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(`mdi-clock`);
                                                                      } else {
                                                                        return [
                                                                          createTextVNode("mdi-clock")
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VIcon, {
                                                                      color: "primary",
                                                                      size: "24"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("mdi-clock")
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(VListItemTitle, null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(` Пн-Сб: 9:00 - 19:30 `);
                                                                      } else {
                                                                        return [
                                                                          createTextVNode(" Пн-Сб: 9:00 - 19:30 ")
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(VListItemTitle, null, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(" Пн-Сб: 9:00 - 19:30 ")
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                                prepend: withCtx(() => [
                                                                  createVNode(VIcon, {
                                                                    color: "primary",
                                                                    size: "24"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("mdi-map-marker")
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                default: withCtx(() => [
                                                                  createVNode(VListItemTitle, null, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" ул. Профинтерна 7А"),
                                                                      createVNode("br"),
                                                                      createTextVNode(" Барнаул ")
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(VListItem, { class: "px-0" }, {
                                                                prepend: withCtx(() => [
                                                                  createVNode(VIcon, {
                                                                    color: "primary",
                                                                    size: "24"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("mdi-clock")
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                default: withCtx(() => [
                                                                  createVNode(VListItemTitle, null, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" Пн-Сб: 9:00 - 19:30 ")
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
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VBtn, {
                                                        color: "primary",
                                                        variant: "tonal",
                                                        href: "https://vk.com/genetikakroya22",
                                                        target: "_blank",
                                                        class: "mt-4",
                                                        style: { "border-radius": "12px" }
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VIcon, { start: "" }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(`mdi-vk`);
                                                                } else {
                                                                  return [
                                                                    createTextVNode("mdi-vk")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(` Группа ВКонтакте `);
                                                          } else {
                                                            return [
                                                              createVNode(VIcon, { start: "" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("mdi-vk")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createTextVNode(" Группа ВКонтакте ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode("h3", { class: "text-h6 font-weight-800 mb-6" }, "Адрес"),
                                                        createVNode(VList, { class: "bg-transparent" }, {
                                                          default: withCtx(() => [
                                                            createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                              prepend: withCtx(() => [
                                                                createVNode(VIcon, {
                                                                  color: "primary",
                                                                  size: "24"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("mdi-map-marker")
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              default: withCtx(() => [
                                                                createVNode(VListItemTitle, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" ул. Профинтерна 7А"),
                                                                    createVNode("br"),
                                                                    createTextVNode(" Барнаул ")
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(VListItem, { class: "px-0" }, {
                                                              prepend: withCtx(() => [
                                                                createVNode(VIcon, {
                                                                  color: "primary",
                                                                  size: "24"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("mdi-clock")
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              default: withCtx(() => [
                                                                createVNode(VListItemTitle, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" Пн-Сб: 9:00 - 19:30 ")
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VBtn, {
                                                          color: "primary",
                                                          variant: "tonal",
                                                          href: "https://vk.com/genetikakroya22",
                                                          target: "_blank",
                                                          class: "mt-4",
                                                          style: { "border-radius": "12px" }
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VIcon, { start: "" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("mdi-vk")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createTextVNode(" Группа ВКонтакте ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    sm: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("h3", { class: "text-h6 font-weight-800 mb-6" }, "Свяжитесь с нами"),
                                                      createVNode(VList, { class: "bg-transparent" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                            prepend: withCtx(() => [
                                                              createVNode(VIcon, {
                                                                color: "primary",
                                                                size: "24"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("mdi-phone")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            default: withCtx(() => [
                                                              createVNode(VListItemTitle, null, {
                                                                default: withCtx(() => [
                                                                  createVNode("a", {
                                                                    href: "tel:89132101662",
                                                                    class: "text-decoration-none contact-link"
                                                                  }, " 8 913 210-16-62 "),
                                                                  createVNode("br"),
                                                                  createVNode("small", { class: "text-medium-emphasis" }, "Людмила")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                            prepend: withCtx(() => [
                                                              createVNode(VIcon, {
                                                                color: "primary",
                                                                size: "24"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("mdi-phone")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            default: withCtx(() => [
                                                              createVNode(VListItemTitle, null, {
                                                                default: withCtx(() => [
                                                                  createVNode("a", {
                                                                    href: "tel:89132790097",
                                                                    class: "text-decoration-none contact-link"
                                                                  }, " 8 913 279-00-97 "),
                                                                  createVNode("br"),
                                                                  createVNode("small", { class: "text-medium-emphasis" }, "Юлия")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VListItem, { class: "px-0" }, {
                                                            prepend: withCtx(() => [
                                                              createVNode(VIcon, {
                                                                color: "primary",
                                                                size: "24"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("mdi-email")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            default: withCtx(() => [
                                                              createVNode(VListItemTitle, null, {
                                                                default: withCtx(() => [
                                                                  createVNode("a", {
                                                                    href: "mailto:missispip@mail.ru",
                                                                    class: "text-decoration-none contact-link"
                                                                  }, " missispip@mail.ru ")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    sm: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("h3", { class: "text-h6 font-weight-800 mb-6" }, "Адрес"),
                                                      createVNode(VList, { class: "bg-transparent" }, {
                                                        default: withCtx(() => [
                                                          createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                            prepend: withCtx(() => [
                                                              createVNode(VIcon, {
                                                                color: "primary",
                                                                size: "24"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("mdi-map-marker")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            default: withCtx(() => [
                                                              createVNode(VListItemTitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" ул. Профинтерна 7А"),
                                                                  createVNode("br"),
                                                                  createTextVNode(" Барнаул ")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(VListItem, { class: "px-0" }, {
                                                            prepend: withCtx(() => [
                                                              createVNode(VIcon, {
                                                                color: "primary",
                                                                size: "24"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("mdi-clock")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            default: withCtx(() => [
                                                              createVNode(VListItemTitle, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Пн-Сб: 9:00 - 19:30 ")
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VBtn, {
                                                        color: "primary",
                                                        variant: "tonal",
                                                        href: "https://vk.com/genetikakroya22",
                                                        target: "_blank",
                                                        class: "mt-4",
                                                        style: { "border-radius": "12px" }
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VIcon, { start: "" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("mdi-vk")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createTextVNode(" Группа ВКонтакте ")
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
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("h3", { class: "text-h6 font-weight-800 mb-6" }, "Свяжитесь с нами"),
                                                    createVNode(VList, { class: "bg-transparent" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                          prepend: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              color: "primary",
                                                              size: "24"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("mdi-phone")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          default: withCtx(() => [
                                                            createVNode(VListItemTitle, null, {
                                                              default: withCtx(() => [
                                                                createVNode("a", {
                                                                  href: "tel:89132101662",
                                                                  class: "text-decoration-none contact-link"
                                                                }, " 8 913 210-16-62 "),
                                                                createVNode("br"),
                                                                createVNode("small", { class: "text-medium-emphasis" }, "Людмила")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                          prepend: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              color: "primary",
                                                              size: "24"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("mdi-phone")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          default: withCtx(() => [
                                                            createVNode(VListItemTitle, null, {
                                                              default: withCtx(() => [
                                                                createVNode("a", {
                                                                  href: "tel:89132790097",
                                                                  class: "text-decoration-none contact-link"
                                                                }, " 8 913 279-00-97 "),
                                                                createVNode("br"),
                                                                createVNode("small", { class: "text-medium-emphasis" }, "Юлия")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VListItem, { class: "px-0" }, {
                                                          prepend: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              color: "primary",
                                                              size: "24"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("mdi-email")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          default: withCtx(() => [
                                                            createVNode(VListItemTitle, null, {
                                                              default: withCtx(() => [
                                                                createVNode("a", {
                                                                  href: "mailto:missispip@mail.ru",
                                                                  class: "text-decoration-none contact-link"
                                                                }, " missispip@mail.ru ")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  sm: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("h3", { class: "text-h6 font-weight-800 mb-6" }, "Адрес"),
                                                    createVNode(VList, { class: "bg-transparent" }, {
                                                      default: withCtx(() => [
                                                        createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                          prepend: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              color: "primary",
                                                              size: "24"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("mdi-map-marker")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          default: withCtx(() => [
                                                            createVNode(VListItemTitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" ул. Профинтерна 7А"),
                                                                createVNode("br"),
                                                                createTextVNode(" Барнаул ")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VListItem, { class: "px-0" }, {
                                                          prepend: withCtx(() => [
                                                            createVNode(VIcon, {
                                                              color: "primary",
                                                              size: "24"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("mdi-clock")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          default: withCtx(() => [
                                                            createVNode(VListItemTitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Пн-Сб: 9:00 - 19:30 ")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VBtn, {
                                                      color: "primary",
                                                      variant: "tonal",
                                                      href: "https://vk.com/genetikakroya22",
                                                      target: "_blank",
                                                      class: "mt-4",
                                                      style: { "border-radius": "12px" }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, { start: "" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-vk")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createTextVNode(" Группа ВКонтакте ")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCard, {
                                        class: "pa-8 contact-card",
                                        elevation: "0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "12",
                                                sm: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("h3", { class: "text-h6 font-weight-800 mb-6" }, "Свяжитесь с нами"),
                                                  createVNode(VList, { class: "bg-transparent" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                        prepend: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            color: "primary",
                                                            size: "24"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("mdi-phone")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, null, {
                                                            default: withCtx(() => [
                                                              createVNode("a", {
                                                                href: "tel:89132101662",
                                                                class: "text-decoration-none contact-link"
                                                              }, " 8 913 210-16-62 "),
                                                              createVNode("br"),
                                                              createVNode("small", { class: "text-medium-emphasis" }, "Людмила")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                        prepend: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            color: "primary",
                                                            size: "24"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("mdi-phone")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, null, {
                                                            default: withCtx(() => [
                                                              createVNode("a", {
                                                                href: "tel:89132790097",
                                                                class: "text-decoration-none contact-link"
                                                              }, " 8 913 279-00-97 "),
                                                              createVNode("br"),
                                                              createVNode("small", { class: "text-medium-emphasis" }, "Юлия")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VListItem, { class: "px-0" }, {
                                                        prepend: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            color: "primary",
                                                            size: "24"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("mdi-email")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, null, {
                                                            default: withCtx(() => [
                                                              createVNode("a", {
                                                                href: "mailto:missispip@mail.ru",
                                                                class: "text-decoration-none contact-link"
                                                              }, " missispip@mail.ru ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                sm: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("h3", { class: "text-h6 font-weight-800 mb-6" }, "Адрес"),
                                                  createVNode(VList, { class: "bg-transparent" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                        prepend: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            color: "primary",
                                                            size: "24"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("mdi-map-marker")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" ул. Профинтерна 7А"),
                                                              createVNode("br"),
                                                              createTextVNode(" Барнаул ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VListItem, { class: "px-0" }, {
                                                        prepend: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            color: "primary",
                                                            size: "24"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("mdi-clock")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Пн-Сб: 9:00 - 19:30 ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VBtn, {
                                                    color: "primary",
                                                    variant: "tonal",
                                                    href: "https://vk.com/genetikakroya22",
                                                    target: "_blank",
                                                    class: "mt-4",
                                                    style: { "border-radius": "12px" }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, { start: "" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-vk")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createTextVNode(" Группа ВКонтакте ")
                                                    ]),
                                                    _: 1
                                                  })
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "8"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      class: "pa-8 contact-card",
                                      elevation: "0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("h3", { class: "text-h6 font-weight-800 mb-6" }, "Свяжитесь с нами"),
                                                createVNode(VList, { class: "bg-transparent" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          color: "primary",
                                                          size: "24"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-phone")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createVNode("a", {
                                                              href: "tel:89132101662",
                                                              class: "text-decoration-none contact-link"
                                                            }, " 8 913 210-16-62 "),
                                                            createVNode("br"),
                                                            createVNode("small", { class: "text-medium-emphasis" }, "Людмила")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          color: "primary",
                                                          size: "24"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-phone")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createVNode("a", {
                                                              href: "tel:89132790097",
                                                              class: "text-decoration-none contact-link"
                                                            }, " 8 913 279-00-97 "),
                                                            createVNode("br"),
                                                            createVNode("small", { class: "text-medium-emphasis" }, "Юлия")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItem, { class: "px-0" }, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          color: "primary",
                                                          size: "24"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-email")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createVNode("a", {
                                                              href: "mailto:missispip@mail.ru",
                                                              class: "text-decoration-none contact-link"
                                                            }, " missispip@mail.ru ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("h3", { class: "text-h6 font-weight-800 mb-6" }, "Адрес"),
                                                createVNode(VList, { class: "bg-transparent" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          color: "primary",
                                                          size: "24"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-map-marker")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" ул. Профинтерна 7А"),
                                                            createVNode("br"),
                                                            createTextVNode(" Барнаул ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItem, { class: "px-0" }, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          color: "primary",
                                                          size: "24"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-clock")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Пн-Сб: 9:00 - 19:30 ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VBtn, {
                                                  color: "primary",
                                                  variant: "tonal",
                                                  href: "https://vk.com/genetikakroya22",
                                                  target: "_blank",
                                                  class: "mt-4",
                                                  style: { "border-radius": "12px" }
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { start: "" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-vk")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createTextVNode(" Группа ВКонтакте ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h2", { class: "text-h3 font-weight-800 text-center mb-12 gradient-title" }, " Контакты "),
                          createVNode(VRow, { justify: "center" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "8"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    class: "pa-8 contact-card",
                                    elevation: "0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("h3", { class: "text-h6 font-weight-800 mb-6" }, "Свяжитесь с нами"),
                                              createVNode(VList, { class: "bg-transparent" }, {
                                                default: withCtx(() => [
                                                  createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        color: "primary",
                                                        size: "24"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-phone")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createVNode("a", {
                                                            href: "tel:89132101662",
                                                            class: "text-decoration-none contact-link"
                                                          }, " 8 913 210-16-62 "),
                                                          createVNode("br"),
                                                          createVNode("small", { class: "text-medium-emphasis" }, "Людмила")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        color: "primary",
                                                        size: "24"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-phone")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createVNode("a", {
                                                            href: "tel:89132790097",
                                                            class: "text-decoration-none contact-link"
                                                          }, " 8 913 279-00-97 "),
                                                          createVNode("br"),
                                                          createVNode("small", { class: "text-medium-emphasis" }, "Юлия")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, { class: "px-0" }, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        color: "primary",
                                                        size: "24"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-email")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createVNode("a", {
                                                            href: "mailto:missispip@mail.ru",
                                                            class: "text-decoration-none contact-link"
                                                          }, " missispip@mail.ru ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("h3", { class: "text-h6 font-weight-800 mb-6" }, "Адрес"),
                                              createVNode(VList, { class: "bg-transparent" }, {
                                                default: withCtx(() => [
                                                  createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        color: "primary",
                                                        size: "24"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-map-marker")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" ул. Профинтерна 7А"),
                                                          createVNode("br"),
                                                          createTextVNode(" Барнаул ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, { class: "px-0" }, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        color: "primary",
                                                        size: "24"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-clock")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Пн-Сб: 9:00 - 19:30 ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VBtn, {
                                                color: "primary",
                                                variant: "tonal",
                                                href: "https://vk.com/genetikakroya22",
                                                target: "_blank",
                                                class: "mt-4",
                                                style: { "border-radius": "12px" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, { start: "" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-vk")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createTextVNode(" Группа ВКонтакте ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
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
                  }, _parent3, _scopeId2));
                  _push3(`</section>`);
                  _push3(ssrRenderComponent(VFooter, { class: "bg-slate-900 text-white py-12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VContainer, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "4",
                                      class: "mb-6 mb-md-0"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h4 class="text-h6 font-weight-800 mb-3" data-v-8e554a82${_scopeId6}>${ssrInterpolate(unref(siteName))}</h4><p class="text-body-2 text-grey-lighten-2" data-v-8e554a82${_scopeId6}> Курсы кройки и шитья в Барнауле с 2014 года. Методика точного кроя по Злачевской. </p>`);
                                        } else {
                                          return [
                                            createVNode("h4", { class: "text-h6 font-weight-800 mb-3" }, toDisplayString(unref(siteName)), 1),
                                            createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, " Курсы кройки и шитья в Барнауле с 2014 года. Методика точного кроя по Злачевской. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "4",
                                      class: "mb-6 mb-md-0"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h4 class="text-h6 font-weight-800 mb-3" data-v-8e554a82${_scopeId6}>Быстрые ссылки</h4>`);
                                          _push7(ssrRenderComponent(VList, {
                                            class: "bg-transparent",
                                            density: "compact"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VListItem, {
                                                  to: "/",
                                                  class: "pa-0 text-grey-lighten-2"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Главная`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Главная")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VListItem, {
                                                  href: "#courses",
                                                  class: "pa-0 text-grey-lighten-2"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Курсы`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Курсы")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VListItem, {
                                                  href: "#about",
                                                  class: "pa-0 text-grey-lighten-2"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`О нас`);
                                                    } else {
                                                      return [
                                                        createTextVNode("О нас")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VListItem, {
                                                    to: "/",
                                                    class: "pa-0 text-grey-lighten-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Главная")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, {
                                                    href: "#courses",
                                                    class: "pa-0 text-grey-lighten-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Курсы")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, {
                                                    href: "#about",
                                                    class: "pa-0 text-grey-lighten-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("О нас")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("h4", { class: "text-h6 font-weight-800 mb-3" }, "Быстрые ссылки"),
                                            createVNode(VList, {
                                              class: "bg-transparent",
                                              density: "compact"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VListItem, {
                                                  to: "/",
                                                  class: "pa-0 text-grey-lighten-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Главная")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItem, {
                                                  href: "#courses",
                                                  class: "pa-0 text-grey-lighten-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Курсы")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItem, {
                                                  href: "#about",
                                                  class: "pa-0 text-grey-lighten-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("О нас")
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h4 class="text-h6 font-weight-800 mb-3" data-v-8e554a82${_scopeId6}>Соцсети</h4><div class="d-flex ga-2" data-v-8e554a82${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VBtn, {
                                            icon: "",
                                            href: "https://vk.com/genetikakroya22",
                                            target: "_blank",
                                            variant: "text",
                                            color: "white",
                                            size: "small"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VIcon, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-vk`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-vk")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VIcon, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-vk")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("h4", { class: "text-h6 font-weight-800 mb-3" }, "Соцсети"),
                                            createVNode("div", { class: "d-flex ga-2" }, [
                                              createVNode(VBtn, {
                                                icon: "",
                                                href: "https://vk.com/genetikakroya22",
                                                target: "_blank",
                                                variant: "text",
                                                color: "white",
                                                size: "small"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-vk")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "4",
                                        class: "mb-6 mb-md-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("h4", { class: "text-h6 font-weight-800 mb-3" }, toDisplayString(unref(siteName)), 1),
                                          createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, " Курсы кройки и шитья в Барнауле с 2014 года. Методика точного кроя по Злачевской. ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "4",
                                        class: "mb-6 mb-md-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("h4", { class: "text-h6 font-weight-800 mb-3" }, "Быстрые ссылки"),
                                          createVNode(VList, {
                                            class: "bg-transparent",
                                            density: "compact"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VListItem, {
                                                to: "/",
                                                class: "pa-0 text-grey-lighten-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Главная")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItem, {
                                                href: "#courses",
                                                class: "pa-0 text-grey-lighten-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Курсы")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItem, {
                                                href: "#about",
                                                class: "pa-0 text-grey-lighten-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("О нас")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("h4", { class: "text-h6 font-weight-800 mb-3" }, "Соцсети"),
                                          createVNode("div", { class: "d-flex ga-2" }, [
                                            createVNode(VBtn, {
                                              icon: "",
                                              href: "https://vk.com/genetikakroya22",
                                              target: "_blank",
                                              variant: "text",
                                              color: "white",
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-vk")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, { class: "my-6" }, null, _parent5, _scopeId4));
                              _push5(`<p class="text-center text-caption text-grey-lighten-3" data-v-8e554a82${_scopeId4}> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} ${ssrInterpolate(unref(siteName))}. Все права защищены. </p>`);
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "4",
                                      class: "mb-6 mb-md-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("h4", { class: "text-h6 font-weight-800 mb-3" }, toDisplayString(unref(siteName)), 1),
                                        createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, " Курсы кройки и шитья в Барнауле с 2014 года. Методика точного кроя по Злачевской. ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "4",
                                      class: "mb-6 mb-md-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("h4", { class: "text-h6 font-weight-800 mb-3" }, "Быстрые ссылки"),
                                        createVNode(VList, {
                                          class: "bg-transparent",
                                          density: "compact"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VListItem, {
                                              to: "/",
                                              class: "pa-0 text-grey-lighten-2"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Главная")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItem, {
                                              href: "#courses",
                                              class: "pa-0 text-grey-lighten-2"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Курсы")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItem, {
                                              href: "#about",
                                              class: "pa-0 text-grey-lighten-2"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("О нас")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("h4", { class: "text-h6 font-weight-800 mb-3" }, "Соцсети"),
                                        createVNode("div", { class: "d-flex ga-2" }, [
                                          createVNode(VBtn, {
                                            icon: "",
                                            href: "https://vk.com/genetikakroya22",
                                            target: "_blank",
                                            variant: "text",
                                            color: "white",
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-vk")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "my-6" }),
                                createVNode("p", { class: "text-center text-caption text-grey-lighten-3" }, " © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " " + toDisplayString(unref(siteName)) + ". Все права защищены. ", 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "4",
                                    class: "mb-6 mb-md-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("h4", { class: "text-h6 font-weight-800 mb-3" }, toDisplayString(unref(siteName)), 1),
                                      createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, " Курсы кройки и шитья в Барнауле с 2014 года. Методика точного кроя по Злачевской. ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "4",
                                    class: "mb-6 mb-md-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("h4", { class: "text-h6 font-weight-800 mb-3" }, "Быстрые ссылки"),
                                      createVNode(VList, {
                                        class: "bg-transparent",
                                        density: "compact"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VListItem, {
                                            to: "/",
                                            class: "pa-0 text-grey-lighten-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Главная")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItem, {
                                            href: "#courses",
                                            class: "pa-0 text-grey-lighten-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Курсы")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItem, {
                                            href: "#about",
                                            class: "pa-0 text-grey-lighten-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("О нас")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("h4", { class: "text-h6 font-weight-800 mb-3" }, "Соцсети"),
                                      createVNode("div", { class: "d-flex ga-2" }, [
                                        createVNode(VBtn, {
                                          icon: "",
                                          href: "https://vk.com/genetikakroya22",
                                          target: "_blank",
                                          variant: "text",
                                          color: "white",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, null, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-vk")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "my-6" }),
                              createVNode("p", { class: "text-center text-caption text-grey-lighten-3" }, " © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " " + toDisplayString(unref(siteName)) + ". Все права защищены. ", 1)
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
                    createVNode("section", { class: "hero-section py-20" }, [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode(VRow, {
                            align: "center",
                            justify: "center"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "8",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mb-6" }, [
                                    createVNode("h1", { class: "text-h2 font-weight-800 mb-4 gradient-text" }, [
                                      createTextVNode(" Шейте одежду"),
                                      createVNode("br"),
                                      createTextVNode("как вторая кожа ")
                                    ])
                                  ]),
                                  createVNode("p", {
                                    class: "text-h6 text-medium-emphasis mb-8",
                                    style: { "max-width": "600px", "margin": "0 auto", "line-height": "1.6" }
                                  }, " Методика точного кроя по Злачевской. Научим вы создавать идеальную посадку без примерок и подгонок. "),
                                  createVNode("div", {
                                    id: "vk-login-container",
                                    class: "mb-8"
                                  }),
                                  createVNode("div", { class: "d-flex flex-wrap justify-center ga-4 mb-12" }, [
                                    createVNode(VBtn, {
                                      color: "primary",
                                      size: "x-large",
                                      href: "#courses",
                                      class: "px-8",
                                      style: { "border-radius": "12px", "font-weight": "600" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Выбрать курс ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      variant: "outlined",
                                      size: "x-large",
                                      href: "https://vk.com/write-53091601",
                                      target: "_blank",
                                      class: "px-8",
                                      style: { "border-radius": "12px", "font-weight": "600" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Написать в VK ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode(VRow, {
                                    justify: "center",
                                    class: "mt-12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "auto",
                                        class: "text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: "text-h4 font-weight-800",
                                            style: { "color": "#6366F1" }
                                          }, "12+"),
                                          createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "лет опыта")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, {
                                        vertical: "",
                                        class: "mx-8"
                                      }),
                                      createVNode(VCol, {
                                        cols: "auto",
                                        class: "text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: "text-h4 font-weight-800",
                                            style: { "color": "#EC4899" }
                                          }, "500+"),
                                          createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "выпускниц")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, {
                                        vertical: "",
                                        class: "mx-8"
                                      }),
                                      createVNode(VCol, {
                                        cols: "auto",
                                        class: "text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: "text-h4 font-weight-800",
                                            style: { "color": "#06B6D4" }
                                          }, "5.0★"),
                                          createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "рейтинг")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("section", {
                      class: "py-20",
                      style: { "background": "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)" }
                    }, [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "text-h3 font-weight-800 text-center mb-12 gradient-title" }, " Знакомые проблемы? "),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(problems, (problem, i) => {
                                return createVNode(VCol, {
                                  key: i,
                                  cols: "12",
                                  sm: "6",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      class: "pa-6 h-100 glass-card",
                                      elevation: "0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          size: "48",
                                          color: problem.color,
                                          class: "mb-4"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(problem.icon), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]),
                                        createVNode("p", { class: "text-body-1 font-weight-600" }, toDisplayString(problem.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("section", {
                      id: "courses",
                      class: "py-20"
                    }, [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "text-h3 font-weight-800 text-center mb-12 gradient-title" }, " Наши курсы "),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(courses), (course) => {
                                return openBlock(), createBlock(VCol, {
                                  key: course.id,
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      class: "h-100 course-card",
                                      elevation: "0",
                                      onMouseenter: ($event) => hoveredCourse.value = course.id,
                                      onMouseleave: ($event) => hoveredCourse.value = null
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "course-image-wrapper" }, [
                                          createVNode(VImg, {
                                            src: course.image,
                                            height: "240",
                                            cover: "",
                                            class: "course-image"
                                          }, null, 8, ["src"]),
                                          createVNode("div", { class: "course-overlay" }),
                                          createVNode(VChip, {
                                            color: course.color,
                                            "text-color": "white",
                                            class: "ma-4 chip-badge"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(course.category), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])
                                        ]),
                                        createVNode(VCardText, { class: "pa-6" }, {
                                          default: withCtx(() => [
                                            createVNode("h3", { class: "text-h6 font-weight-800 mb-3" }, toDisplayString(course.title), 1),
                                            createVNode("p", { class: "text-body-2 text-medium-emphasis mb-6 line-clamp-2" }, toDisplayString(course.description), 1),
                                            createVNode("div", { class: "mb-6" }, [
                                              createVNode("div", { class: "d-flex align-center mb-2" }, [
                                                createVNode(VIcon, {
                                                  size: "18",
                                                  color: "primary",
                                                  class: "mr-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-clock-outline")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("span", { class: "text-caption" }, toDisplayString(course.duration), 1)
                                              ]),
                                              createVNode("div", { class: "d-flex align-center" }, [
                                                createVNode(VIcon, {
                                                  size: "18",
                                                  color: "primary",
                                                  class: "mr-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-book-outline")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("span", { class: "text-caption" }, toDisplayString(course.lessonsCount) + " уроков", 1)
                                              ])
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VDivider),
                                        createVNode(VCardActions, { class: "pa-6 d-flex justify-space-between align-center" }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "text-h6 font-weight-800 price-text" }, toDisplayString(course.priceDisplay), 1),
                                            createVNode(VBtn, {
                                              icon: "",
                                              size: "small",
                                              color: "primary",
                                              onClick: ($event) => _ctx.$router.push(`/courses/${course.slug}`)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-arrow-right")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["onMouseenter", "onMouseleave"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("section", { class: "py-20 gradient-bg-primary" }, [
                      createVNode(VContainer, { class: "text-white" }, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "text-h3 font-weight-800 text-center mb-12" }, " Результаты наших учениц "),
                          createVNode(VRow, { justify: "center" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(results, (result) => {
                                return createVNode(VCol, {
                                  key: result.title,
                                  cols: "12",
                                  sm: "6",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-center" }, [
                                      createVNode(VIcon, {
                                        size: "64",
                                        class: "mb-4"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(result.icon), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("p", { class: "text-h6 font-weight-800 mb-2" }, toDisplayString(result.title), 1),
                                      createVNode("p", { class: "text-body-2 opacity-80" }, toDisplayString(result.desc), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("section", {
                      id: "about",
                      class: "py-20"
                    }, [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode(VRow, {
                            align: "center",
                            justify: "center"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "5",
                                class: "text-center mb-8 mb-md-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
                                    "aspect-ratio": "1",
                                    cover: "",
                                    rounded: "xl",
                                    class: "mx-auto shadow-lg",
                                    "max-width": "300"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "7",
                                class: "pl-md-8"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h2", { class: "text-h3 font-weight-800 mb-4 gradient-title" }, " Людмила Лукьянова "),
                                  createVNode("p", { class: "text-h6 text-medium-emphasis mb-6" }, " Конструктор-модельер швейных изделий "),
                                  createVNode("p", { class: "text-body-1 mb-6 line-height-lg" }, " Мастер с полувековым опытом. Научу шить одежду сидящую как вторая кожа! Я умею множить радость✨ "),
                                  createVNode(VList, { class: "bg-transparent" }, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, { class: "px-0 mb-2" }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { color: "primary" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-check-circle")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("50+ лет опыта в швейном деле")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, { class: "px-0 mb-2" }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { color: "primary" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-check-circle")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Обучение с 2014 года")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, { class: "px-0" }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { color: "primary" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-check-circle")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Авторская методика по Злачевской")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("section", { class: "py-20 gradient-bg-secondary" }, [
                      createVNode(VContainer, { class: "text-center text-white" }, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "text-h3 font-weight-800 mb-4" }, " Начните обучение сегодня "),
                          createVNode("p", { class: "text-h6 mb-8 opacity-90" }, " Первый шаг к идеальной посадке одежды "),
                          createVNode("div", { class: "d-flex flex-wrap justify-center ga-4" }, [
                            createVNode(VBtn, {
                              color: "white",
                              size: "x-large",
                              href: "https://vk.com/write-53091601",
                              target: "_blank",
                              class: "text-primary px-8",
                              style: { "border-radius": "12px", "font-weight": "600" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Написать в VK ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              variant: "outlined",
                              color: "white",
                              size: "x-large",
                              href: "tel:89132101662",
                              class: "px-8",
                              style: { "border-radius": "12px", "font-weight": "600" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Позвонить: 8 913 210-16-62 ")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("section", {
                      id: "contacts",
                      class: "py-20",
                      style: { "background": "#F8FAFC" }
                    }, [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "text-h3 font-weight-800 text-center mb-12 gradient-title" }, " Контакты "),
                          createVNode(VRow, { justify: "center" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "8"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    class: "pa-8 contact-card",
                                    elevation: "0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("h3", { class: "text-h6 font-weight-800 mb-6" }, "Свяжитесь с нами"),
                                              createVNode(VList, { class: "bg-transparent" }, {
                                                default: withCtx(() => [
                                                  createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        color: "primary",
                                                        size: "24"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-phone")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createVNode("a", {
                                                            href: "tel:89132101662",
                                                            class: "text-decoration-none contact-link"
                                                          }, " 8 913 210-16-62 "),
                                                          createVNode("br"),
                                                          createVNode("small", { class: "text-medium-emphasis" }, "Людмила")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        color: "primary",
                                                        size: "24"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-phone")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createVNode("a", {
                                                            href: "tel:89132790097",
                                                            class: "text-decoration-none contact-link"
                                                          }, " 8 913 279-00-97 "),
                                                          createVNode("br"),
                                                          createVNode("small", { class: "text-medium-emphasis" }, "Юлия")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, { class: "px-0" }, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        color: "primary",
                                                        size: "24"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-email")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createVNode("a", {
                                                            href: "mailto:missispip@mail.ru",
                                                            class: "text-decoration-none contact-link"
                                                          }, " missispip@mail.ru ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("h3", { class: "text-h6 font-weight-800 mb-6" }, "Адрес"),
                                              createVNode(VList, { class: "bg-transparent" }, {
                                                default: withCtx(() => [
                                                  createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        color: "primary",
                                                        size: "24"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-map-marker")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" ул. Профинтерна 7А"),
                                                          createVNode("br"),
                                                          createTextVNode(" Барнаул ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItem, { class: "px-0" }, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        color: "primary",
                                                        size: "24"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-clock")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Пн-Сб: 9:00 - 19:30 ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VBtn, {
                                                color: "primary",
                                                variant: "tonal",
                                                href: "https://vk.com/genetikakroya22",
                                                target: "_blank",
                                                class: "mt-4",
                                                style: { "border-radius": "12px" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, { start: "" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-vk")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createTextVNode(" Группа ВКонтакте ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(VFooter, { class: "bg-slate-900 text-white py-12" }, {
                      default: withCtx(() => [
                        createVNode(VContainer, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "4",
                                  class: "mb-6 mb-md-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h4", { class: "text-h6 font-weight-800 mb-3" }, toDisplayString(unref(siteName)), 1),
                                    createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, " Курсы кройки и шитья в Барнауле с 2014 года. Методика точного кроя по Злачевской. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "4",
                                  class: "mb-6 mb-md-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h4", { class: "text-h6 font-weight-800 mb-3" }, "Быстрые ссылки"),
                                    createVNode(VList, {
                                      class: "bg-transparent",
                                      density: "compact"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VListItem, {
                                          to: "/",
                                          class: "pa-0 text-grey-lighten-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Главная")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, {
                                          href: "#courses",
                                          class: "pa-0 text-grey-lighten-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Курсы")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, {
                                          href: "#about",
                                          class: "pa-0 text-grey-lighten-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("О нас")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h4", { class: "text-h6 font-weight-800 mb-3" }, "Соцсети"),
                                    createVNode("div", { class: "d-flex ga-2" }, [
                                      createVNode(VBtn, {
                                        icon: "",
                                        href: "https://vk.com/genetikakroya22",
                                        target: "_blank",
                                        variant: "text",
                                        color: "white",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-vk")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, { class: "my-6" }),
                            createVNode("p", { class: "text-center text-caption text-grey-lighten-3" }, " © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " " + toDisplayString(unref(siteName)) + ". Все права защищены. ", 1)
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
              createVNode(VAppBar, {
                color: "white",
                elevation: "0",
                class: "border-b"
              }, {
                default: withCtx(() => [
                  createVNode(VContainer, { class: "d-flex align-center" }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "text-h6 font-weight-bold",
                        style: { "color": "#6366F1" }
                      }, " ✂️ " + toDisplayString(unref(siteName)), 1),
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        variant: "text",
                        href: "#courses",
                        class: "text-body-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Курсы")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        variant: "text",
                        href: "#about",
                        class: "text-body-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("О нас")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        variant: "text",
                        href: "#contacts",
                        class: "text-body-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Контакты")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "primary",
                        variant: "flat",
                        href: "tel:89132101662",
                        class: "ml-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Позвонить ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode("section", { class: "hero-section py-20" }, [
                    createVNode(VContainer, null, {
                      default: withCtx(() => [
                        createVNode(VRow, {
                          align: "center",
                          justify: "center"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "8",
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "mb-6" }, [
                                  createVNode("h1", { class: "text-h2 font-weight-800 mb-4 gradient-text" }, [
                                    createTextVNode(" Шейте одежду"),
                                    createVNode("br"),
                                    createTextVNode("как вторая кожа ")
                                  ])
                                ]),
                                createVNode("p", {
                                  class: "text-h6 text-medium-emphasis mb-8",
                                  style: { "max-width": "600px", "margin": "0 auto", "line-height": "1.6" }
                                }, " Методика точного кроя по Злачевской. Научим вы создавать идеальную посадку без примерок и подгонок. "),
                                createVNode("div", {
                                  id: "vk-login-container",
                                  class: "mb-8"
                                }),
                                createVNode("div", { class: "d-flex flex-wrap justify-center ga-4 mb-12" }, [
                                  createVNode(VBtn, {
                                    color: "primary",
                                    size: "x-large",
                                    href: "#courses",
                                    class: "px-8",
                                    style: { "border-radius": "12px", "font-weight": "600" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Выбрать курс ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    variant: "outlined",
                                    size: "x-large",
                                    href: "https://vk.com/write-53091601",
                                    target: "_blank",
                                    class: "px-8",
                                    style: { "border-radius": "12px", "font-weight": "600" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Написать в VK ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(VRow, {
                                  justify: "center",
                                  class: "mt-12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "auto",
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: "text-h4 font-weight-800",
                                          style: { "color": "#6366F1" }
                                        }, "12+"),
                                        createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "лет опыта")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider, {
                                      vertical: "",
                                      class: "mx-8"
                                    }),
                                    createVNode(VCol, {
                                      cols: "auto",
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: "text-h4 font-weight-800",
                                          style: { "color": "#EC4899" }
                                        }, "500+"),
                                        createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "выпускниц")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider, {
                                      vertical: "",
                                      class: "mx-8"
                                    }),
                                    createVNode(VCol, {
                                      cols: "auto",
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: "text-h4 font-weight-800",
                                          style: { "color": "#06B6D4" }
                                        }, "5.0★"),
                                        createVNode("p", { class: "text-body-2 text-medium-emphasis" }, "рейтинг")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("section", {
                    class: "py-20",
                    style: { "background": "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)" }
                  }, [
                    createVNode(VContainer, null, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-h3 font-weight-800 text-center mb-12 gradient-title" }, " Знакомые проблемы? "),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(problems, (problem, i) => {
                              return createVNode(VCol, {
                                key: i,
                                cols: "12",
                                sm: "6",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    class: "pa-6 h-100 glass-card",
                                    elevation: "0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        size: "48",
                                        color: problem.color,
                                        class: "mb-4"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(problem.icon), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"]),
                                      createVNode("p", { class: "text-body-1 font-weight-600" }, toDisplayString(problem.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("section", {
                    id: "courses",
                    class: "py-20"
                  }, [
                    createVNode(VContainer, null, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-h3 font-weight-800 text-center mb-12 gradient-title" }, " Наши курсы "),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(courses), (course) => {
                              return openBlock(), createBlock(VCol, {
                                key: course.id,
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    class: "h-100 course-card",
                                    elevation: "0",
                                    onMouseenter: ($event) => hoveredCourse.value = course.id,
                                    onMouseleave: ($event) => hoveredCourse.value = null
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "course-image-wrapper" }, [
                                        createVNode(VImg, {
                                          src: course.image,
                                          height: "240",
                                          cover: "",
                                          class: "course-image"
                                        }, null, 8, ["src"]),
                                        createVNode("div", { class: "course-overlay" }),
                                        createVNode(VChip, {
                                          color: course.color,
                                          "text-color": "white",
                                          class: "ma-4 chip-badge"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(course.category), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ]),
                                      createVNode(VCardText, { class: "pa-6" }, {
                                        default: withCtx(() => [
                                          createVNode("h3", { class: "text-h6 font-weight-800 mb-3" }, toDisplayString(course.title), 1),
                                          createVNode("p", { class: "text-body-2 text-medium-emphasis mb-6 line-clamp-2" }, toDisplayString(course.description), 1),
                                          createVNode("div", { class: "mb-6" }, [
                                            createVNode("div", { class: "d-flex align-center mb-2" }, [
                                              createVNode(VIcon, {
                                                size: "18",
                                                color: "primary",
                                                class: "mr-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-clock-outline")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("span", { class: "text-caption" }, toDisplayString(course.duration), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex align-center" }, [
                                              createVNode(VIcon, {
                                                size: "18",
                                                color: "primary",
                                                class: "mr-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-book-outline")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("span", { class: "text-caption" }, toDisplayString(course.lessonsCount) + " уроков", 1)
                                            ])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VDivider),
                                      createVNode(VCardActions, { class: "pa-6 d-flex justify-space-between align-center" }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-h6 font-weight-800 price-text" }, toDisplayString(course.priceDisplay), 1),
                                          createVNode(VBtn, {
                                            icon: "",
                                            size: "small",
                                            color: "primary",
                                            onClick: ($event) => _ctx.$router.push(`/courses/${course.slug}`)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-arrow-right")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onMouseenter", "onMouseleave"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("section", { class: "py-20 gradient-bg-primary" }, [
                    createVNode(VContainer, { class: "text-white" }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-h3 font-weight-800 text-center mb-12" }, " Результаты наших учениц "),
                        createVNode(VRow, { justify: "center" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(results, (result) => {
                              return createVNode(VCol, {
                                key: result.title,
                                cols: "12",
                                sm: "6",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-center" }, [
                                    createVNode(VIcon, {
                                      size: "64",
                                      class: "mb-4"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(result.icon), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("p", { class: "text-h6 font-weight-800 mb-2" }, toDisplayString(result.title), 1),
                                    createVNode("p", { class: "text-body-2 opacity-80" }, toDisplayString(result.desc), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("section", {
                    id: "about",
                    class: "py-20"
                  }, [
                    createVNode(VContainer, null, {
                      default: withCtx(() => [
                        createVNode(VRow, {
                          align: "center",
                          justify: "center"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "5",
                              class: "text-center mb-8 mb-md-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
                                  "aspect-ratio": "1",
                                  cover: "",
                                  rounded: "xl",
                                  class: "mx-auto shadow-lg",
                                  "max-width": "300"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "7",
                              class: "pl-md-8"
                            }, {
                              default: withCtx(() => [
                                createVNode("h2", { class: "text-h3 font-weight-800 mb-4 gradient-title" }, " Людмила Лукьянова "),
                                createVNode("p", { class: "text-h6 text-medium-emphasis mb-6" }, " Конструктор-модельер швейных изделий "),
                                createVNode("p", { class: "text-body-1 mb-6 line-height-lg" }, " Мастер с полувековым опытом. Научу шить одежду сидящую как вторая кожа! Я умею множить радость✨ "),
                                createVNode(VList, { class: "bg-transparent" }, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, { class: "px-0 mb-2" }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { color: "primary" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-check-circle")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("50+ лет опыта в швейном деле")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItem, { class: "px-0 mb-2" }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { color: "primary" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-check-circle")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Обучение с 2014 года")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItem, { class: "px-0" }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { color: "primary" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-check-circle")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Авторская методика по Злачевской")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("section", { class: "py-20 gradient-bg-secondary" }, [
                    createVNode(VContainer, { class: "text-center text-white" }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-h3 font-weight-800 mb-4" }, " Начните обучение сегодня "),
                        createVNode("p", { class: "text-h6 mb-8 opacity-90" }, " Первый шаг к идеальной посадке одежды "),
                        createVNode("div", { class: "d-flex flex-wrap justify-center ga-4" }, [
                          createVNode(VBtn, {
                            color: "white",
                            size: "x-large",
                            href: "https://vk.com/write-53091601",
                            target: "_blank",
                            class: "text-primary px-8",
                            style: { "border-radius": "12px", "font-weight": "600" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Написать в VK ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            variant: "outlined",
                            color: "white",
                            size: "x-large",
                            href: "tel:89132101662",
                            class: "px-8",
                            style: { "border-radius": "12px", "font-weight": "600" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Позвонить: 8 913 210-16-62 ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("section", {
                    id: "contacts",
                    class: "py-20",
                    style: { "background": "#F8FAFC" }
                  }, [
                    createVNode(VContainer, null, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-h3 font-weight-800 text-center mb-12 gradient-title" }, " Контакты "),
                        createVNode(VRow, { justify: "center" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "8"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  class: "pa-8 contact-card",
                                  elevation: "0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("h3", { class: "text-h6 font-weight-800 mb-6" }, "Свяжитесь с нами"),
                                            createVNode(VList, { class: "bg-transparent" }, {
                                              default: withCtx(() => [
                                                createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      color: "primary",
                                                      size: "24"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-phone")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createVNode("a", {
                                                          href: "tel:89132101662",
                                                          class: "text-decoration-none contact-link"
                                                        }, " 8 913 210-16-62 "),
                                                        createVNode("br"),
                                                        createVNode("small", { class: "text-medium-emphasis" }, "Людмила")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      color: "primary",
                                                      size: "24"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-phone")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createVNode("a", {
                                                          href: "tel:89132790097",
                                                          class: "text-decoration-none contact-link"
                                                        }, " 8 913 279-00-97 "),
                                                        createVNode("br"),
                                                        createVNode("small", { class: "text-medium-emphasis" }, "Юлия")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItem, { class: "px-0" }, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      color: "primary",
                                                      size: "24"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-email")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createVNode("a", {
                                                          href: "mailto:missispip@mail.ru",
                                                          class: "text-decoration-none contact-link"
                                                        }, " missispip@mail.ru ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("h3", { class: "text-h6 font-weight-800 mb-6" }, "Адрес"),
                                            createVNode(VList, { class: "bg-transparent" }, {
                                              default: withCtx(() => [
                                                createVNode(VListItem, { class: "px-0 mb-4" }, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      color: "primary",
                                                      size: "24"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-map-marker")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" ул. Профинтерна 7А"),
                                                        createVNode("br"),
                                                        createTextVNode(" Барнаул ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItem, { class: "px-0" }, {
                                                  prepend: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      color: "primary",
                                                      size: "24"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-clock")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Пн-Сб: 9:00 - 19:30 ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, {
                                              color: "primary",
                                              variant: "tonal",
                                              href: "https://vk.com/genetikakroya22",
                                              target: "_blank",
                                              class: "mt-4",
                                              style: { "border-radius": "12px" }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, { start: "" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-vk")
                                                  ]),
                                                  _: 1
                                                }),
                                                createTextVNode(" Группа ВКонтакте ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(VFooter, { class: "bg-slate-900 text-white py-12" }, {
                    default: withCtx(() => [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "4",
                                class: "mb-6 mb-md-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "text-h6 font-weight-800 mb-3" }, toDisplayString(unref(siteName)), 1),
                                  createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, " Курсы кройки и шитья в Барнауле с 2014 года. Методика точного кроя по Злачевской. ")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "4",
                                class: "mb-6 mb-md-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "text-h6 font-weight-800 mb-3" }, "Быстрые ссылки"),
                                  createVNode(VList, {
                                    class: "bg-transparent",
                                    density: "compact"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, {
                                        to: "/",
                                        class: "pa-0 text-grey-lighten-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Главная")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, {
                                        href: "#courses",
                                        class: "pa-0 text-grey-lighten-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Курсы")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, {
                                        href: "#about",
                                        class: "pa-0 text-grey-lighten-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("О нас")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "text-h6 font-weight-800 mb-3" }, "Соцсети"),
                                  createVNode("div", { class: "d-flex ga-2" }, [
                                    createVNode(VBtn, {
                                      icon: "",
                                      href: "https://vk.com/genetikakroya22",
                                      target: "_blank",
                                      variant: "text",
                                      color: "white",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, null, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-vk")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "my-6" }),
                          createVNode("p", { class: "text-center text-caption text-grey-lighten-3" }, " © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " " + toDisplayString(unref(siteName)) + ". Все права защищены. ", 1)
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8e554a82"]]);

export { index as default };
//# sourceMappingURL=index-DCEbeN7K.mjs.map
