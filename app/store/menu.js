export const state = () => ({
    mItemID: 0,
    mItemName:"",
    mItemPrice: "",
    mItemPhotoLink:"",
})
export const mutations = {
    storeMenuItemID: (state, data) => {
        state.mItemID = data
    },
    storeMenuItemName: (state, data) => {
        state.mItemName = data
    },
    storeMenuItemPrice: (state, data) => {
        state.mItemPrice = data
    },
    storeMenuItemPhotoLink: (state, data) =>{
        state.mItemPhotoLink = data
    }
}