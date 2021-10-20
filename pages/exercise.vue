<template>
  <div class="exercise-wrapper container">
    <h1>Exercise</h1>

    <SearchInput @input="setHighlightText" />

    <PersonCard v-for="(user, i) in users" :key="i" class="mt-3" :user="user" :highlight="highlightText" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SearchInput from '@/components/SearchInput'
import PersonCard from '@/components/PersonCard'

export default {
  components: {
    SearchInput,
    PersonCard
  },
  data () {
    return {
      highlightText: 'a',
      usersData: null
    }
  },
  watch: {
    highlightText () {
      this.userData = { ...this.users }
    }
  },
  methods: {
    setHighlightText (inputText) {
      this.highlightText = inputText
    }
  },
  computed: {
    ...mapState(['users']),
    persons () {
      return this.userData || this.users
    }
  },
  mounted () {
    // getUsers
  }
}
</script>

<style type="text/css" lang="scss" scoped>
.person-card {

}

.exercise-wrapper {
}
</style>
