<template>
    

  <div>
    <h2>Dashboard</h2>
    <div v-if="user">
       <h1>  Hello <b> <i> {{ user.name }} </i>  </b>     </h1>
      <h3>   Welcome to your dashboard <br/> </h3>  
     <h3>  Here are the details: <br/> </h3>
     <h2> Username: {{ user.username }} </h2> <br/>  
       <h2>  Track: {{ user.track }} <br/> </h2>
     
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
b{
  color: #42b983;
}

</style>