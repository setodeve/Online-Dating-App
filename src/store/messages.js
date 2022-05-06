
const namespaced = true

const state = {
  messages: {},
  /*
    [*************:{
     value:{
      ["id","text"],
      ["id","text"],
     }
    }]
  */
 templates:[
   "こんにちは",
   "いいですね",
   "ありがとうございます",
   "さようなら"
 ]
}

const mutations = {
  setMessages: function(state, {id ,message}){
    state.messages[id] = message ;
    localStorage.setItem(id, JSON.stringify(message));
  }
}

const actions = {
  arrangeMessages: function({commit}, {id,message}){
    commit("setMessages",{id: id , message: message}) ;
  }
}

const getters = {
  getMessagesById: (state) => (id) =>{
    state.messages[id] = JSON.parse(localStorage.getItem(id));
    return state.messages[id] ;
  }
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}