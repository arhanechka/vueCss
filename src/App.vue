<template>
  <div v-bind:class="theme" id="app">
    <h1>{{message}}</h1>
  </div>
</template>

<script>
let bg = require('./assets/profile.js');
export default {
  name: 'app',
  
  data() {
    return{
      message: 'Hello, world!',
      theme: 'simple'
    }
  },
  created(){
   
    console.log(bg.color)
    this.theme = bg.color
  }
}
</script>
<style lang="scss">
 @import './assets/css/main';
 body {
   background: $background-body
 }
 .tasty {
   background: $background-color2
  
 }
  .simple {
   background: $background-color1
    }
  .sky {
   background: $background-color
 }
  h1 {
    color: $background-color1;
  }
</style>


