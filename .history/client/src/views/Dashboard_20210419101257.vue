<template>
    

  <div>
    <h2>Dashboard</h2>
    <div class="card" v-if="user">
      <ul class="list-group">
        <li class="list-group-item">Email: {{ user.email }}</li> <br/>
        <li class="list-group-item">Username: {{ user.username }}</li> <br/>
        <li class="list-group-item">Track: {{ user.track }}</li><br/>
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