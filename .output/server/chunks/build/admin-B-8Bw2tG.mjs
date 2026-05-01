import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, isRef, toDisplayString, openBlock, createBlock, Fragment, renderList, renderSlot, shallowRef, computed, toRef, watch, nextTick, readonly, watchEffect, onScopeDispose, createElementVNode, Transition, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc, a as useRouter, u as useRoute, g as genericComponent, M as useRtl, l as provideTheme, U as useDisplay, c as useProxiedModel, a1 as useToggleScope, q as provideDefaults, t as convertToUnit, p as propsFactory, m as makeThemeProps, o as omit, a6 as makeDisplayProps } from './server.mjs';
import { u as useCookie } from './cookie-1eiVNd_S.mjs';
import { V as VApp, a as VMain, u as useLayoutItem, m as makeLayoutItemProps } from './VMain-DhrkeTRE.mjs';
import { V as VBtn } from './VBtn-Djm3DFQI.mjs';
import { V as VIcon, u as useBorder, E as useBackgroundColor, c as useElevation, e as useRounded, N as useRouter$1, Y as toPhysical, j as useRender, k as makeTagProps, o as makeRoundedProps, r as makeElevationProps, v as makeComponentProps, w as makeBorderProps, C as VDefaultsProvider } from './index-CeIkwuF-.mjs';
import { V as VSpacer } from './VSpacer-DwAbcE_h.mjs';
import { u as useScopeId, a as useFocusTrap, m as makeFocusTrapProps, c as makeDelayProps, b as useDelay } from './scopeId-B2pAe-pO.mjs';
import { u as useSsrBoot } from './ssrBoot-ZQn7gOuX.mjs';
import { a as VImg } from './VAvatar-CwPHByUG.mjs';
import { V as VCard } from './VCard-Dpos_d6S.mjs';
import { V as VList, a as VListItem, c as VListItemTitle } from './VList-BU_3CDSx.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';
import './ssr-BNaGEt3_.mjs';
import './position-DWaOuhIW.mjs';
import './VDivider-D0tL2N8t.mjs';

