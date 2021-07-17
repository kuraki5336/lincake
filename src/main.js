import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
import 'vant/lib/index.css';

import { Col, Row, Button } from 'vant';
import { Swipe, SwipeItem } from 'vant';
const app = createApp(App).use(router).use(store).use(ElementPlus)
app.use(Col);
app.use(Row);
app.use(Button);
app.use(Swipe);
app.use(SwipeItem);
app.mount('#app')