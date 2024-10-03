<template>
  <div>
    <h1>Covers</h1>
  </div>
</template>

<script lang="ts" setup>
import type { Cover } from "@/types/covers"

const { data: featured, status } = await useAsyncData<Cover[] | null>(
  'allCovers',
  () => $fetch('/api/covers?featured=true'),
)
</script>
