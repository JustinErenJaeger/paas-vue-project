<template>
  <v-card class="mx-auto my-12" max-width="500">
    <v-list color="#106CC8">
      <v-list-item>
        <v-col cols="10"
          ><v-list-item-title class="white--text">Create New Organization</v-list-item-title></v-col
        >
        <v-col cols="1" class="py-0 px-0"
          ><v-btn class="mr-6 cancel-btn" fab dark small color="#d4645b" @click="cancelCreate">
            <font-awesome-icon icon="times" />
          </v-btn>
        </v-col>
        <v-col cols="1" class="py-0 px-0"
          ><v-btn class="mx-0 add-btn" fab dark small color="green" @click="createOrganization">
            <font-awesome-icon icon="plus" /> </v-btn
        ></v-col>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
    <v-list class="mx-7">
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
      name: '',
      type: '',
      address: '',
      parent: '',
    },
  }),
  computed: {
    ...mapState(['currentUser']),
  },
  methods: {
    createOrganization() {
      this.currentUser.organizations.push(this.organization);
      this.$store.dispatch('setActiveView', null);
    },
    cancelCreate() {
      this.$store.dispatch('setActiveView', null);
    },
  },
};
</script>

<style scoped>
.add-btn,
.cancel-btn {
  float: right;
}
</style>
