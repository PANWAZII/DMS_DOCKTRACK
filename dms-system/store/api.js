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
  async getLevel({ getters }, data) {
    return await axios.post('/auth/getLevel', data).then((res) => res.data)
  },
  //Public API
  async getPublicDoc({ getters }, data) {
    return await axios.get('/public/getAllDocuments').then((res) => res.data)
  },
  async getPublicHardware({ getters }, data) {
    return await axios.get('/public/getHardware').then((res) => res.data)
  },
  async getPublicSoftware({ getters }, data) {
    return await axios.get('/public/getSoftware').then((res) => res.data)
  },
  async getPublicNetwork({ getters }, data) {
    return await axios.get('/public/getNetwork').then((res) => res.data)
  },
  async getPublicCam({ getters }, data) {
    return await axios.get('/public/getCamera').then((res) => res.data)
  },

  async getPublicNormalBudget({ getters }, data) {
    return await axios.get('/public/getNormalBudget').then((res) => res.data)
  },
  async getPublicMaintenanceBudget({ getters }, data) {
    return await axios
      .get('/public/getMaintenanceBudget')
      .then((res) => res.data)
  },
  async getPublicDonationBudget({ getters }, data) {
    return await axios.get('/public/getDonationBudget').then((res) => res.data)
  },
  async getPublicFoundationBudget({ getters }, data) {
    return await axios
      .get('/public/getFoundationBudget')
      .then((res) => res.data)
  },
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
      .get('/users/userInfo', data, { headers })
      .then((res) => res.data)
  },
  async getUserDocuments({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .post('/users/getAllDocuments', data, { headers })
      .then((res) => res.data)
  },
  //admin
  async getAdminInfo({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .post('/admins/userInfo', data, { headers })
      .then((res) => res.data)
  },
  async setDocApprovalStatus({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .put('/admins/updateDocStatus', data, { headers })
      .then((res) => res)
  },
  async getAllNewDoc({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .post('/admins/getAllNewDoc', data, { headers })
      .then((res) => res.data)
  },
  async getAllUsers({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .post('/admins/getAllUsers', data, { headers })
      .then((res) => res.data)
  },

  //User & Admin
  async getDepartmentById({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .post('/departments/getDepartmentById', data, { headers })
      .then((res) => res.data)
  },
  async getPositionById({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .post('/positions/getPositionById', data, { headers })
      .then((res) => res.data)
  },

  //Documents
  async lessThanCreatDoc({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .post('/documents/createNewDocument', { data }, { headers })
      .then((res) => res.data)
  },
  async getAllDocByUid({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .get('/documents/getMyDoc', data, { headers })
      .then((res) => res.data)
  },
  async getApprovedDoc({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .get('/documents/getApproved', data, { headers })
      .then((res) => res.data)
  },
  async getRejectedDoc({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .get('/documents/getRejected', data, { headers })
      .then((res) => res.data)
  },
  async getWaitingDoc({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .get('/documents/getWaiting', data, { headers })
      .then((res) => res.data)
  },
  async getDmsDoc({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .get('/documents/getDms', data, { headers })
      .then((res) => res.data)
  },
  async getMophDoc({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .get('/documents/getMoph', data, { headers })
      .then((res) => res.data)
  },
  async getAllSources({ getters }, data) {
    return await axios
      .get('/budgetSources/getAllSources')
      .then((res) => res.data)
  },
  async getBudgetYear({ getters }, data) {
    return await axios.get('/documents/getBudgetYear').then((res) => res.data)
  },

  //Files
  async uploadReport({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .post('/files/uploadReport', data, { headers })
      .then((res) => res)
  },
  async uploadBlueprint({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .post('/files/uploadBlueprint', data, { headers })
      .then((res) => res)
  },
  async uploadQuotation_1({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .post('/files/uploadQuotation_1', data, { headers })
      .then((res) => res)
  },
  async uploadQuotation_2({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .post('/files/uploadQuotation_2', data, { headers })
      .then((res) => res)
  },
  async uploadQuotation_3({ getters }, data) {
    const headers = getAuthToken(this.$cookies)
    return await axios
      .post('/files/uploadQuotation_3', data, { headers })
      .then((res) => res)
  },
}
