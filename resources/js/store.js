import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

import LoginStore from "./store/login.store";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
    storage: localStorage
});

export default new Vuex.Store({
    state: {
        app: {
            name: "Pagos Wupo"
        }
    },
    getters: {
        appName(state) {
            return state.app.name;
        }},
    mutations: {},
    actions: {
        clearStore({ dispatch }) {
            dispatch("login/clearState", null, { root: true });
        },
    },
    modules: {
        login: LoginStore,
    },
    plugins: [vuexPersist.plugin]

});
