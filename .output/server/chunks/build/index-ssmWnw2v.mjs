import { defineComponent, ref, unref, withCtx, createTextVNode, createVNode, isRef, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-CsgbRhqC.mjs';
import { V as VSpacer } from './VSpacer-B2jXCgcb.mjs';
import { V as VBtn } from './VBtn-p5cu1pGV.mjs';
import { V as VIcon } from './index-C1EJcibQ.mjs';
import { V as VCard } from './VCard-DZcCz6yh.mjs';
import { V as VTextarea } from './VTextarea-DTXsVE1U.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './position-D2_Ao4AV.mjs';
import './VAvatar-DVIor7ga.mjs';
import './autofocus-DXdUA20R.mjs';
import './forwardRefs-CAP5b9ad.mjs';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const editing = ref(false);
    const saving = ref(false);
    const planContent = ref("");
    const renderedPlan = ref("");
    const defaultPlan = `## ✅ Выполнено

### Дизайн
- [x] Админка в стиле nuxt.com (минимализм, зеленый акцент)
- [x] Fullscreen без отступов по бокам
- [x] Сэндвич-меню для мобильных
- [x] Светлое выделение меню

### Админка
- [x] Dashboard с последними покупками
- [x] Управление курсами
- [x] Управление пользователями
- [x] Настройки → ВКонтакте

### Интеграции
- [x] VK ID SDK кнопка логина
- [x] Автодобавление пользователя после VK авторизации

---

## 📋 Запланировано

### Приоритет: Высокий
- [ ] Интеграция ЮKassa (оплата курсов)
- [ ] Подключение базы данных
- [ ] Привязка VK группы к курсу

### Приоритет: Средний
- [ ] Страница профиля пользователя
- [ ] Личный кабинет ученика
- [ ] Email уведомления

*Обновлено: ${(/* @__PURE__ */ new Date()).toLocaleDateString("ru-RU")}*`;
    const loadPlan = async () => {
      try {
        const res = await $fetch("/api/plan");
        planContent.value = res.content || defaultPlan;
        renderedPlan.value = renderMarkdown(planContent.value);
      } catch (e) {
        planContent.value = defaultPlan;
        renderedPlan.value = renderMarkdown(defaultPlan);
      }
    };
    const startEdit = () => {
      editing.value = true;
    };
    const cancelEdit = () => {
      editing.value = false;
      loadPlan();
    };
    const savePlan = async () => {
      saving.value = true;
      try {
        await $fetch("/api/plan", {
          method: "POST",
          body: { content: planContent.value }
        });
        editing.value = false;
        renderedPlan.value = renderMarkdown(planContent.value);
      } catch (e) {
        console.error("Ошибка сохранения:", e);
        alert("Ошибка сохранения плана");
      } finally {
        saving.value = false;
      }
    };
    const renderMarkdown = (md) => {
      if (!md) return "";
      let html = md.replace(/^## (.+)$/gm, '<h2 style="color:#020617;font-size:1.25rem;font-weight:700;margin:1.5rem 0 0.5rem;">$1</h2>').replace(/^### (.+)$/gm, '<h3 style="color:#020617;font-size:1.1rem;font-weight:600;margin:1rem 0 0.25rem;">$1</h3>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/- \[x\] (.+)/gi, '<span style="color:#00DC82;">✓</span> $1').replace(/- \[ \] (.+)/gi, '<span style="color:#ccc;">○</span> $1').replace(/^- (.+)/gm, '<li style="margin-left:1rem;">$1</li>').replace(/^---$/gm, '<hr style="border:none;border-top:1px solid #E2E8F0;margin:1.5rem 0;">').replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/\|(.+)\|/g, (match) => {
        const cells = match.split("|").filter((c) => c.trim());
        if (cells.some((c) => /^-+$/.test(c.trim()))) return "";
        return `<tr>${cells.map((c) => `<td style="padding:8px;border:1px solid #E2E8F0;">${c.trim()}</td>`).join("")}</tr>`;
      }).replace(/\n\n/g, '</p><p style="margin:0.5rem 0;">').replace(/\n/g, "<br>").replace(/<br><hr/g, "<hr");
      return `<div style="line-height:1.6;">${html}</div>`;
    };
    useSeoMeta({
      title: "План разработки — Админка"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ddb565e0><div class="d-flex align-center mb-6" data-v-ddb565e0><div data-v-ddb565e0><h1 class="text-h4 font-weight-bold mb-1" style="${ssrRenderStyle({ "color": "#020617" })}" data-v-ddb565e0>План разработки</h1><p class="text-body-2 text-grey-darken-1" data-v-ddb565e0>Текущие и будущие задачи</p></div>`);
      _push(ssrRenderComponent(VSpacer, null, null, _parent));
      if (!unref(editing)) {
        _push(ssrRenderComponent(VBtn, {
          color: "green-darken-3",
          variant: "flat",
          size: "small",
          style: { "border-radius": "8px" },
          onClick: startEdit
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VIcon, {
                start: "",
                size: "18"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`mdi-pencil`);
                  } else {
                    return [
                      createTextVNode("mdi-pencil")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(` Редактировать `);
            } else {
              return [
                createVNode(VIcon, {
                  start: "",
                  size: "18"
                }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-pencil")
                  ]),
                  _: 1
                }),
                createTextVNode(" Редактировать ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(editing)) {
        _push(ssrRenderComponent(VBtn, {
          color: "green-darken-3",
          variant: "flat",
          size: "small",
          style: { "border-radius": "8px" },
          loading: unref(saving),
          onClick: savePlan
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VIcon, {
                start: "",
                size: "18"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`mdi-content-save`);
                  } else {
                    return [
                      createTextVNode("mdi-content-save")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(` Сохранить `);
            } else {
              return [
                createVNode(VIcon, {
                  start: "",
                  size: "18"
                }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-content-save")
                  ]),
                  _: 1
                }),
                createTextVNode(" Сохранить ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(editing)) {
        _push(ssrRenderComponent(VBtn, {
          variant: "text",
          color: "grey-darken-2",
          size: "small",
          class: "ml-2",
          onClick: cancelEdit
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Отмена `);
            } else {
              return [
                createTextVNode(" Отмена ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(VCard, {
        class: "pa-6",
        style: { "border": "1px solid #E2E8F0", "border-radius": "12px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(editing)) {
              _push2(`<div class="plan-content" data-v-ddb565e0${_scopeId}>${unref(renderedPlan) ?? ""}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(editing)) {
              _push2(`<div data-v-ddb565e0${_scopeId}>`);
              _push2(ssrRenderComponent(VTextarea, {
                modelValue: unref(planContent),
                "onUpdate:modelValue": ($event) => isRef(planContent) ? planContent.value = $event : null,
                variant: "outlined",
                rows: "30",
                "hide-details": "",
                class: "font-monospace"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-caption text-grey-darken-1 mt-2" data-v-ddb565e0${_scopeId}> Поддерживает Markdown. Используйте ## для заголовков, - [ ] для чекбоксов, | | для таблиц. </p></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !unref(editing) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "plan-content",
                innerHTML: unref(renderedPlan)
              }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
              unref(editing) ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode(VTextarea, {
                  modelValue: unref(planContent),
                  "onUpdate:modelValue": ($event) => isRef(planContent) ? planContent.value = $event : null,
                  variant: "outlined",
                  rows: "30",
                  "hide-details": "",
                  class: "font-monospace"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("p", { class: "text-caption text-grey-darken-1 mt-2" }, " Поддерживает Markdown. Используйте ## для заголовков, - [ ] для чекбоксов, | | для таблиц. ")
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/plan/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ddb565e0"]]);

export { index as default };
//# sourceMappingURL=index-ssmWnw2v.mjs.map
