export const state = () => ({
        feedbackId: 0,
        feedbackCustName:"",
        feedbackCustEmail: "",
        feedback:""
    })
    export const mutations = {
        storefeedbackId: (state, data) => {
            state.feedbackId = data
        },
        storefeedbackCustName: (state, data) => {
            state.feedbackCustName = data
        },
        storefeedbackCustEmail: (state, data) => {
            state.feedbackCustEmail = data
        },
        storefeedback: (state, data) =>{
            state.feedback = data
        }
    }
    
    