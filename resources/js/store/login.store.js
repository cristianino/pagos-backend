import { CURRENT } from "./../config/environments";

const ENV = CURRENT;

const initialState = () => {
  return {
      auth: {
          state: false,
          grantToken: {
              clientSecret: ENV.GRANT_TOKEN.CLIENT_SECRET,
              name: "main",
              id: ENV.GRANT_TOKEN.ID,
              token: null,
              grantType: ENV.GRANT_TOKEN.GRANT_TYPE
          }
      }
  };
};

const state = initialState();

const getters = {
  loggedIn(state) {
      return state.auth.grantToken.token !== null;
  },
  token(state) {
      return state.auth.grantToken.token;
  }
};
const mutations = {
  retrieveToken(state, token) {
      state.auth.grantToken.token = token;
  },
  destroyToken(state) {
      state.auth.grantToken.token = null;
  },
  clearState(state) {
      const _s = initialState();
      Object.keys(_s).forEach(key => {
          state[key] = _s[key];
      });
  }
};
const actions = {
  retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
          axios
              .post(`${ENV.API.URL}api/v1/login`, { // oauth/token`, {
                  client_id: context.state.auth.grantToken.id,
                  client_secret: context.state.auth.grantToken.clientSecret,
                  grant_type: context.state.auth.grantToken.grantType,
                  username: credentials.username,
                  password: credentials.password,
                  scope: ""
              })
              .then(response => {
                  const token = response.data.access_token;
                  context.commit("retrieveToken", token);
                  resolve(response);
              })
              .catch(error => {
                  reject(error);
              });
      });
  },
  destroyToken(context) {
      if (context.getters.loggedIn) {
          const _token = context.state.auth.grantToken.token
          context.commit("clearState");
          return new Promise((resolve, reject) => {
              axios
                  .post(`${ENV.API.URL}api/v1/logout`, "", {
                      headers: {
                          Authorization:
                              "Bearer " + _token
                      }
                  })
                  .then(response => {
                      resolve(response);
                  })
                  .catch(error => {
                      reject(error);
                  });
          });
      }
  },
  clearState({ commit }) {
      commit("clearState");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
