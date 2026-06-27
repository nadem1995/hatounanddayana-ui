<template>
  <UApp :locale="locales[locale]">
    <NuxtLoadingIndicator color="linear-gradient(to right, #07342f, #d5ba94)"
                          :height="2"  />
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
import * as locales from "@nuxt/ui/locale"

const { locale, t } = useI18n()
const config = useRuntimeConfig()

const lang = computed(() => locale.value)
const dir = computed(() => locales[locale.value].dir)
const siteUrl = config.public.siteUrl || "https://hatounanddayana.com/"
const siteName = computed(() => t('seo.app.appName'))
const siteDescription = computed(() => t('seo.app.siteDescription'))

useHead({
  htmlAttrs: {
    lang,
    dir,
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${siteName.value}` : siteName.value
  },
  meta: [
    { name: 'theme-color', content: '#d5ba94' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'canonical', href: siteUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteName.value,
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: `+${config.public.phone}`,
          contactType: 'customer service',
          availableLanguage: ['Arabic', 'English'],
        },
        sameAs: [
           'https://www.instagram.com/hatoundayana',
        ]
      })
    }
  ]
})

useSeoMeta({
  title: siteName,
  description: siteDescription,
  ogTitle: siteName,
  ogDescription: siteDescription,
  ogImage: `${siteUrl}/og-image.jpg`,
  ogUrl: siteUrl,
  ogType: 'website',
  ogSiteName: siteName,
  ogLocale: computed(() => locale.value === 'ar' ? 'ar_SA' : 'en_US'),
  twitterCard: 'summary_large_image',
  twitterTitle: siteName,
  twitterDescription: siteDescription,
  twitterImage: `${siteUrl}/og-image.jpg`,
  robots: 'index, follow',
})
</script>
