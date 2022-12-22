<template  enctype="multipart/form-data" method="post">
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/login" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span class="fs-4">Url shortener</span>
      </a>
    </header>
  </div>

  <main class="form-signin w-100 m-auto">
    <form @submit.prevent="login">
      <h1 class="h3 mb-3 fw-normal">Login</h1>
      <div class="form-floating">
        <input type="username" class="form-control" placeholder="John Snow" v-model="username">
        <label for="floatingInput">Username</label>
      </div>
      <div class="form-floating">
        <label for="password">Password</label>
        <input type="password" class="form-control" v-model="password" placeholder="Password" >

      </div>

      <div class="checkbox mb-3">
      </div>
      <button class="w-100 btn btn-lg btn-primary"  @click="login">Sign in</button>
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
          "http://localhost:5000/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },

            body: JSON.stringify({
              username,
              password,
            })
          }

    );

      const data = await res.json();
      //console.log(data)
      window.localStorage.setItem('token', data.token)

      if (res.ok){
        await router.push("/home")
      }
    }
  },

};

</script>


<style scoped>

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