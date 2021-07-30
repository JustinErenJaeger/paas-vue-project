<template>
  <div class="container">
    <!-- <organization-form :v-show="show" /> -->
    <update-organization-form v-if="activeView === 'UPDATE'" />
    <create-organization-form v-else-if="activeView === 'CREATE'" />
    <list-organizations v-else />
    <div class="text-center add-org">
      <v-menu
        :close-on-content-click="true"
        :nudge-width="300"
        nudge-left="200"
        offset-y
        transition="scale-transition"
        origin="bottom right"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-avatar v-bind="attrs" v-on="on" color="#106CC8">
            <font-awesome-icon icon="plus" color="white" />
          </v-avatar>
        </template>

        <v-card>
          <v-list color="#106CC8">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="white--text">Add New</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>
          <v-list flat>
            <v-list-item-group color="primary">
              <v-list-item>
                <v-list-item-icon>
                  <font-awesome-icon icon="users" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title @click="createViewActive">Organisation</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-menu>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ListOrganizations from '../components/Organizations/ListOrganizations.vue';
import UpdateOrganizationForm from '../components/Organizations/UpdateOrganizationForm.vue';
import CreateOrganizationForm from '../components/Organizations/CreateOrganizationForm.vue';

export default {
  data: () => ({
    show: true,
  }),
  computed: {
    ...mapState(['users', 'currentUser', 'activeView']),
  },
  methods: {
    createViewActive() {
      this.$store.dispatch('setActiveView', 'CREATE');
    },
  },
  components: {
    'list-organizations': ListOrganizations,
    'update-organization-form': UpdateOrganizationForm,
    'create-organization-form': CreateOrganizationForm,
  },
};
</script>

<style scoped>
.container {
  margin-top: 75px;
}

.add-org {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
}
</style>
