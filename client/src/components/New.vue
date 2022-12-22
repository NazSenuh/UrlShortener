<template>
<na-v />

  <div class="group">
    <input type="text" v-model="link" v-on:keyup.enter="press" rel=" stylesheet" >
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>url</label>
  </div>

</template>

<script>
import router from "../../router/router";
import NaV from "@/components/navbar";
export default {
  name: "App",
  components: {
    NaV
  },


  data() {
    return {
      link:''
    };
  },
    methods: {
      async press() {
        const token = window.localStorage.getItem('token')

        const res = await fetch(

            "http://localhost:5000/auth/link/new",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                authorization: token
              },
              body: JSON.stringify({
                  from:this.link
              })
            }
        );

        const data = await res.json();
         if (res.ok){
           await router.push(`/detail/${data.link._id}`)
        }
      }

    },
  };


</script>


<style scoped>

.footer a  { color:#1a75ff; }

.group  {
  position:relative;
  margin-bottom:45px;
}
input {
  display: flex;
  align-items: center;
  margin-left: 24%;
  color: black;
  position: relative;
  margin-top: 100px;
  font-size:20px;
  padding:10px 10px 10px 5px;
  width:800px;
  border:none;
  border-bottom:1px solid #757575;
}
input:focus 		{ outline:none; }

/* LABEL ======================================= */
label 	{
  color:#999;
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:200px;
  top:15px;
  transition:0.2s ease all;
  -moz-transition:0.2s ease all;
  -webkit-transition:0.2s ease all;
}

/* active state */
input:focus ~ label, input:valid ~ label 		{
  top:-20px;
  font-size:14px;
  color:#1a75ff;
  margin-top: 1px;
  display: flex;
  align-items: center;
  margin-left: 10%;
}

/* BOTTOM BARS ================================= */
.bar 	{
  position:relative;
  display:block;
  width:400px;
  margin-top: 1px;
  margin-left: 340px;
}
.bar:before, .bar:after 	{
  content:'';
  height:2px;
  width:0;
  bottom:1px;
  position:absolute;
  display: flex;
  align-items: center;
  background:#1a75ff;
  transition:0.2s ease all;
  -moz-transition:0.2s ease all;
  -webkit-transition:0.2s ease all;
}
.bar:before {
  left:100%;
}
.bar:after {
  right:0%;
}

/* active state */
input:focus ~ .bar:before, input:focus ~ .bar:after {
  width:100%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  margin-top: 1px;
  margin-left: 200px;
  position:absolute;
  height:60%;
  width:600px;
  top:25%;
  left:10px;
  pointer-events:none;
  opacity:0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;

}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
  from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
  from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
  from { background:#5264AE;margin-top: 1px;
    margin-left: 200px; }
  to 	{ width:0; background:transparent; }
}

</style>