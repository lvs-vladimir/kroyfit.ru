export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  
  nitro: {
    preset: 'node-server',
    publicAssets: [
      {
        dir: 'public',
        baseURL: '/',
        maxAge: 60 * 60 * 24 * 365
      }
    ]
  },
  
  modules: [
    'vuetify-nuxt-module',
  ],

  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
  ],

  vuetify: {
    moduleOptions: {
      ssrClientHints: {
        reloadOnFirstRequest: false,
      },
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            colors: {
              primary: '#00DC82',        // Green (как на nuxt.com)
              secondary: '#6366F1',      // Индиго (для лендинга)
              accent: '#06B6D4',         // Голубой
              error: '#EF4444',
              warning: '#F59E0B',
              info: '#3B82F6',
              success: '#10B981',
              background: '#F8FAFC',
              surface: '#FFFFFF',
              'surface-dim': '#F1F5F9',
            },
          },
        },
      },
    },
  },

  app: {
    head: {
      title: 'Генетика Кроя — Курсы кройки и шитья в Барнауле',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Курсы кройки и шитья в Барнауле. Методика точного кроя по Злачевской. С 2014 года.' },
        { name: 'theme-color', content: '#6366F1' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap' },
        ],
        script: [
          { src: 'https://unpkg.com/@vkid/sdk@<3.0.0/dist-sdk/umd/index.js', nonce: 'csp_nonce' },
        ],
      },
    },
  })