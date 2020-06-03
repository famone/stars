<template>
	<div>
   <nav>
     <div class="container">
       <div class="shapka">
         <div class="logo">
          <router-link tag="a" to="/">
           <img :src="logoImg">
          </router-link>
         </div>
           <ul class="main-nav d-none d-sm-block">


<router-link tag="li" to="/" active-class="active-page" exact>
            <a>Home</a>
          </router-link>
          <router-link tag="li"  to="/about" active-class="active-page">
            <a>About</a>
          </router-link>
          <router-link tag="li"  to="/cases" active-class="active-page">
            <a>Cases</a>
          </router-link>
          <router-link tag="li"  to="/services" active-class="active-page">
            <a>Services</a>
          </router-link>
          <router-link tag="li"  to="/contacts" active-class="active-page">
            <a>Contacts</a>
          </router-link>
           </ul>
           <div class="lang d-none d-sm-block">
             <button class="active-lang">EN</button>
             <button>CZ</button>
           </div>
  <button class="get-contact d-none d-sm-block" @click="showModal()"><span>Get contact</span></button>
  <div @click="openMobile()" :class="{acnav: mobileMenu}" class="mobile-nav ac-nav d-block d-xl-none d-lg-none d-md-none">
             <span></span>
             <span></span>
           </div>
       </div>
     </div>
    </nav>
    <div class="mobile-menu" :class="{mobMenAc: mobileMenu}">
      <ul @click="openMobile()">
        <router-link tag="li" to="/" active-class="act-page" exact >
            <a>Home</a>
          </router-link>
          <router-link tag="li"  to="/about" active-class="act-page">
            <a>About</a>
          </router-link>
          <router-link tag="li"  to="/cases" active-class="act-page">
            <a>Cases</a>
          </router-link>
          <router-link tag="li"  to="/services" active-class="act-page">
            <a>Services</a>
          </router-link>
          <router-link tag="li"  to="/contacts" active-class="act-page">
            <a>Contacts</a>
          </router-link>
        </ul>
        <div class="menu-contacts">
            <a href="mailto:hello@strsmedia.com"> <img src="../assets/img/mailic.svg">hello@strsmedia.com</a>
            <a href="tel:+4234-222-23-23"> <img src="../assets/img/telic.svg">+4234-222-23-23</a>
          </div>
        <button class="get-contact" @click="showModal()"><span>Get contact</span></button>
    </div> 
  </div>
</template>

<script>
	export default{
    data(){
      return{
        logoImg: require('../assets/img/newlogo.svg'),
        mobileMenu: false
      }
    },
    methods: {
      openMobile(){
        this.mobileMenu = !this.mobileMenu
      },
      showModal(){
        this.$store.dispatch('setModal', true)
      }
    },
    mounted(){ 
      if( screen.width <= 760 ) {
        this.logoImg = require('../assets/img/newlogo.svg')
      }
    }
  }
</script>

<style>
.mobile-nav{
  height: 100%;
  width: 80px;
  position: relative;
  background-color: transparent;
}
.mobile-nav span{
  width: 60px;
  height:4px;
  border-radius: 5px;
  background-color: #fff;
  position: absolute;
  top: 25px;
  left: 10px;
  transition: all .3s ease;
}
.mobile-nav span:last-child{
  top: 50px;
  transition: all .3s ease;
}
.mobile-menu{
  height: 100vh;
  width: 100vw;
  background-color: #050710;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -10;
  transition: all .5s ease;
  opacity: 0;
   display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px 0;
}
.mobile-menu .get-contact{
  width: 80%;
}
.mobile-menu ul{
  margin: 0;
  padding: 0;
  text-align: center;
}
.mobile-menu li{
  list-style: none;
  margin-bottom: 10px;
}
.mobile-menu a{
  color:#fff;
  font-size: 25px;
  font-weight: 600;
}
.act-page a{
  color: #6100FF;
}
.mobMenAc{
  z-index: 99;
  opacity: 1;
}
.acnav span{
  transform: rotate(-135deg);
  top: 40px;
}
.acnav span:last-child{
  transform: rotate(135deg);
  top: 40px;
}
.logo img{
  height: 40px;
}
.menu-contacts{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.menu-contacts img{
  margin-right: 6px;
}
.menu-contacts a{
  text-align:center;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
}
</style>