function useSticky({
  rootEl,
  isSticky,
  layoutItemStyles
}) {
  const isStuck = shallowRef(false);
  const stuckPosition = shallowRef(0);
  const stickyStyles = computed(() => {
    const side = typeof isStuck.value === "boolean" ? "top" : isStuck.value;
    return [isSticky.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, isStuck.value ? {
      [side]: convertToUnit(stuckPosition.value)
    } : {
      top: layoutItemStyles.value.top
    }];
  });
  return {
    isStuck,
    stickyStyles
  };
}
function useTouch({
  el,
  isActive,
  isTemporary,
  width,
  touchless,
  position
}) {
  computed(() => ["left", "right"].includes(position.value));
  const isDragging = shallowRef(false);
  const dragProgress = shallowRef(0);
  shallowRef(0);
  const dragStyles = computed(() => {
    return isDragging.value ? {
      transform: position.value === "left" ? `translateX(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "right" ? `translateX(calc(100% - ${dragProgress.value * width.value}px))` : position.value === "top" ? `translateY(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "bottom" ? `translateY(calc(100% - ${dragProgress.value * width.value}px))` : oops(),
      transition: "none"
    } : void 0;
  });
  useToggleScope(isDragging, () => {
    const transform = el.value?.style.transform ?? null;
    const transition = el.value?.style.transition ?? null;
    watchEffect(() => {
      el.value?.style.setProperty("transform", dragStyles.value?.transform || "none");
      el.value?.style.setProperty("transition", dragStyles.value?.transition || null);
    });
    onScopeDispose(() => {
      el.value?.style.setProperty("transform", transform);
      el.value?.style.setProperty("transition", transition);
    });
  });
  return {
    isDragging,
    dragProgress,
    dragStyles
  };
}
function oops() {
  throw new Error();
}
const locations = ["start", "end", "left", "right", "top", "bottom"];
const makeVNavigationDrawerProps = propsFactory({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: true
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (value) => locations.includes(value)
  },
  sticky: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDelayProps(),
  ...makeDisplayProps({
    mobile: null
  }),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...omit(makeFocusTrapProps(), ["disableInitialFocus"]),
  ...makeTagProps({
    tag: "nav"
  }),
  ...makeThemeProps()
}, "VNavigationDrawer");
const VNavigationDrawer = genericComponent()({
  name: "VNavigationDrawer",
  props: makeVNavigationDrawerProps(),
  emits: {
    "update:modelValue": (val) => true,
    "update:rail": (val) => true
  },
  setup(props, {
    attrs,
    emit,
    slots
  }) {
    const {
      isRtl
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const {
      roundedClasses
    } = useRounded(props);
    const router = useRouter$1();
    const isActive = useProxiedModel(props, "modelValue", null, (v) => !!v);
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      scopeId
    } = useScopeId();
    const rootEl = ref();
    const isHovering = shallowRef(false);
    const {
      runOpenDelay,
      runCloseDelay
    } = useDelay(props, (value) => {
      isHovering.value = value;
    });
    const width = computed(() => {
      return props.rail && props.expandOnHover && isHovering.value ? Number(props.width) : Number(props.rail ? props.railWidth : props.width);
    });
    const location = computed(() => {
      return toPhysical(props.location, isRtl.value);
    });
    const isPersistent = toRef(() => props.persistent);
    const isTemporary = computed(() => !props.permanent && (mobile.value || props.temporary));
    const isSticky = computed(() => props.sticky && !isTemporary.value && location.value !== "bottom");
    useFocusTrap(props, {
      isActive,
      localTop: isTemporary,
      contentEl: rootEl
    });
    useToggleScope(() => props.expandOnHover && props.rail != null, () => {
      watch(isHovering, (val) => emit("update:rail", !val));
    });
    useToggleScope(() => !props.disableResizeWatcher, () => {
      watch(isTemporary, (val) => !props.permanent && nextTick(() => isActive.value = !val));
    });
    useToggleScope(() => !props.disableRouteWatcher && !!router, () => {
      watch(router.currentRoute, () => isTemporary.value && (isActive.value = false));
    });
    watch(() => props.permanent, (val) => {
      if (val) isActive.value = true;
    });
    if (props.modelValue == null && !isTemporary.value) {
      isActive.value = props.permanent || !mobile.value;
    }
    const {
      isDragging,
      dragProgress
    } = useTouch({
      el: rootEl,
      isActive,
      isTemporary,
      width,
      touchless: toRef(() => props.touchless),
      position: location
    });
    const layoutSize = computed(() => {
      const size = isTemporary.value ? 0 : props.rail && props.expandOnHover ? Number(props.railWidth) : width.value;
      return isDragging.value ? size * dragProgress.value : size;
    });
    const {
      layoutItemStyles,
      layoutItemScrimStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: location,
      layoutSize,
      elementSize: width,
      active: readonly(isActive),
      disableTransitions: toRef(() => isDragging.value),
      absolute: computed(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        props.absolute || isSticky.value && typeof isStuck.value !== "string"
      ))
    });
    const {
      isStuck,
      stickyStyles
    } = useSticky({
      rootEl,
      isSticky,
      layoutItemStyles
    });
    const scrimColor = useBackgroundColor(() => {
      return typeof props.scrim === "string" ? props.scrim : null;
    });
    const scrimStyles = computed(() => ({
      ...isDragging.value ? {
        opacity: dragProgress.value * 0.2,
        transition: "none"
      } : void 0,
      ...layoutItemScrimStyles.value
    }));
    provideDefaults({
      VList: {
        bgColor: "transparent"
      }
    });
    useRender(() => {
      const hasImage = slots.image || props.image;
      return createElementVNode(Fragment, null, [createVNode(props.tag, mergeProps({
        "ref": rootEl,
        "onMouseenter": runOpenDelay,
        "onMouseleave": runCloseDelay,
        "class": ["v-navigation-drawer", `v-navigation-drawer--${location.value}`, {
          "v-navigation-drawer--expand-on-hover": props.expandOnHover,
          "v-navigation-drawer--floating": props.floating,
          "v-navigation-drawer--is-hovering": isHovering.value,
          "v-navigation-drawer--rail": props.rail,
          "v-navigation-drawer--temporary": isTemporary.value,
          "v-navigation-drawer--persistent": isPersistent.value,
          "v-navigation-drawer--active": isActive.value,
          "v-navigation-drawer--sticky": isSticky.value
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, displayClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, layoutItemStyles.value, ssrBootStyles.value, stickyStyles.value, props.style],
        "inert": !isActive.value
      }, scopeId, attrs), {
        default: () => [hasImage && createElementVNode("div", {
          "key": "image",
          "class": "v-navigation-drawer__img"
        }, [!slots.image ? createVNode(VImg, {
          "key": "image-img",
          "alt": "",
          "cover": true,
          "height": "inherit",
          "src": props.image
        }, null) : createVNode(VDefaultsProvider, {
          "key": "image-defaults",
          "disabled": !props.image,
          "defaults": {
            VImg: {
              alt: "",
              cover: true,
              height: "inherit",
              src: props.image
            }
          }
        }, slots.image)]), slots.prepend && createElementVNode("div", {
          "class": "v-navigation-drawer__prepend"
        }, [slots.prepend?.()]), createElementVNode("div", {
          "class": "v-navigation-drawer__content"
        }, [slots.default?.()]), slots.append && createElementVNode("div", {
          "class": "v-navigation-drawer__append"
        }, [slots.append?.()])]
      }), createVNode(Transition, {
        "name": "fade-transition"
      }, {
        default: () => [isTemporary.value && (isDragging.value || isActive.value) && !!props.scrim && createElementVNode("div", mergeProps({
          "class": ["v-navigation-drawer__scrim", scrimColor.backgroundColorClasses.value],
          "style": [scrimStyles.value, scrimColor.backgroundColorStyles.value],
          "onClick": () => {
            if (isPersistent.value) return;
            isActive.value = false;
          }
        }, scopeId), null)]
      })]);
    });
    return {
      isStuck
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const drawer = ref(false);
    const menuItems = [
      { label: "Dashboard", icon: "mdi-view-dashboard-outline", path: "/admin" },
      { label: "Курсы", icon: "mdi-book-open-variant", path: "/admin/courses" },
      { label: "Пользователи", icon: "mdi-account-group", path: "/admin/users" },
      { label: "Покупки", icon: "mdi-cart-outline", path: "/admin/purchases" },
      { label: "Настройки", icon: "mdi-cog-outline", path: "/admin/settings" },
      { label: "План", icon: "mdi-clipboard-text-outline", path: "/admin/plan" }
    ];
    const isActive = (path) => route.path === path;
    const logout = () => {
      const token = useCookie("admin-token");
      token.value = null;
      router.push("/admin/login");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, mergeProps({ class: "bg-admin" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VMain, { class: "pa-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center px-4 px-md-6 py-3" style="${ssrRenderStyle({ "border-bottom": "1px solid #E2E8F0", "background": "#FFFFFF" })}" data-v-976224d9${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    icon: "",
                    variant: "text",
                    color: "grey-darken-2",
                    class: "mr-3 d-md-none",
                    onClick: ($event) => drawer.value = !unref(drawer)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-menu`);
                            } else {
                              return [
                                createTextVNode("mdi-menu")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-menu")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="text-h6 font-weight-bold" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-976224d9${_scopeId2}> ✂️ Генетика Кроя </div>`);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    size: "small",
                    variant: "text",
                    color: "grey-darken-2",
                    onClick: logout
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          start: "",
                          size: "18"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-logout`);
                            } else {
                              return [
                                createTextVNode("mdi-logout")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span class="d-none d-sm-inline" data-v-976224d9${_scopeId3}>Выйти</span>`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            start: "",
                            size: "18"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-logout")
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "d-none d-sm-inline" }, "Выйти")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="admin-body" data-v-976224d9${_scopeId2}>`);
                  _push3(ssrRenderComponent(VNavigationDrawer, {
                    modelValue: unref(drawer),
                    "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
                    temporary: "",
                    class: "d-md-none",
                    style: { "background": "#F8FAFC" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, {
                          class: "menu-card ma-3",
                          elevation: "0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VList, {
                                class: "py-2",
                                density: "compact"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(menuItems, (item) => {
                                      _push6(ssrRenderComponent(VListItem, {
                                        key: item.path,
                                        to: item.path,
                                        active: isActive(item.path),
                                        class: "menu-item mb-1",
                                        rounded: "lg",
                                        onClick: ($event) => drawer.value = false
                                      }, {
                                        prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, {
                                              icon: item.icon,
                                              size: "20"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, {
                                                icon: item.icon,
                                                size: "20"
                                              }, null, 8, ["icon"])
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, { class: "text-body-2 font-weight-medium" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(item.label)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(item.label), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, { class: "text-body-2 font-weight-medium" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.label), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item) => {
                                        return createVNode(VListItem, {
                                          key: item.path,
                                          to: item.path,
                                          active: isActive(item.path),
                                          class: "menu-item mb-1",
                                          rounded: "lg",
                                          onClick: ($event) => drawer.value = false
                                        }, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: item.icon,
                                              size: "20"
                                            }, null, 8, ["icon"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "text-body-2 font-weight-medium" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.label), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["to", "active", "onClick"]);
                                      }), 64))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, {
                                  class: "py-2",
                                  density: "compact"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item) => {
                                      return createVNode(VListItem, {
                                        key: item.path,
                                        to: item.path,
                                        active: isActive(item.path),
                                        class: "menu-item mb-1",
                                        rounded: "lg",
                                        onClick: ($event) => drawer.value = false
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: item.icon,
                                            size: "20"
                                          }, null, 8, ["icon"])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, { class: "text-body-2 font-weight-medium" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.label), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["to", "active", "onClick"]);
                                    }), 64))
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
                          createVNode(VCard, {
                            class: "menu-card ma-3",
                            elevation: "0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VList, {
                                class: "py-2",
                                density: "compact"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item) => {
                                    return createVNode(VListItem, {
                                      key: item.path,
                                      to: item.path,
                                      active: isActive(item.path),
                                      class: "menu-item mb-1",
                                      rounded: "lg",
                                      onClick: ($event) => drawer.value = false
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: item.icon,
                                          size: "20"
                                        }, null, 8, ["icon"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "text-body-2 font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.label), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["to", "active", "onClick"]);
                                  }), 64))
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
                  _push3(`<div class="admin-sidebar d-none d-md-block" data-v-976224d9${_scopeId2}>`);
                  _push3(ssrRenderComponent(VCard, {
                    class: "menu-card",
                    elevation: "0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VList, {
                          class: "py-2",
                          density: "compact"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(menuItems, (item) => {
                                _push5(ssrRenderComponent(VListItem, {
                                  key: item.path,
                                  to: item.path,
                                  active: isActive(item.path),
                                  class: "menu-item mb-1",
                                  rounded: "lg"
                                }, {
                                  prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: item.icon,
                                        size: "20"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: item.icon,
                                          size: "20"
                                        }, null, 8, ["icon"])
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItemTitle, { class: "text-body-2 font-weight-medium" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.label)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.label), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "text-body-2 font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.label), 1)
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
                                (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item) => {
                                  return createVNode(VListItem, {
                                    key: item.path,
                                    to: item.path,
                                    active: isActive(item.path),
                                    class: "menu-item mb-1",
                                    rounded: "lg"
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: item.icon,
                                        size: "20"
                                      }, null, 8, ["icon"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "text-body-2 font-weight-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.label), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["to", "active"]);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VList, {
                            class: "py-2",
                            density: "compact"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item) => {
                                return createVNode(VListItem, {
                                  key: item.path,
                                  to: item.path,
                                  active: isActive(item.path),
                                  class: "menu-item mb-1",
                                  rounded: "lg"
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: item.icon,
                                      size: "20"
                                    }, null, 8, ["icon"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-body-2 font-weight-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.label), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["to", "active"]);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="admin-content" data-v-976224d9${_scopeId2}>`);
                  _push3(ssrRenderComponent(VCard, {
                    class: "content-card",
                    elevation: "0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="content-inner" data-v-976224d9${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "content-inner" }, [
                            renderSlot(_ctx.$slots, "default", {}, void 0, true)
                          ])
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "d-flex align-center px-4 px-md-6 py-3",
                      style: { "border-bottom": "1px solid #E2E8F0", "background": "#FFFFFF" }
                    }, [
                      createVNode(VBtn, {
                        icon: "",
                        variant: "text",
                        color: "grey-darken-2",
                        class: "mr-3 d-md-none",
                        onClick: ($event) => drawer.value = !unref(drawer)
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-menu")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode("div", {
                        class: "text-h6 font-weight-bold",
                        style: { "color": "#020617" }
                      }, " ✂️ Генетика Кроя "),
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        size: "small",
                        variant: "text",
                        color: "grey-darken-2",
                        onClick: logout
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            start: "",
                            size: "18"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-logout")
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "d-none d-sm-inline" }, "Выйти")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "admin-body" }, [
                      createVNode(VNavigationDrawer, {
                        modelValue: unref(drawer),
                        "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
                        temporary: "",
                        class: "d-md-none",
                        style: { "background": "#F8FAFC" }
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            class: "menu-card ma-3",
                            elevation: "0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VList, {
                                class: "py-2",
                                density: "compact"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item) => {
                                    return createVNode(VListItem, {
                                      key: item.path,
                                      to: item.path,
                                      active: isActive(item.path),
                                      class: "menu-item mb-1",
                                      rounded: "lg",
                                      onClick: ($event) => drawer.value = false
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: item.icon,
                                          size: "20"
                                        }, null, 8, ["icon"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "text-body-2 font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.label), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["to", "active", "onClick"]);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "admin-sidebar d-none d-md-block" }, [
                        createVNode(VCard, {
                          class: "menu-card",
                          elevation: "0"
                        }, {
                          default: withCtx(() => [
                            createVNode(VList, {
                              class: "py-2",
                              density: "compact"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item) => {
                                  return createVNode(VListItem, {
                                    key: item.path,
                                    to: item.path,
                                    active: isActive(item.path),
                                    class: "menu-item mb-1",
                                    rounded: "lg"
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: item.icon,
                                        size: "20"
                                      }, null, 8, ["icon"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "text-body-2 font-weight-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.label), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["to", "active"]);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "admin-content" }, [
                        createVNode(VCard, {
                          class: "content-card",
                          elevation: "0"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "content-inner" }, [
                              renderSlot(_ctx.$slots, "default", {}, void 0, true)
                            ])
                          ]),
                          _: 3
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VMain, { class: "pa-0" }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "d-flex align-center px-4 px-md-6 py-3",
                    style: { "border-bottom": "1px solid #E2E8F0", "background": "#FFFFFF" }
                  }, [
                    createVNode(VBtn, {
                      icon: "",
                      variant: "text",
                      color: "grey-darken-2",
                      class: "mr-3 d-md-none",
                      onClick: ($event) => drawer.value = !unref(drawer)
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-menu")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode("div", {
                      class: "text-h6 font-weight-bold",
                      style: { "color": "#020617" }
                    }, " ✂️ Генетика Кроя "),
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      size: "small",
                      variant: "text",
                      color: "grey-darken-2",
                      onClick: logout
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          start: "",
                          size: "18"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-logout")
                          ]),
                          _: 1
                        }),
                        createVNode("span", { class: "d-none d-sm-inline" }, "Выйти")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "admin-body" }, [
                    createVNode(VNavigationDrawer, {
                      modelValue: unref(drawer),
                      "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
                      temporary: "",
                      class: "d-md-none",
                      style: { "background": "#F8FAFC" }
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          class: "menu-card ma-3",
                          elevation: "0"
                        }, {
                          default: withCtx(() => [
                            createVNode(VList, {
                              class: "py-2",
                              density: "compact"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item) => {
                                  return createVNode(VListItem, {
                                    key: item.path,
                                    to: item.path,
                                    active: isActive(item.path),
                                    class: "menu-item mb-1",
                                    rounded: "lg",
                                    onClick: ($event) => drawer.value = false
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: item.icon,
                                        size: "20"
                                      }, null, 8, ["icon"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "text-body-2 font-weight-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.label), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["to", "active", "onClick"]);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "admin-sidebar d-none d-md-block" }, [
                      createVNode(VCard, {
                        class: "menu-card",
                        elevation: "0"
                      }, {
                        default: withCtx(() => [
                          createVNode(VList, {
                            class: "py-2",
                            density: "compact"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(menuItems, (item) => {
                                return createVNode(VListItem, {
                                  key: item.path,
                                  to: item.path,
                                  active: isActive(item.path),
                                  class: "menu-item mb-1",
                                  rounded: "lg"
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: item.icon,
                                      size: "20"
                                    }, null, 8, ["icon"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "text-body-2 font-weight-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.label), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["to", "active"]);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "admin-content" }, [
                      createVNode(VCard, {
                        class: "content-card",
                        elevation: "0"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "content-inner" }, [
                            renderSlot(_ctx.$slots, "default", {}, void 0, true)
                          ])
                        ]),
                        _: 3
                      })
                    ])
                  ])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-976224d9"]]);

export { admin as default };
//# sourceMappingURL=admin-B-8Bw2tG.mjs.map
