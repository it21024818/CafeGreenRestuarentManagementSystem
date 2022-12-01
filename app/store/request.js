export const state = () => ({
    reqid: 0,
    ereqdate:"",
    reqemail:"",
    etitle:"",
    emessage:""
})
export const mutations = {
    storeReqId: (state, data) => {
        state.reqid = data
    },
    storeReqDate: (state, data) => {
        state.ereqdate = data
    },
    storeReqEmail: (state, data) => {
        state.reqemail = data
    },
    storeReqTitle: (state, data) =>{
        state.etitle = data
    },
    storeReqMessage: (state, data) =>{
        state.emessage = data
    }
}