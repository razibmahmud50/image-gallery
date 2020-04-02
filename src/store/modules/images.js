import api from '../../api/imgur'
import router from '../../router'

const state = {
   images: []
}

const getters = {
     allImages : (state)=>{
         return state.images 
     }
}

const mutations = {
    setImages: (state, images)=>{
        state.images = images
    }

}

const actions = {
   async fetchImages({rootState, commit}){
      const token = rootState.auth.token
       const response = await api.fetchImages(token)
       commit('setImages', response.data.data)
    },
    async uploadImages( {rootState},images){
        const token = rootState.auth.token
        await api.uploadImages(images, token)
        router.push('/')
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}