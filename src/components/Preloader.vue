<template>
	<div class="preloader" :class="{preloaderAc: !disable}">
      <div class="particles">
        <div id="particles-js"></div>
      </div>
  		<img class="prelogo" src="../assets/img/newlogo.svg">
	</div>
</template>

<script>
	export default{
		props: ['disable'],
    name: "particles",
  mounted() {
    this.initParticles()
  },
  methods: {
    initParticles() {
      window.particlesJS("particles-js", {"particles":{"number":{"value":70,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":45,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":97.44926547616143,"line_linked":{"opacity":0.8390780013491065}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":121.81158184520177,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true})
    }
  }
	}

</script>

<style scoped>
#particles-js {
  background: black;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

	.preloader{
    position: fixed;
    z-index: 1000;
    top: 0%;
    left: 0;
    background-color: rgba(0,0,0,1);
    width: 100%;
    height: 100%;
    transition: all .8s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .preloaderAc{
   z-index: -10;
   opacity: 0;
  }
  .prelogo{
    transition: cubic-bezier(0,1,.78,.78);
/*    animation:12s rotatelogo infinite;*/
  height: 65px;

  }
  @keyframes rotatelogo{
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>