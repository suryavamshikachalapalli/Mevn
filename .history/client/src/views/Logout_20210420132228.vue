<template>
    <div>
        your are logout ! please  

      <router-link class="navbar-link" to="/Login">Login</router-link> to access your <li class="nav-item" v-if="!isLoggedIn"><router-link class="navbar-link" to="/Dashboard" > Dashboard </router-link></li>
    </div>
</template>