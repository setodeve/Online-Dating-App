<template>
  <div class="user-detail container">
    <div class="d-flex flex-wrap">
      <router-link :to="`/`" class="col-12">Back to User List</router-link>
    </div>
    <div class="d-flex justify-content-center ">
      <div class="col-12 card" style="width: 20rem;">
        <img class="card-img-top" :src='image' alt="Card image cap">
        <div class="card-body d-flex flex-wrap">
          <div class="text-muted col-12">{{ name }}</div>
          <div class="text-muted col-12">age: {{ age }}</div>
          <div class="text-muted col-12">gender: {{ gender }}</div>
          <div class="text-muted col-12">state: {{ state }}</div>
          <router-link :to="`/user/${$route.query.id}/chat`" class="text-muted col-12 m-1">Chat</router-link>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  name: 'UserDetailView',
  data() {
    return {
      name : "",
      gender:"",
      image:"",
      age:0,
      state:""
    }
  },
  mounted(){
    let tmp = this.$store.getters['users/getUserById'](this.$route.query.id) ;
    this.name = tmp[0].value.name.first ;
    this.gender = tmp[0].value.gender ;
    this.image = tmp[0].value.picture.medium ;
    this.age = tmp[0].value.dob.age ;
    this.state = tmp[0].value.location.state ;
  },
}
</script>
