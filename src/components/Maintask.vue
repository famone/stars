<template>
	<section id="maintask">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<h2><img src="../assets/img/taskic.svg" class="h2-icon">Main task:</h2>
					<p class="black-txt">
						{{ maintask }}
					</p>
				</div>
				<div class="col-lg-6 text-center">
					<img src="../assets/img/entrtask.jpg" class="task-img">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		props: ['maintask']
	}
</script>

<style scoped>
#maintask{
	padding: 100px 0;
	background-color: #fff;
}
h2{
	font-size: 45px;
	margin-top: 10%;
}
.task-img{
	width: 90%;
}
</style>