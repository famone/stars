<template>
	<section id="caseinner" :style="{'background-image': 'url(' + caseBg + ')'}">
		<img :src="shades" class="shades">
		<div class="container">
			<div class="row">
				<div class="col-lg-9">
					<img :src="logo" class="logo">
					<h1>{{ caseTitle }}</h1>
					<p class="case-sphere">{{ sphere }}</p>
					<div class="hastags">
						<div class="hash" v-for="hash in hashs"><span>#</span>{{ hash }}</div>
					</div>
				</div>
				<div class="col-lg-3">
					<router-link tag="a" to="/cases">
						<button class="back-btn"><img src="../assets/img/arrow3.svg" alt="">BACK TO CASES</button>
					</router-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		props: ['caseTitle', 'hashs', 'logo', 'caseBg', 'shades', 'sphere'],
		mounted(){
			
		    const scenecase = this.$scrollmagic.scene({
				triggerElement: '#scenecase',
			    triggerHook: 0,
			    duration: '100%'
			})

			.setTween('.shades', { 
		      css: { 
		      	top: '-5%'
		      }
		    })

		    this.$scrollmagic.addScene(scenecase)
		}
	}
</script>

<style scoped>
#caseinner{
	padding: 200px 0;
	background-color: #161616;
	-webkit-background-size: cover;
	background-size: cover;
	background-repeat: no-repeat;
	overflow:hidden;
	position: relative;
}
.shades{
	position:absolute;
	z-index: 0;
	top: 22%;
	left: 0;
	width: 100%;
	transition: all .2s ease;
}
.case-overlay{
	position:absolute;
	top:0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: #000;
	opacity: 0;
	z-index: 1;
}
h1{
	font-size: 60px;
}
.case-sphere{
	margin-bottom: 20px;
}
.hash{
	color: #fff;
	background-color: #050710;
}
#caseinner .logo{
	height: 30px;
	margin-bottom: 20px;
}
.back-btn{
	border: none;
    background-color: #6100FF;
    width: 100%;
    padding: 14px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    border-radius: 5px;
    margin-top: 60px;
    transition: all .3s ease;
}
.back-btn img{
	transform: rotate(180deg) translateX(0px);
	margin-right: 5px;
	height: 13px;
	transition: all .3s ease;
}
.back-btn:hover img{
	transform: rotate(180deg) translateX(6px);
}
</style>