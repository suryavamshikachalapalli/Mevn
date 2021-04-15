<template>
  <div class="home">
    
    <p msg="Welcome to Your Reach Us App"/>
   
    <a class="navbar-brand" href="/">Welcome User</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   <ul>
  <router-link class="navbar-brand" to="/Login" > Login </router-link>
        <router-link class="navbar-brand" to="/Register" > Register </router-link>
    <!--   <li class="nav-item"><router-link class="navbar-brand" to="/Dashboard" v-if="isLoggedIn"> Dashboard </router-link></li>
        <li class="nav-item" v-if="isLoggedIn"><a to="/logout" class="nav-link" @click.prevent="logoutUser"> Logout </a></li> -->
       </ul>
  </div>


</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
