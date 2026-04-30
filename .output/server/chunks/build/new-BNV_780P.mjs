import { defineComponent, computed, ref, reactive, withCtx, createTextVNode, createVNode, unref, toDisplayString, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRoute, a as useRouter } from './server.mjs';
import { u as useSeoMeta } from './composables-CsgbRhqC.mjs';
import { V as VBtn } from './VBtn-p5cu1pGV.mjs';
import { V as VIcon } from './index-C1EJcibQ.mjs';
import { V as VRow, a as VCol } from './VRow-CwXPvlwe.mjs';
import { V as VForm } from './VForm-CQaL3KUu.mjs';
import { V as VTextField } from './VTextField-Bqptx47Z.mjs';
import { V as VTextarea } from './VTextarea-DTXsVE1U.mjs';
import { V as VSelect } from './VSelect-4gYBnRL8.mjs';
import { V as VCheckbox } from './VCheckbox-CUnSCEXF.mjs';
import { V as VChip } from './VChip-nD7Rsxz9.mjs';
import { V as VDivider } from './VDivider-Batqhoho.mjs';
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
import 'vue-router';
import './position-D2_Ao4AV.mjs';
import './autofocus-DXdUA20R.mjs';
import './forwardRefs-CAP5b9ad.mjs';
import './VList-B7WBdDJv.mjs';
import './ssrBoot-ZQn7gOuX.mjs';
import './VAvatar-DVIor7ga.mjs';
import './VOverlay-BtXALeZH.mjs';
import './scopeId-DrHQwwj5.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "new",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const isEdit = computed(() => !!route.params.id);
    const saving = ref(false);
    const categories = ["Базовый", "Продвинутый", "Спецкурс"];
    const form = reactive({
      title: "",
      description: "",
      price: 0,
      category: "Базовый",
      duration: "",
      lessonsCount: 0,
      isPublished: false
    });
    const saveCourse = async () => {
      saving.value = true;
      try {
        console.log("Сохранение курса:", form);
        await router.push("/admin/courses");
      } finally {
        saving.value = false;
      }
    };
    useSeoMeta({
      title: `${isEdit.value ? "Редактирование" : "Новый курс"} — Админка`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-31852c1a><div class="d-flex align-center mb-6" data-v-31852c1a>`);
      _push(ssrRenderComponent(VBtn, {
        icon: "",
        variant: "text",
        color: "grey-darken-2",
        to: "/admin/courses",
        class: "mr-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, { size: "20" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-arrow-left`);
                } else {
                  return [
                    createTextVNode("mdi-arrow-left")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, { size: "20" }, {
                default: withCtx(() => [
                  createTextVNode("mdi-arrow-left")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div data-v-31852c1a><h1 class="text-h4 font-weight-bold mb-1" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-31852c1a>${ssrInterpolate(unref(isEdit) ? "Редактирование" : "Новый курс")}</h1><p class="text-body-2 text-grey-darken-1" data-v-31852c1a>${ssrInterpolate(unref(isEdit) ? "Изменение данных курса" : "Заполните информацию о курсе")}</p></div></div>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, { onSubmit: saveCourse }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mb-6" data-v-31852c1a${_scopeId3}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-31852c1a${_scopeId3}>Название</label>`);
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(form).title,
                          "onUpdate:modelValue": ($event) => unref(form).title = $event,
                          placeholder: "Название курса",
                          variant: "outlined",
                          density: "compact",
                          "hide-details": "",
                          class: "mb-4"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="mb-6" data-v-31852c1a${_scopeId3}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-31852c1a${_scopeId3}>Описание</label>`);
                        _push4(ssrRenderComponent(VTextarea, {
                          modelValue: unref(form).description,
                          "onUpdate:modelValue": ($event) => unref(form).description = $event,
                          placeholder: "Описание курса",
                          variant: "outlined",
                          density: "compact",
                          rows: "4",
                          "hide-details": "",
                          class: "mb-4"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label class="text-caption text-grey-darken-1 d-block mb-1" data-v-31852c1a${_scopeId5}>Цена (₽)</label>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(form).price,
                                      "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                      modelModifiers: { number: true },
                                      type: "number",
                                      placeholder: "0",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": "",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Цена (₽)"),
                                      createVNode(VTextField, {
                                        modelValue: unref(form).price,
                                        "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                        modelModifiers: { number: true },
                                        type: "number",
                                        placeholder: "0",
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": "",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label class="text-caption text-grey-darken-1 d-block mb-1" data-v-31852c1a${_scopeId5}>Длительность</label>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(form).duration,
                                      "onUpdate:modelValue": ($event) => unref(form).duration = $event,
                                      placeholder: "2 месяца",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": "",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Длительность"),
                                      createVNode(VTextField, {
                                        modelValue: unref(form).duration,
                                        "onUpdate:modelValue": ($event) => unref(form).duration = $event,
                                        placeholder: "2 месяца",
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": "",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Цена (₽)"),
                                    createVNode(VTextField, {
                                      modelValue: unref(form).price,
                                      "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                      modelModifiers: { number: true },
                                      type: "number",
                                      placeholder: "0",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": "",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Длительность"),
                                    createVNode(VTextField, {
                                      modelValue: unref(form).duration,
                                      "onUpdate:modelValue": ($event) => unref(form).duration = $event,
                                      placeholder: "2 месяца",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": "",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label class="text-caption text-grey-darken-1 d-block mb-1" data-v-31852c1a${_scopeId5}>Категория</label>`);
                                    _push6(ssrRenderComponent(VSelect, {
                                      modelValue: unref(form).category,
                                      "onUpdate:modelValue": ($event) => unref(form).category = $event,
                                      items: categories,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": "",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Категория"),
                                      createVNode(VSelect, {
                                        modelValue: unref(form).category,
                                        "onUpdate:modelValue": ($event) => unref(form).category = $event,
                                        items: categories,
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": "",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label class="text-caption text-grey-darken-1 d-block mb-1" data-v-31852c1a${_scopeId5}>Уроков</label>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(form).lessonsCount,
                                      "onUpdate:modelValue": ($event) => unref(form).lessonsCount = $event,
                                      modelModifiers: { number: true },
                                      type: "number",
                                      placeholder: "0",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": "",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Уроков"),
                                      createVNode(VTextField, {
                                        modelValue: unref(form).lessonsCount,
                                        "onUpdate:modelValue": ($event) => unref(form).lessonsCount = $event,
                                        modelModifiers: { number: true },
                                        type: "number",
                                        placeholder: "0",
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": "",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Категория"),
                                    createVNode(VSelect, {
                                      modelValue: unref(form).category,
                                      "onUpdate:modelValue": ($event) => unref(form).category = $event,
                                      items: categories,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": "",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Уроков"),
                                    createVNode(VTextField, {
                                      modelValue: unref(form).lessonsCount,
                                      "onUpdate:modelValue": ($event) => unref(form).lessonsCount = $event,
                                      modelModifiers: { number: true },
                                      type: "number",
                                      placeholder: "0",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": "",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCheckbox, {
                          modelValue: unref(form).isPublished,
                          "onUpdate:modelValue": ($event) => unref(form).isPublished = $event,
                          label: "Опубликовать курс",
                          "hide-details": "",
                          class: "mb-6",
                          color: "green-darken-3"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="d-flex ga-2" data-v-31852c1a${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, {
                          type: "submit",
                          color: "green-darken-3",
                          variant: "flat",
                          loading: unref(saving),
                          style: { "border-radius": "8px" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(isEdit) ? "Сохранить" : "Создать")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(isEdit) ? "Сохранить" : "Создать"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "text",
                          color: "grey-darken-2",
                          to: "/admin/courses"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Отмена `);
                            } else {
                              return [
                                createTextVNode(" Отмена ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "mb-6" }, [
                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название"),
                            createVNode(VTextField, {
                              modelValue: unref(form).title,
                              "onUpdate:modelValue": ($event) => unref(form).title = $event,
                              placeholder: "Название курса",
                              variant: "outlined",
                              density: "compact",
                              "hide-details": "",
                              class: "mb-4"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mb-6" }, [
                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Описание"),
                            createVNode(VTextarea, {
                              modelValue: unref(form).description,
                              "onUpdate:modelValue": ($event) => unref(form).description = $event,
                              placeholder: "Описание курса",
                              variant: "outlined",
                              density: "compact",
                              rows: "4",
                              "hide-details": "",
                              class: "mb-4"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Цена (₽)"),
                                  createVNode(VTextField, {
                                    modelValue: unref(form).price,
                                    "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                    modelModifiers: { number: true },
                                    type: "number",
                                    placeholder: "0",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": "",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Длительность"),
                                  createVNode(VTextField, {
                                    modelValue: unref(form).duration,
                                    "onUpdate:modelValue": ($event) => unref(form).duration = $event,
                                    placeholder: "2 месяца",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": "",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Категория"),
                                  createVNode(VSelect, {
                                    modelValue: unref(form).category,
                                    "onUpdate:modelValue": ($event) => unref(form).category = $event,
                                    items: categories,
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": "",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Уроков"),
                                  createVNode(VTextField, {
                                    modelValue: unref(form).lessonsCount,
                                    "onUpdate:modelValue": ($event) => unref(form).lessonsCount = $event,
                                    modelModifiers: { number: true },
                                    type: "number",
                                    placeholder: "0",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": "",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCheckbox, {
                            modelValue: unref(form).isPublished,
                            "onUpdate:modelValue": ($event) => unref(form).isPublished = $event,
                            label: "Опубликовать курс",
                            "hide-details": "",
                            class: "mb-6",
                            color: "green-darken-3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "d-flex ga-2" }, [
                            createVNode(VBtn, {
                              type: "submit",
                              color: "green-darken-3",
                              variant: "flat",
                              loading: unref(saving),
                              style: { "border-radius": "8px" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(isEdit) ? "Сохранить" : "Создать"), 1)
                              ]),
                              _: 1
                            }, 8, ["loading"]),
                            createVNode(VBtn, {
                              variant: "text",
                              color: "grey-darken-2",
                              to: "/admin/courses"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Отмена ")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VForm, {
                      onSubmit: withModifiers(saveCourse, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-6" }, [
                          createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название"),
                          createVNode(VTextField, {
                            modelValue: unref(form).title,
                            "onUpdate:modelValue": ($event) => unref(form).title = $event,
                            placeholder: "Название курса",
                            variant: "outlined",
                            density: "compact",
                            "hide-details": "",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mb-6" }, [
                          createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Описание"),
                          createVNode(VTextarea, {
                            modelValue: unref(form).description,
                            "onUpdate:modelValue": ($event) => unref(form).description = $event,
                            placeholder: "Описание курса",
                            variant: "outlined",
                            density: "compact",
                            rows: "4",
                            "hide-details": "",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Цена (₽)"),
                                createVNode(VTextField, {
                                  modelValue: unref(form).price,
                                  "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                  modelModifiers: { number: true },
                                  type: "number",
                                  placeholder: "0",
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": "",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Длительность"),
                                createVNode(VTextField, {
                                  modelValue: unref(form).duration,
                                  "onUpdate:modelValue": ($event) => unref(form).duration = $event,
                                  placeholder: "2 месяца",
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": "",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Категория"),
                                createVNode(VSelect, {
                                  modelValue: unref(form).category,
                                  "onUpdate:modelValue": ($event) => unref(form).category = $event,
                                  items: categories,
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": "",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Уроков"),
                                createVNode(VTextField, {
                                  modelValue: unref(form).lessonsCount,
                                  "onUpdate:modelValue": ($event) => unref(form).lessonsCount = $event,
                                  modelModifiers: { number: true },
                                  type: "number",
                                  placeholder: "0",
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": "",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCheckbox, {
                          modelValue: unref(form).isPublished,
                          "onUpdate:modelValue": ($event) => unref(form).isPublished = $event,
                          label: "Опубликовать курс",
                          "hide-details": "",
                          class: "mb-6",
                          color: "green-darken-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("div", { class: "d-flex ga-2" }, [
                          createVNode(VBtn, {
                            type: "submit",
                            color: "green-darken-3",
                            variant: "flat",
                            loading: unref(saving),
                            style: { "border-radius": "8px" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(isEdit) ? "Сохранить" : "Создать"), 1)
                            ]),
                            _: 1
                          }, 8, ["loading"]),
                          createVNode(VBtn, {
                            variant: "text",
                            color: "grey-darken-2",
                            to: "/admin/courses"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Отмена ")
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="preview-card" data-v-31852c1a${_scopeId2}><p class="text-caption text-grey-darken-1 font-weight-medium mb-4" data-v-31852c1a${_scopeId2}>Предпросмотр</p><div class="mb-4" data-v-31852c1a${_scopeId2}><p class="text-caption text-grey-darken-1" data-v-31852c1a${_scopeId2}>Название</p><p class="text-body-2 font-weight-medium" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-31852c1a${_scopeId2}>${ssrInterpolate(unref(form).title || "Название курса")}</p></div><div class="mb-4" data-v-31852c1a${_scopeId2}><p class="text-caption text-grey-darken-1" data-v-31852c1a${_scopeId2}>Цена</p><p class="text-h6 font-weight-bold" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-31852c1a${_scopeId2}>${ssrInterpolate(unref(form).price ? `${unref(form).price} ₽` : "0 ₽")}</p></div><div class="mb-4" data-v-31852c1a${_scopeId2}><p class="text-caption text-grey-darken-1" data-v-31852c1a${_scopeId2}>Категория</p>`);
                  _push3(ssrRenderComponent(VChip, {
                    size: "x-small",
                    color: "grey-darken-4",
                    "text-color": "white",
                    label: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(form).category || "Категория")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(form).category || "Категория"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="mb-4" data-v-31852c1a${_scopeId2}><p class="text-caption text-grey-darken-1" data-v-31852c1a${_scopeId2}>Статус</p>`);
                  _push3(ssrRenderComponent(VChip, {
                    size: "x-small",
                    color: unref(form).isPublished ? "grey-darken-4" : "grey-lighten-1",
                    "text-color": "white",
                    label: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(form).isPublished ? "Опубликован" : "Черновик")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(form).isPublished ? "Опубликован" : "Черновик"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent3, _scopeId2));
                  _push3(`<div data-v-31852c1a${_scopeId2}><p class="text-caption text-grey-darken-1" data-v-31852c1a${_scopeId2}>Описание</p><p class="text-body-2" data-v-31852c1a${_scopeId2}>${ssrInterpolate(unref(form).description || "Описание курса")}</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "preview-card" }, [
                      createVNode("p", { class: "text-caption text-grey-darken-1 font-weight-medium mb-4" }, "Предпросмотр"),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("p", { class: "text-caption text-grey-darken-1" }, "Название"),
                        createVNode("p", {
                          class: "text-body-2 font-weight-medium",
                          style: { "color": "#020617" }
                        }, toDisplayString(unref(form).title || "Название курса"), 1)
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("p", { class: "text-caption text-grey-darken-1" }, "Цена"),
                        createVNode("p", {
                          class: "text-h6 font-weight-bold",
                          style: { "color": "#020617" }
                        }, toDisplayString(unref(form).price ? `${unref(form).price} ₽` : "0 ₽"), 1)
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("p", { class: "text-caption text-grey-darken-1" }, "Категория"),
                        createVNode(VChip, {
                          size: "x-small",
                          color: "grey-darken-4",
                          "text-color": "white",
                          label: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(form).category || "Категория"), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("p", { class: "text-caption text-grey-darken-1" }, "Статус"),
                        createVNode(VChip, {
                          size: "x-small",
                          color: unref(form).isPublished ? "grey-darken-4" : "grey-lighten-1",
                          "text-color": "white",
                          label: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(form).isPublished ? "Опубликован" : "Черновик"), 1)
                          ]),
                          _: 1
                        }, 8, ["color"])
                      ]),
                      createVNode(VDivider, { class: "my-4" }),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-caption text-grey-darken-1" }, "Описание"),
                        createVNode("p", { class: "text-body-2" }, toDisplayString(unref(form).description || "Описание курса"), 1)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "8"
              }, {
                default: withCtx(() => [
                  createVNode(VForm, {
                    onSubmit: withModifiers(saveCourse, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название"),
                        createVNode(VTextField, {
                          modelValue: unref(form).title,
                          "onUpdate:modelValue": ($event) => unref(form).title = $event,
                          placeholder: "Название курса",
                          variant: "outlined",
                          density: "compact",
                          "hide-details": "",
                          class: "mb-4"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Описание"),
                        createVNode(VTextarea, {
                          modelValue: unref(form).description,
                          "onUpdate:modelValue": ($event) => unref(form).description = $event,
                          placeholder: "Описание курса",
                          variant: "outlined",
                          density: "compact",
                          rows: "4",
                          "hide-details": "",
                          class: "mb-4"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Цена (₽)"),
                              createVNode(VTextField, {
                                modelValue: unref(form).price,
                                "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                modelModifiers: { number: true },
                                type: "number",
                                placeholder: "0",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": "",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Длительность"),
                              createVNode(VTextField, {
                                modelValue: unref(form).duration,
                                "onUpdate:modelValue": ($event) => unref(form).duration = $event,
                                placeholder: "2 месяца",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": "",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Категория"),
                              createVNode(VSelect, {
                                modelValue: unref(form).category,
                                "onUpdate:modelValue": ($event) => unref(form).category = $event,
                                items: categories,
                                variant: "outlined",
                                density: "compact",
                                "hide-details": "",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Уроков"),
                              createVNode(VTextField, {
                                modelValue: unref(form).lessonsCount,
                                "onUpdate:modelValue": ($event) => unref(form).lessonsCount = $event,
                                modelModifiers: { number: true },
                                type: "number",
                                placeholder: "0",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": "",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCheckbox, {
                        modelValue: unref(form).isPublished,
                        "onUpdate:modelValue": ($event) => unref(form).isPublished = $event,
                        label: "Опубликовать курс",
                        "hide-details": "",
                        class: "mb-6",
                        color: "green-darken-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "d-flex ga-2" }, [
                        createVNode(VBtn, {
                          type: "submit",
                          color: "green-darken-3",
                          variant: "flat",
                          loading: unref(saving),
                          style: { "border-radius": "8px" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(isEdit) ? "Сохранить" : "Создать"), 1)
                          ]),
                          _: 1
                        }, 8, ["loading"]),
                        createVNode(VBtn, {
                          variant: "text",
                          color: "grey-darken-2",
                          to: "/admin/courses"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Отмена ")
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
              createVNode(VCol, {
                cols: "12",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "preview-card" }, [
                    createVNode("p", { class: "text-caption text-grey-darken-1 font-weight-medium mb-4" }, "Предпросмотр"),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("p", { class: "text-caption text-grey-darken-1" }, "Название"),
                      createVNode("p", {
                        class: "text-body-2 font-weight-medium",
                        style: { "color": "#020617" }
                      }, toDisplayString(unref(form).title || "Название курса"), 1)
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("p", { class: "text-caption text-grey-darken-1" }, "Цена"),
                      createVNode("p", {
                        class: "text-h6 font-weight-bold",
                        style: { "color": "#020617" }
                      }, toDisplayString(unref(form).price ? `${unref(form).price} ₽` : "0 ₽"), 1)
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("p", { class: "text-caption text-grey-darken-1" }, "Категория"),
                      createVNode(VChip, {
                        size: "x-small",
                        color: "grey-darken-4",
                        "text-color": "white",
                        label: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(form).category || "Категория"), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("p", { class: "text-caption text-grey-darken-1" }, "Статус"),
                      createVNode(VChip, {
                        size: "x-small",
                        color: unref(form).isPublished ? "grey-darken-4" : "grey-lighten-1",
                        "text-color": "white",
                        label: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(form).isPublished ? "Опубликован" : "Черновик"), 1)
                        ]),
                        _: 1
                      }, 8, ["color"])
                    ]),
                    createVNode(VDivider, { class: "my-4" }),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-caption text-grey-darken-1" }, "Описание"),
                      createVNode("p", { class: "text-body-2" }, toDisplayString(unref(form).description || "Описание курса"), 1)
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/courses/new.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _new = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-31852c1a"]]);

export { _new as default };
//# sourceMappingURL=new-BNV_780P.mjs.map
