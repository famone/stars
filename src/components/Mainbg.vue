<template>
	<section id="main" refs="page">
    <img src="../assets/img/mouse.svg" class="scroll-mouse">
    <img v-lazy="require('../assets/img/mainbg.png')" class="bg-space d-none d-sm-block">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
              <div class="overhidden">
                <h1 class="wow fadeIn">We are <br>
                <span class="violetter2 buff">innovative</span> <br>
                marketing</h1>
              </div>
          </div>
          <div class="col-lg-6">
            <div class="planet text-center wow fadeInRight">
              <img v-lazy="require('../assets/img/lpanet.png')" class="planet-img">
              <img v-lazy="require('../assets/img/big-orion.svg')" class="orion1">
              <img v-lazy="require('../assets/img/smallorion.svg')" class="orion2">
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
        
        }
      }
    }
</script>

<style scoped>
.scroll-mouse{
  position: absolute;
  width: 40px;
  z-index: 20;
  bottom: 30px;
  left: calc(50% - 20px);
  transition: all .2s ease;
  animation: floater 3s ease-in-out infinite;
}
@keyframes floater{
  0% {
    transform: translatey(-20px);
  }
  50% {
      transform: translatey(0px);
  }
  100% {
      transform: translatey(-20px);
  }
}
	.violetter2{
		text-shadow: 0px 4px 23px rgba(0, 0, 0, 0.55);
    color: #6100ff;
	}

.orion1{
  -webkit-animation: helo 120s infinite reverse linear;
    animation: helo 120s infinite reverse linear;
    transition: all .3s ease;
}

.orion2{
  -webkit-animation: goodby 60s infinite reverse linear;
    animation: goodby 60s infinite reverse linear;
    transition: all .3s ease;
}
.planet-img{
  -webkit-animation: rotae 15s ease-in-out infinite;
    animation: rotae 15s ease-in-out infinite;
    transition: all .3s ease;
}
.bg-space{
   -webkit-animation: zoom 15s ease-in-out infinite;
    animation: zoom 15s ease-in-out infinite;
    transition: all .3s ease;
}

@keyframes helo{
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
}
100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes goodby{
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
}
100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

@keyframes rotae{
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
}
50% {
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }
  100% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
}
}

@keyframes zoom{
  0% {
    -webkit-transform: scale(1.1) rotate(4deg);
    transform: scale(1.1)  rotate(4deg);
}
50% {
    -webkit-transform: scale(1.2) rotate(0deg);
    transform: scale(1.2) rotate(0deg);
  }
  100% {
   -webkit-transform: scale(1.1) rotate(4deg);
    transform: scale(1.1) rotate(4deg);
}
}

</style>