<template>
		<section id="cases">
			<div class="container">
				<div class="row case-row">
					<div class="col-lg-4 col-sm-6 col-md-6" v-for="caseItem in cases" v-if="caseItem.hashTags.includes(changeFilter) || changeFilter == 'All' ">
						<div class="case-over" v-tilt="{speed: 1000, perspective: 1200}">
							<div class="case-card" >
								<div class="case-img"
								 :style="{'background-image': 'url(' + caseItem.image + ')'}">
								 <img :src="caseItem.logo" class="logo-case fadeIn">
								</div>
							</div>
						</div>
						
							<h3>{{ caseItem.name }}</h3>
						<div class="hastags">
							<div class="hash" v-for="hash in caseItem.hashTags"><span>#</span>{{ hash }}</div>
						</div>
					</div>
				</div>
			</div>
		</section>
</template>

<script>
	export default{
		data(){
			return{
				cases: null,
				n: null
			}
		},
		computed: {
			changeFilter(){
				this.n = this.$store.getters.getFiltered 

				return this.n
			}
		},
		created(){
			this.cases = this.$store.getters.getCases
		}
	}
</script>

<style scoped>
#cases{
	padding: 30px 0;
}
h3{
	font-size: 30px;
}
.hastags{
	margin-bottom: 20px;
}
.logo-case{
	transform: translateZ(40px);
	max-width: 80%;
	transform: translateZ(20px);
}
</style>