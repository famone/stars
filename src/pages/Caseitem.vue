<template>
	<div>
		<div id="scenecase">
			<appCaseinner :caseTitle="caseItem.title.rendered"
			:logo="caseItem.logo"
			:caseBg="caseItem.acf.background"
			:hashs="caseItem.hashTags"
			:shades="caseItem.acf.shades.url"
			:sphere="caseItem.acf.sphere"></appCaseinner>

<appMaintask :maintask="caseItem.acf.mainTask"></appMaintask>

		</div>
		<appInvolved :involved="caseItem.acf.services_and_processes_involved"></appInvolved>
		<appResults :results="caseItem.acf.results"
		:resImgs="caseItem.acf.resultsImg"
		:bigcase="caseItem.acf.bigcase.url"></appResults>

	</div>
</template>

<script>
import Inner from '../components/Inner.vue'	 
import Caseinner from '../components/Caseinner.vue'
import Maintask from '../components/Maintask.vue'
import Involved from '../components/Involved.vue'
import Results from '../components/Results.vue'

	export default{
		components: {
			'appInner': Inner,
			'appCaseinner': Caseinner,
			'appMaintask': Maintask,
			'appInvolved': Involved,
			'appResults': Results
		},
		data(){
			return{
				pageBg: require('../assets/img/inner1.png'),
				caseItem: []
			}
		},
		computed: {
			getRouteCase(){
				return this.caseItem
			}
		},
		created(){
			let id = this.$route.params.id
			 this.caseItem = this.$store.getters.getCaseitem(id)
			console.log(this.$route.params.id)
		}
	}
</script>

<style>
	
</style>