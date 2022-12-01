<template>
    <v-form class="loginForm">
      
        <v-row>
                <h4>Make a Request</h4>
        </v-row>
        <hr><br><br>
        <v-row>        
                <h5>Date</h5><br>              
                <input type="text" v-model="ereqdate" placeholder="Enter First Name" class="field" required><br>
        </v-row>
        <v-row>        
                <h5>Enter your Email</h5><br>
                <input type="text" v-model="reqemail" placeholder="example@greencafe.com" class="field" id="field" required><br>
        </v-row>
        <v-row>
                <v-col cols="5">
                    <h5>Title</h5>
                    <input type="text" v-model="etitle" placeholder="name@example.com" class="field" required><br>
                </v-col>
                <v-col cols="5">
                    <h5>Message</h5>
                    <input type="text" v-model="emessage" placeholder="Enter Address" class="field" id="field" required><br>
                </v-col>
        </v-row>
      
        <v-btn class="formbtn"
        color="#20DC49"
        @click="submitUser({reqid,ereqdate,reqemail,etitle,emessage})"
        >
        {{reqid ? 'Edit' : 'Save'}}
        </v-btn>
        
    </v-form>
</template>

<script>

  export default {

    computed:{
      reqid:{
        get(){
          return this.$store.state.request.reqid
        },
        set(value){
          this.$store.commit("request/storeReqId", value)
        }
      },

      ereqdate:{
        get(){
          return this.$store.state.request.ereqdate
        },
        set(value){
          this.$store.commit("request/storeReqDate", value)
        }
      },

      reqemail:{
        get(){
          return this.$store.state.request.reqemail
        },
        set(value){
          this.$store.commit("request/storeReqEmail", value)
        }
      },

      etitle:{
        get(){
          return this.$store.state.request.etitle
        },
        set(value){
          this.$store.commit("request/storeReqTitle", value)
        }
      },

      emessage:{
        get(){
          return this.$store.state.request.emessage
        },
        set(value){
          this.$store.commit("request/storeReqMessage", value)
        }
      }

    },

    methods:{
      async submitUser(request){
        if(request.reqid){
          await this.$axios.post("http://localhost:8000/request/" + request.reqid, request)
        }else{
          await this.$axios.post("http://localhost:8000/request/", request)
        }
        await this.resetForm({reqid:0, ereqdate:'', reqemail:'',etitle:'' , emessage:''})
        await this.$axios.commit("users/storeData", (await this.$axios.get('http://localhost:8000/request/')).data)
      },
      resetForm(request){
        this.$store.commit("request/storeReqId", request.reqid);
        this.$store.commit("request/storeReqDate", request.ereqdate);
        this.$store.commit("request/storeReqEmail", request.reqemail);
        this.$store.commit("request/storeReqTitle", request.etitle);
        this.$store.commit("request/storeReqMessage", request.emessage);

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