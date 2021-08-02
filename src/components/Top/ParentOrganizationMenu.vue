<template>
  <active-organization-menu />
</template>

<script>
import { mapState } from 'vuex';
import ActiveOrganizationMenu from './ActiveOrganizationMenu.vue';

export default {
  data: () => ({
    //
  }),
  computed: {
    ...mapState(['currentOrg', 'activeView', 'isChildOrg', 'childOrg', 'parentOrg']),
  },
  methods: {},
  components: {
    'active-organization-menu': ActiveOrganizationMenu,
  },
};
</script>
