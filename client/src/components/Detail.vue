<template>

  <na-v />
  <div class="info">
    <table>
      <tr>
        <td>Initial link:<a v-bind:href="inLink" target="_blank" rel="noopener noreferrer">{{inLink}}</a>  </td>
      </tr>

      <td>Shortened link: <a :href="shortLink" target="_blank" rel="noopener noreferrer" >{{shortLink}}</a> </td>

      <tr>
        <td>Clicks: <strong> {{click}}</strong> </td>
      </tr>
      <td> Date:<strong> {{date}}</strong> </td>
    </table>
  </div>




</template>

<script>

import NaV from "@/components/navbar";
import axios from "axios";

export default {
  name: "De-tail",
  components: {
    NaV
  },
  data() {
    return {
      inLink:[],
      shortLink:[],
      date:'',
      click:''
    }
  },

  mounted() {
    const url = window.location.href;
    const id = url.split("/").slice(-1)[0];
    const token = window.localStorage.getItem('token')
    try {
      const res = axios.get(`http://localhost:5000/auth/link/${id}`,{headers: {authorization: token }} )
          .then(response=>{
            this.inLink = response.data.from
            this.shortLink = response.data.to
            this.date = new Date(response.data.date).toLocaleDateString()
            this.click = response.data.clicks
          })

      console.log(res)
    }
    catch (e) {
      console.log(e)
    }


  }

}
</script>

<style scoped>
.info{
  color: aliceblue;
}
</style>