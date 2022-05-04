<template>
  <div class="user-detail">
    <h1>This is an about page</h1>
    {{ this.$store.getters['users/getUserById'](this.$route.query.id) }}
  </div>
</template>


<script>
export default {
  name: 'UserDetailView',
  mounted(){
    // console.log(this.$store.getters['users/getUserById'](this.$route.query.id)) ;
    // console.log(this) ;
  },
  data() {
    return {

    }
  },
}
</script>
