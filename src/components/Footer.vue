<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-12 overhidden">
					<h5 class="wow fadeInUp">Let`s start</h5>
				</div>
			</div>
			<form class="form-row overhidden">
					<div class="col-lg-4 wow fadeInUp">
						<input type="text" placeholder="What is your name">
					</div>
					<div class="col-lg-4 wow fadeInUp">
						<input type="text" placeholder="+7 999 222-22-22">
					</div>
					<div class="col-lg-4 wow fadeInUp">
						<input type="text" placeholder="Your e-mail">
					</div>
					<div class="col-lg-6 wow fadeInUp">
						<input type="text" placeholder="Services?">
					</div>
					<div class="col-lg-3 wow fadeInUp">
						<button type="submit" class="sbm-btn"><img src="../assets/img/mailic.svg" alt="">Submit</button>
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
						<a href="mailto:hello@strsmedia.com"> <img src="../assets/img/mailic.svg">hello@strsmedia.com</a>
						<a href="tel:+4234-222-23-23"> <img src="../assets/img/mailic.svg">+4234-222-23-23</a>
					</div>
				</div>
				<div class="col-lg-3 wow fadeInUp">
					<a href="https://webink.site/" class="webink">Produced by webink.</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
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
				]
			}
		}
	}
</script>

<style scoped>
	input{
		width: 100%;
		padding: 13px 0;
		background-color: transparent;
		border: none;
		border-bottom: 2px #fff solid;
		color: #fff;
		margin-bottom: 50px;
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
	}
	.sbm-btn img{
		margin-right: 6px;
		transform: translateY(-2px);
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
	.webink{
		font-size: 16px;
		font-weight: 600;
		color: #fff;
	}
</style>