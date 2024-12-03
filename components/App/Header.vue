<script setup lang="ts">
const client = useSupabaseClient()
const user = useSupabaseUser()

// console.log(user.value)

const items = computed(() => [
  [{
    label: "SIGN OUT",
    icon: "i-heroicons-arrow-left-on-rectangle",
    click: async () => {
      console.log("Sign out")
      await client.auth.signOut()
      navigateTo("/")
    },
  }],
])

interface Link {
  label: string
  to?: string
  children?: Link[]
  description?: string
}

const links: Link[] = [
  { label: "ABOUT", to: "/about" },
  {
    label: "MEDIA",
    children: [
      { label: "COVERS", to: "/covers", description: "Browse the extensive collection of album covers" },
      { label: "INTERVIEWS", to: "/interviews", description: "Latest interviews with Mike Frost" },
      { label: "PHOTOS", to: "/photos", description: "Photos from Mike Frost's career over the years" },
      { label: "POSTERS", to: "/posters", description: "Browse the curated collection of album posters" },
    ],
  },
  { label: "BOOK - A HOUSTON STORY", to: "/book" },
  { label: "CONTACT", to: "/contact" },
]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <AppLogo class="w-36 -mb-2 dark:fill-white fill-black" />
    </template>

    <template #right>
      <UDropdown v-if="user" mode="hover" :items="items"
        :ui="{ width: 'w-full', item: { disabled: 'cursor-text select-text' } }"
        :popper="{ strategy: 'absolute', placement: 'top' }" class="w-auto">
        <template #default="{ open }">
          <UButton color="gray" variant="ghost" class="w-full" :label="user.email"
            :class="[open && 'bg-gray-50 dark:bg-gray-800']">
            <template #leading>
              <UAvatar :alt="user.email" :src="user.user_metadata.avatar_url" size="2xs" />
            </template>

            <template #trailing>
              <UIcon name="i-heroicons-ellipsis-vertical" class="w-5 h-5 ml-auto" />
            </template>
          </UButton>
        </template>

        <template #account>
          <div class="text-left">
            <p>
              Signed in as
            </p>
            <p class="truncate font-medium text-gray-900 dark:text-white">
              ben@nuxtlabs.com
            </p>
          </div>
        </template>
      </UDropdown>

      <div v-else class="flex space-x-2 uppercase">
        <UButton label="Sign in" color="gray" to="/login" />
        <UButton label="Sign up" icon="i-heroicons-arrow-right-20-solid" trailing color="black" to="/signup"
          class="hidden lg:flex" />
      </div>
    </template>

    <template #panel>
      <UNavigationTree :links="links" />
    </template>
  </UHeader>
</template>
