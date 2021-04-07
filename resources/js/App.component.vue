<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">{{ appName }}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a v-show="isLogin" class="nav-item nav-link active" href="#"
            >Pagos <span class="sr-only">(current)</span></a
          >
          <a v-show="isLogin" class="nav-item nav-link active" href="#"
            >Historicos <span class="sr-only">(current)</span></a
          >
          <a v-show="!isLogin" class="nav-item nav-link active" href="/login"
            >Ingreso <span class="sr-only">(current)</span></a
          >
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "App",
  components: {},
  data() {
    return {
      drawer: true,
      items: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          url: "/",
          roles: [1, 2, 3],
        },
      ],
      color: "white",
      colors: ["primary", "blue", "success", "red", "teal"],
      right: false,
      miniVariant: true,
      expandOnHover: true,
      background: false,
      permanent: true,
    };
  },
  props: {
    source: String,
  },
  computed: {
    ...mapGetters({
      appName: "appName",
      isLogin: "login/loggedIn",
    }),
  },
};
</script>
<style lang="scss" scoped>
@import "../sass/app.scss";
</style>
