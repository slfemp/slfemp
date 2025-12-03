<script lang="ts" setup>
import type { Cover } from "../types/covers"

const props = defineProps<{
  covers: Cover[] | null
}>()


// watch(
//   () => props.covers,
//   (newVal) => {
//     console.log('Client hydration featured:', newVal)
//   },
//   { immediate: true }
// )
</script>

<template>
  <div class="w-full">
    <div class="flex items-center justify-between">
      <h2 class="text-3xl font-medium uppercase">
        Cover archive
      </h2>
      <UButton to="/covers" color="white" variant="solid" size="xl">
        SEE FULL ARCHIVE
      </UButton>
    </div>


    <ul class="py-6 grid grid-cols-2 sm:grid-cols-5 gap-4 w-full">
      <li v-for="cover in covers || []" :key="cover.id">
        <ULink :to="`/covers/${cover.id}`">
          <AlbumCover :cover="cover" />
        </ULink>
      </li>
    </ul>



  </div>
</template>
