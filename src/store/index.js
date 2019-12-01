import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[{userId:'sangil',tel:'01071534205'}]
  },
  getters:{
    allusersCount: state=>{
      return state.users.length
    },
    CountWithSuffix:(state, getters )=>{
      return getters.allusersCount + "명";
    }
  },
  mutations: {
    // 값을 변화 시킴
    addUsers:(state, payload)=>{
        state.users.push(payload)
    }
  },
  actions: {
    // 로직을 담당 서버 저장 삭제 등처리하고 mutaions에 있는 함수르 딱 한번 호출해줌 역할의 분담 같은?
    addUsers:({commit},payload)=> {  // context.commit = ({commit}) 객체형태로 불러옴
      commit('addUsers',payload)
    }
  },
  modules: {
  }
})
