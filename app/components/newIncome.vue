<template>
    <v-form class="loginForm">
        <v-row>
                <h4>Add Income</h4>
        </v-row>
        <hr><br><br>
        <v-row>
                <h5>Description</h5><br>
                <input type="text" v-model="iDescription" placeholder="Enter Description" class="field" required><br>
        </v-row>
        <v-row>
                <h5>Value</h5><br>
                <input type="text" v-model="iValue" placeholder="Enter Value" class="field" id="field" required><br>
        </v-row>
        <v-row>
                <h5>Date</h5><br>
                <input type="date" v-model="iDate" placeholder="" class="field" required><br>
        </v-row>
       
        <v-btn class="formbtn"
        color="#20DC49"
        @click="submitUser({iTransID, iDescription,iValue,iDate})"
        >
        {{iTransID ? 'Edit' : 'Save'}}
        </v-btn>
    </v-form>
</template>
<script>
  export default {
    computed:{
      iTransID:{
        get(){
          return this.$store.state.income.iTransID
        },
        set(value){
          this.$store.commit("income/storeITransID", value)
        }
      },
      iDescription:{
        get(){
          return this.$store.state.income.iDescription
        },
        set(value){
          this.$store.commit("income/storeIDescription", value)
        }
      },
      iValue:{
        get(){
          return this.$store.state.income.iValue
        },
        set(value){
          this.$store.commit("income/storeIValue", value)
        }
      },
      iDate:{
        get(){
          return this.$store.state.income.iDate
        },
        set(value){
          this.$store.commit("income/storeIDate", value)
        }
      },
      
    },
    methods:{
      async submitUser(income){
        if(income.iTransID){
          await this.$axios.put("http://localhost:8000/incomes/" + income.iTransID, income)
        }else{
          await this.$axios.post("http://localhost:8000/incomes/", income)
        }
        await this.resetForm({iTransID:0, iDescription:'', iValue:0, iDate:'' })
        await this.$store.commit("users/storeData", (await this.$axios.get('http://localhost:8000/incomes/')).data)
      },
      resetForm(income){
        this.$store.commit("income/storeITransID", income.iTransID);
        this.$store.commit("income/storeIDescription", income.iDescription);
        this.$store.commit("income/storeIValue", income.iValue);
        this.$store.commit("income/storeIDate", income.iDate);
        },
    },
  };
</script>
<style scoped>
.field {
    width: 80%;
    padding: 10px 20px;
    margin-bottom: 20px;
    margin-left: 45px;
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
    margin-top: 50px;
    margin-right: 70px;
    margin-left: 50px;
    margin-bottom: 50px;
}
</style>