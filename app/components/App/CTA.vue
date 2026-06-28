<template>
  <NuxtLink
    to="/products"
    class="group relative overflow-hidden rounded-2xl cursor-pointer flex items-end min-h-55 shadow-lg hover:shadow-2xl transition duration-700"
  >
    <NuxtImg
      src="/images/placeholders/1200x200.webp"
      alt="hatoun and dayana"
      width="1200"
      height="200"
      format="webp"
      loading="lazy"
      class="absolute inset-0 w-full h-full object-cover transition duration-1000 group-hover:scale-104"
    />
    <div
      :aria-hidden="true"
      class="absolute bg-pattern-crosshatch inset-0 opacity-[0.1] mix-blend-overlay"
    />

    <!-- Main content -->
    <div
      class="relative w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 p-8"
    >
      <!-- Left copy -->
      <div class="space-y-3">
        <h3 class="text-3xl lg:text-6xl text-primary font-bold">
          {{ $t("collection.title") }}
        </h3>
        <p class="text-primary/90 xs:text-lg max-w-xs">
          {{ $t("collection.description") }}
        </p>
      </div>

      <UButton
        :to="{ name: 'products' }"
        icon="i-lucide-arrow-up-right"
        size="xl"
        class="rounded-full cursor-pointer"
        :label="$t('links.shopNow')"
        :aria-label="$t('links.shopNow')"
      />
    </div>

    <!-- Bottom progress bar animation on hover -->
    <div class="absolute bottom-0 inset-x-0 h-0.5 bg-white/10">
      <div
        class="h-full w-0 group-hover:w-full bg-[#8b6f47] transition-all duration-1500 ease-out"
      />
    </div>
  </NuxtLink>
</template>



