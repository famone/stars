import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Cases from './pages/Cases.vue'
import Services from './pages/Services.vue'
import Contacts from './pages/Contacts.vue'



export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '/cases',
			component: Cases
		},
		{
			path: '/services',
			component: Services
		}
		,
		{
			path: '/contacts',
			component: Contacts
		}
	],
	mode: 'history',
})



