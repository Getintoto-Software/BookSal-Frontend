import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';
import store from './store';



const app = createApp(App)

app.use(router)


if (localStorage.getItem('token') && new Date().getTime() < parseInt(localStorage.getItem('expiryTime'))) {
    store.commit('SET_AUTH', true);
} else {
    store.commit('SET_AUTH', false);
}

app.use(store)

app.mount('#app')
