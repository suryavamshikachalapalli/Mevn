<template>
<div> 

   
    
      <ul class="navbar-nav">
 
      <li class="nav-item" v-if="isLoggedIn"><router-link class="navbar-link" to="/Login">Login</router-link></li>
      <li class="nav-item" v-if="isLoggedIn"><router-link class="navbar-link" to="/Register">Register</router-link></li>   
        <li class="nav-item" v-if="!isLoggedIn"><router-link class="navbar-link" to="/Dashboard" > Dashboard </router-link></li> 
      <li class="nav-item" v-if="!isLoggedIn" ><router-link to="/logout" class="nav-link" @click.prevent="logoutUser"> Logout </router-link></li>   
        </ul>
        
    </div>
 

</template>





<script>
import { mapGetters, mapActions} from 'vuex'
export default {
  computed:{
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser(){
      this.logout();

    }
  }
  
};

</script>



