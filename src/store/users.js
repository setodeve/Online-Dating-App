import axios from 'axios'

const namespaced = true

const state = {
  users: []
}

const mutations = {
  setUsers: function(state,payload) {
    state.users = payload
  }
}

const actions = {
  fetchUsers: async function(context) {
    //second call
    if( localStorage.getItem('key') !=null ){
      context.commit("setUsers",JSON.parse(localStorage.getItem('key'))) ;
      return ;
    }
    //first call
    let info = [] ;
    await axios.get('https://randomuser.me/api/?results=32')
        .then(jsondata => {
          let len =jsondata.data["results"].length ;
          for(let i=0 ; i<len ; i++){
            info.push({id:jsondata.data["results"][i]["login"]["uuid"],value:jsondata.data["results"][i]}) ;
          }
          context.commit("setUsers",info) ;
          localStorage.setItem('key', JSON.stringify(info));
        });
  },
}

const getters = {
  getUserById: (state) => (id) =>{
    return state.users.filter(user => id === user.id) ;
  }
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}