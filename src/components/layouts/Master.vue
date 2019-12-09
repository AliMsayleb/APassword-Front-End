<template>
  <div id="app">

    <ul class="nav">
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li v-if="loggedIn"><router-link :to="{ name: 'create' }">Add Password</router-link></li>
      <li v-if="!loggedIn" class="right"><router-link :to="{ name: 'register' }">Register</router-link></li>
      <li v-if="!loggedIn" class="right"><router-link :to="{ name: 'login' }">Login</router-link></li>
      <li v-if="loggedIn" class="right"><router-link :to="{ name: 'logout' }">Logout</router-link></li>
    </ul>
    <router-view id="content"></router-view>

  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-size: 12px;
  width: 250px;
  height: 350px;
  background: #333;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 250px;
  height: 350px;
}

#content {
  display: block;
  margin-top: 50px;
}

.error {
  text-align: center;
  font-weight: bold;
  color: red;
  padding: 10px;
  margin: 0 auto;
}

.nav {
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  margin-bottom: 30px;
}

.nav a {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 12px;
}

.right {
  float: right;
}

.heading {
  color: #4caf50;
  text-align: center;
  margin-bottom: 5px;
}

.form-control {
  margin-bottom: 10px;
}

::-webkit-scrollbar {
  display: none;
}

.div-form {
  max-height: 350px;
  overflow: auto;
  margin: auto;
}

label {
  display: block;
  margin-bottom: 4px;
  color: #4caf50;
  text-align: center;
  font-weight: bold;
}

.text-input {
  display: block;
  width: 80%;
  font-size: 12px;
  padding: 8px 10px;
  outline: 0;
  border-radius: 3px;
  border: 1px solid black;
  margin: 0 auto;
}

p {
  padding: 5px;
  text-align: center;
  display: block;
  color: #4caf50;
  margin: 0 auto 10px auto;
}

.btn-primary {
  width: 80%;
  color: #fff;
  background: #60bd4f;
  border-color: #60bd4f;
  display: block;
  margin: 0 auto;
}

.btn-primary:hover {
  color: #fff;
  background-color: #3e8e41;
  border-color: #58ac49;
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  color: #fff;
  background-color: #c82333;
  border-color: #bd2130;
}

.btn {
  font-size: 12px;
  padding: 14px 16px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>

