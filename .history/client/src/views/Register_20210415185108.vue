<template>
  <div>
    <h4> Register Here</h4>
    <div class ="rows">
      <div class= "card mx-auto">
        <div class="card-header text white bg-success">
        <h4>REGISTER</h4>
        </div>
        <div class="card-body">
        <form>
            <div class="form-group">
            <label for="username">Name</label>
            <input type="text" name="name" placeholder="Please enter your Name" 
            v-model="name" id="name" class="form-control"> 
            </div>
            <div class="form-gourp">
              <div>
              <label for="password">Password</label>
              <input type="password" name="password" placeholder="Create  your Password" 
              v-model="password" id="password" class="form-control" autocomplete="on"> 
              </div>
               </div>
			     <div class="form-group">
              <label for="username">Retype-passwprd</label>
              <input type="password" name="retype_password" placeholder="Re-type your Username" 
              v-model="retype_password" id="retype_password" class="form-control"> 
            </div>
			  <div class="form-group">
              <label for="username">Company</label>
              <input type="text" name="company" placeholder="Please enter your Company" 
              v-model="company" id="company" class="form-control"> 
            </div>
			  <div class="form-group">
              <label for="username">Industry</label>
              <input type="text" name="industry" placeholder="Please enter your Industry" 
              v-model="industry" id="industry" class="form-control"> 
            </div>
			  <div class="form-group">
              <label for="username">How did you hear</label>
              <input type="text" name="hear" placeholder="How did you hear" 
              v-model="hear" id="hear" class="form-control"> 
            </div>
			  <div class="form-group">
              <label for="username">E-mail</label>
              <input type="text" name="email" placeholder="Please enter vaild E-mail id" 
              v-model="email" id="email" class="form-control"> 
            </div>
			  <div class="form-group">
              <label for="username">Phone number</label>
              <input type="text" name="phone" placeholder="Please enter vaild Phone-number" 
              v-model="phone" id="phone" class="form-control"> 
            </div>
			 <div class="form-group">
              <label for="username">Company you want to track</label>
              <input type="text" name="track" placeholder="Company you want to track" 
              v-model="track" id="track" class="form-control"> 
            </div>
			 <div class="form-group">
              <label for="username">Coupon code</label>
              <input type="text" name="coupon" placeholder="Enter the coupon code code if you hava any" 
              v-model="coupon" id="coupon" class="form-control"> 
            </div>
			  <div class="form-group">
              <label for="username">Username</label>
              <input type="text" name="username" placeholder="Please enter your Username" 
              v-model="username" id="username" class="form-control"> 
            </div>
			  <div class="form-group">
              <label for="username">Address</label>
              <input type="text" name="address" placeholder="Please enter your Address" 
              v-model="username" id="address" class="form-control"> 
            </div>
			  <div class="form-group">
              <label for="username">Payment</label>
              <input type="text" name="card" placeholder="Please enter your card ddetails" 
              v-model="card" id="card" class="form-control"> 
            </div>
			   <br/>
               <button class="btn btn-success">Register</button>
               &nbsp;&nbsp;&nbsp;&nbsp;
               <router-link to='/login' class="card-link">Already have an account</router-link>
            
          </form>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      username: "",
      password: ""
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