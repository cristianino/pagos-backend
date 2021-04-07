<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Acceso</div>

          <div class="card-body">
            <div class="form-group row">
              <label for="email" class="col-md-4 col-form-label text-md-right"
                >Correo</label
              >

              <div class="col-md-6">
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  name="email"
                  required
                  autocomplete="email"
                  autofocus
                  v-model="username"
                />
              </div>
            </div>

            <div class="form-group row">
              <label
                for="password"
                class="col-md-4 col-form-label text-md-right"
                >Contraseña</label
              >

              <div class="col-md-6">
                <input
                  id="password"
                  type="password"
                  class="form-control"
                  name="password"
                  required
                  autocomplete="current-password"
                  v-model="password"
                />
              </div>
            </div>

            <div class="form-group row mb-0">
              <div class="col-md-8 offset-md-4">
                <button class="btn btn-primary" @click="login">Acceder</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    username: null,
    password: null,
    loading: false,
    rules: {
      required: (value) => !!value || "Campo requerido",
      email: (value) => {
        if (value) {
          if (value.length > 0) {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || "Es necesario un correo valido.";
          }
        }
        return "";
      },
    },
    error: null,
  }),
  methods: {
    login() {
      this.error = null;
      this.loading = true;
      this.$store
        .dispatch("login/retrieveToken", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          this.loading = false;
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          this.loading = false;
          if (error.response.data) {
            this.error = error.response.data;
          } else {
            //this.error = this.$tr("login.error.invalidLogin");
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "Login";
</style>
