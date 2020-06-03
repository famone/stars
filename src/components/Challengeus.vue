<template>
	<section id="challengeus">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="challenge-row">
						<img src="../assets/img/aster.png" class="asteroid d-none d-sm-block">
						<div class="col-lg-6 offset-lg-6">
							<h2 class="wow fadeInDown">Challenge us!</h2>
						<p class="black-txt wow fadeInDown">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae recusandae necessitatibus itaque officiis dicta architecto eveniet, fugit nostrum sapiente
						</p>
						<button class="get-contact d-none d-sm-block" @click="showModal()"><span>Get contact</span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		methods:{
			showModal(){
				this.$store.dispatch('setModal', true)
			}
		},
		mounted(){
			 const scene5 = this.$scrollmagic.scene({
				triggerElement: '#scene5',
			    triggerHook: 0,
			    offset: 200,
			    duration: '100%'
			})

			.setTween('.asteroid', { 
		      css: { 
		      	top: '50%'
		      }
		    })

		    this.$scrollmagic.addScene(scene5)
		}
	}
</script>

<style scoped>
#challengeus{
	padding: 140px 0;
	background-color: #161616;
}	
.challenge-row{
	padding: 40px 20px;
	background-image: url(../assets/img/chlus.jpg);
	-webkit-background-size: cover;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 5px;
	position: relative;
}
h2{
	font-size: 45px;
	color: #fff;
}
.black-txt{
	color: #fff;
}
.asteroid{
	height: 90%;
	position:absolute;
	left: 2%;
	top: -10%;
}
</style>