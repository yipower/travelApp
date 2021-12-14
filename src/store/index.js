import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


// 存储上一次用的地址
let defaultCity='上海';
defaultCity=localStorage.city;

const state ={
    city:defaultCity
}
const mutations={
    changeCity(state,cityName){
        state.city=cityName,
        localStorage.city=cityName
    }
}
export default new Vuex.Store({
    state,
    mutations
})