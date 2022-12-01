<template>
    <v-form class="loginForm" v-model="valid"
    lazy-validation>
      
        <v-row>
                <h4>Event Form</h4>
        </v-row>
        <hr><br><br>
        <v-row>        
                <h5>Name</h5><br>              
                <v-text-field :rules="cardTypeRules" type="text" v-model="scheduleName" placeholder=" Enter Name" class="field" required></v-text-field><br>
        </v-row>
        <v-row>
                <v-col cols="5">
                    <h5>Address</h5>
                    <v-text-field :rules="cardTypeRules" type="text" v-model="scheduleAddress" placeholder="Enter Address" class="field" id="field" required></v-text-field><br>
                </v-col>
                <v-col cols="5">
                  <h5>Mobile Number</h5>
                  <v-text-field :rules="NumRules" type="text" v-model="scheduleMobilenumber" placeholder="076 123 4567" counter="10" class="field" required></v-text-field><br>
                </v-col>
        </v-row>
        <v-row>
                <h5>Date</h5><br>
                <v-text-field :rules="cardTypeRules" type="date" v-model="scheduleDate" placeholder="" class="field" required></v-text-field><br>
        </v-row>
        <v-row>
                <h5>Time</h5><br>
                <v-text-field :rules="cardTypeRules" type="Time" v-model="scheduleTime" placeholder="" class="field" required></v-text-field><br>
        </v-row>
        
        <v-row>
                <h5>Order Details</h5><br>
                <v-text-field :rules="cardTypeRules" type="text" v-model="scheduleOrderdetails" placeholder="Enter Details" class="field" id="field" required></v-text-field><br>
        </v-row>
        
      
        <v-btn class="formbtn"
        :disabled="!valid"
        color="#20DC49"
        @click="saveEvent({ scheduleId, scheduleName, scheduleAddress, scheduleMobilenumber, scheduleDate, scheduleTime, scheduleOrderdetails})"
        >
        {{ scheduleId ? 'Edit' : 'Save'}}
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
 
      NumRules: [
        v => !!v || 'This field is required',
        v => (v && v.length == 10) || 'Phone number must be 10 digits',
      ],
  
    }),

    computed:{
      scheduleId:{
        get(){
          return this.$store.state.event.scheduleId
        },
        set(value){
          this.$store.commit("event/storescheduleId", value)
        }
      },

      scheduleName:{
        get(){
          return this.$store.state.event.scheduleName
        },
        set(value){
            this.$store.commit("event/storescheduleName", value)
        }
      },

      scheduleAddress:{
        get(){
          return this.$store.state.event.scheduleAddress
        },
        set(value){
          this.$store.commit("event/storescheduleAddress", value)
        }
      },

      scheduleMobilenumber:{
        get(){
          return this.$store.state.event.scheduleMobilenumber
        },
        set(value){
            this.$store.commit("event/storescheduleMobilenumber", value)
        }
      },

      scheduleDate:{
        get(){
          return this.$store.state.event.scheduleDate
        },
        set(value){
            this.$store.commit("event/storescheduleDate", value)
        }
      },

      scheduleTime:{
        get(){
          return this.$store.state.event.scheduleTime
        },
        set(value){
            this.$store.commit("event/storescheduleTime", value)
        }
      },

      scheduleOrderdetails:{
        get(){
          return this.$store.state.event.scheduleOrderdetails
        },
        set(value){
            this.$store.commit("event/storeEventDetails", value)
        }
      },
    },

    methods:{
      async saveEvent(event){
        if (event.scheduleId){
            await this.$axios.put("http://localhost:8000/schedules/" + event.scheduleId, event)
        }else{
            await this.$axios.post("http://localhost:8000/schedules/", event)
        }
        await this.resetForm({ scheduleId: 0, scheduleName: '', scheduleMobilenumber:''})
            await this.$store.commit("users/storeData", (await this.$axios.get('http://localhost:8000/schedules/')).data)
      },
      resetForm(event){
          this.$store.commit("event/storescheduleId", event.scheduleId);
          this.$store.commit("event/storescheduleName", event.scheduleName);
          this.$store.commit("event/storescheduleAddress", event.scheduleAddress);
          this.$store.commit("event/storescheduleMobilenumber", event.scheduleMobilenumber);
          this.$store.commit("event/storescheduleDate", event.scheduleDate);
          this.$store.commit("event/storescheduleTime", event.scheduleTime);
          this.$store.commit("event/storeEventDetails", event.scheduleOrderdetails);
      },
    },
   
  };

</script>

<style scoped>

.field {
    width: 70%;
    padding: 10px 20px;

    border-radius: 10px;
}

.loginForm {
    width: 80%;
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
    margin-top: 10px;
    margin-right: 70px;
    margin-left: 200px;
    margin-bottom: 50px;
}

</style>