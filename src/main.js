// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Master from './components/layouts/Master'
import { store } from './store/store'
import VueRouter from 'vue-router'
import routes from './routes'

// require('./assets/style/bootstrap.min.css')

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
    routes,
    mode: 'hash',
    base: __dirname,

})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({
                name: 'login',
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (store.getters.loggedIn) {
            next({
                name: 'home',
            })
        } else {
            next()
        }
    } else {
        next()
    }
})


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    store: store,
    components: { Master },
    template: '<Master/>'
})
