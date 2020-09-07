<template>
      <section id="about">
         <div class="blackorion"></div>
        <div class="bgvideo d-none d-sm-block">
              <video autoplay muted loop id="myVideo">
                <source src="https://stars-media.cz/IMG_1925.mp4" type="video/mp4">
              </video>
          </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-6">
            <div class="overhidden">
              <h2 class="wow fadeInDown">We are <span class="violetter">Stars</span></h2>
            </div>
            <div class="overhidden">
              <p class="black-txt wow fadeInDown">
              We are a young team of passionate marketers 
            creators placing your needs at the center of all our work. 
<br><br>
Driven to understand your brand, your goals and your customers, we will offer you unique solutions and deliver them to mesmerize your audience.
            </p>
            </div>
            <router-link tag="a" to="/about">
                <button class="main-btn"><span>OUR TEAM</span></button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
  #about{
    position: relative;
    overflow:hidden;
  }
  .bgvideo{
    position: absolute;
    left: -5%;
    top: -10%;
    height: 650px;
    width: 650px;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    border-radius: 50%;
    background-color: rgba(0,0,0,.4);
  }
  #myVideo{
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    height:100%;
    z-index: -1;
  }
  .blackorion{
    height: 750px;
    width: 750px;
    background-image: url(../assets/img/blackorion.svg);
    position: absolute;
    left: -8%;
    -webkit-background-size: contain;
    background-size: contain;
    background-position: center;
    top:-18%;
     -webkit-animation: goodby 60s infinite reverse linear;
    animation: goodby 60s infinite reverse linear;
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
</style>
