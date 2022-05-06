
const namespaced = true

const state = {
  messages: {},
  /*
    {id:[
      ["id","text"],
      ["id","text"],
    ]}
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
    if(state.messages==null) return undefined;
    state.messages[id] = message ;
    localStorage.setItem("messages", JSON.stringify(state.messages));
  }
}

const actions = {
  arrangeMessages: function({commit}, {id,message}){
    commit("setMessages",{id: id , message: message}) ;
  }
}

const getters = {
  getMessagesById: (state) => (id) =>{
    if(state.messages==null){
      return undefined;
    } 
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