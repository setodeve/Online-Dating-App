<template>
  <div class="chat-comp">
    <h1>This is an chat page</h1>
  </div>
</template>

<script>
export default {
  name: 'ChatRoomView',
  mounted () {
    this.$store.dispatch("users/fetchUsers");
  },
  data() {
    return {

    }
  },
  computed:{
    users: function(){
      return this.$store.state.users.users ;
    },
  },
}
</script>