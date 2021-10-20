import axios from 'axios'

export default {
  getUsers () {
    return axios.get('http://localhost:3000/users.json')
  },
  getUsersSmall () {
    return axios.get('http://localhost:3000/users-small.json')
  }
}
