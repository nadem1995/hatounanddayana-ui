<template>
  <UEditor v-slot="{ editor }" v-model="description" placeholder="Write your product description..." class="w-full min-h-64">
    <UEditorToolbar :editor="editor" :items="items" />
  </UEditor>
</template>

<script setup lang="ts">
const description = ref('')

const items = [
  { kind: 'heading', level: 1, icon: 'i-lucide-heading-1' },
  { kind: 'heading', level: 2, icon: 'i-lucide-heading-2' },
  { kind: 'paragraph', icon: 'i-lucide-pilcrow' },
  { kind: 'image', icon: 'i-lucide-image' },
]
</script>
