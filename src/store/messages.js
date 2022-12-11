import axios from 'axios'
import { getapi } from "../api.js"

const namespaced = true
const state = {
  messages: {},
}

const mutations = {
  setMessages: function(state, {id ,message}){
    if(state.messages==null) return undefined;
    state.messages[id] = message ;
    localStorage.setItem("messages", JSON.stringify(state.messages));
  }
}

const actions = {
  arrangeMessages: function({commit}, {id,message}){
    commit("setMessages",{id: id , message: message}) ;
  },
  arrangeApiMessages: function(id,message){

    let params = new FormData();
    params.append('apikey', getapi());
    params.append('query', message.message);
    
    const rtn = axios.post(`https://api.a3rt.recruit.co.jp/talk/v1/smalltalk`,params)
    .then(jsondata => JSON.stringify(jsondata.data.results[0].reply));
    
    return rtn;
  }
}

const getters = {
  getMessagesById: (state) => (id) =>{
    if(state.messages==null){
      return undefined;
    } 
    return state.messages[id] ;
  },
  getPresentTime: function(){
    let current_datetime = new Date();
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
    return formatted_date;
  }
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}