<template>
   <body>
    <noscript>
      <strong>We're sorry but vue-css doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
  <div id="app" v-colored:background="'orange'">
    <h1 v-colored:color.font="'green'">{{message}}</h1>
    <list-comp></list-comp>
        <button-comp v-model = "switched"></button-comp>

<hr>
<div v-if="switched"> Enabled </div>
<div v-if="!switched"> Disabled </div>

     <component
    :is="currentTabComponent"
    ></component>
  </div>
   </body>
</template>

<script>

import './assets/css/dark.scss';
const bg = require('./assets/themeName.js')
import List from './components/List'
import Button from './components/Buttons'

export default {
  name: 'app',
   data() {
    return{
      message: 'Hello, world!',
      switched: false
      // names: ['Ann', 'Vanna', 'Rosa'],
      // searchItems: ''
  }
   },
   components: {
     'listComp': List,
     'buttonComp': Button
   },
  computed: {
    currentTabComponent: () => import(`./components/${bg.color}`),
    namesFiltered: () => this.names
    },
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


