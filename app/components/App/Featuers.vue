<template>
  <section class="relative overflow-hidden py-15 bg-primary">
    <!-- Background grid pattern -->
    <div
      :aria-hidden="true"
      class="absolute bg-pattern-crosshatch inset-0 opacity-[0.07]"
    />

    <!-- Top gradient fade -->
    <div
      class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-stone-400/40 to-transparent"
    />
    <!-- Bottom gradient fade -->
    <div
      class="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-stone-400/40 to-transparent"
    />

    <UContainer class="relative">
      <!-- Header -->
      <div
        class="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
      >
        <h2
          class="text-4xl lg:text-6xl font-black leading-none text-brand-forest"
        >
          {{ $t("features.title") }}
        </h2>
        <p class="text-[#f1d8b4] text-lg max-w-xs leading-relaxed">
          {{ $t("features.subTitle1") }} <br />
          {{ $t("features.subTitle2") }}
          ?
        </p>
      </div>

      <!-- Feature Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 sm:gap-5 gap-3">
        <CardFeature
          v-for="feature in features"
          :key="feature.id"
          :feature="feature"
        />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import type { Feature } from "~/types";

const { t } = useI18n();

const features = computed<Feature[]>(() => [
  {
    id: 1,
    icon: "i-material-symbols-light-headset-mic-outline",
    title: t("features.customerService.title"),
    description: t("features.customerService.description"),
  },
  {
    id: 2,
    icon: "i-material-symbols-light-payments-outline",
    title: t("features.SecurityPayment.title"),
    description: t("features.SecurityPayment.description"),
  },
  {
    id: 3,
    icon: "i-material-symbols-light-workspace-premium-outline",
    title: t("features.highQuality.title"),
    description: t("features.highQuality.description"),
  },
  {
    id: 4,
    icon: "i-material-symbols-light-local-shipping-outline",
    title: t("features.fastShipping.title"),
    description: t("features.fastShipping.description"),
  },
]);
</script>
