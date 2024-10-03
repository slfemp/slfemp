<script setup lang="ts">
interface Props {
  title?: string
  description?: string
}

withDefaults(defineProps<Props>(), {
  title: "title",
})
</script>

<template>
  <div class="h-full w-full flex items-center justify-between bg-black rounded-2xl text-white relative">
    <div class="flex items-start justify-start h-full w-full ">
      <div class="flex items-start justify-between size-full p-20 ">
        <div class="flex flex-col gap-y-4">
          <h1 class="text-7xl mb-0  uppercase font-black font-sans text-left">
            {{ title }}
          </h1>
          <p v-if="description" class="text-4xl uppercase font-[Oswald] pt-0">
            {{ description }}
          </p>
        </div>
        <div class="contents self-end mt-16  ">
          <AppLogo class="h-[312px] w-[460px] object-contain " />
        </div>

      </div>

    </div>
  </div>
</template>
