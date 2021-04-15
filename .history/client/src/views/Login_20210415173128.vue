<template>
 <div  id="login">
            <h1 class="text-center mb-3">Login </h1>

           <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-white">
                <div class="container" >
                    <form>

                        <div class="form-group">
                        <input type="username" name="username" class="form-control" placeholder="username"
                            id="username"  v-model="username"><br/>
                        </div>

                       <div class="form-group">
                        <input type="password" name="password" class="form-control" placeholder="password"
                            id="password"  v-model="password"><br/>
                       </div>

                        <div class="form-group">
                        <input type="checkbox" class="form-check-input" id="checkbox">
                        <label class="form-check-label" for="checkbox">Remember Me</label> <br/>
                        </div>  

                        <button type="submit" value="Login" class=" btn btn-primary">Login</button> /><br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="reset.ejs">Forgot Password?</a> <br/>


                      <router-link to="/register" class="card-link">Need and account?</router-link>

                    </form>
                </div>
            
        </div>
      </div>
           </div>
 </div>
 
</template>