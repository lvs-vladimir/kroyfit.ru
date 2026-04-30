import { defineComponent, ref, reactive, withCtx, createTextVNode, createVNode, unref, withModifiers, toDisplayString, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRoute, a as useRouter } from './server.mjs';
import { u as useSeoMeta } from './composables-CsgbRhqC.mjs';
import { V as VBtn } from './VBtn-p5cu1pGV.mjs';
import { V as VIcon } from './index-C1EJcibQ.mjs';
import { V as VRow, a as VCol } from './VRow-CwXPvlwe.mjs';
import { V as VForm } from './VForm-CQaL3KUu.mjs';
import { V as VTextField } from './VTextField-Bqptx47Z.mjs';
import { V as VSelect } from './VSelect-4gYBnRL8.mjs';
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
import './VDivider-Batqhoho.mjs';
import './VOverlay-BtXALeZH.mjs';
import './scopeId-DrHQwwj5.mjs';
import './VChip-nD7Rsxz9.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    route.params.id;
    const courses = [
      { title: "Технология пошива", slug: "tekhnologiya-poshiva" },
      { title: "Мастер конструирования", slug: "master-konstruirovaniya" },
      { title: "Дамское бельё", slug: "damskoe-bele" }
    ];
    const saving = ref(false);
    const form = reactive({
      name: "Анна Иванова",
      email: "anna@example.com",
      password: "",
      vk: "123456",
      courses: ["tekhnologiya-poshiva"]
    });
    const saveUser = async () => {
      saving.value = true;
      try {
        console.log("Сохранение пользователя:", form);
        await new Promise((resolve) => setTimeout(resolve, 500));
        await router.push("/admin/users");
      } finally {
        saving.value = false;
      }
    };
    useSeoMeta({
      title: "Редактирование пользователя — Админка"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-bfca97aa><div class="d-flex align-center mb-6" data-v-bfca97aa>`);
      _push(ssrRenderComponent(VBtn, {
        icon: "",
        variant: "text",
        color: "grey-darken-2",
        to: "/admin/users",
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
      _push(`<div data-v-bfca97aa><h1 class="text-h4 font-weight-bold mb-1" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-bfca97aa> Редактирование пользователя </h1><p class="text-body-2 text-grey-darken-1" data-v-bfca97aa> Изменение данных ученика </p></div></div>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, { onSubmit: saveUser }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mb-4" data-v-bfca97aa${_scopeId3}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-bfca97aa${_scopeId3}>Имя</label>`);
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(form).name,
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          placeholder: "Имя пользователя",
                          variant: "outlined",
                          density: "compact",
                          "hide-details": "",
                          class: "mb-4"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="mb-4" data-v-bfca97aa${_scopeId3}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-bfca97aa${_scopeId3}>Email</label>`);
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          type: "email",
                          placeholder: "email@example.com",
                          variant: "outlined",
                          density: "compact",
                          "hide-details": "",
                          class: "mb-4"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="mb-4" data-v-bfca97aa${_scopeId3}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-bfca97aa${_scopeId3}>Пароль</label>`);
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          type: "password",
                          placeholder: "Оставьте пустым, чтобы не менять",
                          variant: "outlined",
                          density: "compact",
                          "hide-details": "",
                          class: "mb-4"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="mb-4" data-v-bfca97aa${_scopeId3}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-bfca97aa${_scopeId3}>VK ID</label>`);
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(form).vk,
                          "onUpdate:modelValue": ($event) => unref(form).vk = $event,
                          placeholder: "123456789",
                          variant: "outlined",
                          density: "compact",
                          "hide-details": "",
                          class: "mb-4"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="mb-4" data-v-bfca97aa${_scopeId3}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-bfca97aa${_scopeId3}>Купленные курсы</label>`);
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: unref(form).courses,
                          "onUpdate:modelValue": ($event) => unref(form).courses = $event,
                          items: courses,
                          "item-title": "title",
                          "item-value": "slug",
                          multiple: "",
                          chips: "",
                          variant: "outlined",
                          density: "compact",
                          "hide-details": "",
                          class: "mb-4"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="d-flex ga-2" data-v-bfca97aa${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, {
                          type: "submit",
                          color: "green-darken-3",
                          variant: "flat",
                          loading: unref(saving),
                          style: { "border-radius": "8px" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Сохранить `);
                            } else {
                              return [
                                createTextVNode(" Сохранить ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "text",
                          color: "grey-darken-2",
                          to: "/admin/users"
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
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                            createVNode(VTextField, {
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              placeholder: "Имя пользователя",
                              variant: "outlined",
                              density: "compact",
                              "hide-details": "",
                              class: "mb-4"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                            createVNode(VTextField, {
                              modelValue: unref(form).email,
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              type: "email",
                              placeholder: "email@example.com",
                              variant: "outlined",
                              density: "compact",
                              "hide-details": "",
                              class: "mb-4"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Пароль"),
                            createVNode(VTextField, {
                              modelValue: unref(form).password,
                              "onUpdate:modelValue": ($event) => unref(form).password = $event,
                              type: "password",
                              placeholder: "Оставьте пустым, чтобы не менять",
                              variant: "outlined",
                              density: "compact",
                              "hide-details": "",
                              class: "mb-4"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "VK ID"),
                            createVNode(VTextField, {
                              modelValue: unref(form).vk,
                              "onUpdate:modelValue": ($event) => unref(form).vk = $event,
                              placeholder: "123456789",
                              variant: "outlined",
                              density: "compact",
                              "hide-details": "",
                              class: "mb-4"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Купленные курсы"),
                            createVNode(VSelect, {
                              modelValue: unref(form).courses,
                              "onUpdate:modelValue": ($event) => unref(form).courses = $event,
                              items: courses,
                              "item-title": "title",
                              "item-value": "slug",
                              multiple: "",
                              chips: "",
                              variant: "outlined",
                              density: "compact",
                              "hide-details": "",
                              class: "mb-4"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "d-flex ga-2" }, [
                            createVNode(VBtn, {
                              type: "submit",
                              color: "green-darken-3",
                              variant: "flat",
                              loading: unref(saving),
                              style: { "border-radius": "8px" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Сохранить ")
                              ]),
                              _: 1
                            }, 8, ["loading"]),
                            createVNode(VBtn, {
                              variant: "text",
                              color: "grey-darken-2",
                              to: "/admin/users"
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
                      onSubmit: withModifiers(saveUser, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                          createVNode(VTextField, {
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            placeholder: "Имя пользователя",
                            variant: "outlined",
                            density: "compact",
                            "hide-details": "",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                          createVNode(VTextField, {
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            type: "email",
                            placeholder: "email@example.com",
                            variant: "outlined",
                            density: "compact",
                            "hide-details": "",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Пароль"),
                          createVNode(VTextField, {
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            type: "password",
                            placeholder: "Оставьте пустым, чтобы не менять",
                            variant: "outlined",
                            density: "compact",
                            "hide-details": "",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "VK ID"),
                          createVNode(VTextField, {
                            modelValue: unref(form).vk,
                            "onUpdate:modelValue": ($event) => unref(form).vk = $event,
                            placeholder: "123456789",
                            variant: "outlined",
                            density: "compact",
                            "hide-details": "",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Купленные курсы"),
                          createVNode(VSelect, {
                            modelValue: unref(form).courses,
                            "onUpdate:modelValue": ($event) => unref(form).courses = $event,
                            items: courses,
                            "item-title": "title",
                            "item-value": "slug",
                            multiple: "",
                            chips: "",
                            variant: "outlined",
                            density: "compact",
                            "hide-details": "",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "d-flex ga-2" }, [
                          createVNode(VBtn, {
                            type: "submit",
                            color: "green-darken-3",
                            variant: "flat",
                            loading: unref(saving),
                            style: { "border-radius": "8px" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Сохранить ")
                            ]),
                            _: 1
                          }, 8, ["loading"]),
                          createVNode(VBtn, {
                            variant: "text",
                            color: "grey-darken-2",
                            to: "/admin/users"
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
                  _push3(`<div class="preview-card" data-v-bfca97aa${_scopeId2}><p class="text-caption text-grey-darken-1 font-weight-medium mb-4" data-v-bfca97aa${_scopeId2}>Информация</p><div class="mb-4" data-v-bfca97aa${_scopeId2}><p class="text-caption text-grey-darken-1" data-v-bfca97aa${_scopeId2}>Имя</p><p class="text-body-2 font-weight-medium" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-bfca97aa${_scopeId2}>${ssrInterpolate(unref(form).name || "Имя пользователя")}</p></div><div class="mb-4" data-v-bfca97aa${_scopeId2}><p class="text-caption text-grey-darken-1" data-v-bfca97aa${_scopeId2}>Email</p><p class="text-body-2" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-bfca97aa${_scopeId2}>${ssrInterpolate(unref(form).email || "email@example.com")}</p></div><div class="mb-4" data-v-bfca97aa${_scopeId2}><p class="text-caption text-grey-darken-1" data-v-bfca97aa${_scopeId2}>VK</p><p class="text-body-2" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-bfca97aa${_scopeId2}>`);
                  if (unref(form).vk) {
                    _push3(`<a${ssrRenderAttr("href", `https://vk.com/id${unref(form).vk}`)} target="_blank" class="text-decoration-none" data-v-bfca97aa${_scopeId2}> VK ${ssrInterpolate(unref(form).vk)}</a>`);
                  } else {
                    _push3(`<span class="text-grey-lighten-1" data-v-bfca97aa${_scopeId2}>—</span>`);
                  }
                  _push3(`</p></div><div class="mb-4" data-v-bfca97aa${_scopeId2}><p class="text-caption text-grey-darken-1" data-v-bfca97aa${_scopeId2}>Курсов</p><p class="text-h6 font-weight-bold" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-bfca97aa${_scopeId2}>${ssrInterpolate(unref(form).courses?.length || 0)}</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "preview-card" }, [
                      createVNode("p", { class: "text-caption text-grey-darken-1 font-weight-medium mb-4" }, "Информация"),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("p", { class: "text-caption text-grey-darken-1" }, "Имя"),
                        createVNode("p", {
                          class: "text-body-2 font-weight-medium",
                          style: { "color": "#020617" }
                        }, toDisplayString(unref(form).name || "Имя пользователя"), 1)
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("p", { class: "text-caption text-grey-darken-1" }, "Email"),
                        createVNode("p", {
                          class: "text-body-2",
                          style: { "color": "#020617" }
                        }, toDisplayString(unref(form).email || "email@example.com"), 1)
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("p", { class: "text-caption text-grey-darken-1" }, "VK"),
                        createVNode("p", {
                          class: "text-body-2",
                          style: { "color": "#020617" }
                        }, [
                          unref(form).vk ? (openBlock(), createBlock("a", {
                            key: 0,
                            href: `https://vk.com/id${unref(form).vk}`,
                            target: "_blank",
                            class: "text-decoration-none"
                          }, " VK " + toDisplayString(unref(form).vk), 9, ["href"])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-grey-lighten-1"
                          }, "—"))
                        ])
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("p", { class: "text-caption text-grey-darken-1" }, "Курсов"),
                        createVNode("p", {
                          class: "text-h6 font-weight-bold",
                          style: { "color": "#020617" }
                        }, toDisplayString(unref(form).courses?.length || 0), 1)
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
                    onSubmit: withModifiers(saveUser, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                        createVNode(VTextField, {
                          modelValue: unref(form).name,
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          placeholder: "Имя пользователя",
                          variant: "outlined",
                          density: "compact",
                          "hide-details": "",
                          class: "mb-4"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                        createVNode(VTextField, {
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          type: "email",
                          placeholder: "email@example.com",
                          variant: "outlined",
                          density: "compact",
                          "hide-details": "",
                          class: "mb-4"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Пароль"),
                        createVNode(VTextField, {
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          type: "password",
                          placeholder: "Оставьте пустым, чтобы не менять",
                          variant: "outlined",
                          density: "compact",
                          "hide-details": "",
                          class: "mb-4"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "VK ID"),
                        createVNode(VTextField, {
                          modelValue: unref(form).vk,
                          "onUpdate:modelValue": ($event) => unref(form).vk = $event,
                          placeholder: "123456789",
                          variant: "outlined",
                          density: "compact",
                          "hide-details": "",
                          class: "mb-4"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Купленные курсы"),
                        createVNode(VSelect, {
                          modelValue: unref(form).courses,
                          "onUpdate:modelValue": ($event) => unref(form).courses = $event,
                          items: courses,
                          "item-title": "title",
                          "item-value": "slug",
                          multiple: "",
                          chips: "",
                          variant: "outlined",
                          density: "compact",
                          "hide-details": "",
                          class: "mb-4"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "d-flex ga-2" }, [
                        createVNode(VBtn, {
                          type: "submit",
                          color: "green-darken-3",
                          variant: "flat",
                          loading: unref(saving),
                          style: { "border-radius": "8px" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Сохранить ")
                          ]),
                          _: 1
                        }, 8, ["loading"]),
                        createVNode(VBtn, {
                          variant: "text",
                          color: "grey-darken-2",
                          to: "/admin/users"
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
                    createVNode("p", { class: "text-caption text-grey-darken-1 font-weight-medium mb-4" }, "Информация"),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("p", { class: "text-caption text-grey-darken-1" }, "Имя"),
                      createVNode("p", {
                        class: "text-body-2 font-weight-medium",
                        style: { "color": "#020617" }
                      }, toDisplayString(unref(form).name || "Имя пользователя"), 1)
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("p", { class: "text-caption text-grey-darken-1" }, "Email"),
                      createVNode("p", {
                        class: "text-body-2",
                        style: { "color": "#020617" }
                      }, toDisplayString(unref(form).email || "email@example.com"), 1)
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("p", { class: "text-caption text-grey-darken-1" }, "VK"),
                      createVNode("p", {
                        class: "text-body-2",
                        style: { "color": "#020617" }
                      }, [
                        unref(form).vk ? (openBlock(), createBlock("a", {
                          key: 0,
                          href: `https://vk.com/id${unref(form).vk}`,
                          target: "_blank",
                          class: "text-decoration-none"
                        }, " VK " + toDisplayString(unref(form).vk), 9, ["href"])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-grey-lighten-1"
                        }, "—"))
                      ])
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("p", { class: "text-caption text-grey-darken-1" }, "Курсов"),
                      createVNode("p", {
                        class: "text-h6 font-weight-bold",
                        style: { "color": "#020617" }
                      }, toDisplayString(unref(form).courses?.length || 0), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/users/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bfca97aa"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-Dk-O-blu.mjs.map
