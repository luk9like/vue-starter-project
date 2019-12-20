import Vue, { VueConstructor, VNode } from 'vue'
// @ts-ignore
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/etikettentool.scss'
import components from './Components/*.vue'
import MainScreen from './Screens/MainScreen.vue'
import SetupScreen from './Screens/SetupScreen.vue'
import _ from 'lodash'

function camelCaseToDash(myStr: string): string {
  return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
_.each((components as any) as { [name: string]: { default: VueConstructor<Vue> } }, (c, name) => {
  Vue.component(camelCaseToDash(name), c.default)
})

new Vue({
  el: '#mappei-etikettentool',
  data: {
    currentRoute: window.location.pathname
  },
  methods: {
    preloadSite: function() {
      console.log('Loading...')
    }
  },
  beforeMount() {
    this.preloadSite()
  }
  render(createElement): VNode {
    return createElement(SetupScreen)
  }
})