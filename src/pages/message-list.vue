<template>
  <div class="message-list container">
    <router-link :to="`/`" class="col-12 text-muted">Back to User List</router-link>
    <div>Users List You have had Message</div>
    <ul class="d-flex flex-wrap" style="list-style-type: none;">
      <li v-for="list in lists" :key="list.id" class="col-12">
        <img :src="list.image" alt="image" class="rounded-circle m-2" width="48" height="48">
        <router-link :to="{ path: '/user', query: { id: list.id }}" class="m-0 p-0 text-muted">{{ list.name.first }}</router-link>
        <div class=""><small>LastChatTime : {{ list.time }}</small></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MessageListView',
  data() {
    return {
      lists : [],
      /*
        ["id":username],["id":username]
      */
    }
  },
  mounted(){
    let messages = JSON.parse(localStorage.getItem("messages")) ;
    for(let key in messages){
      let tmp = this.$store.getters['users/getUserById'](key) ;
      this.lists.push({
        id: key,
        name:this.getuserName(key),
        image: tmp[0].value.picture.thumbnail,
        time:messages[key][messages[key].length-1].time
      }) ;
    }
  },
  methods:{
    getuserName: function(id){
      let tmp = this.$store.getters['users/getUserById'](id) ;
      let user = tmp[0].value.name ;
      return user ;
    },
  }
}
</script>