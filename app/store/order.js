export const state = () => ({
    orderId: 0,
    cusName:"",
    orderType: "",
    orderDateTime:"",
    fooditems: "",
    quantity: 0,
    orderTotal:0,
    status:"",

})

export const mutations = {
    storeOrderId: (state, data) => {
        state.orderId = data
    },
    storeCusName: (state, data) => {
        state.cusName = data
    },
    storeOrderType: (state, data) => {
        state.orderType = data
    },
    storeOrderDateTime: (state, data) => {
        state.orderDateTime = data
    },
    storeFooditems: (state, data) => {
        state.fooditems = data
    },
    storeQuantity: (state, data) => {
        state.quantity = data
    },
    storeOrderTotal: (state, data) => {
        state.orderTotal = data
    },
    storeStatus: (state, data) => {
        state.status = data
    }
}