import { ref, createElementVNode, normalizeStyle, normalizeClass } from 'vue';
import { j as useRender, v as makeComponentProps } from './index-C1EJcibQ.mjs';
import { c as createForm, m as makeFormProps } from './autofocus-DXdUA20R.mjs';
import { f as forwardRefs } from './forwardRefs-CAP5b9ad.mjs';
import { g as genericComponent, p as propsFactory } from './server.mjs';

const makeVFormProps = propsFactory({
  ...makeComponentProps(),
  ...makeFormProps()
}, "VForm");
const VForm = genericComponent()({
  name: "VForm",
  props: makeVFormProps(),
  emits: {
    "update:modelValue": (val) => true,
    submit: (e) => true
  },
  setup(props, {
    slots,
    emit
  }) {
    const form = createForm(props);
    const formRef = ref();
    function onReset(e) {
      e.preventDefault();
      form.reset();
    }
    function onSubmit(_e) {
      const e = _e;
      const ready = form.validate();
      e.then = ready.then.bind(ready);
      e.catch = ready.catch.bind(ready);
      e.finally = ready.finally.bind(ready);
      emit("submit", e);
      if (!e.defaultPrevented) {
        ready.then(({
          valid
        }) => {
          if (valid) {
            formRef.value?.submit();
          }
        });
      }
      e.preventDefault();
    }
    useRender(() => createElementVNode("form", {
      "ref": formRef,
      "class": normalizeClass(["v-form", props.class]),
      "style": normalizeStyle(props.style),
      "novalidate": true,
      "onReset": onReset,
      "onSubmit": onSubmit
    }, [slots.default?.({
      errors: form.errors.value,
      isDisabled: form.isDisabled.value,
      isReadonly: form.isReadonly.value,
      isValidating: form.isValidating.value,
      isValid: form.isValid.value,
      items: form.items.value,
      validate: form.validate,
      reset: form.reset,
      resetValidation: form.resetValidation
    })]));
    return forwardRefs(form, formRef);
  }
});

export { VForm as V };
//# sourceMappingURL=VForm-CQaL3KUu.mjs.map
