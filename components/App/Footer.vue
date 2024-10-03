<script setup lang="ts">
const year = ref(new Date().getFullYear())
</script>

<template>
  <footer>
    <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center  lg:px-8">
      <div class="mt-8  md:mt-0">
        <p class="text-center text-xs leading-5">
          &copy; {{ year }} SLFEMP, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
