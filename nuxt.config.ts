export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxt/image",
  ],
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
ssr:true,
  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://hatounanddayana.com",
    locales: [
      { code: "en", language: "en-US", name: "English", dir: "ltr", file: "en.json" },
      { code: "ar", language: "ar-SA", name: "العربية", dir: "rtl", file: "ar.json" },
    ],
    defaultLocale: "ar",
    strategy: "no_prefix",
  },
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2025-01-15",
})
