import axios from 'axios'
import router from '../router/index'

const state = { 
    token: localStorage.getItem('token') || '', // fetch the user token from header if present or else set up an empty string
    user:{}, // Stores the user data
    status: ''
};
const getters = {
  
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,

}
const actions = {

}
const mutations = {

}
export default {
    state,
    getters,
    actions,
    mutations
}