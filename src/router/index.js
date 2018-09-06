import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [{
	path: '*',
	component: resolve => require(['../../example/toast.vue'], resolve)
}, {
	path: '/',
	component: resolve => require(['../../example/toast.vue'], resolve)
}, {
	path: '/toast',
	component: resolve => require(['../../example/toast.vue'], resolve)
}, {
	path: '/loading',
	component: resolve => require(['../../example/loading.vue'], resolve)
}]

const router = new Router({
	routes
})

export default router