export const state = () =>({
    vid:0,
    vname:"",
    vcontact:"",
    vtype:"",
    vemail:"",
    vzip:"",
    vaddress:"",
})

export const mutations = {
    storeVId: (state, data)=>{
        state.vid = data
    },
    storeVName: (state, data)=>{
        state.vname = data
    },
    storeVContact: (state, data)=>{
        state.vcontact = data
    },
    storeVType: (state, data)=>{
        state.vtype = data
    },
    storeVEmail: (state, data)=>{
        state.vemail = data
    },
    storeVZip: (state, data)=>{
        state.vzip = data
    },
    storeVAddress: (state, data)=>{
        state.vaddress = data
    }
}
