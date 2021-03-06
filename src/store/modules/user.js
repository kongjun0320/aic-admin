import md5 from 'md5'
import { login } from '@/api/sys'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    login({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username, password: md5(password) })
          .then((data) => {
            commit('setToken', data.token)
            resolve()
            router.push('/')
          })
          .catch((error) => {
            console.log('error >>> ', error)
            reject(error)
          })
      })
    }
  }
}
