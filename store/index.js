import { SET_PAGE, UPDATE_PAGINATED_USERS, SET_USERS } from '@/consts/mutations'
import personsService from '@/services/personsService'
import { UPDATE_PAGINATION } from '@/consts/actions'

export const state = () => ({
  users: [],
  usersPaginated: [],
  pagination: {
    currentPage: 0,
    offset: 0,
    size: 10
  }
})

export const getters = {
  usersSize: state => state.users.length,
  perPage: state => state.pagination.size,
  currentPage: state => state.pagination.currentPage
}

export const mutations = {
  [SET_PAGE]: (state, currentPage) => {
    state.pagination.currentPage = currentPage

    const isLastPage = state.pagination.size > state.users.length

    if (!isLastPage) {
      state.pagination.offset = (state.pagination.currentPage * state.pagination.size) - state.pagination.size
    }
  },
  [UPDATE_PAGINATED_USERS]: (state) => {
    state.usersPaginated = []

    const isLastPage = state.pagination.size > state.users.length
    const size = isLastPage ? state.users.length : state.pagination.size + state.pagination.offset

    for (let i = state.pagination.offset; i < size; i++) {
      state.usersPaginated.push(state.users[i])
    }
  },
  [SET_USERS]: (state, users) => {
    state.users = users
  }
}

export const actions = {
  async nuxtServerInit ({ commit, state }) {
    // TODO add error handling
    const response = await personsService.getUsers()
    const users = response.data

    commit(SET_USERS, users)
    commit(UPDATE_PAGINATED_USERS)
  },
  [UPDATE_PAGINATION] ({ commit, state }, currentPage) {
    commit(SET_PAGE, currentPage)
    commit(UPDATE_PAGINATED_USERS)
  }
}
