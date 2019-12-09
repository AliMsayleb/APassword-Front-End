<template>
  <div class="div-form">
    <h2 class="heading">Register</h2>

    <div v-for="(value, key) in errors" :key="key">
          <p class="error">{{ value[0] }}</p>
    </div>
    <form action="#" @submit.prevent="confimPassword">
        <div class="form-control">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" class="text-input" v-model="name">
        </div>

        <div class="form-control">
            <label for="email">Email</label>
            <input type="email" name="username" id="username" class="text-input" v-model="email">
        </div>

        <div class="form-control">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" class="text-input" v-model="password">
        </div>

        <div class="form-control">
            <label for="password">Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" class="text-input" v-model="confirmPassword">
        </div>

        <div class="form-control">
            <button type="submit" class="btn btn-primary" >
                {{registerButton}}
            </button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: [],
      registerButton: "Register"
    };
  },
  methods: {
    confimPassword() {
      if (this.password != this.confirmPassword) {
        this.errors = [{ 0: "Password doesn't match" }];
      } else {
        this.register();
      }
    },
    register() {
      this.registerButton = "Registering";
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.$router.push({
            name: "home",
            params: { message: "Registered Successfully" }
          });
        })
        .catch(error => {
          this.errors = Object.values(error.response.data.errors);
          this.registerButton = "Register";
        });
    }
  }
};
</script>
