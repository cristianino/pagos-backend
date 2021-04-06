<template>
  <router-view></router-view>
</template>

<script>
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
  computed: {},
};
</script>
<style lang="scss" scoped>
    @import "../sass/app.scss";
</style>
