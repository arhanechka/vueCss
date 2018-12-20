<template>
   <body>
    <noscript>
      <strong>We're sorry but vue-css doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
  <div id="app" v-colored:background="'green'">
    <h1 v-colored:color.font="'red'">{{message}}</h1>
    <!-- <global-comp></global-comp> -->
     <component
    :is="currentTabComponent"
    ></component>
  </div>
   </body>
</template>

<script>

import './assets/css/dark.scss';
const bg = require('./assets/themeName.js')
import Dark from './components/Dark'
import Arange from './components/Arange'
import Light from './components/Light'


export default {
  name: 'app',
   data() {
    return{
      message: 'Hello, world!'
  }
   },
  components: {
    'dark': Dark,
    'arange': Arange,
    'light': Light,
    },
  computed: {
    currentTabComponent: function () {
      return `${bg.color}`
    }
  }
  // created(){
//  console.log(bg.color)
    // this.theme = "./assets/css/_vars_"+bg.color
  // console.log( theme())
// }
}
</script>
//  <style lang="scss">

//  @import './assets/css/dark.scss';

 
//  body {
//    background: $background-color
//  }
// //  .tasty {
//    background: $background-color2
  
//  }
//   .simple {
//    background: $background-color1
//     }
//   .sky {
//    background: $background-color
//  }
//   h1 {
//     color: $background-color1;
//   }
// </style>


