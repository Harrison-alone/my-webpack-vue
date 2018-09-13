<template>
	<div id="app">
		<div>
			{{ data }}
		</div>
		<router-view></router-view>
	</div>
</template>


<script>
export default {
	data () {
		return {
			data: '我是首页'
		}
	}
}
</script>

<style scoped>
#app {
	color: red;
}
</style>
