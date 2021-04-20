<template>
    

  <div>
    <h2>Dashboard</h2>
    <div class="card" v-if="user">
      <ul class="list-group"> Here are the details: <br/>
        Email: {{ user.email }} <br/>
        Username: {{ user.username }} <br/>
        Track: {{ user.track }} <br/>
      </ul>
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
  width :50%;
  border-radius: 0;  

}

</style>