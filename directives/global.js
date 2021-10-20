import Vue from 'vue'

const update = (el, { value }) => {
  // eslint-disable-next-line prefer-regex-literals
  const regExpCleaner = new RegExp('(<span style="background:yellow">|</span>)', 'ig')
  const regExpReplace = new RegExp(`${value.highlight}`, 'ig')
  const slicedText = (el.innerHTML.match(regExpReplace) || [''])[0]

  if (slicedText) {
    el.innerHTML = el.innerHTML.replaceAll(regExpCleaner, '')
    el.innerHTML = el.innerHTML.replaceAll(regExpReplace, `<span style="background:yellow">${slicedText}</span>`)
  }
}

Vue.directive('highlight', {
  inserted: update
})
