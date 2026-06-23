<template>
  <div class="space-x-2">
    <UButton
    label="dolores-at-ea"
    :to="{ name: 'products-slug', params: { slug: 'dolores-at-ea' } }"
  />

  <UButton
    label="illum-quod-beatae"
    :to="{ name: 'products-slug', params: { slug: 'illum-quod-beatae' } }"
  />

  
  <UButton
    label="sssssssssss22222222222"
    :to="{ name: 'products-slug', params: { slug: 'sssssssssss22222222222' } }"
  />
  </div>

  <pre class="text-xs">
    {{ product }}
  </pre>
</template>

<script setup>
// Get slug from route params
const route = useRoute();

const { data: product } = await useApiFetch(
  () => `products/${route.params.slug}`, 
  {
    watch: [() => route.params.slug]
  }
);

useHead({
  title: computed(() => product.value?.name || "Product"),
  meta: [
    {
      name: "description",
      content: computed(() => product.value?.description || ""),
    },
  ],
});
</script>
