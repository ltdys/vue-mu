/*
 * loading加载符
 * @Author: jp
 * @Date: 2018-09-05 09:46:22
*/

import Vue from 'vue'
import Loading from './loading.vue'

const LoadingConstructor = Vue.extend(Loading)

Vue.directive('mu-loading', {
  update: function (el, binding) {
    if (binding.oldValue !== binding.value) {
      const options = {}
      options.fullScreen = binding.modifiers.fullscreen
      if (options.fullScreen) {
        options.top = 0
        options.left = 0
        options.width = '100%'
        options.height = '100%'
      } else {
        ['top', 'left'].forEach((property) => {
          let scroll = property === 'top' ? 'scrollTop' : 'scrollLeft'
          options[property] = el.getBoundingClientRect()[property] +
          document.body[scroll] +
          document.documentElement[scroll] +
          'px'
        });
        ['height', 'width'].forEach((property) => {
          options[property] = el.getBoundingClientRect()[property] + 'px'
        })
      }
      var component = new LoadingConstructor({
        data: options
      }).$mount()
      let node = document.querySelector('.mu-loading')
      if (node && node.parentNode) {
        node.parentNode.removeChild(node)
      }
      if (binding.value === true) {
        document.querySelector('body').appendChild(component.$el)
      } else {
        let node = document.querySelector('.mu-loading')
        if (node && node.parentNode) {
          node.parentNode.removeChild(node)
        }
      }
    }
  }
})

export default Loading
