<template>
  <div class="container">
    <NuxtLink class="btn btn-warning mt-3" to="/">
      Return
    </NuxtLink>
    <hr>
    <h1>Frontend technical assessment</h1>

    <p>
      You are suggested to implement a simple profile search application using Nuxt and Vue frameworks. Expected
      technologies used are: ES6, CSS (with any pre/post processors), html, SFC (Single File Component).
    </p>

    <h3>Layout design</h3>

    <p>
      Can be found <a
        href="https://www.figma.com/file/PyncPYa1rpOxRooTdfvgxHRN/Bravado-Quest](https://www.figma.com/file/PyncPYa1rpOxRooTdfvgxHRN/Bravado-Quest"
      >
        here </a>
    </p>

    <div class="justify-content-center d-flex">
      <img width="80%" src="https://camo.githubusercontent.com/c8c0b8694ebc33c77fa55814253962c4a289b027f420be492338094e247cbf36/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6272617661646f2d696d616765732d70726f64756374696f6e2f4465736b746f702e706e67" alt="">
    </div>
    <hr>
    <h3>Expected steps</h3>

    You are suggested to implement layout according to design above and a single page application based on Vue and its
    modules. Application should be running on a root url (`/`). The sample data to use inside application should be
    taken <a
      href="https://gist.github.com/allaud/093aa499998b7843bb10b44ea6ea02dc](https://www.notion.so/093aa499998b7843bb10b44ea6ea02dc"
    >here</a>

    Please note, the default app state contains all profile cards. When user starts typing, the results should be
    filtered in realtime, highlighting the matching string.

    <h3 class="mt-4">
      The task highlights
    </h3>

    <ul>
      <li>General SPA application performance, including searching, scrolling and highlighting speed.</li>
      <li>Quality of Vue single file components (SFC)</li>
      <li>HTML(JSX) and CSS quality</li>
      <li>JS code quality</li>
      <li>Search should be stateful (using browser url e.g.`/search/Boris`)</li>
      <li>Application should be published online for testing purposes</li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style>

</style>
