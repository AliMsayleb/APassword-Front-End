<template>
    <div id="app">
    </div>
</template>

<script>
export default {
  created() {
    this.$store
      .dispatch("logout")
      .then(response => {
        this.$router.push({ name: "login" });
      })
      .catch(error => {
        this.$router.push({
          name: "login",
          params: {
            errorMessage: "Please Login Again"
          }
        });
      });
  }
};
</script>

