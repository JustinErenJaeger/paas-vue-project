<template>
  <v-app-bar id="app-bar" relative app color="#106CC8" flat height="75">
    <v-spacer />
    <parent-organization-menu class="mr-2" />
    <font-awesome-icon color="white" icon="chevron-right" />
    <child-organization-menu class="ml-2 mr-4" />
    <user-profile />
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex';
import UserProfile from './UserProfile.vue';
import ParentOrganizationMenu from './ParentOrganizationMenu.vue';
import ChildOrganizationMenu from './ChildOrganizationMenu.vue';

export default {
  data: () => ({
    //
  }),
  computed: {
    ...mapState(['currentOrg', 'activeView', 'isChildOrg']),
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
    'parent-organization-menu': ParentOrganizationMenu,
    'child-organization-menu': ChildOrganizationMenu,
  },
};
</script>
