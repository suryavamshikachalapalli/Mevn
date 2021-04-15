<template>
  <div>
    <h4>Welcome Back!! Please Login</h4>
    <div class ="rows">
      <div class= "card mx-auto">
        <div class="card-header text white bg-success">
          <h4>LOGIN</h4>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" name="text" placeholder="Please enter your Username" 
              v-model="username" id="username" class="form-control"> 
            </div>

          </form>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
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
</style>