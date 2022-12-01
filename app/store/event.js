export const state = () => ({
    scheduleId: 0,
    scheduleName:"",
    scheduleAddress: "",
    scheduleMobilenumber:"",
    scheduleDate: "",
    scheduleTime:"",
    scheduleOrderdetails:"",

})

export const mutations = {
    storescheduleId: (state, data) => {
        state.scheduleId = data
    },
    storescheduleName: (state, data) => {
        state.scheduleName = data
    },
    storescheduleAddress: (state, data) => {
        state.scheduleAddress = data
    },
    storescheduleMobilenumber : (state, data) => {
        state.scheduleMobilenumber = data
    },
    storescheduleDate: (state, data) => {
        state.scheduleDate = data
    },
    storescheduleTime: (state, data) => {
        state.scheduleTime = data
    },
    storeEventDetails: (state, data) => {
        state.scheduleOrderdetails = data
    }
}