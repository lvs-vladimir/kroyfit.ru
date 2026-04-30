import { defineComponent, ref, withAsyncContext, reactive, withCtx, isRef, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, computed, toRef, createElementVNode, mergeProps, normalizeStyle, normalizeClass, shallowRef, watch, nextTick, provide, withDirectives, inject, vShow, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useFetch } from './fetch-B0RFKCZx.mjs';
import { u as useSeoMeta } from './composables-CsgbRhqC.mjs';
import { V as VCard, a as VCardTitle, b as VCardText } from './VCard-DZcCz6yh.mjs';
import { V as VBtn, m as makeVBtnProps } from './VBtn-p5cu1pGV.mjs';
import { V as VIcon, u as useDensity, a as useBackgroundColor, b as useRender, c as useTextColor, d as useGroup, e as useGroupItem, M as MaybeTransition, m as makeTagProps, f as makeDensityProps, g as makeComponentProps, h as makeGroupItemProps } from './index-C1EJcibQ.mjs';
import { f as forwardRefs, a as animate } from './forwardRefs-CAP5b9ad.mjs';
import { _ as _export_sfc, g as genericComponent, f as useProxiedModel, h as provideDefaults, e as convertToUnit, b as provideTheme, c as useRtl, d as useLocale, i as isObject, p as propsFactory, j as pick, o as omit, k as keys, m as makeThemeProps, s as standardEasing } from './server.mjs';
import { u as useLazy, m as makeLazyProps } from './VOverlay-BtXALeZH.mjs';
import { u as useSsrBoot } from './ssrBoot-ZQn7gOuX.mjs';
import { V as VChip, a as VSlideGroup, m as makeVSlideGroupProps } from './VChip-nD7Rsxz9.mjs';
import { u as useScopeId } from './scopeId-DrHQwwj5.mjs';
import { V as VDivider } from './VDivider-Batqhoho.mjs';
import { V as VRow, a as VCol } from './VRow-CwXPvlwe.mjs';
import { V as VTextField } from './VTextField-Bqptx47Z.mjs';
import { V as VAlert } from './VAlert-BsjjTFcu.mjs';
import { V as VSpacer } from './VSpacer-B2jXCgcb.mjs';
import { V as VDialog } from './VDialog-BNgFzdG_.mjs';
import { V as VTextarea } from './VTextarea-DTXsVE1U.mjs';
import { V as VCheckbox } from './VCheckbox-CUnSCEXF.mjs';
import { V as VTable } from './VTable-aF33ZMGL.mjs';
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
import '@vue/shared';
import './ssr-BEZSE_YS.mjs';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './position-D2_Ao4AV.mjs';
import './VAvatar-DVIor7ga.mjs';
import 'vue-router';
import './autofocus-DXdUA20R.mjs';
import './VList-B7WBdDJv.mjs';

