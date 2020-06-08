export default{
	state: {
		cases: [
					{
						link: 'kings',
						sphere: 'CASINO',
						name: 'King’s Resort',
						descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae recusandae necessitatibus itaque officiis dicta architecto eveniet.amet, consectetur adipisicing elit.',
						hashTags: ['Live streaming'],
						image: require('../assets/img/kingcase.png'),
						logo: require('../assets/img/kingslogo.svg'),
						background: require('../assets/img/kingcase.png'),
						mainTask: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae recusandae necessitatibus itaque officiis dicta architecto eveniet, fugit nostrum sapiente quidem alias tenetur, blanditiis. Nulla impedit sit necessitatibus, asperiores repudiandae, culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae recusandae necessitatibus itaque officiis dicta',
						shades: require('../assets/img/kingsshades.svg'),
						involvedItems: ['Lorem ipsum dolor sit amet, consectetur adipisicing',
						'Lorem ipsum dolor sit amet, consectetur adipisicing',
						'Lorem ipsum dolor sit amet, consectetur adipisicing',
						'Lorem ipsum dolor sit amet, consectetur adipisicing'],
						results: ['Lorem ipsum dolor sit amet, consectetur adipisicing',
						'Lorem ipsum dolor sit amet, consectetur adipisicing',
						'Lorem ipsum dolor sit amet, consectetur adipisicing',
						'Lorem ipsum dolor sit amet, consectetur adipisicing'],
						resultsImg: [
							{
								img: require('../assets/img/entrtask.jpg')
							},
							{
								img: require('../assets/img/entrtask.jpg')
							}	
						],
						bigcase: require('../assets/img/bigcaseimg.jpg'),
						id: 1

					},
					{
						link: 'entropiq',
						sphere: 'CYBER TEAM',
						name: 'Entropiq',
						descr: 'Lorem ipsum dollor sit amet, consectetur adipisicing elit. Quae recusandae necessitatibus itaque officiis dicta architecto eveniet.amet, consectetur adipisicing elit.',
						hashTags: ['Marketing', 'Video making'],
						image: require('../assets/img/entropiqcase.png'),
						logo: require('../assets/img/entrologo.svg'),
						background: require('../assets/img/entrbgbig.jpg'),
						mainTask: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae recusandae necessitatibus itaque officiis dicta architecto eveniet, fugit nostrum sapiente quidem alias tenetur, blanditiis. Nulla impedit sit necessitatibus, asperiores repudiandae, culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae recusandae necessitatibus itaque officiis dicta',
						shades: require('../assets/img/entrshades.svg'),
						involvedItems: ['Lorem ipsum dolor sit amet, consectetur adipisicing',
						'Lorem ipsum dolor sit amet, consectetur adipisicing',
						'Lorem ipsum dolor sit amet, consectetur adipisicing',
						'Lorem ipsum dolor sit amet, consectetur adipisicing'],
						results: ['Lorem ipsum dolor sit amet, consectetur adipisicing',
						'Lorem ipsum dolor sit amet, consectetur adipisicing',
						'Lorem ipsum dolor sit amet, consectetur adipisicing',
						'Lorem ipsum dolor sit amet, consectetur adipisicing'],
						resultsImg: [
							{
								img: require('../assets/img/entrtask.jpg')
							},
							{
								img: require('../assets/img/entrtask.jpg')
							}
						],
						bigcase: require('../assets/img/bigcaseimg.jpg'),
						id: 2

					},
					{
						link: 'pokerstars',
						sphere: 'TOURNAMENT',
						name: 'Poker Star’s',
						descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae recusandae necessitatibus itaque officiis dicta architecto eveniet.amet, consectetur adipisicing elit.',
						hashTags: ['Marketing', 'Live streaming'],
						image: require('../assets/img/pscase.png'),
						logo: require('../assets/img/pslogo.svg'),
						background: require('../assets/img/pscase.png'),
						mainTask: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae recusandae necessitatibus itaque officiis dicta architecto eveniet, fugit nostrum sapiente quidem alias tenetur, blanditiis. Nulla impedit sit necessitatibus, asperiores repudiandae, culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae recusandae necessitatibus itaque officiis dicta',
						shades: require('../assets/img/psshades.svg'),
						involvedItems: ['Lorem ipsum dolor sit amet, consectetur adipisicing',
						'Lorem ipsum dolor sit amet, consectetur adipisicing',
						'Lorem ipsum dolor sit amet, consectetur adipisicing',
						'Lorem ipsum dolor sit amet, consectetur adipisicing'],
						results: ['Lorem ipsum dolor sit amet, consectetur adipisicing',
						'Lorem ipsum dolor sit amet, consectetur adipisicing',
						'Lorem ipsum dolor sit amet, consectetur adipisicing',
						'Lorem ipsum dolor sit amet, consectetur adipisicing'],
						resultsImg: [
							{
								img: require('../assets/img/entrtask.jpg')
							},
							{
								img: require('../assets/img/entrtask.jpg')
							}
						],
						bigcase: require('../assets/img/bigcaseimg.jpg'),
						id: 3

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
  		},
  		getCaseitem: (state) => (id) => {
  			return state.cases.find(caseItem => caseItem.link == id)
  		}
  	}
}









