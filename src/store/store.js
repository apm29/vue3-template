import {createStore} from 'vuex'
import pageState from '@/store/moduls/pageState'
import userInfo from '@/store/moduls/userInfo'

export default createStore({
  state () {
    return {
    }
  },
  mutations: {

  },
  modules:{
    pageState,
    userInfo
  }
})