const VTabsSymbol = /* @__PURE__ */ Symbol.for("vuetify:v-tabs");
const makeVTabProps = propsFactory({
  fixed: Boolean,
  sliderColor: String,
  sliderTransition: String,
  sliderTransitionDuration: [String, Number],
  hideSlider: Boolean,
  inset: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...omit(makeVBtnProps({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab");
const VTab = genericComponent()({
  name: "VTab",
  props: makeVTabProps(),
  setup(props, {
    slots,
    attrs
  }) {
    const {
      textColorClasses: sliderColorClasses,
      textColorStyles: sliderColorStyles
    } = useTextColor(() => props.sliderColor);
    const {
      backgroundColorClasses: insetColorClasses,
      backgroundColorStyles: insetColorStyles
    } = useBackgroundColor(() => props.sliderColor);
    const rootEl = ref();
    const sliderEl = ref();
    const isHorizontal = computed(() => props.direction === "horizontal");
    const isSelected = computed(() => rootEl.value?.group?.isSelected.value ?? false);
    function fade(nextEl, prevEl) {
      return {
        opacity: [0, 1]
      };
    }
    function grow(nextEl, prevEl) {
      return props.direction === "vertical" ? {
        transform: ["scaleY(0)", "scaleY(1)"]
      } : {
        transform: ["scaleX(0)", "scaleX(1)"]
      };
    }
    function shift(nextEl, prevEl) {
      const prevBox = prevEl.getBoundingClientRect();
      const nextBox = nextEl.getBoundingClientRect();
      const xy = isHorizontal.value ? "x" : "y";
      const XY = isHorizontal.value ? "X" : "Y";
      const rightBottom = isHorizontal.value ? "right" : "bottom";
      const widthHeight = isHorizontal.value ? "width" : "height";
      const prevPos = prevBox[xy];
      const nextPos = nextBox[xy];
      const delta = prevPos > nextPos ? prevBox[rightBottom] - nextBox[rightBottom] : prevBox[xy] - nextBox[xy];
      const origin = Math.sign(delta) > 0 ? isHorizontal.value ? "right" : "bottom" : Math.sign(delta) < 0 ? isHorizontal.value ? "left" : "top" : "center";
      const size = Math.abs(delta) + (Math.sign(delta) < 0 ? prevBox[widthHeight] : nextBox[widthHeight]);
      const scale = size / Math.max(prevBox[widthHeight], nextBox[widthHeight]) || 0;
      const initialScale = prevBox[widthHeight] / nextBox[widthHeight] || 0;
      const sigma = 1.5;
      return {
        transform: [`translate${XY}(${delta}px) scale${XY}(${initialScale})`, `translate${XY}(${delta / sigma}px) scale${XY}(${(scale - 1) / sigma + 1})`, "none"],
        transformOrigin: Array(3).fill(origin)
      };
    }
    function updateSlider({
      value
    }) {
      if (value) {
        const prevEl = rootEl.value?.$el.parentElement?.querySelector(".v-tab--selected .v-tab__slider");
        const nextEl = sliderEl.value;
        if (!prevEl || !nextEl) return;
        const color = getComputedStyle(prevEl).backgroundColor;
        const keyframes = {
          fade,
          grow,
          shift
        }[props.sliderTransition ?? "shift"] ?? shift;
        const duration = Number(props.sliderTransitionDuration) || ({
          fade: 400,
          grow: 350,
          shift: 225
        }[props.sliderTransition ?? "shift"] ?? 225);
        animate(nextEl, {
          backgroundColor: [color, color],
          ...keyframes(nextEl, prevEl)
        }, {
          duration,
          easing: standardEasing
        });
      }
    }
    useRender(() => {
      const btnProps = VBtn.filterProps(props);
      return createVNode(VBtn, mergeProps({
        "symbol": VTabsSymbol,
        "ref": rootEl,
        "class": ["v-tab", props.class, isSelected.value && props.inset ? insetColorClasses.value : []],
        "style": [props.style, isSelected.value && props.inset ? insetColorStyles.value : [], {
          backgroundColor: isSelected.value && props.inset ? "transparent !important" : void 0
        }],
        "tabindex": isSelected.value ? 0 : -1,
        "role": "tab",
        "aria-selected": String(isSelected.value),
        "active": false
      }, btnProps, attrs, {
        "block": props.fixed,
        "maxWidth": props.fixed ? 300 : void 0,
        "onGroup:selected": updateSlider
      }), {
        ...slots,
        default: () => createElementVNode(Fragment, null, [slots.default?.() ?? props.text, !props.hideSlider && createElementVNode("div", {
          "ref": sliderEl,
          "class": normalizeClass(["v-tab__slider", props.inset ? insetColorClasses.value : sliderColorClasses.value]),
          "style": normalizeStyle([sliderColorStyles.value, props.inset ? insetColorStyles.value : sliderColorClasses.value])
        }, null)])
      });
    });
    return forwardRefs({}, rootEl);
  }
});
const handleGesture = (wrapper) => {
  const {
    touchstartX,
    touchendX,
    touchstartY,
    touchendY
  } = wrapper;
  const dirRatio = 0.5;
  const minDistance = 16;
  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;
  if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
    wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
    wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
  }
  if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
    wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
    wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
  }
};
function touchstart(event, wrapper) {
  const touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;
  wrapper.start?.({
    originalEvent: event,
    ...wrapper
  });
}
function touchend(event, wrapper) {
  const touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;
  wrapper.end?.({
    originalEvent: event,
    ...wrapper
  });
  handleGesture(wrapper);
}
function touchmove(event, wrapper) {
  const touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;
  wrapper.move?.({
    originalEvent: event,
    ...wrapper
  });
}
function createHandlers(value = {}) {
  const wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };
  return {
    touchstart: (e) => touchstart(e, wrapper),
    touchend: (e) => touchend(e, wrapper),
    touchmove: (e) => touchmove(e, wrapper)
  };
}
function mounted(el, binding) {
  const value = binding.value;
  const target = value?.parent ? el.parentElement : el;
  const options = value?.options ?? {
    passive: true
  };
  const uid = binding.instance?.$.uid;
  if (!target || uid === void 0) return;
  const handlers = createHandlers(binding.value);
  target._touchHandlers = target._touchHandlers ?? /* @__PURE__ */ Object.create(null);
  target._touchHandlers[uid] = handlers;
  keys(handlers).forEach((eventName) => {
    target.addEventListener(eventName, handlers[eventName], options);
  });
}
function unmounted(el, binding) {
  const target = binding.value?.parent ? el.parentElement : el;
  const uid = binding.instance?.$.uid;
  if (!target?._touchHandlers || uid === void 0) return;
  const handlers = target._touchHandlers[uid];
  keys(handlers).forEach((eventName) => {
    target.removeEventListener(eventName, handlers[eventName]);
  });
  delete target._touchHandlers[uid];
}
const Touch = {
  mounted,
  unmounted
};
const VWindowSymbol = /* @__PURE__ */ Symbol.for("vuetify:v-window");
const VWindowGroupSymbol = /* @__PURE__ */ Symbol.for("vuetify:v-window-group");
const makeVWindowProps = propsFactory({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (v) => typeof v === "boolean" || v === "hover"
  },
  verticalArrows: [Boolean, String],
  touch: {
    type: [Object, Boolean],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  },
  crossfade: Boolean,
  transitionDuration: Number,
  ...makeComponentProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VWindow");
const VWindow = genericComponent()({
  name: "VWindow",
  directives: {
    vTouch: Touch
  },
  props: makeVWindowProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, {
    slots
  }) {
    const {
      themeClasses
    } = provideTheme(props);
    const {
      isRtl
    } = useRtl();
    const {
      t
    } = useLocale();
    const group = useGroup(props, VWindowGroupSymbol);
    const rootRef = ref();
    const isRtlReverse = computed(() => isRtl.value ? !props.reverse : props.reverse);
    const isReversed = shallowRef(false);
    const transition = computed(() => {
      if (props.crossfade) {
        return "v-window-crossfade-transition";
      }
      const axis = props.direction === "vertical" ? "y" : "x";
      const reverse = isRtlReverse.value ? !isReversed.value : isReversed.value;
      const direction = reverse ? "-reverse" : "";
      return `v-window-${axis}${direction}-transition`;
    });
    const transitionCount = shallowRef(0);
    const transitionHeight = ref(void 0);
    const activeIndex = computed(() => {
      return group.items.value.findIndex((item) => group.selected.value.includes(item.id));
    });
    watch(activeIndex, (newVal, oldVal) => {
      const itemsLength = group.items.value.length;
      const lastIndex = itemsLength - 1;
      if (itemsLength <= 2) {
        isReversed.value = newVal < oldVal;
      } else if (newVal === lastIndex && oldVal === 0) {
        isReversed.value = false;
      } else if (newVal === 0 && oldVal === lastIndex) {
        isReversed.value = true;
      } else {
        isReversed.value = newVal < oldVal;
      }
      nextTick(() => {
        return;
      });
    }, {
      flush: "sync"
    });
    provide(VWindowSymbol, {
      transition,
      isReversed,
      transitionCount,
      transitionHeight,
      rootRef
    });
    const canMoveBack = toRef(() => props.continuous || activeIndex.value !== 0);
    const canMoveForward = toRef(() => props.continuous || activeIndex.value !== group.items.value.length - 1);
    function prev() {
      canMoveBack.value && group.prev();
    }
    function next() {
      canMoveForward.value && group.next();
    }
    const arrows = computed(() => {
      const arrows2 = [];
      const prevProps = {
        icon: isRtl.value ? props.nextIcon : props.prevIcon,
        class: `v-window__${isRtlReverse.value ? "right" : "left"}`,
        onClick: group.prev,
        "aria-label": t("$vuetify.carousel.prev")
      };
      arrows2.push(canMoveBack.value ? slots.prev ? slots.prev({
        props: prevProps
      }) : createVNode(VBtn, prevProps, null) : createElementVNode("div", null, null));
      const nextProps = {
        icon: isRtl.value ? props.prevIcon : props.nextIcon,
        class: `v-window__${isRtlReverse.value ? "left" : "right"}`,
        onClick: group.next,
        "aria-label": t("$vuetify.carousel.next")
      };
      arrows2.push(canMoveForward.value ? slots.next ? slots.next({
        props: nextProps
      }) : createVNode(VBtn, nextProps, null) : createElementVNode("div", null, null));
      return arrows2;
    });
    const touchOptions = computed(() => {
      if (props.touch === false) return props.touch;
      const options = {
        left: () => {
          isRtlReverse.value ? prev() : next();
        },
        right: () => {
          isRtlReverse.value ? next() : prev();
        },
        start: ({
          originalEvent
        }) => {
          originalEvent.stopPropagation();
        }
      };
      return {
        ...options,
        ...props.touch === true ? {} : props.touch
      };
    });
    function onKeyDown(e) {
      if (props.direction === "horizontal" && e.key === "ArrowLeft" || props.direction === "vertical" && e.key === "ArrowUp") {
        e.preventDefault();
        prev();
        nextTick(() => {
          canMoveBack.value ? focusArrow(0) : focusArrow(1);
        });
      }
      if (props.direction === "horizontal" && e.key === "ArrowRight" || props.direction === "vertical" && e.key === "ArrowDown") {
        e.preventDefault();
        next();
        nextTick(() => {
          canMoveForward.value ? focusArrow(1) : focusArrow(0);
        });
      }
    }
    function focusArrow(index2) {
      const arrow = arrows.value[index2];
      if (!arrow) return;
      const arrowEl = Array.isArray(arrow) ? arrow[0] : arrow;
      arrowEl.el?.focus();
    }
    useRender(() => withDirectives(createVNode(props.tag, {
      "ref": rootRef,
      "class": normalizeClass(["v-window", {
        "v-window--show-arrows-on-hover": props.showArrows === "hover",
        "v-window--vertical-arrows": !!props.verticalArrows,
        "v-window--crossfade": !!props.crossfade
      }, themeClasses.value, props.class]),
      "style": normalizeStyle([props.style, {
        "--v-window-transition-duration": convertToUnit(props.transitionDuration, "ms")
      }])
    }, {
      default: () => [createElementVNode("div", {
        "class": "v-window__container",
        "style": {
          height: transitionHeight.value
        }
      }, [slots.default?.({
        group
      }), props.showArrows !== false && createElementVNode("div", {
        "class": normalizeClass(["v-window__controls", {
          "v-window__controls--left": props.verticalArrows === "left" || props.verticalArrows === true
        }, {
          "v-window__controls--right": props.verticalArrows === "right"
        }]),
        "onKeydown": onKeyDown
      }, [arrows.value])]), slots.additional?.({
        group
      })]
    }), [[Touch, touchOptions.value]]));
    return {
      group
    };
  }
});
const makeVTabsWindowProps = propsFactory({
  ...omit(makeVWindowProps(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VTabsWindow");
const VTabsWindow = genericComponent()({
  name: "VTabsWindow",
  props: makeVTabsWindowProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, {
    slots
  }) {
    const group = inject(VTabsSymbol, null);
    const _model = useProxiedModel(props, "modelValue");
    const model = computed({
      get() {
        if (_model.value != null || !group) return _model.value;
        return group.items.value.find((item) => group.selected.value.includes(item.id))?.value;
      },
      set(val) {
        _model.value = val;
      }
    });
    useRender(() => {
      const windowProps = VWindow.filterProps(props);
      return createVNode(VWindow, mergeProps({
        "_as": "VTabsWindow"
      }, windowProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-tabs-window", props.class],
        "style": props.style,
        "mandatory": false,
        "touch": false
      }), slots);
    });
    return {};
  }
});
const makeVWindowItemProps = propsFactory({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  },
  ...makeComponentProps(),
  ...makeGroupItemProps(),
  ...makeLazyProps()
}, "VWindowItem");
const VWindowItem = genericComponent()({
  name: "VWindowItem",
  directives: {
    vTouch: Touch
  },
  props: makeVWindowItemProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, {
    slots
  }) {
    const window = inject(VWindowSymbol);
    const groupItem = useGroupItem(props, VWindowGroupSymbol);
    const {
      isBooted
    } = useSsrBoot();
    if (!window || !groupItem) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const isTransitioning = shallowRef(false);
    const hasTransition = computed(() => isBooted.value && (window.isReversed.value ? props.reverseTransition !== false : props.transition !== false));
    function onAfterTransition() {
      if (!isTransitioning.value || !window) {
        return;
      }
      isTransitioning.value = false;
      if (window.transitionCount.value > 0) {
        window.transitionCount.value -= 1;
        if (window.transitionCount.value === 0) {
          window.transitionHeight.value = void 0;
        }
      }
    }
    function onBeforeTransition() {
      if (isTransitioning.value || !window) {
        return;
      }
      isTransitioning.value = true;
      if (window.transitionCount.value === 0) {
        window.transitionHeight.value = convertToUnit(window.rootRef.value?.clientHeight);
      }
      window.transitionCount.value += 1;
    }
    function onTransitionCancelled() {
      onAfterTransition();
    }
    function onEnterTransition(el) {
      if (!isTransitioning.value) {
        return;
      }
      nextTick(() => {
        if (!hasTransition.value || !isTransitioning.value || !window) {
          return;
        }
        window.transitionHeight.value = convertToUnit(el.clientHeight);
      });
    }
    const transition = computed(() => {
      const name = window.isReversed.value ? props.reverseTransition : props.transition;
      return !hasTransition.value ? false : {
        name: typeof name !== "string" ? window.transition.value : name,
        onBeforeEnter: onBeforeTransition,
        onAfterEnter: onAfterTransition,
        onEnterCancelled: onTransitionCancelled,
        onBeforeLeave: onBeforeTransition,
        onAfterLeave: onAfterTransition,
        onLeaveCancelled: onTransitionCancelled,
        onEnter: onEnterTransition
      };
    });
    const {
      hasContent
    } = useLazy(props, groupItem.isSelected);
    useRender(() => createVNode(MaybeTransition, {
      "transition": transition.value,
      "disabled": !isBooted.value
    }, {
      default: () => [withDirectives(createElementVNode("div", {
        "class": normalizeClass(["v-window-item", groupItem.selectedClass.value, props.class]),
        "style": normalizeStyle(props.style)
      }, [hasContent.value && slots.default?.()]), [[vShow, groupItem.isSelected.value]])]
    }));
    return {
      groupItem
    };
  }
});
const makeVTabsWindowItemProps = propsFactory({
  ...makeVWindowItemProps()
}, "VTabsWindowItem");
const VTabsWindowItem = genericComponent()({
  name: "VTabsWindowItem",
  props: makeVTabsWindowItemProps(),
  setup(props, {
    slots
  }) {
    useRender(() => {
      const windowItemProps = VWindowItem.filterProps(props);
      return createVNode(VWindowItem, mergeProps({
        "_as": "VTabsWindowItem"
      }, windowItemProps, {
        "class": ["v-tabs-window-item", props.class],
        "style": props.style
      }), slots);
    });
    return {};
  }
});
function parseItems(items) {
  if (!items) return [];
  return items.map((item) => {
    if (!isObject(item)) return {
      text: item,
      value: item
    };
    return item;
  });
}
const makeVTabsProps = propsFactory({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: void 0
  },
  hideSlider: Boolean,
  inset: Boolean,
  insetPadding: [String, Number],
  insetRadius: [String, Number],
  sliderColor: String,
  ...pick(makeVTabProps(), ["spaced", "sliderTransition", "sliderTransitionDuration"]),
  ...makeVSlideGroupProps({
    mandatory: "force",
    selectedClass: "v-tab-item--selected"
  }),
  ...makeDensityProps(),
  ...makeTagProps()
}, "VTabs");
const VTabs = genericComponent()({
  name: "VTabs",
  props: makeVTabsProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, {
    attrs,
    slots
  }) {
    const model = useProxiedModel(props, "modelValue");
    const items = computed(() => parseItems(props.items));
    const {
      densityClasses
    } = useDensity(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.bgColor);
    const {
      scopeId
    } = useScopeId();
    provideDefaults({
      VTab: {
        color: toRef(props, "color"),
        direction: toRef(props, "direction"),
        stacked: toRef(props, "stacked"),
        fixed: toRef(props, "fixedTabs"),
        inset: toRef(props, "inset"),
        sliderColor: toRef(props, "sliderColor"),
        sliderTransition: toRef(props, "sliderTransition"),
        sliderTransitionDuration: toRef(props, "sliderTransitionDuration"),
        hideSlider: toRef(props, "hideSlider")
      }
    });
    useRender(() => {
      const slideGroupProps = VSlideGroup.filterProps(props);
      const hasWindow = !!(slots.window || props.items.length > 0);
      return createElementVNode(Fragment, null, [createVNode(VSlideGroup, mergeProps(slideGroupProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-tabs", `v-tabs--${props.direction}`, `v-tabs--align-tabs-${props.alignTabs}`, {
          "v-tabs--fixed-tabs": props.fixedTabs,
          "v-tabs--grow": props.grow,
          "v-tabs--inset": props.inset,
          "v-tabs--stacked": props.stacked
        }, densityClasses.value, backgroundColorClasses.value, props.class],
        "style": [{
          "--v-tabs-height": convertToUnit(props.height),
          "--v-tabs-inset-padding": props.inset ? convertToUnit(props.insetPadding) : void 0,
          "--v-tabs-inset-radius": props.inset ? convertToUnit(props.insetRadius) : void 0
        }, backgroundColorStyles.value, props.style],
        "role": "tablist",
        "symbol": VTabsSymbol
      }, scopeId, attrs), {
        default: slots.default ?? (() => items.value.map((item) => slots.tab?.({
          item
        }) ?? createVNode(VTab, mergeProps(item, {
          "key": item.text,
          "value": item.value,
          "spaced": props.spaced
        }), {
          default: slots[`tab.${item.value}`] ? () => slots[`tab.${item.value}`]?.({
            item
          }) : void 0
        }))),
        prev: slots.prev,
        next: slots.next
      }), hasWindow && createVNode(VTabsWindow, mergeProps({
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "key": "tabs-window"
      }, scopeId), {
        default: () => [items.value.map((item) => slots.item?.({
          item
        }) ?? createVNode(VTabsWindowItem, {
          "value": item.value
        }, {
          default: () => slots[`item.${item.value}`]?.({
            item
          })
        })), slots.window?.()]
      })]);
    });
    return {};
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const activeTab = ref("profile");
    const showAddRoleDialog = ref(false);
    const showAddAdminDialog = ref(false);
    const showAddVkDialog = ref(false);
    const editingRole = ref(null);
    const editingAdmin = ref(null);
    const editingVkGroup = ref(null);
    const roleSaving = ref(false);
    const adminSaving = ref(false);
    const vkSaving = ref(false);
    const profileMessage = ref(null);
    const { data: profileData } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/profile",
      "$oVz_ZaPnkY"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const profile = ref({
      email: profileData.value?.admin?.email || "admin@kroyfit.ru",
      name: profileData.value?.admin?.name || "Администратор",
      password: "",
      saving: false
    });
    const roles = ref([
      {
        id: "1",
        name: "Администратор",
        description: "Полный доступ ко всем функциям",
        canViewDashboard: true,
        canManageCourses: true,
        canManageUsers: true,
        canManagePurchases: true,
        canManageSettings: true,
        canManageAdmins: true,
        canEditPlan: true
      },
      {
        id: "2",
        name: "Модератор",
        description: "Управление курсами и пользователями",
        canViewDashboard: true,
        canManageCourses: true,
        canManageUsers: true,
        canManagePurchases: true,
        canManageSettings: false,
        canManageAdmins: false,
        canEditPlan: false
      },
      {
        id: "3",
        name: "Редактор",
        description: "Редактирование контента",
        canViewDashboard: true,
        canManageCourses: true,
        canManageUsers: false,
        canManagePurchases: false,
        canManageSettings: false,
        canManageAdmins: false,
        canEditPlan: true
      }
    ]);
    const admins = ref([
      { id: "1", email: "admin@kroyfit.ru", name: "Администратор", roleId: "1" }
    ]);
    const vkGroups = ref([
      { id: "1", name: "Генетика Кроя — Технология пошива", vkId: "", courseSlug: "tekhnologiya-poshiva" }
    ]);
    const email = reactive({
      smtpHost: "smtp.gmail.com",
      smtpPort: 587,
      smtpUser: "",
      smtpPass: "",
      smtpFrom: "noreply@kroyfit.ru",
      enableWelcome: true,
      enablePurchase: true,
      enableVkGroup: true,
      saving: false
    });
    const seo = reactive({
      title: "Генетика Кроя",
      description: "Курсы кройки и шитья",
      keywords: "кройка, шитье, курсы",
      enableSitemap: true,
      enableRobots: true,
      saving: false
    });
    const general = reactive({
      siteName: "Генетика Кроя",
      adminEmail: "admin@kroyfit.ru",
      saving: false
    });
    const newRole = reactive({
      name: "",
      description: "",
      canViewDashboard: false,
      canManageCourses: false,
      canManageUsers: false,
      canManagePurchases: false,
      canManageSettings: false,
      canManageAdmins: false,
      canEditPlan: false
    });
    const newAdmin = reactive({
      email: "",
      name: "",
      roleId: "1"
    });
    const newVkGroup = reactive({
      name: "",
      vkId: "",
      courseSlug: "",
      token: ""
    });
    const getRoleName = (roleId) => roles.value.find((r) => r.id === roleId)?.name || "Неизвестная роль";
    const saveProfile = async () => {
      profile.value.saving = true;
      profileMessage.value = null;
      console.log("🟢 [Frontend] Начинаю сохранение профиля...");
      console.log("📝 [Frontend] Данные:", { email: profile.value.email, name: profile.value.name, hasPassword: !!profile.value.password });
      try {
        console.log("🔵 [Frontend] Отправляю запрос на /api/admin/settings...");
        const response = await $fetch("/api/admin/settings", {
          method: "POST",
          body: {
            type: "profile",
            data: {
              adminId: "1",
              email: profile.value.email,
              name: profile.value.name,
              password: profile.value.password
            }
          }
        });
        console.log("✅ [Frontend] Ответ от сервера:", response);
        console.log("🔄 [Frontend] Загружаю обновленный профиль из БД...");
        const profileData2 = await $fetch("/api/admin/profile");
        console.log("✅ [Frontend] Профиль загружен из БД:", profileData2.admin);
        console.log("🔄 [Frontend] Обновляю локальные данные реактивно...");
        profile.value.email = profileData2.admin.email;
        profile.value.name = profileData2.admin.name;
        profile.value.password = "";
        console.log("✅ [Frontend] Локальные данные обновлены:", { email: profile.value.email, name: profile.value.name });
        profileMessage.value = { type: "success", text: "Профиль успешно обновлен! Данные сохранены в БД." };
      } catch (e) {
        console.error("❌ [Frontend] Ошибка при сохранении:", e);
        profileMessage.value = { type: "error", text: e.data?.message || "Ошибка сохранения профиля" };
      } finally {
        profile.value.saving = false;
      }
    };
    const editRole = (role) => {
      editingRole.value = role;
      Object.assign(newRole, role);
      showAddRoleDialog.value = true;
    };
    const saveRole = async () => {
      roleSaving.value = true;
      try {
        await $fetch("/api/admin/settings", {
          method: "POST",
          body: { type: "role", data: { id: editingRole.value?.id || null, name: newRole.name, description: newRole.description, permissions: newRole } }
        });
        if (editingRole.value) Object.assign(editingRole.value, newRole);
        else roles.value.push({ id: String(Date.now()), ...newRole });
        showAddRoleDialog.value = false;
        editingRole.value = null;
        Object.assign(newRole, { name: "", description: "", canViewDashboard: false, canManageCourses: false, canManageUsers: false });
      } finally {
        roleSaving.value = false;
      }
    };
    const deleteRole = (id) => {
      if (confirm("Удалить роль?")) roles.value = roles.value.filter((r) => r.id !== id);
    };
    const editAdmin = (admin) => {
      editingAdmin.value = admin;
      Object.assign(newAdmin, admin);
      showAddAdminDialog.value = true;
    };
    const saveAdmin = async () => {
      adminSaving.value = true;
      try {
        await $fetch("/api/admin/settings", {
          method: "POST",
          body: { type: "admin", data: { id: editingAdmin.value?.id || null, email: newAdmin.email, name: newAdmin.name, roleId: newAdmin.roleId } }
        });
        if (editingAdmin.value) Object.assign(editingAdmin.value, newAdmin);
        else admins.value.push({ id: String(Date.now()), ...newAdmin });
        showAddAdminDialog.value = false;
        editingAdmin.value = null;
        Object.assign(newAdmin, { email: "", name: "", roleId: "1" });
      } finally {
        adminSaving.value = false;
      }
    };
    const deleteAdmin = (id) => {
      if (confirm("Удалить администратора?")) admins.value = admins.value.filter((a) => a.id !== id);
    };
    const deleteVkGroup = (id) => {
      if (confirm("Удалить группу?")) vkGroups.value = vkGroups.value.filter((g) => g.id !== id);
    };
    const editVkGroup = (group) => {
      editingVkGroup.value = group;
      Object.assign(newVkGroup, group);
      showAddVkDialog.value = true;
    };
    const saveVkGroup = async () => {
      vkSaving.value = true;
      try {
        if (editingVkGroup.value) {
          Object.assign(editingVkGroup.value, newVkGroup);
        } else {
          vkGroups.value.push({ id: String(Date.now()), ...newVkGroup });
        }
        showAddVkDialog.value = false;
        editingVkGroup.value = null;
        Object.assign(newVkGroup, { name: "", vkId: "", courseSlug: "", token: "" });
      } finally {
        vkSaving.value = false;
      }
    };
    const saveEmail = async () => {
      email.saving = true;
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
      } finally {
        email.saving = false;
      }
    };
    const saveSeo = async () => {
      seo.saving = true;
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
      } finally {
        seo.saving = false;
      }
    };
    const saveGeneral = async () => {
      general.saving = true;
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
      } finally {
        general.saving = false;
      }
    };
    useSeoMeta({ title: "Настройки — Админка" });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9e5be3d5><div class="mb-6" data-v-9e5be3d5><h1 class="text-h4 font-weight-bold mb-1" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-9e5be3d5>Настройки</h1><p class="text-body-2 text-grey-darken-1" data-v-9e5be3d5>Конфигурация системы</p></div>`);
      _push(ssrRenderComponent(VCard, {
        class: "settings-card",
        elevation: "0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTabs, {
              modelValue: unref(activeTab),
              "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
              color: "green-darken-3",
              grow: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTab, { value: "profile" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Профиль`);
                      } else {
                        return [
                          createTextVNode("Профиль")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: "roles" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Роли`);
                      } else {
                        return [
                          createTextVNode("Роли")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: "admins" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Администраторы`);
                      } else {
                        return [
                          createTextVNode("Администраторы")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: "vk" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`ВКонтакте`);
                      } else {
                        return [
                          createTextVNode("ВКонтакте")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: "email" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Email`);
                      } else {
                        return [
                          createTextVNode("Email")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: "seo" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`SEO`);
                      } else {
                        return [
                          createTextVNode("SEO")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: "general" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Общие`);
                      } else {
                        return [
                          createTextVNode("Общие")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTab, { value: "profile" }, {
                      default: withCtx(() => [
                        createTextVNode("Профиль")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "roles" }, {
                      default: withCtx(() => [
                        createTextVNode("Роли")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "admins" }, {
                      default: withCtx(() => [
                        createTextVNode("Администраторы")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "vk" }, {
                      default: withCtx(() => [
                        createTextVNode("ВКонтакте")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "email" }, {
                      default: withCtx(() => [
                        createTextVNode("Email")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "seo" }, {
                      default: withCtx(() => [
                        createTextVNode("SEO")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: "general" }, {
                      default: withCtx(() => [
                        createTextVNode("Общие")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindow, {
              modelValue: unref(activeTab),
              "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VWindowItem, {
                    value: "profile",
                    class: "pa-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-h6 font-weight-bold mb-6" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-9e5be3d5${_scopeId3}>Мой профиль</h2>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="mb-4" data-v-9e5be3d5${_scopeId5}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId5}>Email</label>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(profile).email,
                                      "onUpdate:modelValue": ($event) => unref(profile).email = $event,
                                      type: "email",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="mb-4" data-v-9e5be3d5${_scopeId5}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId5}>Имя</label>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(profile).name,
                                      "onUpdate:modelValue": ($event) => unref(profile).name = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="mb-6" data-v-9e5be3d5${_scopeId5}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId5}>Новый пароль</label>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(profile).password,
                                      "onUpdate:modelValue": ($event) => unref(profile).password = $event,
                                      type: "password",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    if (unref(profileMessage)) {
                                      _push6(ssrRenderComponent(VAlert, {
                                        type: unref(profileMessage).type,
                                        variant: "tonal",
                                        density: "compact",
                                        class: "mb-4"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(profileMessage).text)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(profileMessage).text), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "green-darken-3",
                                      variant: "flat",
                                      onClick: saveProfile,
                                      loading: unref(profile).saving
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Сохранить профиль `);
                                        } else {
                                          return [
                                            createTextVNode(" Сохранить профиль ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                        createVNode(VTextField, {
                                          modelValue: unref(profile).email,
                                          "onUpdate:modelValue": ($event) => unref(profile).email = $event,
                                          type: "email",
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                                        createVNode(VTextField, {
                                          modelValue: unref(profile).name,
                                          "onUpdate:modelValue": ($event) => unref(profile).name = $event,
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mb-6" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Новый пароль"),
                                        createVNode(VTextField, {
                                          modelValue: unref(profile).password,
                                          "onUpdate:modelValue": ($event) => unref(profile).password = $event,
                                          type: "password",
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      unref(profileMessage) ? (openBlock(), createBlock(VAlert, {
                                        key: 0,
                                        type: unref(profileMessage).type,
                                        variant: "tonal",
                                        density: "compact",
                                        class: "mb-4"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(profileMessage).text), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["type"])) : createCommentVNode("", true),
                                      createVNode(VBtn, {
                                        color: "green-darken-3",
                                        variant: "flat",
                                        onClick: saveProfile,
                                        loading: unref(profile).saving
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Сохранить профиль ")
                                        ]),
                                        _: 1
                                      }, 8, ["loading"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mb-4" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                      createVNode(VTextField, {
                                        modelValue: unref(profile).email,
                                        "onUpdate:modelValue": ($event) => unref(profile).email = $event,
                                        type: "email",
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "mb-4" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                                      createVNode(VTextField, {
                                        modelValue: unref(profile).name,
                                        "onUpdate:modelValue": ($event) => unref(profile).name = $event,
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "mb-6" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Новый пароль"),
                                      createVNode(VTextField, {
                                        modelValue: unref(profile).password,
                                        "onUpdate:modelValue": ($event) => unref(profile).password = $event,
                                        type: "password",
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    unref(profileMessage) ? (openBlock(), createBlock(VAlert, {
                                      key: 0,
                                      type: unref(profileMessage).type,
                                      variant: "tonal",
                                      density: "compact",
                                      class: "mb-4"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(profileMessage).text), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["type"])) : createCommentVNode("", true),
                                    createVNode(VBtn, {
                                      color: "green-darken-3",
                                      variant: "flat",
                                      onClick: saveProfile,
                                      loading: unref(profile).saving
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Сохранить профиль ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h2", {
                            class: "text-h6 font-weight-bold mb-6",
                            style: { "color": "#020617" }
                          }, "Мой профиль"),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                    createVNode(VTextField, {
                                      modelValue: unref(profile).email,
                                      "onUpdate:modelValue": ($event) => unref(profile).email = $event,
                                      type: "email",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                                    createVNode(VTextField, {
                                      modelValue: unref(profile).name,
                                      "onUpdate:modelValue": ($event) => unref(profile).name = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mb-6" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Новый пароль"),
                                    createVNode(VTextField, {
                                      modelValue: unref(profile).password,
                                      "onUpdate:modelValue": ($event) => unref(profile).password = $event,
                                      type: "password",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  unref(profileMessage) ? (openBlock(), createBlock(VAlert, {
                                    key: 0,
                                    type: unref(profileMessage).type,
                                    variant: "tonal",
                                    density: "compact",
                                    class: "mb-4"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(profileMessage).text), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["type"])) : createCommentVNode("", true),
                                  createVNode(VBtn, {
                                    color: "green-darken-3",
                                    variant: "flat",
                                    onClick: saveProfile,
                                    loading: unref(profile).saving
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Сохранить профиль ")
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VWindowItem, {
                    value: "roles",
                    class: "pa-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex align-center mb-6" data-v-9e5be3d5${_scopeId3}><div data-v-9e5be3d5${_scopeId3}><h2 class="text-h6 font-weight-bold mb-1" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-9e5be3d5${_scopeId3}>Роли и разрешения</h2></div>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "green-darken-3",
                          variant: "flat",
                          size: "small",
                          onClick: ($event) => showAddRoleDialog.value = true
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                start: "",
                                size: "18"
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
                              _push5(` Добавить роль `);
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
                                createTextVNode(" Добавить роль ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(roles), (role) => {
                                _push5(ssrRenderComponent(VCol, {
                                  key: role.id,
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCard, {
                                        class: "pa-4",
                                        style: { "border": "1px solid #E2E8F0", "border-radius": "12px" }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="d-flex align-center mb-4" data-v-9e5be3d5${_scopeId6}><div class="flex-grow-1" data-v-9e5be3d5${_scopeId6}><h3 class="text-subtitle-1 font-weight-bold mb-1" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-9e5be3d5${_scopeId6}>${ssrInterpolate(role.name)}</h3><p class="text-caption text-grey-darken-1 mb-0" data-v-9e5be3d5${_scopeId6}>${ssrInterpolate(role.description)}</p></div>`);
                                            _push7(ssrRenderComponent(VBtn, {
                                              icon: "",
                                              size: "small",
                                              variant: "text",
                                              color: "grey-darken-2",
                                              onClick: ($event) => editRole(role)
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VIcon, { size: "18" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`mdi-pencil`);
                                                      } else {
                                                        return [
                                                          createTextVNode("mdi-pencil")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
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
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VBtn, {
                                              icon: "",
                                              size: "small",
                                              variant: "text",
                                              color: "red",
                                              onClick: ($event) => deleteRole(role.id)
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VIcon, { size: "18" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`mdi-delete`);
                                                      } else {
                                                        return [
                                                          createTextVNode("mdi-delete")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VIcon, { size: "18" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-delete")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                            _push7(ssrRenderComponent(VDivider, { class: "my-3" }, null, _parent7, _scopeId6));
                                            _push7(`<div class="permissions-list" data-v-9e5be3d5${_scopeId6}><div class="permission-item" data-v-9e5be3d5${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VIcon, {
                                              color: role.canViewDashboard ? "green-darken-3" : "grey-lighten-1",
                                              size: "18"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(role.canViewDashboard ? "mdi-check-circle" : "mdi-circle-outline")}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(role.canViewDashboard ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<span class="text-caption" data-v-9e5be3d5${_scopeId6}>Dashboard</span></div><div class="permission-item" data-v-9e5be3d5${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VIcon, {
                                              color: role.canManageCourses ? "green-darken-3" : "grey-lighten-1",
                                              size: "18"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(role.canManageCourses ? "mdi-check-circle" : "mdi-circle-outline")}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(role.canManageCourses ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<span class="text-caption" data-v-9e5be3d5${_scopeId6}>Курсы</span></div><div class="permission-item" data-v-9e5be3d5${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VIcon, {
                                              color: role.canManageUsers ? "green-darken-3" : "grey-lighten-1",
                                              size: "18"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(role.canManageUsers ? "mdi-check-circle" : "mdi-circle-outline")}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(role.canManageUsers ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<span class="text-caption" data-v-9e5be3d5${_scopeId6}>Пользователи</span></div><div class="permission-item" data-v-9e5be3d5${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VIcon, {
                                              color: role.canManagePurchases ? "green-darken-3" : "grey-lighten-1",
                                              size: "18"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(role.canManagePurchases ? "mdi-check-circle" : "mdi-circle-outline")}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(role.canManagePurchases ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<span class="text-caption" data-v-9e5be3d5${_scopeId6}>Покупки</span></div><div class="permission-item" data-v-9e5be3d5${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VIcon, {
                                              color: role.canManageSettings ? "green-darken-3" : "grey-lighten-1",
                                              size: "18"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(role.canManageSettings ? "mdi-check-circle" : "mdi-circle-outline")}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(role.canManageSettings ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<span class="text-caption" data-v-9e5be3d5${_scopeId6}>Настройки</span></div><div class="permission-item" data-v-9e5be3d5${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VIcon, {
                                              color: role.canManageAdmins ? "green-darken-3" : "grey-lighten-1",
                                              size: "18"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(role.canManageAdmins ? "mdi-check-circle" : "mdi-circle-outline")}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(role.canManageAdmins ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<span class="text-caption" data-v-9e5be3d5${_scopeId6}>Администраторы</span></div><div class="permission-item" data-v-9e5be3d5${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VIcon, {
                                              color: role.canEditPlan ? "green-darken-3" : "grey-lighten-1",
                                              size: "18"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(role.canEditPlan ? "mdi-check-circle" : "mdi-circle-outline")}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(role.canEditPlan ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<span class="text-caption" data-v-9e5be3d5${_scopeId6}>План</span></div></div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "d-flex align-center mb-4" }, [
                                                createVNode("div", { class: "flex-grow-1" }, [
                                                  createVNode("h3", {
                                                    class: "text-subtitle-1 font-weight-bold mb-1",
                                                    style: { "color": "#020617" }
                                                  }, toDisplayString(role.name), 1),
                                                  createVNode("p", { class: "text-caption text-grey-darken-1 mb-0" }, toDisplayString(role.description), 1)
                                                ]),
                                                createVNode(VBtn, {
                                                  icon: "",
                                                  size: "small",
                                                  variant: "text",
                                                  color: "grey-darken-2",
                                                  onClick: ($event) => editRole(role)
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
                                                  size: "small",
                                                  variant: "text",
                                                  color: "red",
                                                  onClick: ($event) => deleteRole(role.id)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { size: "18" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-delete")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])
                                              ]),
                                              createVNode(VDivider, { class: "my-3" }),
                                              createVNode("div", { class: "permissions-list" }, [
                                                createVNode("div", { class: "permission-item" }, [
                                                  createVNode(VIcon, {
                                                    color: role.canViewDashboard ? "green-darken-3" : "grey-lighten-1",
                                                    size: "18"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(role.canViewDashboard ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"]),
                                                  createVNode("span", { class: "text-caption" }, "Dashboard")
                                                ]),
                                                createVNode("div", { class: "permission-item" }, [
                                                  createVNode(VIcon, {
                                                    color: role.canManageCourses ? "green-darken-3" : "grey-lighten-1",
                                                    size: "18"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(role.canManageCourses ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"]),
                                                  createVNode("span", { class: "text-caption" }, "Курсы")
                                                ]),
                                                createVNode("div", { class: "permission-item" }, [
                                                  createVNode(VIcon, {
                                                    color: role.canManageUsers ? "green-darken-3" : "grey-lighten-1",
                                                    size: "18"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(role.canManageUsers ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"]),
                                                  createVNode("span", { class: "text-caption" }, "Пользователи")
                                                ]),
                                                createVNode("div", { class: "permission-item" }, [
                                                  createVNode(VIcon, {
                                                    color: role.canManagePurchases ? "green-darken-3" : "grey-lighten-1",
                                                    size: "18"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(role.canManagePurchases ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"]),
                                                  createVNode("span", { class: "text-caption" }, "Покупки")
                                                ]),
                                                createVNode("div", { class: "permission-item" }, [
                                                  createVNode(VIcon, {
                                                    color: role.canManageSettings ? "green-darken-3" : "grey-lighten-1",
                                                    size: "18"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(role.canManageSettings ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"]),
                                                  createVNode("span", { class: "text-caption" }, "Настройки")
                                                ]),
                                                createVNode("div", { class: "permission-item" }, [
                                                  createVNode(VIcon, {
                                                    color: role.canManageAdmins ? "green-darken-3" : "grey-lighten-1",
                                                    size: "18"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(role.canManageAdmins ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"]),
                                                  createVNode("span", { class: "text-caption" }, "Администраторы")
                                                ]),
                                                createVNode("div", { class: "permission-item" }, [
                                                  createVNode(VIcon, {
                                                    color: role.canEditPlan ? "green-darken-3" : "grey-lighten-1",
                                                    size: "18"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(role.canEditPlan ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"]),
                                                  createVNode("span", { class: "text-caption" }, "План")
                                                ])
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
                                          style: { "border": "1px solid #E2E8F0", "border-radius": "12px" }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex align-center mb-4" }, [
                                              createVNode("div", { class: "flex-grow-1" }, [
                                                createVNode("h3", {
                                                  class: "text-subtitle-1 font-weight-bold mb-1",
                                                  style: { "color": "#020617" }
                                                }, toDisplayString(role.name), 1),
                                                createVNode("p", { class: "text-caption text-grey-darken-1 mb-0" }, toDisplayString(role.description), 1)
                                              ]),
                                              createVNode(VBtn, {
                                                icon: "",
                                                size: "small",
                                                variant: "text",
                                                color: "grey-darken-2",
                                                onClick: ($event) => editRole(role)
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
                                                size: "small",
                                                variant: "text",
                                                color: "red",
                                                onClick: ($event) => deleteRole(role.id)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, { size: "18" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-delete")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ]),
                                            createVNode(VDivider, { class: "my-3" }),
                                            createVNode("div", { class: "permissions-list" }, [
                                              createVNode("div", { class: "permission-item" }, [
                                                createVNode(VIcon, {
                                                  color: role.canViewDashboard ? "green-darken-3" : "grey-lighten-1",
                                                  size: "18"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(role.canViewDashboard ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"]),
                                                createVNode("span", { class: "text-caption" }, "Dashboard")
                                              ]),
                                              createVNode("div", { class: "permission-item" }, [
                                                createVNode(VIcon, {
                                                  color: role.canManageCourses ? "green-darken-3" : "grey-lighten-1",
                                                  size: "18"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(role.canManageCourses ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"]),
                                                createVNode("span", { class: "text-caption" }, "Курсы")
                                              ]),
                                              createVNode("div", { class: "permission-item" }, [
                                                createVNode(VIcon, {
                                                  color: role.canManageUsers ? "green-darken-3" : "grey-lighten-1",
                                                  size: "18"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(role.canManageUsers ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"]),
                                                createVNode("span", { class: "text-caption" }, "Пользователи")
                                              ]),
                                              createVNode("div", { class: "permission-item" }, [
                                                createVNode(VIcon, {
                                                  color: role.canManagePurchases ? "green-darken-3" : "grey-lighten-1",
                                                  size: "18"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(role.canManagePurchases ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"]),
                                                createVNode("span", { class: "text-caption" }, "Покупки")
                                              ]),
                                              createVNode("div", { class: "permission-item" }, [
                                                createVNode(VIcon, {
                                                  color: role.canManageSettings ? "green-darken-3" : "grey-lighten-1",
                                                  size: "18"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(role.canManageSettings ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"]),
                                                createVNode("span", { class: "text-caption" }, "Настройки")
                                              ]),
                                              createVNode("div", { class: "permission-item" }, [
                                                createVNode(VIcon, {
                                                  color: role.canManageAdmins ? "green-darken-3" : "grey-lighten-1",
                                                  size: "18"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(role.canManageAdmins ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"]),
                                                createVNode("span", { class: "text-caption" }, "Администраторы")
                                              ]),
                                              createVNode("div", { class: "permission-item" }, [
                                                createVNode(VIcon, {
                                                  color: role.canEditPlan ? "green-darken-3" : "grey-lighten-1",
                                                  size: "18"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(role.canEditPlan ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["color"]),
                                                createVNode("span", { class: "text-caption" }, "План")
                                              ])
                                            ])
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(roles), (role) => {
                                  return openBlock(), createBlock(VCol, {
                                    key: role.id,
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        class: "pa-4",
                                        style: { "border": "1px solid #E2E8F0", "border-radius": "12px" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex align-center mb-4" }, [
                                            createVNode("div", { class: "flex-grow-1" }, [
                                              createVNode("h3", {
                                                class: "text-subtitle-1 font-weight-bold mb-1",
                                                style: { "color": "#020617" }
                                              }, toDisplayString(role.name), 1),
                                              createVNode("p", { class: "text-caption text-grey-darken-1 mb-0" }, toDisplayString(role.description), 1)
                                            ]),
                                            createVNode(VBtn, {
                                              icon: "",
                                              size: "small",
                                              variant: "text",
                                              color: "grey-darken-2",
                                              onClick: ($event) => editRole(role)
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
                                              size: "small",
                                              variant: "text",
                                              color: "red",
                                              onClick: ($event) => deleteRole(role.id)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, { size: "18" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-delete")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ]),
                                          createVNode(VDivider, { class: "my-3" }),
                                          createVNode("div", { class: "permissions-list" }, [
                                            createVNode("div", { class: "permission-item" }, [
                                              createVNode(VIcon, {
                                                color: role.canViewDashboard ? "green-darken-3" : "grey-lighten-1",
                                                size: "18"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(role.canViewDashboard ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"]),
                                              createVNode("span", { class: "text-caption" }, "Dashboard")
                                            ]),
                                            createVNode("div", { class: "permission-item" }, [
                                              createVNode(VIcon, {
                                                color: role.canManageCourses ? "green-darken-3" : "grey-lighten-1",
                                                size: "18"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(role.canManageCourses ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"]),
                                              createVNode("span", { class: "text-caption" }, "Курсы")
                                            ]),
                                            createVNode("div", { class: "permission-item" }, [
                                              createVNode(VIcon, {
                                                color: role.canManageUsers ? "green-darken-3" : "grey-lighten-1",
                                                size: "18"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(role.canManageUsers ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"]),
                                              createVNode("span", { class: "text-caption" }, "Пользователи")
                                            ]),
                                            createVNode("div", { class: "permission-item" }, [
                                              createVNode(VIcon, {
                                                color: role.canManagePurchases ? "green-darken-3" : "grey-lighten-1",
                                                size: "18"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(role.canManagePurchases ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"]),
                                              createVNode("span", { class: "text-caption" }, "Покупки")
                                            ]),
                                            createVNode("div", { class: "permission-item" }, [
                                              createVNode(VIcon, {
                                                color: role.canManageSettings ? "green-darken-3" : "grey-lighten-1",
                                                size: "18"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(role.canManageSettings ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"]),
                                              createVNode("span", { class: "text-caption" }, "Настройки")
                                            ]),
                                            createVNode("div", { class: "permission-item" }, [
                                              createVNode(VIcon, {
                                                color: role.canManageAdmins ? "green-darken-3" : "grey-lighten-1",
                                                size: "18"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(role.canManageAdmins ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"]),
                                              createVNode("span", { class: "text-caption" }, "Администраторы")
                                            ]),
                                            createVNode("div", { class: "permission-item" }, [
                                              createVNode(VIcon, {
                                                color: role.canEditPlan ? "green-darken-3" : "grey-lighten-1",
                                                size: "18"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(role.canEditPlan ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["color"]),
                                              createVNode("span", { class: "text-caption" }, "План")
                                            ])
                                          ])
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDialog, {
                          modelValue: unref(showAddRoleDialog),
                          "onUpdate:modelValue": ($event) => isRef(showAddRoleDialog) ? showAddRoleDialog.value = $event : null,
                          "max-width": "600"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, { style: { "border-radius": "12px" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardTitle, { class: "pa-6 pb-2" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h2 class="text-h6 font-weight-bold" data-v-9e5be3d5${_scopeId6}>${ssrInterpolate(unref(editingRole) ? "Редактирование" : "Добавление")} роли</h2>`);
                                        } else {
                                          return [
                                            createVNode("h2", { class: "text-h6 font-weight-bold" }, toDisplayString(unref(editingRole) ? "Редактирование" : "Добавление") + " роли", 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardText, { class: "pa-6" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="mb-4" data-v-9e5be3d5${_scopeId6}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId6}>Название роли</label>`);
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(newRole).name,
                                            "onUpdate:modelValue": ($event) => unref(newRole).name = $event,
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><div class="mb-6" data-v-9e5be3d5${_scopeId6}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId6}>Описание</label>`);
                                          _push7(ssrRenderComponent(VTextarea, {
                                            modelValue: unref(newRole).description,
                                            "onUpdate:modelValue": ($event) => unref(newRole).description = $event,
                                            variant: "outlined",
                                            density: "compact",
                                            rows: "2",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><h3 class="text-subtitle-2 font-weight-bold mb-3" data-v-9e5be3d5${_scopeId6}>Разрешения</h3>`);
                                          _push7(ssrRenderComponent(VCheckbox, {
                                            modelValue: unref(newRole).canViewDashboard,
                                            "onUpdate:modelValue": ($event) => unref(newRole).canViewDashboard = $event,
                                            label: "Dashboard",
                                            "hide-details": "",
                                            class: "mb-2",
                                            color: "green-darken-3"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCheckbox, {
                                            modelValue: unref(newRole).canManageCourses,
                                            "onUpdate:modelValue": ($event) => unref(newRole).canManageCourses = $event,
                                            label: "Курсы",
                                            "hide-details": "",
                                            class: "mb-2",
                                            color: "green-darken-3"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCheckbox, {
                                            modelValue: unref(newRole).canManageUsers,
                                            "onUpdate:modelValue": ($event) => unref(newRole).canManageUsers = $event,
                                            label: "Пользователи",
                                            "hide-details": "",
                                            class: "mb-2",
                                            color: "green-darken-3"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCheckbox, {
                                            modelValue: unref(newRole).canManagePurchases,
                                            "onUpdate:modelValue": ($event) => unref(newRole).canManagePurchases = $event,
                                            label: "Покупки",
                                            "hide-details": "",
                                            class: "mb-2",
                                            color: "green-darken-3"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCheckbox, {
                                            modelValue: unref(newRole).canManageSettings,
                                            "onUpdate:modelValue": ($event) => unref(newRole).canManageSettings = $event,
                                            label: "Настройки",
                                            "hide-details": "",
                                            class: "mb-2",
                                            color: "green-darken-3"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCheckbox, {
                                            modelValue: unref(newRole).canManageAdmins,
                                            "onUpdate:modelValue": ($event) => unref(newRole).canManageAdmins = $event,
                                            label: "Администраторы",
                                            "hide-details": "",
                                            class: "mb-2",
                                            color: "green-darken-3"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCheckbox, {
                                            modelValue: unref(newRole).canEditPlan,
                                            "onUpdate:modelValue": ($event) => unref(newRole).canEditPlan = $event,
                                            label: "План",
                                            "hide-details": "",
                                            class: "mb-6",
                                            color: "green-darken-3"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<div class="d-flex ga-2" data-v-9e5be3d5${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VBtn, {
                                            color: "green-darken-3",
                                            variant: "flat",
                                            onClick: saveRole,
                                            loading: unref(roleSaving)
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(unref(editingRole) ? "Обновить" : "Создать")}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(unref(editingRole) ? "Обновить" : "Создать"), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            variant: "text",
                                            color: "grey-darken-2",
                                            onClick: ($event) => showAddRoleDialog.value = false
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Отмена `);
                                              } else {
                                                return [
                                                  createTextVNode(" Отмена ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "mb-4" }, [
                                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название роли"),
                                              createVNode(VTextField, {
                                                modelValue: unref(newRole).name,
                                                "onUpdate:modelValue": ($event) => unref(newRole).name = $event,
                                                variant: "outlined",
                                                density: "compact",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            createVNode("div", { class: "mb-6" }, [
                                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Описание"),
                                              createVNode(VTextarea, {
                                                modelValue: unref(newRole).description,
                                                "onUpdate:modelValue": ($event) => unref(newRole).description = $event,
                                                variant: "outlined",
                                                density: "compact",
                                                rows: "2",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            createVNode("h3", { class: "text-subtitle-2 font-weight-bold mb-3" }, "Разрешения"),
                                            createVNode(VCheckbox, {
                                              modelValue: unref(newRole).canViewDashboard,
                                              "onUpdate:modelValue": ($event) => unref(newRole).canViewDashboard = $event,
                                              label: "Dashboard",
                                              "hide-details": "",
                                              class: "mb-2",
                                              color: "green-darken-3"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(VCheckbox, {
                                              modelValue: unref(newRole).canManageCourses,
                                              "onUpdate:modelValue": ($event) => unref(newRole).canManageCourses = $event,
                                              label: "Курсы",
                                              "hide-details": "",
                                              class: "mb-2",
                                              color: "green-darken-3"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(VCheckbox, {
                                              modelValue: unref(newRole).canManageUsers,
                                              "onUpdate:modelValue": ($event) => unref(newRole).canManageUsers = $event,
                                              label: "Пользователи",
                                              "hide-details": "",
                                              class: "mb-2",
                                              color: "green-darken-3"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(VCheckbox, {
                                              modelValue: unref(newRole).canManagePurchases,
                                              "onUpdate:modelValue": ($event) => unref(newRole).canManagePurchases = $event,
                                              label: "Покупки",
                                              "hide-details": "",
                                              class: "mb-2",
                                              color: "green-darken-3"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(VCheckbox, {
                                              modelValue: unref(newRole).canManageSettings,
                                              "onUpdate:modelValue": ($event) => unref(newRole).canManageSettings = $event,
                                              label: "Настройки",
                                              "hide-details": "",
                                              class: "mb-2",
                                              color: "green-darken-3"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(VCheckbox, {
                                              modelValue: unref(newRole).canManageAdmins,
                                              "onUpdate:modelValue": ($event) => unref(newRole).canManageAdmins = $event,
                                              label: "Администраторы",
                                              "hide-details": "",
                                              class: "mb-2",
                                              color: "green-darken-3"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(VCheckbox, {
                                              modelValue: unref(newRole).canEditPlan,
                                              "onUpdate:modelValue": ($event) => unref(newRole).canEditPlan = $event,
                                              label: "План",
                                              "hide-details": "",
                                              class: "mb-6",
                                              color: "green-darken-3"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode("div", { class: "d-flex ga-2" }, [
                                              createVNode(VBtn, {
                                                color: "green-darken-3",
                                                variant: "flat",
                                                onClick: saveRole,
                                                loading: unref(roleSaving)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(editingRole) ? "Обновить" : "Создать"), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["loading"]),
                                              createVNode(VBtn, {
                                                variant: "text",
                                                color: "grey-darken-2",
                                                onClick: ($event) => showAddRoleDialog.value = false
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                        default: withCtx(() => [
                                          createVNode("h2", { class: "text-h6 font-weight-bold" }, toDisplayString(unref(editingRole) ? "Редактирование" : "Добавление") + " роли", 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardText, { class: "pa-6" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "mb-4" }, [
                                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название роли"),
                                            createVNode(VTextField, {
                                              modelValue: unref(newRole).name,
                                              "onUpdate:modelValue": ($event) => unref(newRole).name = $event,
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("div", { class: "mb-6" }, [
                                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Описание"),
                                            createVNode(VTextarea, {
                                              modelValue: unref(newRole).description,
                                              "onUpdate:modelValue": ($event) => unref(newRole).description = $event,
                                              variant: "outlined",
                                              density: "compact",
                                              rows: "2",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("h3", { class: "text-subtitle-2 font-weight-bold mb-3" }, "Разрешения"),
                                          createVNode(VCheckbox, {
                                            modelValue: unref(newRole).canViewDashboard,
                                            "onUpdate:modelValue": ($event) => unref(newRole).canViewDashboard = $event,
                                            label: "Dashboard",
                                            "hide-details": "",
                                            class: "mb-2",
                                            color: "green-darken-3"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(VCheckbox, {
                                            modelValue: unref(newRole).canManageCourses,
                                            "onUpdate:modelValue": ($event) => unref(newRole).canManageCourses = $event,
                                            label: "Курсы",
                                            "hide-details": "",
                                            class: "mb-2",
                                            color: "green-darken-3"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(VCheckbox, {
                                            modelValue: unref(newRole).canManageUsers,
                                            "onUpdate:modelValue": ($event) => unref(newRole).canManageUsers = $event,
                                            label: "Пользователи",
                                            "hide-details": "",
                                            class: "mb-2",
                                            color: "green-darken-3"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(VCheckbox, {
                                            modelValue: unref(newRole).canManagePurchases,
                                            "onUpdate:modelValue": ($event) => unref(newRole).canManagePurchases = $event,
                                            label: "Покупки",
                                            "hide-details": "",
                                            class: "mb-2",
                                            color: "green-darken-3"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(VCheckbox, {
                                            modelValue: unref(newRole).canManageSettings,
                                            "onUpdate:modelValue": ($event) => unref(newRole).canManageSettings = $event,
                                            label: "Настройки",
                                            "hide-details": "",
                                            class: "mb-2",
                                            color: "green-darken-3"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(VCheckbox, {
                                            modelValue: unref(newRole).canManageAdmins,
                                            "onUpdate:modelValue": ($event) => unref(newRole).canManageAdmins = $event,
                                            label: "Администраторы",
                                            "hide-details": "",
                                            class: "mb-2",
                                            color: "green-darken-3"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(VCheckbox, {
                                            modelValue: unref(newRole).canEditPlan,
                                            "onUpdate:modelValue": ($event) => unref(newRole).canEditPlan = $event,
                                            label: "План",
                                            "hide-details": "",
                                            class: "mb-6",
                                            color: "green-darken-3"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode("div", { class: "d-flex ga-2" }, [
                                            createVNode(VBtn, {
                                              color: "green-darken-3",
                                              variant: "flat",
                                              onClick: saveRole,
                                              loading: unref(roleSaving)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(editingRole) ? "Обновить" : "Создать"), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["loading"]),
                                            createVNode(VBtn, {
                                              variant: "text",
                                              color: "grey-darken-2",
                                              onClick: ($event) => showAddRoleDialog.value = false
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCard, { style: { "border-radius": "12px" } }, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                      default: withCtx(() => [
                                        createVNode("h2", { class: "text-h6 font-weight-bold" }, toDisplayString(unref(editingRole) ? "Редактирование" : "Добавление") + " роли", 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, { class: "pa-6" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "mb-4" }, [
                                          createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название роли"),
                                          createVNode(VTextField, {
                                            modelValue: unref(newRole).name,
                                            "onUpdate:modelValue": ($event) => unref(newRole).name = $event,
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "mb-6" }, [
                                          createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Описание"),
                                          createVNode(VTextarea, {
                                            modelValue: unref(newRole).description,
                                            "onUpdate:modelValue": ($event) => unref(newRole).description = $event,
                                            variant: "outlined",
                                            density: "compact",
                                            rows: "2",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("h3", { class: "text-subtitle-2 font-weight-bold mb-3" }, "Разрешения"),
                                        createVNode(VCheckbox, {
                                          modelValue: unref(newRole).canViewDashboard,
                                          "onUpdate:modelValue": ($event) => unref(newRole).canViewDashboard = $event,
                                          label: "Dashboard",
                                          "hide-details": "",
                                          class: "mb-2",
                                          color: "green-darken-3"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VCheckbox, {
                                          modelValue: unref(newRole).canManageCourses,
                                          "onUpdate:modelValue": ($event) => unref(newRole).canManageCourses = $event,
                                          label: "Курсы",
                                          "hide-details": "",
                                          class: "mb-2",
                                          color: "green-darken-3"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VCheckbox, {
                                          modelValue: unref(newRole).canManageUsers,
                                          "onUpdate:modelValue": ($event) => unref(newRole).canManageUsers = $event,
                                          label: "Пользователи",
                                          "hide-details": "",
                                          class: "mb-2",
                                          color: "green-darken-3"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VCheckbox, {
                                          modelValue: unref(newRole).canManagePurchases,
                                          "onUpdate:modelValue": ($event) => unref(newRole).canManagePurchases = $event,
                                          label: "Покупки",
                                          "hide-details": "",
                                          class: "mb-2",
                                          color: "green-darken-3"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VCheckbox, {
                                          modelValue: unref(newRole).canManageSettings,
                                          "onUpdate:modelValue": ($event) => unref(newRole).canManageSettings = $event,
                                          label: "Настройки",
                                          "hide-details": "",
                                          class: "mb-2",
                                          color: "green-darken-3"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VCheckbox, {
                                          modelValue: unref(newRole).canManageAdmins,
                                          "onUpdate:modelValue": ($event) => unref(newRole).canManageAdmins = $event,
                                          label: "Администраторы",
                                          "hide-details": "",
                                          class: "mb-2",
                                          color: "green-darken-3"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VCheckbox, {
                                          modelValue: unref(newRole).canEditPlan,
                                          "onUpdate:modelValue": ($event) => unref(newRole).canEditPlan = $event,
                                          label: "План",
                                          "hide-details": "",
                                          class: "mb-6",
                                          color: "green-darken-3"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", { class: "d-flex ga-2" }, [
                                          createVNode(VBtn, {
                                            color: "green-darken-3",
                                            variant: "flat",
                                            onClick: saveRole,
                                            loading: unref(roleSaving)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(editingRole) ? "Обновить" : "Создать"), 1)
                                            ]),
                                            _: 1
                                          }, 8, ["loading"]),
                                          createVNode(VBtn, {
                                            variant: "text",
                                            color: "grey-darken-2",
                                            onClick: ($event) => showAddRoleDialog.value = false
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "d-flex align-center mb-6" }, [
                            createVNode("div", null, [
                              createVNode("h2", {
                                class: "text-h6 font-weight-bold mb-1",
                                style: { "color": "#020617" }
                              }, "Роли и разрешения")
                            ]),
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              color: "green-darken-3",
                              variant: "flat",
                              size: "small",
                              onClick: ($event) => showAddRoleDialog.value = true
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  start: "",
                                  size: "18"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-plus")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Добавить роль ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(roles), (role) => {
                                return openBlock(), createBlock(VCol, {
                                  key: role.id,
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      class: "pa-4",
                                      style: { "border": "1px solid #E2E8F0", "border-radius": "12px" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex align-center mb-4" }, [
                                          createVNode("div", { class: "flex-grow-1" }, [
                                            createVNode("h3", {
                                              class: "text-subtitle-1 font-weight-bold mb-1",
                                              style: { "color": "#020617" }
                                            }, toDisplayString(role.name), 1),
                                            createVNode("p", { class: "text-caption text-grey-darken-1 mb-0" }, toDisplayString(role.description), 1)
                                          ]),
                                          createVNode(VBtn, {
                                            icon: "",
                                            size: "small",
                                            variant: "text",
                                            color: "grey-darken-2",
                                            onClick: ($event) => editRole(role)
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
                                            size: "small",
                                            variant: "text",
                                            color: "red",
                                            onClick: ($event) => deleteRole(role.id)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { size: "18" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-delete")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        createVNode(VDivider, { class: "my-3" }),
                                        createVNode("div", { class: "permissions-list" }, [
                                          createVNode("div", { class: "permission-item" }, [
                                            createVNode(VIcon, {
                                              color: role.canViewDashboard ? "green-darken-3" : "grey-lighten-1",
                                              size: "18"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(role.canViewDashboard ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"]),
                                            createVNode("span", { class: "text-caption" }, "Dashboard")
                                          ]),
                                          createVNode("div", { class: "permission-item" }, [
                                            createVNode(VIcon, {
                                              color: role.canManageCourses ? "green-darken-3" : "grey-lighten-1",
                                              size: "18"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(role.canManageCourses ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"]),
                                            createVNode("span", { class: "text-caption" }, "Курсы")
                                          ]),
                                          createVNode("div", { class: "permission-item" }, [
                                            createVNode(VIcon, {
                                              color: role.canManageUsers ? "green-darken-3" : "grey-lighten-1",
                                              size: "18"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(role.canManageUsers ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"]),
                                            createVNode("span", { class: "text-caption" }, "Пользователи")
                                          ]),
                                          createVNode("div", { class: "permission-item" }, [
                                            createVNode(VIcon, {
                                              color: role.canManagePurchases ? "green-darken-3" : "grey-lighten-1",
                                              size: "18"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(role.canManagePurchases ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"]),
                                            createVNode("span", { class: "text-caption" }, "Покупки")
                                          ]),
                                          createVNode("div", { class: "permission-item" }, [
                                            createVNode(VIcon, {
                                              color: role.canManageSettings ? "green-darken-3" : "grey-lighten-1",
                                              size: "18"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(role.canManageSettings ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"]),
                                            createVNode("span", { class: "text-caption" }, "Настройки")
                                          ]),
                                          createVNode("div", { class: "permission-item" }, [
                                            createVNode(VIcon, {
                                              color: role.canManageAdmins ? "green-darken-3" : "grey-lighten-1",
                                              size: "18"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(role.canManageAdmins ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"]),
                                            createVNode("span", { class: "text-caption" }, "Администраторы")
                                          ]),
                                          createVNode("div", { class: "permission-item" }, [
                                            createVNode(VIcon, {
                                              color: role.canEditPlan ? "green-darken-3" : "grey-lighten-1",
                                              size: "18"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(role.canEditPlan ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"]),
                                            createVNode("span", { class: "text-caption" }, "План")
                                          ])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          }),
                          createVNode(VDialog, {
                            modelValue: unref(showAddRoleDialog),
                            "onUpdate:modelValue": ($event) => isRef(showAddRoleDialog) ? showAddRoleDialog.value = $event : null,
                            "max-width": "600"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, { style: { "border-radius": "12px" } }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                    default: withCtx(() => [
                                      createVNode("h2", { class: "text-h6 font-weight-bold" }, toDisplayString(unref(editingRole) ? "Редактирование" : "Добавление") + " роли", 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, { class: "pa-6" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название роли"),
                                        createVNode(VTextField, {
                                          modelValue: unref(newRole).name,
                                          "onUpdate:modelValue": ($event) => unref(newRole).name = $event,
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mb-6" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Описание"),
                                        createVNode(VTextarea, {
                                          modelValue: unref(newRole).description,
                                          "onUpdate:modelValue": ($event) => unref(newRole).description = $event,
                                          variant: "outlined",
                                          density: "compact",
                                          rows: "2",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("h3", { class: "text-subtitle-2 font-weight-bold mb-3" }, "Разрешения"),
                                      createVNode(VCheckbox, {
                                        modelValue: unref(newRole).canViewDashboard,
                                        "onUpdate:modelValue": ($event) => unref(newRole).canViewDashboard = $event,
                                        label: "Dashboard",
                                        "hide-details": "",
                                        class: "mb-2",
                                        color: "green-darken-3"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VCheckbox, {
                                        modelValue: unref(newRole).canManageCourses,
                                        "onUpdate:modelValue": ($event) => unref(newRole).canManageCourses = $event,
                                        label: "Курсы",
                                        "hide-details": "",
                                        class: "mb-2",
                                        color: "green-darken-3"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VCheckbox, {
                                        modelValue: unref(newRole).canManageUsers,
                                        "onUpdate:modelValue": ($event) => unref(newRole).canManageUsers = $event,
                                        label: "Пользователи",
                                        "hide-details": "",
                                        class: "mb-2",
                                        color: "green-darken-3"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VCheckbox, {
                                        modelValue: unref(newRole).canManagePurchases,
                                        "onUpdate:modelValue": ($event) => unref(newRole).canManagePurchases = $event,
                                        label: "Покупки",
                                        "hide-details": "",
                                        class: "mb-2",
                                        color: "green-darken-3"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VCheckbox, {
                                        modelValue: unref(newRole).canManageSettings,
                                        "onUpdate:modelValue": ($event) => unref(newRole).canManageSettings = $event,
                                        label: "Настройки",
                                        "hide-details": "",
                                        class: "mb-2",
                                        color: "green-darken-3"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VCheckbox, {
                                        modelValue: unref(newRole).canManageAdmins,
                                        "onUpdate:modelValue": ($event) => unref(newRole).canManageAdmins = $event,
                                        label: "Администраторы",
                                        "hide-details": "",
                                        class: "mb-2",
                                        color: "green-darken-3"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VCheckbox, {
                                        modelValue: unref(newRole).canEditPlan,
                                        "onUpdate:modelValue": ($event) => unref(newRole).canEditPlan = $event,
                                        label: "План",
                                        "hide-details": "",
                                        class: "mb-6",
                                        color: "green-darken-3"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "d-flex ga-2" }, [
                                        createVNode(VBtn, {
                                          color: "green-darken-3",
                                          variant: "flat",
                                          onClick: saveRole,
                                          loading: unref(roleSaving)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(editingRole) ? "Обновить" : "Создать"), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["loading"]),
                                        createVNode(VBtn, {
                                          variant: "text",
                                          color: "grey-darken-2",
                                          onClick: ($event) => showAddRoleDialog.value = false
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
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VWindowItem, {
                    value: "admins",
                    class: "pa-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex align-center mb-6" data-v-9e5be3d5${_scopeId3}><h2 class="text-h6 font-weight-bold mb-0" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-9e5be3d5${_scopeId3}>Администраторы</h2>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "green-darken-3",
                          variant: "flat",
                          size: "small",
                          onClick: ($event) => showAddAdminDialog.value = true
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                start: "",
                                size: "18"
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
                              _push5(` Добавить `);
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
                                createTextVNode(" Добавить ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VTable, { class: "data-table" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<thead data-v-9e5be3d5${_scopeId4}><tr data-v-9e5be3d5${_scopeId4}><th class="text-left" data-v-9e5be3d5${_scopeId4}>Email</th><th class="text-left" data-v-9e5be3d5${_scopeId4}>Имя</th><th class="text-left" data-v-9e5be3d5${_scopeId4}>Роль</th><th class="text-left" data-v-9e5be3d5${_scopeId4}>Действия</th></tr></thead><tbody data-v-9e5be3d5${_scopeId4}><!--[-->`);
                              ssrRenderList(unref(admins), (admin) => {
                                _push5(`<tr data-v-9e5be3d5${_scopeId4}><td class="font-weight-medium" data-v-9e5be3d5${_scopeId4}>${ssrInterpolate(admin.email)}</td><td data-v-9e5be3d5${_scopeId4}>${ssrInterpolate(admin.name)}</td><td data-v-9e5be3d5${_scopeId4}>`);
                                _push5(ssrRenderComponent(VChip, {
                                  size: "small",
                                  color: "blue"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(getRoleName(admin.roleId))}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(getRoleName(admin.roleId)), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</td><td data-v-9e5be3d5${_scopeId4}>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  icon: "",
                                  size: "small",
                                  variant: "text",
                                  color: "grey-darken-2",
                                  onClick: ($event) => editAdmin(admin)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, { size: "18" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`mdi-pencil`);
                                          } else {
                                            return [
                                              createTextVNode("mdi-pencil")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
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
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, {
                                  icon: "",
                                  size: "small",
                                  variant: "text",
                                  color: "red",
                                  onClick: ($event) => deleteAdmin(admin.id)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, { size: "18" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`mdi-delete`);
                                          } else {
                                            return [
                                              createTextVNode("mdi-delete")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, { size: "18" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-delete")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</td></tr>`);
                              });
                              _push5(`<!--]--></tbody>`);
                            } else {
                              return [
                                createVNode("thead", null, [
                                  createVNode("tr", null, [
                                    createVNode("th", { class: "text-left" }, "Email"),
                                    createVNode("th", { class: "text-left" }, "Имя"),
                                    createVNode("th", { class: "text-left" }, "Роль"),
                                    createVNode("th", { class: "text-left" }, "Действия")
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(admins), (admin) => {
                                    return openBlock(), createBlock("tr", {
                                      key: admin.id
                                    }, [
                                      createVNode("td", { class: "font-weight-medium" }, toDisplayString(admin.email), 1),
                                      createVNode("td", null, toDisplayString(admin.name), 1),
                                      createVNode("td", null, [
                                        createVNode(VChip, {
                                          size: "small",
                                          color: "blue"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(getRoleName(admin.roleId)), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      createVNode("td", null, [
                                        createVNode(VBtn, {
                                          icon: "",
                                          size: "small",
                                          variant: "text",
                                          color: "grey-darken-2",
                                          onClick: ($event) => editAdmin(admin)
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
                                          size: "small",
                                          variant: "text",
                                          color: "red",
                                          onClick: ($event) => deleteAdmin(admin.id)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { size: "18" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-delete")
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDialog, {
                          modelValue: unref(showAddAdminDialog),
                          "onUpdate:modelValue": ($event) => isRef(showAddAdminDialog) ? showAddAdminDialog.value = $event : null,
                          "max-width": "500"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, { style: { "border-radius": "12px" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardTitle, { class: "pa-6 pb-2" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h2 class="text-h6 font-weight-bold" data-v-9e5be3d5${_scopeId6}>${ssrInterpolate(unref(editingAdmin) ? "Редактирование" : "Добавление")} администратора</h2>`);
                                        } else {
                                          return [
                                            createVNode("h2", { class: "text-h6 font-weight-bold" }, toDisplayString(unref(editingAdmin) ? "Редактирование" : "Добавление") + " администратора", 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardText, { class: "pa-6" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="mb-4" data-v-9e5be3d5${_scopeId6}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId6}>Email</label>`);
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(newAdmin).email,
                                            "onUpdate:modelValue": ($event) => unref(newAdmin).email = $event,
                                            type: "email",
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><div class="mb-4" data-v-9e5be3d5${_scopeId6}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId6}>Имя</label>`);
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(newAdmin).name,
                                            "onUpdate:modelValue": ($event) => unref(newAdmin).name = $event,
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><div class="mb-4" data-v-9e5be3d5${_scopeId6}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId6}>Роль</label>`);
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: unref(newAdmin).roleId,
                                            "onUpdate:modelValue": ($event) => unref(newAdmin).roleId = $event,
                                            items: unref(roles),
                                            "item-title": "name",
                                            "item-value": "id",
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><div class="d-flex ga-2" data-v-9e5be3d5${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VBtn, {
                                            color: "green-darken-3",
                                            variant: "flat",
                                            onClick: saveAdmin,
                                            loading: unref(adminSaving)
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(unref(editingAdmin) ? "Обновить" : "Создать")}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(unref(editingAdmin) ? "Обновить" : "Создать"), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            variant: "text",
                                            color: "grey-darken-2",
                                            onClick: ($event) => showAddAdminDialog.value = false
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Отмена `);
                                              } else {
                                                return [
                                                  createTextVNode(" Отмена ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "mb-4" }, [
                                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                              createVNode(VTextField, {
                                                modelValue: unref(newAdmin).email,
                                                "onUpdate:modelValue": ($event) => unref(newAdmin).email = $event,
                                                type: "email",
                                                variant: "outlined",
                                                density: "compact",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            createVNode("div", { class: "mb-4" }, [
                                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                                              createVNode(VTextField, {
                                                modelValue: unref(newAdmin).name,
                                                "onUpdate:modelValue": ($event) => unref(newAdmin).name = $event,
                                                variant: "outlined",
                                                density: "compact",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            createVNode("div", { class: "mb-4" }, [
                                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Роль"),
                                              createVNode(VSelect, {
                                                modelValue: unref(newAdmin).roleId,
                                                "onUpdate:modelValue": ($event) => unref(newAdmin).roleId = $event,
                                                items: unref(roles),
                                                "item-title": "name",
                                                "item-value": "id",
                                                variant: "outlined",
                                                density: "compact",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2" }, [
                                              createVNode(VBtn, {
                                                color: "green-darken-3",
                                                variant: "flat",
                                                onClick: saveAdmin,
                                                loading: unref(adminSaving)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(editingAdmin) ? "Обновить" : "Создать"), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["loading"]),
                                              createVNode(VBtn, {
                                                variant: "text",
                                                color: "grey-darken-2",
                                                onClick: ($event) => showAddAdminDialog.value = false
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                        default: withCtx(() => [
                                          createVNode("h2", { class: "text-h6 font-weight-bold" }, toDisplayString(unref(editingAdmin) ? "Редактирование" : "Добавление") + " администратора", 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardText, { class: "pa-6" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "mb-4" }, [
                                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                            createVNode(VTextField, {
                                              modelValue: unref(newAdmin).email,
                                              "onUpdate:modelValue": ($event) => unref(newAdmin).email = $event,
                                              type: "email",
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("div", { class: "mb-4" }, [
                                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                                            createVNode(VTextField, {
                                              modelValue: unref(newAdmin).name,
                                              "onUpdate:modelValue": ($event) => unref(newAdmin).name = $event,
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("div", { class: "mb-4" }, [
                                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Роль"),
                                            createVNode(VSelect, {
                                              modelValue: unref(newAdmin).roleId,
                                              "onUpdate:modelValue": ($event) => unref(newAdmin).roleId = $event,
                                              items: unref(roles),
                                              "item-title": "name",
                                              "item-value": "id",
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2" }, [
                                            createVNode(VBtn, {
                                              color: "green-darken-3",
                                              variant: "flat",
                                              onClick: saveAdmin,
                                              loading: unref(adminSaving)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(editingAdmin) ? "Обновить" : "Создать"), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["loading"]),
                                            createVNode(VBtn, {
                                              variant: "text",
                                              color: "grey-darken-2",
                                              onClick: ($event) => showAddAdminDialog.value = false
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCard, { style: { "border-radius": "12px" } }, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                      default: withCtx(() => [
                                        createVNode("h2", { class: "text-h6 font-weight-bold" }, toDisplayString(unref(editingAdmin) ? "Редактирование" : "Добавление") + " администратора", 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, { class: "pa-6" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "mb-4" }, [
                                          createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                          createVNode(VTextField, {
                                            modelValue: unref(newAdmin).email,
                                            "onUpdate:modelValue": ($event) => unref(newAdmin).email = $event,
                                            type: "email",
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "mb-4" }, [
                                          createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                                          createVNode(VTextField, {
                                            modelValue: unref(newAdmin).name,
                                            "onUpdate:modelValue": ($event) => unref(newAdmin).name = $event,
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "mb-4" }, [
                                          createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Роль"),
                                          createVNode(VSelect, {
                                            modelValue: unref(newAdmin).roleId,
                                            "onUpdate:modelValue": ($event) => unref(newAdmin).roleId = $event,
                                            items: unref(roles),
                                            "item-title": "name",
                                            "item-value": "id",
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2" }, [
                                          createVNode(VBtn, {
                                            color: "green-darken-3",
                                            variant: "flat",
                                            onClick: saveAdmin,
                                            loading: unref(adminSaving)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(editingAdmin) ? "Обновить" : "Создать"), 1)
                                            ]),
                                            _: 1
                                          }, 8, ["loading"]),
                                          createVNode(VBtn, {
                                            variant: "text",
                                            color: "grey-darken-2",
                                            onClick: ($event) => showAddAdminDialog.value = false
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "d-flex align-center mb-6" }, [
                            createVNode("h2", {
                              class: "text-h6 font-weight-bold mb-0",
                              style: { "color": "#020617" }
                            }, "Администраторы"),
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              color: "green-darken-3",
                              variant: "flat",
                              size: "small",
                              onClick: ($event) => showAddAdminDialog.value = true
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  start: "",
                                  size: "18"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-plus")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Добавить ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          createVNode(VTable, { class: "data-table" }, {
                            default: withCtx(() => [
                              createVNode("thead", null, [
                                createVNode("tr", null, [
                                  createVNode("th", { class: "text-left" }, "Email"),
                                  createVNode("th", { class: "text-left" }, "Имя"),
                                  createVNode("th", { class: "text-left" }, "Роль"),
                                  createVNode("th", { class: "text-left" }, "Действия")
                                ])
                              ]),
                              createVNode("tbody", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(admins), (admin) => {
                                  return openBlock(), createBlock("tr", {
                                    key: admin.id
                                  }, [
                                    createVNode("td", { class: "font-weight-medium" }, toDisplayString(admin.email), 1),
                                    createVNode("td", null, toDisplayString(admin.name), 1),
                                    createVNode("td", null, [
                                      createVNode(VChip, {
                                        size: "small",
                                        color: "blue"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(getRoleName(admin.roleId)), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    createVNode("td", null, [
                                      createVNode(VBtn, {
                                        icon: "",
                                        size: "small",
                                        variant: "text",
                                        color: "grey-darken-2",
                                        onClick: ($event) => editAdmin(admin)
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
                                        size: "small",
                                        variant: "text",
                                        color: "red",
                                        onClick: ($event) => deleteAdmin(admin.id)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { size: "18" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-delete")
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
                            ]),
                            _: 1
                          }),
                          createVNode(VDialog, {
                            modelValue: unref(showAddAdminDialog),
                            "onUpdate:modelValue": ($event) => isRef(showAddAdminDialog) ? showAddAdminDialog.value = $event : null,
                            "max-width": "500"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, { style: { "border-radius": "12px" } }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                    default: withCtx(() => [
                                      createVNode("h2", { class: "text-h6 font-weight-bold" }, toDisplayString(unref(editingAdmin) ? "Редактирование" : "Добавление") + " администратора", 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, { class: "pa-6" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                        createVNode(VTextField, {
                                          modelValue: unref(newAdmin).email,
                                          "onUpdate:modelValue": ($event) => unref(newAdmin).email = $event,
                                          type: "email",
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                                        createVNode(VTextField, {
                                          modelValue: unref(newAdmin).name,
                                          "onUpdate:modelValue": ($event) => unref(newAdmin).name = $event,
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Роль"),
                                        createVNode(VSelect, {
                                          modelValue: unref(newAdmin).roleId,
                                          "onUpdate:modelValue": ($event) => unref(newAdmin).roleId = $event,
                                          items: unref(roles),
                                          "item-title": "name",
                                          "item-value": "id",
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                      ]),
                                      createVNode("div", { class: "d-flex ga-2" }, [
                                        createVNode(VBtn, {
                                          color: "green-darken-3",
                                          variant: "flat",
                                          onClick: saveAdmin,
                                          loading: unref(adminSaving)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(editingAdmin) ? "Обновить" : "Создать"), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["loading"]),
                                        createVNode(VBtn, {
                                          variant: "text",
                                          color: "grey-darken-2",
                                          onClick: ($event) => showAddAdminDialog.value = false
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
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VWindowItem, {
                    value: "vk",
                    class: "pa-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex align-center mb-6" data-v-9e5be3d5${_scopeId3}><h2 class="text-h6 font-weight-bold mb-0" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-9e5be3d5${_scopeId3}>ВКонтакте</h2>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "green-darken-3",
                          variant: "flat",
                          size: "small",
                          onClick: ($event) => showAddVkDialog.value = true
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                start: "",
                                size: "18"
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
                              _push5(` Добавить группу `);
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
                                createTextVNode(" Добавить группу ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(vkGroups), (group) => {
                                _push5(ssrRenderComponent(VCol, {
                                  key: group.id,
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VCard, {
                                        class: "pa-4",
                                        style: { "border": "1px solid #E2E8F0", "border-radius": "12px" }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="d-flex align-center mb-4" data-v-9e5be3d5${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VIcon, {
                                              color: "blue",
                                              class: "mr-3"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-vk`);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-vk")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<div class="flex-grow-1" data-v-9e5be3d5${_scopeId6}><h3 class="text-subtitle-1 font-weight-bold mb-0" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-9e5be3d5${_scopeId6}>${ssrInterpolate(group.name)}</h3></div>`);
                                            _push7(ssrRenderComponent(VBtn, {
                                              icon: "",
                                              size: "small",
                                              variant: "text",
                                              color: "grey-darken-2",
                                              onClick: ($event) => editVkGroup(group)
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VIcon, { size: "18" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`mdi-pencil`);
                                                      } else {
                                                        return [
                                                          createTextVNode("mdi-pencil")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
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
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VBtn, {
                                              icon: "",
                                              size: "small",
                                              variant: "text",
                                              color: "red",
                                              onClick: ($event) => deleteVkGroup(group.id)
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VIcon, { size: "18" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`mdi-delete`);
                                                      } else {
                                                        return [
                                                          createTextVNode("mdi-delete")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VIcon, { size: "18" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-delete")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</div><div class="mb-3" data-v-9e5be3d5${_scopeId6}><p class="text-caption text-grey-darken-1 mb-1" data-v-9e5be3d5${_scopeId6}>ID группы: ${ssrInterpolate(group.vkId)}</p><p class="text-caption text-grey-darken-1" data-v-9e5be3d5${_scopeId6}>Курс: ${ssrInterpolate(group.courseSlug)}</p></div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "d-flex align-center mb-4" }, [
                                                createVNode(VIcon, {
                                                  color: "blue",
                                                  class: "mr-3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-vk")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("div", { class: "flex-grow-1" }, [
                                                  createVNode("h3", {
                                                    class: "text-subtitle-1 font-weight-bold mb-0",
                                                    style: { "color": "#020617" }
                                                  }, toDisplayString(group.name), 1)
                                                ]),
                                                createVNode(VBtn, {
                                                  icon: "",
                                                  size: "small",
                                                  variant: "text",
                                                  color: "grey-darken-2",
                                                  onClick: ($event) => editVkGroup(group)
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
                                                  size: "small",
                                                  variant: "text",
                                                  color: "red",
                                                  onClick: ($event) => deleteVkGroup(group.id)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { size: "18" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-delete")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])
                                              ]),
                                              createVNode("div", { class: "mb-3" }, [
                                                createVNode("p", { class: "text-caption text-grey-darken-1 mb-1" }, "ID группы: " + toDisplayString(group.vkId), 1),
                                                createVNode("p", { class: "text-caption text-grey-darken-1" }, "Курс: " + toDisplayString(group.courseSlug), 1)
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
                                          style: { "border": "1px solid #E2E8F0", "border-radius": "12px" }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex align-center mb-4" }, [
                                              createVNode(VIcon, {
                                                color: "blue",
                                                class: "mr-3"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-vk")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("div", { class: "flex-grow-1" }, [
                                                createVNode("h3", {
                                                  class: "text-subtitle-1 font-weight-bold mb-0",
                                                  style: { "color": "#020617" }
                                                }, toDisplayString(group.name), 1)
                                              ]),
                                              createVNode(VBtn, {
                                                icon: "",
                                                size: "small",
                                                variant: "text",
                                                color: "grey-darken-2",
                                                onClick: ($event) => editVkGroup(group)
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
                                                size: "small",
                                                variant: "text",
                                                color: "red",
                                                onClick: ($event) => deleteVkGroup(group.id)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, { size: "18" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-delete")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ]),
                                            createVNode("div", { class: "mb-3" }, [
                                              createVNode("p", { class: "text-caption text-grey-darken-1 mb-1" }, "ID группы: " + toDisplayString(group.vkId), 1),
                                              createVNode("p", { class: "text-caption text-grey-darken-1" }, "Курс: " + toDisplayString(group.courseSlug), 1)
                                            ])
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(vkGroups), (group) => {
                                  return openBlock(), createBlock(VCol, {
                                    key: group.id,
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        class: "pa-4",
                                        style: { "border": "1px solid #E2E8F0", "border-radius": "12px" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex align-center mb-4" }, [
                                            createVNode(VIcon, {
                                              color: "blue",
                                              class: "mr-3"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-vk")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("div", { class: "flex-grow-1" }, [
                                              createVNode("h3", {
                                                class: "text-subtitle-1 font-weight-bold mb-0",
                                                style: { "color": "#020617" }
                                              }, toDisplayString(group.name), 1)
                                            ]),
                                            createVNode(VBtn, {
                                              icon: "",
                                              size: "small",
                                              variant: "text",
                                              color: "grey-darken-2",
                                              onClick: ($event) => editVkGroup(group)
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
                                              size: "small",
                                              variant: "text",
                                              color: "red",
                                              onClick: ($event) => deleteVkGroup(group.id)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, { size: "18" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-delete")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ]),
                                          createVNode("div", { class: "mb-3" }, [
                                            createVNode("p", { class: "text-caption text-grey-darken-1 mb-1" }, "ID группы: " + toDisplayString(group.vkId), 1),
                                            createVNode("p", { class: "text-caption text-grey-darken-1" }, "Курс: " + toDisplayString(group.courseSlug), 1)
                                          ])
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDialog, {
                          modelValue: unref(showAddVkDialog),
                          "onUpdate:modelValue": ($event) => isRef(showAddVkDialog) ? showAddVkDialog.value = $event : null,
                          "max-width": "500"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, { style: { "border-radius": "12px" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCardTitle, { class: "pa-6 pb-2" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h2 class="text-h6 font-weight-bold" data-v-9e5be3d5${_scopeId6}>${ssrInterpolate(unref(editingVkGroup) ? "Редактирование" : "Добавление")} VK группы</h2>`);
                                        } else {
                                          return [
                                            createVNode("h2", { class: "text-h6 font-weight-bold" }, toDisplayString(unref(editingVkGroup) ? "Редактирование" : "Добавление") + " VK группы", 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCardText, { class: "pa-6" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="mb-4" data-v-9e5be3d5${_scopeId6}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId6}>Название группы</label>`);
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(newVkGroup).name,
                                            "onUpdate:modelValue": ($event) => unref(newVkGroup).name = $event,
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><div class="mb-4" data-v-9e5be3d5${_scopeId6}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId6}>ID группы ВК</label>`);
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(newVkGroup).vkId,
                                            "onUpdate:modelValue": ($event) => unref(newVkGroup).vkId = $event,
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><div class="mb-4" data-v-9e5be3d5${_scopeId6}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId6}>Курс</label>`);
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: unref(newVkGroup).courseSlug,
                                            "onUpdate:modelValue": ($event) => unref(newVkGroup).courseSlug = $event,
                                            items: ["tekhnologiya-poshiva", "master-konstruirovaniya", "damskoe-bele"],
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><div class="mb-6" data-v-9e5be3d5${_scopeId6}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId6}>Токен сообщества</label>`);
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(newVkGroup).token,
                                            "onUpdate:modelValue": ($event) => unref(newVkGroup).token = $event,
                                            type: "password",
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div><div class="d-flex ga-2" data-v-9e5be3d5${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VBtn, {
                                            color: "green-darken-3",
                                            variant: "flat",
                                            onClick: saveVkGroup,
                                            loading: unref(vkSaving)
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(unref(editingVkGroup) ? "Обновить" : "Добавить")}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(unref(editingVkGroup) ? "Обновить" : "Добавить"), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            variant: "text",
                                            color: "grey-darken-2",
                                            onClick: ($event) => showAddVkDialog.value = false
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Отмена `);
                                              } else {
                                                return [
                                                  createTextVNode(" Отмена ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "mb-4" }, [
                                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название группы"),
                                              createVNode(VTextField, {
                                                modelValue: unref(newVkGroup).name,
                                                "onUpdate:modelValue": ($event) => unref(newVkGroup).name = $event,
                                                variant: "outlined",
                                                density: "compact",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            createVNode("div", { class: "mb-4" }, [
                                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "ID группы ВК"),
                                              createVNode(VTextField, {
                                                modelValue: unref(newVkGroup).vkId,
                                                "onUpdate:modelValue": ($event) => unref(newVkGroup).vkId = $event,
                                                variant: "outlined",
                                                density: "compact",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            createVNode("div", { class: "mb-4" }, [
                                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Курс"),
                                              createVNode(VSelect, {
                                                modelValue: unref(newVkGroup).courseSlug,
                                                "onUpdate:modelValue": ($event) => unref(newVkGroup).courseSlug = $event,
                                                items: ["tekhnologiya-poshiva", "master-konstruirovaniya", "damskoe-bele"],
                                                variant: "outlined",
                                                density: "compact",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            createVNode("div", { class: "mb-6" }, [
                                              createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Токен сообщества"),
                                              createVNode(VTextField, {
                                                modelValue: unref(newVkGroup).token,
                                                "onUpdate:modelValue": ($event) => unref(newVkGroup).token = $event,
                                                type: "password",
                                                variant: "outlined",
                                                density: "compact",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2" }, [
                                              createVNode(VBtn, {
                                                color: "green-darken-3",
                                                variant: "flat",
                                                onClick: saveVkGroup,
                                                loading: unref(vkSaving)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(editingVkGroup) ? "Обновить" : "Добавить"), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["loading"]),
                                              createVNode(VBtn, {
                                                variant: "text",
                                                color: "grey-darken-2",
                                                onClick: ($event) => showAddVkDialog.value = false
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                        default: withCtx(() => [
                                          createVNode("h2", { class: "text-h6 font-weight-bold" }, toDisplayString(unref(editingVkGroup) ? "Редактирование" : "Добавление") + " VK группы", 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardText, { class: "pa-6" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "mb-4" }, [
                                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название группы"),
                                            createVNode(VTextField, {
                                              modelValue: unref(newVkGroup).name,
                                              "onUpdate:modelValue": ($event) => unref(newVkGroup).name = $event,
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("div", { class: "mb-4" }, [
                                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "ID группы ВК"),
                                            createVNode(VTextField, {
                                              modelValue: unref(newVkGroup).vkId,
                                              "onUpdate:modelValue": ($event) => unref(newVkGroup).vkId = $event,
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("div", { class: "mb-4" }, [
                                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Курс"),
                                            createVNode(VSelect, {
                                              modelValue: unref(newVkGroup).courseSlug,
                                              "onUpdate:modelValue": ($event) => unref(newVkGroup).courseSlug = $event,
                                              items: ["tekhnologiya-poshiva", "master-konstruirovaniya", "damskoe-bele"],
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("div", { class: "mb-6" }, [
                                            createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Токен сообщества"),
                                            createVNode(VTextField, {
                                              modelValue: unref(newVkGroup).token,
                                              "onUpdate:modelValue": ($event) => unref(newVkGroup).token = $event,
                                              type: "password",
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2" }, [
                                            createVNode(VBtn, {
                                              color: "green-darken-3",
                                              variant: "flat",
                                              onClick: saveVkGroup,
                                              loading: unref(vkSaving)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(editingVkGroup) ? "Обновить" : "Добавить"), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["loading"]),
                                            createVNode(VBtn, {
                                              variant: "text",
                                              color: "grey-darken-2",
                                              onClick: ($event) => showAddVkDialog.value = false
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCard, { style: { "border-radius": "12px" } }, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                      default: withCtx(() => [
                                        createVNode("h2", { class: "text-h6 font-weight-bold" }, toDisplayString(unref(editingVkGroup) ? "Редактирование" : "Добавление") + " VK группы", 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, { class: "pa-6" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "mb-4" }, [
                                          createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название группы"),
                                          createVNode(VTextField, {
                                            modelValue: unref(newVkGroup).name,
                                            "onUpdate:modelValue": ($event) => unref(newVkGroup).name = $event,
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "mb-4" }, [
                                          createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "ID группы ВК"),
                                          createVNode(VTextField, {
                                            modelValue: unref(newVkGroup).vkId,
                                            "onUpdate:modelValue": ($event) => unref(newVkGroup).vkId = $event,
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "mb-4" }, [
                                          createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Курс"),
                                          createVNode(VSelect, {
                                            modelValue: unref(newVkGroup).courseSlug,
                                            "onUpdate:modelValue": ($event) => unref(newVkGroup).courseSlug = $event,
                                            items: ["tekhnologiya-poshiva", "master-konstruirovaniya", "damskoe-bele"],
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "mb-6" }, [
                                          createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Токен сообщества"),
                                          createVNode(VTextField, {
                                            modelValue: unref(newVkGroup).token,
                                            "onUpdate:modelValue": ($event) => unref(newVkGroup).token = $event,
                                            type: "password",
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2" }, [
                                          createVNode(VBtn, {
                                            color: "green-darken-3",
                                            variant: "flat",
                                            onClick: saveVkGroup,
                                            loading: unref(vkSaving)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(editingVkGroup) ? "Обновить" : "Добавить"), 1)
                                            ]),
                                            _: 1
                                          }, 8, ["loading"]),
                                          createVNode(VBtn, {
                                            variant: "text",
                                            color: "grey-darken-2",
                                            onClick: ($event) => showAddVkDialog.value = false
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "d-flex align-center mb-6" }, [
                            createVNode("h2", {
                              class: "text-h6 font-weight-bold mb-0",
                              style: { "color": "#020617" }
                            }, "ВКонтакте"),
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              color: "green-darken-3",
                              variant: "flat",
                              size: "small",
                              onClick: ($event) => showAddVkDialog.value = true
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  start: "",
                                  size: "18"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-plus")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Добавить группу ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(vkGroups), (group) => {
                                return openBlock(), createBlock(VCol, {
                                  key: group.id,
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      class: "pa-4",
                                      style: { "border": "1px solid #E2E8F0", "border-radius": "12px" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex align-center mb-4" }, [
                                          createVNode(VIcon, {
                                            color: "blue",
                                            class: "mr-3"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-vk")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", { class: "flex-grow-1" }, [
                                            createVNode("h3", {
                                              class: "text-subtitle-1 font-weight-bold mb-0",
                                              style: { "color": "#020617" }
                                            }, toDisplayString(group.name), 1)
                                          ]),
                                          createVNode(VBtn, {
                                            icon: "",
                                            size: "small",
                                            variant: "text",
                                            color: "grey-darken-2",
                                            onClick: ($event) => editVkGroup(group)
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
                                            size: "small",
                                            variant: "text",
                                            color: "red",
                                            onClick: ($event) => deleteVkGroup(group.id)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { size: "18" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-delete")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        createVNode("div", { class: "mb-3" }, [
                                          createVNode("p", { class: "text-caption text-grey-darken-1 mb-1" }, "ID группы: " + toDisplayString(group.vkId), 1),
                                          createVNode("p", { class: "text-caption text-grey-darken-1" }, "Курс: " + toDisplayString(group.courseSlug), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          }),
                          createVNode(VDialog, {
                            modelValue: unref(showAddVkDialog),
                            "onUpdate:modelValue": ($event) => isRef(showAddVkDialog) ? showAddVkDialog.value = $event : null,
                            "max-width": "500"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, { style: { "border-radius": "12px" } }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                    default: withCtx(() => [
                                      createVNode("h2", { class: "text-h6 font-weight-bold" }, toDisplayString(unref(editingVkGroup) ? "Редактирование" : "Добавление") + " VK группы", 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, { class: "pa-6" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название группы"),
                                        createVNode(VTextField, {
                                          modelValue: unref(newVkGroup).name,
                                          "onUpdate:modelValue": ($event) => unref(newVkGroup).name = $event,
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "ID группы ВК"),
                                        createVNode(VTextField, {
                                          modelValue: unref(newVkGroup).vkId,
                                          "onUpdate:modelValue": ($event) => unref(newVkGroup).vkId = $event,
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Курс"),
                                        createVNode(VSelect, {
                                          modelValue: unref(newVkGroup).courseSlug,
                                          "onUpdate:modelValue": ($event) => unref(newVkGroup).courseSlug = $event,
                                          items: ["tekhnologiya-poshiva", "master-konstruirovaniya", "damskoe-bele"],
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mb-6" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Токен сообщества"),
                                        createVNode(VTextField, {
                                          modelValue: unref(newVkGroup).token,
                                          "onUpdate:modelValue": ($event) => unref(newVkGroup).token = $event,
                                          type: "password",
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "d-flex ga-2" }, [
                                        createVNode(VBtn, {
                                          color: "green-darken-3",
                                          variant: "flat",
                                          onClick: saveVkGroup,
                                          loading: unref(vkSaving)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(editingVkGroup) ? "Обновить" : "Добавить"), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["loading"]),
                                        createVNode(VBtn, {
                                          variant: "text",
                                          color: "grey-darken-2",
                                          onClick: ($event) => showAddVkDialog.value = false
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
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VWindowItem, {
                    value: "email",
                    class: "pa-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-h6 font-weight-bold mb-6" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-9e5be3d5${_scopeId3}>Email уведомления</h2>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="mb-4" data-v-9e5be3d5${_scopeId5}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId5}>SMTP Host</label>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(email).smtpHost,
                                      "onUpdate:modelValue": ($event) => unref(email).smtpHost = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="mb-4" data-v-9e5be3d5${_scopeId5}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId5}>SMTP Port</label>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(email).smtpPort,
                                      "onUpdate:modelValue": ($event) => unref(email).smtpPort = $event,
                                      modelModifiers: { number: true },
                                      type: "number",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="mb-4" data-v-9e5be3d5${_scopeId5}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId5}>Email</label>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(email).smtpUser,
                                      "onUpdate:modelValue": ($event) => unref(email).smtpUser = $event,
                                      type: "email",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="mb-4" data-v-9e5be3d5${_scopeId5}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId5}>Пароль</label>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(email).smtpPass,
                                      "onUpdate:modelValue": ($event) => unref(email).smtpPass = $event,
                                      type: "password",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="mb-6" data-v-9e5be3d5${_scopeId5}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId5}>From Email</label>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(email).smtpFrom,
                                      "onUpdate:modelValue": ($event) => unref(email).smtpFrom = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(VCheckbox, {
                                      modelValue: unref(email).enableWelcome,
                                      "onUpdate:modelValue": ($event) => unref(email).enableWelcome = $event,
                                      label: "Приветственное письмо",
                                      "hide-details": "",
                                      class: "mb-2",
                                      color: "green-darken-3"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCheckbox, {
                                      modelValue: unref(email).enablePurchase,
                                      "onUpdate:modelValue": ($event) => unref(email).enablePurchase = $event,
                                      label: "Письмо при покупке",
                                      "hide-details": "",
                                      class: "mb-2",
                                      color: "green-darken-3"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCheckbox, {
                                      modelValue: unref(email).enableVkGroup,
                                      "onUpdate:modelValue": ($event) => unref(email).enableVkGroup = $event,
                                      label: "Письмо при добавлении в VK",
                                      "hide-details": "",
                                      class: "mb-6",
                                      color: "green-darken-3"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "green-darken-3",
                                      variant: "flat",
                                      onClick: saveEmail,
                                      loading: unref(email).saving
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Сохранить `);
                                        } else {
                                          return [
                                            createTextVNode(" Сохранить ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "SMTP Host"),
                                        createVNode(VTextField, {
                                          modelValue: unref(email).smtpHost,
                                          "onUpdate:modelValue": ($event) => unref(email).smtpHost = $event,
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "SMTP Port"),
                                        createVNode(VTextField, {
                                          modelValue: unref(email).smtpPort,
                                          "onUpdate:modelValue": ($event) => unref(email).smtpPort = $event,
                                          modelModifiers: { number: true },
                                          type: "number",
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                        createVNode(VTextField, {
                                          modelValue: unref(email).smtpUser,
                                          "onUpdate:modelValue": ($event) => unref(email).smtpUser = $event,
                                          type: "email",
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Пароль"),
                                        createVNode(VTextField, {
                                          modelValue: unref(email).smtpPass,
                                          "onUpdate:modelValue": ($event) => unref(email).smtpPass = $event,
                                          type: "password",
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mb-6" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "From Email"),
                                        createVNode(VTextField, {
                                          modelValue: unref(email).smtpFrom,
                                          "onUpdate:modelValue": ($event) => unref(email).smtpFrom = $event,
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode(VCheckbox, {
                                        modelValue: unref(email).enableWelcome,
                                        "onUpdate:modelValue": ($event) => unref(email).enableWelcome = $event,
                                        label: "Приветственное письмо",
                                        "hide-details": "",
                                        class: "mb-2",
                                        color: "green-darken-3"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VCheckbox, {
                                        modelValue: unref(email).enablePurchase,
                                        "onUpdate:modelValue": ($event) => unref(email).enablePurchase = $event,
                                        label: "Письмо при покупке",
                                        "hide-details": "",
                                        class: "mb-2",
                                        color: "green-darken-3"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VCheckbox, {
                                        modelValue: unref(email).enableVkGroup,
                                        "onUpdate:modelValue": ($event) => unref(email).enableVkGroup = $event,
                                        label: "Письмо при добавлении в VK",
                                        "hide-details": "",
                                        class: "mb-6",
                                        color: "green-darken-3"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VBtn, {
                                        color: "green-darken-3",
                                        variant: "flat",
                                        onClick: saveEmail,
                                        loading: unref(email).saving
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Сохранить ")
                                        ]),
                                        _: 1
                                      }, 8, ["loading"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mb-4" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "SMTP Host"),
                                      createVNode(VTextField, {
                                        modelValue: unref(email).smtpHost,
                                        "onUpdate:modelValue": ($event) => unref(email).smtpHost = $event,
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "mb-4" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "SMTP Port"),
                                      createVNode(VTextField, {
                                        modelValue: unref(email).smtpPort,
                                        "onUpdate:modelValue": ($event) => unref(email).smtpPort = $event,
                                        modelModifiers: { number: true },
                                        type: "number",
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "mb-4" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                      createVNode(VTextField, {
                                        modelValue: unref(email).smtpUser,
                                        "onUpdate:modelValue": ($event) => unref(email).smtpUser = $event,
                                        type: "email",
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "mb-4" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Пароль"),
                                      createVNode(VTextField, {
                                        modelValue: unref(email).smtpPass,
                                        "onUpdate:modelValue": ($event) => unref(email).smtpPass = $event,
                                        type: "password",
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "mb-6" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "From Email"),
                                      createVNode(VTextField, {
                                        modelValue: unref(email).smtpFrom,
                                        "onUpdate:modelValue": ($event) => unref(email).smtpFrom = $event,
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode(VCheckbox, {
                                      modelValue: unref(email).enableWelcome,
                                      "onUpdate:modelValue": ($event) => unref(email).enableWelcome = $event,
                                      label: "Приветственное письмо",
                                      "hide-details": "",
                                      class: "mb-2",
                                      color: "green-darken-3"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VCheckbox, {
                                      modelValue: unref(email).enablePurchase,
                                      "onUpdate:modelValue": ($event) => unref(email).enablePurchase = $event,
                                      label: "Письмо при покупке",
                                      "hide-details": "",
                                      class: "mb-2",
                                      color: "green-darken-3"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VCheckbox, {
                                      modelValue: unref(email).enableVkGroup,
                                      "onUpdate:modelValue": ($event) => unref(email).enableVkGroup = $event,
                                      label: "Письмо при добавлении в VK",
                                      "hide-details": "",
                                      class: "mb-6",
                                      color: "green-darken-3"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VBtn, {
                                      color: "green-darken-3",
                                      variant: "flat",
                                      onClick: saveEmail,
                                      loading: unref(email).saving
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Сохранить ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h2", {
                            class: "text-h6 font-weight-bold mb-6",
                            style: { "color": "#020617" }
                          }, "Email уведомления"),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "SMTP Host"),
                                    createVNode(VTextField, {
                                      modelValue: unref(email).smtpHost,
                                      "onUpdate:modelValue": ($event) => unref(email).smtpHost = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "SMTP Port"),
                                    createVNode(VTextField, {
                                      modelValue: unref(email).smtpPort,
                                      "onUpdate:modelValue": ($event) => unref(email).smtpPort = $event,
                                      modelModifiers: { number: true },
                                      type: "number",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                    createVNode(VTextField, {
                                      modelValue: unref(email).smtpUser,
                                      "onUpdate:modelValue": ($event) => unref(email).smtpUser = $event,
                                      type: "email",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Пароль"),
                                    createVNode(VTextField, {
                                      modelValue: unref(email).smtpPass,
                                      "onUpdate:modelValue": ($event) => unref(email).smtpPass = $event,
                                      type: "password",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mb-6" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "From Email"),
                                    createVNode(VTextField, {
                                      modelValue: unref(email).smtpFrom,
                                      "onUpdate:modelValue": ($event) => unref(email).smtpFrom = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode(VCheckbox, {
                                    modelValue: unref(email).enableWelcome,
                                    "onUpdate:modelValue": ($event) => unref(email).enableWelcome = $event,
                                    label: "Приветственное письмо",
                                    "hide-details": "",
                                    class: "mb-2",
                                    color: "green-darken-3"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VCheckbox, {
                                    modelValue: unref(email).enablePurchase,
                                    "onUpdate:modelValue": ($event) => unref(email).enablePurchase = $event,
                                    label: "Письмо при покупке",
                                    "hide-details": "",
                                    class: "mb-2",
                                    color: "green-darken-3"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VCheckbox, {
                                    modelValue: unref(email).enableVkGroup,
                                    "onUpdate:modelValue": ($event) => unref(email).enableVkGroup = $event,
                                    label: "Письмо при добавлении в VK",
                                    "hide-details": "",
                                    class: "mb-6",
                                    color: "green-darken-3"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VBtn, {
                                    color: "green-darken-3",
                                    variant: "flat",
                                    onClick: saveEmail,
                                    loading: unref(email).saving
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Сохранить ")
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VWindowItem, {
                    value: "seo",
                    class: "pa-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-h6 font-weight-bold mb-6" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-9e5be3d5${_scopeId3}>SEO оптимизация</h2>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="mb-4" data-v-9e5be3d5${_scopeId5}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId5}>Заголовок сайта</label>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(seo).title,
                                      "onUpdate:modelValue": ($event) => unref(seo).title = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="mb-4" data-v-9e5be3d5${_scopeId5}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId5}>Описание</label>`);
                                    _push6(ssrRenderComponent(VTextarea, {
                                      modelValue: unref(seo).description,
                                      "onUpdate:modelValue": ($event) => unref(seo).description = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      rows: "3",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="mb-4" data-v-9e5be3d5${_scopeId5}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId5}>Ключевые слова</label>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(seo).keywords,
                                      "onUpdate:modelValue": ($event) => unref(seo).keywords = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(VCheckbox, {
                                      modelValue: unref(seo).enableSitemap,
                                      "onUpdate:modelValue": ($event) => unref(seo).enableSitemap = $event,
                                      label: "Включить sitemap.xml",
                                      "hide-details": "",
                                      class: "mb-2",
                                      color: "green-darken-3"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCheckbox, {
                                      modelValue: unref(seo).enableRobots,
                                      "onUpdate:modelValue": ($event) => unref(seo).enableRobots = $event,
                                      label: "Включить robots.txt",
                                      "hide-details": "",
                                      class: "mb-6",
                                      color: "green-darken-3"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "green-darken-3",
                                      variant: "flat",
                                      onClick: saveSeo,
                                      loading: unref(seo).saving
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Сохранить `);
                                        } else {
                                          return [
                                            createTextVNode(" Сохранить ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Заголовок сайта"),
                                        createVNode(VTextField, {
                                          modelValue: unref(seo).title,
                                          "onUpdate:modelValue": ($event) => unref(seo).title = $event,
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Описание"),
                                        createVNode(VTextarea, {
                                          modelValue: unref(seo).description,
                                          "onUpdate:modelValue": ($event) => unref(seo).description = $event,
                                          variant: "outlined",
                                          density: "compact",
                                          rows: "3",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Ключевые слова"),
                                        createVNode(VTextField, {
                                          modelValue: unref(seo).keywords,
                                          "onUpdate:modelValue": ($event) => unref(seo).keywords = $event,
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode(VCheckbox, {
                                        modelValue: unref(seo).enableSitemap,
                                        "onUpdate:modelValue": ($event) => unref(seo).enableSitemap = $event,
                                        label: "Включить sitemap.xml",
                                        "hide-details": "",
                                        class: "mb-2",
                                        color: "green-darken-3"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VCheckbox, {
                                        modelValue: unref(seo).enableRobots,
                                        "onUpdate:modelValue": ($event) => unref(seo).enableRobots = $event,
                                        label: "Включить robots.txt",
                                        "hide-details": "",
                                        class: "mb-6",
                                        color: "green-darken-3"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VBtn, {
                                        color: "green-darken-3",
                                        variant: "flat",
                                        onClick: saveSeo,
                                        loading: unref(seo).saving
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Сохранить ")
                                        ]),
                                        _: 1
                                      }, 8, ["loading"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mb-4" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Заголовок сайта"),
                                      createVNode(VTextField, {
                                        modelValue: unref(seo).title,
                                        "onUpdate:modelValue": ($event) => unref(seo).title = $event,
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "mb-4" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Описание"),
                                      createVNode(VTextarea, {
                                        modelValue: unref(seo).description,
                                        "onUpdate:modelValue": ($event) => unref(seo).description = $event,
                                        variant: "outlined",
                                        density: "compact",
                                        rows: "3",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "mb-4" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Ключевые слова"),
                                      createVNode(VTextField, {
                                        modelValue: unref(seo).keywords,
                                        "onUpdate:modelValue": ($event) => unref(seo).keywords = $event,
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode(VCheckbox, {
                                      modelValue: unref(seo).enableSitemap,
                                      "onUpdate:modelValue": ($event) => unref(seo).enableSitemap = $event,
                                      label: "Включить sitemap.xml",
                                      "hide-details": "",
                                      class: "mb-2",
                                      color: "green-darken-3"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VCheckbox, {
                                      modelValue: unref(seo).enableRobots,
                                      "onUpdate:modelValue": ($event) => unref(seo).enableRobots = $event,
                                      label: "Включить robots.txt",
                                      "hide-details": "",
                                      class: "mb-6",
                                      color: "green-darken-3"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VBtn, {
                                      color: "green-darken-3",
                                      variant: "flat",
                                      onClick: saveSeo,
                                      loading: unref(seo).saving
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Сохранить ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h2", {
                            class: "text-h6 font-weight-bold mb-6",
                            style: { "color": "#020617" }
                          }, "SEO оптимизация"),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Заголовок сайта"),
                                    createVNode(VTextField, {
                                      modelValue: unref(seo).title,
                                      "onUpdate:modelValue": ($event) => unref(seo).title = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Описание"),
                                    createVNode(VTextarea, {
                                      modelValue: unref(seo).description,
                                      "onUpdate:modelValue": ($event) => unref(seo).description = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      rows: "3",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Ключевые слова"),
                                    createVNode(VTextField, {
                                      modelValue: unref(seo).keywords,
                                      "onUpdate:modelValue": ($event) => unref(seo).keywords = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode(VCheckbox, {
                                    modelValue: unref(seo).enableSitemap,
                                    "onUpdate:modelValue": ($event) => unref(seo).enableSitemap = $event,
                                    label: "Включить sitemap.xml",
                                    "hide-details": "",
                                    class: "mb-2",
                                    color: "green-darken-3"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VCheckbox, {
                                    modelValue: unref(seo).enableRobots,
                                    "onUpdate:modelValue": ($event) => unref(seo).enableRobots = $event,
                                    label: "Включить robots.txt",
                                    "hide-details": "",
                                    class: "mb-6",
                                    color: "green-darken-3"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VBtn, {
                                    color: "green-darken-3",
                                    variant: "flat",
                                    onClick: saveSeo,
                                    loading: unref(seo).saving
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Сохранить ")
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VWindowItem, {
                    value: "general",
                    class: "pa-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="text-h6 font-weight-bold mb-6" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-9e5be3d5${_scopeId3}>Общие настройки</h2>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="mb-4" data-v-9e5be3d5${_scopeId5}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId5}>Название сайта</label>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(general).siteName,
                                      "onUpdate:modelValue": ($event) => unref(general).siteName = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="mb-6" data-v-9e5be3d5${_scopeId5}><label class="text-caption text-grey-darken-1 d-block mb-1" data-v-9e5be3d5${_scopeId5}>Email администратора</label>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(general).adminEmail,
                                      "onUpdate:modelValue": ($event) => unref(general).adminEmail = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "green-darken-3",
                                      variant: "flat",
                                      onClick: saveGeneral,
                                      loading: unref(general).saving
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Сохранить `);
                                        } else {
                                          return [
                                            createTextVNode(" Сохранить ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "mb-4" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название сайта"),
                                        createVNode(VTextField, {
                                          modelValue: unref(general).siteName,
                                          "onUpdate:modelValue": ($event) => unref(general).siteName = $event,
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("div", { class: "mb-6" }, [
                                        createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email администратора"),
                                        createVNode(VTextField, {
                                          modelValue: unref(general).adminEmail,
                                          "onUpdate:modelValue": ($event) => unref(general).adminEmail = $event,
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode(VBtn, {
                                        color: "green-darken-3",
                                        variant: "flat",
                                        onClick: saveGeneral,
                                        loading: unref(general).saving
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Сохранить ")
                                        ]),
                                        _: 1
                                      }, 8, ["loading"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mb-4" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название сайта"),
                                      createVNode(VTextField, {
                                        modelValue: unref(general).siteName,
                                        "onUpdate:modelValue": ($event) => unref(general).siteName = $event,
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "mb-6" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email администратора"),
                                      createVNode(VTextField, {
                                        modelValue: unref(general).adminEmail,
                                        "onUpdate:modelValue": ($event) => unref(general).adminEmail = $event,
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode(VBtn, {
                                      color: "green-darken-3",
                                      variant: "flat",
                                      onClick: saveGeneral,
                                      loading: unref(general).saving
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Сохранить ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h2", {
                            class: "text-h6 font-weight-bold mb-6",
                            style: { "color": "#020617" }
                          }, "Общие настройки"),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название сайта"),
                                    createVNode(VTextField, {
                                      modelValue: unref(general).siteName,
                                      "onUpdate:modelValue": ($event) => unref(general).siteName = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mb-6" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email администратора"),
                                    createVNode(VTextField, {
                                      modelValue: unref(general).adminEmail,
                                      "onUpdate:modelValue": ($event) => unref(general).adminEmail = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode(VBtn, {
                                    color: "green-darken-3",
                                    variant: "flat",
                                    onClick: saveGeneral,
                                    loading: unref(general).saving
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Сохранить ")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VWindowItem, {
                      value: "profile",
                      class: "pa-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", {
                          class: "text-h6 font-weight-bold mb-6",
                          style: { "color": "#020617" }
                        }, "Мой профиль"),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                  createVNode(VTextField, {
                                    modelValue: unref(profile).email,
                                    "onUpdate:modelValue": ($event) => unref(profile).email = $event,
                                    type: "email",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                                  createVNode(VTextField, {
                                    modelValue: unref(profile).name,
                                    "onUpdate:modelValue": ($event) => unref(profile).name = $event,
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mb-6" }, [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Новый пароль"),
                                  createVNode(VTextField, {
                                    modelValue: unref(profile).password,
                                    "onUpdate:modelValue": ($event) => unref(profile).password = $event,
                                    type: "password",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                unref(profileMessage) ? (openBlock(), createBlock(VAlert, {
                                  key: 0,
                                  type: unref(profileMessage).type,
                                  variant: "tonal",
                                  density: "compact",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(profileMessage).text), 1)
                                  ]),
                                  _: 1
                                }, 8, ["type"])) : createCommentVNode("", true),
                                createVNode(VBtn, {
                                  color: "green-darken-3",
                                  variant: "flat",
                                  onClick: saveProfile,
                                  loading: unref(profile).saving
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Сохранить профиль ")
                                  ]),
                                  _: 1
                                }, 8, ["loading"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VWindowItem, {
                      value: "roles",
                      class: "pa-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center mb-6" }, [
                          createVNode("div", null, [
                            createVNode("h2", {
                              class: "text-h6 font-weight-bold mb-1",
                              style: { "color": "#020617" }
                            }, "Роли и разрешения")
                          ]),
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            color: "green-darken-3",
                            variant: "flat",
                            size: "small",
                            onClick: ($event) => showAddRoleDialog.value = true
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                size: "18"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-plus")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Добавить роль ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(roles), (role) => {
                              return openBlock(), createBlock(VCol, {
                                key: role.id,
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    class: "pa-4",
                                    style: { "border": "1px solid #E2E8F0", "border-radius": "12px" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex align-center mb-4" }, [
                                        createVNode("div", { class: "flex-grow-1" }, [
                                          createVNode("h3", {
                                            class: "text-subtitle-1 font-weight-bold mb-1",
                                            style: { "color": "#020617" }
                                          }, toDisplayString(role.name), 1),
                                          createVNode("p", { class: "text-caption text-grey-darken-1 mb-0" }, toDisplayString(role.description), 1)
                                        ]),
                                        createVNode(VBtn, {
                                          icon: "",
                                          size: "small",
                                          variant: "text",
                                          color: "grey-darken-2",
                                          onClick: ($event) => editRole(role)
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
                                          size: "small",
                                          variant: "text",
                                          color: "red",
                                          onClick: ($event) => deleteRole(role.id)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { size: "18" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-delete")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      createVNode(VDivider, { class: "my-3" }),
                                      createVNode("div", { class: "permissions-list" }, [
                                        createVNode("div", { class: "permission-item" }, [
                                          createVNode(VIcon, {
                                            color: role.canViewDashboard ? "green-darken-3" : "grey-lighten-1",
                                            size: "18"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(role.canViewDashboard ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"]),
                                          createVNode("span", { class: "text-caption" }, "Dashboard")
                                        ]),
                                        createVNode("div", { class: "permission-item" }, [
                                          createVNode(VIcon, {
                                            color: role.canManageCourses ? "green-darken-3" : "grey-lighten-1",
                                            size: "18"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(role.canManageCourses ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"]),
                                          createVNode("span", { class: "text-caption" }, "Курсы")
                                        ]),
                                        createVNode("div", { class: "permission-item" }, [
                                          createVNode(VIcon, {
                                            color: role.canManageUsers ? "green-darken-3" : "grey-lighten-1",
                                            size: "18"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(role.canManageUsers ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"]),
                                          createVNode("span", { class: "text-caption" }, "Пользователи")
                                        ]),
                                        createVNode("div", { class: "permission-item" }, [
                                          createVNode(VIcon, {
                                            color: role.canManagePurchases ? "green-darken-3" : "grey-lighten-1",
                                            size: "18"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(role.canManagePurchases ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"]),
                                          createVNode("span", { class: "text-caption" }, "Покупки")
                                        ]),
                                        createVNode("div", { class: "permission-item" }, [
                                          createVNode(VIcon, {
                                            color: role.canManageSettings ? "green-darken-3" : "grey-lighten-1",
                                            size: "18"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(role.canManageSettings ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"]),
                                          createVNode("span", { class: "text-caption" }, "Настройки")
                                        ]),
                                        createVNode("div", { class: "permission-item" }, [
                                          createVNode(VIcon, {
                                            color: role.canManageAdmins ? "green-darken-3" : "grey-lighten-1",
                                            size: "18"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(role.canManageAdmins ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"]),
                                          createVNode("span", { class: "text-caption" }, "Администраторы")
                                        ]),
                                        createVNode("div", { class: "permission-item" }, [
                                          createVNode(VIcon, {
                                            color: role.canEditPlan ? "green-darken-3" : "grey-lighten-1",
                                            size: "18"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(role.canEditPlan ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"]),
                                          createVNode("span", { class: "text-caption" }, "План")
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        }),
                        createVNode(VDialog, {
                          modelValue: unref(showAddRoleDialog),
                          "onUpdate:modelValue": ($event) => isRef(showAddRoleDialog) ? showAddRoleDialog.value = $event : null,
                          "max-width": "600"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, { style: { "border-radius": "12px" } }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                  default: withCtx(() => [
                                    createVNode("h2", { class: "text-h6 font-weight-bold" }, toDisplayString(unref(editingRole) ? "Редактирование" : "Добавление") + " роли", 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "pa-6" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mb-4" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название роли"),
                                      createVNode(VTextField, {
                                        modelValue: unref(newRole).name,
                                        "onUpdate:modelValue": ($event) => unref(newRole).name = $event,
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "mb-6" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Описание"),
                                      createVNode(VTextarea, {
                                        modelValue: unref(newRole).description,
                                        "onUpdate:modelValue": ($event) => unref(newRole).description = $event,
                                        variant: "outlined",
                                        density: "compact",
                                        rows: "2",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("h3", { class: "text-subtitle-2 font-weight-bold mb-3" }, "Разрешения"),
                                    createVNode(VCheckbox, {
                                      modelValue: unref(newRole).canViewDashboard,
                                      "onUpdate:modelValue": ($event) => unref(newRole).canViewDashboard = $event,
                                      label: "Dashboard",
                                      "hide-details": "",
                                      class: "mb-2",
                                      color: "green-darken-3"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VCheckbox, {
                                      modelValue: unref(newRole).canManageCourses,
                                      "onUpdate:modelValue": ($event) => unref(newRole).canManageCourses = $event,
                                      label: "Курсы",
                                      "hide-details": "",
                                      class: "mb-2",
                                      color: "green-darken-3"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VCheckbox, {
                                      modelValue: unref(newRole).canManageUsers,
                                      "onUpdate:modelValue": ($event) => unref(newRole).canManageUsers = $event,
                                      label: "Пользователи",
                                      "hide-details": "",
                                      class: "mb-2",
                                      color: "green-darken-3"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VCheckbox, {
                                      modelValue: unref(newRole).canManagePurchases,
                                      "onUpdate:modelValue": ($event) => unref(newRole).canManagePurchases = $event,
                                      label: "Покупки",
                                      "hide-details": "",
                                      class: "mb-2",
                                      color: "green-darken-3"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VCheckbox, {
                                      modelValue: unref(newRole).canManageSettings,
                                      "onUpdate:modelValue": ($event) => unref(newRole).canManageSettings = $event,
                                      label: "Настройки",
                                      "hide-details": "",
                                      class: "mb-2",
                                      color: "green-darken-3"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VCheckbox, {
                                      modelValue: unref(newRole).canManageAdmins,
                                      "onUpdate:modelValue": ($event) => unref(newRole).canManageAdmins = $event,
                                      label: "Администраторы",
                                      "hide-details": "",
                                      class: "mb-2",
                                      color: "green-darken-3"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VCheckbox, {
                                      modelValue: unref(newRole).canEditPlan,
                                      "onUpdate:modelValue": ($event) => unref(newRole).canEditPlan = $event,
                                      label: "План",
                                      "hide-details": "",
                                      class: "mb-6",
                                      color: "green-darken-3"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "d-flex ga-2" }, [
                                      createVNode(VBtn, {
                                        color: "green-darken-3",
                                        variant: "flat",
                                        onClick: saveRole,
                                        loading: unref(roleSaving)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(editingRole) ? "Обновить" : "Создать"), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["loading"]),
                                      createVNode(VBtn, {
                                        variant: "text",
                                        color: "grey-darken-2",
                                        onClick: ($event) => showAddRoleDialog.value = false
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
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VWindowItem, {
                      value: "admins",
                      class: "pa-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center mb-6" }, [
                          createVNode("h2", {
                            class: "text-h6 font-weight-bold mb-0",
                            style: { "color": "#020617" }
                          }, "Администраторы"),
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            color: "green-darken-3",
                            variant: "flat",
                            size: "small",
                            onClick: ($event) => showAddAdminDialog.value = true
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                size: "18"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-plus")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Добавить ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        createVNode(VTable, { class: "data-table" }, {
                          default: withCtx(() => [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", { class: "text-left" }, "Email"),
                                createVNode("th", { class: "text-left" }, "Имя"),
                                createVNode("th", { class: "text-left" }, "Роль"),
                                createVNode("th", { class: "text-left" }, "Действия")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(admins), (admin) => {
                                return openBlock(), createBlock("tr", {
                                  key: admin.id
                                }, [
                                  createVNode("td", { class: "font-weight-medium" }, toDisplayString(admin.email), 1),
                                  createVNode("td", null, toDisplayString(admin.name), 1),
                                  createVNode("td", null, [
                                    createVNode(VChip, {
                                      size: "small",
                                      color: "blue"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(getRoleName(admin.roleId)), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  createVNode("td", null, [
                                    createVNode(VBtn, {
                                      icon: "",
                                      size: "small",
                                      variant: "text",
                                      color: "grey-darken-2",
                                      onClick: ($event) => editAdmin(admin)
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
                                      size: "small",
                                      variant: "text",
                                      color: "red",
                                      onClick: ($event) => deleteAdmin(admin.id)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { size: "18" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-delete")
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
                          ]),
                          _: 1
                        }),
                        createVNode(VDialog, {
                          modelValue: unref(showAddAdminDialog),
                          "onUpdate:modelValue": ($event) => isRef(showAddAdminDialog) ? showAddAdminDialog.value = $event : null,
                          "max-width": "500"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, { style: { "border-radius": "12px" } }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                  default: withCtx(() => [
                                    createVNode("h2", { class: "text-h6 font-weight-bold" }, toDisplayString(unref(editingAdmin) ? "Редактирование" : "Добавление") + " администратора", 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "pa-6" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mb-4" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                      createVNode(VTextField, {
                                        modelValue: unref(newAdmin).email,
                                        "onUpdate:modelValue": ($event) => unref(newAdmin).email = $event,
                                        type: "email",
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "mb-4" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                                      createVNode(VTextField, {
                                        modelValue: unref(newAdmin).name,
                                        "onUpdate:modelValue": ($event) => unref(newAdmin).name = $event,
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "mb-4" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Роль"),
                                      createVNode(VSelect, {
                                        modelValue: unref(newAdmin).roleId,
                                        "onUpdate:modelValue": ($event) => unref(newAdmin).roleId = $event,
                                        items: unref(roles),
                                        "item-title": "name",
                                        "item-value": "id",
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                    ]),
                                    createVNode("div", { class: "d-flex ga-2" }, [
                                      createVNode(VBtn, {
                                        color: "green-darken-3",
                                        variant: "flat",
                                        onClick: saveAdmin,
                                        loading: unref(adminSaving)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(editingAdmin) ? "Обновить" : "Создать"), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["loading"]),
                                      createVNode(VBtn, {
                                        variant: "text",
                                        color: "grey-darken-2",
                                        onClick: ($event) => showAddAdminDialog.value = false
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
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VWindowItem, {
                      value: "vk",
                      class: "pa-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center mb-6" }, [
                          createVNode("h2", {
                            class: "text-h6 font-weight-bold mb-0",
                            style: { "color": "#020617" }
                          }, "ВКонтакте"),
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            color: "green-darken-3",
                            variant: "flat",
                            size: "small",
                            onClick: ($event) => showAddVkDialog.value = true
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                start: "",
                                size: "18"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-plus")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Добавить группу ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(vkGroups), (group) => {
                              return openBlock(), createBlock(VCol, {
                                key: group.id,
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    class: "pa-4",
                                    style: { "border": "1px solid #E2E8F0", "border-radius": "12px" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex align-center mb-4" }, [
                                        createVNode(VIcon, {
                                          color: "blue",
                                          class: "mr-3"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-vk")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "flex-grow-1" }, [
                                          createVNode("h3", {
                                            class: "text-subtitle-1 font-weight-bold mb-0",
                                            style: { "color": "#020617" }
                                          }, toDisplayString(group.name), 1)
                                        ]),
                                        createVNode(VBtn, {
                                          icon: "",
                                          size: "small",
                                          variant: "text",
                                          color: "grey-darken-2",
                                          onClick: ($event) => editVkGroup(group)
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
                                          size: "small",
                                          variant: "text",
                                          color: "red",
                                          onClick: ($event) => deleteVkGroup(group.id)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { size: "18" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-delete")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      createVNode("div", { class: "mb-3" }, [
                                        createVNode("p", { class: "text-caption text-grey-darken-1 mb-1" }, "ID группы: " + toDisplayString(group.vkId), 1),
                                        createVNode("p", { class: "text-caption text-grey-darken-1" }, "Курс: " + toDisplayString(group.courseSlug), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        }),
                        createVNode(VDialog, {
                          modelValue: unref(showAddVkDialog),
                          "onUpdate:modelValue": ($event) => isRef(showAddVkDialog) ? showAddVkDialog.value = $event : null,
                          "max-width": "500"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, { style: { "border-radius": "12px" } }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                  default: withCtx(() => [
                                    createVNode("h2", { class: "text-h6 font-weight-bold" }, toDisplayString(unref(editingVkGroup) ? "Редактирование" : "Добавление") + " VK группы", 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardText, { class: "pa-6" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mb-4" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название группы"),
                                      createVNode(VTextField, {
                                        modelValue: unref(newVkGroup).name,
                                        "onUpdate:modelValue": ($event) => unref(newVkGroup).name = $event,
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "mb-4" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "ID группы ВК"),
                                      createVNode(VTextField, {
                                        modelValue: unref(newVkGroup).vkId,
                                        "onUpdate:modelValue": ($event) => unref(newVkGroup).vkId = $event,
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "mb-4" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Курс"),
                                      createVNode(VSelect, {
                                        modelValue: unref(newVkGroup).courseSlug,
                                        "onUpdate:modelValue": ($event) => unref(newVkGroup).courseSlug = $event,
                                        items: ["tekhnologiya-poshiva", "master-konstruirovaniya", "damskoe-bele"],
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "mb-6" }, [
                                      createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Токен сообщества"),
                                      createVNode(VTextField, {
                                        modelValue: unref(newVkGroup).token,
                                        "onUpdate:modelValue": ($event) => unref(newVkGroup).token = $event,
                                        type: "password",
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "d-flex ga-2" }, [
                                      createVNode(VBtn, {
                                        color: "green-darken-3",
                                        variant: "flat",
                                        onClick: saveVkGroup,
                                        loading: unref(vkSaving)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(editingVkGroup) ? "Обновить" : "Добавить"), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["loading"]),
                                      createVNode(VBtn, {
                                        variant: "text",
                                        color: "grey-darken-2",
                                        onClick: ($event) => showAddVkDialog.value = false
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
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VWindowItem, {
                      value: "email",
                      class: "pa-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", {
                          class: "text-h6 font-weight-bold mb-6",
                          style: { "color": "#020617" }
                        }, "Email уведомления"),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "SMTP Host"),
                                  createVNode(VTextField, {
                                    modelValue: unref(email).smtpHost,
                                    "onUpdate:modelValue": ($event) => unref(email).smtpHost = $event,
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "SMTP Port"),
                                  createVNode(VTextField, {
                                    modelValue: unref(email).smtpPort,
                                    "onUpdate:modelValue": ($event) => unref(email).smtpPort = $event,
                                    modelModifiers: { number: true },
                                    type: "number",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                  createVNode(VTextField, {
                                    modelValue: unref(email).smtpUser,
                                    "onUpdate:modelValue": ($event) => unref(email).smtpUser = $event,
                                    type: "email",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Пароль"),
                                  createVNode(VTextField, {
                                    modelValue: unref(email).smtpPass,
                                    "onUpdate:modelValue": ($event) => unref(email).smtpPass = $event,
                                    type: "password",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mb-6" }, [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "From Email"),
                                  createVNode(VTextField, {
                                    modelValue: unref(email).smtpFrom,
                                    "onUpdate:modelValue": ($event) => unref(email).smtpFrom = $event,
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(VCheckbox, {
                                  modelValue: unref(email).enableWelcome,
                                  "onUpdate:modelValue": ($event) => unref(email).enableWelcome = $event,
                                  label: "Приветственное письмо",
                                  "hide-details": "",
                                  class: "mb-2",
                                  color: "green-darken-3"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VCheckbox, {
                                  modelValue: unref(email).enablePurchase,
                                  "onUpdate:modelValue": ($event) => unref(email).enablePurchase = $event,
                                  label: "Письмо при покупке",
                                  "hide-details": "",
                                  class: "mb-2",
                                  color: "green-darken-3"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VCheckbox, {
                                  modelValue: unref(email).enableVkGroup,
                                  "onUpdate:modelValue": ($event) => unref(email).enableVkGroup = $event,
                                  label: "Письмо при добавлении в VK",
                                  "hide-details": "",
                                  class: "mb-6",
                                  color: "green-darken-3"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VBtn, {
                                  color: "green-darken-3",
                                  variant: "flat",
                                  onClick: saveEmail,
                                  loading: unref(email).saving
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Сохранить ")
                                  ]),
                                  _: 1
                                }, 8, ["loading"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VWindowItem, {
                      value: "seo",
                      class: "pa-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", {
                          class: "text-h6 font-weight-bold mb-6",
                          style: { "color": "#020617" }
                        }, "SEO оптимизация"),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Заголовок сайта"),
                                  createVNode(VTextField, {
                                    modelValue: unref(seo).title,
                                    "onUpdate:modelValue": ($event) => unref(seo).title = $event,
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Описание"),
                                  createVNode(VTextarea, {
                                    modelValue: unref(seo).description,
                                    "onUpdate:modelValue": ($event) => unref(seo).description = $event,
                                    variant: "outlined",
                                    density: "compact",
                                    rows: "3",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Ключевые слова"),
                                  createVNode(VTextField, {
                                    modelValue: unref(seo).keywords,
                                    "onUpdate:modelValue": ($event) => unref(seo).keywords = $event,
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(VCheckbox, {
                                  modelValue: unref(seo).enableSitemap,
                                  "onUpdate:modelValue": ($event) => unref(seo).enableSitemap = $event,
                                  label: "Включить sitemap.xml",
                                  "hide-details": "",
                                  class: "mb-2",
                                  color: "green-darken-3"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VCheckbox, {
                                  modelValue: unref(seo).enableRobots,
                                  "onUpdate:modelValue": ($event) => unref(seo).enableRobots = $event,
                                  label: "Включить robots.txt",
                                  "hide-details": "",
                                  class: "mb-6",
                                  color: "green-darken-3"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VBtn, {
                                  color: "green-darken-3",
                                  variant: "flat",
                                  onClick: saveSeo,
                                  loading: unref(seo).saving
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Сохранить ")
                                  ]),
                                  _: 1
                                }, 8, ["loading"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VWindowItem, {
                      value: "general",
                      class: "pa-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", {
                          class: "text-h6 font-weight-bold mb-6",
                          style: { "color": "#020617" }
                        }, "Общие настройки"),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название сайта"),
                                  createVNode(VTextField, {
                                    modelValue: unref(general).siteName,
                                    "onUpdate:modelValue": ($event) => unref(general).siteName = $event,
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "mb-6" }, [
                                  createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email администратора"),
                                  createVNode(VTextField, {
                                    modelValue: unref(general).adminEmail,
                                    "onUpdate:modelValue": ($event) => unref(general).adminEmail = $event,
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(VBtn, {
                                  color: "green-darken-3",
                                  variant: "flat",
                                  onClick: saveGeneral,
                                  loading: unref(general).saving
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Сохранить ")
                                  ]),
                                  _: 1
                                }, 8, ["loading"])
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTabs, {
                modelValue: unref(activeTab),
                "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                color: "green-darken-3",
                grow: ""
              }, {
                default: withCtx(() => [
                  createVNode(VTab, { value: "profile" }, {
                    default: withCtx(() => [
                      createTextVNode("Профиль")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: "roles" }, {
                    default: withCtx(() => [
                      createTextVNode("Роли")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: "admins" }, {
                    default: withCtx(() => [
                      createTextVNode("Администраторы")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: "vk" }, {
                    default: withCtx(() => [
                      createTextVNode("ВКонтакте")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: "email" }, {
                    default: withCtx(() => [
                      createTextVNode("Email")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: "seo" }, {
                    default: withCtx(() => [
                      createTextVNode("SEO")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: "general" }, {
                    default: withCtx(() => [
                      createTextVNode("Общие")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VDivider),
              createVNode(VWindow, {
                modelValue: unref(activeTab),
                "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null
              }, {
                default: withCtx(() => [
                  createVNode(VWindowItem, {
                    value: "profile",
                    class: "pa-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", {
                        class: "text-h6 font-weight-bold mb-6",
                        style: { "color": "#020617" }
                      }, "Мой профиль"),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                createVNode(VTextField, {
                                  modelValue: unref(profile).email,
                                  "onUpdate:modelValue": ($event) => unref(profile).email = $event,
                                  type: "email",
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                                createVNode(VTextField, {
                                  modelValue: unref(profile).name,
                                  "onUpdate:modelValue": ($event) => unref(profile).name = $event,
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mb-6" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Новый пароль"),
                                createVNode(VTextField, {
                                  modelValue: unref(profile).password,
                                  "onUpdate:modelValue": ($event) => unref(profile).password = $event,
                                  type: "password",
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              unref(profileMessage) ? (openBlock(), createBlock(VAlert, {
                                key: 0,
                                type: unref(profileMessage).type,
                                variant: "tonal",
                                density: "compact",
                                class: "mb-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(profileMessage).text), 1)
                                ]),
                                _: 1
                              }, 8, ["type"])) : createCommentVNode("", true),
                              createVNode(VBtn, {
                                color: "green-darken-3",
                                variant: "flat",
                                onClick: saveProfile,
                                loading: unref(profile).saving
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Сохранить профиль ")
                                ]),
                                _: 1
                              }, 8, ["loading"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VWindowItem, {
                    value: "roles",
                    class: "pa-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex align-center mb-6" }, [
                        createVNode("div", null, [
                          createVNode("h2", {
                            class: "text-h6 font-weight-bold mb-1",
                            style: { "color": "#020617" }
                          }, "Роли и разрешения")
                        ]),
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          color: "green-darken-3",
                          variant: "flat",
                          size: "small",
                          onClick: ($event) => showAddRoleDialog.value = true
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              start: "",
                              size: "18"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-plus")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Добавить роль ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(roles), (role) => {
                            return openBlock(), createBlock(VCol, {
                              key: role.id,
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  class: "pa-4",
                                  style: { "border": "1px solid #E2E8F0", "border-radius": "12px" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex align-center mb-4" }, [
                                      createVNode("div", { class: "flex-grow-1" }, [
                                        createVNode("h3", {
                                          class: "text-subtitle-1 font-weight-bold mb-1",
                                          style: { "color": "#020617" }
                                        }, toDisplayString(role.name), 1),
                                        createVNode("p", { class: "text-caption text-grey-darken-1 mb-0" }, toDisplayString(role.description), 1)
                                      ]),
                                      createVNode(VBtn, {
                                        icon: "",
                                        size: "small",
                                        variant: "text",
                                        color: "grey-darken-2",
                                        onClick: ($event) => editRole(role)
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
                                        size: "small",
                                        variant: "text",
                                        color: "red",
                                        onClick: ($event) => deleteRole(role.id)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { size: "18" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-delete")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    createVNode(VDivider, { class: "my-3" }),
                                    createVNode("div", { class: "permissions-list" }, [
                                      createVNode("div", { class: "permission-item" }, [
                                        createVNode(VIcon, {
                                          color: role.canViewDashboard ? "green-darken-3" : "grey-lighten-1",
                                          size: "18"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(role.canViewDashboard ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]),
                                        createVNode("span", { class: "text-caption" }, "Dashboard")
                                      ]),
                                      createVNode("div", { class: "permission-item" }, [
                                        createVNode(VIcon, {
                                          color: role.canManageCourses ? "green-darken-3" : "grey-lighten-1",
                                          size: "18"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(role.canManageCourses ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]),
                                        createVNode("span", { class: "text-caption" }, "Курсы")
                                      ]),
                                      createVNode("div", { class: "permission-item" }, [
                                        createVNode(VIcon, {
                                          color: role.canManageUsers ? "green-darken-3" : "grey-lighten-1",
                                          size: "18"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(role.canManageUsers ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]),
                                        createVNode("span", { class: "text-caption" }, "Пользователи")
                                      ]),
                                      createVNode("div", { class: "permission-item" }, [
                                        createVNode(VIcon, {
                                          color: role.canManagePurchases ? "green-darken-3" : "grey-lighten-1",
                                          size: "18"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(role.canManagePurchases ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]),
                                        createVNode("span", { class: "text-caption" }, "Покупки")
                                      ]),
                                      createVNode("div", { class: "permission-item" }, [
                                        createVNode(VIcon, {
                                          color: role.canManageSettings ? "green-darken-3" : "grey-lighten-1",
                                          size: "18"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(role.canManageSettings ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]),
                                        createVNode("span", { class: "text-caption" }, "Настройки")
                                      ]),
                                      createVNode("div", { class: "permission-item" }, [
                                        createVNode(VIcon, {
                                          color: role.canManageAdmins ? "green-darken-3" : "grey-lighten-1",
                                          size: "18"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(role.canManageAdmins ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]),
                                        createVNode("span", { class: "text-caption" }, "Администраторы")
                                      ]),
                                      createVNode("div", { class: "permission-item" }, [
                                        createVNode(VIcon, {
                                          color: role.canEditPlan ? "green-darken-3" : "grey-lighten-1",
                                          size: "18"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(role.canEditPlan ? "mdi-check-circle" : "mdi-circle-outline"), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]),
                                        createVNode("span", { class: "text-caption" }, "План")
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      }),
                      createVNode(VDialog, {
                        modelValue: unref(showAddRoleDialog),
                        "onUpdate:modelValue": ($event) => isRef(showAddRoleDialog) ? showAddRoleDialog.value = $event : null,
                        "max-width": "600"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, { style: { "border-radius": "12px" } }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                default: withCtx(() => [
                                  createVNode("h2", { class: "text-h6 font-weight-bold" }, toDisplayString(unref(editingRole) ? "Редактирование" : "Добавление") + " роли", 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "pa-6" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название роли"),
                                    createVNode(VTextField, {
                                      modelValue: unref(newRole).name,
                                      "onUpdate:modelValue": ($event) => unref(newRole).name = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mb-6" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Описание"),
                                    createVNode(VTextarea, {
                                      modelValue: unref(newRole).description,
                                      "onUpdate:modelValue": ($event) => unref(newRole).description = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      rows: "2",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("h3", { class: "text-subtitle-2 font-weight-bold mb-3" }, "Разрешения"),
                                  createVNode(VCheckbox, {
                                    modelValue: unref(newRole).canViewDashboard,
                                    "onUpdate:modelValue": ($event) => unref(newRole).canViewDashboard = $event,
                                    label: "Dashboard",
                                    "hide-details": "",
                                    class: "mb-2",
                                    color: "green-darken-3"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VCheckbox, {
                                    modelValue: unref(newRole).canManageCourses,
                                    "onUpdate:modelValue": ($event) => unref(newRole).canManageCourses = $event,
                                    label: "Курсы",
                                    "hide-details": "",
                                    class: "mb-2",
                                    color: "green-darken-3"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VCheckbox, {
                                    modelValue: unref(newRole).canManageUsers,
                                    "onUpdate:modelValue": ($event) => unref(newRole).canManageUsers = $event,
                                    label: "Пользователи",
                                    "hide-details": "",
                                    class: "mb-2",
                                    color: "green-darken-3"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VCheckbox, {
                                    modelValue: unref(newRole).canManagePurchases,
                                    "onUpdate:modelValue": ($event) => unref(newRole).canManagePurchases = $event,
                                    label: "Покупки",
                                    "hide-details": "",
                                    class: "mb-2",
                                    color: "green-darken-3"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VCheckbox, {
                                    modelValue: unref(newRole).canManageSettings,
                                    "onUpdate:modelValue": ($event) => unref(newRole).canManageSettings = $event,
                                    label: "Настройки",
                                    "hide-details": "",
                                    class: "mb-2",
                                    color: "green-darken-3"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VCheckbox, {
                                    modelValue: unref(newRole).canManageAdmins,
                                    "onUpdate:modelValue": ($event) => unref(newRole).canManageAdmins = $event,
                                    label: "Администраторы",
                                    "hide-details": "",
                                    class: "mb-2",
                                    color: "green-darken-3"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VCheckbox, {
                                    modelValue: unref(newRole).canEditPlan,
                                    "onUpdate:modelValue": ($event) => unref(newRole).canEditPlan = $event,
                                    label: "План",
                                    "hide-details": "",
                                    class: "mb-6",
                                    color: "green-darken-3"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "d-flex ga-2" }, [
                                    createVNode(VBtn, {
                                      color: "green-darken-3",
                                      variant: "flat",
                                      onClick: saveRole,
                                      loading: unref(roleSaving)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(editingRole) ? "Обновить" : "Создать"), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["loading"]),
                                    createVNode(VBtn, {
                                      variant: "text",
                                      color: "grey-darken-2",
                                      onClick: ($event) => showAddRoleDialog.value = false
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
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VWindowItem, {
                    value: "admins",
                    class: "pa-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex align-center mb-6" }, [
                        createVNode("h2", {
                          class: "text-h6 font-weight-bold mb-0",
                          style: { "color": "#020617" }
                        }, "Администраторы"),
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          color: "green-darken-3",
                          variant: "flat",
                          size: "small",
                          onClick: ($event) => showAddAdminDialog.value = true
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              start: "",
                              size: "18"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-plus")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Добавить ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      createVNode(VTable, { class: "data-table" }, {
                        default: withCtx(() => [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "text-left" }, "Email"),
                              createVNode("th", { class: "text-left" }, "Имя"),
                              createVNode("th", { class: "text-left" }, "Роль"),
                              createVNode("th", { class: "text-left" }, "Действия")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(admins), (admin) => {
                              return openBlock(), createBlock("tr", {
                                key: admin.id
                              }, [
                                createVNode("td", { class: "font-weight-medium" }, toDisplayString(admin.email), 1),
                                createVNode("td", null, toDisplayString(admin.name), 1),
                                createVNode("td", null, [
                                  createVNode(VChip, {
                                    size: "small",
                                    color: "blue"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(getRoleName(admin.roleId)), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createVNode("td", null, [
                                  createVNode(VBtn, {
                                    icon: "",
                                    size: "small",
                                    variant: "text",
                                    color: "grey-darken-2",
                                    onClick: ($event) => editAdmin(admin)
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
                                    size: "small",
                                    variant: "text",
                                    color: "red",
                                    onClick: ($event) => deleteAdmin(admin.id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { size: "18" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-delete")
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
                        ]),
                        _: 1
                      }),
                      createVNode(VDialog, {
                        modelValue: unref(showAddAdminDialog),
                        "onUpdate:modelValue": ($event) => isRef(showAddAdminDialog) ? showAddAdminDialog.value = $event : null,
                        "max-width": "500"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, { style: { "border-radius": "12px" } }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                default: withCtx(() => [
                                  createVNode("h2", { class: "text-h6 font-weight-bold" }, toDisplayString(unref(editingAdmin) ? "Редактирование" : "Добавление") + " администратора", 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "pa-6" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                    createVNode(VTextField, {
                                      modelValue: unref(newAdmin).email,
                                      "onUpdate:modelValue": ($event) => unref(newAdmin).email = $event,
                                      type: "email",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Имя"),
                                    createVNode(VTextField, {
                                      modelValue: unref(newAdmin).name,
                                      "onUpdate:modelValue": ($event) => unref(newAdmin).name = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Роль"),
                                    createVNode(VSelect, {
                                      modelValue: unref(newAdmin).roleId,
                                      "onUpdate:modelValue": ($event) => unref(newAdmin).roleId = $event,
                                      items: unref(roles),
                                      "item-title": "name",
                                      "item-value": "id",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                  ]),
                                  createVNode("div", { class: "d-flex ga-2" }, [
                                    createVNode(VBtn, {
                                      color: "green-darken-3",
                                      variant: "flat",
                                      onClick: saveAdmin,
                                      loading: unref(adminSaving)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(editingAdmin) ? "Обновить" : "Создать"), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["loading"]),
                                    createVNode(VBtn, {
                                      variant: "text",
                                      color: "grey-darken-2",
                                      onClick: ($event) => showAddAdminDialog.value = false
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
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VWindowItem, {
                    value: "vk",
                    class: "pa-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex align-center mb-6" }, [
                        createVNode("h2", {
                          class: "text-h6 font-weight-bold mb-0",
                          style: { "color": "#020617" }
                        }, "ВКонтакте"),
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          color: "green-darken-3",
                          variant: "flat",
                          size: "small",
                          onClick: ($event) => showAddVkDialog.value = true
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              start: "",
                              size: "18"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-plus")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Добавить группу ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(vkGroups), (group) => {
                            return openBlock(), createBlock(VCol, {
                              key: group.id,
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  class: "pa-4",
                                  style: { "border": "1px solid #E2E8F0", "border-radius": "12px" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex align-center mb-4" }, [
                                      createVNode(VIcon, {
                                        color: "blue",
                                        class: "mr-3"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-vk")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "flex-grow-1" }, [
                                        createVNode("h3", {
                                          class: "text-subtitle-1 font-weight-bold mb-0",
                                          style: { "color": "#020617" }
                                        }, toDisplayString(group.name), 1)
                                      ]),
                                      createVNode(VBtn, {
                                        icon: "",
                                        size: "small",
                                        variant: "text",
                                        color: "grey-darken-2",
                                        onClick: ($event) => editVkGroup(group)
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
                                        size: "small",
                                        variant: "text",
                                        color: "red",
                                        onClick: ($event) => deleteVkGroup(group.id)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { size: "18" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-delete")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    createVNode("div", { class: "mb-3" }, [
                                      createVNode("p", { class: "text-caption text-grey-darken-1 mb-1" }, "ID группы: " + toDisplayString(group.vkId), 1),
                                      createVNode("p", { class: "text-caption text-grey-darken-1" }, "Курс: " + toDisplayString(group.courseSlug), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      }),
                      createVNode(VDialog, {
                        modelValue: unref(showAddVkDialog),
                        "onUpdate:modelValue": ($event) => isRef(showAddVkDialog) ? showAddVkDialog.value = $event : null,
                        "max-width": "500"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, { style: { "border-radius": "12px" } }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "pa-6 pb-2" }, {
                                default: withCtx(() => [
                                  createVNode("h2", { class: "text-h6 font-weight-bold" }, toDisplayString(unref(editingVkGroup) ? "Редактирование" : "Добавление") + " VK группы", 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "pa-6" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название группы"),
                                    createVNode(VTextField, {
                                      modelValue: unref(newVkGroup).name,
                                      "onUpdate:modelValue": ($event) => unref(newVkGroup).name = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "ID группы ВК"),
                                    createVNode(VTextField, {
                                      modelValue: unref(newVkGroup).vkId,
                                      "onUpdate:modelValue": ($event) => unref(newVkGroup).vkId = $event,
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mb-4" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Курс"),
                                    createVNode(VSelect, {
                                      modelValue: unref(newVkGroup).courseSlug,
                                      "onUpdate:modelValue": ($event) => unref(newVkGroup).courseSlug = $event,
                                      items: ["tekhnologiya-poshiva", "master-konstruirovaniya", "damskoe-bele"],
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "mb-6" }, [
                                    createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Токен сообщества"),
                                    createVNode(VTextField, {
                                      modelValue: unref(newVkGroup).token,
                                      "onUpdate:modelValue": ($event) => unref(newVkGroup).token = $event,
                                      type: "password",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "d-flex ga-2" }, [
                                    createVNode(VBtn, {
                                      color: "green-darken-3",
                                      variant: "flat",
                                      onClick: saveVkGroup,
                                      loading: unref(vkSaving)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(editingVkGroup) ? "Обновить" : "Добавить"), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["loading"]),
                                    createVNode(VBtn, {
                                      variant: "text",
                                      color: "grey-darken-2",
                                      onClick: ($event) => showAddVkDialog.value = false
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
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VWindowItem, {
                    value: "email",
                    class: "pa-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", {
                        class: "text-h6 font-weight-bold mb-6",
                        style: { "color": "#020617" }
                      }, "Email уведомления"),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "SMTP Host"),
                                createVNode(VTextField, {
                                  modelValue: unref(email).smtpHost,
                                  "onUpdate:modelValue": ($event) => unref(email).smtpHost = $event,
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "SMTP Port"),
                                createVNode(VTextField, {
                                  modelValue: unref(email).smtpPort,
                                  "onUpdate:modelValue": ($event) => unref(email).smtpPort = $event,
                                  modelModifiers: { number: true },
                                  type: "number",
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email"),
                                createVNode(VTextField, {
                                  modelValue: unref(email).smtpUser,
                                  "onUpdate:modelValue": ($event) => unref(email).smtpUser = $event,
                                  type: "email",
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Пароль"),
                                createVNode(VTextField, {
                                  modelValue: unref(email).smtpPass,
                                  "onUpdate:modelValue": ($event) => unref(email).smtpPass = $event,
                                  type: "password",
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mb-6" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "From Email"),
                                createVNode(VTextField, {
                                  modelValue: unref(email).smtpFrom,
                                  "onUpdate:modelValue": ($event) => unref(email).smtpFrom = $event,
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode(VCheckbox, {
                                modelValue: unref(email).enableWelcome,
                                "onUpdate:modelValue": ($event) => unref(email).enableWelcome = $event,
                                label: "Приветственное письмо",
                                "hide-details": "",
                                class: "mb-2",
                                color: "green-darken-3"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VCheckbox, {
                                modelValue: unref(email).enablePurchase,
                                "onUpdate:modelValue": ($event) => unref(email).enablePurchase = $event,
                                label: "Письмо при покупке",
                                "hide-details": "",
                                class: "mb-2",
                                color: "green-darken-3"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VCheckbox, {
                                modelValue: unref(email).enableVkGroup,
                                "onUpdate:modelValue": ($event) => unref(email).enableVkGroup = $event,
                                label: "Письмо при добавлении в VK",
                                "hide-details": "",
                                class: "mb-6",
                                color: "green-darken-3"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VBtn, {
                                color: "green-darken-3",
                                variant: "flat",
                                onClick: saveEmail,
                                loading: unref(email).saving
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Сохранить ")
                                ]),
                                _: 1
                              }, 8, ["loading"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VWindowItem, {
                    value: "seo",
                    class: "pa-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", {
                        class: "text-h6 font-weight-bold mb-6",
                        style: { "color": "#020617" }
                      }, "SEO оптимизация"),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Заголовок сайта"),
                                createVNode(VTextField, {
                                  modelValue: unref(seo).title,
                                  "onUpdate:modelValue": ($event) => unref(seo).title = $event,
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Описание"),
                                createVNode(VTextarea, {
                                  modelValue: unref(seo).description,
                                  "onUpdate:modelValue": ($event) => unref(seo).description = $event,
                                  variant: "outlined",
                                  density: "compact",
                                  rows: "3",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Ключевые слова"),
                                createVNode(VTextField, {
                                  modelValue: unref(seo).keywords,
                                  "onUpdate:modelValue": ($event) => unref(seo).keywords = $event,
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode(VCheckbox, {
                                modelValue: unref(seo).enableSitemap,
                                "onUpdate:modelValue": ($event) => unref(seo).enableSitemap = $event,
                                label: "Включить sitemap.xml",
                                "hide-details": "",
                                class: "mb-2",
                                color: "green-darken-3"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VCheckbox, {
                                modelValue: unref(seo).enableRobots,
                                "onUpdate:modelValue": ($event) => unref(seo).enableRobots = $event,
                                label: "Включить robots.txt",
                                "hide-details": "",
                                class: "mb-6",
                                color: "green-darken-3"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VBtn, {
                                color: "green-darken-3",
                                variant: "flat",
                                onClick: saveSeo,
                                loading: unref(seo).saving
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Сохранить ")
                                ]),
                                _: 1
                              }, 8, ["loading"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VWindowItem, {
                    value: "general",
                    class: "pa-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", {
                        class: "text-h6 font-weight-bold mb-6",
                        style: { "color": "#020617" }
                      }, "Общие настройки"),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Название сайта"),
                                createVNode(VTextField, {
                                  modelValue: unref(general).siteName,
                                  "onUpdate:modelValue": ($event) => unref(general).siteName = $event,
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mb-6" }, [
                                createVNode("label", { class: "text-caption text-grey-darken-1 d-block mb-1" }, "Email администратора"),
                                createVNode(VTextField, {
                                  modelValue: unref(general).adminEmail,
                                  "onUpdate:modelValue": ($event) => unref(general).adminEmail = $event,
                                  variant: "outlined",
                                  density: "compact",
                                  "hide-details": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode(VBtn, {
                                color: "green-darken-3",
                                variant: "flat",
                                onClick: saveGeneral,
                                loading: unref(general).saving
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Сохранить ")
                                ]),
                                _: 1
                              }, 8, ["loading"])
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
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/settings/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9e5be3d5"]]);

export { index as default };
//# sourceMappingURL=index-B0GIWZfN.mjs.map
