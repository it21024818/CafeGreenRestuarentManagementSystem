<template>
    <div class="mainContainer">
        <div class="header">
            <h3 class="dashboardText1">Dashboard</h3>
            <a href="#"><h3 class="dashboardText2"><i class="uil uil-utensils-alt"></i>Place an Order</h3></a>
        </div>
        <div class="bottomDiv">
            <div class="leftDiv">
                <img src="../assets/dashboardpic1.png" alt="" class="picture">
            </div>
            <div class="rightDiv">
                <v-form  class="form">
                    <div class="fromdiv1">
                        <label class="textFont" id="field">Name<br>
                        <input type="text" v-model="efirstname" placeholder="Angelina Jolie" class="field" id="field"></label>
                        <div class="formsubdiv">
                            <label class="textFont">Phone Number<br>
                            <input type="text" v-model="salary" placeholder="071 234 5678" class="field" id="field"></label>
                        </div>
                    </div><br>
                    <div class="formdiv2">
                        <label class="textFont" id="field">Email<br>
                        <input type="text" v-model="empemail" placeholder="angelinajolie@email.com" class="field" id="field"></label><br>
                        <div class="buttons">
                            <button class="btn btn1">Update</button>
                            <button @click="deleteItem()" class="btn btn2">Delete</button>
                        </div>
                    </div>
                </v-form >
                <h4>Offers</h4>
                <div class="offers">
                    <div class="weekly">
                        <img src="../assets/WeeklyOffer.png" alt="" class="offerPicture">
                    </div>
                    <div class="special">
                        <img src="../assets/SpecialOffer.png" alt="" class="offerPicture">
                    </div>
                    <div class="foryou">
                        <img src="../assets/ForYou.png" alt="" class="offerPicture">
                    </div>
                </div>
                <div class="orderDetailsDiv">
                    <table id="ordertable">
                        <tr>
                            <th>Order Details</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                        <tr>
                            <td>Cheese buger</td>
                            <td>Rs. 1500</td>
                            <td>2022.08.30</td>
                        </tr>
                        <tr>
                            <td>Koththu</td>
                            <td>Rs. 1500</td>
                            <td>2022.08.90</td>
                        </tr>
                        <tr>
                            <td>Fried rice</td>
                            <td>Rs. 2000</td>
                            <td>2022.08.20</td>
                        </tr>
                    </table>
                </div>
                <v-card class="details" id="employees">
                    <v-card-title>
     
                        {{empemail}}
                    </v-card-title>
                          {{emppass}}    
                </v-card>   
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'customerDashboard',

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
        await this.$axios.delete('http://localhost:8000/employee/' + employee.empemail, employee);
        this.$store.commit(
          "users/storeData",
          (await this.$axios.get("http://localhost:8000/employee/")).data
        );
      },

    },
}

</script>

<style scoped>
.mainContainer{
    background-color: #F5F6F9;
    font-family: 'Jost';
}
.header{
    width: 100%;
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
}
.dashboardText1{
    background-color: transparent;
    padding-top: 15px;
    padding-left: 50px;
}
.dashboardText2{
    background-color: transparent;
    padding-top: 15px;
    padding-right: 50px;
}
i, a{
    background-color: transparent;
    padding-right: 10px;
    text-decoration: none;
    color: #000;
}
.dashboardText2:hover, i:hover{
    color: #20DC49;
    transition: 0.2s;
}
.bottomDiv{
    display: flex;
    justify-content: space-between;
}
.picture{
    width: 50vh;
    height: 105vh;
    object-fit: cover;
}
.rightDiv{
    padding-top: 50px;
    padding-right: 50px;
    width: 100%;
}
.form{
    text-align: left;
}
.fromdiv1{
    display: flex;
    margin-left: 50px;
}
.formdiv2{
    display: flex;
    margin-left: 50px;
}
.field{
    padding: 11px 20px;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    background-color: #fff;
    margin-top: 10px;
}
.formsubdiv{
    margin-left: 300px;
}
#textFont{
    font-size: 14px;
}
.textFont{
    font-size: 14px;
}
.buttons{
    margin-top: 30px;
    margin-left: 300px;
}
.btn{
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px none;
    background-color: #20DC49;
}
.btn2{
    margin-left: 40px;
}
.btn:hover{
    cursor: pointer;
}
h4 {
    text-align: left;
    margin-left: 50px;
    margin-top: 30px;
}
.offers{
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
}
.offerPicture{
    width: 90%;
}
/*table*/
table{
    width: 90%;
    margin: 50px;
    border-collapse: collapse;
}
td, th {
    border-bottom: 1px solid #F0F2F5;
    text-align: left;
    font-size: 14px;
    padding:15px;
    background-color: transparent;
    background-color: #fff;
}
td {
    padding: 20px;
}
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
