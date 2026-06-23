<template>
  <UApp :locale="locales[locale]">
    <NuxtLoadingIndicator color="#346a36" />
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
import * as locales from "@nuxt/ui/locale"

const { locale } = useI18n()
const config = useRuntimeConfig()

const lang = computed(() => locale.value)
const dir = computed(() => locales[locale.value].dir)
const siteUrl = config.public.siteUrl || "http://localhost:3000"

useHead({
  htmlAttrs: {
    lang,
    dir,
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk}` : "ديانا"
  },
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    // ❌ removed canonical from here (add it per page instead)
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ديانا',
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: `+${config.public.phone}`,
          contactType: 'customer service',
          availableLanguage: ['Arabic', 'English'],
        },
        sameAs: [
          // 'https://www.instagram.com/diana',
          // 'https://www.facebook.com/diana',
        ]
      })
    }
  ]
})

// ✅ Global fallback only — pages will override title & description
useSeoMeta({
  ogImage: `${siteUrl}/og-image.jpg`,
  ogUrl: siteUrl,
  ogType: 'website',
  ogSiteName: 'ديانا',
  ogLocale: computed(() => locale.value === 'ar' ? 'ar_SA' : 'en_US'), // ✅ reactive
  twitterCard: 'summary_large_image',
  twitterImage: `${siteUrl}/og-image.jpg`,
  robots: 'index, follow',
})
</script>