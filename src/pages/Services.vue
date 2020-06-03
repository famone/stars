<template>
	<div>
		<appInner :pageTitle="pageTitle" :pageBg="pageBg"></appInner>
		<appServperfom></appServperfom>
		<div id="scene5">
			<appServgraph></appServgraph>
			<appChallengeus></appChallengeus>
		</div>
	</div>

</template>

<script>
import Inner from '../components/Inner.vue'	
import Servperfom from '../components/Servperfom.vue'
import Servgraph from '../components/Servgraph.vue'
import Challengeus from '../components/Challengeus.vue'

	export default{
		components: {
			'appInner': Inner,
			'appServperfom': Servperfom,
			'appServgraph': Servgraph,
			'appChallengeus': Challengeus

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