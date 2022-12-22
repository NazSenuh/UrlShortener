<template>
  <na-v />

<div class="v-table" >
  <div class="v-table__header">
    <p>№</p>
    <p>Original link</p>
    <p>Shortened link</p>
  </div>
  <div class="v-table__body" >
    <div class="v-table__row" v-for="links in data" :key="links.id" >
      <div v-on:click="redirect(links._id)"  class="row row__number"  >Open</div>
      <div class="row row__original">{{links.from}}</div>
      <div class="row row__shortened">{{links.to}}</div>
  </div>
  </div>
</div>


</template>

<script>
import NaV from "@/components/navbar";
import axios from "axios";
import router from "../../router/router";

export default {
  name: "Li-st",
  components: {
    NaV
  },
  data() {
    return{
      data:{}
   }
  },
  methods:{
    redirect(link){
      router.push(`/detail/${link}`)
    }
  },

  mounted() {
    const token = window.localStorage.getItem('token')
    try {
      const res = axios.get(`http://localhost:5000/auth/link/`,{headers: {authorization: token }} )
          .then(response=>{
            this.data = response.data
          })

      res
    }
    catch (e) {
      console.log(e.message)
    }

  }
}

</script>

<style scoped>

.v-table{
  max-width: 1155px;
  margin:0 auto ;
}
.v-table__header{
  display: flex;
  justify-content: space-around;
  border-bottom: solid 1px #1a75ff;
}

.v-table__header p{
  color: gray;
  flex-basis: 25%;
  text-align: left;
}

.v-table__row{
  display: flex;
  justify-content: space-around;
}

.row{
  flex-basis: 25%;
  padding: 8px 16px;
  text-align: left;
  color: aliceblue;
}

</style>