import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'

window.axios = require('axios');
window.axios.defaults.baseURL = 'https://rickandmortyapi.com/api';


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
