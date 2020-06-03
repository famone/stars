<template>
	<section id="services">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 overhidden">
					<h2 class="wow fadeInDown">Ser<span class="violetter">v</span>ices</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-3" v-for="service in services">
					<div class="serv-box wow fadeIn" 
					:style="{'background-image': 'url(' + service.back + ')'}"
					:data-wow-delay="service.delay">
						<div class="icon-circle" :class="{glitch: service.glitch}"" :style="{'backgroundColor': service.iconColor}">
							<img :src="service.icon" alt="">
						</div>
						<h4>{{ service.title }}</h4>
						<p class="white-txt">{{ service.descr }}</p>
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
	export default{
		data(){
			return{
				services: [
					{
						title: 'Video production',
						descr: 'People are 27 times more likely to click on a video than a static image.',
						icon: require('../assets/img/ic1.svg'),
						back: require('../assets/img/ser1.png'),
						iconColor: '#6100FF',
						delay: '.2s'
					},
					{
						title: 'Graphical design ',
						descr: 'We know how hard it can be to work with graphical designers',
						icon: require('../assets/img/ic2.svg'),
						back: require('../assets/img/ser2.png'),
						iconColor: '#6100FF',
						delay: '.4s'
					},
					{
						title: 'Perfomance marketing',
						descr: 'Current or future customer is online! Why dont engage with him or her?',
						icon: require('../assets/img/ic3.svg'),
						back: require('../assets/img/ser3.png'),
						iconColor: '#6100FF',
						delay: '.6s'
					},
					{
						title: 'Challenge us!',
						descr: 'We will try to solve any Your task...',
						icon: require('../assets/img/ic4.svg'),
						back: require('../assets/img/footerbg.jpg'),
						iconColor: '#050710',
						delay: '.8s',
						glitch: true
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
		height: 275px;
	}
	.main-btn{
		margin-top: 20px;
	}

</style>