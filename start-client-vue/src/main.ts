import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

import App from './App.vue'
import router from './router'
import '@/styles/app.scss'
import {i18n} from "@/lang";
import _ from 'lodash'

const app = createApp(App)

app.config.globalProperties.lodash = _;

const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)
app.use(router)
app.use(i18n)

app.mount('#app')
