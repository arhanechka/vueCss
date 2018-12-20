import Vue from 'vue'
import App from './App.vue'
import ColorDirective from './assets/colored'

// import Dark from './components/Dark'
// import Arange from './components/Arange'
// import Light from './components/Light'
// const bg = require('./assets/themeName.js')


Vue.directive('colored', ColorDirective)


// Vue.component('global-comp', bg.color)

new Vue({
  render: h => h(App),
}).$mount('#app')


// import './assets/css/main.scss'
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'


// const requireComponent = require.context(
//   // The relative path of the components folder
//   './components',
//   // Whether or not to look in subfolders
//   false,
//   // The regular expression used to match base component filenames
//   // /Base[A-Z]\w+\.(vue|js)$/
//   `${bg.color}.vue`
// )

// requireComponent.keys().forEach(fileName => {
//   // Get component config
//   const componentConfig = requireComponent(fileName)

//   // Get PascalCase name of component
//   const componentName = upperFirst(
//     camelCase(
//       // Strip the leading `./` and extension from the filename
//       fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
//     )
//   )

  // Register component globally
//   Vue.component(
//     componentName,
//     // Look for the component options on `.default`, which will
//     // exist if the component was exported with `export default`,
//     // otherwise fall back to module's root.
//     componentConfig.default || componentConfig
//   )
// })

// let scssName =`${bg.color}`
// Vue.component('dark-component', {
//   template: '<h1>Dark</h1>',
//     style: `@import './assets/css/vars_${bg.color}.scss`
// })