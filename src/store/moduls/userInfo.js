import { getToken, getUserInfo, setToken } from '../../utils/storage'
import { resetRouter } from '../../router/router'

export default {
  state () {
    return {
      token: getToken(),
      userInfo: getUserInfo()
    }
  },
  mutations: {
    setTokenToStore(state,token){
      state.token = token
      setToken(token)
    }
  },
  actions: {
    //登录
    login({ state, commit }, { token }) {
      return new Promise(resolve => {
        commit("setTokenToStore", token);
        resolve();
      });
    },
    //退出
    logout({ state, commit }) {
      return new Promise(resolve => {
        commit("setTokenToStore", undefined);
        commit("setUserInfoToStore", {});
        resetRouter();
        commit("setRoutesToStore", []);
        resolve();
      });
    }
  }
}
