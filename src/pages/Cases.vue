<template>
	<div>
		<appInner :pageTitle="pageTitle" :pageBg="pageBg"></appInner>
		<appFiltercases keep-alive></appFiltercases>
		<appAllcases></appAllcases>
	
			<!-- <div v-for="hash in hashtags" v-if="hash === filtered || filtered == 'All' " class="wow fadeIn">{{ hash }}</div> -->

	</div>
</template>

<script>
import Inner from '../components/Inner.vue'
import Filtercases from '../components/Filtercases.vue'
import Allcases from '../components/Allcases.vue'

	export default{
		components: {
			'appInner': Inner,
			'appFiltercases': Filtercases,
			'appAllcases': Allcases
		},
		data(){
			return{
				pageTitle: 'Our cases',
				pageBg: require('../assets/img/inner2.png'),
				letter: false
			}
		}
	}
</script>

<style scoped>
	
</style>




