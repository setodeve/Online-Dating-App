<template>
  <div class="message-list container">
    <div>Users List You have had Message</div>
    <ul class="d-flex flex-wrap" style="list-style-type: none;">
      <li v-for="list in lists" :key="list.id" class="col-12">
        <router-link :to="{ path: '/user', query: { id: list.id }}">{{ list.name.first }}</router-link>
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
      this.lists.push({id: key,name:this.getuserName(key)}) ;
    }
    console.log(this.lists) ;
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