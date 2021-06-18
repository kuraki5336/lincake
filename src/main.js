import { createApp } from 'vue'
import router from './router'
import store from './store'
import SSE from './setup/sse'
import App from './App.vue'

const app = createApp(App).use(router).use(store).use(SSE)
app.mount('#app')