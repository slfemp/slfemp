<script setup lang="ts">
import type { NuxtError } from "#app"

defineProps<{
  error: NuxtError
}>()

useHead({
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [
    { rel: "icon", href: "/favicon.svg" },
  ],
  htmlAttrs: {
    lang: "en",
  },
})
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <UPageError :error="error" />
  </NuxtLayout>
</template>
