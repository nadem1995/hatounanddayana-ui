<template>
  <div class="text-brand-forest xs:space-y-20 spce-y-10">
    <!-- HERO -->
    <AppPageBanner
      :title="$t('ourStory.title')"
      :subtitle="$t('ourStory.subtitle')"
      :breadcrumbItems="items"
    />

    <!-- HERO SECTION (SVG ONLY) -->
    <section>
      <AppSectionTitle :title="$t('about.hero.title')" />
      <p class="xs:text-lg max-w-lg mx-auto text-center text-brand-forest/90">
        {{ t("about.hero.description") }}
      </p>
    </section>

    <section class="relative">

      <div
        class="max-w-6xl mx-auto pt-10  px-6 grid md:grid-cols-2 gap-16 items-center"
      >
        <!-- TEXT -->
        <div class="">

          <h2 class="text-4xl font-bold mb-2">
            {{ t("about.whoWeAre.title") }}
          </h2>

          <p class="xs:text-lg max-w-lg mx-auto text-brand-forest/90">
            {{ t("about.whoWeAre.description") }}
          </p>

          <div class="mt-10 space-y-4">
            <div
              v-for="feature in features"
              :key="feature.title"
              class="flex gap-4"
            >
              <div
                class="w-10 h-10 flex items-center justify-center rounded-lg"
              >
                <UIcon :name="feature.icon" class="" />
              </div>

              <div>
                <div class="font-semibold">
                  {{ feature.title }}
                </div>
                <div class="text-sm">
                  {{ feature.description }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SVG ART -->
        <div class="relative">
          <svg viewBox="0 0 200 200" class="w-full opacity-80">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#d4af37"
              stroke-width="2"
            />
            <circle
              cx="100"
              cy="100"
              r="50"
              fill="none"
              stroke="#b8972e"
              stroke-width="1"
            />
            <path
              d="M100 20 L180 100 L100 180 L20 100 Z"
              fill="none"
              stroke="#d4af37"
            />
          </svg>
        </div>
      </div>
    </section>

    <!-- PHILOSOPHY -->
    <section class="relative overflow-hidden py-15 bg-primary">
      <div
        :aria-hidden="true"
        class="absolute bg-pattern-crosshatch inset-0 opacity-[0.07]"
      />
      <div class="relative max-w-5xl mx-auto text-center px-6">
        <AppSectionTitle :title="$t('about.philosophy.title')" />
        <p class="xs:text-lg max-w-lg mx-auto text-brand-forest/90">
          {{ t("about.philosophy.description") }}
        </p>
        <div class="grid md:grid-cols-3 xs:mt-8 mt-5 gap-6">
          <CardFeature
            v-for="feature in features"
            :key="feature.id"
            :feature="feature"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-15 text-center">
      <AppSectionTitle :title="t('about.cta.title')" />
      <p class="xs:text-lg max-w-lg mt-5 mx-auto text-brand-forest/90">
        {{ t("about.cta.description") }}
      </p>
      <div class="flex gap-4 justify-center mt-10">
        <UButton
          :to="{ name: 'products' }"
          icon="i-lucide-shopping-bag"
          size="xl"
          class="rounded-full bg-brand-forest hover:bg-brand-forest cursor-pointer"
          :label="$t('links.shopNow')"
          :aria-label="$t('links.shopNow')"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from "@nuxt/ui";
const { t } = useI18n();


const features = computed(() => [
  {
    id: 1,
    icon: "i-lucide-heart",
    title: t("about.whoWeAre.features.passion.title"),
    description: t("about.whoWeAre.features.passion.description"),
  },
  {
    id: 2,
    icon: "i-lucide-star",
    title: t("about.whoWeAre.features.quality.title"),
    description: t("about.whoWeAre.features.quality.description"),
  },
  {
    id: 3,
    icon: "i-lucide-sparkles",
    title: t("about.whoWeAre.features.elegance.title"),
    description: t("about.whoWeAre.features.elegance.description"),
  },
]);


const items = computed<BreadcrumbItem[]>(() => [
  {
    label: t("links.homePage"),
    to: { name: "index" },
  },
  {
    label: t("links.ourStory"),
    to: { name: "our-story" },
  },
]);
</script>
