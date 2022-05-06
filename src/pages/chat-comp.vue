<template>
  <div class="chat-comp">
    <h1>This is an chat page</h1>
  </div>
  <ul>
    <li v-for="content,index in message" :key="index">
      {{ content.text }}
    </li>
  </ul>
  <input @keyup.enter="saveMessage" v-model="input" placeholder="type message">
</template>

<script>
export default {
  name: 'ChatRoomView',
  data() {
    return {
      message : [],
      /*
        ["id","text"],
        ["id","text"],
      */
     input:''
    }
  },
  mounted(){
    // let tmp = this.$store.getters['messages/getMessagesById'](this.$route.params.id) ;
    // this.message = tmp ;
  },
  methods:{
    saveMessage: function(){
      this.message.push(
        {
          id:1,
          text:this.input
        }
      )
      this.input = '' ;
      console.log(this.message) ;
      // this.$store.dispatch("messages/fetchUsers");
    },
    returnMessage: function(){
      
    }
  }
}
</script>