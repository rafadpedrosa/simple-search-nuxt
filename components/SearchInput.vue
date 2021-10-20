<template>
  <b-input-group class="mt-3">
    <template #prepend>
      <b-input-group-text>
        <b-icon icon="search" />
      </b-input-group-text>
    </template>
    <b-form-input
      ref="searchInput"
      v-model="value"
      placeholder="search by name"
      type="text"
      @keypress.enter="search"
      @input="$emit('input', value)"
    />
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
  props: ['inputValue', 'immediateFocus'],
  data () {
    return {
      value: ''
    }
  },
  watch: {
    inputValue: {
      immediate: true,
      handler (inputValue) {
        this.value = inputValue
        this.$emit('input', this.value)
      }
    }
  },
  mounted () {
    if (this.immediateFocus) {
      this.inputFocusLastWord()
    }
  },
  methods: {
    inputFocusLastWord () {
      const value = this.$refs.searchInput.$el.value

      this.$refs.searchInput.$el.value = ''
      this.$refs.searchInput.$el.focus()
      this.$refs.searchInput.$el.value = value
    },
    search () {
      if (this.value.trim()) {
        this.$emit('search', this.value)
      } else {
        this.$router.push('/search')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

input {
  width: 100%;
}

</style>
