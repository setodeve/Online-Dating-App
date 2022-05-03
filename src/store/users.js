
export const users = {
  namespaced: true,
  state: {
    users: []
  },
  mutations: {
    setUsers (state) {
      let info = [] ;
      for(let i=0; i<10 ; i++){
        const res = fetch('https://randomuser.me/api')
        const results = res.json()
        const id = results[0].uuid;
        info[i]["id"] = id ;
        info[i]["value"] = (results[0]) ;
      }
      state.users = info 
    }
  },
  getters: {
    getUserById (state,id) {
      return state.users[id]
    }
  }
}
