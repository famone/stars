<template>
	<section id="aboutbg2">
		<img src="../assets/img/mars.svg" class="mars">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-6">
					<img src="../assets/img/abtel.png" class="ipad">
				</div>
				<div class="col-lg-6">
					<div class="overhidden">
              <h2 class="wow fadeInDown">We are <span class="violetter">Stars</span></h2>
            </div>
            <div class="overhidden">
              <p class="black-txt wow fadeInDown" v-html="about.content.rendered">
               
            </p>
            </div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import {mapState} from 'vuex'


	export default{
		computed: {
     		 ...mapState('datas', ['about']),
    	},
		mounted(){
			 const scene = this.$scrollmagic.scene({
				triggerElement: '#scene',
			    triggerHook: 0,
			    duration: '100%'
			})

			.setTween('.ipad', { 
		      css: { 
		      	transform: 'translateY(0)'
		      }
		    })

		    this.$scrollmagic.addScene(scene)

		    const scene4 = this.$scrollmagic.scene({
				triggerElement: '#scene',
			    triggerHook: 0,
			    duration: '100%'
			})

			.setTween('.mars', { 
		      css: { 
		      	left: '5%',
		      	top: '10%'
		      }
		    })

		    this.$scrollmagic.addScene(scene4)
		}
	}
</script>

<style>
.ipad{
	width: 100%;
	transform: translateY(300px);

}
#aboutbg2{
	padding: 120px 0;
	position: relative;
	overflow: hidden;
}
.mars{
	position: absolute;
	left: -5%;
	top:-5%;
}
</style>
