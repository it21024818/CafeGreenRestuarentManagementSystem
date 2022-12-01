<template>
  <v-form  ref="form" v-model = "valid" lazy-validation class="loginForm">
        <v-row>
                <h4>Add Employee</h4>
        </v-row>
        <hr><br><br>
        <v-row>
                <v-text-field v-model="efirstname" :rules="nameRules" label="First Name" counter ="50" placeholder="Enter First Name" class="field" required><br>
                  </v-text-field>
        </v-row>
        <v-row>
                <v-text-field type="text" :rules="nameRules" label="Last Name" counter ="50" v-model="elastname" placeholder="Enter last name" class="field" id="field" required><br>
                  </v-text-field>
        </v-row>
        <v-row>
                <v-text-field type="text" :rules="emailRules" label="Employee email" counter ="50" v-model="empemail" placeholder="name@example.com" class="field" required><br>
                      </v-text-field>
        </v-row>
        <v-row>
                <v-text-field type="text" :rules="addressRules" label="Employee Address" counter ="150" v-model="eaddress" placeholder="Enter Address" class="field" id="field" required><br>
                  </v-text-field> 
        </v-row>
        <v-row>
                <v-text-field type="date"  label="Hired Date"  v-model="hireddate" class="field" required><br>
                  </v-text-field>
        </v-row>
        <v-row>
                <v-text-field type="text" :rules="salaryRules" label="Salary" counter ="7" v-model="salary" placeholder="Amount in Rs." class="field" id="field" required><br>
                  </v-text-field>
        </v-row>
        <v-row>
                <v-text-field type="text" v-model="role" placeholder="Ex: Cashier"  label="Role" class="field" id="field" required><br>
                  </v-text-field>
        </v-row>
        <v-row>
                <v-text-field type="text" :rules="leavesRules" label="No. of leaves" counter ="2" v-model="noofleaves" placeholder="Enter the number" class="field" id="field" required><br>
                  </v-text-field>
        </v-row>
        <!-- <v-row>
                <v-text-field type="text"  label="Password" counter ="7" v-model="emppass" placeholder="Ex:@greencafe123" class="field" id="field" required><br>
                  </v-text-field>
        </v-row> -->
        <v-btn class="formbtn"
        color="#20DC49"
        @click="submitUser({eid, efirstname, elastname, eaddress,hireddate,empemail, salary,role,noofleaves,emppass})"
        :disabled = "!valid"
        >
        {{eid ? 'Edit' : 'Save'}}
        </v-btn>
    </v-form>
</template>

<script>

  export default {

    data: () => ({
      valid: true,
      // efirstname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 50) || 'Name must be less than 50 characters',
      ],
      valid: true,
      // elastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 50) || 'Name must be less than 50 characters',
      ],
      valid: true,
      // eaddress: '',
      addressRules: [
        v => !!v || 'Address is required',
        v => (v && v.length <= 150) || 'Address must be less than 150 characters',
      ],
      // email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      valid: true,
      // salary: '',
      salaryRules: [
        v => !!v || 'Salary is required',
        v => (v && v.length <= 7) || 'Salary must be less than 7 characters',
      ],
      valid: true,
      // noofleaves: '',
      leavesRules: [
        v => !!v || 'Leaves is required',
        v => (v && v.length <= 7 && v <=20) || 'No. of Leaves must be less than 20 ',
      ],
    }),


    computed:{
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

    methods:{
      async submitUser(employee){
        if(employee.eid){
          await this.$axios.put("http://localhost:8000/employee/" + employee.eid, employee)
        }else{
          await this.$axios.post("http://localhost:8000/employee/", employee)
        }
        await this.resetForm({eid:0, empemail:'', emppass:''})
        await this.$store.commit("users/storeData", (await this.$axios.get('http://localhost:8000/employee/')).data)
      },
      resetForm(employee){
        this.$store.commit("employee/storeId", employee.eid);
        this.$store.commit("employee/storeEmpFName", employee.efirstname);
        this.$store.commit("employee/storeEmpLName", employee.elastname);
        this.$store.commit("employee/storeEmpMail", employee.empemail);
        this.$store.commit("employee/storeEmpAddress", employee.eaddress);
        this.$store.commit("employee/storeHiredDate", employee.hireddate);
        this.$store.commit("employee/storeSalary", employee.salary);
        this.$store.commit("employee/storeRole", employee.role);
        this.$store.commit("employee/storeNoofLeaves", employee.noofleaves);
        this.$store.commit("employee/storeEmpPass", employee.emppass);

      },
      // validate () {
      //   this.$refs.form.validate()
      // },
    },
   
  };

</script>

<style scoped>

.field {
    width: 50%;
    padding: 10px 20px;
    margin-bottom: 20px;
    margin-left: 45px;
    margin-right: 45px;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
}

.loginForm {
    width: 95%;
    float: right;
    margin-top: 0;
    padding-top: 0;
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.loginForm h5 {
    text-align: left;
    color: #5A5A5A;
    font-family: 'Jost';
    font-size: 12px;
    margin-left: 45px;
    margin-bottom: 0;
    padding-bottom: 0;
}

.loginForm h4 {
    color: #5A5A5A;
    text-align: left;
    font-family: 'Jost';
    margin: 30px 0px 30px 45px;
}

.loginForm hr {
    padding-left: 40px;
}

.formbtn {
    padding: 10px 50px;
    border-radius: 10px;
    text-align: center;
    background-color: #20DC49;
    margin-top: 30px;
    margin-right: 70px;
    margin-left: 50px;
    margin-bottom: 30px;
}

</style>