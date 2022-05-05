<template>
  <div class="user-detail">
    <h1>This is an about page</h1>
    <div>Hi {{ user["first"] }} </div>
  </div>
</template>


<script>
export default {
  name: 'UserDetailView',
  data() {
    return {
      user : {}
    }
  },
  mounted(){
    let tmp = this.$store.getters['users/getUserById'](this.$route.query.id) ;
    this.user = tmp[0].value.name ;
    console.log(this.user) ;
  },
}
</script>
