// store/index.js
import { createStore } from 'vuex';

const isSessionValid = () => {
    const expiryTime = localStorage.getItem('expiryTime');
    return expiryTime && new Date().getTime() < parseInt(expiryTime);
};

const store = createStore({
    state: {
        token: null,
        user: null,
        isAuthenticated: false,
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        SET_AUTH(state, status) {
            state.isAuthenticated = status;
        },
    },
    actions: {
        login({ commit }, payload) {
            if (isSessionValid()) {
                // Session is still valid, perform login
                commit('SET_TOKEN', payload.token);
                // commit('SET_USER', payload.user);
                commit('SET_AUTH', true);
            } else {
                // Session expired, force logout
                localStorage.removeItem('token');
                localStorage.removeItem('expiryTime');
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
                commit('SET_AUTH', false);
            }
        },
        logout({ commit }) {
            localStorage.removeItem('token');
            localStorage.removeItem('expiryTime');
            commit('SET_TOKEN', null);
            commit('SET_USER', null);
            commit('SET_AUTH', false);
        },
        refreshSession({ commit }) {
            if (isSessionValid()) {
                commit('SET_AUTH', true);
            } else {
                commit('SET_AUTH', false);
            }
        },
    },
    getters: {
        isAuthenticated: (state) => state.isAuthenticated,
        getToken: (state) => state.token,
        getUser: (state) => state.user,
    },
});

export default store;
