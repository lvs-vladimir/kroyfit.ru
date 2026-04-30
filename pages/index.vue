<template>
  <div class="landing-page">
    <AppHeader />
    <HeroSection />
    <PainPoints />
    <CoursesSection />
    <ResultsSection />
    <AboutSection />
    <CtaBanner />
    <ContactsSection />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Генетика Кроя — Курсы кройки и шитья в Барнауле',
  description: 'Авторская методика точного кроя по Злачевской. Идеальная посадка одежды без примерок. Обучение в Барнауле с 2014 года.',
  ogImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd62?w=1200&h=630&fit=crop',
})
</script>

<style scoped>
.landing-page {
  background-color: var(--color-cream);
  overflow-x: hidden;
}
</style>
