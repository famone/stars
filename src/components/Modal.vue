<template>
	<div class="pop" :class="{acPop: mainModal}">
		<div class="close-pop" @click="hideModal()">✕</div>
		<div class="pop-box row">
			<div class="col-lg-4">
						<input type="text" placeholder="What is your name">
					</div>
					<div class="col-lg-4">
						<input type="text" placeholder="+7 999 222-22-22">
					</div>
					<div class="col-lg-4">
						<input type="text" placeholder="Your e-mail">
					</div>
					<div class="col-lg-12">
						<input type="text" placeholder="Services?">
					</div>
					<div class="col-lg-3 offset-md-3 offset-lg-3">
						<button type="submit" class="sbm-btn"><img src="../assets/img/mailic.svg" alt="">Submit</button>
					</div>
					<div class="col-lg-3">
						<p class="white-txt">By clicking the button, 
						I agree to the Privacy Policy</p>
					</div>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'

	export default{
		
		computed: {
			...mapState('datas', ['mainModal']),
		},
		methods: {
			hideModal(){
				this.$store.dispatch('datas/setModal', false)
			}
		}
	}
</script>

<style>
.pop{
	height: 100vh;
	width: 100vw;
	background-color: rgba(0,0,0,.93);
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: -10;
	opacity: 0;
	transition: all .5s ease;
}
.acPop{
	z-index: 101;
	opacity: 1;
}
.close-pop{
	position: absolute;
	top: 10px;
	right: 20px;
	cursor: pointer;
	font-size: 35px;
	font-weight: 400;
	color: #fff;
}
.pop-box{
	padding: 25px;
	width: 80%;
}
input{
	width: 100%;
	padding: 13px 0;
	background-color: transparent;
	border: none;
	border-bottom: 2px #fff solid;
	color: #fff;
	margin-bottom: 50px;
	border-radius: 0!important;
}
input::placeholder{
	color: #fff;
	opacity: .5;
}
.sbm-btn{
	border: none;
	background-color: #6100FF;
	width: 100%;
	padding: 14px;
	font-size: 16px;
	font-weight: 600;
	color: #fff;
	border-radius: 5px;
	margin-bottom: 20px;
	transition: all .3s ease;
}
.sbm-btn img{
	margin-right: 6px;
	transform: translateY(-2px);
}
.sbm-btn:hover{
	box-shadow: 0 5px 20px rgba(255,255,255,.3);
}
.white-txt{
	font-size: 16px;
}
</style>