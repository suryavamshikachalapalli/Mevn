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
    user: state => state.user

}
const actions = {
    /** LOGIN USER ACTION ROUTE */
    async login({ 
        commit},                
        user){
        commit('auth_request');
        
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
        
            
    },
    /** REGISTRATION ACTION ROUTE */
    async register({ /** register api */
        commit
    }, userData){
        try{
            commit('register_request')
            let res = await axios.post('http://localhost:3000/api/users/register', userData)
            if(res.data.success !== undefined){
                commit('register_success');
            }
            return res;
        }catch(err){
            commit('register_error',err)
        }
        },
       
    /** LOGOUT */
    async logout({commit}){
        await localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.commit['Authorization'];
        router.push('/login')
        return
    },
    /** Dashboard */
    async getDashboard({commit}){
        commit('dashboard_request');
        let res = await axios.get('http://localhost:3000/api/users/dashboard')
        commit('user_dashboard', res.data.user)
        return res;

    }

};
const mutations = {
auth_request(state){ /** Login */
    state.status = 'loading'
},
auth_success(state, token, user){ 
    state.token = token
    state.user = user
    state.status = 'success'
},
register_request(state){ /** Register */
    state.status = 'loading'
},
register_success(state){
    state.status = 'success'
},
logout(state){
    state.status = ''
    state.token = ''
    state.user = ''
},
dashboard_request(state){
    state.status = 'loading'
},
user_dashboard(state, user){
    state.user = user
}

};
export default {
    state,
    getters,
    actions,
    mutations
}