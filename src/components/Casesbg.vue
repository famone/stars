<template>
	<section id="cases">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 overhidden">
					<h2 class="wow fadeInDown">C<span class="violetter">a</span>ses</h2> 
				</div>
			</div>

			<div class="row case-row" v-for="caseItem in cases">
				<div class="col-lg-6">
					<div class="case-over">
						<div class="case-card wow" data-wow-delay=".2s">
							<img :src="caseItem.logo" class="logo-case wow fadeIn" data-wow-delay=".8s">
							<div class="case-img wow" data-wow-delay=".8s"
							 :style="{'background-image': 'url(' + caseItem.image + ')'}">
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
					<button class="main-btn">SHOW ALL CASES</button>
				</div>
			</div>

		</div>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				cases: [
					{
						sphere: 'CASINO',
						name: 'Kings Resort',
						descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae recusandae necessitatibus itaque officiis dicta architecto eveniet.amet, consectetur adipisicing elit.',
						hashTags: ['Marketing', 'Video making', 'SEO'],
						image: require('../assets/img/kingcase.png'),
						logo: require('../assets/img/kingslogo.svg')

					},
					{
						sphere: 'CYBER TEAM',
						name: 'Entropiq',
						descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae recusandae necessitatibus itaque officiis dicta architecto eveniet.amet, consectetur adipisicing elit.',
						hashTags: ['Marketing', 'Video making'],
						image: require('../assets/img/kingcase.png'),
						logo: require('../assets/img/entrologo.svg')

					}
				]
			}
		}
	}
</script>

<style>

@keyframes caseheigh {
	from{
		padding: 0px;
		height: 0%;
	}
	to{
		padding: 20px;
		height: 100%;
	}
}

@keyframes zoomout {
	from{
		opacity: 0;
		transform: scale(1.1);
	}
	to{
		opacity: 1;
		transform: scale(1);
	}
}

/**/


.case-over{
	height: 340px;
	width: 100%;
	margin-bottom: 20px;
	position: relative;
}
.case-card{
	background-color: #05070f;
	overflow:hidden;
	padding: 0;
	height: 0;
	animation:caseheigh .5s forwards;
	transition: all .3s ease;
}
.case-img{
	width: 100%;
	height: 300px;
	border-radius: 5px;
	-webkit-background-size: cover;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	animation: zoomout .5s forwards;
	transition: all .3s ease;
	opacity: 0;
		transform: scale(1.1);
}
.logo-case{
	position: absolute;
	z-index: 10;
	left:-35px;
	top: 25%;
}
.black-txt{
	font-size: 16px;
	margin-bottom: 20px;
}
.case-sphere{
	margin-bottom: 0;
	color: #6100FF;
	font-size: 22px;
	font-weight: 400;
}
h3{
	font-size: 45px;
	color: #050710;
	font-weight: 700;
	margin-bottom: 20px;
	margin-top: 0;
}
.hastags{
	display: flex;
	justify-content: left;
	align-items: center;
	flex-wrap: wrap;
}
.hash{
	color: #050710;
	font-size: 16px;
	font-weight: 700;
	padding: 5px 10px;
	background-color: #E2E7E5;
	border-radius: 5px;
	margin-right: 10px;
	margin-bottom: 10px;
}
.hash span{
	color: #6100FF;
}
</style>