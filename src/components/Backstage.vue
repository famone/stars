<template>
	<section id="bckstage">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 overhidden">
					<h2 class="wow fadeInUp">Take a look at backstages</h2>
				</div>
			</div>
			<div class="row">
				<swiper ref="mySwiper" :options="swiperOptions" class="slider">
				    <swiper-slide v-for="slide in mySlides" class="text-center">
				    	<img :src="slide.img" class="backstage-img">
				    </swiper-slide>
				
				     <div class="swiper-button-prev" slot="button-prev"></div>
					<div class="swiper-button-next" slot="button-next"></div>
				    <div class="swiper-pagination" slot="pagination"></div>
	    
	  			</swiper>
			</div>
		</div>





	</section>
</template>

<script>
	export default{
		data(){
		return {
			swiperOptions: {
			        slidesPerView: 3,
			      spaceBetween: 30,
			      loop: true,
			          pagination: {
			            el: '.swiper-pagination',
			            clickable: true
			          },
			          navigation: {
			            nextEl: '.swiper-button-next',
			            prevEl: '.swiper-button-prev',
			          },
			          breakpoints: {
				        320: {
				          slidesPerView: 1,
				          centeredSlides: true
				        },
				        768: {
				          slidesPerView: 1
				        },
				        1024: {
				          slidesPerView: 3
				        },
				      }
			      },
			      mySlides: [
		  			{
	          			img: require('../assets/img/bck2.png')
	        		},
	        		{
	          			img: require('../assets/img/bck2.png')
	        		},
	        		{
	          			img: require('../assets/img/bck2.png')
	        		},
	        		{
	          			img: require('../assets/img/bck2.png')
	        		},
	  			]
	  		}
		},
		computed: {
	  		swiper(){
	        	return this.$refs.mySwiper.$swiper
	    	}
		},
		mounted() {
		  this.swiper.slideTo(3, 1000, false)
		}
	}
</script>

<style scoped>
.swiper-button-prev:after, .swiper-button-next:after{
	font-size: 25px;
	color: #6100ff;
}
.swiper-pagination-bullets{
	bottom: -5px;
}
.swiper-container{
	padding: 0px 30px;
}
.swiper-button-prev{
	left: -5px;
}
.swiper-button-next{
	right: -5px;
}
#bckstage{
	background-color: #050710;
	padding: 80px 0;
}
h2{
	font-size: 45px;
	color: #fff;
}
.backstage-img{
	width: 100%;
}
</style>