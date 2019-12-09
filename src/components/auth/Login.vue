<template>
  <div class="div-form">
    <h2 class="heading">Login</h2>
    <div>
          <p class="error">{{error}}</p>
    </div>
    <form action="#" @submit.prevent="login">
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" class="text-input" v-model="email" required>
      </div>

      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="text-input" v-model="password" required>
      </div>

      <div class="form-control">
        <button type="submit" id="loginButton" class="btn btn-primary">
            {{loginButton}}
        </button>
      </div>

    </form>
  </div>
</template>

<script>
import Hashes from "jshashes";

export default {
  name: "login",

  data() {
    return {
      email: "",
      password: "",
      loginButton: "Login",
      error: this.errorMessage
    };
  },
  props: {
    errorMessage: {
      type: String
    }
  },
  methods: {
    login() {
      this.loginButton = "Logging in..";
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.getPasswordsAPI();
        })
        .catch(error => {
          console.log(error);
          this.error = error.response.data.error;
          this.password = "";
          this.loginButton = "Log in";
        });
    },
    getPasswordsAPI() {
      this.$store
        .dispatch("getPasswordsAPI")
        .then(response => {
          this.$router.push({
            name: "home",
            params: { message: "Welcome" }
          });
        })
        .catch(error => {
          console.log(error);
          this.password = "";
          this.loginButton = "Log in";
        });
    }
  }
};
</script>

<style scoped>
#loginButton {
  margin-top: 50px;
}
</style>
