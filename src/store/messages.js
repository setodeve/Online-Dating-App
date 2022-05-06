
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
  setMessages: function(state, payload){
    state.messages.push(payload) ;
  }
}

const actions = {
  arrangeMessages: function(context){
    let info = [] ;
    // info.push({id:jsondata.data["results"][i]["login"]["uuid"],value:jsondata.data["results"][i]}) ;
    context.commit("setMessages",info) ;
  }
}

const getters = {
  getMessagesById: (state) => (id) =>{
    return state.messages.filter(message => id === message.id) ;
  }
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}