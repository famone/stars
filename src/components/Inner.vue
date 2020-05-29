<template>
	<section id="innerDiv" :style="{'background-image': 'url(' + pageBg + ')'}">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<h1>{{ pageTitle }}</h1>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props: ['pageTitle', 'pageBg']
	}
</script>

<style scoped>
#innerDiv{
		-webkit-background-size: cover;
		background-size: cover;
		background-position: center;
		padding: 180px 0;
}
#innerDiv h1{
		font-size: 60px;
}
</style>