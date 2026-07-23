
<template>
  <section aria-labelledby="instagram-heading">
    <AppSectionTitle :title="$t('cta.followUs')" />
    <div class="relative overflow-hidden rounded-2xl bg-brand-forest/10 shadow-lg">
      <div class="relative grid lg:grid-cols-5">
        <!-- ── Content ── -->
        <div
          class="lg:col-span-2 flex flex-col justify-center gap-5 sm:gap-6 p-6 sm:p-10 lg:p-14"
        >
          <!-- Title -->
          <h2
            id="instagram-heading"
            class="text-3xl lg:text-6xl font-bold  text-brand-forest"
          >
            {{ $t("cta.title") }}
          </h2>

          <!-- Description -->
          <p
            class="text-brand-forest/90 xs:text-lg max-w-xs"
          >
            {{ $t("cta.description") }}
          </p>

          <!-- CTA Button -->
          <UButton
            to="https://www.instagram.com/hatoundayana"
            target="_blank"
            rel="noopener noreferrer"
            icon="i-mdi-instagram"
            trailing-icon="i-lucide-arrow-up-right"
            size="xl"
            block
            :label="$t('links.followUs')"
            :aria-label="$t('links.followUs', { platform: 'Instagram' })"
            class="rounded-full font-black p-3 w-max text-white hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300"
            style="
              background: linear-gradient(135deg, #f58529, #dd2a7b, #8134af);
            "
          />
        </div>

        <!-- ── Gallery ── -->
        <div class="lg:col-span-3 p-3 sm:p-4">
          <div class="grid grid-cols-3 gap-2 sm:gap-3 h-full">
            <!-- Tall left -->
            <NuxtImg
              src="images/placeholders/200x400.webp"
              alt="Hatoun and dayana"
              width="200"
              height="420"
              format="webp"
              loading="lazy"
              class="col-span-1 row-span-2 h-auto w-full rounded-xl sm:rounded-2xl object-cover brightness-90 hover:brightness-100 transition-all duration-500 hover:scale-[1.02]"
            />

            <!-- Top wide -->
            <NuxtImg
              src="images/placeholders/400x200.webp"
              alt="Hatoun and dayana"
              width="400"
              height="200"
              format="webp"
              loading="lazy"
              class="col-span-2 h-auto  w-full rounded-xl sm:rounded-2xl object-cover brightness-90 hover:brightness-100 transition-all duration-500 hover:scale-[1.02]"
            />

            <!-- Small 1 -->
            <NuxtImg
              src="images/placeholders/200.webp"
              alt="Hatoun and dayana"
              width="200"
              height="200"
              format="webp"
              loading="lazy"
              class="h-auto w-full rounded-xl sm:rounded-2xl object-cover brightness-90 hover:brightness-100 transition-all duration-500 hover:scale-[1.02]"
            />

            <!-- Small 2 -->
            <NuxtImg
              src="images/placeholders/200.webp"
              alt="Hatoun and dayana"
              width="200"
              height="200"
              format="webp"
              loading="lazy"
              class="h-auto w-full rounded-xl sm:rounded-2xl object-cover brightness-90 hover:brightness-100 transition-all duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
</script>
