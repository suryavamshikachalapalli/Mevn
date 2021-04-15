<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Reach Us</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item"><router-link class="navbar-brand" to="/">Home</router-link></li>
        <li class="nav-item"><router-link class="navbar-brand" to="/About">About Us</router-link></li>
      <li class="nav-item"><router-link class="navbar-brand" to="/Pricing">Pricing</router-link></li>
      <li class="nav-item"><router-link class="navbar-brand" to="/Contact">Contact us</router-link></li>
      <li class="nav-item"><router-link class="navbar-brand" to="/Faq">FAQ</router-link></li>
      <!-- <li class="nav-item" v-if="!isLoggedIn"><router-link class="navbar-brand" to="/Login">Login</router-link></li>
      <li class="nav-item" v-if="!isLoggedIn"><router-link class="navbar-brand" to="/Register">Register</router-link></li>   -->
      
            <!-- <li class="nav-item" v-if="isLoggedIn"><router-link class="navbar-brand" to="/Dashboard" > Dashboard </router-link></li>
        <li class="nav-item" v-if="isLoggedIn" ><router-link to="/logout" class="nav-link" @click.prevent="logoutUser"> Logout </router-link></li>  -->
        </ul>
        
    </div>
  </div>
</nav>
</template>
<script>
import { mapGetters, mapActions} from 'vuex'
export default {
  computed:{
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['logout']),
    logoutUser(){
      this.logout();

    }
  }
  
}
</script>
