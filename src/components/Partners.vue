<template>
	<section id="partners">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="overhidden"><h2 class="wow fadeInUp">Our Partners</h2></div>
					<div class="overhidden">
						<p class="subtitle wow fadeInUp">We inspire ourselves always. This is thr main <span>secret of seccess</span>!</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-3 text-center" v-for="partner in partn">
					<img :src="partner.images.medium" class="partn-logo">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import {mapState} from 'vuex'

	export default{
		computed: {
			...mapState('cases', ['partn']),
		}
	}
</script>

<style scoped>
#partners{
	padding: 80px 0;
	background-color: #050710;
}
h2{
	color: #fff;
	font-size: 45px;
}
.partn-logo{
	margin-bottom: 50px;
}
.subtitle{
	font-size: 22px;
	color: #fff;
	margin-bottom: 40px;
	margin-top: 0;
	text-transform: uppercase;
}
</style>