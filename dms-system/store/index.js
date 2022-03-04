import jwtDecode from 'jwt-decode'
import axios from 'axios'
const cookieparser = require('cookieparser')

function getUserFromCookie(req) {
  if (process.server && process.static) {
    return
  }
  if (!req.headers.cookie) {
    return
  }

  if (req.headers.cookie) {
    const parsed = cookieparser.parse(req.headers.cookie)
    const accessTokenCookie = parsed.access_token
    if (!accessTokenCookie) {
      return
    }

    const decodedToken = jwtDecode(accessTokenCookie)
    if (!decodedToken) {
      return
    }

    return decodedToken
  }
}
export const state = () => ({
  user: null,
})

export const getters = {
  uid(state) {
    if (state.user && state.user.uid) {
      return state.user.uid
    } else {
      return null
    }
  },
  user(state) {
    return state.user
  },

  isAuthenticated(state) {
    return !!state.user && !!state.user.uid
  },
}

export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    const user = getUserFromCookie(req)
    console.log('[User From cookie]')
    console.log(user)
    if (user) {
      await dispatch('setUSER', {
        name: user.name,
        email: user.email,
        avatar: user.picture,
        uid: user.user_id,
      })
    }
  },

  async login({ dispatch, commit }, user) {
    console.log('[STORE ACTIONS] - login')
    const token = await this.$fire.auth.currentUser.getIdToken(true)
    const userInfo = {
      name: user.displayName,
      email: user.email,
      avatar: user.photoURL,
      uid: user.uid,
    }
    const userUid = userInfo.uid
    this.$cookies.set('access_token', token, { maxAge: 86400 })
    this.$cookies.set('uid_token', userUid, { maxAge: 86400 })
    // Cookies.set('access_token', token) // saving token in cookie for server rendering
    await dispatch('setUSER', userInfo)
    await dispatch('saveUID', userInfo.uid)
    // console.log('[STORE ACTIONS] - in login, response:', status)
  },

  async logout({ commit, dispatch }) {
    console.log('[STORE ACTIONS] - logout')
    await this.$fire.auth.signOut()

    this.$cookies.remove('access_token')
    this.$cookies.remove('uid_token')
    commit('setUSER', null)
    commit('saveUID', null)
  },

  saveUID({ commit }, uid) {
    console.log('[STORE ACTIONS] - saveUID')
    commit('saveUID', uid)
  },

  setUSER({ commit }, user) {
    commit('setUSER', user)
  },
}

export const mutations = {
  saveUID(state, uid) {
    console.log('[STORE MUTATIONS] - saveUID:', uid)
    state.uid = uid
  },
  setUSER(state, user) {
    console.log('[STORE MUTATIONS] - setUSER:', user)
    state.user = user
  },
}
