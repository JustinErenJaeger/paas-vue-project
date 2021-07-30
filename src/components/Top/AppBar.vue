<template>
  <v-app-bar id="app-bar" relative app color="#106CC8" flat height="75">
    <v-spacer />
    <active-organization-menu></active-organization-menu>
    <user-profile />
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex';
import UserProfile from './UserProfile.vue';
import ActiveOrganizationMenu from './ActiveOrganizationMenu.vue';

export default {
  data: () => ({
    //
  }),
  computed: {
    ...mapState(['currentOrg', 'activeView']),
  },
  watch: {
    currentOrg() {
      if (this.currentOrg === {}) {
        this.$router.push('/organizations');
        this.$store.dispatch('setActiveView', 'LIST');
      }
    },
  },
  components: {
    'user-profile': UserProfile,
    'active-organization-menu': ActiveOrganizationMenu,
  },
};
</script>
