/**
 * 入口文件
 * @authors jp
 * @date    2018-08-08 11:05:18
 */

import Toast from '../packages/toast'
import Loading from '../packages/loading'

const install = function (Vue, config = {}) {
  if (install.installed) return

  Vue.$toast = Vue.prototype.$toast = Toast
  Vue.$Loading = Vue.prototype.$loading = Loading
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
	install,
  Toast,
  Loading
}