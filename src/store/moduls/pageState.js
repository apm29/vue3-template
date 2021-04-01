import { getThemeDark } from '../../utils/storage'

export default {
  state () {
    return {
      loading: 0,
      dark: getThemeDark()
    }
  },
  mutations: {
    startLoading (state) {
      state.loading++
    },
    stopLoading (state) {
      state.loading--
    }
  }
}
