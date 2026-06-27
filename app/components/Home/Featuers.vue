<template>
  <section>
      <div
        class="xs:mb-15 mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between xs:gap-4 gap-2"
      >
        <h2 class="text-3xl lg:text-6xl font-bold text-brand-forest">
          {{ $t("features.title") }}
        </h2>
        <p class="text-brand-forest/90 xs:text-lg max-w-xs">
          {{ $t("features.subTitle1") }} <br />
          {{ $t("features.subTitle2") }}
          ?
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <CardFeature
          v-for="feature in features"
          :key="feature.id"
          :feature="feature"
        />
      </div>
  </section>
</template>

<script setup lang="ts">
import type { Feature } from "app/types";

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
]);
</script>
