import ElementPlus from 'element-plus'
import EplusKit from 'epluskit'
import { createApp } from 'vue'
import App from './App.vue'
// import 'epluskit/index.css'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).use(EplusKit).mount('#app')
