<template>
  <v-app>
    <app-bar />
    <div class="spacer-bar" />
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import AppBar from './components/AppBar.vue';

export default {
  data: () => ({
    //
  }),
  components: {
    'app-bar': AppBar,
  },
  methods: {
    //
  },
  computed: {
    ...mapState(['users']),
  },
  mounted() {
    this.$store.dispatch('loadUsers');
  },
};
</script>

<style scoped>
.spacer-bar {
  height: 75px;
}
</style>
