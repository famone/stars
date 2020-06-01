<template>
	<div>
		<appInner :pageTitle="pageTitle" :pageBg="pageBg"></appInner>
		<appServperfom></appServperfom>
		<appServgraph></appServgraph>
	</div>

</template>

<script>
import Inner from '../components/Inner.vue'	
import Servperfom from '../components/Servperfom.vue'
import Servgraph from '../components/Servgraph.vue'

	export default{
		components: {
			'appInner': Inner,
			'appServperfom': Servperfom,
			'appServgraph': Servgraph

		},
		data(){
			return{
				pageTitle: 'Our services',
				pageBg: require('../assets/img/mooninner.jpg')
			}
		}
	}
</script>

<style scoped>
	
</style>