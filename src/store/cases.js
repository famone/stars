import axios from 'axios'


const cases = {
	namespaced: true,
	state: {
		
				filterBtns: [
					{
						name: 'All',
						active: true,
						id: 0
					},
					{
						name: 'Video making',
						active: false,
						id: 1
					},
					{
						name: 'Marketing',
						active: false,
						id: 2
					},
					{
						name: 'Live streaming',
						active: false,
						id: 3
					}
				],
				filteredParam: 'All',
				posts: [],
				servicesAll: [],
				partn: []
	},
	mutations: {
		setFiltered(state, filteredParam){
			state.filteredParam = filteredParam
		},
		SET_POSTS(state, posts){
			state.posts = posts
		},
		SET_SERV(state, servs){
			state.servicesAll = servs
		},
		SET_PARTN(state, partn){
			state.partn = partn
		}
	},
  	actions: {
  		setFiltered({commit}, payload){
			commit('setFiltered', payload)
		},
		loadCases({commit}){
			axios
				.get('https://stars-media.cz/wp-json/wp/v2/portfolio')
				.then(data =>{
					let posts = data.data
					commit('SET_POSTS', posts)
				})
				.catch(error => console.log(error))
		},
		loadServ({commit}){
			axios
				.get('https://stars-media.cz/wp-json/wp/v2/services')
				.then(data =>{
					let servs = data.data
					console.log(servs)
					commit('SET_SERV', servs)
				})
				.catch(error => console.log(error))
		},
		loadPartners({commit}){
			axios
				.get('https://stars-media.cz/wp-json/wp/v2/partners')
				.then(data =>{
					let partn = data.data
					console.log(partn)
					commit('SET_PARTN', partn)
				})
				.catch(error => console.log(error))
		}
  	},
  	getters: {

  		getFiltered(state){
  			return state.filteredParam
  		},
  		getButtons(state){
  			return state.filterBtns
  		},
  		getCaseitem: (state) => (id) => {
  			return state.posts.find(caseItem => caseItem.slug == id)
  		},
  		getPosts(state){
  			return state.posts
  		}
  	}
}


export default cases






