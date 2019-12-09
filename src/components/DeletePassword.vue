<template>
   <div class="div-form">
    <h2 class="heading">Delete Password</h2>

    <p id="confirmation">Are you sure you want to delete this password</p>
    <button id="confirm-delete" class="btn btn-danger" @click="deletePassword">Delete</button>
    <button id="cancel-delete" class="btn btn-primary" @click="cancel">Cancel</button>
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
      errors: ""
    };
  },
  methods: {
    deletePassword() {
      this.$store
        .dispatch("deletePasswordAPI", this.password.id)
        .then(response => {
          this.$router.push({
            name: "home",
            params: { message: "Password Deleted Successfully" }
          });
        })
        .catch(error => {
          if (error.response.status == 401) {
            this.$router.push({
              name: "logout"
            });
          }
        });
    },
    cancel() {
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>

<style scoped>
#confirmation {
  margin-bottom: 20px;
}

#confirm-delete {
  margin-left: 30px;
  display: inline;
}

#cancel-delete {
  width: auto;
  margin-left: 5px;
  display: inline;
}
</style>