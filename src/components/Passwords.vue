<template>
    <div>
        <div id="home">
            
            <h2 class="heading">Passwords</h2>

            <div class="message" v-if="messages!==''">
                {{messages}}
            </div>

            <div class="passwordRow" v-for="(value, key) in passwords" :key="key">

                <div>
                    {{value['website']}}: {{ value['account'] }}
                </div>

                <div class="btn-group" style="width:100%">
                    <button style="width:33.3%" @click="copyToClipboard(key)">Copy</button>
                    <button style="width:33.3%" @click="redirect('edit',key)">Edit</button>
                    <button style="width:33.3%" @click="redirect('delete',key)">Delete</button>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import SimpleCrypto from "simple-crypto-js";

export default {
  props: {
    message: {
      type: String
    }
  },
  data() {
    return {
      passwords: [],
      messages: this.message || ""
    };
  },
  created() {
    this.passwords = this.$store.state.passwords;
  },
  methods: {
    copyToClipboard(key) {
      this.messages = "Copied to Clipboard";
      setTimeout(() => {
        this.messages = "";
      }, 1500);
      const str = this.decryptPassword(this.passwords[key].password);
      const el = document.createElement("textarea");
      el.value = str;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },
    decryptPassword(password) {
      let simpleCrypto = new SimpleCrypto(this.$store.state.key);
      return simpleCrypto.decrypt(password);
    },
    redirect(routeName, key) {
      this.$router.push({
        name: routeName,
        params: { index: key }
      });
    }
  }
};
</script>

<style scoped>
#home {
  max-height: 350px;
  overflow: scroll;
}

.message {
  text-align: center;
  color: #60bd4f;
  display: block;
  height: 15px;
}

.passwordRow {
  font-size: 14px;
  text-align: center;
  width: 100%;
  padding: 10px;
  background: #60bd4f;
  color: white;
  margin: 10px auto;
}

.btn-group {
  margin-top: 3px;
}

.btn-group button {
  background-color: #4caf50; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 5px 12px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

.btn-group button:last-child {
  border-top-right-radius: 20px; /* Prevent double borders */
  border-bottom-right-radius: 20px;
}

.btn-group button:first-child {
  border-top-left-radius: 20px; /* Prevent double borders */
  border-bottom-left-radius: 20px;
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}

.btn-controller {
  padding: 8px;
  margin-top: 10px;
}
</style>