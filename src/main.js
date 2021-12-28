import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

// style
import '@/styles/index.scss'
// svgIcon
import installIcons from '@/icons'
// 路由鉴权
import '@/permission'

const app = createApp(App)
installElementPlus(app)
installIcons(app)

app.use(store).use(router).mount('#app')
