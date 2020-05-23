<template>
	<section id="services">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 overhidden">
					<h2 class="wow fadeInDown">Ser<span class="violetter">v</span>ices</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4" v-for="service in services">
					<div class="serv-box wow fadeInUp" :style="{'background-image': 'url(' + service.back + ')'}">
						<div class="icon-circle">
							<img :src="service.icon" alt="">
						</div>
						<h4>{{ service.title }}</h4>
						<p class="white-txt">{{ service.descr }}</p>
						<a href=""><button class="read-more">READ MORE</button></a>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 text-center">
					<router-link tag="a" to="/services">
            			<button class="main-btn">SHOW ALL SERVICES</button>
          			</router-link>
				</div>
			</div>
		</div>
		<video autoplay muted loop id="myVideo">
		  <source src="https://static.nimax.ru/hello/hello.h264.mp4" type="video/mp4">
		</video>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				services: [
					{
						title: 'Video production',
						descr: 'People are 27 times more likely to click on a video than a static image.',
						icon: require('../assets/img/ic1.svg'),
						back: require('../assets/img/ser1.png')
					},
					{
						title: 'Graphical design ',
						descr: 'We know how hard it can be to work with graphical designers',
						icon: require('../assets/img/ic2.svg'),
						back: require('../assets/img/ser2.png')
					},
					{
						title: 'Perfomance marketing',
						descr: 'Current or future customer is online! Why dont engage with him or her?',
						icon: require('../assets/img/ic3.svg'),
						back: require('../assets/img/ser3.png')
					}
				]
			}
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
	}
	.main-btn{
		margin-top: 20px;
	}
	#myVideo{
		position: absolute;
		top: 0;
		left: 0;
		width:100%;
		z-index: -1;
	}
</style>