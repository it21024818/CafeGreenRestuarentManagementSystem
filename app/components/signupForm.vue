<template>
  <v-form  ref="form" v-model = "valid" lazy-validation class="loginForm">
        
        <br><br><br>
        <v-row>
                <v-text-field v-model="cusName" :rules="namerule" label="Name" counter ="50" placeholder="Full Name" class="field" required><br>
                  </v-text-field>
        </v-row>
        <v-row>
                <v-text-field v-model="cusEmail" type="text" :rules="emailrule" label="Email" counter ="50"  placeholder="Enter Email" class="field" id="field" required><br>
                  </v-text-field>
        </v-row>
        <v-row>
                <v-text-field v-model="cusNum" type="text" :rules="numberrule" label="Phone Number" counter ="10"  placeholder="Phone Number" class="field" required><br>
                      </v-text-field>
        </v-row>
        <!-- <v-row>
                <v-text-field v-model="cusPassword" type="text" :rules="passwordrules" label="Password" placeholder="Password" class="field" id="field" required><br>
                  </v-text-field> 
        </v-row> -->
       
        <v-btn class="formbtn"
        color="#20DC49"
        @click="submitUser({cusId, cusName, cusEmail, cusNum, cusPassword})"
        :disabled = "!valid"
        >
        {{cusId ? 'Edit' : 'Create Acoount'}}
        </v-btn>
    </v-form>
</template>

<script>

export default {
    data: () => ({
      valid: true,
      // full name: '',
      namerule: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 50) || 'Name must be less than 50 characters',
      ],
      valid: true,
      // email: '',
      emailrule: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      valid: true,
      // eaddress: '',
      numberrule: [
        v => !!v || 'Phone number is required',
        v => (v && v.length <= 10) || 'Phone number must be less than 10 numbers',
      ],
      // password: '',
      passwordrules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be more than 8 characters',
      ]
    }),

    computed:{
      cusId:{
        get(){
          return this.$store.state.customer.cusId
        },
        set(value){
          this.$store.commit("customer/storeCusId", value)
        }
      },

      cusName:{
        get(){
          return this.$store.state.customer.cusName
        },
        set(value){
          this.$store.commit("customer/storeCusName", value)
        }
      },

      cusEmail:{
        get(){
          return this.$store.state.customer.cusEmail
        },
        set(value){
          this.$store.commit("customer/storeEmail", value)
        }
      },

      cusNum:{
        get(){
          return this.$store.state.customer.cusNum
        },
        set(value){
          this.$store.commit("customer/storeCusNum", value)
        }
      },

      cusPassword:{
        get(){
          return this.$store.state.customer.cusPassword
        },
        set(value){
          this.$store.commit("customer/storeCusPassword", value)
        }
      },

    },

    methods:{
      async submitUser(customer){
        if(customer.cusId){
          await this.$axios.put("http://localhost:8000/customers/" + customer.cusId, customer)
        }else{
          await this.$axios.post("http://localhost:8000/customers/", customer)
        }
        await this.resetForm({cusId:0, cusName:'', cusEmail:'', cusNum:'', cusPassword:''})
        await this.$store.commit("users/storeData", (await this.$axios.get('http://localhost:8000/customers/')).data)
      },
      resetForm(customer){
        this.$store.commit("customer/storeCusId", customer.cusId);
        this.$store.commit("customer/storeCusName", customer.cusName);
        this.$store.commit("customer/storeEmail", customer.cusEmail);
        this.$store.commit("customer/storeCusNum", customer.cusNum);
        this.$store.commit("customer/storeCusPassword", customer.cusPassword);
      },
      // validate () {
      //   this.$refs.form.validate()
      // },
    },

}
</script>


<style scoped>

.field {
    width: 40%;
    padding: 10px 20px;
    margin-bottom: 20px;
    margin-left: 45px;
    margin-right: 45px;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
}

.loginForm {
    width: 85%;
    margin-top: 0;
    padding-top: 0;
    margin-left: 10px;
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