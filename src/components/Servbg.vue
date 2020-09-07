<template>
	<section id="services">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 overhidden">
					<h2 class="wow fadeInDown">Ser<span class="violetter">v</span>ices</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4" v-for="service in servicesAll">
					<div class="serv-box wow fadeIn" 
					:style="{'background-image': 'url(' + service.acf.zadnij_fon.url + ')'}"
					:data-wow-delay="service.delay">
						<div class="icon-circle" :class="{glitch: service.glitch}"" :style="{'backgroundColor': service.acf.czvet_fona_ikonki}">
							<img :src="service.acf.ikonka.url" alt="">
						</div>
						<h4>{{ service.title.rendered }}</h4>
						<p class="white-txt">{{ service.acf.podzagolovok }}</p>
						<router-link tag="a" to="/services#serv2">
							<button class="read-more">READ MORE<img src="../assets/img/arrow.svg"></button>
						</router-link>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 text-center">
					<router-link tag="a" to="/services">
            			<button class="main-btn"><span>SHOW ALL SERVICES</span></button>
          			</router-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import {mapState} from 'vuex'

	export default{
		computed: {
			...mapState('cases', ['servicesAll']),
		}
	}
</script>

<style scoped>
	h2{
		color: #fff;
		margin-bottom: 90px;
	}
	h4{
		color: #fff;
		font-size: 22px;
		font-weight: 700;
		margin-bottom: 15px;
	}
	.serv-box{
		border-radius: 5px;
		padding: 48px 20px 20px 20px;
		margin-bottom: 50px;
		position:relative;
		height: 275px;
	}
	.main-btn{
		margin-top: 20px;
	}

</style>