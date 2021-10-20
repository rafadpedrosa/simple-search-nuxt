import { SET_USERS } from '@/consts/mutations'
import personsService from '@/services/personsService'

export const state = () => ({
  users: []
})

export const mutations = {
  [SET_USERS]: (state, users) => {
    state.users = users
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    const response = await personsService.getUsers()
    const users = response.data

    commit(SET_USERS, users)
  }
}
