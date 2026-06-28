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

const lang = computed(() => locale.value)
const dir = computed(() => locales[locale.value].dir)
const canonicalUrl = computed(() => `${siteUrl}${route.path}`)
const ogLocale = computed(() => locale.value === 'ar' ? 'ar_SA' : 'en_US')

const siteName = computed(() => t('seo.app.appName'))
const siteDescription = computed(() => t('seo.app.siteDescription'))
const ogTitle = computed(() => t('seo.app.ogTitle'))
const ogDescription = computed(() => t('seo.app.ogDescription'))
const twitterTitle = computed(() => t('seo.app.twitterTitle'))
const twitterDescription = computed(() => t('seo.app.twitterDescription'))

useHead({
  htmlAttrs: {
    lang,
    dir,
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${siteName.value}` : siteName.value
  },
  meta: [
    { name: 'theme-color', content: '#d5ba94' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'canonical', href: canonicalUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteName.value,
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: `${config.public.phone}`,
          contactType: 'customer service',
          availableLanguage: ['Arabic', 'English'],
        },
        sameAs: [
          'https://www.instagram.com/hatoundayana',
        ]
      }))
    }
  ]
})

useSeoMeta({
  title: siteName,
  description: siteDescription,
  ogTitle,
  ogDescription,
  ogImage: `${siteUrl}/og-image.jpg`,
  ogUrl: canonicalUrl,
  ogType: 'website',
  ogSiteName: siteName,
  ogLocale,
  twitterCard: 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage: `${siteUrl}/og-image.jpg`,
  robots: 'index, follow',
})
</script>
