<template>
  <v-card class="mx-auto my-12" max-width="500">
    <v-list color="#106CC8">
      <v-list-item>
        <v-col cols="10"
          ><v-list-item-title class="white--text">Update Organization</v-list-item-title></v-col
        >
        <v-col cols="1" class="py-0 px-0"
          ><v-btn class="mr-6 cancel-btn" fab dark small color="#d4645b" @click="cancelUpdate">
            <font-awesome-icon icon="times" />
          </v-btn>
        </v-col>
        <v-col cols="1" class="py-0 px-0"
          ><v-btn class="mx-0 add-btn" fab dark small color="green" @click="updateOrganization">
            <font-awesome-icon icon="plus" /> </v-btn
        ></v-col>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-text-field label="Organization Name" v-model="organization.name"></v-text-field>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-text-field label="Organization Type" v-model="organization.type"></v-text-field>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-text-field label="Organization Address" v-model="organization.address"></v-text-field>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-text-field label="Parent Organization" v-model="organization.parent"></v-text-field>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    organization: {
      id: () => this.$store.state.currentOrg.id,
      name: '',
      type: '',
      address: '',
      parent: '',
    },
  }),
  computed: {
    ...mapState(['currentOrg', 'currentUser', 'recentOrgs']),
  },
  methods: {
    updateOrganization() {
      this.$store.dispatch('updateOrg', this.organization);
      this.$store.dispatch('setActiveView', 'DASHBOARD');
      this.$router.push('/dashboard');
    },
    cancelUpdate() {
      this.$store.dispatch('setActiveView', 'DASHBOARD');
      this.$router.push('/dashboard');
    },
  },
  mounted() {
    this.organization = this.currentOrg;
  },
};
</script>

<style scoped>
.add-btn,
.cancel-btn {
  float: right;
}
</style>
