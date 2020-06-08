<template>
	<section id="results">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<h2><img src="../assets/img/cup.svg" class="h2-icon">Results:</h2>
					<div class="results">
						<p class="black-txt" v-for="result in results">
							<img src="../assets/img/smalllight.svg" alt="">{{ result }}</p>
					</div>
					<hr>
					<h6>Check out!</h6>

					<swiper ref="mySwiper5" :options="swiperOptions" class="wow fadeIn">
						    <swiper-slide v-for="resImg in resImgs" class="text-center">
						    	<img :src="resImg.img" class="serv-image">
						    </swiper-slide>
	  					</swiper>
	  						<div class="mynav">
	  							<div class="swiper-button-prev" slot="button-prev"></div>
								<div class="swiper-button-next" slot="button-next"></div>
	  						</div>


				</div>
				<div class="col-lg-6 text-center">
					<img v-lazy="bigcase" class="bigcaseimg">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		props: ['results', 'resImgs', 'bigcase'],
		data(){
			return{
				swiperOptions: {
			        slidesPerView: 1,
			      spaceBetween: 0,
			      draggable: true,
			      loop: true,
			          navigation: {
			            nextEl: '.swiper-button-next',
			            prevEl: '.swiper-button-prev',
			          }
			      },
			}
		},
		computed: {
	  		swiper(){
	        	return this.$refs.mySwiper5.$swiper
	    	}
		},
		mounted() {
		  this.swiper.slideTo(3, 1000, false)
		}
	}
</script>

<style scoped>
#results{
	padding: 100px 0;
	background-color: #fff;
}
h2{
	font-size: 45px;
}
.results{
	display: flex;
    justify-content: left;
    flex-wrap: wrap;
    align-items: center;
}
.results img{
	margin-right: 15px;
}
h6{
	font-size: 22px;
	font-weight: 700;
	color: #050710;
	margin: 25px 0;
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
.bigcaseimg{
	width: 90%;
}
</style>