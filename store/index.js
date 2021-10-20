import { SET_PAGE, UPDATE_PAGINATED_USERS, SET_USERS, CLEAR_PAGINATED_USERS, SET_FILTER } from '@/consts/mutations'
import { UPDATE_PAGINATION } from '@/consts/actions'

export const state = () => ({
  users: [],
  usersFiltered: [],
  usersPaginated: [],
  byName: null,
  pagination: {
    currentPage: 1,
    offset: 0,
    size: 10
  }
})

export const getters = {
  usersSize: state => state.byName ? state.usersFiltered.length : state.users.length,
  perPage: state => state.pagination.size,
  currentPage: state => state.pagination.currentPage
}

export const mutations = {
  [SET_FILTER]: (state, byName) => {
    state.byName = byName
  },
  [SET_PAGE]: (state, currentPage) => {
    state.pagination.currentPage = currentPage

    const searchSize = state.pagination.size + state.pagination.offset
    const isLastPage = searchSize > state.users.length

    if (!isLastPage) {
      state.pagination.offset = (state.pagination.currentPage * state.pagination.size) - state.pagination.size
    }
  },
  [CLEAR_PAGINATED_USERS]: (state) => {
    state.usersPaginated = []
  },
  [UPDATE_PAGINATED_USERS]: (state) => {
    state.usersPaginated = []

    const searchSize = state.pagination.size + state.pagination.offset
    const users = state.byName ? state.usersFiltered : state.users
    const isLastPage = searchSize > users.length
    const size = isLastPage ? users.length : searchSize

    for (let i = state.pagination.offset; i < size; i++) {
      state.usersPaginated.push(users[i])
    }
  },
  [SET_USERS]: (state, users) => {
    state.users = users
    state.usersFiltered = users.filter((user) => {
      const nameToUpperCase = user.name.toUpperCase()
      const byNameToUpperCase = (state.byName || '').toUpperCase()

      return nameToUpperCase.includes(byNameToUpperCase)
    })
  }
}

export const actions = {
  [UPDATE_PAGINATION] ({ commit, state }, currentPage) {
    return Promise.resolve().then(() => {
      commit(SET_PAGE, currentPage)
      commit(UPDATE_PAGINATED_USERS)
    })
  }
}
