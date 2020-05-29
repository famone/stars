<template>
	<div>

		    <appMain></appMain>

		    <appAbout></appAbout>

		    <appServ></appServ>

		    <appCases></appCases>

		    
	</div>
</template>

<script>

import Mainbg from '../components/Mainbg.vue'
import Aboutbg from '../components/Aboutbg.vue'
import Servbg from '../components/Servbg.vue'
import Casesbg from '../components/Casesbg.vue'



export default{
	components:{
	'appMain': Mainbg,
    'appAbout': Aboutbg,
    'appServ': Servbg,
    'appCases': Casesbg
  },
  data(){
  	return {
  		react: false
  	}
  }
}

</script>

<style>

</style>