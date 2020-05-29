export default{
	state: {
		cases: [
					{
						sphere: 'CASINO',
						name: 'King’s Resort',
						descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae recusandae necessitatibus itaque officiis dicta architecto eveniet.amet, consectetur adipisicing elit.',
						hashTags: ['Marketing', 'Live streaming'],
						image: require('../assets/img/kingcase.png'),
						logo: require('../assets/img/kingslogo.svg')

					},
					{
						sphere: 'CYBER TEAM',
						name: 'Entropiq',
						descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae recusandae necessitatibus itaque officiis dicta architecto eveniet.amet, consectetur adipisicing elit.',
						hashTags: ['Marketing', 'Video making'],
						image: require('../assets/img/entropiqcase.png'),
						logo: require('../assets/img/entrologo.svg')

					},
					{
						sphere: 'TOURNAMENT',
						name: 'Poker Star’s',
						descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae recusandae necessitatibus itaque officiis dicta architecto eveniet.amet, consectetur adipisicing elit.',
						hashTags: ['Marketing', 'Live streaming'],
						image: require('../assets/img/pscase.png'),
						logo: require('../assets/img/pslogo.svg')

					}
				],
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
				filteredParam: 'All'
	},
	mutations: {
		setFiltered(state, filteredParam){
			state.filteredParam = filteredParam
		}
	},
  	actions: {
  		setFiltered({commit}, payload){
			commit('setFiltered', payload)
		}
  	},
  	getters: {
  		getCases(state){
  			return state.cases
  		},
  		getFiltered(state){
  			return state.filteredParam
  		},
  		getButtons(state){
  			return state.filterBtns
  		}
  	}
}