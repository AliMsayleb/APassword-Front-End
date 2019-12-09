<template>
   <div class="div-form">
    <h2 class="heading">Add Password</h2>
    
    <div v-if="error!==''">
        <p class="error">{{error}}</p>
    </div>

    <form @submit.prevent="addPassword">
      <div class="form-control">
        <label for="website">Website</label>
        <input type="text" name="website" class="text-input" v-model="password.website" required>
      </div>

      <div class="form-control">
        <label for="account">Account</label>
        <input type="text" name="acount" class="text-input" v-model="password.account" required>
      </div>

      <div class="form-control">
        <label for="password">Account Password</label>
        <input type="password" name="password" class="text-input" v-model="password.password" required>
      </div>

      <div class="form-control">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" class="text-input" v-model="password.confirmPassword" required>
      </div>

      <div class="form-control">
        <button type="submit" class="btn btn-primary">
            Add
        </button>
      </div>

    </form>

    <hr class="horizental-seperator">

    <h2 class="heading">Generate a strong random password</h2>

    <div class="form-control">
        <label for="generatedPassword">Generated</label>
        <input type="text" name="generatedPassword" class="text-input" v-model="generatedPassword">
    </div>

    <div class="form-control">
        <label for="passwordLength">Password Length</label>
        <input type="number" name="passwordLength" class="text-input" v-model="length">
    </div>

    <div class="form-control">
        <p id="specialCharacters">Include special characters</p>: <input type="checkbox" name="includeCharacters" v-model="addSpecialCharacters">
    <button class="btn btn-primary" id="generatePassword" @click="generatePassword">Generate</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: {
        website: "",
        account: "",
        password: "",
        confirmPassword: ""
      },
      error: "",
      length: 12,
      generatedPassword: "",
      addSpecialCharacters: true
    };
  },
  methods: {
    addPassword() {
      if (this.password.confirmPassword !== this.password.password) {
        this.error = "Password Doesn't match";
        return;
      }
      this.$store
        .dispatch("addPasswordAPI", {
          website: this.password.website,
          account: this.password.account,
          password: this.password.password
        })
        .then(response => {
          this.$router.push({
            name: "home",
            params: { message: "Password Created Successfully" }
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

    generatePassword() {
      const charset = "";
      if (this.addSpecialCharacters) {
        this.charset =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!£$%^&*()-_=+[]{}#~'@;:?/>.<,";
      } else {
        this.charset =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      }
      this.generatedPassword = "";
      for (let i = 0, n = this.charset.length; i < this.length; ++i) {
        this.generatedPassword += this.charset.charAt(
          Math.floor(Math.random() * n)
        );
      }
    }
  },
  created() {
    this.generatePassword();
  }
};
</script>

<style scoped>
#specialCharacters {
  display: inline-block;
  padding-left: 20px;
}

.horizental-seperator {
  width: 80%;
  text-align: center;
  border: 1px solid white;
  margin: 20px auto;
}
</style>