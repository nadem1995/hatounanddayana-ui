export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
  },


  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://127.0.0.1:8000/api",
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
      phone: "+963995273158",
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
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
    locales: [
      {
        code: "en",
        language: "en-US",
        name: "English",
        dir: "ltr",
        file: "en.json",
      },
      {
        code: "ar",
        language: "ar-SA",
        name: "العربية",
        dir: "rtl",
        file: "ar.json",
      },
    ],
    defaultLocale: "ar",
    strategy: "no_prefix",
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { swr: 3600 },
    "/about-us": { prerender: true },
    "/contact": { prerender: true },
    "/products": { swr: 3600 },
    "/**": {
      headers: {
        "X-Robots-Tag": "index, follow",
      },
    },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
