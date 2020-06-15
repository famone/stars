<template>
		<section id="cases">
			<div class="container">
				<div class="row case-row">
					<!-- v-if="caseItem.hashTags.slug.strtolower.includes(changeFilter) || changeFilter == 'All' " -->
					<div class="col-lg-4 col-sm-6 col-md-6" v-for="caseItem in this.$store.getters.getPosts" v-if="caseItem.hashTags.includes(changeFilter) || changeFilter == 'All' ">
					<router-link tag="a" :to="/cases/ + caseItem.slug">
						<div class="case-over" v-tilt="{speed: 1000, perspective: 1200}">
							<div class="case-card" >
								<div class="case-img"
								 :style="{'background-image': 'url(' + caseItem.images.large + ')'}">
								 <img :src="caseItem.acf.logo.url" class="logo-case fadeIn">
								</div>
							</div>
						</div>
					</router-link>	
						
						<router-link tag="a" :to="/cases/ + caseItem.slug">
							<h3>{{ caseItem.title.rendered }}</h3>
						</router-link>	

						<div class="hastags">
							<div class="hash" v-for="hash in caseItem.cats"><span>#</span>{{ hash.name }}</div>
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
			this.cases = this.$store.getters.getPosts
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