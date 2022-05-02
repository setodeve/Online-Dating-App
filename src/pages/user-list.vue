<template>
  <div class="user-list">
    <ul style="list-style-type: none;">
      <li v-for="(user,index) in users" :key="index">
        <div>{{ index+1 }} : {{ user.name.first }}</div>
      </li>
    </ul>
    <button @click="getUser">クリック</button>
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
      users:[] 
    }
  },
  methods: {
    async getUser() {
      for(let i=0; i<10 ; i++){
        const res = await fetch('https://randomuser.me/api')
        const { results } = await res.json()
        this.users.push(results[0]) ;
      }
      console.log(this.users) ;
      // this.firstName = results[0].name.first
      // this.lastName = results[0].name.last
      // this.email = results[0].email
      // this.gender = results[0].gender
      // this.picture = results[0].picture.large
    },
  },
}
</script>