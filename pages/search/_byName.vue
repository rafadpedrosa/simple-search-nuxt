<template>
  <div class="exercise-wrapper container">
    <NuxtLink class="btn btn-warning mt-3" to="/">
      Return
    </NuxtLink>
    <hr>
    <SearchInput :input-value="$route.params.byName" :immediate-focus="true" @search="search" @input="setHighlightText" />

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

      <div v-if="!loading">
        <PersonCard
          v-for="(user, i) in usersPaginated"
          :key="`${i}-${highlightText}`"
          class="mt-3"
          :user="user"
          :highlight="highlightText"
        />
      </div>
      <p v-else class="d-flex justify-content-center mt-3">
        <b-spinner />
      </p>

      <p class="d-flex justify-content-center">
        <!-- TODO duplicated code-->
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

    <div v-else-if="$fetchState.pending">
      <p class="d-flex justify-content-center mt-5">
        <b-spinner />
      </p>
    </div>
    <div v-else>
      <h2 class="justify-content-center d-flex mt-5">
        Nothing Found
      </h2>
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
      loading: true,
      paginationPage: 1,
      highlightText: '',
      usersData: null
    }
  },
  methods: {
    search (value) {
      this.$router.push({ params: { byName: value } })
    },
    resolveLoading: debounce(function (paginationPage) {
      const oldHighlightText = this.highlightText

      this.highlightText = ''
      this.$store.commit(CLEAR_PAGINATED_USERS)
      this.$store.dispatch(UPDATE_PAGINATION, paginationPage)
      this.loading = false
      this.highlightText = oldHighlightText
    }, 200),
    updatePagination (paginationPage) {
      this.loading = true
      this.resolveLoading(paginationPage)
    },
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
      const response = await personsService.getUsers()
      const users = response.data
      this.loading = false

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
