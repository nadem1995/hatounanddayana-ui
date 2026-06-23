<template>
  <footer class="bg-primary p-2">
    <div>
      <UContainer class="py-14">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <!-- Column 1: Logo & About -->
          <div class="flex flex-col gap-4">
            <NuxtLink :to="{ name: 'index' }">
              <NuxtImg
                width="100"
                height="100"
                src="/images/logo/80x80.svg"
                alt="logo"
                loading="lazy"
              />
            </NuxtLink>
            <p class="text-md text-brand-forest">
              {{ $t("footer.about.line1") }}
            </p>
            <p class="text-md text-brand-forest">
              {{ $t("footer.about.line2") }}
            </p>
          </div>
          <AppFooterColumn :title="$t('usefulLinks')" :links="usefulLinks" />
          <AppFooterColumn :title="$t('informations')" :links="infoLinks" />

          <div
            class="backdrop-blur-md bg-brand-forest/5 border border-brand-forest/15 rounded-2xl p-4"
          >
            <!-- Header -->
            <div class="relative flex items-center gap-3">
              <div
                class="flex size-12 items-center justify-center rounded-2xl bg-primary/50"
              >
                <UIcon name="i-mdi-whatsapp" class="size-8 text-green-600" />
              </div>

              <div>
                <p class="text-brand-forest font-bold">
                  {{ $t("contact_us") }}
                </p>
                <p class="text-brand-forest">24/7</p>
              </div>
            </div>

            <!-- Description -->
            <p class="relative mt-2 text-sm text-brand-forest">
              {{ $t("footer.contactDescription") }}
            </p>

            <USeparator
              class="my-3"
              :ui="{ border: 'border-brand-forest/15' }"
            />


            <UButton
              :to="`https://wa.me/${phone}`"
              target="_blank"
              block
              icon="i-mdi-whatsapp"
              trailing-icon="i-lucide-arrow-up-right"
              rel="noopener noreferrer"
              :label="$t('contact_us')"
              variant="outline"
              size="xl"
              class="w-full   rounded-2xl mt-4 bg-primary text-brand-forest"
            />
          </div>
        </div>
      </UContainer>
    </div>

    <!-- Bottom bar -->
    <div class="py-4">
      <UContainer>
        <div
          class="flex flex-col sm:flex-row items-center justify-between gap-2"
        >
          <p class="text-xs text-[#f1e7db]/60">
            © {{ new Date().getFullYear() }} — {{ $t("footer.rights") }}
          </p>
          <p class="flex items-center gap-1.5 text-xs text-[#f1e7db]/60">
            {{ $t("footer.madeWith") }}
            <UIcon
              name="i-lucide-heart"
              class="size-3.5 text-rose-400 animate-heartbeat"
              aria-hidden="true"
            />
            {{ $t("footer.by") }}
            <a
              href="https://gopsa.design"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#b8972e] hover:text-[#d4af37] font-semibold transition-colors duration-200"
            >
              Gopsa Design
            </a>
          </p>
        </div>
      </UContainer>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const { t } = useI18n();
const route = useRoute();

const appConfig = useRuntimeConfig().public;
const phone: string = appConfig.phone;

const usefulLinks = computed<NavigationMenuItem[]>(() => [
  {
    label: t("links.homePage"),
    to: { name: "index" },
    active: route.name?.toString().startsWith("index"),
  },
  {
    label: t("links.ourProducts"),
    to: { name: "products" },
    active: route.name?.toString().startsWith("products"),
  },
  {
    label: t("links.ourStory"),
    to: { name: "our-story" },
    active: route.name?.toString().startsWith("our-story"),
  },
]);

const infoLinks = computed<NavigationMenuItem[]>(() => [
  {
    label: t("links.faq"),
    to: { name: "faq" },
    active: route.name?.toString().startsWith("faq"),
  },
  {
    label: t("links.privacyPolicy"),
    to: { name: "privacy-policy" },
    active: route.name?.toString().startsWith("privacy-policy"),
  },
  {
    label: t("links.termsOfService"),
    to: { name: "terms" },
    active: route.name?.toString().startsWith("terms"),
  },
]);
</script>
