import { createApp } from 'vue'
import {createStore} from "vuex";
import users from './users.js';
import messages from './messages.js';

export const store = createStore({
  modules: {
    users,
    messages,
  }
});

const app = createApp({})
app.use(store);