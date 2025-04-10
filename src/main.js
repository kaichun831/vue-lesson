import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import { strings } from '../local/strings.js'
import Firebase from './utils/firebaseConfig.js'

export const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: strings,
})
const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)
app.mount('#app')
