<template>
  <div>
    <h4>Welcome Back!! Please Login</h4>
    <div class ="rows">
      <div class= "card mx-auto">
        <div class="card-header text white bg-success">
          <h4>LOGIN</h4>
        </div>
        <div class="card-body">
          <form @click.prevent="loginUser">
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" name="username" placeholder="Please enter your Username" 
              v-model="username" id="username" class="form-control"> 
            </div>
            <div class="form-gourp">
              <div>
              <label for="password">Password</label>
              <input type="password" name="password" placeholder="Please enter your Password" 
              v-model="password" id="password" class="form-control" autocomplete="on"> 
              </div>
              </div><br/>
              <input type="submit" class="btn btn-success" value="Login" aria-label="close">
              &nbsp;&nbsp;&nbsp;&nbsp;
              <router-link to='/register' class="card-link">Don't have an account</router-link>
            
          </form>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data(){
    return{
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(['login']),
    loginUser(){
    console.log(this.username, this.password)
    /** Call API */
    let user = {
      username: this.username,
      password: this.password
    };
    this.login(user)
    .then (res => {
      if(res.data.success){
        this.$router.push('/dashboard')
      }
    }).catch(err => {
      console.log(err);
    })
    }
  }
}
</script>
<style>
.card{
  width :50%;
  border-radius: 0;  
}
.form-control{
  border-radius: 0;
}
.btn{
   border-radius: 0;
}

</style>