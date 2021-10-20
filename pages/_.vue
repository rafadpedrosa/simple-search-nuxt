<template>
  <div>
    <h1 class="text-center mt-5">
      <NuxtLogo />
      Welcome to My Nuxt Search!
    </h1>
    <hr>
    <div class="page">
      <NuxtLink class="btn btn-warning mr-3" to="/search">
        Implementation
      </NuxtLink>
      <NuxtLink class="btn btn-warning" to="/technicalAssessmentDescription">
        Exercise Description
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import NuxtLogo from '@/components/NuxtLogo'
export default {
  name: 'Index',
  components: {
    NuxtLogo
  }
}
</script>

<style>
</style>
