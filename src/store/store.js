import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Hashes from 'jshashes'
import SimpleCrypto from "simple-crypto-js";

Vue.use(Vuex)
axios.defaults.baseURL = process.env.baseURL
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Accept'] = 'application/json'

export const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('access_token') || null,
        passwords: JSON.parse(localStorage.getItem('passwords')) || [],
        key: localStorage.getItem('key') || null
    },
    getters: {
        loggedIn(state) {
            return state.token !== null && state.key !== null
        },
    },
    mutations: {
        // Keys
        saveKey(state, key) {
            state.key = key
        },
        clearKey(state) {
            state.key = null
        },

        // Tokens
        saveToken(state, token) {
            state.token = token
        },
        clearToken(state) {
            state.token = null
        },


        //Passwords
        savePasswords(state, passwords) {
            state.passwords = passwords
        },
        clearPasswords(state) {
            state.passwords = []
        },
        addPassword(state, password) {
            state.passwords.push({
                id: password.id,
                website: password.website,
                account: password.account,
                password: password.password
            })
        },
        updatePassword(state, password) {
            const oldPasswordIndex = state.passwords.findIndex((oldPassword => oldPassword.id == password.id))
            state.passwords[oldPasswordIndex] = password
        },
        deletePassword(state, id) {
            const passwordIndex = state.passwords.findIndex((password => password.id == id))
            state.passwords.splice(passwordIndex, 1)
        },
    },

    actions: {
        login(context, credentials) {
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
                axios.post('/login', {
                    email: credentials.email,
                    password: credentials.password,
                }).then(response => {
                    context.dispatch("saveToken", response.data.access_token)
                    context.dispatch("saveKey", new Hashes.MD5().hex(password))
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        register(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('/register', {
                    name: data.name,
                    email: data.email,
                    password: data.password
                })
                    .then(response => {
                        context.dispatch("saveToken", response.data.access_token)
                        context.dispatch("saveKey", new Hashes.MD5().hex(password))
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        logout(context) {
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
                axios.post('/logout').then(response => {
                    axios.defaults.headers.common['Authorization'] = null
                    context.dispatch("clearMemory")
                    resolve(response)
                })
                    .catch(error => {
                        axios.defaults.headers.common['Authorization'] = null
                        context.dispatch("clearMemory")
                        reject(error)
                    })
            })
        },

        clearMemory(context) {
            context.dispatch("clearToken")
            context.dispatch("clearKey")
            context.dispatch("clearPasswords")
        },

        saveToken(context, token) {
            localStorage.setItem('access_token', token)
            context.commit('saveToken', token)
        },
        clearToken(context) {
            localStorage.removeItem('access_token')
            context.commit('clearToken')
        },

        saveKey(context, key) {
            localStorage.setItem('key', key)
            context.commit('saveKey', key)
        },
        clearKey(context) {
            localStorage.removeItem('key')
            context.commit('clearKey')
        },

        // localStorage and Vuex and Encryption and Decryption
        savePassword(context, password) {
            let simpleCrypto = new SimpleCrypto(context.state.key);
            password = {
                id: password.id,
                website: simpleCrypto.decrypt(password.website),
                account: simpleCrypto.decrypt(password.account),
                password: password.password
            }
            context.commit('addPassword', password)
            localStorage.setItem('passwords', JSON.stringify(context.state.passwords))
            chrome.storage.sync.set({ 'passwords': JSON.stringify(context.state.passwords) })
        },
        savePasswords(context, passwords) {
            let simpleCrypto = new SimpleCrypto(context.state.key);
            let decryptedPasswords = [];
            passwords.forEach(element => {
                decryptedPasswords.push({
                    id: element.id,
                    website: simpleCrypto.decrypt(element.website),
                    account: simpleCrypto.decrypt(element.account),
                    password: element.password
                });
            });

            context.commit('savePasswords', (decryptedPasswords))
            localStorage.setItem('passwords', JSON.stringify(decryptedPasswords))
            chrome.storage.sync.set({ 'passwords': JSON.stringify(decryptedPasswords) })
        },
        updatePassword(context, password) {
            context.commit('deletePassword', password.id)
            context.dispatch('savePassword', password)
        },
        deletePassword(context, id) {
            context.commit('deletePassword', id)
            localStorage.setItem('passwords', JSON.stringify(context.state.passwords))
            chrome.storage.sync.set({ 'passwords': JSON.stringify(context.state.passwords) })
        },
        clearPasswords(context) {
            localStorage.removeItem('passwords')
            chrome.storage.sync.remove('passwords')
            context.commit('clearPasswords')
        },



        //API
        getPasswordsAPI(context) {
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
                axios.get('/passwords').then(response => {
                    context.dispatch("savePasswords", response.data)
                    resolve(response)
                })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        addPasswordAPI(context, password) {
            let simpleCrypto = new SimpleCrypto(context.state.key);
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
                axios.post('/passwords/add', {
                    website: simpleCrypto.encrypt(password.website),
                    account: simpleCrypto.encrypt(password.account),
                    password: simpleCrypto.encrypt(password.password),
                })
                    .then(response => {
                        simpleCrypto = null
                        context.dispatch("savePassword", response.data)
                        resolve(response)
                    })
                    .catch(error => {
                        simpleCrypto = null
                        reject(error)
                    })
            })
        },
        updatePasswordAPI(context, password) {
            let simpleCrypto = new SimpleCrypto(context.state.key);
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
                axios.put('/passwords/edit/' + password.id, {
                    website: simpleCrypto.encrypt(password.website),
                    account: simpleCrypto.encrypt(password.account),
                    password: simpleCrypto.encrypt(password.password),
                }).then(response => {
                    simpleCrypto = null
                    context.dispatch('updatePassword', response.data)
                    resolve(response)
                })
                    .catch(error => {
                        simpleCrypto = null
                        reject(error)
                    })
            })
        },
        deletePasswordAPI(context, id) {
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
                axios.delete('/passwords/delete/' + id)
                    .then(response => {
                        resolve(response)
                        context.dispatch('deletePassword', id)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
    }
})
