<template>
    

  <div>
    <h2>Welcome to your dashboard</h2>
    <div v-if="user">
     <h3>  Here are the details: <br/> </h3>
      <p>  Email: {{ user.email }} <br/> </p> 
       <p>   Username: {{ user.username }} <br/></p>
       <p>  Track: {{ user.track }} <br/> </p>
     
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters(["user"]),
  methods: {
    ...mapActions(["getDashboard"])
  },
  created() {
    this.getDashboard();
  }
};
</script>
<style>
h3 {
  margin: 40px 0 0;
}

p {
  color: #42b983;
}

</style>