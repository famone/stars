<template>
	<section id="contacts">
		<appParticles></appParticles>
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<h1>Contacts</h1>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-6" v-for="contact in pageContacts">
					<div class="contact-box text-center">
						<div class="icon-circle">
							<img :src="contact.icon" alt="">
						</div>
						<p class="case-sphere">{{ contact.title }}</p>
						<a :href="contact.link" class="contact-link">{{ contact.linkText }}</a>
					</div>
				</div>
			</div>

		</div>
	</section>
</template>

<script>
import {mapState} from 'vuex'
import Particles from '../components/Particles.vue'

	export default{
		components: {
			'appParticles': Particles
		},
		computed: {
			...mapState('datas', ['pageContacts']),
		}
	}
</script>

<style scoped>

h1{
  font-size:60px;
  margin-bottom: 90px;
}
.contact-box{
	background-color: #161616;
	border-radius: 5px;
	padding: 45px 25px;
	margin-bottom: 50px;
}
.icon-circle{
	height: 80px;
	width: 80px;
	left: calc(50% - 40px);
	border: 5px #050710 solid;
}
.case-sphere{
	margin: 20px 0;
}
.contact-link{
	color: #fff;
	font-size: 20px;
	font-weight: 700;
	transition: all .3s ease;
}
</style>