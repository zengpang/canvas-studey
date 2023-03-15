import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router/index'
const app = createApp(App)
app.use(router)
//app.use(router) 需放在app.mount('#app')前面 
app.mount('#app')
