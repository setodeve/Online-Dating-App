<template>
  <div class="user-list">
    <ul style="list-style-type: none;">
      <li v-for="(user) in users" :key="user.id">
        <router-link :to="{ path: '/user/id', query: { id: user.id }}">{{ user.value.name.first }}</router-link>
      </li>
    </ul>
    <button @click="setUsers">クリック</button>
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
    users:function(){
      return this.$store.state.users.users ;
    },
  },
  methods: {
    setUsers: function() {
      this.$store.dispatch("users/fetchUsers");
    },
  },
}
</script>