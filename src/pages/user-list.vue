<template>
  <div class="user-list container">
    <router-link :to="{ path: '/message-list'}">Move to MessageList</router-link>
    <ul class="d-flex flex-wrap" style="list-style-type: none;">
      <li v-for="user in users" :key="user.id" class="col-3">
        <router-link :to="{ path: '/user', query: { id: user.id }}">{{ user.value.name.first }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserListView',
  mounted () {
    this.$store.dispatch("users/fetchUsers");
  },
  computed:{
    users: function(){
      return this.$store.state.users.users ;
    },
  },
}
</script>