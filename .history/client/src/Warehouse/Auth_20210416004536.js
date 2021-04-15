import axios from 'axios'
//import router from '../router/index'


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
    async login({
        commit
    }, user){
        commit('auth_request')
        let res = await axios.post('http://localhost:3000/api/users/login', user)
        if(res.data.success){ /** Get the token and user from the backend */
            const token = res.data.token;
            const user = res.data.user
            /** Store that token into local storage */
            localStorage.setItem('token', token);
            /** set default axios */
            axios.defaults.headers.common['Authorization'] = token;
            commit('auth_success',token, user);
        }
        return res;
    }

}
const mutations = {
auth_request(state){
    state.status = 'loading'
},
auth_success(state, token, user){
    state.token = token
    state.user = user
    state.status = 'success'

}
}
export default {
    state,
    getters,
    actions,
    mutations
}