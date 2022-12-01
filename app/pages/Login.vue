<template>
    <div class="login">
        <div class="leftContainer">
            <div class="header">
                <div class="logoPicture">
                    <router-link to="/"><LogoPic class="logopic"/></router-link>
                </div>
                <div class="headerText">
                    <p class="textLink">Don't have an account?</p>
                    <router-link to="/Signup"><p class="textLink" id="textLink">Sign Up!</p></router-link>
                    <a href=""></a>
                </div>
            </div>
            <v-form  class="loginForm" >
                <div class="div1">
                    <h1>Welcome Back</h1>
                    <h5 id="subtitle">Login into your account</h5>
                </div>
                <SocialButtons class="formstyle"/>
                <div class="formdiv">
                    <input type="text" v-model="empemail" placeholder="Email" class="field" id="field"><br><br>
                    <input type="password" v-model="emppass" placeholder="Password" class="field"><br>
                </div>
                <router-link to="/CustomerDashboard"><button @click="editItem()" class="formbtn">Login</button><br></router-link>
                <router-link to="/products"><button class="formbtn" id="formbtn">Continue as a guest</button></router-link>
            </v-form >
        </div>
        <div class="RightContainer">
            <img src="../assets/foods1.png" alt="" class="mainImg">
        </div>
    </div>
</template>

<script>
import LogoPic from '../components/Logo.vue'
import SocialButtons from '../components/socialMediaBtn.vue'

export default {
  name: 'LoginView',
  components: {
    LogoPic, SocialButtons
  },

  computed:{

    users(){
        return this.$store.state.users.data
    },

      eid:{
        get(){
          return this.$store.state.employee.eid
        },
        set(value){
          this.$store.commit("employee/storeEmpId", value)
        }
      },

      efirstname:{
        get(){
          return this.$store.state.employee.efirstname
        },
        set(value){
          this.$store.commit("employee/storeEmpFName", value)
        }
      },

      elastname:{
        get(){
          return this.$store.state.employee.elastname
        },
        set(value){
          this.$store.commit("employee/storeEmpLName", value)
        }
      },

      empemail:{
        get(){
          return this.$store.state.employee.empemail
        },
        set(value){
          this.$store.commit("employee/storeEmpMail", value)
        }
      },

      eaddress:{
        get(){
          return this.$store.state.employee.eaddress
        },
        set(value){
          this.$store.commit("employee/storeEmpAddress", value)
        }
      },

      hireddate:{
        get(){
          return this.$store.state.employee.hireddate
        },
        set(value){
          this.$store.commit("employee/storeHiredDate", value)
        }
      },

      salary:{
        get(){
          return this.$store.state.employee.salary
        },
        set(value){
          this.$store.commit("employee/storeSalary", value)
        }
      },
      role:{
        get(){
          return this.$store.state.employee.role
        },
        set(value){
          this.$store.commit("employee/storeRole", value)
        }
      },
      noofleaves:{
        get(){
          return this.$store.state.employee.noofleaves
        },
        set(value){
          this.$store.commit("employee/storeNoofLeaves", value)
        }
      },
      emppass:{
        get(){
          return this.$store.state.employee.emppass
        },
        set(value){
          this.$store.commit("employee/storeEmpPass", value)
        }
      },

    },

    async fetch(){
      await this.$store.commit('users/storeData', (await this.$axios.get('http://localhost:8000/employee/{empemail},{emppass}')).data)
    },

    methods: {
      editItem(employee){
        this.$store.commit("employee/storeEmpId", employee.eid);
        this.$store.commit("employee/storeEmpFName", employee.efirstname);
        this.$store.commit("employee/storeEmpLName", employee.elastname);
        this.$store.commit("employee/storeEmpMail", employee.empemail);
        this.$store.commit("employee/storeEmpAddress", employee.eaddress);
        this.$store.commit("employee/storeHiredDate", employee.hireddate);
        this.$store.commit("employee/storeNoofLeaves", employee.noofleaves);
        this.$store.commit("employee/storeSalary", employee.salary);
        this.$store.commit("employee/storeEmpPass", employee.emppass);
        this.$store.commit("employee/storeRole", employee.role);
      },
      async deleteItem(employee){
        await this.$axios.delete('http://localhost:8000/employee/' + employee.eid, employee);
        this.$store.commit(
          "users/storeData",
          (await this.$axios.get("http://localhost:8000/employee/")).data
        );
      },

    },
}
</script>

<style scoped>
.login{
    font-family: 'Jost';
    display: flex;
    justify-content: space-between;
    background-color: #F5F6F9;
}

.header{
    display: flex;
    justify-content: space-between;
}
.logopic{
    padding-left: 20px;
    padding-top: 15px;
}
.headerText{
    display: flex;
    padding-top: 50px;
}
a{
    text-decoration: none;
}
.textLink{
    font-size: 14px;
}
#textLink{
    color: #20DC49;
    padding-left: 5px;
}
#textLink:hover{
    cursor: pointer;
    color: #23b342;
    transition: 0.5s;
}
.div1{
    margin: 5px 0;
}
#subtitle{
    margin: 10px 0;
}
.loginForm{
    text-align: center;
    padding-top: 30px;
}
.formstyle{
    padding: 10px 0;
}
.field{
    width: 40%;
    padding: 15px 20px;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
}
#field{
    margin: 10px 0;
}
.formbtn{
    padding: 12px 125px;
    border-radius: 10px;
    border: 1px solid #20DC49;
    background-color: #F0F2F5;
    margin-top: 30px;
}
.formbtn:hover{
    cursor: pointer;
    background-color: #20DC49;
    transition: 0.4s;
}
#formbtn{
    padding: 10px 80px;
    background-color: #fff;
    border: 1px solid #817e7e;
}
#formbtn:hover{
    padding: 10px 80px;
    background-color: #20DC49;
    border: 1px solid #817e7e;
}
.mainImg{
    width: 100vh;
    height: 100vh;
    object-fit: cover;
}
/* cyrillic */
@font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zPtBhPNqw79Ij1E865zBUv7myjJTVFNIg8mg.woff2) format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zPtBhPNqw79Ij1E865zBUv7myjJTVPNIg8mg.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zPtBhPNqw79Ij1E865zBUv7myjJTVBNIg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>
