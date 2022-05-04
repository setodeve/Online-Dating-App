
const namespaced = true

const state = {
  messages: []
  /*
    [id: *************{
     value:{

     }
    }]
  */
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
  getMessagesById: function(id){
    return state.users.filter(message => id === message.id) ;
  }
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}