import { defineComponent, ref, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, isRef, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { n as navigateTo } from './server.mjs';
import { u as useSeoMeta } from './composables-CsgbRhqC.mjs';
import { V as VApp, a as VMain } from './VMain-_oYNW9Kv.mjs';
import { V as VAppBar, a as VContainer } from './VAppBar-Drwdp8qS.mjs';
import { V as VBtn } from './VBtn-p5cu1pGV.mjs';
import { V as VIcon } from './index-C1EJcibQ.mjs';
import { V as VSpacer } from './VSpacer-B2jXCgcb.mjs';
import { V as VRow, a as VCol } from './VRow-CwXPvlwe.mjs';
import { V as VCard, a as VCardTitle, b as VCardText } from './VCard-DZcCz6yh.mjs';
import { V as VChip } from './VChip-nD7Rsxz9.mjs';
import { V as VProgressLinear } from './position-D2_Ao4AV.mjs';
import { V as VDialog } from './VDialog-BNgFzdG_.mjs';
import { V as VList, a as VListItem, c as VListItemTitle, d as VListItemSubtitle } from './VList-B7WBdDJv.mjs';
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
import './ssrBoot-ZQn7gOuX.mjs';
import './VAvatar-DVIor7ga.mjs';
import './VOverlay-BtXALeZH.mjs';
import './forwardRefs-CAP5b9ad.mjs';
import './scopeId-DrHQwwj5.mjs';
import './VDivider-Batqhoho.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const showCourseDialog = ref(false);
    const selectedCourse = ref(null);
    const courses = ref([]);
    ref(true);
    const selectCourse = (course) => {
      selectedCourse.value = course;
      showCourseDialog.value = true;
    };
    const watchLesson = (lesson) => {
      console.log("Просмотр урока:", lesson.title);
    };
    const logout = () => {
      navigateTo("/");
    };
    useSeoMeta({
      title: "Личный кабинет"
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
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "",
                          to: "/",
                          class: "mr-3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-home`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-home")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-home")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="text-h6 font-weight-bold" style="${ssrRenderStyle({ "color": "#00DC82" })}"${_scopeId3}> ✂️ Личный кабинет </div>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "",
                          to: "/profile",
                          class: "mr-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-account`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-account")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-account")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "text",
                          size: "small",
                          onClick: logout
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Выйти`);
                            } else {
                              return [
                                createTextVNode("Выйти")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            icon: "",
                            to: "/",
                            class: "mr-3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-home")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", {
                            class: "text-h6 font-weight-bold",
                            style: { "color": "#00DC82" }
                          }, " ✂️ Личный кабинет "),
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            icon: "",
                            to: "/profile",
                            class: "mr-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-account")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            variant: "text",
                            size: "small",
                            onClick: logout
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Выйти")
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
                        createVNode(VBtn, {
                          icon: "",
                          to: "/",
                          class: "mr-3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-home")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", {
                          class: "text-h6 font-weight-bold",
                          style: { "color": "#00DC82" }
                        }, " ✂️ Личный кабинет "),
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          icon: "",
                          to: "/profile",
                          class: "mr-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-account")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          variant: "text",
                          size: "small",
                          onClick: logout
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Выйти")
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
            _push2(ssrRenderComponent(VMain, { class: "bg-grey-lighten-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, { class: "py-8" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-h4 font-weight-bold mb-6"${_scopeId3}>Мои курсы</h1>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(courses), (course) => {
                                _push5(ssrRenderComponent(VCol, {
                                  key: course.id,
                                  cols: "12",
                                  md: "6",
                                  lg: "4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCard, {
                                        class: "pa-4",
                                        style: { "border-radius": "12px", "cursor": "pointer" },
                                        onClick: ($event) => selectCourse(course)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="mb-3"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VChip, {
                                              size: "small",
                                              color: "green-darken-3",
                                              "text-color": "white"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(course.progress)}% завершено `);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(course.progress) + "% завершено ", 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</div><h3 class="text-h6 font-weight-bold mb-2"${_scopeId6}>${ssrInterpolate(course.title)}</h3><p class="text-body-2 text-grey-darken-1 mb-3"${_scopeId6}>${ssrInterpolate(course.description)}</p>`);
                                            _push7(ssrRenderComponent(VProgressLinear, {
                                              value: course.progress,
                                              color: "green-darken-3",
                                              class: "mb-3"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<div class="d-flex justify-space-between align-center"${_scopeId6}><span class="text-caption text-grey-darken-1"${_scopeId6}>${ssrInterpolate(course.completedLessons)}/${ssrInterpolate(course.totalLessons)} уроков</span>`);
                                            _push7(ssrRenderComponent(VIcon, {
                                              size: "20",
                                              color: "green-darken-3"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-arrow-right`);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-arrow-right")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "mb-3" }, [
                                                createVNode(VChip, {
                                                  size: "small",
                                                  color: "green-darken-3",
                                                  "text-color": "white"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(course.progress) + "% завершено ", 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              createVNode("h3", { class: "text-h6 font-weight-bold mb-2" }, toDisplayString(course.title), 1),
                                              createVNode("p", { class: "text-body-2 text-grey-darken-1 mb-3" }, toDisplayString(course.description), 1),
                                              createVNode(VProgressLinear, {
                                                value: course.progress,
                                                color: "green-darken-3",
                                                class: "mb-3"
                                              }, null, 8, ["value"]),
                                              createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                                createVNode("span", { class: "text-caption text-grey-darken-1" }, toDisplayString(course.completedLessons) + "/" + toDisplayString(course.totalLessons) + " уроков", 1),
                                                createVNode(VIcon, {
                                                  size: "20",
                                                  color: "green-darken-3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-arrow-right")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCard, {
                                          class: "pa-4",
                                          style: { "border-radius": "12px", "cursor": "pointer" },
                                          onClick: ($event) => selectCourse(course)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "mb-3" }, [
                                              createVNode(VChip, {
                                                size: "small",
                                                color: "green-darken-3",
                                                "text-color": "white"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(course.progress) + "% завершено ", 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            createVNode("h3", { class: "text-h6 font-weight-bold mb-2" }, toDisplayString(course.title), 1),
                                            createVNode("p", { class: "text-body-2 text-grey-darken-1 mb-3" }, toDisplayString(course.description), 1),
                                            createVNode(VProgressLinear, {
                                              value: course.progress,
                                              color: "green-darken-3",
                                              class: "mb-3"
                                            }, null, 8, ["value"]),
                                            createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                              createVNode("span", { class: "text-caption text-grey-darken-1" }, toDisplayString(course.completedLessons) + "/" + toDisplayString(course.totalLessons) + " уроков", 1),
                                              createVNode(VIcon, {
                                                size: "20",
                                                color: "green-darken-3"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-arrow-right")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
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
                                    md: "6",
                                    lg: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        class: "pa-4",
                                        style: { "border-radius": "12px", "cursor": "pointer" },
                                        onClick: ($event) => selectCourse(course)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "mb-3" }, [
                                            createVNode(VChip, {
                                              size: "small",
                                              color: "green-darken-3",
                                              "text-color": "white"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(course.progress) + "% завершено ", 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          createVNode("h3", { class: "text-h6 font-weight-bold mb-2" }, toDisplayString(course.title), 1),
                                          createVNode("p", { class: "text-body-2 text-grey-darken-1 mb-3" }, toDisplayString(course.description), 1),
                                          createVNode(VProgressLinear, {
                                            value: course.progress,
                                            color: "green-darken-3",
                                            class: "mb-3"
                                          }, null, 8, ["value"]),
                                          createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                            createVNode("span", { class: "text-caption text-grey-darken-1" }, toDisplayString(course.completedLessons) + "/" + toDisplayString(course.totalLessons) + " уроков", 1),
                                            createVNode(VIcon, {
                                              size: "20",
                                              color: "green-darken-3"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-arrow-right")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDialog, {
                          modelValue: unref(showCourseDialog),
                          "onUpdate:modelValue": ($event) => isRef(showCourseDialog) ? showCourseDialog.value = $event : null,
                          "max-width": "900"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (unref(selectedCourse)) {
                                _push5(ssrRenderComponent(VCard, { style: { "border-radius": "12px" } }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCardTitle, { class: "pa-6 pb-2" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="d-flex align-center justify-space-between"${_scopeId6}><h2 class="text-h5 font-weight-bold"${_scopeId6}>${ssrInterpolate(unref(selectedCourse).title)}</h2>`);
                                            _push7(ssrRenderComponent(VBtn, {
                                              icon: "",
                                              variant: "text",
                                              onClick: ($event) => showCourseDialog.value = false
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VIcon, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`mdi-close`);
                                                      } else {
                                                        return [
                                                          createTextVNode("mdi-close")
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VIcon, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-close")
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
                                              createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                                                createVNode("h2", { class: "text-h5 font-weight-bold" }, toDisplayString(unref(selectedCourse).title), 1),
                                                createVNode(VBtn, {
                                                  icon: "",
                                                  variant: "text",
                                                  onClick: ($event) => showCourseDialog.value = false
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-close")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCardText, { class: "pa-6" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<h3 class="text-h6 font-weight-bold mb-4"${_scopeId6}>Уроки</h3>`);
                                            _push7(ssrRenderComponent(VList, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<!--[-->`);
                                                  ssrRenderList(unref(selectedCourse).lessons, (lesson, index) => {
                                                    _push8(ssrRenderComponent(VListItem, {
                                                      key: index,
                                                      class: "mb-2"
                                                    }, {
                                                      prepend: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(VIcon, {
                                                            color: lesson.completed ? "green-darken-3" : "grey-lighten-1"
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(lesson.completed ? "mdi-check-circle" : "mdi-circle-outline")}`);
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(lesson.completed ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(VIcon, {
                                                              color: lesson.completed ? "green-darken-3" : "grey-lighten-1"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(lesson.completed ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["color"])
                                                          ];
                                                        }
                                                      }),
                                                      append: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(VBtn, {
                                                            size: "small",
                                                            variant: "text",
                                                            color: "green-darken-3",
                                                            disabled: !lesson.available,
                                                            onClick: ($event) => watchLesson(lesson)
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(lesson.completed ? "Пересмотреть" : "Смотреть")}`);
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(lesson.completed ? "Пересмотреть" : "Смотреть"), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(VBtn, {
                                                              size: "small",
                                                              variant: "text",
                                                              color: "green-darken-3",
                                                              disabled: !lesson.available,
                                                              onClick: ($event) => watchLesson(lesson)
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(lesson.completed ? "Пересмотреть" : "Смотреть"), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["disabled", "onClick"])
                                                          ];
                                                        }
                                                      }),
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(VListItemTitle, { class: "font-weight-medium" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(lesson.title)}`);
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(lesson.title), 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(ssrRenderComponent(VListItemSubtitle, null, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`${ssrInterpolate(lesson.duration)} мин `);
                                                              } else {
                                                                return [
                                                                  createTextVNode(toDisplayString(lesson.duration) + " мин ", 1)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(lesson.title), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(VListItemSubtitle, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(lesson.duration) + " мин ", 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  });
                                                  _push8(`<!--]-->`);
                                                } else {
                                                  return [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedCourse).lessons, (lesson, index) => {
                                                      return openBlock(), createBlock(VListItem, {
                                                        key: index,
                                                        class: "mb-2"
                                                      }, {
                                                        prepend: withCtx(() => [
                                                          createVNode(VIcon, {
                                                            color: lesson.completed ? "green-darken-3" : "grey-lighten-1"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(lesson.completed ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["color"])
                                                        ]),
                                                        append: withCtx(() => [
                                                          createVNode(VBtn, {
                                                            size: "small",
                                                            variant: "text",
                                                            color: "green-darken-3",
                                                            disabled: !lesson.available,
                                                            onClick: ($event) => watchLesson(lesson)
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(lesson.completed ? "Пересмотреть" : "Смотреть"), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["disabled", "onClick"])
                                                        ]),
                                                        default: withCtx(() => [
                                                          createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(lesson.title), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(VListItemSubtitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(lesson.duration) + " мин ", 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1024);
                                                    }), 128))
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Уроки"),
                                              createVNode(VList, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedCourse).lessons, (lesson, index) => {
                                                    return openBlock(), createBlock(VListItem, {
                                                      key: index,
                                                      class: "mb-2"
                                                    }, {
                                                      prepend: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          color: lesson.completed ? "green-darken-3" : "grey-lighten-1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(lesson.completed ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["color"])
                                                      ]),
                                                      append: withCtx(() => [
                                                        createVNode(VBtn, {
                                                          size: "small",
                                                          variant: "text",
                                                          color: "green-darken-3",
                                                          disabled: !lesson.available,
                                                          onClick: ($event) => watchLesson(lesson)
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(lesson.completed ? "Пересмотреть" : "Смотреть"), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["disabled", "onClick"])
                                                      ]),
                                                      default: withCtx(() => [
                                                        createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(lesson.title), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(VListItemSubtitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(lesson.duration) + " мин ", 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
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
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                                              createVNode("h2", { class: "text-h5 font-weight-bold" }, toDisplayString(unref(selectedCourse).title), 1),
                                              createVNode(VBtn, {
                                                icon: "",
                                                variant: "text",
                                                onClick: ($event) => showCourseDialog.value = false
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-close")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCardText, { class: "pa-6" }, {
                                          default: withCtx(() => [
                                            createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Уроки"),
                                            createVNode(VList, null, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedCourse).lessons, (lesson, index) => {
                                                  return openBlock(), createBlock(VListItem, {
                                                    key: index,
                                                    class: "mb-2"
                                                  }, {
                                                    prepend: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        color: lesson.completed ? "green-darken-3" : "grey-lighten-1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(lesson.completed ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["color"])
                                                    ]),
                                                    append: withCtx(() => [
                                                      createVNode(VBtn, {
                                                        size: "small",
                                                        variant: "text",
                                                        color: "green-darken-3",
                                                        disabled: !lesson.available,
                                                        onClick: ($event) => watchLesson(lesson)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(lesson.completed ? "Пересмотреть" : "Смотреть"), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["disabled", "onClick"])
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(lesson.title), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(VListItemSubtitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(lesson.duration) + " мин ", 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
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
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                unref(selectedCourse) ? (openBlock(), createBlock(VCard, {
                                  key: 0,
                                  style: { "border-radius": "12px" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                                          createVNode("h2", { class: "text-h5 font-weight-bold" }, toDisplayString(unref(selectedCourse).title), 1),
                                          createVNode(VBtn, {
                                            icon: "",
                                            variant: "text",
                                            onClick: ($event) => showCourseDialog.value = false
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-close")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, { class: "pa-6" }, {
                                      default: withCtx(() => [
                                        createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Уроки"),
                                        createVNode(VList, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedCourse).lessons, (lesson, index) => {
                                              return openBlock(), createBlock(VListItem, {
                                                key: index,
                                                class: "mb-2"
                                              }, {
                                                prepend: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    color: lesson.completed ? "green-darken-3" : "grey-lighten-1"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(lesson.completed ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"])
                                                ]),
                                                append: withCtx(() => [
                                                  createVNode(VBtn, {
                                                    size: "small",
                                                    variant: "text",
                                                    color: "green-darken-3",
                                                    disabled: !lesson.available,
                                                    onClick: ($event) => watchLesson(lesson)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(lesson.completed ? "Пересмотреть" : "Смотреть"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["disabled", "onClick"])
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(lesson.title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(VListItemSubtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(lesson.duration) + " мин ", 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
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
                                  _: 1
                                })) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h1", { class: "text-h4 font-weight-bold mb-6" }, "Мои курсы"),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(courses), (course) => {
                                return openBlock(), createBlock(VCol, {
                                  key: course.id,
                                  cols: "12",
                                  md: "6",
                                  lg: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      class: "pa-4",
                                      style: { "border-radius": "12px", "cursor": "pointer" },
                                      onClick: ($event) => selectCourse(course)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "mb-3" }, [
                                          createVNode(VChip, {
                                            size: "small",
                                            color: "green-darken-3",
                                            "text-color": "white"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(course.progress) + "% завершено ", 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        createVNode("h3", { class: "text-h6 font-weight-bold mb-2" }, toDisplayString(course.title), 1),
                                        createVNode("p", { class: "text-body-2 text-grey-darken-1 mb-3" }, toDisplayString(course.description), 1),
                                        createVNode(VProgressLinear, {
                                          value: course.progress,
                                          color: "green-darken-3",
                                          class: "mb-3"
                                        }, null, 8, ["value"]),
                                        createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                          createVNode("span", { class: "text-caption text-grey-darken-1" }, toDisplayString(course.completedLessons) + "/" + toDisplayString(course.totalLessons) + " уроков", 1),
                                          createVNode(VIcon, {
                                            size: "20",
                                            color: "green-darken-3"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-arrow-right")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          }),
                          createVNode(VDialog, {
                            modelValue: unref(showCourseDialog),
                            "onUpdate:modelValue": ($event) => isRef(showCourseDialog) ? showCourseDialog.value = $event : null,
                            "max-width": "900"
                          }, {
                            default: withCtx(() => [
                              unref(selectedCourse) ? (openBlock(), createBlock(VCard, {
                                key: 0,
                                style: { "border-radius": "12px" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                                        createVNode("h2", { class: "text-h5 font-weight-bold" }, toDisplayString(unref(selectedCourse).title), 1),
                                        createVNode(VBtn, {
                                          icon: "",
                                          variant: "text",
                                          onClick: ($event) => showCourseDialog.value = false
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, null, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-close")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, { class: "pa-6" }, {
                                    default: withCtx(() => [
                                      createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Уроки"),
                                      createVNode(VList, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedCourse).lessons, (lesson, index) => {
                                            return openBlock(), createBlock(VListItem, {
                                              key: index,
                                              class: "mb-2"
                                            }, {
                                              prepend: withCtx(() => [
                                                createVNode(VIcon, {
                                                  color: lesson.completed ? "green-darken-3" : "grey-lighten-1"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(lesson.completed ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"])
                                              ]),
                                              append: withCtx(() => [
                                                createVNode(VBtn, {
                                                  size: "small",
                                                  variant: "text",
                                                  color: "green-darken-3",
                                                  disabled: !lesson.available,
                                                  onClick: ($event) => watchLesson(lesson)
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(lesson.completed ? "Пересмотреть" : "Смотреть"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["disabled", "onClick"])
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(lesson.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(VListItemSubtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(lesson.duration) + " мин ", 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
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
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, { class: "py-8" }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "text-h4 font-weight-bold mb-6" }, "Мои курсы"),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(courses), (course) => {
                              return openBlock(), createBlock(VCol, {
                                key: course.id,
                                cols: "12",
                                md: "6",
                                lg: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    class: "pa-4",
                                    style: { "border-radius": "12px", "cursor": "pointer" },
                                    onClick: ($event) => selectCourse(course)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "mb-3" }, [
                                        createVNode(VChip, {
                                          size: "small",
                                          color: "green-darken-3",
                                          "text-color": "white"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(course.progress) + "% завершено ", 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      createVNode("h3", { class: "text-h6 font-weight-bold mb-2" }, toDisplayString(course.title), 1),
                                      createVNode("p", { class: "text-body-2 text-grey-darken-1 mb-3" }, toDisplayString(course.description), 1),
                                      createVNode(VProgressLinear, {
                                        value: course.progress,
                                        color: "green-darken-3",
                                        class: "mb-3"
                                      }, null, 8, ["value"]),
                                      createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                        createVNode("span", { class: "text-caption text-grey-darken-1" }, toDisplayString(course.completedLessons) + "/" + toDisplayString(course.totalLessons) + " уроков", 1),
                                        createVNode(VIcon, {
                                          size: "20",
                                          color: "green-darken-3"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-arrow-right")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        }),
                        createVNode(VDialog, {
                          modelValue: unref(showCourseDialog),
                          "onUpdate:modelValue": ($event) => isRef(showCourseDialog) ? showCourseDialog.value = $event : null,
                          "max-width": "900"
                        }, {
                          default: withCtx(() => [
                            unref(selectedCourse) ? (openBlock(), createBlock(VCard, {
                              key: 0,
                              style: { "border-radius": "12px" }
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                                      createVNode("h2", { class: "text-h5 font-weight-bold" }, toDisplayString(unref(selectedCourse).title), 1),
                                      createVNode(VBtn, {
                                        icon: "",
                                        variant: "text",
                                        onClick: ($event) => showCourseDialog.value = false
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-close")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "pa-6" }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Уроки"),
                                    createVNode(VList, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedCourse).lessons, (lesson, index) => {
                                          return openBlock(), createBlock(VListItem, {
                                            key: index,
                                            class: "mb-2"
                                          }, {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, {
                                                color: lesson.completed ? "green-darken-3" : "grey-lighten-1"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(lesson.completed ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"])
                                            ]),
                                            append: withCtx(() => [
                                              createVNode(VBtn, {
                                                size: "small",
                                                variant: "text",
                                                color: "green-darken-3",
                                                disabled: !lesson.available,
                                                onClick: ($event) => watchLesson(lesson)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(lesson.completed ? "Пересмотреть" : "Смотреть"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["disabled", "onClick"])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(lesson.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(lesson.duration) + " мин ", 1)
                                                ]),
                                                _: 2
                                              }, 1024)
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
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
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
                      createVNode(VBtn, {
                        icon: "",
                        to: "/",
                        class: "mr-3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-home")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", {
                        class: "text-h6 font-weight-bold",
                        style: { "color": "#00DC82" }
                      }, " ✂️ Личный кабинет "),
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        icon: "",
                        to: "/profile",
                        class: "mr-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-account")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        variant: "text",
                        size: "small",
                        onClick: logout
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Выйти")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VMain, { class: "bg-grey-lighten-4" }, {
                default: withCtx(() => [
                  createVNode(VContainer, { class: "py-8" }, {
                    default: withCtx(() => [
                      createVNode("h1", { class: "text-h4 font-weight-bold mb-6" }, "Мои курсы"),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(courses), (course) => {
                            return openBlock(), createBlock(VCol, {
                              key: course.id,
                              cols: "12",
                              md: "6",
                              lg: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  class: "pa-4",
                                  style: { "border-radius": "12px", "cursor": "pointer" },
                                  onClick: ($event) => selectCourse(course)
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mb-3" }, [
                                      createVNode(VChip, {
                                        size: "small",
                                        color: "green-darken-3",
                                        "text-color": "white"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(course.progress) + "% завершено ", 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    createVNode("h3", { class: "text-h6 font-weight-bold mb-2" }, toDisplayString(course.title), 1),
                                    createVNode("p", { class: "text-body-2 text-grey-darken-1 mb-3" }, toDisplayString(course.description), 1),
                                    createVNode(VProgressLinear, {
                                      value: course.progress,
                                      color: "green-darken-3",
                                      class: "mb-3"
                                    }, null, 8, ["value"]),
                                    createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                      createVNode("span", { class: "text-caption text-grey-darken-1" }, toDisplayString(course.completedLessons) + "/" + toDisplayString(course.totalLessons) + " уроков", 1),
                                      createVNode(VIcon, {
                                        size: "20",
                                        color: "green-darken-3"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-arrow-right")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      }),
                      createVNode(VDialog, {
                        modelValue: unref(showCourseDialog),
                        "onUpdate:modelValue": ($event) => isRef(showCourseDialog) ? showCourseDialog.value = $event : null,
                        "max-width": "900"
                      }, {
                        default: withCtx(() => [
                          unref(selectedCourse) ? (openBlock(), createBlock(VCard, {
                            key: 0,
                            style: { "border-radius": "12px" }
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                                    createVNode("h2", { class: "text-h5 font-weight-bold" }, toDisplayString(unref(selectedCourse).title), 1),
                                    createVNode(VBtn, {
                                      icon: "",
                                      variant: "text",
                                      onClick: ($event) => showCourseDialog.value = false
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, null, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-close")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "pa-6" }, {
                                default: withCtx(() => [
                                  createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Уроки"),
                                  createVNode(VList, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedCourse).lessons, (lesson, index) => {
                                        return openBlock(), createBlock(VListItem, {
                                          key: index,
                                          class: "mb-2"
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, {
                                              color: lesson.completed ? "green-darken-3" : "grey-lighten-1"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(lesson.completed ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ]),
                                          append: withCtx(() => [
                                            createVNode(VBtn, {
                                              size: "small",
                                              variant: "text",
                                              color: "green-darken-3",
                                              disabled: !lesson.available,
                                              onClick: ($event) => watchLesson(lesson)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(lesson.completed ? "Пересмотреть" : "Смотреть"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["disabled", "onClick"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(lesson.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(lesson.duration) + " мин ", 1)
                                              ]),
                                              _: 2
                                            }, 1024)
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
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cabinet/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CaW4c-d4.mjs.map
