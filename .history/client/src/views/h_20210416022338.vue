<template>
  <div class="home">
    
    <p msg="Welcome to Your Reach Us App"/>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
  <div class="nav-bar">
    <li class="nav-item" v-if="!isLoggedIn"><router-link class="navbar-brand" to="/Login">Login</router-link></li>
      <li class="nav-item" v-if="!isLoggedIn"><router-link class="navbar-brand" to="/Register">Register</router-link></li>  
      
            <li class="nav-item" v-if="isLoggedIn"><router-link class="navbar-brand" to="/Dashboard"> Dashboard </router-link></li>
        <li class="nav-item" v-if="isLoggedIn" ><a to="/logout" class="nav-link" @click.prevent="logoutUser"> Logout </a></li> 
  </div>
  </div>
  </div>
</template>


// @ is an alias to /src




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