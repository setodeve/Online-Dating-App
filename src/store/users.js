
// export const users = {
//   namespaced: true,
//   state: {
//     users: [],
//     dummy: 1
//   },
//   getters: {
//     getUserById (state,id) {
//       return state.users[id]
//     }
//   },
//   mutations: {
//     setUsers: function(state,payload) {
//       state.users = payload
//     }
//   },
//   action: {
    
//     fetchUsers: function(context) {
//       let info = [] ;
//       // for(let i=0; i<10 ; i++){
//       //   const res = fetch('https://randomuser.me/api')
//       //   const results = res.json()
//       console.log("test");
//       for(let i=0; i<10 ; i++){
//         const promise = fetch('https://randomuser.me/api');
//         promise
//           .then(response => response.json())
//           .then(jsondata => {
//             const id = jsondata["results"][0]["login"]["uuid"];
//             info[i]["id"] = id ;
//             info[i]["value"] = jsondata["results"][0] ;
//           });
//       }
//       // }
//       context.commit("setUsers",info) ;
//     }
//   }
// }
const namespaced = true

const state = {
  users: [],
  dummy:1
}

const mutations = {
  setUsers: function(state,payload) {
    state.users = payload
  }
}

const actions = {
  fetchUsers: function(context) {
    let info = [] ;
    console.log("test");
    for(let i=0; i<10 ; i++){
      const promise = fetch('https://randomuser.me/api');
      promise
        .then(response => response.json())
        .then(jsondata => {
          info[i] = {id:jsondata["results"][0]["login"]["uuid"],value:jsondata["results"][0]} ;
        });
    }
    context.commit("setUsers",info) ;
  }
}

export default {
  namespaced,
  state,
  mutations,
  actions,
}