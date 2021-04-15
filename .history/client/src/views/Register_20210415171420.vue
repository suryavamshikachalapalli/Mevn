<template>
<div id="register">
  <h1 class="text-center mb-3">Register </h1>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-white">
  <div class="container" >
    <form @submit.prevent="registerUser">
    <input  type="username" name="username" class="form-control" placeholder="username" 
    id="username"><br/>
<input type="password" name="password" class="form-control" placeholder="password" autocomplete="on"
id="password"><br/>
<input type="password" name="cpassword" class="form-control" placeholder="Retype-password" autocomplete="on"
id="cpassword"><br/>
<input type="text" id="company" name="company" placeholder="Your Company" 
							class="form-control" > <br />
 Your Industry:
							<select id="industry" name="industry">
								<option value="IT">IT</option>
                
								<option value="Sales">Sales</option>
								<option value="Management">Management</option></select>
<input type="text" id="hear" name="hear" placeholder="How did you hear" 
							class="form-control" > <br />
						<input type="email" id="email" name="email" placeholder="E-mail" 
							class="form-control"> <br />
						<input type="tel" id="phone" name="phone" placeholder="Phonenumber" 
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" class="form-control"
							> <br />
						<input type="text" name="track" placeholder="Which website you want to track" 
							class="form-control"><br />   
                     <input type="text" name="coupon" placeholder="Coupon code"  aria-labelledby="myBillingId myCouponcode" class="form-control"><br />

								<input type="text" name="uname" placeholder="username"   aria-labelledby="myBillingId myusername" class="form-control"><br />

								<input type="text" name="address" placeholder="Address"  aria-labelledby="myBillingId myAddressId" class="form-control"><br />

								
									City: <select name="city" id="city">
										<option value="" selected="selected">Select the city</option>
									</select>

									State: <select name="state" id="state">
										<option value="" selected="selected">Please select state </option>
									</select>

									Zip: <select name="zip" id="zip">
										<option value="" selected="selected"> Zip Code</option>
									</select>
									<br><br/>
									
						

						<input type="text" name="card" placeholder="Name of the card holder" class="form-control" aria-labelledby="myBillingId myAddressId"><br />

					

						<input type="checkbox" value="agree" id="agree" display="flex" margin-bottom="auto"
							justify-content="space-between">
						I agree with <a href=""> tearms and conditions</a><br />         

  <button class="btn btn-primary">Register</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/login" class="card-link">Already have an account?</router-link>
    </form>
  </div>
</div>
</div>
</div>
  
  </div>         

  
                
                
               
</template>