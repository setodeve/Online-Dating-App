<template>
  <div class="chat-comp container bg-secondary fixed-top mw-100 h-100">
    <router-link :to="`/`" class="col-12 text-white">Back to User List</router-link>
    <ul class="d-flex flex-wrap" style="list-style-type: none;">
      <li v-for="content,index in message" :key="index" class="col-12 text-white">
        <div v-if="content.id===this.$route.params.id" class="d-flex justify-content-start p-1" >
          {{ content.text }}
        </div>
        <div v-else class="d-flex justify-content-end p-3" >
          {{ content.text }}
        </div>
      </li>
    </ul>
  </div>
    <input @keyup.enter="saveMessage" v-model="input" placeholder="type message" class="col-12 p-0 m-0 fixed-bottom">
</template>

<script>
export default {
  name: 'ChatRoomView',
  data() {
    return {
      message : [],
      /*
        ["id","text"],["id","text"],
      */
     input:''
    }
  },
  mounted(){
    let messages = JSON.parse(localStorage.getItem("messages"))
    if(messages == null) this.$store.dispatch("messages/arrangeMessages",{id: this.$route.params.id, message: messages});
    else this.$store.dispatch("messages/arrangeMessages",{id: this.$route.params.id, message: messages[this.$route.params.id]});

    let tmp = this.$store.getters['messages/getMessagesById'](this.$route.params.id) ;

    if(tmp==undefined) this.message = [] ;
    else this.message = tmp ;
  },
  methods:{
    saveMessage: function(){
      this.message.push(
        {
          id:1,
          text:this.input
        }
      );
      this.message.push(this.returnMessage()) ;
      this.input = '' ;
      this.$store.dispatch("messages/arrangeMessages",{id: this.$route.params.id, message: this.message});
    },
    returnMessage: function(){
      let num = Math.floor(Math.random() * 4);
      return {
        id: this.$route.params.id,
        text: this.$store.state.messages.templates[num]
      }
    }
  }
}
</script>