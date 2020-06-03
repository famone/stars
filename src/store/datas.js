export default{
	state: {
		mainTel: '+4234-222-23-23',
		mainEmail: 'hello@strsmedia.com',
		mainModal: false,
    pageContacts: [
          {
            title: 'TELEPHONE',
            link: 'tel:+42342222323',
            linkText: '+4234-222-23-23',
            icon: require('../assets/img/telic.svg')
          },
          {
            title: 'EMAIL',
            link: 'mailto:hello@strsmedia.com',
            linkText: 'hello@strsmedia.com',
            icon: require('../assets/img/mailic.svg')
          },
          {
            title: 'ADRESS',
            link: 'https://www.google.ru/maps',
            linkText: 'Prahf, CZ, Strasse 12-12',
            icon: require('../assets/img/mapic.svg')
          }
    ]
	},
	mutations: {
		setModal(state, notModal){
			state.mainModal = notModal
		}
	},
  	actions: {
  		setModal({commit}, payload){
			commit('setModal', payload)
		}
  	},
  	getters: {
  		getTel(state){
  			return state.mainTel
  		},
  		getMail(state){
  			return state.mainEmail
  		},
  		getModal(state){
  			return state.mainModal
  		},
      getConatacts(state){
        return state.pageContacts
      }
  	}
}