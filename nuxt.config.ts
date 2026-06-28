export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxt/image",
  ],

  ssr: true,

  nitro: {
    prerender: {
      failOnError: false,
      autoSubfolderIndex: false,
      crawlLinks: false,
      routes: []
    }
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "https://api.hatounanddayana.com/api",
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://hatounanddayana.com",
      phone: "+963983129860",
    },
  },

  devtools: { enabled: false },

  app: {
    head: {
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },
    },
  },

  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://hatounanddayana.com",
    locales: [
      { code: "en", language: "en-US", name: "English", dir: "ltr", file: "en.json" },
      { code: "ar", language: "ar-SA", name: "العربية", dir: "rtl", file: "ar.json" },
    ],
    defaultLocale: "ar",
    strategy: "no_prefix",
    skipSettingLocaleOnNavigate: false,
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: "root",
      fallbackLocale: "ar",
      alwaysRedirect: false,
      cookieCrossOrigin: false,
    },
  },

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
})
