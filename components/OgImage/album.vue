<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  description?: string
  image?: string
}>(), {
  title: "title",
  description: "description",

})
</script>

<template>
  <div class="h-full w-full flex items-center justify-between bg-black rounded-2xl text-white relative">
    <div class="flex items-start justify-start h-full ">
      <div class="flex items-start justify-between w-full h-full p-20 ">
        <div class="flex flex-col gap-y-4   max-w-xl">
          <h1 class="text-[60px] mb-0 pb-0 uppercase font-black font-sans text-left">
            {{ title }}
          </h1>
          <p v-if="description" class="text-3xl font-[Oswald]">
            {{ description }}
          </p>
        </div>
        <div class="flex w-full justify-end max-w-md ">
          <img v-if="image" :src="image" class="size-[100px] object-contain" width="100" height="100">
          <AppLogo v-else class="h-[156px] w-[230px] object-contain opacity-50 " />
        </div>
      </div>
    </div>
  </div>
</template>
