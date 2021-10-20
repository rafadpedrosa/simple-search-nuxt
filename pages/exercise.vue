<template>
  <div class="exercise-wrapper container">
    <h1>Exercise</h1>

    <SearchInput @input="setHighlightText" />

    <p class="d-flex justify-content-center">
      <b-pagination
        v-model="currentPage"
        class="mt-4"
        :total-rows="usersSize"
        :per-page="perPage"
        aria-controls="my-table"
        @change="updatePagination"
      />
    </p>

    <PersonCard v-for="(user, i) in usersPaginated" :key="i" class="mt-3" :user="user" :highlight="highlightText" />

    <p class="d-flex justify-content-center">
      <b-pagination
        v-model="currentPage"
        :total-rows="usersSize"
        class="mt-4"
        :per-page="perPage"
        aria-controls="my-table"
        @change="updatePagination"
      />
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import SearchInput from '@/components/SearchInput'
import PersonCard from '@/components/PersonCard'
import { UPDATE_PAGINATION } from '@/consts/actions'

export default {
  components: {
    SearchInput,
    PersonCard
  },
  data () {
    return {
      currentPage: 1,
      highlightText: '',
      usersData: null
    }
  },
  watch: {
    highlightText () {
      this.userData = { ...this.users }
    }
  },
  methods: {
    updatePagination (currentPage) {
      this.$store.dispatch(UPDATE_PAGINATION, currentPage)
    },
    setHighlightText (inputText) {
      this.highlightText = inputText
    }
  },
  computed: {
    ...mapState(['usersPaginated']),
    ...mapGetters(['usersSize', 'perPage']),
    persons () {
      return this.userData || this.users
    }
  }
}
</script>

<style type="text/css" lang="scss" scoped>
.person-card {

}

.exercise-wrapper {
}
</style>
