<template>
    

  <div>
    <h2>Dashboard</h2>
    <div class="card" v-if="user">
     <h3>  Here are the details: <br/> </h3>
      <p>  Email: {{ user.email }} <br/> </p> 
        Username: {{ user.username }} <br/>
        Track: {{ user.track }} <br/>
     
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
.card{
  width :100%;
  border-radius: 0;  
  align-content: center;

}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p {
  color: #42b983;
}

</style>