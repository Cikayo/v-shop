import { createApp } from 'vue'
import App from './App.vue'
import Vant, { Lazyload } from 'vant';

import 'vant/lib/index.css';

import router from './router/index.js';

createApp(App).use(router).use(Lazyload).use(Vant).mount('#app')
