import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import App from './App.vue';
import router from './router';
import {store} from './store/index.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import axios from 'axios'

axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRF-Token";

createApp(App).use(BootstrapVue3).use(store).use(router).mount('#app')
