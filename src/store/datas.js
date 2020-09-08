import axios from 'axios'


const datas = {
  namespaced: true,
  state: {
    about: null,
    mainTel: '+420 776 685 999',
    mainEmail: 'karapet@stars-ent.com',
    mainModal: false,
    team:[],
    pageContacts: [
          {
            title: 'TELEPHONE',
            link: 'tel:+420776685999',
            linkText: '+420 776 685 999',
            icon: require('../assets/img/telic.svg')
          },
          {
            title: 'EMAIL',
            link: 'mailto:karapet@stars-ent.com',
            linkText: 'karapet@stars-ent.com',
            icon: require('../assets/img/mailic.svg')
          },
          // {
          //   title: 'ADRESS',
          //   link: 'https://www.google.ru/maps',
          //   linkText: 'Prahf, CZ, Strasse 12-12',
          //   icon: require('../assets/img/mapic.svg')
          // }
    ]
  },
  mutations: {
    setModal(state, notModal){
      state.mainModal = notModal
    },
    SET_TEAM(state, team){
      state.team = team
    },
    SET_ABOUT(state, about){
      state.about = about
    }
  },
    actions: {
      setModal({commit}, payload){
         commit('setModal', payload)
      },
      loadTeam({commit}){
      axios
        .get('https://stars-media.cz/wp-json/wp/v2/team')
        .then(data =>{
          let team = data.data
          commit('SET_TEAM', team)
        })
        .catch(error => console.log(error))
      },
      loadAbout({commit}){
        axios
        .get('https://stars-media.cz/wp-json/wp/v2/pages/53')
        .then(data =>{
          let about = data.data
          console.log(about)
          commit('SET_ABOUT', about)
        })
        .catch(error => console.log(error))
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
      },
      getTeam(state){
        return state.team
      }
    }
}
export default datas