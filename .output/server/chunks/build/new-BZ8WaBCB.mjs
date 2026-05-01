import { defineComponent, computed, ref, reactive, withCtx, createTextVNode, createVNode, unref, isRef, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRoute, a as useRouter } from './server.mjs';
import { u as useSeoMeta } from './composables-DeVZMDsx.mjs';
import { V as VBtn } from './VBtn-Djm3DFQI.mjs';
import { V as VIcon } from './index-CeIkwuF-.mjs';
import { V as VRow, a as VCol } from './VRow-8dNF8Cjb.mjs';
import { V as VForm } from './VForm-BTR3xXyE.mjs';
import { V as VTextField } from './VTextField-Dj5KxMoe.mjs';
import { V as VTextarea } from './VTextarea-By9zHcBE.mjs';
import { V as VFileInput } from './VFileInput-CuqyGoAs.mjs';
import { V as VSelect } from './VSelect-F1bIdF9a.mjs';
import { V as VCheckbox } from './VCheckbox-COGaGPsQ.mjs';
import { V as VChip } from './VChip-DrZLESMo.mjs';
import { V as VDivider } from './VDivider-D0tL2N8t.mjs';
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
import 'path';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';
import './position-DWaOuhIW.mjs';
import './autofocus-fSwJL8Ok.mjs';
import './forwardRefs-D9b4qMD_.mjs';
import './VList-BU_3CDSx.mjs';
import './ssrBoot-ZQn7gOuX.mjs';
import './VAvatar-CwPHByUG.mjs';
import './VOverlay-DblaWLi6.mjs';
import './scopeId-B2pAe-pO.mjs';

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
      slug: "",
      price: 0,
      category: "Базовый",
      duration: "",
      lessonsCount: 0,
      isPublished: false,
      image: "",
      benefits: []
    });
    const imageFile = ref(null);
    const generateSlug = () => {
      if (!form.title) {
        form.slug = "";
        return;
      }
      const translitMap = {
        "а": "a",
        "б": "b",
        "в": "v",
        "г": "g",
        "д": "d",
        "е": "e",
        "ё": "yo",
        "ж": "zh",
        "з": "z",
        "и": "i",
        "й": "y",
        "к": "k",
        "л": "l",
        "м": "m",
        "н": "n",
        "о": "o",
        "п": "p",
        "р": "r",
        "с": "s",
        "т": "t",
        "у": "u",
        "ф": "f",
        "х": "h",
        "ц": "ts",
        "ч": "ch",
        "ш": "sh",
        "щ": "sch",
        "ъ": "",
        "ы": "y",
        "ь": "",
        "э": "e",
        "ю": "yu",
        "я": "ya"
      };
      form.slug = form.title.toLowerCase().split("").map((char) => translitMap[char] || char).join("").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    };
    const handleImageUpload = async (files) => {
      if (!files) return;
      const file = Array.isArray(files) ? files[0] : files;
      if (!file || !(file instanceof Blob)) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        form.image = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    const addBenefit = () => {
      form.benefits.push("");
    };
    const removeBenefit = (index) => {
      form.benefits.splice(index, 1);
    };
    const saveCourse = async () => {
      saving.value = true;
      try {
        console.log("📝 [Frontend] Сохранение нового курса:", form);
        const response = await $fetch("/api/admin/settings", {
          method: "POST",
          body: {
            type: "course",
            data: {
              title: form.title,
              description: form.description,
              slug: form.slug,
              price: form.price,
              category: form.category,
              duration: form.duration,
              lessonsCount: form.lessonsCount,
              isPublished: form.isPublished,
              image: form.image,
              benefits: JSON.stringify(form.benefits.filter((b) => b.trim()))
            }
          }
        });
        console.log("✅ [Frontend] Курс создан:", response.course.id);
        await router.push("/admin/courses");
      } catch (e) {
        console.error("❌ [Frontend] Ошибка сохранения:", e);
        alert("Ошибка: " + (e.data?.message || "Не удалось создать курс"));
      } finally {
        saving.value = false;
      }
    };
    useSeoMeta({
      title: `${isEdit.value ? "Редактирование" : "Новый курс"} — Админка`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-0ce70d27><div class="d-flex align-center mb-6" data-v-0ce70d27>`);
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
      _push(`<div data-v-0ce70d27><h1 class="text-h4 font-weight-bold mb-1" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-0ce70d27>${ssrInterpolate(unref(isEdit) ? "Редактирование" : "Новый курс")}</h1><p class="text-body-2 text-grey-darken-1" data-v-0ce70d27>${ssrInterpolate(unref(isEdit) ? "Изменение данных курса" : "Заполните информацию о курсе")}</p></div></div>`);
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
                        _push4(`<div class="mb-6" data-v-0ce70d27${_scopeId3}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-0ce70d27${_scopeId3}>Название</label>`);
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(form).title,
                          "onUpdate:modelValue": ($event) => unref(form).title = $event,
                          placeholder: "Название курса",
                          variant: "outlined",
                          density: "compact",
                          "hide-details": "",
                          class: "mb-4",
                          onInput: generateSlug
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="mb-6" data-v-0ce70d27${_scopeId3}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-0ce70d27${_scopeId3}>Slug (URL)</label>`);
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(form).slug,
                          "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                          placeholder: "kurs-nazvanie",
                          variant: "outlined",
                          density: "compact",
                          "hide-details": "",
                          class: "mb-4"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="mb-6" data-v-0ce70d27${_scopeId3}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-0ce70d27${_scopeId3}>Описание</label>`);
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
                        _push4(`</div><div class="mb-6" data-v-0ce70d27${_scopeId3}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-0ce70d27${_scopeId3}>Фотография курса</label>`);
                        _push4(ssrRenderComponent(VFileInput, {
                          modelValue: unref(imageFile),
                          "onUpdate:modelValue": [($event) => isRef(imageFile) ? imageFile.value = $event : null, handleImageUpload],
                          accept: "image/*",
                          placeholder: "Выберите фотографию",
                          variant: "outlined",
                          density: "compact",
                          "hide-details": "",
                          class: "mb-4"
                        }, null, _parent4, _scopeId3));
                        if (unref(form).image) {
                          _push4(`<div class="mt-2" data-v-0ce70d27${_scopeId3}><img${ssrRenderAttr("src", unref(form).image)} alt="Preview" style="${ssrRenderStyle({ "max-width": "200px", "max-height": "200px", "border-radius": "8px" })}" data-v-0ce70d27${_scopeId3}></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div class="mb-6" data-v-0ce70d27${_scopeId3}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-0ce70d27${_scopeId3}>Что вы получите</label><div class="mb-4" data-v-0ce70d27${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(form).benefits, (benefit, index) => {
                          _push4(`<div class="d-flex ga-2 mb-2" data-v-0ce70d27${_scopeId3}>`);
                          _push4(ssrRenderComponent(VTextField, {
                            modelValue: unref(form).benefits[index],
                            "onUpdate:modelValue": ($event) => unref(form).benefits[index] = $event,
                            placeholder: "Преимущество курса",
                            variant: "outlined",
                            density: "compact",
                            "hide-details": "",
                            class: "flex-grow-1"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VBtn, {
                            icon: "",
                            size: "small",
                            color: "red-darken-3",
                            variant: "text",
                            onClick: ($event) => removeBenefit(index)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, { size: "20" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`mdi-delete`);
                                    } else {
                                      return [
                                        createTextVNode("mdi-delete")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VIcon, { size: "20" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-delete")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        });
                        _push4(`<!--]--></div>`);
                        _push4(ssrRenderComponent(VBtn, {
                          size: "small",
                          color: "blue-darken-3",
                          variant: "outlined",
                          onClick: addBenefit
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                size: "20",
                                class: "mr-1"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-plus`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-plus")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(` Добавить преимущество `);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  size: "20",
                                  class: "mr-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-plus")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Добавить преимущество ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
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
                                    _push6(`<label class="text-caption text-grey-darken-1 d-block mb-1" data-v-0ce70d27${_scopeId5}>Цена (₽)</label>`);
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
                                    _push6(`<label class="text-caption text-grey-darken-1 d-block mb-1" data-v-0ce70d27${_scopeId5}>Длительность</label>`);
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
                                    _push6(`<label class="text-caption text-grey-darken-1 d-block mb-1" data-v-0ce70d27${_scopeId5}>Категория</label>`);
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
                                    _push6(`<label class="text-caption text-grey-darken-1 d-block mb-1" data-v-0ce70d27${_scopeId5}>Уроков</label>`);
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
                        _push4(`<div class="d-flex ga-2" data-v-0ce70d27${_scopeId3}>`);
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
                              class: "mb-4",
                              onInput: generateSlug
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mb-6" }, [
                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Slug (URL)"),
                            createVNode(VTextField, {
                              modelValue: unref(form).slug,
                              "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                              placeholder: "kurs-nazvanie",
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
                          createVNode("div", { class: "mb-6" }, [
                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Фотография курса"),
                            createVNode(VFileInput, {
                              modelValue: unref(imageFile),
                              "onUpdate:modelValue": [($event) => isRef(imageFile) ? imageFile.value = $event : null, handleImageUpload],
                              accept: "image/*",
                              placeholder: "Выберите фотографию",
                              variant: "outlined",
                              density: "compact",
                              "hide-details": "",
                              class: "mb-4"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            unref(form).image ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mt-2"
                            }, [
                              createVNode("img", {
                                src: unref(form).image,
                                alt: "Preview",
                                style: { "max-width": "200px", "max-height": "200px", "border-radius": "8px" }
                              }, null, 8, ["src"])
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "mb-6" }, [
                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Что вы получите"),
                            createVNode("div", { class: "mb-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(form).benefits, (benefit, index) => {
                                return openBlock(), createBlock("div", {
                                  key: index,
                                  class: "d-flex ga-2 mb-2"
                                }, [
                                  createVNode(VTextField, {
                                    modelValue: unref(form).benefits[index],
                                    "onUpdate:modelValue": ($event) => unref(form).benefits[index] = $event,
                                    placeholder: "Преимущество курса",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": "",
                                    class: "flex-grow-1"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VBtn, {
                                    icon: "",
                                    size: "small",
                                    color: "red-darken-3",
                                    variant: "text",
                                    onClick: ($event) => removeBenefit(index)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { size: "20" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-delete")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]);
                              }), 128))
                            ]),
                            createVNode(VBtn, {
                              size: "small",
                              color: "blue-darken-3",
                              variant: "outlined",
                              onClick: addBenefit
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "20",
                                  class: "mr-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-plus")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Добавить преимущество ")
                              ]),
                              _: 1
                            })
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
                            class: "mb-4",
                            onInput: generateSlug
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mb-6" }, [
                          createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Slug (URL)"),
                          createVNode(VTextField, {
                            modelValue: unref(form).slug,
                            "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                            placeholder: "kurs-nazvanie",
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
                        createVNode("div", { class: "mb-6" }, [
                          createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Фотография курса"),
                          createVNode(VFileInput, {
                            modelValue: unref(imageFile),
                            "onUpdate:modelValue": [($event) => isRef(imageFile) ? imageFile.value = $event : null, handleImageUpload],
                            accept: "image/*",
                            placeholder: "Выберите фотографию",
                            variant: "outlined",
                            density: "compact",
                            "hide-details": "",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(form).image ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mt-2"
                          }, [
                            createVNode("img", {
                              src: unref(form).image,
                              alt: "Preview",
                              style: { "max-width": "200px", "max-height": "200px", "border-radius": "8px" }
                            }, null, 8, ["src"])
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "mb-6" }, [
                          createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Что вы получите"),
                          createVNode("div", { class: "mb-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).benefits, (benefit, index) => {
                              return openBlock(), createBlock("div", {
                                key: index,
                                class: "d-flex ga-2 mb-2"
                              }, [
                                createVNode(VTextField, {
                                  modelValue: unref(form).benefits[index],
                                  "onUpdate:modelValue": ($event) => unref(form).benefits[index] = $event,
                                  placeholder: "Преимущество курса",
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": "",
                                  class: "flex-grow-1"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VBtn, {
                                  icon: "",
                                  size: "small",
                                  color: "red-darken-3",
                                  variant: "text",
                                  onClick: ($event) => removeBenefit(index)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { size: "20" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-delete")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]);
                            }), 128))
                          ]),
                          createVNode(VBtn, {
                            size: "small",
                            color: "blue-darken-3",
                            variant: "outlined",
                            onClick: addBenefit
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                size: "20",
                                class: "mr-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-plus")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Добавить преимущество ")
                            ]),
                            _: 1
                          })
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
                  _push3(`<div class="preview-card" data-v-0ce70d27${_scopeId2}><p class="text-caption text-grey-darken-1 font-weight-medium mb-4" data-v-0ce70d27${_scopeId2}>Предпросмотр</p><div class="mb-4" data-v-0ce70d27${_scopeId2}><p class="text-caption text-grey-darken-1" data-v-0ce70d27${_scopeId2}>Название</p><p class="text-body-2 font-weight-medium" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-0ce70d27${_scopeId2}>${ssrInterpolate(unref(form).title || "Название курса")}</p></div><div class="mb-4" data-v-0ce70d27${_scopeId2}><p class="text-caption text-grey-darken-1" data-v-0ce70d27${_scopeId2}>Цена</p><p class="text-h6 font-weight-bold" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-0ce70d27${_scopeId2}>${ssrInterpolate(unref(form).price ? `${unref(form).price} ₽` : "0 ₽")}</p></div><div class="mb-4" data-v-0ce70d27${_scopeId2}><p class="text-caption text-grey-darken-1" data-v-0ce70d27${_scopeId2}>Категория</p>`);
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
                  _push3(`</div><div class="mb-4" data-v-0ce70d27${_scopeId2}><p class="text-caption text-grey-darken-1" data-v-0ce70d27${_scopeId2}>Статус</p>`);
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
                  _push3(`<div data-v-0ce70d27${_scopeId2}><p class="text-caption text-grey-darken-1" data-v-0ce70d27${_scopeId2}>Описание</p><p class="text-body-2" data-v-0ce70d27${_scopeId2}>${ssrInterpolate(unref(form).description || "Описание курса")}</p></div></div>`);
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
                          class: "mb-4",
                          onInput: generateSlug
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Slug (URL)"),
                        createVNode(VTextField, {
                          modelValue: unref(form).slug,
                          "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                          placeholder: "kurs-nazvanie",
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
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Фотография курса"),
                        createVNode(VFileInput, {
                          modelValue: unref(imageFile),
                          "onUpdate:modelValue": [($event) => isRef(imageFile) ? imageFile.value = $event : null, handleImageUpload],
                          accept: "image/*",
                          placeholder: "Выберите фотографию",
                          variant: "outlined",
                          density: "compact",
                          "hide-details": "",
                          class: "mb-4"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(form).image ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mt-2"
                        }, [
                          createVNode("img", {
                            src: unref(form).image,
                            alt: "Preview",
                            style: { "max-width": "200px", "max-height": "200px", "border-radius": "8px" }
                          }, null, 8, ["src"])
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Что вы получите"),
                        createVNode("div", { class: "mb-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(form).benefits, (benefit, index) => {
                            return openBlock(), createBlock("div", {
                              key: index,
                              class: "d-flex ga-2 mb-2"
                            }, [
                              createVNode(VTextField, {
                                modelValue: unref(form).benefits[index],
                                "onUpdate:modelValue": ($event) => unref(form).benefits[index] = $event,
                                placeholder: "Преимущество курса",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": "",
                                class: "flex-grow-1"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VBtn, {
                                icon: "",
                                size: "small",
                                color: "red-darken-3",
                                variant: "text",
                                onClick: ($event) => removeBenefit(index)
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { size: "20" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-delete")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]);
                          }), 128))
                        ]),
                        createVNode(VBtn, {
                          size: "small",
                          color: "blue-darken-3",
                          variant: "outlined",
                          onClick: addBenefit
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              size: "20",
                              class: "mr-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-plus")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Добавить преимущество ")
                          ]),
                          _: 1
                        })
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
const _new = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0ce70d27"]]);

export { _new as default };
//# sourceMappingURL=new-BZ8WaBCB.mjs.map
