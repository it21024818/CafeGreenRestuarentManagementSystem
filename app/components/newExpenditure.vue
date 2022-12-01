<template>
    <v-form class="loginForm" v-model="valid"
    lazy-validation>
        <v-row>
                <h4>Add Expense</h4>
        </v-row>
        <hr><br><br>
        <v-row>
                <h5>Description</h5><br>
                <v-text-field :rules="cardTypeRules" type="text" v-model="eDescription" placeholder="Enter Description" class="field" required></v-text-field><br>
        </v-row>
        <v-row>
                <h5>Value</h5><br>
                <v-text-field :rules="cardTypeRules" text-fieldut type="text" v-model="eValue" placeholder="Enter Value" class="field" required></v-text-field><br>
        </v-row>
        <v-row>
                <h5>Date</h5><br>
                <v-text-field :rules="cardTypeRules" type="date" v-model="eDate" placeholder="" class="field" id="field" required></v-text-field><br>
        </v-row>
       
        <v-btn class="formbtn"
        :disabled="!valid"
        color="#20DC49"
        @click="submitUser({eTransID,eDescription,eValue,eDate})"
        >
        {{eTransID ? 'Edit' : 'Save'}}
        </v-btn>
    </v-form>
</template>
<script>
  export default {

    //form validation
    data: () => ({
      valid: true,

    
      cardTypeRules: [
        v => !!v || 'This field is required',
      ],
  
    }),

    computed:{
      eTransID:{
        get(){
          return this.$store.state.expense.eTransID
        },
        set(value){
          this.$store.commit("expense/storeETransID", value)
        }
      },
      eDescription:{
        get(){
          return this.$store.state.expense.eDescription
        },
        set(value){
          this.$store.commit("expense/storeEDescription", value)
        }
      },
      eValue:{
        get(){
          return this.$store.state.expense.eValue
        },
        set(value){
          this.$store.commit("expense/storeEValue", value)
        }
      },
      eDate:{
        get(){
          return this.$store.state.expense.eDate
        },
        set(value){
          this.$store.commit("expense/storeEDate", value)
        }
      },
      
    },
    methods:{
      async submitUser(expense){
        if(expense.eTransID){
          await this.$axios.put("http://localhost:8000/expenses/" + expense.eTransID, expense)
        }else{
          await this.$axios.post("http://localhost:8000/expenses/", expense)
        }
        await this.resetForm({eTransID:0, eDescription:'', eValue:0, eDate:'' })
        await this.$store.commit("users/storeData", (await this.$axios.get('http://localhost:8000/expenses/')).data)
      },
      resetForm(expense){
        this.$store.commit("expense/storeETransID", expense.eTransID);
        this.$store.commit("expense/storeEDescription", expense.eDescription);
        this.$store.commit("expense/storeEValue", expense.eValue);
        this.$store.commit("expense/storeEDate", expense.eDate);
       
      },
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
#field {
  margin-right: 40px;
}
.formbtn {
    padding: 10px 50px;
    border-radius: 10px;
    text-align: center;
    background-color: #20DC49;
    margin-top: 50px;
    margin-right: 70px;
    margin-left: 50px;
    margin-bottom: 50px;
}
</style>