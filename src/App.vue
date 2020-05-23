<template>
  <div id="app">

      <div class="progress-bar" :style="{width: progressBar + '%'}"></div>



  <appPrld :disable="disable"></appPrld>

      <appHeader></appHeader>

<transition name="router-anim" leave-active-class="animated fadeOutRight" enter-active-class="animated fadeInLeft" mode="out-in">
  <router-view></router-view>
</transition>

      <appFooter></appFooter>

  </div>
</template>

<script>
import './assets/css/style.css';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Preloader from './components/Preloader.vue'

import baffle from 'baffle';

export default {
  components: {
    'appHeader':  Header,
    'appFooter': Footer,
    'appPrld': Preloader
  },
  data(){
    return {
      progressBar: 0,
      n: 0,
      disable: true
    }
  },
  methods: {
    startInterval: function () {
       setInterval(() => {
        this.n++
        console.l
        let b = baffle('.buff', {
          characters: '+-•~!=*',
          speed: 60
          });
        b.text(text => {
          if(this.n === 1){
            return 'young'
            }else if (this.n === 2) {
            return 'dynamic'
                      }else{
            this.n = 0;
            return 'innovative'
          }
        })
          b.reveal(1000);
       }, 3000);
     },
     disablePreloader(){
      setTimeout(() => {
        this.disable = !this.disable
      }, 2000);
     },
     moveAlert(){
      alert('aasf;kn')
     }
  },
 created(){
    window.addEventListener('scroll', ()=>{
      let pageHeight = document.documentElement.scrollHeight;
      let monitor = document.documentElement.clientHeight;
      let done = document.documentElement.scrollTop;

      let percents = Math.round(done / (pageHeight - monitor) * 100);
      this.progressBar = percents;
      // console.log(this.progressBar)
    });
    console.log(this.n)
    this.startInterval();
    this.disablePreloader()
  }
}
</script>

<style scoped>

</style>
