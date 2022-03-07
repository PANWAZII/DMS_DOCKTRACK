import axios from 'axios'

function getAuthToken(cookies) {
  const token = cookies.get('access_token')
  let headers = {}
  if (token) {
    headers = { Authorization: 'bearer ' + token }
  }
  return headers
}

export const actions = {
  //Register
  async getAllDepartments({ getters }, data) {
    return await axios
      .get('/departments/getAllDepartments')
      .then((res) => res.data)
  },
  async getAllPositions({ getters }, data) {
    return await axios.get('/positions/getAllPositions').then((res) => res.data)
  },
  //User
  async getUserInfo({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .get('/users/userInfo',  data ,  {headers} )
      .then((res) => res.data)
  },
  //Lessthanfivem
  async lessThanCreatDoc({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .post('/lessthanfives/createNewDocument', { data }, { headers })
      .then((res) => res.data)
  },
  async getAllDocByUid({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .get('/lessthanfives/getApproved',  data , { headers })
      .then((res) => res.data)
  },
  async getApprovedDoc({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .get('/lessthanfives/getApproved',  data , { headers })
      .then((res) => res.data)
  },
  async getRejectedDoc({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .get('/lessthanfives/getRejected',  data , { headers })
      .then((res) => res.data)
  },
  async getWaitingDoc({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .get('/lessthanfives/getWaiting',  data , { headers })
      .then((res) => res.data)
  },
  async getDmsDoc({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .get('/lessthanfives/getDms',  data , { headers })
      .then((res) => res.data)
  },
  async getMophDoc({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .get('/lessthanfives/getMoph',  data , { headers })
      .then((res) => res.data)
  },
  async getAllSources({ getters }, data) {
    return await axios
      .get('/budgetSources/getAllSources')
      .then((res) => res.data)
  },
}
