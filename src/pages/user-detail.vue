<template>
  <div class="user-detail container">
    <h1>This is an about page</h1>
    <div>{{ user["first"] }} </div>
  </div>
  <div class="d-flex flex-wrap">
    <router-link :to="`/user/${$route.query.id}/chat`" class="col-12">Start Chat With {{ user["first"] }}</router-link>
    <router-link :to="`/`" class="col-12">Back to User List</router-link>
  </div>

</template>


<script>
export default {
  name: 'UserDetailView',
  data() {
    return {
      user : {},
    }
  },
  mounted(){
    let tmp = this.$store.getters['users/getUserById'](this.$route.query.id) ;
    this.user = tmp[0].value.name ;
  },
}
</script>
