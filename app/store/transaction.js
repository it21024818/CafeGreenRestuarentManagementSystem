export const state = () =>({
    stid:0,
    stcname:"",
    stdate:"",
    stitem:"",
    stquantity:0,
    stamount:"",
})

export const mutations = {
    storeStId: (state, data)=>{
        state.stid = data
    },
    storeStCname: (state, data)=>{
        state.stcname = data
    },
    storeStDate: (state, data)=>{
        state.stdate = data
    },
    storeStItem: (state, data)=>{
        state.stitem = data
    },
    storeStQuantity: (state, data)=>{
        state.stquantity = data
    },
    storeStAmount: (state, data)=>{
        state.stamount = data
    },
}
