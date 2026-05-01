import { _ as __nuxt_component_0 } from './nuxt-link-B6u-mv8x.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRoute, a as useRouter } from './server.mjs';
import { u as useFetch } from './fetch-fEdJ56IL.mjs';
import { u as useSeoMeta } from './composables-DeVZMDsx.mjs';
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
import 'path';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';
import '@vue/shared';
import './ssr-BNaGEt3_.mjs';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    useRouter();
    const { data: courseData, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `/api/courses/${route.params.slug}`,
      "$wBB6yr_In-"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: allCoursesData } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/courses",
      "$v8kiOgz1G-"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const course = computed(() => {
      if (!courseData.value) return null;
      const c = courseData.value;
      if (!c.isPublished) return null;
      return {
        id: c.id,
        slug: c.slug,
        title: c.title,
        description: c.description,
        fullDescription: c.fullDescription,
        price: c.price ? c.price.toLocaleString("ru-RU") : "0",
        category: c.category || "Базовый",
        duration: c.duration || "2 месяца",
        lessonsCount: c.lessonsCount || 0,
        image: c.image,
        benefits: c.benefits ? JSON.parse(c.benefits) : generateBenefits(c.title, c.category)
      };
    });
    const otherCourses = computed(() => {
      if (!allCoursesData.value?.courses) return [];
      return allCoursesData.value.courses.filter((c) => c.slug !== route.params.slug && c.isPublished === true).map((c) => ({
        id: c.id,
        slug: c.slug,
        title: c.title,
        description: c.description,
        price: c.price ? c.price.toLocaleString("ru-RU") : "0",
        category: c.category || "Базовый"
      })).slice(0, 3);
    });
    const generateBenefits = (title, category) => {
      const benefitsMap = {
        "Технология пошива": [
          "Основы шитья и работа с тканями",
          "Построение выкроек",
          "Пошив юбки, брюк и платья",
          "Практические навыки",
          "Сертификат об окончании"
        ],
        "Мастер конструирования": [
          "Методика точного кроя по Злачевской",
          "Конструирование одежды",
          "Точные расчеты и измерения",
          "Профессиональный уровень",
          "Диплом"
        ],
        "Дамское бельё": [
          "Конструирование белья",
          "Работа с деликатными тканями",
          "Дизайн и моделирование",
          "Пошив красивого белья",
          "Сертификат"
        ]
      };
      return benefitsMap[title] || [
        "Практические навыки",
        "Работа с опытным преподавателем",
        "Индивидуальный подход",
        "Сертификат об окончании"
      ];
    };
    const formatDescription = (text) => {
      if (!text) return "<p>Описание курса будет добавлено позже.</p>";
      return text.split("\n").map((line) => {
        if (line.startsWith("**") && line.endsWith("**")) {
          return `<strong>${line.replace(/\*\*/g, "")}</strong>`;
        }
        if (line.startsWith("- ")) {
          return `<li>${line.substring(2)}</li>`;
        }
        if (line.trim()) {
          return `<p>${line}</p>`;
        }
        return "";
      }).join("");
    };
    const { data: siteInfo } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/site-info",
      "$R_xKy3VY0y"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const siteName = computed(() => siteInfo.value?.siteName || "Генетика Кроя");
    useSeoMeta({
      title: () => course.value ? `${course.value.title} — ${siteName.value}` : "Курс не найден",
      description: () => course.value?.description || siteInfo.value?.seo?.description || "Курсы кройки и шитья",
      ogImage: () => course.value?.image || siteInfo.value?.seo?.ogImage || ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "course-page" }, _attrs))} data-v-eff9e092>`);
      if (unref(pending)) {
        _push(`<div class="loading-container" data-v-eff9e092><div class="spinner" data-v-eff9e092></div><p data-v-eff9e092>Загрузка курса...</p></div>`);
      } else if (unref(error) || !unref(course)) {
        _push(`<div class="error-container" data-v-eff9e092><div class="container-max" data-v-eff9e092><h1 data-v-eff9e092>Курс не найден</h1><p data-v-eff9e092>К сожалению, этот курс не существует или был удален.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Вернуться на главную`);
            } else {
              return [
                createTextVNode("Вернуться на главную")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div data-v-eff9e092><section class="course-hero" data-v-eff9e092><div class="container-max" data-v-eff9e092><div class="hero-content" data-v-eff9e092><div class="hero-left" data-v-eff9e092><span class="hero-tag" data-v-eff9e092>${ssrInterpolate(unref(course).category)}</span><h1 class="hero-title" data-v-eff9e092>${ssrInterpolate(unref(course).title)}</h1><div class="course-meta" data-v-eff9e092><div class="meta-item" data-v-eff9e092><span class="meta-icon" data-v-eff9e092>⏱️</span><div data-v-eff9e092><div class="meta-label" data-v-eff9e092>Длительность</div><div class="meta-value" data-v-eff9e092>${ssrInterpolate(unref(course).duration)}</div></div></div><div class="meta-item" data-v-eff9e092><span class="meta-icon" data-v-eff9e092>📚</span><div data-v-eff9e092><div class="meta-label" data-v-eff9e092>Уроков</div><div class="meta-value" data-v-eff9e092>${ssrInterpolate(unref(course).lessonsCount)}</div></div></div><div class="meta-item" data-v-eff9e092><span class="meta-icon" data-v-eff9e092>💰</span><div data-v-eff9e092><div class="meta-label" data-v-eff9e092>Цена</div><div class="meta-value" data-v-eff9e092>${ssrInterpolate(unref(course).price)} ₽</div></div></div></div><div class="hero-buttons" data-v-eff9e092><a href="https://vk.com/write-53091601" target="_blank" class="btn-primary" data-v-eff9e092> Купить курс </a><a href="tel:89132101662" class="btn-outline" data-v-eff9e092> Позвонить </a></div></div><div class="hero-right" data-v-eff9e092><div class="course-image-wrapper" data-v-eff9e092>`);
        if (unref(course).image) {
          _push(`<img${ssrRenderAttr("src", unref(course).image)}${ssrRenderAttr("alt", unref(course).title)} class="course-image" data-v-eff9e092>`);
        } else {
          _push(`<div class="course-image-placeholder" data-v-eff9e092> 📚 </div>`);
        }
        _push(`</div></div></div></div></section><section class="course-details" data-v-eff9e092><div class="container-max" data-v-eff9e092><div class="details-grid" data-v-eff9e092><div class="details-main" data-v-eff9e092><h2 data-v-eff9e092>Описание курса</h2><div class="course-description" data-v-eff9e092>${formatDescription(unref(course).fullDescription || unref(course).description) ?? ""}</div></div><div class="details-sidebar" data-v-eff9e092><div class="sidebar-card" data-v-eff9e092><h3 data-v-eff9e092>Что вы получите</h3><ul class="benefits-list" data-v-eff9e092><!--[-->`);
        ssrRenderList(unref(course).benefits, (benefit) => {
          _push(`<li data-v-eff9e092><span class="benefit-icon" data-v-eff9e092>✓</span> ${ssrInterpolate(benefit)}</li>`);
        });
        _push(`<!--]--></ul></div></div></div></div></section>`);
        if (unref(otherCourses).length > 0) {
          _push(`<section class="other-courses" data-v-eff9e092><div class="container-max" data-v-eff9e092><h2 data-v-eff9e092>Другие курсы</h2><div class="courses-grid" data-v-eff9e092><!--[-->`);
          ssrRenderList(unref(otherCourses), (other) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: other.id,
              to: `/courses/${other.slug}`,
              class: "course-card-link"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="course-card" data-v-eff9e092${_scopeId}><div class="card-header" data-v-eff9e092${_scopeId}><h3 data-v-eff9e092${_scopeId}>${ssrInterpolate(other.title)}</h3><span class="card-level" data-v-eff9e092${_scopeId}>${ssrInterpolate(other.category)}</span></div><p class="card-description" data-v-eff9e092${_scopeId}>${ssrInterpolate(other.description)}</p><div class="card-footer" data-v-eff9e092${_scopeId}><span class="card-price" data-v-eff9e092${_scopeId}>${ssrInterpolate(other.price)} ₽</span><span class="card-arrow" data-v-eff9e092${_scopeId}>→</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "course-card" }, [
                      createVNode("div", { class: "card-header" }, [
                        createVNode("h3", null, toDisplayString(other.title), 1),
                        createVNode("span", { class: "card-level" }, toDisplayString(other.category), 1)
                      ]),
                      createVNode("p", { class: "card-description" }, toDisplayString(other.description), 1),
                      createVNode("div", { class: "card-footer" }, [
                        createVNode("span", { class: "card-price" }, toDisplayString(other.price) + " ₽", 1),
                        createVNode("span", { class: "card-arrow" }, "→")
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div></div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<section class="cta-section" data-v-eff9e092><div class="container-max" data-v-eff9e092><h2 data-v-eff9e092>Готовы начать обучение?</h2><p data-v-eff9e092>Свяжитесь с нами, чтобы узнать о ближайшем наборе на курс</p><div class="cta-buttons" data-v-eff9e092><a href="https://vk.com/write-53091601" target="_blank" class="btn-primary" data-v-eff9e092> Купить курс </a><a href="tel:89132101662" class="btn-outline" data-v-eff9e092> 8 913 210-16-62 </a></div></div></section></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eff9e092"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-HGBAzSWs.mjs.map
