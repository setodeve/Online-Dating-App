<template>
  <div class="user-list container">
    <router-link :to="{ path: '/message-list'}">Move to MessageList</router-link>
    <ul class="d-flex flex-wrap" style="list-style-type: none;">
      <li v-for="user in users" :key="user.id" class="col-3 card m-2" style="width: 10rem;">
        <img class="card-img-top" :src='user.value.picture.thumbnail' alt="Card image cap">
        <div class="card-body d-flex flex-wrap">
          <div class="text-muted col-12">{{ user.value.name.first }}</div>
          <div class="text-muted col-12">age: {{ user.value.dob.age }}</div>
          <router-link :to="{ path: '/user', query: { id: user.id }}" class="text-muted col-5 m-1">Details</router-link>
          <router-link :to="`/user/${user.value.login.uuid}/chat`" class="text-muted col-5 m-1">Chat</router-link>
        </div>
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