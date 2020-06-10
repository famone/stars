<template>
  <div id="app">

      <div class="progress-bar" :style="{width: progressBar + '%'}"></div>



  <appPrld :disable="disable"></appPrld>



  <appModal @close="modalActive = !modalActive"></appModal>

      <appHeader @openPop="modalActive = !modalActive"></appHeader>

<vue-page-transition name="overlay-down-full">  
    <router-view></router-view>
</vue-page-transition>

<p v-for="(post, index) in posts" :key="index">{{ post }}</p>



      <appFooter></appFooter>






  </div>
</template>

<script>
import './assets/css/style.css';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Preloader from './components/Preloader.vue'
import Modal from './components/Modal.vue'
import baffle from 'baffle';

import { mapState } from 'vuex'

export default {
 
  components: {
    'appHeader':  Header,
    'appFooter': Footer,
    'appPrld': Preloader,
    'appModal': Modal
  },
  computed: {
        ...mapState(['posts'])
  },
  data(){
    return {
      progressBar: 0,
      n: 0,
      disable: true,
      modalActive: false
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
     }
  },
  created(){
    window.addEventListener('scroll', ()=>{
      let pageHeight = document.documentElement.scrollHeight;
      let monitor = document.documentElement.clientHeight;
      let done = document.documentElement.scrollTop;

      let percents = Math.round(done / (pageHeight - monitor) * 100);
      this.progressBar = percents;
    })
    this.startInterval()
    this.disablePreloader()
    
    this.$store.dispatch('loadCases')
  }
}
</script>

<style>
:root {
  --overlay-bg: #050710;
  --transition-duration: .2s;
}
</style>
