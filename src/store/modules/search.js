import {reqSearch} from '@/api'

const state = {
    searchParams:{}
    
}
const mutations = {
    RECEIVEVIDEOLIST(state,searchParams){
        state.searchParams = searchParams
    }
}
const actions = {
    async getSearch({commit},search){
        const res = await reqSearch(search);
        // console.log(res)
        commit('RECEIVEVIDEOLIST',res)
    }
}
const getters = {}


export default {
    state,
    mutations,
    actions,
    getters
}