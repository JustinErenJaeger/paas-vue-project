<template>
  <div>
    <div class="text-center" v-show="currentUser.username">
      <v-menu
        :close-on-content-click="true"
        :nudge-width="300"
        offset-y
        offset-x
        transition="scale-transition"
        origin="top right"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-avatar v-bind="attrs" v-on="on">
            <img v-if="currentUser.avatar" :src="currentUser.avatar" />
            <img v-else src="/no-avatar.png" alt="John" />
          </v-avatar>
        </template>

        <v-card>
          <v-list color="#106CC8">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="white--text">{{
                  currentUser.username
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>
          <v-list flat>
            <v-list-item-group color="primary">
              <v-list-item>
                <v-list-item-icon>
                  <font-awesome-icon icon="cog" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Settings</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <font-awesome-icon icon="key" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Security</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-icon>
                  <font-awesome-icon icon="users" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Switch Organisation</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="logoutUser">
                <v-list-item-icon>
                  <font-awesome-icon icon="sign-out-alt" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-menu>
    </div>
    <div v-if="!currentUser.username">
      <v-btn router to="/signup" class="white--text mr-6" elevation="0" color="transparent"
        >SIGNUP</v-btn
      >
      <v-btn router to="/signin" class="white--text" elevation="0" color="transparent"
        >SIGNIN</v-btn
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    //
  }),
  methods: {
    logoutUser() {
      this.$store.dispatch('logoutUser');
      this.$router.push('/');
    },
  },
  computed: {
    ...mapState(['currentUser']),
  },
};
</script>
