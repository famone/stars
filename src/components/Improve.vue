<template>
	<section id="improve">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="overhidden">
						<h2 class="wow fadeInUp">How we can improve your <br> buisness</h2>
					</div>
				</div>
			</div>
			<div class="devider">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div class="row icons">
				<div class="col-lg-3" v-for="improve in improves">
					<div class="icon-circle">
						<img :src="improve.icon" alt="">
					</div>
					<p class="white-txt">{{ improve.title }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				improves:[
					{
						icon: require('../assets/img/ic3.svg'),
						title: 'We know how hard it can be to work with graphical designers'
					},
					{
						icon: require('../assets/img/ic3.svg'),
						title: 'We know how hard it can be to work with graphical designers'
					},
					{
						icon: require('../assets/img/ic3.svg'),
						title: 'We know how hard it can be to work with graphical designers'
					},
					{
						icon: require('../assets/img/ic3.svg'),
						title: 'We know how hard it can be to work with graphical designers'
					}
				]
			}
		},
		mounted(){
			const scene5 = this.$scrollmagic.scene({
				triggerElement: '#aboutbg2',
			    triggerHook: 0,
			    offset: '90%',
			    duration: '100%'
			})

			.setTween('.devider', { 
		      css: { 
		      	width: '100%'
		      }
		    })

		    this.$scrollmagic.addScene(scene5)
		}
	}
</script>

<style scoped>
#improve{
	background-color: #161616;
	padding: 120px 0;
}
h2{
	color: #fff;
	font-size: 45px;
}
.icons{
	margin-top: 40px;
}
.icon-circle{
	left: 0;
	top: 0;
	margin-bottom: 40px;
	position: relative;
}
.devider{
	width: 0%;
	height: 1px;
	background-color: #fff;
	transform: translateY(135px);
	display: flex;
	justify-content: left;
	align-items: center;
}
.devider span{
	height: 5px;
	width: 5px;
	border-radius: 20px;
	background-color: #fff;
	margin-right: 270px;
}
</style>