import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

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
    getters: {},
    mutations: {},
    actions: {
    },
    modules: {
    },
    plugins: [vuexPersist.plugin]
});
