import { ref, useId, createVNode, mergeProps } from 'vue';
import { a as VCheckboxBtn, m as makeVCheckboxBtnProps } from './VSelect-BJ21Hkwm.mjs';
import { u as useFocus, V as VInput, g as makeVInputProps } from './autofocus-DjPPY-aF.mjs';
import { f as forwardRefs } from './forwardRefs-yM0wzxMx.mjs';
import { g as genericComponent, i as useProxiedModel, l as filterInputAttrs, p as propsFactory, o as omit } from './server.mjs';
import { j as useRender } from './index-BGySj97a.mjs';

const makeVCheckboxProps = propsFactory({
  ...omit(makeVInputProps(), ["direction"]),
  ...omit(makeVCheckboxBtnProps(), ["inline"])
}, "VCheckbox");
const VCheckbox = genericComponent()({
  name: "VCheckbox",
  inheritAttrs: false,
  props: makeVCheckboxProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:focused": (focused) => true
  },
  setup(props, {
    attrs,
    slots
  }) {
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const inputRef = ref();
    const uid = useId();
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const checkboxProps = VCheckboxBtn.filterProps(props);
      return createVNode(VInput, mergeProps({
        "ref": inputRef,
        "class": ["v-checkbox", props.class]
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "id": props.id || `checkbox-${uid}`,
        "focused": isFocused.value,
        "style": props.style
      }), {
        ...slots,
        default: ({
          id,
          messagesId,
          isDisabled,
          isReadonly,
          isValid
        }) => createVNode(VCheckboxBtn, mergeProps(checkboxProps, {
          "id": id.value,
          "aria-describedby": messagesId.value,
          "disabled": isDisabled.value,
          "readonly": isReadonly.value
        }, controlAttrs, {
          "error": isValid.value === false,
          "modelValue": model.value,
          "onUpdate:modelValue": ($event) => model.value = $event,
          "onFocus": focus,
          "onBlur": blur
        }), slots)
      });
    });
    return forwardRefs({}, inputRef);
  }
});

export { VCheckbox as V };
//# sourceMappingURL=VCheckbox-GdXjxNKw.mjs.map
