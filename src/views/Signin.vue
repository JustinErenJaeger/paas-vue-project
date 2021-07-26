<template>
  <div class="signin-form">
    <v-card max-width="400" class="mx-auto my-2">
      <v-card-title>Signin</v-card-title>
      <v-card-text
        ><v-form ref="form" v-model="valid">
          <v-container class="mt-0">
            <v-text-field
              v-model="username"
              :rules="usernameRules"
              label="Username⋆"
              required
              type="text"
            />
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password⋆"
              required
              type="password"
            />
            <v-btn class="mr-4" :disabled="!valid" @click="signin">
              SIGNIN
            </v-btn>
            <v-alert class="mt-6" dense outlined type="error" v-if="errorMessage !== null">{{
              errorMessage
            }}</v-alert>
          </v-container>
        </v-form></v-card-text
      >
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    username: null,
    password: null,
    usernameRules: [(v) => !!v || 'Username is required'],
    passwordRules: [(v) => !!v || 'Password is required'],
    errorMessage: null,
  }),
  computed: {},
  methods: {
    signin() {
      const existingUser = this.$store.state.users.filter(
        (user) => user.username === this.username,
      );
      if (existingUser.length > 0) {
        this.$store.dispatch('signin', existingUser[0]);
        if (existingUser[0].organizations.length === 0) {
          this.$store.dispatch('setActiveView', 'CREATE');
        } else {
          this.$store.dispatch('setActiveView', 'LIST');
        }
        this.$router.push('/organizations');
      } else {
        this.errorMessage = 'This user does not exist, please make sure the username is correct';
      }
    },
  },
  mounted() {
    this.$store.dispatch('loadUsers');
  },
};
</script>

<style scoped>
.signin-form {
  margin-top: 10rem;
}
</style>
