<template>

  <div class="min-h-screen flex flex-col w-full gap-8 bg-gray-950 text-white py-16">
    <AlbumHero :album="cover" />
    <AlbumStory :album="cover" />
    <Comments :album="cover" />
  </div>


</template>

<script setup lang="ts">
import type { Cover } from "@/types/covers"

const route = useRoute()

const { data: cover } = await useAsyncData<Cover>(
  'cover',
  () => $fetch('/api/cover', {
    params: {
      id: route.params.id
    }
  })
)

</script>