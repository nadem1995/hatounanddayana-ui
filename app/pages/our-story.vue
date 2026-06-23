<template>
  <div class="text-brand-forest">
    <!-- HERO -->
    <AppPageBanner
      :title="$t('ourStory.title')"
      :subtitle="$t('ourStory.subtitle')"
      :breadcrumbItems="items"
    />

    <!-- HERO SECTION (SVG ONLY) -->
    <section class="relative overflow-hidden py-15">
      <!-- gold glow -->
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-full blur-[120px]"
      />

      <div class="relative max-w-4xl mx-auto text-center px-6">
        <AppSectionTitle :title="$t('about.hero.title')" />

        <p class="text-lg max-w-xl mx-auto">
          {{ t("about.hero.description") }}
        </p>
      </div>
    </section>

    <!-- WHO WE ARE -->
    <section class="relative py-15">
      <!-- SVG wave divider -->
      <svg
        class="absolute top-0 left-0 w-full h-20 opacity-15"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 40 C 200 0, 400 80, 600 40 S 1000 0, 1200 40"
          stroke="#b8972e"
          stroke-width="2"
          fill="none"
        />
      </svg>

      <div
        class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
      >
        <!-- TEXT -->
        <div>
          <span class="text-xs uppercase tracking-[0.3em]">
            {{ t("about.whoWeAre.headline") }}
          </span>

          <h2 class="text-4xl font-bold mt-4">
            {{ t("about.whoWeAre.title") }}
          </h2>

          <p class="mt-6 leading-relaxed">
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
        <h2 class="text-4xl font-bold">
          {{ t("about.philosophy.title") }}
        </h2>

        <p class="mt-4 mb-16">
          {{ t("about.philosophy.description") }}
        </p>

        <div class="grid md:grid-cols-3 gap-6">
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
      <h2 class="text-4xl font-bold">
        {{ t("about.cta.title") }}
      </h2>

      <p class="mt-4 max-w-xl mx-auto">
        {{ t("about.cta.description") }}
      </p>

      <div class="flex gap-4 justify-center mt-10">
        <UButton :label="$t('about.cta.shopNow')" size="lg" />
        <UButton
          variant="outline"
          :label="$t('about.cta.contactUs')"
          size="lg"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from "@nuxt/ui";
const { t } = useI18n();

const stats = [
  { value: "500+", label: "Products" },
  { value: "2K+", label: "Happy Customers" },
  { value: "2", label: "Sisters" },
  { value: "100%", label: "With Love" },
];

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

const philosophyCards = computed(() => [
  {
    icon: "i-lucide-hand-heart",
    title: t("about.whoWeAre.features.passion.title"),
    description: t("about.whoWeAre.features.passion.description"),
  },
  {
    icon: "i-lucide-gem",
    title: t("about.whoWeAre.features.quality.title"),
    description: t("about.whoWeAre.features.quality.description"),
  },
  {
    icon: "i-lucide-wand",
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
