<template>
  <div>
    <div class="text-center">
      <v-menu
        :close-on-content-click="true"
        :nudge-width="200"
        offset-y
        nudge-left="50"
        nudge-bottom="13"
        transition="scale-transition"
        origin="top right"
        min-width="300"
      >
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on" class="white--text">
            <!-- <div v-if="isChildOrg">
              <span
                >{{ parentOrg.name }} <font-awesome-icon color="#106CC8" icon="chevron-right" />
                {{ childOrg.name.slice(0, 8) }}</span
              >
            </div>
            <div v-else>
              <span>{{ currentOrg.name }}</span>
            </div> -->
            test
          </div>
        </template>

        <v-card>
          <v-list color="#106CC8">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="white--text">Organization Menu</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>
          <v-list flat>
            <v-list-item-group color="primary">
              <v-list-item
                v-if="activeView === 'DASHBOARD' || activeView === 'LIST'"
                @click="routeTo('UPDATE')"
              >
                <v-list-item-icon>
                  <font-awesome-icon color="#106CC8" icon="pencil-alt" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Update Organization</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-if="activeView === 'DASHBOARD'" @click="routeTo('LIST')">
                <v-list-item-icon>
                  <font-awesome-icon color="#106CC8" icon="exchange-alt" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Switch Organization</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                v-if="activeView === 'UPDATE' || activeView === 'CREATE' || activeView === 'LIST'"
                @click="routeTo('DASHBOARD')"
              >
                <v-list-item-icon>
                  <font-awesome-icon color="#106CC8" icon="columns" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Dashboard</v-list-item-title>
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

export default {
  data: () => ({
    //
  }),
  computed: {
    ...mapState(['currentOrg', 'activeView', 'isChildOrg', 'childOrg', 'parentOrg']),
  },
  methods: {
    routeTo(view) {
      console.log(this.parentOrg, this.childOrg);
      if (view === 'UPDATE' || view === 'CREATE' || view === 'LIST') {
        this.$router.push('/organizations');
      } else if (view === 'DASHBOARD') {
        this.$router.push('/dashboard');
      }
      this.$store.dispatch('setActiveView', view);
    },
  },
};
</script>
