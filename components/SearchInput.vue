<template>
  <b-input-group prepend="" class="mt-3">
    <template #prepend>
      <b-input-group-text>
        <b-icon icon="search" />
      </b-input-group-text>
    </template>
    <b-form-input v-model="value" placeholder="..." type="text" @input="$emit('input', value)" />
    <b-input-group-append>
      <b-button variant="info" @click="search">
        Search
      </b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
  name: 'SearchInput',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    search () {
      console.warn(':::TODO::: Not Implemented yet')
    }
  }
}
</script>

<style lang="scss" scoped>

input {
  width: 100%;
}

</style>
