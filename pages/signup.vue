<script setup lang="ts">
const { query } = useRoute()
const supabase = useSupabaseClient()
const user = useSupabaseUser()

definePageMeta({
  layout: "auth",
})

// watchEffect(async () => {
//   if (user.value) {
//     await navigateTo(query.redirectTo as string, {
//       replace: true,
//     })
//   }
// })

useSeoMeta({
  title: "Sign up",
})

const fields = [{
  name: "name",
  type: "text",
  label: "Name",
  placeholder: "Enter your name",
}, {
  name: "email",
  type: "text",
  label: "Email",
  placeholder: "Enter your email",
}]

function validate(state: any) {
  const errors = []
  if (!state.email)
    errors.push({ path: "email", message: "Email is required" })
  // if (!state.password)
  //   errors.push({ path: "password", message: "Password is required" })
  return errors
}

const providers = [{
  label: "Continue with GitHub",
  icon: "i-simple-icons-github",
  color: "gray" as const,
  click: () => {
    console.log("Redirect to GitHub")
    login()
  },
}]
async function signUp(state: any) {
  const { error } = await supabase.auth.signInWithOtp({

    email: state.email,
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: true,
      emailRedirectTo: 'http://localhost:3000/confirm',

    },
  })

  // console.log(data)

  if (error)
    console.error(error)

}

async function login() {
  const queryParams
    = query.redirectTo !== undefined
      ? `?redirectTo=${query.redirectTo}`
      : ""
  const redirectTo = `${window.location.origin}/confirm${queryParams}`
  const { error } = await supabase.auth.signUp({
    name: state.name,
    email: state.email,
    password: state.password,
  })

  if (error)
    console.error(error)
}

// function onSubmit (data: any) {
//   console.log('Submitted', data)
// }
</script>

<!-- eslint-disable vue/multiline-html-element-content-newline -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>

  <UCard class="max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
    <UAuthForm :fields="fields" :providers="providers" :validate="validate" align="top" title="Create an account"
      :ui="{ base: 'text-center', footer: 'text-center' }" :submit-button="{ label: 'Create account' }"
      @submit="signUp">
      <template #description>
        Already have an account? <NuxtLink to="/login" class="text-primary font-medium">Login</NuxtLink>.
      </template>
      <template #validation>
        <UAlert color="blue" icon="i-heroicons-information-circle-20-solid" title="Check your email for confirmation" />
      </template>

      <template #footer>
        By signing up, you agree to our <NuxtLink to="/" class="text-primary font-medium">Terms of Service</NuxtLink>.
      </template>
    </UAuthForm>

  </UCard>

</template>
