<template>
	<div>
		<transition>
			<div class="mu-toast" v-show="visible" :class="customClass" :style="{ 'padding': iconClass === '' ? '10px' : '20px' }">
				<span class="iconfont" v-if="iconClass !== ''" v-html="iconClass"></span>
				<span :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }" class="ignore">{{ message }}</span>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				visible: false,
				icon: ''
			}
		},
		props: {
			message: String,
			className: {
				type: String,
				default: ''
			},
			position: {
				type: String,
				default: 'middle'
			},
			iconClass: {
				type: String,
				default: ''
			}
		},
		computed: {
			customClass() {
				let classes = []
				switch (this.position) {
					case 'top':
						classes.push('placetop')
						break
					case 'bottom':
						classes.push('placebottom')
						break
					default:
						classes.push('placemiddle')
				}
				classes.push(this.className)

				return classes.join('')
			}
		}
	}
</script>

<style lang="postcss" scoped>
	.mu-toast {
		position: fixed;
		max-width: 80%;
		border-radius: 5px;
		background: rgba(0, 0, 0, 0.7);
		color: #fff;
		box-sizing: border-box;
		text-align: center;
		z-index: 1000;
		transition: opacity .3s linear;
		& .iconfont {
			display: block;
			text-align: center;
			font-size: 96px;
		}
		& span.ignore {
		  font-size: 14px;
			display: block;
			text-align: center;
		}
	}

	.placetop {
		top: 50px;
		left: 50%;
		transform: translate(-50%, 0);
	}

	.placemiddle {
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.placebottom {
		bottom: 50px;
		left: 50%;
		transform: translate(-50%, 0);
	}
</style>