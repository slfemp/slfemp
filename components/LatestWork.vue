<script lang="ts" setup>
import type { Cover } from "@/types/covers"

// const latestWork = useState<Cover[]>("latestWork", () => [])


const props = defineProps<{
  latestWork: Cover[] | null
}>()

// const body = {
//   filter: {
//     property: "Front Cover",
//     files: { is_not_empty: true },
//   },
//   sort: [{ property: "Date Released", direction: "descending" }],
//   pageSize: 12,
// }

// onMounted(async () => {
//   try {
//     const data = await useCovers(body)

//     if (data)
//       latestWork.value = data.results as Cover[]
//   }
//   catch (error) {
//     throw createError({
//       statusCode: 500,
//       statusMessage: "Unable to load covers",
//     })
//   }
// })

function getCoverClass(index: number) {
  const coverSizes: { [key: number]: string } = {
    1: "col-span-4 row-span-4",
    2: "col-span-2 row-span-2",
    3: "col-span-2 row-span-2",
    4: "col-span-4 row-span-4",
    5: "col-span-2 row-span-2",
    6: "col-span-2 row-span-2",
    7: "col-span-4 row-span-4",
    8: "col-span-2 row-span-2",
    9: "col-span-2 row-span-2",
    10: "col-span-4 row-span-4",
    11: "col-span-2 row-span-2",
    12: "col-span-2 row-span-2",
  }

  // Return the corresponding class for the index
  return coverSizes[index]
}
</script>

<template>
  <h2 class="text-3xl font-medium uppercase py-6">
    Latest work
  </h2>

  <ULandingGrid>
    <ULink :class="getCoverClass(index + 1)" :to="`/covers/${cover.id}`" v-for="(cover, index) in latestWork || []"
      :key="cover.id">
      <AlbumCover :cover="cover" />
    </ULink>
  </ULandingGrid>
</template>
