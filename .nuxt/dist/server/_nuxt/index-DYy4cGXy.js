import { _ as __nuxt_component_0 } from "./nuxt-link-D9A4Nul8.js";
import { defineComponent, ref, reactive, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, isRef, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { a as useSeoMeta } from "./composables-CzQ6E5OB.js";
import { V as VSpacer } from "./VSpacer-MQ44UyLy.js";
import { V as VBtn } from "./VBtn-B_84wQjp.js";
import { V as VIcon } from "./index-CXrZw6YX.js";
import { V as VTable } from "./VTable-BrCkqBLO.js";
import { V as VDialog } from "./VDialog-Duho1Cda.js";
import { V as VCard, a as VCardTitle, b as VCardText, c as VCardActions } from "./VCard-D87uBzTH.js";
import { V as VForm } from "./VForm-CAy4CCZm.js";
import { V as VTextField } from "./VTextField-B_sJgnT5.js";
import { _ as _export_sfc } from "../server.mjs";
import "/root/kroyfit/node_modules/ufo/dist/index.mjs";
import "/root/kroyfit/node_modules/defu/dist/defu.mjs";
import "/root/kroyfit/node_modules/@unhead/vue/dist/index.mjs";
import "./position-BO6_vXaU.js";
import "./VOverlay-Cv1Oq8N7.js";
import "./forwardRefs-sHFik_ks.js";
import "./scopeId-nQs070UW.js";
import "./VAvatar-U7n8Lc6d.js";
import "./autofocus-BmpXWPzV.js";
import "/root/kroyfit/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/root/kroyfit/node_modules/hookable/dist/index.mjs";
import "/root/kroyfit/node_modules/unctx/dist/index.mjs";
import "/root/kroyfit/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "vue-router";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const users = ref([]);
    ref(true);
    const showCreateDialog = ref(false);
    const showEditDialog = ref(false);
    const showDeleteDialog = ref(false);
    const saving = ref(false);
    const deleting = ref(false);
    const newUser = reactive({
      name: "",
      email: "",
      password: "",
      vk: ""
    });
    const editingUser = reactive({
      id: "",
      name: "",
      email: "",
      vk: ""
    });
    const userToDelete = ref(null);
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
    const editUser = (user) => {
      editingUser.id = user.id;
      editingUser.name = user.name;
      editingUser.email = user.email;
      editingUser.vk = user.vk;
      showEditDialog.value = true;
    };
    const saveEditedUser = async () => {
      saving.value = true;
      try {
        console.log("📝 [Frontend] Сохранение пользователя:", editingUser);
        const response = await $fetch("/api/admin/settings", {
          method: "POST",
          body: {
            type: "user-update",
            data: {
              id: editingUser.id,
              name: editingUser.name,
              email: editingUser.email,
              vkId: editingUser.vk
            }
          }
        });
        console.log("✅ [Frontend] Пользователь обновлен:", response.user.id);
        const index2 = users.value.findIndex((u) => u.id === editingUser.id);
        if (index2 !== -1) {
          users.value[index2].name = editingUser.name;
          users.value[index2].email = editingUser.email;
          users.value[index2].vk = editingUser.vk;
        }
        showEditDialog.value = false;
      } catch (e) {
        console.error("❌ [Frontend] Ошибка сохранения:", e);
        alert("Ошибка: " + (e.data?.message || "Не удалось сохранить пользователя"));
      } finally {
        saving.value = false;
      }
    };
    const confirmDelete = (user) => {
      userToDelete.value = user;
      showDeleteDialog.value = true;
    };
    const deleteUser = async () => {
      if (!userToDelete.value) return;
      deleting.value = true;
      try {
        console.log("🗑️ [Frontend] Удаление пользователя:", userToDelete.value.id);
        const response = await $fetch("/api/admin/settings", {
          method: "POST",
          body: {
            type: "user-delete",
            data: {
              id: userToDelete.value.id
            }
          }
        });
        console.log("✅ [Frontend] Пользователь удален:", userToDelete.value.id);
        users.value = users.value.filter((u) => u.id !== userToDelete.value.id);
        showDeleteDialog.value = false;
        userToDelete.value = null;
      } catch (e) {
        console.error("❌ [Frontend] Ошибка удаления:", e);
        alert("Ошибка: " + (e.data?.message || "Не удалось удалить пользователя"));
      } finally {
        deleting.value = false;
      }
    };
    useSeoMeta({
      title: "Пользователи — Админка"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-5c70fa6a><div class="d-flex align-center mb-6" data-v-5c70fa6a><div data-v-5c70fa6a><h1 class="text-h4 font-weight-bold mb-1" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-5c70fa6a>Пользователи</h1><p class="text-body-2 text-grey-darken-1" data-v-5c70fa6a>Управление учениками</p></div>`);
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
            _push2(`<thead data-v-5c70fa6a${_scopeId}><tr data-v-5c70fa6a${_scopeId}><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-5c70fa6a${_scopeId}>Имя</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-5c70fa6a${_scopeId}>Email</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-5c70fa6a${_scopeId}>VK</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-5c70fa6a${_scopeId}>Курсов</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-5c70fa6a${_scopeId}>Дата</th><th class="text-left text-caption text-grey-darken-1 font-weight-medium" data-v-5c70fa6a${_scopeId}>Действия</th></tr></thead><tbody data-v-5c70fa6a${_scopeId}><!--[-->`);
            ssrRenderList(unref(users), (user) => {
              _push2(`<tr data-v-5c70fa6a${_scopeId}><td data-v-5c70fa6a${_scopeId}>`);
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
              _push2(`</td><td class="text-grey-darken-2" data-v-5c70fa6a${_scopeId}>${ssrInterpolate(user.email)}</td><td data-v-5c70fa6a${_scopeId}>`);
              if (user.vk) {
                _push2(`<a${ssrRenderAttr("href", `https://vk.com/id${user.vk}`)} target="_blank" class="text-decoration-none text-grey-darken-2" data-v-5c70fa6a${_scopeId}> VK ${ssrInterpolate(user.vk)}</a>`);
              } else {
                _push2(`<span class="text-grey-lighten-1" data-v-5c70fa6a${_scopeId}>—</span>`);
              }
              _push2(`</td><td class="text-grey-darken-2" data-v-5c70fa6a${_scopeId}>${ssrInterpolate(user.coursesCount)}</td><td class="text-grey-darken-2" data-v-5c70fa6a${_scopeId}>${ssrInterpolate(user.registered)}</td><td data-v-5c70fa6a${_scopeId}><div class="d-flex ga-1" data-v-5c70fa6a${_scopeId}>`);
              _push2(ssrRenderComponent(VBtn, {
                icon: "",
                size: "x-small",
                variant: "text",
                color: "blue-darken-2",
                onClick: ($event) => editUser(user),
                title: "Редактировать"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { size: "18" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`mdi-pencil`);
                        } else {
                          return [
                            createTextVNode("mdi-pencil")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, { size: "18" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-pencil")
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
                color: "red-darken-2",
                onClick: ($event) => confirmDelete(user),
                title: "Удалить"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, { size: "18" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`mdi-trash-can`);
                        } else {
                          return [
                            createTextVNode("mdi-trash-can")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, { size: "18" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-trash-can")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></td></tr>`);
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
                  createVNode("th", { class: "text-left text-caption text-grey-darken-1 font-weight-medium" }, "Дата"),
                  createVNode("th", { class: "text-left text-caption text-grey-darken-1 font-weight-medium" }, "Действия")
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
                    createVNode("td", { class: "text-grey-darken-2" }, toDisplayString(user.registered), 1),
                    createVNode("td", null, [
                      createVNode("div", { class: "d-flex ga-1" }, [
                        createVNode(VBtn, {
                          icon: "",
                          size: "x-small",
                          variant: "text",
                          color: "blue-darken-2",
                          onClick: ($event) => editUser(user),
                          title: "Редактировать"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { size: "18" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-pencil")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          icon: "",
                          size: "x-small",
                          variant: "text",
                          color: "red-darken-2",
                          onClick: ($event) => confirmDelete(user),
                          title: "Удалить"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { size: "18" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-trash-can")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ])
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
                        _push4(`<h2 class="text-h6 font-weight-bold" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-5c70fa6a${_scopeId3}>Создание пользователя</h2>`);
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
                              _push5(`<div class="mb-4" data-v-5c70fa6a${_scopeId4}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-5c70fa6a${_scopeId4}>Имя</label>`);
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(newUser).name,
                                "onUpdate:modelValue": ($event) => unref(newUser).name = $event,
                                placeholder: "Имя пользователя",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="mb-4" data-v-5c70fa6a${_scopeId4}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-5c70fa6a${_scopeId4}>Email</label>`);
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(newUser).email,
                                "onUpdate:modelValue": ($event) => unref(newUser).email = $event,
                                type: "email",
                                placeholder: "email@example.com",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="mb-4" data-v-5c70fa6a${_scopeId4}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-5c70fa6a${_scopeId4}>Пароль</label>`);
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(newUser).password,
                                "onUpdate:modelValue": ($event) => unref(newUser).password = $event,
                                type: "password",
                                placeholder: "••••••••",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="mb-4" data-v-5c70fa6a${_scopeId4}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-5c70fa6a${_scopeId4}>VK ID</label>`);
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(newUser).vk,
                                "onUpdate:modelValue": ($event) => unref(newUser).vk = $event,
                                placeholder: "123456789",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="d-flex ga-2 mt-2" data-v-5c70fa6a${_scopeId4}>`);
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
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(showEditDialog),
        "onUpdate:modelValue": ($event) => isRef(showEditDialog) ? showEditDialog.value = $event : null,
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
                        _push4(`<h2 class="text-h6 font-weight-bold" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-5c70fa6a${_scopeId3}>Редактирование пользователя</h2>`);
                      } else {
                        return [
                          createVNode("h2", {
                            class: "text-h6 font-weight-bold",
                            style: { "color": "#020617" }
                          }, "Редактирование пользователя")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pa-6 pt-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, { onSubmit: saveEditedUser }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mb-4" data-v-5c70fa6a${_scopeId4}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-5c70fa6a${_scopeId4}>Имя</label>`);
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(editingUser).name,
                                "onUpdate:modelValue": ($event) => unref(editingUser).name = $event,
                                placeholder: "Имя пользователя",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="mb-4" data-v-5c70fa6a${_scopeId4}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-5c70fa6a${_scopeId4}>Email</label>`);
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(editingUser).email,
                                "onUpdate:modelValue": ($event) => unref(editingUser).email = $event,
                                type: "email",
                                placeholder: "email@example.com",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="mb-4" data-v-5c70fa6a${_scopeId4}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-5c70fa6a${_scopeId4}>VK ID</label>`);
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(editingUser).vk,
                                "onUpdate:modelValue": ($event) => unref(editingUser).vk = $event,
                                placeholder: "123456789",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="d-flex ga-2 mt-2" data-v-5c70fa6a${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                type: "submit",
                                color: "green-darken-3",
                                variant: "flat",
                                loading: unref(saving),
                                style: { "border-radius": "8px" }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Сохранить `);
                                  } else {
                                    return [
                                      createTextVNode(" Сохранить ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                variant: "text",
                                color: "grey-darken-2",
                                onClick: ($event) => showEditDialog.value = false
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
                                    modelValue: unref(editingUser).name,
                                    "onUpdate:modelValue": ($event) => unref(editingUser).name = $event,
                                    placeholder: "Имя пользователя",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                  createVNode(VTextField, {
                                    modelValue: unref(editingUser).email,
                                    "onUpdate:modelValue": ($event) => unref(editingUser).email = $event,
                                    type: "email",
                                    placeholder: "email@example.com",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "VK ID"),
                                  createVNode(VTextField, {
                                    modelValue: unref(editingUser).vk,
                                    "onUpdate:modelValue": ($event) => unref(editingUser).vk = $event,
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
                                      createTextVNode(" Сохранить ")
                                    ]),
                                    _: 1
                                  }, 8, ["loading"]),
                                  createVNode(VBtn, {
                                    variant: "text",
                                    color: "grey-darken-2",
                                    onClick: ($event) => showEditDialog.value = false
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
                            onSubmit: withModifiers(saveEditedUser, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                                createVNode(VTextField, {
                                  modelValue: unref(editingUser).name,
                                  "onUpdate:modelValue": ($event) => unref(editingUser).name = $event,
                                  placeholder: "Имя пользователя",
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                createVNode(VTextField, {
                                  modelValue: unref(editingUser).email,
                                  "onUpdate:modelValue": ($event) => unref(editingUser).email = $event,
                                  type: "email",
                                  placeholder: "email@example.com",
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "VK ID"),
                                createVNode(VTextField, {
                                  modelValue: unref(editingUser).vk,
                                  "onUpdate:modelValue": ($event) => unref(editingUser).vk = $event,
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
                                    createTextVNode(" Сохранить ")
                                  ]),
                                  _: 1
                                }, 8, ["loading"]),
                                createVNode(VBtn, {
                                  variant: "text",
                                  color: "grey-darken-2",
                                  onClick: ($event) => showEditDialog.value = false
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
                        }, "Редактирование пользователя")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "pa-6 pt-2" }, {
                      default: withCtx(() => [
                        createVNode(VForm, {
                          onSubmit: withModifiers(saveEditedUser, ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-4" }, [
                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                              createVNode(VTextField, {
                                modelValue: unref(editingUser).name,
                                "onUpdate:modelValue": ($event) => unref(editingUser).name = $event,
                                placeholder: "Имя пользователя",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mb-4" }, [
                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                              createVNode(VTextField, {
                                modelValue: unref(editingUser).email,
                                "onUpdate:modelValue": ($event) => unref(editingUser).email = $event,
                                type: "email",
                                placeholder: "email@example.com",
                                variant: "outlined",
                                density: "compact",
                                "hide-details": ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mb-4" }, [
                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "VK ID"),
                              createVNode(VTextField, {
                                modelValue: unref(editingUser).vk,
                                "onUpdate:modelValue": ($event) => unref(editingUser).vk = $event,
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
                                  createTextVNode(" Сохранить ")
                                ]),
                                _: 1
                              }, 8, ["loading"]),
                              createVNode(VBtn, {
                                variant: "text",
                                color: "grey-darken-2",
                                onClick: ($event) => showEditDialog.value = false
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
                      }, "Редактирование пользователя")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "pa-6 pt-2" }, {
                    default: withCtx(() => [
                      createVNode(VForm, {
                        onSubmit: withModifiers(saveEditedUser, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                            createVNode(VTextField, {
                              modelValue: unref(editingUser).name,
                              "onUpdate:modelValue": ($event) => unref(editingUser).name = $event,
                              placeholder: "Имя пользователя",
                              variant: "outlined",
                              density: "compact",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                            createVNode(VTextField, {
                              modelValue: unref(editingUser).email,
                              "onUpdate:modelValue": ($event) => unref(editingUser).email = $event,
                              type: "email",
                              placeholder: "email@example.com",
                              variant: "outlined",
                              density: "compact",
                              "hide-details": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "VK ID"),
                            createVNode(VTextField, {
                              modelValue: unref(editingUser).vk,
                              "onUpdate:modelValue": ($event) => unref(editingUser).vk = $event,
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
                                createTextVNode(" Сохранить ")
                              ]),
                              _: 1
                            }, 8, ["loading"]),
                            createVNode(VBtn, {
                              variant: "text",
                              color: "grey-darken-2",
                              onClick: ($event) => showEditDialog.value = false
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
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(showDeleteDialog),
        "onUpdate:modelValue": ($event) => isRef(showDeleteDialog) ? showDeleteDialog.value = $event : null,
        "max-width": "400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { style: { "border-radius": "12px" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "pa-6 pb-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-h6 font-weight-bold" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-5c70fa6a${_scopeId3}>Удалить пользователя?</h2>`);
                      } else {
                        return [
                          createVNode("h2", {
                            class: "text-h6 font-weight-bold",
                            style: { "color": "#020617" }
                          }, "Удалить пользователя?")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "pa-6 pt-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-body-2 text-grey-darken-2 mb-4" data-v-5c70fa6a${_scopeId3}> Вы уверены, что хотите удалить пользователя <strong data-v-5c70fa6a${_scopeId3}>${ssrInterpolate(unref(userToDelete)?.name)}</strong>? </p><p class="text-caption text-grey-darken-1" data-v-5c70fa6a${_scopeId3}> Это действие нельзя отменить. </p>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-body-2 text-grey-darken-2 mb-4" }, [
                            createTextVNode(" Вы уверены, что хотите удалить пользователя "),
                            createVNode("strong", null, toDisplayString(unref(userToDelete)?.name), 1),
                            createTextVNode("? ")
                          ]),
                          createVNode("p", { class: "text-caption text-grey-darken-1" }, " Это действие нельзя отменить. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, { class: "pa-6 pt-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "text",
                          color: "grey-darken-2",
                          onClick: ($event) => showDeleteDialog.value = false
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
                        _push4(ssrRenderComponent(VBtn, {
                          color: "red-darken-2",
                          variant: "flat",
                          loading: unref(deleting),
                          onClick: deleteUser,
                          style: { "border-radius": "8px" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Удалить `);
                            } else {
                              return [
                                createTextVNode(" Удалить ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            variant: "text",
                            color: "grey-darken-2",
                            onClick: ($event) => showDeleteDialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Отмена ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "red-darken-2",
                            variant: "flat",
                            loading: unref(deleting),
                            onClick: deleteUser,
                            style: { "border-radius": "8px" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Удалить ")
                            ]),
                            _: 1
                          }, 8, ["loading"])
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
                        }, "Удалить пользователя?")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "pa-6 pt-2" }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-body-2 text-grey-darken-2 mb-4" }, [
                          createTextVNode(" Вы уверены, что хотите удалить пользователя "),
                          createVNode("strong", null, toDisplayString(unref(userToDelete)?.name), 1),
                          createTextVNode("? ")
                        ]),
                        createVNode("p", { class: "text-caption text-grey-darken-1" }, " Это действие нельзя отменить. ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, { class: "pa-6 pt-2" }, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          variant: "text",
                          color: "grey-darken-2",
                          onClick: ($event) => showDeleteDialog.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Отмена ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "red-darken-2",
                          variant: "flat",
                          loading: unref(deleting),
                          onClick: deleteUser,
                          style: { "border-radius": "8px" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Удалить ")
                          ]),
                          _: 1
                        }, 8, ["loading"])
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
                      }, "Удалить пользователя?")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "pa-6 pt-2" }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-body-2 text-grey-darken-2 mb-4" }, [
                        createTextVNode(" Вы уверены, что хотите удалить пользователя "),
                        createVNode("strong", null, toDisplayString(unref(userToDelete)?.name), 1),
                        createTextVNode("? ")
                      ]),
                      createVNode("p", { class: "text-caption text-grey-darken-1" }, " Это действие нельзя отменить. ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, { class: "pa-6 pt-2" }, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        variant: "text",
                        color: "grey-darken-2",
                        onClick: ($event) => showDeleteDialog.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Отмена ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "red-darken-2",
                        variant: "flat",
                        loading: unref(deleting),
                        onClick: deleteUser,
                        style: { "border-radius": "8px" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Удалить ")
                        ]),
                        _: 1
                      }, 8, ["loading"])
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5c70fa6a"]]);
export {
  index as default
};
//# sourceMappingURL=index-DYy4cGXy.js.map
