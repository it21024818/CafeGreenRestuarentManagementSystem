export const state = () => ({
    itemCode: 0,
    itemCategory:"",
    itemName: "",
    itemBrand:"",
    itemQuantity: 0,
    storage: 0,
    requiredQ:0,
})
export const mutations = {
    storeIcode: (state, data) => {
        state.itemCode = data
    },
    storeIcategory: (state, data) => {
        state.itemCategory = data
    },
    storeIname: (state, data) => {
        state.itemName = data
    },
    storeIbrand: (state, data) =>{
        state.itemBrand = data
    },
    storeIquantity: (state, data) => {
        state.itemQuantity = data
    },
    storeStorage: (state, data) => {
        state.storage = data
    },
    storeRequiredQ: (state, data) => {
        state.requiredQ = data
    }
}