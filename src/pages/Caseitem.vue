<template>
	<div>
		<div id="scenecase">
			<appCaseinner :caseTitle="caseItem.name"
			:logo="caseItem.logo"
			:caseBg="caseItem.background"
			:hashs="caseItem.hashTags"
			:shades="caseItem.shades"
			:sphere="caseItem.sphere"></appCaseinner>

<appMaintask :maintask="caseItem.mainTask"></appMaintask>

		</div>
		<appInvolved :involved="caseItem.involvedItems"></appInvolved>
		<appResults :results="caseItem.results"
		:resImgs="caseItem.resultsImg"
		:bigcase="caseItem.bigcase"></appResults>
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
				caseItem: null
			}
		},
		created(){
			let id = this.$route.params.id
			 this.caseItem = this.$store.getters.getCaseitem(id)
			console.log({route: this.$route, id: this.$route.params.id})
		}
	}
</script>

<style>
	
</style>