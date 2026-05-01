import { y as getCurrentInstance, p as propsFactory, ag as defer } from './server.mjs';
import { toRef, onScopeDispose } from 'vue';

const makeDelayProps = propsFactory({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function useDelay(props, cb) {
  let clearDelay = () => {
  };
  function runDelay(isOpening, options) {
    clearDelay?.();
    const delay = isOpening ? props.openDelay : props.closeDelay;
    const normalizedDelay = Math.max(options?.minDelay ?? 0, Number(delay ?? 0));
    return new Promise((resolve) => {
      clearDelay = defer(normalizedDelay, () => {
        cb?.(isOpening);
        resolve(isOpening);
      });
    });
  }
  function runOpenDelay() {
    return runDelay(true);
  }
  function runCloseDelay(options) {
    return runDelay(false, options);
  }
  return {
    clearDelay,
    runOpenDelay,
    runCloseDelay
  };
}
const makeFocusTrapProps = propsFactory({
  retainFocus: Boolean,
  captureFocus: Boolean,
  /** @deprecated */
  disableInitialFocus: Boolean
}, "focusTrap");
const registry = /* @__PURE__ */ new Map();
function useFocusTrap(props, {
  isActive,
  localTop,
  activatorEl,
  contentEl
}) {
  const trapId = /* @__PURE__ */ Symbol("trap");
  toRef(() => isActive.value && props.captureFocus && !props.disableInitialFocus);
  onScopeDispose(() => {
    registry.delete(trapId);
    return;
  });
}
function useScopeId() {
  const vm = getCurrentInstance("useScopeId");
  const scopeId = vm.vnode.scopeId;
  return {
    scopeId: scopeId ? {
      [scopeId]: ""
    } : void 0
  };
}

export { useFocusTrap as a, useDelay as b, makeDelayProps as c, makeFocusTrapProps as m, useScopeId as u };
//# sourceMappingURL=scopeId-B2pAe-pO.mjs.map
