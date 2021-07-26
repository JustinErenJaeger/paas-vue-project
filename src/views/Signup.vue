<template>
  <div class="signup-form">
    <v-card max-width="400" class="mx-auto">
      <v-card-title>Signup</v-card-title>
      <v-card-text
        ><v-form ref="form" v-model="valid">
          <v-container class="mt-0">
            <v-text-field
              v-model="userInfo.username"
              :rules="usernameRules"
              label="Username⋆"
              required
              type="text"
            />
            <v-text-field
              v-model="userInfo.email"
              :rules="emailRules"
              label="Email⋆"
              required
              type="email"
            />
            <v-text-field v-model="userInfo.mobile" :rules="mobileRules" label="Mobile⋆" required />
            <v-text-field
              v-model="userInfo.password"
              :rules="passwordRules"
              label="Password⋆"
              required
              type="password"
            />
            <v-btn class="mr-4" :disabled="!valid" @click="signup">
              signup
            </v-btn>
          </v-container>
        </v-form></v-card-text
      >
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    valid: false,
    userInfo: {
      id: () => this.$store.state.users.length,
      username: null,
      password: null,
      mobile: null,
      email: null,
      avatar:
        'https://images2.fanpop.com/images/photos/6700000/ichigo-hollow-hollow-ichigo-6793357-576-521.jpg',
      organizations: [],
    },
    usernameRules: [(v) => !!v || 'Username is required'],
    passwordRules: [(v) => !!v || 'Password is required'],
    mobileRules: [
      (v) => !!v || 'Mobile is required',
      (v) => /^0(6|7|8){1}[0-9]{1}[0-9]{7}$/.test(v) || 'Mobile must be valid',
    ],
    emailRules: [
      (v) => !!v || 'Email is required',
      (v) => /.+@.+..+/.test(v) || 'E-mail must be valid',
    ],
    isNewUser: null,
  }),
  methods: {
    signup() {
      this.$store.dispatch('signup', this.userInfo);
      this.$store.dispatch('signin', this.userInfo);
      if (this.userInfo.organizations.length === 0) {
        this.$store.dispatch('setActiveView', 'CREATE');
      }
      this.$router.push('/organizations');
    },
  },
  watch: {
    username(val) {
      const isNewUser = this.$store.state.users.filter((user) => user.name === val);
      this.isNewUser = !(isNewUser.length > 0);
    },
  },
  computed: {
    ...mapState(['users', 'currentUser']),
  },
  mounted() {
    this.$store.dispatch('loadUsers');
  },
};
</script>

<style scoped>
.signup-form {
  margin-top: 10rem;
}
</style>
