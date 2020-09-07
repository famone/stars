<template>
	<div>
		<appInner :pageTitle="pageTitle" :pageBg="pageBg"></appInner>
		<!-- <appServperfom v-for="(serv, index) in servicesAll" :key="index"></appServperfom> -->
		<!-- <div id="scene5">
			<appServgraph></appServgraph>
		</div> -->
		<section id="serv1" v-for="(serv, index) in servicesAll" v-if="serv.id !== 90">
			<div class="container">
				<div class="row">

					<div class="col-lg-5">
						<!-- <swiper ref="mySwiper2" :options="swiperOptions" class="slider2 wow fadeIn">
						    <swiper-slide v-for="servIm in servImg" class="text-center">
						    	<img :src="servIm.img" class="serv-image">
						    </swiper-slide>
	  					</swiper> -->
	  				<!-- 	:style="{'background-image': 'url(' + service.acf.zadnij_fon.url + ')'}" -->
	  					<div class="img-serv" :style="{'background-image': 'url(' + serv.acf.zadnij_fon.url + ')'}"></div>
	  						<!-- <div class="mynav">
	  							<div class="swiper-button-prev" slot="button-prev"></div>
								<div class="swiper-button-next" slot="button-next"></div>
	  						</div> -->
	  					 <router-link tag="a" to="/cases">
	  					 	<div class="examples text-right">
	  					 		<button class="main-btn"><span>SEE EXAMPLES</span></button>
	  					 	</div>
	  					 </router-link>
					</div>

					<div class="col-lg-7">
						<div class="overhidden">
							<h2 class="wow fadeInDown">{{serv.title.rendered}}</h2>
						</div>
						<div class="overhidden">
							<p class="black-txt wow fadeInDown" v-html="serv.content.rendered">
							
							</p>
						</div>
						<hr>
						<div class="overhidden">
							<h4 class="wow fadeInDown">What we do:</h4>
						</div>
						<div class="overhidden">
							<div class="what-do wow fadeInDown">
								<p v-for="whatDo in serv.acf.perechen"><img :src="whatDo.ikonka.url" alt="">{{ whatDo.tekst }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
<div id="scene5">
		<appChallengeus></appChallengeus>
</div>
	</div>

</template>

<script>
import Inner from '../components/Inner.vue'	
import Servperfom from '../components/Servperfom.vue'
import Servgraph from '../components/Servgraph.vue'
import Challengeus from '../components/Challengeus.vue'
import {mapState} from 'vuex'

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
		},
		computed: {
			...mapState('cases', ['servicesAll']),
		}
	}
</script>

<style scoped>
.img-serv{
	height: 620px;
	width: 100%;
	border-radius: 8px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
}

.main-btn{
	padding: 15px 40px;
}
.examples{
	transform: translateX(15px) translateY(-220px);
	position:relative;
	z-index: 10;
}
#serv1{
	padding: 80px 0 0px 0;
}
h4{
	font-weight: 700;
	margin-bottom: 30px;
}
h2{
	font-size: 45px;
}
.swiper-button-prev{
	position: relative;
	left: 0;
	top: 0;
	color: #000;
	margin: 0;
	margin-right: 25px;
	background-image: url(../assets/img/arrow2.svg);
	-webkit-background-size: contain;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	transform: rotate(180deg);
	width: 40px;
}
.swiper-button-next{
	position: relative;
	right: 0;
	top: 0;
	color: #000;
	margin: 0;
	background-image: url(../assets/img/arrow2.svg);
	-webkit-background-size: contain;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	width: 40px;
}
.swiper-button-prev:after, .swiper-button-next:after{
	font-size: 25px;
	content: '';
}
.mynav{
	display: flex;
	justify-content: left;
	align-items: center;
	padding: 25px 0;
}
</style>