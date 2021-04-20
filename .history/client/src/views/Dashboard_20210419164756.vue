<template>
    

  <div>
    <h2>Dashboard</h2>
    <div class="card" v-if="user">
       Here are the details: <br/>
        Email: {{ user.email }} <br/>
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

</style>