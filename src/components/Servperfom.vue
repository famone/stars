<template>
	<section id="serv1">
			<div class="container">
				<div class="row">

					<div class="col-lg-5">
						<!-- <swiper ref="mySwiper2" :options="swiperOptions" class="slider2 wow fadeIn">
						    <swiper-slide v-for="servIm in servImg" class="text-center">
						    	<img :src="servIm.img" class="serv-image">
						    </swiper-slide>
	  					</swiper> -->
	  				<!-- 	:style="{'background-image': 'url(' + service.acf.zadnij_fon.url + ')'}" -->
	  					<div class="img-serv"></div>
	  						<!-- <div class="mynav">
	  							<div class="swiper-button-prev" slot="button-prev"></div>
								<div class="swiper-button-next" slot="button-next"></div>
	  						</div> -->
	  					 <div class="examples text-right">
	  					 	<button class="main-btn"><span>SEE EXAMPLES</span></button>
	  					 </div>
					</div>

					<div class="col-lg-7">
						<div class="overhidden">
							<h2 class="wow fadeInDown">Perfomance marketing</h2>
						</div>
						<div class="overhidden">
							<p class="black-txt wow fadeInDown">
							
							</p>
						</div>
						<hr>
						<div class="overhidden">
							<h4 class="wow fadeInDown">What we do:</h4>
						</div>
						<div class="overhidden">
							<div class="what-do wow fadeInDown">
								<p v-for="whatDo in whatDos"><img :src="smalllight" alt="">{{ whatDo.title }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
</template>

<script>
	export default{
		props: [''],
		// computed: {
	 //  		swiper(){
	 //        	return this.$refs.mySwiper2.$swiper
	 //    	}
		// },
		// mounted() {
		//   this.swiper.slideTo(3, 1000, false)
		// }
	}
</script>

<style scoped>
.img-serv{
	height: 620px;
	width: 100%;
	border-radius: 8px;
	background-color: #000;
	position: relative;
}

.main-btn{
	padding: 15px 40px;
}
.examples{
	transform: translateX(15px) translateY(-220px);
	position:relative;
	z-index: 99;
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