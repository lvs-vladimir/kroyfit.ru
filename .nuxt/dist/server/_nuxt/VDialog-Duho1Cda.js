import { ref, watch, nextTick, mergeProps, createVNode } from "vue";
import { a as VOverlay, m as makeVOverlayProps, b as VDialogTransition } from "./VOverlay-Cv1Oq8N7.js";
import { f as forwardRefs } from "./forwardRefs-sHFik_ks.js";
import { g as genericComponent, z as useProxiedModel, p as propsFactory, Q as omit } from "../server.mjs";
import { u as useScopeId } from "./scopeId-nQs070UW.js";
import { j as useRender, C as VDefaultsProvider } from "./index-CXrZw6YX.js";
const makeVDialogProps = propsFactory({
  fullscreen: Boolean,
  scrollable: Boolean,
  ...omit(makeVOverlayProps({
    captureFocus: true,
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: VDialogTransition
    },
    zIndex: 2400,
    retainFocus: true
  }), ["disableInitialFocus"])
}, "VDialog");
const VDialog = genericComponent()({
  name: "VDialog",
  props: makeVDialogProps(),
  emits: {
    "update:modelValue": (value) => true,
    afterEnter: () => true,
    afterLeave: () => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const overlay = ref();
    function onAfterEnter() {
      emit("afterEnter");
      if ((props.scrim || props.retainFocus) && overlay.value?.contentEl && !overlay.value.contentEl.contains((void 0).activeElement)) {
        overlay.value.contentEl.focus({
          preventScroll: true
        });
      }
    }
    function onAfterLeave() {
      emit("afterLeave");
    }
    watch(isActive, async (val) => {
      if (!val) {
        await nextTick();
        overlay.value.activatorEl?.focus({
          preventScroll: true
        });
      }
    });
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      const activatorProps = mergeProps({
        "aria-haspopup": "dialog"
      }, props.activatorProps);
      const contentProps = mergeProps({
        tabindex: -1
      }, props.contentProps);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-dialog", {
          "v-dialog--fullscreen": props.fullscreen,
          "v-dialog--scrollable": props.scrollable
        }, props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "aria-modal": "true",
        "activatorProps": activatorProps,
        "contentProps": contentProps,
        "height": !props.fullscreen ? props.height : void 0,
        "width": !props.fullscreen ? props.width : void 0,
        "maxHeight": !props.fullscreen ? props.maxHeight : void 0,
        "maxWidth": !props.fullscreen ? props.maxWidth : void 0,
        "role": "dialog",
        "onAfterEnter": onAfterEnter,
        "onAfterLeave": onAfterLeave
      }, scopeId), {
        activator: slots.activator,
        default: (...args) => createVNode(VDefaultsProvider, {
          "root": "VDialog"
        }, {
          default: () => [slots.default?.(...args)]
        })
      });
    });
    return forwardRefs({}, overlay);
  }
});
export {
  VDialog as V
};
//# sourceMappingURL=VDialog-Duho1Cda.js.map
