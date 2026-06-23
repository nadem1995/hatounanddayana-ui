<script setup lang="ts">
const faqs = [
  { label: 'ما هي مدة الشحن؟', icon: 'i-lucide-truck', content: 'يتم الشحن خلال 24 إلى 48 ساعة داخل المملكة العربية السعودية، وتصلكِ الطلبية في غضون 2-5 أيام عمل.' },
  { label: 'هل المنتجات أصلية 100%؟', icon: 'i-lucide-shield-check', content: 'نعم، جميع منتجاتنا أصلية 100% ومعتمدة من الموردين الرسميين، ونضمن لكِ الجودة العالية في كل منتج.' },
  { label: 'ما هي سياسة الإرجاع والاستبدال؟', icon: 'i-lucide-refresh-ccw', content: 'يمكنكِ إرجاع أو استبدال المنتج خلال 30 يوماً من تاريخ الاستلام، بشرط أن يكون المنتج بحالته الأصلية وبتغليفه الأصلي.' },
  { label: 'كيف يمكنني تتبع طلبي؟', icon: 'i-lucide-map-pin', content: 'بعد تأكيد طلبكِ ستصلكِ رسالة نصية تحتوي على رقم التتبع، يمكنكِ من خلاله متابعة حالة طلبكِ في أي وقت.' },
  { label: 'هل يوجد شحن مجاني؟', icon: 'i-lucide-package', content: 'نعم! نوفر شحناً مجانياً على جميع الطلبات التي تتجاوز 200 ريال سعودي داخل المملكة العربية السعودية.' },
  { label: 'ما هي طرق الدفع المتاحة؟', icon: 'i-lucide-credit-card', content: 'نقبل الدفع عبر بطاقات الائتمان (فيزا، ماستركارد)، مدى، آبل باي، وكذلك الدفع عند الاستلام.' },
]

const activeIndex = ref<number | null>(0)

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <UContainer>
    <div class="grid grid-cols-2 gap-6">

      <div class="flex flex-col gap-3">
        <button
          v-for="(faq, i) in faqs"
          :key="faq.label"
          class="flex items-center gap-4 p-4 rounded-2xl border text-right transition-all duration-300 w-full"
          :class="activeIndex === i
            ? 'bg-rose-500 border-rose-500 shadow-lg shadow-rose-200 dark:shadow-rose-900/30'
            : 'bg-(--ui-bg) border-(--ui-border) hover:border-rose-200'"
          @click="toggle(i)"
        >
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
            :class="activeIndex === i ? 'bg-white/20' : 'bg-rose-50 dark:bg-rose-900/30'"
          >
            <UIcon
              :name="faq.icon"
              class="w-5 h-5 transition-colors"
              :class="activeIndex === i ? 'text-white' : 'text-rose-500'"
            />
          </div>
          <span
            class="text-sm font-bold transition-colors flex-1"
            :class="activeIndex === i ? 'text-white' : 'text-(--ui-text)'"
          >
            {{ faq.label }}
          </span>
          <UIcon
            name="i-lucide-chevron-left"
            class="w-4 h-4 transition-all duration-300 shrink-0"
            :class="[activeIndex === i ? 'text-white -rotate-90' : 'text-(--ui-text-muted)']"
          />
        </button>
      </div>

      <div class="sticky top-24">
        <Transition
          enter-active-class="transition-all duration-300"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-4"
          mode="out-in"
        >
          <div
            v-if="activeIndex !== null"
            :key="activeIndex"
            class="bg-(--ui-bg) rounded-3xl border border-(--ui-border) p-8 h-full"
          >
            <div class="w-14 h-14 bg-rose-50 dark:bg-rose-900/30 rounded-2xl flex items-center justify-center mb-6">
              <UIcon :name="faqs[activeIndex].icon" class="w-7 h-7 text-rose-500" />
            </div>
            <h3 class="text-xl font-black text-(--ui-text) mb-4">
              {{ faqs[activeIndex].label }}
            </h3>
            <p class="text-(--ui-text-muted) leading-relaxed text-sm">
              {{ faqs[activeIndex].content }}
            </p>

            <div class="mt-8 pt-6 border-t border-(--ui-border) flex items-center gap-3">
              <UAvatar src="https://picsum.photos/80/80?random=90" size="sm" />
              <div>
                <p class="text-xs font-bold text-(--ui-text)">فريق خدمة العملاء</p>
                <p class="text-xs text-(--ui-text-muted)">متاح 24/7 لمساعدتكِ 🌸</p>
              </div>
            </div>
          </div>

          <div
            v-else
            class="bg-rose-50 dark:bg-rose-900/20 rounded-3xl border border-rose-100 dark:border-rose-900/40 p-8 flex flex-col items-center justify-center text-center gap-4 h-full min-h-64"
          >
            <div class="w-14 h-14 bg-rose-100 dark:bg-rose-900/40 rounded-2xl flex items-center justify-center">
              <UIcon name="i-lucide-help-circle" class="w-7 h-7 text-rose-400" />
            </div>
            <p class="font-bold text-(--ui-text)">اختاري سؤالاً لعرض الإجابة</p>
            <p class="text-sm text-(--ui-text-muted)">لديكِ سؤال آخر؟</p>
            <div class="flex gap-2">
              <UButton color="rose" variant="solid" size="sm" icon="i-lucide-message-circle" class="rounded-xl">
                تواصلي معنا
              </UButton>
              <UButton color="rose" variant="outline" size="sm" icon="i-lucide-phone" class="rounded-xl">
                920000000
              </UButton>
            </div>
          </div>
        </Transition>
      </div>

    </div>
  </UContainer>
</template>