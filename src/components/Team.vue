<template>
	<section id="team">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="overhidden">
						<h2 class="wow fadeInUp">Our <span class="violetter">Team</span></h2>
					</div>
					<div class="overhidden">
						<p class="subtitle wow fadeInUp">We inspire ourselves always. This is thr main <span>secret of seccess</span>!</p>
					</div>
				</div>
			</div>
			<div class="row">
		<div class="col-lg-4 wow fadeInUp employee text-center" v-for="employee in this.$store.getters.getTeam">
					<img :src="employee.images.large" class="team-member">
					<h4>{{ employee.title.rendered }}</h4>
					<p class="pos">{{ employee.content.rendered }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		created(){
			this.$store.dispatch('loadTeam')
		}
	}
</script>

<style scoped>
#team{
	padding: 80px 0;
}
h2{
	font-size: 45px;
}
.subtitle{
	font-size: 22px;
	text-transform: uppercase;
	margin-bottom: 25px;
}
.subtitle span{
	color: #6100FF;
}
.team-member{
	width: 70%;
	margin-bottom: 20px;
}
h4{
	font-weight: 700;
}
.pos{
	color: #6100FF;
}
.employee{
	margin-bottom: 25px;
}	
</style>