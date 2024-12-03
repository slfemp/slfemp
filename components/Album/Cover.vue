<script lang="ts" setup>
import type { Cover } from "@/types/covers"

const props = defineProps({
  cover: {
    type: Object as () => Cover,
    required: true,
  },
})
</script>

<template>
  <div class="aspect-square w-full relative group">
    <NuxtImg class="absolute h-full w-full inset-0 object-contain aspect-square group-hover:brightness-50 transition"
      :src="cover.front_cover" :alt="cover.album_name" />
    <div class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 from-30% ">
      <div class="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300">
        <div class="overflow-hidden opacity-0 group-hover:opacity-100 tranistion text-sm text-white">
          <h2 class="font-bold">
            {{ cover.album_name }}
          </h2>
          <p v-for="artist in cover.artists" :key="artist.id">
            {{ artist.artist_name }}
          </p>
          <UButton color="white" variant="solid" size="lg" class="mt-3 text-xs w-full flex justify-center items-center"
            :to="`/covers/${cover.id}`">
            Open Album
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
