<template>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/new" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span class="fs-4">Url Shortener</span>
      </a>

      <ul class="nav nav-pills">
        <router-link to="/home"  class="nav-item" style="text-decoration: none; color: inherit"><a  class="nav-link active" aria-current="page">Home</a></router-link>
        <router-link to="/new"  class="nav-item"  style="text-decoration: none; color: inherit"><a  class="nav-link">New</a></router-link>
        <router-link to="/list"  class="nav-item" style="text-decoration: none; color: inherit"><a  class="nav-link">List</a></router-link>
      </ul>
    </header>
  </div>


</template>

<script>
export default {
  name: "Na-v",
}
</script>

<style scoped>

.nav-scroller .nav {
  text-decoration: none;
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>