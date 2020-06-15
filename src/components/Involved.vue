<template>
	<section id="involved">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<h2><img src="../assets/img/react.svg" class="h2-icon">Services and processes involved:</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<div class="overhidden">
							<div class="what-do wow fadeInDown">
								<p v-for="inv in involved"><img :src="inv.icon.url" alt="">{{ inv.name }}</p>
							</div>
						</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		props: ['involved'],
		data(){
			return{
				smalllight: require('../assets/img/smalllight2.svg')
			}
		}
	}
</script>

<style scoped>
#involved{
	background-color: #161616;
	padding:100px 0;
}
h2{
	font-size: 45px;
	color: #fff;
}
#involved .what-do p{
	color: #fff;
	font-size: 16px;
}
</style>