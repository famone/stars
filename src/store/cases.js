import axios from 'axios'


export default{
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
				posts: []
	},
	mutations: {
		setFiltered(state, filteredParam){
			state.filteredParam = filteredParam
		},
		SET_POSTS(state, posts){
			state.posts = posts
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
					console.log(data.data)
					let posts = data.data
					commit('SET_POSTS', posts)
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









