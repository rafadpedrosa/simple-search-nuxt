import Vue from 'vue'

const update = (el, { value }) => {
  // eslint-disable-next-line prefer-regex-literals
  const regExpCleaner = new RegExp('(<span style="background:yellow">|</span>)', 'g')

  el.innerHTML = el.innerHTML.replaceAll(regExpCleaner, '')
  el.innerHTML = el.innerHTML.replaceAll(value.highlight, `<span style="background:yellow">${value.highlight}</span>`)
}

Vue.directive('highlight', {
  inserted: update,
  componentUpdated: update
})
