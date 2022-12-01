export const state = () => ({
    eid: 0,
    efirstname:"",
    elastname: "",
    eaddress:"",
    empemail: "",
    hireddate: "",
    salary:0,
    role:"",
    noofleaves:0,
    emppass: ""
})
export const mutations = {
    storeEmpId: (state, data) => {
        state.eid = data
    },
    storeEmpFName: (state, data) => {
        state.efirstname = data
    },
    storeEmpLName: (state, data) => {
        state.elastname = data
    },
    storeEmpAddress: (state, data) =>{
        state.eaddress = data
    },
    storeEmpMail: (state, data) => {
        state.empemail = data
    },
    storeHiredDate: (state, data) => {
        state.hireddate = data
    },
    storeSalary: (state, data) => {
        state.salary = data
    },
    storeRole: (state, data) => {
        state.role = data
    },
    storeNoofLeaves: (state, data) => {
        state.noofleaves = data
    },
    storeEmpPass: (state, data) => {
        state.emppass = data
    }
}