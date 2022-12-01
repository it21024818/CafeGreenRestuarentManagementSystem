export const state = () => ({
    cusId: 0,
    cusName:"",
    cusEmail:"",
    cusNum:"",
    cusPassword:"",
})

export const mutations = {
    storeCusId: (state, data) => {
        state.cusId = data
    },
    storeCusName: (state, data) => {
        state.cusName = data
    },
    storeEmail: (state, data) => {
        state.cusEmail = data
    },
    storeCusNum: (state, data) => {
        state.cusNum = data
    },
    storeCusPassword: (state, data) => {
        state.cusPassword = data
    }
}