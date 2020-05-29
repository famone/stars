<template>
	<section id="cases">
		<img src="../assets/img/floatplanet.svg" class="floatplanet d-none d-sm-none d-lg-block">
		<img src="../assets/img/floatplanet.svg" class="floatplanet2 d-none d-sm-none d-lg-block">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 overhidden">
					<h2 class="wow fadeInDown">C<span class="violetter">a</span>ses</h2> 
				</div>
			</div>

			<div class="row case-row" v-for="caseItem in cases.slice(0, 2)">
				<div class="col-lg-6">
					<div class="case-over">
						<div class="case-card wow" data-wow-delay=".2s">
							<div class="case-img wow" data-wow-delay=".8s"
							 :style="{'background-image': 'url(' + caseItem.image + ')'}">
							 <img :src="caseItem.logo" class="logo-case wow fadeIn" data-wow-delay=".8s">
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<p class="case-sphere">{{ caseItem.sphere }}</p>
					<h3>{{ caseItem.name }}</h3>
					<p class="black-txt">{{ caseItem.descr }}</p>
					<div class="hastags">
						<div class="hash" v-for="hash in caseItem.hashTags"><span>#</span>{{ hash }}</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12">
					<router-link tag="a" to="/cases">
						<button class="main-btn"><span>SHOW ALL CASES</span></button>
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
				cases: null
			}
		},
		mounted(){
			const scene2 = this.$scrollmagic.scene({
				triggerElement: '#services',
			    triggerHook: 0,
			    duration: '100%'
			})

			.setTween('.floatplanet', { 
		      css: { 
		        transform: 'rotate(30deg)',
		        top: '5%'
		      }
		    })

		    this.$scrollmagic.addScene(scene2)
		},
		created(){
			this.cases = this.$store.getters.getCases
		}

	}
</script>

<style>

.floatplanet{
	position: absolute;
	left: -12%;
	top: -15%;
	height: 400px;
	transform: rotate(0);
}
.floatplanet2{
	position: absolute;
	right: -10%;
	bottom: -10%;
	height: 400px;
}
</style>