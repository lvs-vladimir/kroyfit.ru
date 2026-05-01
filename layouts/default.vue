<template>
  <div class="landing-layout">
    <AppHeader />
    <slot />
    <ContactsSection />
  </div>
</template>

<script setup lang="ts">
// Layout with shared header and footer for landing pages
// Landing fonts loaded only here

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700;1,800&family=DM+Sans:wght@400;500;600;700&display=swap' },
  ]
})
</script>

<style>
/* Landing page CSS - only applied within .landing-layout */
@import '~/assets/css/design.css';
</style>