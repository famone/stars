<template>
	<footer>
		<div class="footer-overlay"></div>
		<div class="container">
			<div class="row">
				<div class="col-lg-12 overhidden">
					<h5 class="wow fadeInUp">Let`s start</h5>
				</div>
			</div>
			<form class="form-row overhidden">
					<div class="col-lg-4 wow fadeInUp">
						<input type="text" autocomplete="off" placeholder="What is your name" v-model="emailBody.yname">
					</div>
					<div class="col-lg-4 wow fadeInUp">
						<input type="text" placeholder="+7 999 222-22-22" v-model="emailBody.phone">
					</div>
					<div class="col-lg-4 wow fadeInUp">
						<input type="text" placeholder="Your e-mail" v-model="emailBody.email">
					</div>
					<div class="col-lg-12 wow fadeInUp">
						<input type="text" placeholder="What services are you looking for?" v-model="emailBody.services">
					</div>
					<div class="col-lg-3 offset-lg-3 offset-md-3 wow fadeInUp">
						<button type="submit" class="sbm-btn" @click.prevent="submitForm()"><img src="../assets/img/mailic.svg" alt="">Submit</button>
					</div>
					<div class="col-lg-3 wow fadeInUp">
						<p class="white-txt">By clicking the button <br>
						I agree to the Privacy Policy</p>
					</div>
	
			</form>
			<hr>
			<div class="row overhidden">
				<div class="col-lg-3 wow fadeInUp">
					<div class="follow-us">
						<h6>FOLLOW US</h6>
						<a :href="social.link" v-for="social in socials">
							<img :src="social.icon" alt="">
						</a>
					</div>
				</div>
				<div class="col-lg-6 wow fadeInUp">
					<div class="contacts">
						<a :href="`mailto:${email}`"> <img src="../assets/img/mailic.svg">{{ email }}</a>
						<a :href="`tel:${telephone}`"> <img src="../assets/img/telic.svg">{{ telephone }}</a>
					</div>
				</div>
				<div class="col-lg-3 wow fadeInUp">
					<a href="https://webink.site/" class="webink"><div>coding master - <img src="../assets/img/webink.svg"></div></a>
					</div>
				</div>
		</div>
	</footer>
</template>

<script>
import axios from 'axios'
	export default{
		data(){
			return {
				socials: [
					{
						link: '#',
						icon: require('../assets/img/inst.svg')
					},
					{
						link: '#',
						icon: require('../assets/img/youtube.svg')
					},
					{
						link: '#',
						icon: require('../assets/img/vimeo.svg')
					}
				],
				telephone: null,
				email: null,
				emailBody: {
					yname: '',
					phone: '',
					email: '',
					services: ''
				},
				errors: [],
            	url: 'https://stars-media.cz/wp-json/contact-form-7/v1/contact-forms/43/feedback'
			}
		},
		methods: {
        submitForm() {
        	var form1 = new FormData();
        	

			for (var field in this.emailBody){
				form1.append(field, this.emailBody[field]);
			};

            axios
            	.post(this.url, form1)
                .then((response) => {
                    console.log(response);
                    this.errors = [];
                })
                .catch((error) => {
                    this.errors = error.response.data.message
                });
        	}
    	},
    	mounted(){
			this.telephone = this.$store.getters.getTel
			this.email = this.$store.getters.getMail
		},
	}
</script>

<style scoped>
.footer-overlay{
	height: 100%;
	width: 100%;
	background-color: rgba(0,0,0,.5);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
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
	.form-row{
		margin-bottom: 50px;
	}
	hr{
		border-color: #fff;
		opacity: .20;
		margin-bottom: 30px;
	}
	h6{
		margin: 0;
		font-size: 18px;
		font-weight: 600;
		color: #fff;
	}
	.webink div{
		font-size: 14px;
		font-weight: 400;
		color: #fff;
		opacity: 1;
		transition: all .3s ease;
		font-family: 'Roboto Mono', monospace;
	}
	.webink:hover div{
		animation: 1s myshake alternate;
		opacity: 1;
	}
	.webink img{
		 height: 16px;
		margin-top: -3px;
	}
	.webink:hover img{
		margin-top: -3px;
	}


@keyframes myshake{
	0% {
	    transform: skewX(-15deg);
	}
	5% {
	    transform: skewX(15deg);
	}
	10% {
	    transform: skewX(-15deg);
	}
	15% {
	    transform: skewX(15deg);
	}
	20% {
	    transform: skewX(0deg);
	}
	100% {
	    transform: skewX(0deg);
	}
}


</style>
