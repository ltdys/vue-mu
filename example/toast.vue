<template>
	<div>
		<span @click="toast">点击弹出信息</span><br>
	  <span @click="toastTop">点击显示在顶部的信息</span><br>
		<span @click="toastIcon">点击显示带icon的信息</span>
	</div>
</template>

<script>
  import { Toast } from '@/index'	

	export default {
		data () {
		  return {
				iconClass: '&#xe60c;'
			}
		},
		methods: {
			toast () {
				Toast({
					message: '提示信息',
					duration: 3000
				})
			},
			toastTop () {
				Toast({
					message: '提示信息',
					position: 'top'
				})
			},
			toastIcon () {
				Toast({
					message: '提示信息',
					iconClass: '&#xe626;'
				})
			}
		}
	}
</script>