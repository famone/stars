<template>
	<div>
		<div id="scene">
		<appInner :pageTitle="pageTitle" :pageBg="pageBg"></appInner>
	<appAboutbgg></appAboutbgg>
	</div>
		<appImprove></appImprove>
		<appTeam></appTeam>
		<appBackstage></appBackstage>
		<appPartners></appPartners>
	</div>
	
</template>

<script>
import Inner from '../components/Inner.vue'	
import Aboutbgg from '../components/Aboutbgg.vue'
import Improve from '../components/Improve.vue'
import Team from '../components/Team.vue'
import Backstage from '../components/Backstage.vue'
import Partners from '../components/Partners.vue'

	export default{
		components: {
			'appInner': Inner,
			'appAboutbgg': Aboutbgg,
			'appImprove': Improve,
			'appTeam': Team,
			'appBackstage': Backstage,
			'appPartners': Partners
		},
		data(){
			return{
				pageTitle: 'About us',
				pageBg: require('../assets/img/inner1.png')
			}
		}
	}
</script>

<style>
	
</style>