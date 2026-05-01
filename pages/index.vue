<template>
  <div class="landing-page">
    <HeroSection />
    <PainPoints />
    <CoursesSection />
    <ResultsSection />
    <AboutSection />
    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
// Загружаем SEO настройки из БД
const { data: siteInfo } = await useFetch('/api/site-info')

const seoTitle = computed(() => siteInfo.value?.seo?.title || 'Генетика Кроя — Курсы кройки и шитья в Барнауле')
const seoDescription = computed(() => siteInfo.value?.seo?.description || 'Авторская методика точного кроя по Злачевской. Идеальная посадка одежды без примерок. Обучение в Барнауле с 2014 года.')
const seoOgImage = computed(() => siteInfo.value?.seo?.ogImage || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd62?w=1200&h=630&fit=crop')

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogImage: seoOgImage,
})
</script>

<style scoped>
.landing-page {
  background-color: var(--color-cream);
  overflow-x: hidden;
}
</style>
