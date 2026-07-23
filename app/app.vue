<template>
  <UApp :locale="locales[locale]">
    <NuxtLoadingIndicator
      color="linear-gradient(to right, #07342f, #d5ba94)"
      :height="2"
    />
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
import * as locales from "@nuxt/ui/locale"

const { locale, t } = useI18n()
const config = useRuntimeConfig()
const route = useRoute()

const siteUrl = config.public.siteUrl || "https://hatounanddayana.com"

useHead({
  htmlAttrs: {
    lang: () => locale.value,
    dir: () => locale.value === 'ar' ? 'rtl' : 'ltr',
  },
  titleTemplate: (titleChunk) => {
    const name = t('seo.app.appName')
    return titleChunk ? `${titleChunk} - ${name}` : name
  },
  meta: [
    { name: 'theme-color', content: '#f3e8dc' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { charset: 'utf-8' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'canonical', href: () => `${siteUrl}${route.path}` },

  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: t('seo.app.appName'),
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: `${config.public.phone}`,
          contactType: 'customer service',
          availableLanguage: ['Arabic', 'English'],
        },
        sameAs: ['https://www.instagram.com/hatoundayana']
      }))
    }
  ]
})

useSeoMeta({
  title: () => t('seo.app.appName'),
  description: () => t('seo.app.siteDescription'),
  ogTitle: () => t('seo.app.ogTitle'),
  ogDescription: () => t('seo.app.ogDescription'),
  ogImage: `${siteUrl}/public/images/logo/logo2.png`,
  ogUrl: () => `${siteUrl}${route.path}`,
  ogType: 'website',
  ogSiteName: () => t('seo.app.appName'),
  ogLocale: () => locale.value === 'ar' ? 'ar_SA' : 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('seo.app.twitterTitle'),
  twitterDescription: () => t('seo.app.twitterDescription'),
  twitterImage: `${siteUrl}/og-image.jpg`,
  robots: 'index, follow',
})
</script>
