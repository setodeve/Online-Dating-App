// // import Vue from 'vue'
import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// createApp(App).use(router,store).mount('#app')


// import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {store} from './store/index.js';


// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app');
createApp(App).use(store).use(router).mount('#app')
