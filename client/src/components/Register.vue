<template>

  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
        <span class="fs-4">Url shortener</span>
      </a>
    </header>
  </div>

  <main class="form-signin w-100 m-auto">
    <form @click.prevent="RegisterUser">
      <h1 class="h3 mb-3 fw-normal">Registration</h1>
      <div class="form-floating">

        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="username">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="checkbox mb-3"></div>
      <button class="w-100 btn btn-lg br btn-primary" @click="login">Sign up</button>
      <router-link to="/login" class="nav-link"> <a > Already have an account?</a></router-link>

    </form>
  </main>

</template>

<script>
import router from "../../router/router";

export default {
  name: "App",
  data() {
    return {
      username: "",
      password: "",

    };
  },
  methods: {
    async login() {
      const { username, password } = this;

      const res = await fetch(
          "http://localhost:5000/auth/registration",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              username,
              password,
            }),

          }
      );

      //const data = await res.json();
      //localStorage.setItem( 'token', JSON.stringify(res.data));

      if (res.ok){
        await router.push("/login")
      }
    }
  }
};
</script>

<style scoped>

.nav-link{
  color: #465cff;
  border: 1px solid #1a75ff;

  text-align: center;
  max-width: 440px;
  margin-left: 10px;
  margin-top: 20px;
}

.btn-lg{
  margin: 5px;
}
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>