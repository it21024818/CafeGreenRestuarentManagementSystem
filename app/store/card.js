export const state = () => ({
    cardId: 0,
    cardtype:"",
    cardnum: "",
    exdate:"",
    cvv: "",
    cardname:"",
    billaddress:"",

})

export const mutations = {
    storeId: (state, data) => {
        state.cardId = data
    },
    storeCardtype: (state, data) => {
        state.cardtype = data
    },
    storeCardnum: (state, data) => {
        state.cardnum = data
    },
    storeExdate: (state, data) => {
        state.exdate = data
    },
    storeCvv: (state, data) => {
        state.cvv = data
    },
    storeCardname: (state, data) => {
        state.cardname = data
    },
    storeBilladdress: (state, data) => {
        state.billaddress = data
    }
}