<template>
  <div class="min-h-screen bg-primary">
    <AppPageBanner
      :title="$t('products.title')"
      :subtitle="$t('products.subtitle')"
      :breadcrumbItems="items"
    />

    <UContainer class="py-12">
      <!-- Mobile filter trigger -->
      <div class="mb-5 flex justify-start lg:hidden">
        <UButton
          icon="i-lucide-filter"
          class="rounded-2xl bg-brand-forest"
          variant="soft"
          color="neutral"
          :label="$t('filter.title')"
          @click="isFilterOpen = true"
        />
      </div>
      <div class="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <!-- Desktop sidebar filter -->
        <AppFilter
          v-if="data?.categories?.length"
          :categories="data.categories"
          class="hidden lg:block"
        />

        <!-- Mobile filter slideover -->
        <USlideover
          class="bg-primary"
          v-model:open="isFilterOpen"
          side="left"
          :ui="{
              title: 'text-brand-forest z-10 relative',
            }"
          :title="$t('filter.title')"
        >
          <template #body>
            <AppFilter
              v-if="data?.categories?.length"
              :categories="data.categories"
            />
          </template>
        </USlideover>

        <!-- PRODUCTS -->
        <div class="col-span-1 lg:col-span-3">
          <!-- Empty -->
          <div
            v-if="!data?.products?.length"
            class="rounded-2xl border border-brand-forest/20 py-24 text-center"
          >
            <UIcon
              name="i-lucide-package-search"
              class="mx-auto size-20 text-brand-forest"
            />

            <h3 class="mt-6 text-2xl font-bold text-brand-forest">
              {{ $t("products.empty.title") }}
            </h3>

            <p class="mt-2 text-brand-forest/70">
              {{ $t("products.empty.description") }}
            </p>

            <UButton
              class="mt-6 bg-brand-forest text-primary hover:bg-brand-forest/90 transition-colors duration-200"
              :to="{ name: 'products' }"
              :label="$t('filter.reset')"
            />
          </div>

          <!-- Products -->
          <template v-else>
            <div class="grid gap-2 grid-cols-2 md:gap-5 md:grid-cols-3">
              <CardProduct
                v-for="(product, i) in data.products"
                :key="product.id"
                :product="product"
                :priority="i === 0"
              />
            </div>

            <!-- Pagination -->
            <div class="mt-14 flex justify-center">
              <UPagination
                v-model:page="data.meta.current_page"
                :total="data.meta.total"
                :items-per-page="data.meta.per_page"
                :to="
                  (p) => ({
                    name: 'products',
                    query: { ...route.query, page: p },
                  })
                "
                :ui="{
                  list: 'flex items-center gap-1.5',
                  item: 'rounded-xl border border-brand-forest/15 bg-brand-forest/5 text-brand-forest font-semibold hover:bg-brand-forest/10 hover:border-brand-forest/30 transition-all duration-300',
                  label: 'min-w-5 text-center text-sm font-bold',
                  ellipsis: 'text-brand-forest/30 font-black',
                  prev: 'rounded-xl border border-brand-forest/15 bg-brand-forest/5 text-brand-forest hover:bg-brand-forest/10 hover:border-brand-forest/30 transition-all duration-200',
                  next: 'rounded-xl border border-brand-forest/15 bg-brand-forest/5 text-brand-forest hover:bg-brand-forest/10 hover:border-brand-forest/30 transition-all duration-200',
                  first:
                    'rounded-xl border border-brand-forest/15 bg-brand-forest/5 text-brand-forest hover:bg-brand-forest/10 hover:border-brand-forest/30 transition-all duration-200',
                  last: 'rounded-xl border border-brand-forest/15 bg-brand-forest/5 text-brand-forest hover:bg-brand-forest/10 hover:border-brand-forest/30 transition-all duration-200',
                }"
              />
            </div>
          </template>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type {BreadcrumbItem} from "@nuxt/ui";

const route = useRoute();
const {t} = useI18n();

const isFilterOpen = ref(false);

useSeoMeta({
  title: t("seo.products.title"),
  description: t("seo.products.description"),
  ogTitle: t("seo.products.title"),
  ogDescription: t("seo.products.description"),
});

const {data} = await useApiFetch("products", {
  query: computed(() => route.query),
});

watch(
  () => route.query.page,
  () => window.scrollTo({top: 0, behavior: "smooth"}),
);

watch(
  () => route.query,
  () => {
    isFilterOpen.value = false;
  },
);

const items = computed<BreadcrumbItem[]>(() => [
  {
    label: t("links.homePage"),
    to: {name: "index"},
  },
  {
    label: t("links.ourProducts"),
    to: {name: "products"},
  },
]);
</script>
