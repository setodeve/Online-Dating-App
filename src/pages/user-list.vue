<template>
  <div class="user-list">
    <ul style="list-style-type: none;">
      <!-- <li v-for="(user,index) in users" :key="index">
        <div>{{ index+1 }} : {{ user.name.first }}</div>
      </li> -->
    </ul>
    <button @click="setUsers">クリック</button>
    <!-- {{ count }} -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'UserListView',
  components: {
    // HelloWorld
  },
  data() {
    return {

    }
  },
  computed:{
    count(){
      return this.$store.state.users ;
    },
  },
  methods: {
    // getUser() {
      
    //   for(let i=0; i<1 ; i++){
    //     // const res = await fetch('https://randomuser.me/api')
    //     // const { results } = await res.json()
    //     // this.state.users.push(results[0]) ;
    //     const promise = fetch('https://randomuser.me/api');
    //     promise
    //       .then(response => response.json())
    //       .then(jsondata => {
    //           let tmp = jsondata;
    //           console.log(tmp["results"][0]["name"]);
    //           console.log(tmp["results"][0]["login"]["uuid"]);
    //       });
    //   }
      
    //   // console.log(this.users) ;
    //   // this.firstName = results[0].name.first
    //   // this.lastName = results[0].name.last
    //   // this.email = results[0].email
    //   // this.gender = results[0].gender
    //   // this.picture = results[0].picture.large
    // },
    setUsers: function() {
      console.log(this.$store.state.dummy) ;
      this.$store.dispatch("users/fetchUsers");
    },
  },
}
</script>