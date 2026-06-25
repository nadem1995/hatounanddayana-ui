<template>
  {{data}}
<!--  <div class="sticky top-0 z-50">-->
<!--    <AppBanner :banner="data.data.banner" />-->
<!--    <AppHeader />-->
<!--  </div>-->
<!--  <UMain>-->
<!--    <slot />-->
<!--    <svg-->
<!--      class="w-full h-20 opacity-15"-->
<!--      viewBox="0 0 1200 80"-->
<!--      preserveAspectRatio="none"-->
<!--      xmlns="http://www.w3.org/2000/svg"-->
<!--    >-->
<!--      <path-->
<!--        d="M0 40 C 200 0, 400 80, 600 40 S 1000 0, 1200 40"-->
<!--        stroke="#b8972e"-->
<!--        stroke-width="2"-->
<!--        fill="none"-->
<!--      />-->
<!--    </svg>-->
<!--  </UMain>-->
<!--  <AppFooter :socialLinks="data.data.social_links" />-->
</template>
<script setup>
const { data } = await useApiFetch("/layout-data");
</script>
