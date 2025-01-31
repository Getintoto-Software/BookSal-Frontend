import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';
import store from './store';



const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
