import { defineComponent, mergeProps, useSSRContext, ref, unref, withCtx, createTextVNode, withAsyncContext, computed } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-B6u-mv8x.js";
import { u as useFetch } from "./fetch-fEdJ56IL.js";
import { a as useSeoMeta } from "./composables-DeVZMDsx.js";
import "/root/kroyfit/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/root/kroyfit/node_modules/hookable/dist/index.mjs";
import "/root/kroyfit/node_modules/unctx/dist/index.mjs";
import "/root/kroyfit/node_modules/@nuxt/nitro-server/dist/runtime/h3-compat.mjs";
import "vue-router";
import "/root/kroyfit/node_modules/defu/dist/defu.mjs";
import "/root/kroyfit/node_modules/ufo/dist/index.mjs";
import "/root/kroyfit/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "./ssr-BNaGEt3_.js";
import "/root/kroyfit/node_modules/perfect-debounce/dist/index.mjs";
import "/root/kroyfit/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "hero",
        id: "hero"
      }, _attrs))} data-v-9c57a82f><div class="container-max" data-v-9c57a82f><div class="hero-content" data-v-9c57a82f><div class="hero-left" data-v-9c57a82f><div class="hero-tag text-uppercase text-accent" data-v-9c57a82f> ✂️ Барнаул · С 2014 года </div><h1 class="hero-title" data-v-9c57a82f><span class="hero-title-normal" data-v-9c57a82f>Шейте одежду</span><span class="hero-title-italic text-accent" data-v-9c57a82f>как вторая кожа</span></h1><p class="hero-subtitle" data-v-9c57a82f> Авторская методика точного кроя по Злачевской. Идеальная посадка — без примерок. </p><div class="hero-buttons" data-v-9c57a82f><button class="btn-primary" data-v-9c57a82f>Выбрать курс</button><button class="btn-outline" data-v-9c57a82f>Написать в VK</button></div><div class="hero-metrics" data-v-9c57a82f><div class="metric" data-v-9c57a82f><div class="metric-value" data-v-9c57a82f>12+</div><div class="metric-label" data-v-9c57a82f>лет опыта</div></div><div class="metric-divider" data-v-9c57a82f></div><div class="metric" data-v-9c57a82f><div class="metric-value" data-v-9c57a82f>500+</div><div class="metric-label" data-v-9c57a82f>выпускниц</div></div><div class="metric-divider" data-v-9c57a82f></div><div class="metric" data-v-9c57a82f><div class="metric-value" data-v-9c57a82f>★ 5.0</div><div class="metric-label" data-v-9c57a82f>рейтинг</div></div></div></div><div class="hero-right" data-v-9c57a82f><div class="hero-image-wrapper" data-v-9c57a82f><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&amp;h=700&amp;fit=crop" alt="Портновский манекен" class="hero-image" data-v-9c57a82f><div class="hero-badge" data-v-9c57a82f><span class="badge-icon" data-v-9c57a82f>🧵</span><span class="badge-text" data-v-9c57a82f>Методика Злачевской</span></div></div></div></div></div><svg class="hero-decoration" viewBox="0 0 1000 100" preserveAspectRatio="none" data-v-9c57a82f><path d="M0,50 Q250,0 500,50 T1000,50" stroke="var(--color-copper)" stroke-width="2" fill="none" stroke-dasharray="5,5" opacity="0.3" data-v-9c57a82f></path></svg></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["__scopeId", "data-v-9c57a82f"]]), { __name: "HeroSection" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PainPoints",
  __ssrInlineRender: true,
  setup(__props) {
    const painPoints = [
      {
        icon: "📏",
        title: "Неправильные мерки",
        description: "Стандартные размеры не подходят вашей фигуре, и одежда сидит неудачно"
      },
      {
        icon: "✂️",
        title: "Сложный крой",
        description: "Выкройки из интернета часто ошибочны, а разобраться в них сложно"
      },
      {
        icon: "🧵",
        title: "Много примерок",
        description: "Приходится переделывать, потому что посадка не идеальна"
      },
      {
        icon: "😤",
        title: "Разочарование",
        description: "Потратили время и деньги, а результат не оправдал ожидания"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "pain-points",
        id: "pain-points"
      }, _attrs))} data-v-aa56e697><div class="container-max" data-v-aa56e697><div class="section-header" data-v-aa56e697><p class="section-tag text-uppercase text-accent" data-v-aa56e697>Знакомые проблемы?</p><h2 class="section-title" data-v-aa56e697>Почему шить сложно</h2></div><div class="pain-grid" data-v-aa56e697><!--[-->`);
      ssrRenderList(painPoints, (point, index2) => {
        _push(`<div class="${ssrRenderClass([`reveal-stagger-${index2 + 1}`, "pain-card"])}" data-v-aa56e697><div class="pain-icon" data-v-aa56e697>${ssrInterpolate(point.icon)}</div><h3 class="pain-title" data-v-aa56e697>${ssrInterpolate(point.title)}</h3><p class="pain-description" data-v-aa56e697>${ssrInterpolate(point.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PainPoints.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["__scopeId", "data-v-aa56e697"]]), { __name: "PainPoints" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CoursesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const courses = ref([]);
    ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "courses",
        id: "courses"
      }, _attrs))} data-v-917311b8><div class="container-max" data-v-917311b8><div class="section-header" data-v-917311b8><p class="section-tag text-uppercase text-accent" data-v-917311b8>Обучение</p><h2 class="section-title" data-v-917311b8>Наши курсы</h2></div><div class="courses-grid" data-v-917311b8><!--[-->`);
      ssrRenderList(unref(courses), (course, index2) => {
        _push(`<div class="${ssrRenderClass([`reveal-stagger-${index2 + 1}`, "course-card"])}" data-v-917311b8><div class="course-header" data-v-917311b8><h3 class="course-title" data-v-917311b8>${ssrInterpolate(course.title)}</h3><span class="course-level" data-v-917311b8>${ssrInterpolate(course.level)}</span></div><div class="course-details" data-v-917311b8><div class="detail" data-v-917311b8><span class="detail-icon" data-v-917311b8>⏱️</span><span class="detail-text" data-v-917311b8>${ssrInterpolate(course.duration)}</span></div><div class="detail" data-v-917311b8><span class="detail-icon" data-v-917311b8>📚</span><span class="detail-text" data-v-917311b8>${ssrInterpolate(course.lessons)} уроков</span></div></div><p class="course-description" data-v-917311b8>${ssrInterpolate(course.description)}</p><div class="course-skills" data-v-917311b8><p class="skills-label" data-v-917311b8>Вы научитесь:</p><ul class="skills-list" data-v-917311b8><!--[-->`);
        ssrRenderList(course.skills, (skill) => {
          _push(`<li data-v-917311b8>${ssrInterpolate(skill)}</li>`);
        });
        _push(`<!--]--></ul></div><div class="course-footer" data-v-917311b8><div class="course-price" data-v-917311b8>${ssrInterpolate(course.price)} ₽</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/courses/${course.slug}`,
          class: "btn-course"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Купить курс`);
            } else {
              return [
                createTextVNode("Купить курс")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CoursesSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-917311b8"]]), { __name: "CoursesSection" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ResultsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const results = [
      {
        icon: "👗",
        title: "Идеальный гардероб",
        description: "Одежда, которая сидит как вторая кожа и подчеркивает вашу красоту",
        stat: "100% посадка"
      },
      {
        icon: "🏪",
        title: "Собственное ателье",
        description: "Многие ученицы открывают свой бизнес и шьют на заказ",
        stat: "50+ ателье"
      },
      {
        icon: "💼",
        title: "Карьера в моде",
        description: "Работа в дизайн-студиях, ателье и модных домах",
        stat: "30+ мест"
      },
      {
        icon: "💰",
        title: "Дополнительный доход",
        description: "Шитье на заказ приносит от 50 000 ₽ в месяц",
        stat: "50k+ ₽/мес"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "results",
        id: "results"
      }, _attrs))} data-v-b35f88cc><div class="container-max" data-v-b35f88cc><div class="section-header" data-v-b35f88cc><p class="section-tag text-uppercase text-accent" data-v-b35f88cc>Результаты</p><h2 class="section-title" data-v-b35f88cc>Что получают наши ученицы</h2></div><div class="results-grid" data-v-b35f88cc><!--[-->`);
      ssrRenderList(results, (result, index2) => {
        _push(`<div class="${ssrRenderClass([`reveal-stagger-${index2 + 1}`, "result-card"])}" data-v-b35f88cc><div class="result-icon" data-v-b35f88cc>${ssrInterpolate(result.icon)}</div><h3 class="result-title" data-v-b35f88cc>${ssrInterpolate(result.title)}</h3><p class="result-description" data-v-b35f88cc>${ssrInterpolate(result.description)}</p><div class="result-stat" data-v-b35f88cc>${ssrInterpolate(result.stat)}</div></div>`);
      });
      _push(`<!--]--></div><div class="results-footer" data-v-b35f88cc><p class="results-footer-text" data-v-b35f88cc><span class="results-number" data-v-b35f88cc>500+</span> выпускниц уже шьют идеально сидящую одежду </p></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ResultsSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-b35f88cc"]]), { __name: "ResultsSection" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AboutSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "about",
        id: "about"
      }, _attrs))} data-v-53da389b><div class="container-max" data-v-53da389b><div class="about-content" data-v-53da389b><div class="about-image-wrapper" data-v-53da389b><img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&amp;h=600&amp;fit=crop" alt="Людмила Лукьянова" class="about-image" data-v-53da389b><div class="about-overlay" data-v-53da389b></div></div><div class="about-text" data-v-53da389b><p class="about-tag text-uppercase text-accent" data-v-53da389b>Основатель</p><h2 class="about-name" data-v-53da389b>Людмила Лукьянова</h2><p class="about-title" data-v-53da389b>Автор методики точного кроя</p><div class="about-facts" data-v-53da389b><div class="fact" data-v-53da389b><span class="fact-icon" data-v-53da389b>📍</span><span class="fact-text" data-v-53da389b><strong data-v-53da389b>50+ лет</strong> опыта в шитье</span></div><div class="fact" data-v-53da389b><span class="fact-icon" data-v-53da389b>📅</span><span class="fact-text" data-v-53da389b>Преподаёт <strong data-v-53da389b>с 2014 года</strong></span></div><div class="fact" data-v-53da389b><span class="fact-icon" data-v-53da389b>✨</span><span class="fact-text" data-v-53da389b>Создала <strong data-v-53da389b>авторскую методику</strong></span></div></div><blockquote class="about-quote" data-v-53da389b> «Идеальная посадка одежды — это не магия, это наука. Когда вы понимаете принципы точного кроя, вы можете шить что угодно.» </blockquote><p class="about-description" data-v-53da389b> Людмила разработала уникальную методику, которая позволяет шить одежду, идеально сидящую на любой фигуре. Её ученицы не нуждаются в примерках — одежда садится с первой попытки. </p><p class="about-description" data-v-53da389b> За 12 лет преподавания она обучила более 500 человек, многие из которых открыли собственные ателье и работают по её методике. </p></div></div></div><svg class="about-stitch" viewBox="0 0 1000 50" preserveAspectRatio="none" data-v-53da389b><path d="M0,25 L10,20 L20,30 L30,20 L40,30 L50,20 L60,30 L70,20 L80,30 L90,20 L100,30 L110,20 L120,30 L130,20 L140,30 L150,20 L160,30 L170,20 L180,30 L190,20 L200,30 L210,20 L220,30 L230,20 L240,30 L250,20 L260,30 L270,20 L280,30 L290,20 L300,30 L310,20 L320,30 L330,20 L340,30 L350,20 L360,30 L370,20 L380,30 L390,20 L400,30 L410,20 L420,30 L430,20 L440,30 L450,20 L460,30 L470,20 L480,30 L490,20 L500,30 L510,20 L520,30 L530,20 L540,30 L550,20 L560,30 L570,20 L580,30 L590,20 L600,30 L610,20 L620,30 L630,20 L640,30 L650,20 L660,30 L670,20 L680,30 L690,20 L700,30 L710,20 L720,30 L730,20 L740,30 L750,20 L760,30 L770,20 L780,30 L790,20 L800,30 L810,20 L820,30 L830,20 L840,30 L850,20 L860,30 L870,20 L880,30 L890,20 L900,30 L910,20 L920,30 L930,20 L940,30 L950,20 L960,30 L970,20 L980,30 L990,20 L1000,30" stroke="var(--color-copper)" stroke-width="2" fill="none" data-v-53da389b></path></svg></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-53da389b"]]), { __name: "AboutSection" });
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "cta-banner" }, _attrs))} data-v-75d2eafa><div class="cta-decoration" data-v-75d2eafa></div><div class="container-max" data-v-75d2eafa><div class="cta-content" data-v-75d2eafa><h2 class="cta-title" data-v-75d2eafa>Начните сегодня</h2><p class="cta-subtitle" data-v-75d2eafa> Присоединитесь к 500+ ученицам, которые уже шьют идеально сидящую одежду </p><div class="cta-buttons" data-v-75d2eafa><button class="btn-cta btn-cta-primary" data-v-75d2eafa>Выбрать курс</button><button class="btn-cta btn-cta-secondary" data-v-75d2eafa>Написать в VK</button></div><div class="cta-contacts" data-v-75d2eafa><div class="contact-item" data-v-75d2eafa><span class="contact-icon" data-v-75d2eafa>📞</span><span class="contact-text" data-v-75d2eafa>8 913 210-16-62</span></div><div class="contact-divider" data-v-75d2eafa></div><div class="contact-item" data-v-75d2eafa><span class="contact-icon" data-v-75d2eafa>📍</span><span class="contact-text" data-v-75d2eafa>Барнаул, ул. Профинтерна 7А</span></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CtaBanner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-75d2eafa"]]), { __name: "CtaBanner" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: siteInfo } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/site-info",
      "$dB4xe40BkW"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const seoTitle = computed(() => siteInfo.value?.seo?.title || "Генетика Кроя — Курсы кройки и шитья в Барнауле");
    const seoDescription = computed(() => siteInfo.value?.seo?.description || "Авторская методика точного кроя по Злачевской. Идеальная посадка одежды без примерок. Обучение в Барнауле с 2014 года.");
    const seoOgImage = computed(() => siteInfo.value?.seo?.ogImage || "https://images.unsplash.com/photo-1558618666-fcd25c85cd62?w=1200&h=630&fit=crop");
    useSeoMeta({
      title: seoTitle,
      description: seoDescription,
      ogImage: seoOgImage
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroSection = __nuxt_component_0;
      const _component_PainPoints = __nuxt_component_1;
      const _component_CoursesSection = __nuxt_component_2;
      const _component_ResultsSection = __nuxt_component_3;
      const _component_AboutSection = __nuxt_component_4;
      const _component_CtaBanner = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "landing-page" }, _attrs))} data-v-d0f53f00>`);
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_PainPoints, null, null, _parent));
      _push(ssrRenderComponent(_component_CoursesSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ResultsSection, null, null, _parent));
      _push(ssrRenderComponent(_component_AboutSection, null, null, _parent));
      _push(ssrRenderComponent(_component_CtaBanner, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d0f53f00"]]);
export {
  index as default
};
//# sourceMappingURL=index-CLaQcmAa.js.map
