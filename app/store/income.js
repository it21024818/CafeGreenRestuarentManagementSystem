export const state = () => ({
        iTransID: 0,
        iDescription:"",
        iValue: 0,
        iDate:""
    })
    export const mutations = {
        storeITransID: (state, data) => {
            state.iTransID = data
        },
        storeIDescription: (state, data) => {
            state.iDescription = data
        },
        storeIValue: (state, data) => {
            state.iValue = data
        },
        storeIDate: (state, data) =>{
            state.iDate = data
        }
    }
    
    