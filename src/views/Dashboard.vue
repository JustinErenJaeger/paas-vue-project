<template>
  <div class="container">
    <h1>DASHBOARD</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({}),
  computed: {
    ...mapState(['currentOrg']),
  },
  methods: {},
  components: {},
};
</script>

<style scoped></style>
