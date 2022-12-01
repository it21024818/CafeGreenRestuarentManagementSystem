<template>
    <div class="feedbackMain">
        <div class="leftContainer">
            <div class="fbText">
                <h1>Cutomer Feedback</h1>
            </div>
            <!-- <div class="fbForm">
                <input type="text" v-model="email" placeholder="Email" class="field" id="field"><br>
                <input type="password" v-model="password" placeholder="Password" class="field" id="field"><br>
                <textarea placeholder="Feedback" class="field"></textarea><br>
                <button class="formbtn">Submit</button>
            </div> -->
            

            <v-form class="fbForm">
                
                <hr><br><br>
                <v-row>
                        <h5 id="field">Name</h5><br>
                        <input type="text" v-model="feedbackCustName" :rules="namerule" placeholder="Name" class="field" required><br>
                </v-row>
                <v-row>
                        <h5 id="field">Email</h5><br>
                        <input type="text" v-model="feedbackCustEmail" :rules="emailrules" placeholder="Email" class="field" required><br>
                </v-row>
                <v-row>
                        <h5>Feedback</h5><br>
                        <input type="text" v-model="feedback" :rules="feedbackrule" placeholder="Feedback" class="field" required><br>
                </v-row>
            
                <v-btn class="formbtn"
                color="#20DC49"
                @click="submitUser({feedbackId,feedbackCustName,feedbackCustEmail,feedback})"
                >
                {{feedbackId ? 'Edit' : 'Save'}}
                </v-btn>
            </v-form>

        </div>
        <div class="rightContainer">
            <div class="upper">
                <!-- <img src="../assets/Feddback.png" alt="" class="picture"> -->
            </div>
            <!-- <div class="lower">
                <div class="fb1">
                    <feedbackComp />
                </div>
                <div class="fb2">
                    <feedbackComp />
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import feedbackComp from '../components/feedbacksArea.vue'
export default {
  name: 'feedbackArea',
  components: {
    feedbackComp
  },
  computed:{
    feedbackId:{
        get(){
          return this.$store.state.feedback.feedbackId
        },
        set(value){
          this.$store.commit("feedback/storefeedbackId", value)
        }
      },
      feedbackCustName:{
        get(){
          return this.$store.state.feedback.feedbackCustName
        },
        set(value){
          this.$store.commit("feedback/storefeedbackCustName", value)
        }
      },
      feedbackCustEmail:{
        get(){
          return this.$store.state.feedback.feedbackCustEmail
        },
        set(value){
          this.$store.commit("feedback/storefeedbackCustEmail", value)
        }
      },
      feedback:{
        get(){
          return this.$store.state.feedback.feedback
        },
        set(value){
          this.$store.commit("feedback/storefeedback", value)
        }
      },
      
    },
    methods:{
      async submitUser(feedback){
        if(feedback.feedbackId){
          await this.$axios.put("http://localhost:8000/feedbacks/" + feedback.feedbackId, feedback)
        }else{
          await this.$axios.post("http://localhost:8000/feedbacks/", feedback)
        }
        await this.resetForm({feedbackId:0, fbCustName:'', fbCustEmail:'', fbDesc:'' })
        await this.$store.commit("users/storeData", (await this.$axios.get('http://localhost:8000/feedbacks/')).data)
      },
      resetForm(feedback){
        this.$store.commit("feedback/storeETransID", feedback.feedbackId);
        this.$store.commit("feedback/storeEDescription", feedback.feedbackCustName);
        this.$store.commit("feedback/storeEValue", feedback.feedbackCustEmail);
        this.$store.commit("feedback/storeEDate", feedback.feedback);
       
      },
    },
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
      feedbackrule: [
        v => !!v || 'Feedback is required',
        v => (v && v.length <= 150) || 'Feedback must be less than 50 characters',
      ]
    })
}

</script>

<style scoped>
.feedbackMain{
    display: flex;
    margin: 50px;
}
.leftContainer{
    margin-left: 230px;
}
.fbText{
    margin-bottom: 40px;
    margin-top: 20px;
}
.field{
    padding: 15px 0;
    padding-right: 100px;
    padding-left: 10px;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    margin: 25px;
    background-color: #fff;
}
#field{
  margin-right: 20px;
}
.formbtn{
    padding: 12px 80px;
    border-radius: 10px;
    border: 1px solid #20DC49;
    background-color: #20DC49;
    margin-top: 30px;
}
.formbtn:hover{
    cursor: pointer;
    border: 1.5px solid #117727;
    transition: 0.1s;
}
.rightContainer{
    margin-left: 50px;
}
.picture{
    width: 70%;
}
.upper{
    margin-left: -20px;
}
.lower{
    margin-left: 100px;
}
.fb1, .fb2{
    margin: 15px 0;
}
</style>
