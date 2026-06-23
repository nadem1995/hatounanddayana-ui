<template>
  <div
    v-if="data.products.length"
    class="grid pt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
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
      icon="i-lucide-heart"
      title="No favorites yet"
      description="You haven't added any products to your favorites yet."
      :actions="[
        {
          label: 'Browse Products',
          icon: 'i-lucide-shopping-bag',
          to: { name: 'products' },
        },
      ]"
    >
  
  </UEmpty>
  </div>
</template>

<script setup lang="ts">
const { favorites } = useFavorites();

const { data } = await useApiFetch("/products/favorites", {
  method: "POST",
  body: {
    favorites,
  },
});
</script>
