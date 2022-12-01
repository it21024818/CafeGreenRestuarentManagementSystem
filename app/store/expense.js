export const state = () => ({
    eTransID: 0,
    eDescription:"",
    eValue: 0,
    eDate:""
})
export const mutations = {
    storeETransID: (state, data) => {
        state.eTransID = data
    },
    storeEDescription: (state, data) => {
        state.eDescription = data
    },
    storeEValue: (state, data) => {
        state.eValue = data
    },
    storeEDate: (state, data) =>{
        state.eDate = data
    }
}

