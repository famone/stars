<template>
		<section id="cases">
			<div class="container">
				<div class="row case-row" v-for="caseItem in cases" v-if="caseItem.hashTags.includes(changeFilter) || changeFilter == 'All' ">
					<!-- v-if="caseItem.hashTags.includes(n) || n == 'All' " -->
					<div class="col-lg-6">
						<div class="case-over">
							<div class="case-card" >
								<div class="case-img"
								 :style="{'background-image': 'url(' + caseItem.image + ')'}">
								 <img :src="caseItem.logo" class="logo-case fadeIn">
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
</style>