import Vue from 'vue'

Vue.directive('focus', {
  inserted: (el) => {
    debugger
    console.log(el.style)
  }
})
