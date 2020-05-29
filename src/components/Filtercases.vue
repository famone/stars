<template>
	<div>
		<section id="filterBtns" class="wow fadeInUp">
			<div class="container">
				<div class="filter-cases">
					<button v-for="(filter, id) in filterBtns" :class="{acFilter: filter.active === true }" :key="id" v-on:click="activateBtn(id)">
						<span>#</span>{{ filter.name }}</button>
				</div>
			</div>
		</section>

		<!--  -->



		</div>
</template>

<script>
	export default{
		data(){
			return{
				filterBtns: null,
				filterdParam: 'All'
			}
		},
		methods: {
			activateBtn(id){
				
					this.filterBtns.forEach((item)=>{
						item.active = false;
					})

					this.filterBtns[id].active = true
					this.filterdParam = this.filterBtns[id].name
					// передаем значение в стор

					this.$store.dispatch('setFiltered', this.filterdParam)
			}
		},
		created(){
			this.filterBtns = this.$store.getters.getButtons
		}
	}
</script>

<style scoped>
	#filterBtns{
		padding: 50px 0;
	}
	.filter-cases button{
		color: #050710;
		font-size: 20px;
		font-weight: 700;
		padding: 5px 10px;
		background-color: #E2E7E5;
		border-radius: 5px;
		margin-right: 30px;
		margin-bottom: 10px;
		border: none;
		transition: all .3s ease;
		white-space: nowrap;
	}
	.filter-cases button span{
		color: #6100FF;
		transition: all .3s ease;
	}
	.filter-cases .acFilter{
		color: #fff;
		background-color: #161616;
	}
	.filter-cases .acFilter span{
		color: #fff;
	}

</style>