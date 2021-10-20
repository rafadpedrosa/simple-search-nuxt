<template>
  <div class="exercise-wrapper container">
    <NuxtLink class="btn btn-warning mt-3" to="/">
      Return
    </NuxtLink>
    <hr>
    <SearchInput @input="setHighlightText" />

    <div v-if="!$fetchState.pending && usersPaginated.length">
      <div class="d-flex justify-content-center">
        <b-pagination
          v-model="paginationPage"
          class="mt-4"
          :total-rows="usersSize"
          :per-page="perPage"
          aria-controls="my-table"
          @change="updatePagination"
        />
      </div>

      <PersonCard v-for="(user, i) in usersPaginated" :key="i" class="mt-3" :user="user" :highlight="highlightText" />

      <p class="d-flex justify-content-center">
        <b-pagination
          v-model="paginationPage"
          :total-rows="usersSize"
          class="mt-4"
          :per-page="perPage"
          aria-controls="my-table"
          @change="updatePagination"
        />
      </p>
    </div>
    <div v-else>
      <p class="d-flex justify-content-center mt-5">
        <b-spinner />
      </p>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'
import { mapState, mapGetters } from 'vuex'
import SearchInput from '@/components/SearchInput'
import PersonCard from '@/components/PersonCard'
import { UPDATE_PAGINATION } from '@/consts/actions'
import personsService from '@/services/personsService'
import { CLEAR_PAGINATED_USERS, SET_FILTER, SET_USERS, UPDATE_PAGINATED_USERS } from '@/consts/mutations'

export default {
  components: {
    SearchInput,
    PersonCard
  },
  data () {
    return {
      paginationPage: 1,
      highlightText: '',
      usersData: null
    }
  },
  methods: {
    updatePagination: debounce(function (paginationPage) {
      const old = this.highlightText
      this.highlightText = ''
      this.$store.commit(CLEAR_PAGINATED_USERS)
      this.$store.dispatch(UPDATE_PAGINATION, paginationPage)
      this.highlightText = old
    }, 1000),
    setHighlightText (inputText) {
      this.highlightText = inputText
    }
  },
  computed: {
    ...mapState(['usersPaginated']),
    ...mapGetters(['usersSize', 'perPage', 'currentPage'])
  },
  destroyed () {
    this.$store.commit(CLEAR_PAGINATED_USERS)
  },
  fetchOnServer: false,
  async fetch () {
    if (this.usersPaginated.length === 0) {
      console.log(':::$route.params.byName', this.$route.params.byName)
      console.log(':::usersSize', this.usersSize)
      const response = await personsService.getUsers()
      const users = response.data

      this.$store.commit(SET_FILTER, this.$route.params.byName)
      this.$store.commit(SET_USERS, users)
      this.$store.commit(UPDATE_PAGINATED_USERS)
    }
  },
  mounted () {
    this.paginationPage = this.currentPage
  }
}
</script>

<style type="text/css" lang="scss" scoped>
.person-card {

}

.exercise-wrapper {
}
</style>
