<template>
	<div>
		<!-- <p>{{getCaseitem(itemSlug)}}</p> -->
		<div id="scenecase">
			<appCaseinner :caseTitle="getCaseitem(itemSlug).title.rendered"
			:logo="getCaseitem(itemSlug).logo"
			:caseBg="getCaseitem(itemSlug).acf.background"
			:hashs="getCaseitem(itemSlug).hashTags"
			:shades="getCaseitem(itemSlug).acf.shades.url"
			:sphere="getCaseitem(itemSlug).acf.sphere"></appCaseinner>

<appMaintask :maintask="getCaseitem(itemSlug).acf.mainTask"></appMaintask>

		</div>
		<appInvolved :involved="getCaseitem(itemSlug).acf.services_and_processes_involved"></appInvolved>
		<appResults :results="getCaseitem(itemSlug).acf.results"
		:resImgs="getCaseitem(itemSlug).acf.resultsImg"
		:bigcase="getCaseitem(itemSlug).acf.bigcase.url"></appResults>

	</div>
</template>

<script>
import Inner from '../components/Inner.vue'	 
import Caseinner from '../components/Caseinner.vue'
import Maintask from '../components/Maintask.vue'
import Involved from '../components/Involved.vue'
import Results from '../components/Results.vue'

import {mapGetters} from 'vuex'
import {mapState} from 'vuex'

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
				itemSlug: ''
			}
		},
		computed: {
			...mapGetters('cases', ['getCaseitem']),
			getRouteCase(){
				return this.caseItem
			}
		},
		created(){
			this.itemSlug = this.$route.params.id
			
			let id = this.$route.params.id
			
		}
	}
</script>

<style>
	
</style>