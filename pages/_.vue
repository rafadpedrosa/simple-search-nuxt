<template>
  <div>
    <h1 class="text-center">
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
export default {
  name: 'Index'
}
</script>

<style>
</style>
