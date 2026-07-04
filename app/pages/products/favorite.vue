<template>
  <AppPageBanner
    :title="$t('favorites.title')"
    :subtitle="$t('favorites.subtitle')"
    :breadcrumbItems="items"
  />
  <UContainer class="lg:my-15 my-10" >
    <div
      v-if="data.products.length"
      class="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
    >
      <CardProduct
        v-for="product in data.products"
        :key="product.id"
        :product="product"
      />
    </div>
    <div
      v-else
      class="flex px-5 xs:px-0 items-center justify-center mx-auto h-100"
    >
      <UEmpty
        size="xl"
        icon="i-lucide-heart"
        class="border rounded-2xl bg-brand-forest/10 border-brand-forest"
        :title="$t('favorites.noFavorites')"
        :description="$t('favorites.noFavoritesDescription')"
        :actions="[
        {
          label:$t('links.shopNow'),
          icon: 'i-lucide-shopping-bag',
          class:' bg-brand-forest/90 text-primary rounded-2xl hover:bg-brand-forest',
          to: { name: 'products' },
        },
      ]"
      >

      </UEmpty>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type {BreadcrumbItem} from "@nuxt/ui";

const {t} = useI18n();

const { favorites } = useFavorites();

const { data } = await useApiFetch("/products/favorites", {
  method: "POST",
  body: {
    favorites,
  },
});


const items = computed<BreadcrumbItem[]>(() => [
  {
    label: t("links.homePage"),
    to: {name: "index"},
  },
  {
    label: t("links.ourProducts"),
    to: {name: "products"},
  },

  {
    label: t("favorites.title"),
    to: {name: "products-favorite"},
  },
]);

</script>
