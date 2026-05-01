import { _ as __nuxt_component_0 } from "./nuxt-link-B6u-mv8x.js";
import { defineComponent, ref, withAsyncContext, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { u as useRoute, a as useRouter, _ as _export_sfc } from "../server.mjs";
import { u as useFetch } from "./fetch-fEdJ56IL.js";
import { a as useSeoMeta } from "./composables-DeVZMDsx.js";
import "/root/kroyfit/node_modules/ufo/dist/index.mjs";
import "/root/kroyfit/node_modules/defu/dist/defu.mjs";
import "/root/kroyfit/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/root/kroyfit/node_modules/hookable/dist/index.mjs";
import "/root/kroyfit/node_modules/unctx/dist/index.mjs";
import "/root/kroyfit/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "vue-router";
import "/root/kroyfit/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "./ssr-BNaGEt3_.js";
import "/root/kroyfit/node_modules/perfect-debounce/dist/index.mjs";
import "/root/kroyfit/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    useRouter();
    const isLoggedIn = ref(false);
    const isPurchased = ref(false);
    const purchasing = ref(false);
    const showLoginModal = ref(false);
    ref(null);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "course-page" }, _attrs))} data-v-05ed0f73>`);
      if (unref(pending)) {
        _push(`<div class="loading-container" data-v-05ed0f73><div class="spinner" data-v-05ed0f73></div><p data-v-05ed0f73>Загрузка курса...</p></div>`);
      } else if (unref(error) || !unref(course)) {
        _push(`<div class="error-container" data-v-05ed0f73><div class="container-max" data-v-05ed0f73><h1 data-v-05ed0f73>Курс не найден</h1><p data-v-05ed0f73>К сожалению, этот курс не существует или был удален.</p>`);
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
        _push(`<div data-v-05ed0f73><section class="course-hero" data-v-05ed0f73><div class="container-max" data-v-05ed0f73><div class="hero-content" data-v-05ed0f73><div class="hero-left" data-v-05ed0f73><span class="hero-tag" data-v-05ed0f73>${ssrInterpolate(unref(course).category)}</span><h1 class="hero-title" data-v-05ed0f73>${ssrInterpolate(unref(course).title)}</h1><div class="course-meta" data-v-05ed0f73><div class="meta-item" data-v-05ed0f73><span class="meta-icon" data-v-05ed0f73>⏱️</span><div data-v-05ed0f73><div class="meta-label" data-v-05ed0f73>Длительность</div><div class="meta-value" data-v-05ed0f73>${ssrInterpolate(unref(course).duration)}</div></div></div><div class="meta-item" data-v-05ed0f73><span class="meta-icon" data-v-05ed0f73>📚</span><div data-v-05ed0f73><div class="meta-label" data-v-05ed0f73>Уроков</div><div class="meta-value" data-v-05ed0f73>${ssrInterpolate(unref(course).lessonsCount)}</div></div></div><div class="meta-item" data-v-05ed0f73><span class="meta-icon" data-v-05ed0f73>💰</span><div data-v-05ed0f73><div class="meta-label" data-v-05ed0f73>Цена</div><div class="meta-value" data-v-05ed0f73>${ssrInterpolate(unref(course).price)} ₽</div></div></div></div><div class="hero-buttons" data-v-05ed0f73>`);
        if (!unref(isLoggedIn)) {
          _push(`<button class="btn-primary" data-v-05ed0f73> Купить курс </button>`);
        } else if (!unref(isPurchased)) {
          _push(`<button class="btn-primary"${ssrIncludeBooleanAttr(unref(purchasing)) ? " disabled" : ""} data-v-05ed0f73>${ssrInterpolate(unref(purchasing) ? "Создание платежа..." : "Купить курс")}</button>`);
        } else {
          _push(`<div class="btn-success" data-v-05ed0f73> ✓ Курс приобретен </div>`);
        }
        _push(`<a href="tel:89132101662" class="btn-outline" data-v-05ed0f73> Позвонить </a></div></div><div class="hero-right" data-v-05ed0f73><div class="course-image-wrapper" data-v-05ed0f73>`);
        if (unref(course).image) {
          _push(`<img${ssrRenderAttr("src", unref(course).image)}${ssrRenderAttr("alt", unref(course).title)} class="course-image" data-v-05ed0f73>`);
        } else {
          _push(`<div class="course-image-placeholder" data-v-05ed0f73> 📚 </div>`);
        }
        _push(`</div></div></div></div></section><section class="course-details" data-v-05ed0f73><div class="container-max" data-v-05ed0f73><div class="details-grid" data-v-05ed0f73><div class="details-main" data-v-05ed0f73><h2 data-v-05ed0f73>Описание курса</h2><div class="course-description" data-v-05ed0f73>${formatDescription(unref(course).fullDescription || unref(course).description) ?? ""}</div></div><div class="details-sidebar" data-v-05ed0f73><div class="sidebar-card" data-v-05ed0f73><h3 data-v-05ed0f73>Что вы получите</h3><ul class="benefits-list" data-v-05ed0f73><!--[-->`);
        ssrRenderList(unref(course).benefits, (benefit) => {
          _push(`<li data-v-05ed0f73><span class="benefit-icon" data-v-05ed0f73>✓</span> ${ssrInterpolate(benefit)}</li>`);
        });
        _push(`<!--]--></ul></div></div></div></div></section>`);
        if (unref(otherCourses).length > 0) {
          _push(`<section class="other-courses" data-v-05ed0f73><div class="container-max" data-v-05ed0f73><h2 data-v-05ed0f73>Другие курсы</h2><div class="courses-grid" data-v-05ed0f73><!--[-->`);
          ssrRenderList(unref(otherCourses), (other) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: other.id,
              to: `/courses/${other.slug}`,
              class: "course-card-link"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="course-card" data-v-05ed0f73${_scopeId}><div class="card-header" data-v-05ed0f73${_scopeId}><h3 data-v-05ed0f73${_scopeId}>${ssrInterpolate(other.title)}</h3><span class="card-level" data-v-05ed0f73${_scopeId}>${ssrInterpolate(other.category)}</span></div><p class="card-description" data-v-05ed0f73${_scopeId}>${ssrInterpolate(other.description)}</p><div class="card-footer" data-v-05ed0f73${_scopeId}><span class="card-price" data-v-05ed0f73${_scopeId}>${ssrInterpolate(other.price)} ₽</span><span class="card-arrow" data-v-05ed0f73${_scopeId}>→</span></div></div>`);
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
        _push(`<section class="cta-section" data-v-05ed0f73><div class="container-max" data-v-05ed0f73><h2 data-v-05ed0f73>Готовы начать обучение?</h2><p data-v-05ed0f73>Свяжитесь с нами, чтобы узнать о ближайшем наборе на курс</p><div class="cta-buttons" data-v-05ed0f73><a href="https://vk.com/write-53091601" target="_blank" class="btn-primary" data-v-05ed0f73> Купить курс </a><a href="tel:89132101662" class="btn-outline" data-v-05ed0f73> 8 913 210-16-62 </a></div></div></section></div>`);
      }
      if (unref(showLoginModal)) {
        _push(`<div class="modal-overlay" data-v-05ed0f73><div class="modal-content" data-v-05ed0f73><h3 class="modal-title" data-v-05ed0f73>Вход в аккаунт</h3><p class="modal-text" data-v-05ed0f73>Для покупки курса необходимо войти через ВКонтакте</p><div id="vk-login-modal" data-v-05ed0f73></div><button class="btn-outline" style="${ssrRenderStyle({ "margin-top": "1rem", "color": "var(--color-dark)", "border-color": "var(--color-dark)" })}" data-v-05ed0f73> Отмена </button></div></div>`);
      } else {
        _push(`<!---->`);
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
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-05ed0f73"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-CDowzmc2.js.map
