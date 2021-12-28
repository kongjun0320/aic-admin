import router from './router'
import store from './store'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  const toPath = to.path
  // 已登陆
  if (store.getters.token) {
    if (toPath === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(toPath) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
