// store/index.js
import { createStore } from 'vuex';

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
            commit('SET_TOKEN', payload.token);
            commit('SET_USER', payload.user);
            commit('SET_AUTH', true);
        },
        logout({ commit }) {
            commit('SET_TOKEN', null);
            commit('SET_USER', null);
            commit('SET_AUTH', false);
        },
    },
    getters: {
        isAuthenticated: (state) => state.isAuthenticated,
        getToken: (state) => state.token,
        getUser: (state) => state.user,
    },
});

export default store;
