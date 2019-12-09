webpackJsonp([1],{

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layouts_Master__ = __webpack_require__("Q42K");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_store__ = __webpack_require__("wtEF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__("eqvY");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






// require('./assets/style/bootstrap.min.css')

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vue_router__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

var router = new __WEBPACK_IMPORTED_MODULE_3_vue_router__["a" /* default */]({
    routes: __WEBPACK_IMPORTED_MODULE_4__routes__["a" /* default */],
    mode: 'hash',
    base: __dirname

});

router.beforeEach(function (to, from, next) {
    if (to.matched.some(function (record) {
        return record.meta.requiresAuth;
    })) {
        if (!__WEBPACK_IMPORTED_MODULE_2__store_store__["a" /* store */].getters.loggedIn) {
            next({
                name: 'login'
            });
        } else {
            next();
        }
    } else if (to.matched.some(function (record) {
        return record.meta.requiresVisitor;
    })) {
        if (__WEBPACK_IMPORTED_MODULE_2__store_store__["a" /* store */].getters.loggedIn) {
            next({
                name: 'home'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: '#app',
    router: router,
    store: __WEBPACK_IMPORTED_MODULE_2__store_store__["a" /* store */],
    components: { Master: __WEBPACK_IMPORTED_MODULE_1__components_layouts_Master__["a" /* default */] },
    template: '<Master/>'
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "/"))

/***/ }),

/***/ "Q42K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/layouts/Master.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Master = ({
  computed: {
    loggedIn: function loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0ec42910","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/layouts/Master.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('ul',{staticClass:"nav"},[_c('li',[_c('router-link',{attrs:{"to":{ name: 'home' }}},[_vm._v("Home")])],1),_vm._v(" "),(_vm.loggedIn)?_c('li',[_c('router-link',{attrs:{"to":{ name: 'create' }}},[_vm._v("Add Password")])],1):_vm._e(),_vm._v(" "),(!_vm.loggedIn)?_c('li',{staticClass:"right"},[_c('router-link',{attrs:{"to":{ name: 'register' }}},[_vm._v("Register")])],1):_vm._e(),_vm._v(" "),(!_vm.loggedIn)?_c('li',{staticClass:"right"},[_c('router-link',{attrs:{"to":{ name: 'login' }}},[_vm._v("Login")])],1):_vm._e(),_vm._v(" "),(_vm.loggedIn)?_c('li',{staticClass:"right"},[_c('router-link',{attrs:{"to":{ name: 'logout' }}},[_vm._v("Logout")])],1):_vm._e()]),_vm._v(" "),_c('router-view',{attrs:{"id":"content"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var layouts_Master = (esExports);
// CONCATENATED MODULE: ./src/components/layouts/Master.vue
function injectStyle (ssrContext) {
  __webpack_require__("qwyI")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Master,
  layouts_Master,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_layouts_Master = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "bQ5Y":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "c+Nd":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "eqvY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/jshashes/hashes.js
var hashes = __webpack_require__("/V0p");
var hashes_default = /*#__PURE__*/__webpack_require__.n(hashes);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/auth/Login.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Login = ({
  name: "login",

  data: function data() {
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
    login: function login() {
      var _this = this;

      this.loginButton = "Logging in..";
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      }).then(function (response) {
        _this.getPasswordsAPI();
      }).catch(function (error) {
        console.log(error);
        _this.error = error.response.data.error;
        _this.password = "";
        _this.loginButton = "Log in";
      });
    },
    getPasswordsAPI: function getPasswordsAPI() {
      var _this2 = this;

      this.$store.dispatch("getPasswordsAPI").then(function (response) {
        _this2.$router.push({
          name: "home",
          params: { message: "Welcome" }
        });
      }).catch(function (error) {
        console.log(error);
        _this2.password = "";
        _this2.loginButton = "Log in";
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2c5bfcb3","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/auth/Login.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"div-form"},[_c('h2',{staticClass:"heading"},[_vm._v("Login")]),_vm._v(" "),_c('div',[_c('p',{staticClass:"error"},[_vm._v(_vm._s(_vm.error))])]),_vm._v(" "),_c('form',{attrs:{"action":"#"},on:{"submit":function($event){$event.preventDefault();return _vm.login($event)}}},[_c('div',{staticClass:"form-control"},[_c('label',{attrs:{"for":"email"}},[_vm._v("Email")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],staticClass:"text-input",attrs:{"type":"email","name":"email","id":"email","required":""},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-control"},[_c('label',{attrs:{"for":"password"}},[_vm._v("Password")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],staticClass:"text-input",attrs:{"type":"password","name":"password","id":"password","required":""},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-control"},[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"submit","id":"loginButton"}},[_vm._v("\n          "+_vm._s(_vm.loginButton)+"\n      ")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var auth_Login = (esExports);
// CONCATENATED MODULE: ./src/components/auth/Login.vue
function injectStyle (ssrContext) {
  __webpack_require__("bQ5Y")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2c5bfcb3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Login,
  auth_Login,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_auth_Login = (Component.exports);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/values.js
var values = __webpack_require__("gRE1");
var values_default = /*#__PURE__*/__webpack_require__.n(values);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/auth/Register.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Register = ({
  data: function data() {
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
    confimPassword: function confimPassword() {
      if (this.password != this.confirmPassword) {
        this.errors = [{ 0: "Password doesn't match" }];
      } else {
        this.register();
      }
    },
    register: function register() {
      var _this = this;

      this.registerButton = "Registering";
      this.$store.dispatch("register", {
        name: this.name,
        email: this.email,
        password: this.password
      }).then(function (response) {
        _this.$router.push({
          name: "home",
          params: { message: "Registered Successfully" }
        });
      }).catch(function (error) {
        _this.errors = values_default()(error.response.data.errors);
        _this.registerButton = "Register";
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2000bfc4","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/auth/Register.vue
var Register_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"div-form"},[_c('h2',{staticClass:"heading"},[_vm._v("Register")]),_vm._v(" "),_vm._l((_vm.errors),function(value,key){return _c('div',{key:key},[_c('p',{staticClass:"error"},[_vm._v(_vm._s(value[0]))])])}),_vm._v(" "),_c('form',{attrs:{"action":"#"},on:{"submit":function($event){$event.preventDefault();return _vm.confimPassword($event)}}},[_c('div',{staticClass:"form-control"},[_c('label',{attrs:{"for":"name"}},[_vm._v("Name")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"}],staticClass:"text-input",attrs:{"type":"text","name":"name","id":"name"},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-control"},[_c('label',{attrs:{"for":"email"}},[_vm._v("Email")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],staticClass:"text-input",attrs:{"type":"email","name":"username","id":"username"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-control"},[_c('label',{attrs:{"for":"password"}},[_vm._v("Password")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],staticClass:"text-input",attrs:{"type":"password","name":"password","id":"password"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-control"},[_c('label',{attrs:{"for":"password"}},[_vm._v("Confirm Password")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.confirmPassword),expression:"confirmPassword"}],staticClass:"text-input",attrs:{"type":"password","name":"confirmPassword","id":"confirmPassword"},domProps:{"value":(_vm.confirmPassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.confirmPassword=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-control"},[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"submit"}},[_vm._v("\n              "+_vm._s(_vm.registerButton)+"\n          ")])])])],2)}
var Register_staticRenderFns = []
var Register_esExports = { render: Register_render, staticRenderFns: Register_staticRenderFns }
/* harmony default export */ var auth_Register = (Register_esExports);
// CONCATENATED MODULE: ./src/components/auth/Register.vue
var Register_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Register___vue_template_functional__ = false
/* styles */
var Register___vue_styles__ = null
/* scopeId */
var Register___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Register___vue_module_identifier__ = null
var Register_Component = Register_normalizeComponent(
  Register,
  auth_Register,
  Register___vue_template_functional__,
  Register___vue_styles__,
  Register___vue_scopeId__,
  Register___vue_module_identifier__
)

/* harmony default export */ var components_auth_Register = (Register_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/auth/Logout.vue
//
//
//
//
//

/* harmony default export */ var Logout = ({
  created: function created() {
    var _this = this;

    this.$store.dispatch("logout").then(function (response) {
      _this.$router.push({ name: "login" });
    }).catch(function (error) {
      _this.$router.push({
        name: "login",
        params: {
          errorMessage: "Please Login Again"
        }
      });
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-008afdc8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/auth/Logout.vue
var Logout_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}})}
var Logout_staticRenderFns = []
var Logout_esExports = { render: Logout_render, staticRenderFns: Logout_staticRenderFns }
/* harmony default export */ var auth_Logout = (Logout_esExports);
// CONCATENATED MODULE: ./src/components/auth/Logout.vue
var Logout_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Logout___vue_template_functional__ = false
/* styles */
var Logout___vue_styles__ = null
/* scopeId */
var Logout___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Logout___vue_module_identifier__ = null
var Logout_Component = Logout_normalizeComponent(
  Logout,
  auth_Logout,
  Logout___vue_template_functional__,
  Logout___vue_styles__,
  Logout___vue_scopeId__,
  Logout___vue_module_identifier__
)

/* harmony default export */ var components_auth_Logout = (Logout_Component.exports);

// EXTERNAL MODULE: ./node_modules/simple-crypto-js/src/SimpleCrypto.js
var SimpleCrypto = __webpack_require__("hYIk");
var SimpleCrypto_default = /*#__PURE__*/__webpack_require__.n(SimpleCrypto);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Passwords.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Passwords = ({
  props: {
    message: {
      type: String
    }
  },
  data: function data() {
    return {
      passwords: [],
      messages: this.message || ""
    };
  },
  created: function created() {
    this.passwords = this.$store.state.passwords;
  },

  methods: {
    copyToClipboard: function copyToClipboard(key) {
      var _this = this;

      this.messages = "Copied to Clipboard";
      setTimeout(function () {
        _this.messages = "";
      }, 1500);
      var str = this.decryptPassword(this.passwords[key].password);
      var el = document.createElement("textarea");
      el.value = str;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },
    decryptPassword: function decryptPassword(password) {
      var simpleCrypto = new SimpleCrypto_default.a(this.$store.state.key);
      return simpleCrypto.decrypt(password);
    },
    redirect: function redirect(routeName, key) {
      this.$router.push({
        name: routeName,
        params: { index: key }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-77626cae","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Passwords.vue
var Passwords_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{attrs:{"id":"home"}},[_c('h2',{staticClass:"heading"},[_vm._v("Passwords")]),_vm._v(" "),(_vm.messages!=='')?_c('div',{staticClass:"message"},[_vm._v("\n            "+_vm._s(_vm.messages)+"\n        ")]):_vm._e(),_vm._v(" "),_vm._l((_vm.passwords),function(value,key){return _c('div',{key:key,staticClass:"passwordRow"},[_c('div',[_vm._v("\n                "+_vm._s(value['website'])+": "+_vm._s(value['account'])+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"btn-group",staticStyle:{"width":"100%"}},[_c('button',{staticStyle:{"width":"33.3%"},on:{"click":function($event){_vm.copyToClipboard(key)}}},[_vm._v("Copy")]),_vm._v(" "),_c('button',{staticStyle:{"width":"33.3%"},on:{"click":function($event){_vm.redirect('edit',key)}}},[_vm._v("Edit")]),_vm._v(" "),_c('button',{staticStyle:{"width":"33.3%"},on:{"click":function($event){_vm.redirect('delete',key)}}},[_vm._v("Delete")])])])})],2)])}
var Passwords_staticRenderFns = []
var Passwords_esExports = { render: Passwords_render, staticRenderFns: Passwords_staticRenderFns }
/* harmony default export */ var components_Passwords = (Passwords_esExports);
// CONCATENATED MODULE: ./src/components/Passwords.vue
function Passwords_injectStyle (ssrContext) {
  __webpack_require__("i2Ge")
}
var Passwords_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Passwords___vue_template_functional__ = false
/* styles */
var Passwords___vue_styles__ = Passwords_injectStyle
/* scopeId */
var Passwords___vue_scopeId__ = "data-v-77626cae"
/* moduleIdentifier (server only) */
var Passwords___vue_module_identifier__ = null
var Passwords_Component = Passwords_normalizeComponent(
  Passwords,
  components_Passwords,
  Passwords___vue_template_functional__,
  Passwords___vue_styles__,
  Passwords___vue_scopeId__,
  Passwords___vue_module_identifier__
)

/* harmony default export */ var src_components_Passwords = (Passwords_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/EditPassword.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var EditPassword = ({
  created: function created() {
    var tempPassword = this.$store.state.passwords[this.$route.params.index];
    this.password = {
      id: tempPassword.id,
      website: tempPassword.website,
      account: tempPassword.account
    };
  },
  data: function data() {
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
    updatePassword: function updatePassword() {
      var _this = this;

      if (this.password.confirmPassword !== this.password.password) {
        this.error = "Password Doesn't match";
        return;
      }
      this.$store.dispatch("updatePasswordAPI", {
        id: this.password.id,
        website: this.password.website,
        account: this.password.account,
        password: this.password.password
      }).then(function (response) {
        _this.$router.push({
          name: "home",
          params: { message: "Password Updated Successfully" }
        });
      }).catch(function (error) {
        if (error.response.status == 401) {
          _this.$router.push({
            name: "logout"
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-45ef1241","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/EditPassword.vue
var EditPassword_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"div-form"},[_c('h2',{staticClass:"heading"},[_vm._v("Edit Password")]),_vm._v(" "),(_vm.error!=='')?_c('div',[_c('p',{staticClass:"error"},[_vm._v(_vm._s(_vm.error))])]):_vm._e(),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.updatePassword($event)}}},[_c('div',{staticClass:"form-control"},[_c('label',{attrs:{"for":"website"}},[_vm._v("Website")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password.website),expression:"password.website"}],staticClass:"text-input",attrs:{"type":"text","name":"website","required":""},domProps:{"value":(_vm.password.website)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.password, "website", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-control"},[_c('label',{attrs:{"for":"account"}},[_vm._v("Account")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password.account),expression:"password.account"}],staticClass:"text-input",attrs:{"type":"text","name":"acount","required":""},domProps:{"value":(_vm.password.account)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.password, "account", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-control"},[_c('label',{attrs:{"for":"password"}},[_vm._v("New Password")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password.password),expression:"password.password"}],staticClass:"text-input",attrs:{"type":"password","name":"password","required":""},domProps:{"value":(_vm.password.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.password, "password", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-control"},[_c('label',{attrs:{"for":"confirmPassword"}},[_vm._v("Confirm Password")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password.confirmPassword),expression:"password.confirmPassword"}],staticClass:"text-input",attrs:{"type":"password","name":"confirmPassword","required":""},domProps:{"value":(_vm.password.confirmPassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.password, "confirmPassword", $event.target.value)}}})]),_vm._v(" "),_vm._m(0)])])}
var EditPassword_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-control"},[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"submit"}},[_vm._v("\n          Update\n      ")])])}]
var EditPassword_esExports = { render: EditPassword_render, staticRenderFns: EditPassword_staticRenderFns }
/* harmony default export */ var components_EditPassword = (EditPassword_esExports);
// CONCATENATED MODULE: ./src/components/EditPassword.vue
var EditPassword_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var EditPassword___vue_template_functional__ = false
/* styles */
var EditPassword___vue_styles__ = null
/* scopeId */
var EditPassword___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var EditPassword___vue_module_identifier__ = null
var EditPassword_Component = EditPassword_normalizeComponent(
  EditPassword,
  components_EditPassword,
  EditPassword___vue_template_functional__,
  EditPassword___vue_styles__,
  EditPassword___vue_scopeId__,
  EditPassword___vue_module_identifier__
)

/* harmony default export */ var src_components_EditPassword = (EditPassword_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/CreatePassword.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CreatePassword = ({
  data: function data() {
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
    addPassword: function addPassword() {
      var _this = this;

      if (this.password.confirmPassword !== this.password.password) {
        this.error = "Password Doesn't match";
        return;
      }
      this.$store.dispatch("addPasswordAPI", {
        website: this.password.website,
        account: this.password.account,
        password: this.password.password
      }).then(function (response) {
        _this.$router.push({
          name: "home",
          params: { message: "Password Created Successfully" }
        });
      }).catch(function (error) {
        if (error.response.status == 401) {
          _this.$router.push({
            name: "logout"
          });
        }
      });
    },
    generatePassword: function generatePassword() {
      var charset = "";
      if (this.addSpecialCharacters) {
        this.charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!£$%^&*()-_=+[]{}#~'@;:?/>.<,";
      } else {
        this.charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      }
      this.generatedPassword = "";
      for (var i = 0, n = this.charset.length; i < this.length; ++i) {
        this.generatedPassword += this.charset.charAt(Math.floor(Math.random() * n));
      }
    }
  },
  created: function created() {
    this.generatePassword();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a5c96e3a","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/CreatePassword.vue
var CreatePassword_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"div-form"},[_c('h2',{staticClass:"heading"},[_vm._v("Add Password")]),_vm._v(" "),(_vm.error!=='')?_c('div',[_c('p',{staticClass:"error"},[_vm._v(_vm._s(_vm.error))])]):_vm._e(),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.addPassword($event)}}},[_c('div',{staticClass:"form-control"},[_c('label',{attrs:{"for":"website"}},[_vm._v("Website")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password.website),expression:"password.website"}],staticClass:"text-input",attrs:{"type":"text","name":"website","required":""},domProps:{"value":(_vm.password.website)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.password, "website", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-control"},[_c('label',{attrs:{"for":"account"}},[_vm._v("Account")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password.account),expression:"password.account"}],staticClass:"text-input",attrs:{"type":"text","name":"acount","required":""},domProps:{"value":(_vm.password.account)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.password, "account", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-control"},[_c('label',{attrs:{"for":"password"}},[_vm._v("Account Password")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password.password),expression:"password.password"}],staticClass:"text-input",attrs:{"type":"password","name":"password","required":""},domProps:{"value":(_vm.password.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.password, "password", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"form-control"},[_c('label',{attrs:{"for":"confirmPassword"}},[_vm._v("Confirm Password")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password.confirmPassword),expression:"password.confirmPassword"}],staticClass:"text-input",attrs:{"type":"password","name":"confirmPassword","required":""},domProps:{"value":(_vm.password.confirmPassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.password, "confirmPassword", $event.target.value)}}})]),_vm._v(" "),_vm._m(0)]),_vm._v(" "),_c('hr',{staticClass:"horizental-seperator"}),_vm._v(" "),_c('h2',{staticClass:"heading"},[_vm._v("Generate a strong random password")]),_vm._v(" "),_c('div',{staticClass:"form-control"},[_c('label',{attrs:{"for":"generatedPassword"}},[_vm._v("Generated")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.generatedPassword),expression:"generatedPassword"}],staticClass:"text-input",attrs:{"type":"text","name":"generatedPassword"},domProps:{"value":(_vm.generatedPassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.generatedPassword=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-control"},[_c('label',{attrs:{"for":"passwordLength"}},[_vm._v("Password Length")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.length),expression:"length"}],staticClass:"text-input",attrs:{"type":"number","name":"passwordLength"},domProps:{"value":(_vm.length)},on:{"input":function($event){if($event.target.composing){ return; }_vm.length=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-control"},[_c('p',{attrs:{"id":"specialCharacters"}},[_vm._v("Include special characters")]),_vm._v(": "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.addSpecialCharacters),expression:"addSpecialCharacters"}],attrs:{"type":"checkbox","name":"includeCharacters"},domProps:{"checked":Array.isArray(_vm.addSpecialCharacters)?_vm._i(_vm.addSpecialCharacters,null)>-1:(_vm.addSpecialCharacters)},on:{"change":function($event){var $$a=_vm.addSpecialCharacters,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.addSpecialCharacters=$$a.concat([$$v]))}else{$$i>-1&&(_vm.addSpecialCharacters=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.addSpecialCharacters=$$c}}}}),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"id":"generatePassword"},on:{"click":_vm.generatePassword}},[_vm._v("Generate")])])])}
var CreatePassword_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-control"},[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"submit"}},[_vm._v("\n          Add\n      ")])])}]
var CreatePassword_esExports = { render: CreatePassword_render, staticRenderFns: CreatePassword_staticRenderFns }
/* harmony default export */ var components_CreatePassword = (CreatePassword_esExports);
// CONCATENATED MODULE: ./src/components/CreatePassword.vue
function CreatePassword_injectStyle (ssrContext) {
  __webpack_require__("c+Nd")
}
var CreatePassword_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var CreatePassword___vue_template_functional__ = false
/* styles */
var CreatePassword___vue_styles__ = CreatePassword_injectStyle
/* scopeId */
var CreatePassword___vue_scopeId__ = "data-v-a5c96e3a"
/* moduleIdentifier (server only) */
var CreatePassword___vue_module_identifier__ = null
var CreatePassword_Component = CreatePassword_normalizeComponent(
  CreatePassword,
  components_CreatePassword,
  CreatePassword___vue_template_functional__,
  CreatePassword___vue_styles__,
  CreatePassword___vue_scopeId__,
  CreatePassword___vue_module_identifier__
)

/* harmony default export */ var src_components_CreatePassword = (CreatePassword_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/DeletePassword.vue
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var DeletePassword = ({
  created: function created() {
    var tempPassword = this.$store.state.passwords[this.$route.params.index];
    this.password = {
      id: tempPassword.id,
      website: tempPassword.website,
      account: tempPassword.account
    };
  },
  data: function data() {
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
    deletePassword: function deletePassword() {
      var _this = this;

      this.$store.dispatch("deletePasswordAPI", this.password.id).then(function (response) {
        _this.$router.push({
          name: "home",
          params: { message: "Password Deleted Successfully" }
        });
      }).catch(function (error) {
        if (error.response.status == 401) {
          _this.$router.push({
            name: "logout"
          });
        }
      });
    },
    cancel: function cancel() {
      this.$router.push({
        name: "home"
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b3c28db6","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/DeletePassword.vue
var DeletePassword_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"div-form"},[_c('h2',{staticClass:"heading"},[_vm._v("Delete Password")]),_vm._v(" "),_c('p',{attrs:{"id":"confirmation"}},[_vm._v("Are you sure you want to delete this password")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger",attrs:{"id":"confirm-delete"},on:{"click":_vm.deletePassword}},[_vm._v("Delete")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"id":"cancel-delete"},on:{"click":_vm.cancel}},[_vm._v("Cancel")])])}
var DeletePassword_staticRenderFns = []
var DeletePassword_esExports = { render: DeletePassword_render, staticRenderFns: DeletePassword_staticRenderFns }
/* harmony default export */ var components_DeletePassword = (DeletePassword_esExports);
// CONCATENATED MODULE: ./src/components/DeletePassword.vue
function DeletePassword_injectStyle (ssrContext) {
  __webpack_require__("s+zG")
}
var DeletePassword_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var DeletePassword___vue_template_functional__ = false
/* styles */
var DeletePassword___vue_styles__ = DeletePassword_injectStyle
/* scopeId */
var DeletePassword___vue_scopeId__ = "data-v-b3c28db6"
/* moduleIdentifier (server only) */
var DeletePassword___vue_module_identifier__ = null
var DeletePassword_Component = DeletePassword_normalizeComponent(
  DeletePassword,
  components_DeletePassword,
  DeletePassword___vue_template_functional__,
  DeletePassword___vue_styles__,
  DeletePassword___vue_scopeId__,
  DeletePassword___vue_module_identifier__
)

/* harmony default export */ var src_components_DeletePassword = (DeletePassword_Component.exports);

// CONCATENATED MODULE: ./src/routes.js








var routes = [{
    path: '/',
    component: src_components_Passwords,
    name: 'home',
    props: true,
    meta: {
        requiresAuth: true
    }
}, {
    path: '/login',
    component: components_auth_Login,
    name: 'login',
    props: true,
    meta: {
        requiresVisitor: true
    }
}, {
    path: '/register',
    component: components_auth_Register,
    name: 'register',
    props: true,
    meta: {
        requiresVisitor: true
    }
}, {
    path: '/logout',
    name: 'logout',
    component: components_auth_Logout,
    meta: {
        requiresAuth: true
    }
}, {
    path: '/edit/:index',
    name: 'edit',
    component: src_components_EditPassword,
    props: true,
    meta: {
        requiresAuth: true
    }
}, {
    path: '/delete/:index',
    name: 'delete',
    component: src_components_DeletePassword,
    props: true,
    meta: {
        requiresAuth: true
    }
}, {
    path: '/create',
    name: 'create',
    component: src_components_CreatePassword,
    props: true,
    meta: {
        requiresAuth: true
    }
}];

/* harmony default export */ var src_routes = __webpack_exports__["a"] = (routes);

/***/ }),

/***/ "i2Ge":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "qwyI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "s+zG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "wtEF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jshashes__ = __webpack_require__("/V0p");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jshashes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jshashes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_simple_crypto_js__ = __webpack_require__("hYIk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_simple_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_simple_crypto_js__);








__WEBPACK_IMPORTED_MODULE_2_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_4_axios___default.a.defaults.baseURL = 'http://18.185.53.150/api';
// axios.defaults.baseURL = 'http://localhost/PasswordsManager/public/api'
__WEBPACK_IMPORTED_MODULE_4_axios___default.a.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
__WEBPACK_IMPORTED_MODULE_4_axios___default.a.defaults.headers.common['Accept'] = 'application/json';

var store = new __WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* default */].Store({
    state: {
        token: localStorage.getItem('access_token') || null,
        passwords: JSON.parse(localStorage.getItem('passwords')) || [],
        key: localStorage.getItem('key') || null
    },
    getters: {
        loggedIn: function loggedIn(state) {
            return state.token !== null && state.key !== null;
        }
    },
    mutations: {
        // Keys
        saveKey: function saveKey(state, key) {
            state.key = key;
        },
        clearKey: function clearKey(state) {
            state.key = null;
        },


        // Tokens
        saveToken: function saveToken(state, token) {
            state.token = token;
        },
        clearToken: function clearToken(state) {
            state.token = null;
        },


        //Passwords
        savePasswords: function savePasswords(state, passwords) {
            state.passwords = passwords;
        },
        clearPasswords: function clearPasswords(state) {
            state.passwords = [];
        },
        addPassword: function addPassword(state, password) {
            state.passwords.push({
                id: password.id,
                website: password.website,
                account: password.account,
                password: password.password
            });
        },
        updatePassword: function updatePassword(state, password) {
            var oldPasswordIndex = state.passwords.findIndex(function (oldPassword) {
                return oldPassword.id == password.id;
            });
            state.passwords[oldPasswordIndex] = password;
        },
        deletePassword: function deletePassword(state, id) {
            var passwordIndex = state.passwords.findIndex(function (password) {
                return password.id == id;
            });
            state.passwords.splice(passwordIndex, 1);
        }
    },

    actions: {
        login: function login(context, credentials) {
            return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_4_axios___default.a.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;
                __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/login', {
                    email: credentials.email,
                    password: credentials.password
                }).then(function (response) {
                    context.dispatch("saveToken", response.data.access_token);
                    context.dispatch("saveKey", new __WEBPACK_IMPORTED_MODULE_5_jshashes___default.a.MD5().hex(password));
                    resolve(response);
                }).catch(function (error) {
                    reject(error);
                });
            });
        },
        register: function register(context, data) {
            return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/register', {
                    name: data.name,
                    email: data.email,
                    password: data.password
                }).then(function (response) {
                    context.dispatch("saveToken", response.data.access_token);
                    context.dispatch("saveKey", new __WEBPACK_IMPORTED_MODULE_5_jshashes___default.a.MD5().hex(password));
                    resolve(response);
                }).catch(function (error) {
                    reject(error);
                });
            });
        },
        logout: function logout(context) {
            return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_4_axios___default.a.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;
                __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/logout').then(function (response) {
                    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.defaults.headers.common['Authorization'] = null;
                    context.dispatch("clearMemory");
                    resolve(response);
                }).catch(function (error) {
                    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.defaults.headers.common['Authorization'] = null;
                    context.dispatch("clearMemory");
                    reject(error);
                });
            });
        },
        clearMemory: function clearMemory(context) {
            context.dispatch("clearToken");
            context.dispatch("clearKey");
            context.dispatch("clearPasswords");
        },
        saveToken: function saveToken(context, token) {
            localStorage.setItem('access_token', token);
            context.commit('saveToken', token);
        },
        clearToken: function clearToken(context) {
            localStorage.removeItem('access_token');
            context.commit('clearToken');
        },
        saveKey: function saveKey(context, key) {
            localStorage.setItem('key', key);
            context.commit('saveKey', key);
        },
        clearKey: function clearKey(context) {
            localStorage.removeItem('key');
            context.commit('clearKey');
        },


        // localStorage and Vuex and Encryption and Decryption
        savePassword: function savePassword(context, password) {
            var simpleCrypto = new __WEBPACK_IMPORTED_MODULE_6_simple_crypto_js___default.a(context.state.key);
            password = {
                id: password.id,
                website: simpleCrypto.decrypt(password.website),
                account: simpleCrypto.decrypt(password.account),
                password: password.password
            };
            context.commit('addPassword', password);
            localStorage.setItem('passwords', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(context.state.passwords));
            chrome.storage.sync.set({ 'passwords': __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(context.state.passwords) });
        },
        savePasswords: function savePasswords(context, passwords) {
            var simpleCrypto = new __WEBPACK_IMPORTED_MODULE_6_simple_crypto_js___default.a(context.state.key);
            var decryptedPasswords = [];
            passwords.forEach(function (element) {
                decryptedPasswords.push({
                    id: element.id,
                    website: simpleCrypto.decrypt(element.website),
                    account: simpleCrypto.decrypt(element.account),
                    password: element.password
                });
            });

            context.commit('savePasswords', decryptedPasswords);
            localStorage.setItem('passwords', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(decryptedPasswords));
            chrome.storage.sync.set({ 'passwords': __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(decryptedPasswords) });
        },
        updatePassword: function updatePassword(context, password) {
            context.commit('deletePassword', password.id);
            context.dispatch('savePassword', password);
        },
        deletePassword: function deletePassword(context, id) {
            context.commit('deletePassword', id);
            localStorage.setItem('passwords', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(context.state.passwords));
            chrome.storage.sync.set({ 'passwords': __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(context.state.passwords) });
        },
        clearPasswords: function clearPasswords(context) {
            localStorage.removeItem('passwords');
            chrome.storage.sync.remove('passwords');
            context.commit('clearPasswords');
        },


        //API
        getPasswordsAPI: function getPasswordsAPI(context) {
            return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_4_axios___default.a.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;
                __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('/passwords').then(function (response) {
                    context.dispatch("savePasswords", response.data);
                    resolve(response);
                }).catch(function (error) {
                    reject(error);
                });
            });
        },
        addPasswordAPI: function addPasswordAPI(context, password) {
            var simpleCrypto = new __WEBPACK_IMPORTED_MODULE_6_simple_crypto_js___default.a(context.state.key);
            return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_4_axios___default.a.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;
                __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/passwords/add', {
                    website: simpleCrypto.encrypt(password.website),
                    account: simpleCrypto.encrypt(password.account),
                    password: simpleCrypto.encrypt(password.password)
                }).then(function (response) {
                    simpleCrypto = null;
                    context.dispatch("savePassword", response.data);
                    resolve(response);
                }).catch(function (error) {
                    simpleCrypto = null;
                    reject(error);
                });
            });
        },
        updatePasswordAPI: function updatePasswordAPI(context, password) {
            var simpleCrypto = new __WEBPACK_IMPORTED_MODULE_6_simple_crypto_js___default.a(context.state.key);
            return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_4_axios___default.a.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;
                __WEBPACK_IMPORTED_MODULE_4_axios___default.a.put('/passwords/edit/' + password.id, {
                    website: simpleCrypto.encrypt(password.website),
                    account: simpleCrypto.encrypt(password.account),
                    password: simpleCrypto.encrypt(password.password)
                }).then(function (response) {
                    simpleCrypto = null;
                    context.dispatch('updatePassword', response.data);
                    resolve(response);
                }).catch(function (error) {
                    simpleCrypto = null;
                    reject(error);
                });
            });
        },
        deletePasswordAPI: function deletePasswordAPI(context, id) {
            return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_4_axios___default.a.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;
                __WEBPACK_IMPORTED_MODULE_4_axios___default.a.delete('/passwords/delete/' + id).then(function (response) {
                    resolve(response);
                    context.dispatch('deletePassword', id);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.88a44cc4824387f4e494.js.map