<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center justify-between text-sm">
      <span class="text-muted">{{ priceRange[0].toLocaleString() }}</span>
      <span class="text-muted">{{ priceRange[1].toLocaleString() }}</span>
    </div>

    <USlider
      v-model="priceRange"
      :min="MIN_PRICE"
      :max="MAX_PRICE"
      :step="STEP"
      :min-steps-between-thumbs="STEP"
      tooltip
      class="w-full"
    />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { updateQuery } = useQueryParams()

const MIN_PRICE = 0
const MAX_PRICE = 1000000
const STEP = 500

const priceRange = ref<[number, number]>([
  Number(route.query.min_price) || MIN_PRICE,
  Number(route.query.max_price) || MAX_PRICE,
])

let timer: ReturnType<typeof setTimeout>

watch(priceRange, ([min, max]) => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    updateQuery({
      min_price: min > MIN_PRICE ? min : undefined,
      max_price: max < MAX_PRICE ? max : undefined,
    })
  }, 300)
})

watch(() => route.query.min_price, (val) => {
  if (!val) priceRange.value = [MIN_PRICE, priceRange.value[1]]
})

watch(() => route.query.max_price, (val) => {
  if (!val) priceRange.value = [priceRange.value[0], MAX_PRICE]
})

onUnmounted(() => clearTimeout(timer))
</script>