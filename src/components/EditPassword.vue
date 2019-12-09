<template>
   <div class="div-form">
    <h2 class="heading">Edit Password</h2>

    <div v-if="error!==''">
        <p class="error">{{error}}</p>
    </div>

    <form @submit.prevent="updatePassword">
      <div class="form-control">
        <label for="website">Website</label>
        <input type="text" name="website" class="text-input" v-model="password.website" required>
      </div>

      <div class="form-control">
        <label for="account">Account</label>
        <input type="text" name="acount" class="text-input" v-model="password.account" required>
      </div>

      <div class="form-control">
        <label for="password">New Password</label>
        <input type="password" name="password" class="text-input" v-model="password.password" required>
      </div>

      <div class="form-control">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" class="text-input" v-model="password.confirmPassword" required>
      </div>

      <div class="form-control">
        <button type="submit" class="btn btn-primary">
            Update
        </button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  created() {
    const tempPassword = this.$store.state.passwords[this.$route.params.index];
    this.password = {
      id: tempPassword.id,
      website: tempPassword.website,
      account: tempPassword.account
    };
  },
  data() {
    return {
      password: {
        id: "",
        website: "",
        account: "",
        password: "",
        confirmPassword: ""
      },
      error: ""
    };
  },
  methods: {
    updatePassword() {
      if (this.password.confirmPassword !== this.password.password) {
        this.error = "Password Doesn't match";
        return;
      }
      this.$store
        .dispatch("updatePasswordAPI", {
          id: this.password.id,
          website: this.password.website,
          account: this.password.account,
          password: this.password.password
        })
        .then(response => {
          this.$router.push({
            name: "home",
            params: { message: "Password Updated Successfully" }
          });
        })
        .catch(error => {
          if (error.response.status == 401) {
            this.$router.push({
              name: "logout"
            });
          }
        });
    }
  }
};
</script>
