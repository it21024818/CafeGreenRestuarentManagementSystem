<template>
    <v-form class="loginForm"
    ref="form"
    v-model="valid"
    lazy-validation>
      
        <v-row>
                <h4>Add Card</h4>
        </v-row>
        <hr><br>
        <v-row>        
                <!-- <h5>Card Type</h5><br>              
                <input type="text" v-model="cardtype" placeholder="ex: Visa" class="field" required><br> -->
                <v-text-field
                v-model="cardtype"
                :rules="cardTypeRules"
                label="Card Type"
                class="field"
                placeholder="ex: Visa"
                required
                ></v-text-field>
        </v-row>
        <v-row>        
                <!-- <h5>Card Number</h5><br>
                <input type="text" v-model="cardnum" placeholder="XXXX XXXX XXXX XXXX" class="field" id="field" required><br> -->
                <v-text-field
                v-model="cardnum"
                :rules="cardNumRules"
                label="Card Number"
                class="field"
                placeholder="XXXX XXXX XXXX XXXX"
                required
                ></v-text-field>
        </v-row>
        <v-row>
                <v-col cols="5">
                    <!-- <h5>Expiry Date</h5>
                    <input type="text" v-model="exdate" placeholder="MM/YY" class="field" required><br> -->
                    <v-text-field
                    v-model="exdate"
                    :rules="exdateRules"
                    label="Expiry Date"
                    class="field"
                    placeholder="MM/YY"
                    type="month"
                    required
                    ></v-text-field>
                </v-col>
                <v-col cols="5">
                    <!-- <h5>CVV</h5>
                    <input type="text" v-model="cvv" placeholder="CVV" class="field" id="field" required><br> -->
                    <v-text-field
                    v-model="cvv"
                    :rules="cvvRules"
                    label="CVV"
                    class="field"
                    placeholder="CVV"
                    required
                    ></v-text-field>
                </v-col>
        </v-row>
        <v-row>
                <!-- <h5>Cardholder's Name</h5><br>
                <input type="text" v-model="cardname" placeholder="Jane Doe" class="field" required><br> -->
                <v-text-field
                v-model="cardname"
                :rules="cardnameRules"
                label="Cardholder's Name"
                class="field"
                placeholder="Jane Doe"
                required
                ></v-text-field>
        </v-row>
        <v-row>
                <!-- <h5>Billing Address</h5><br>
                <input type="text" v-model="billaddress" placeholder="Address" class="field" id="field" required><br> -->
                <v-text-field
                v-model="billaddress"
                :rules="billaddressRules"
                label="Billing Address"
                class="field"
                placeholder="Jane Doe"
                required
                ></v-text-field>
        </v-row>
      
        <v-btn class="formbtn"
        :disabled="!valid"
        color="#20DC49"
        @click="validate(); submitCard({cardId, cardtype, cardnum, exdate, cvv, cardname, billaddress});"
        >
        {{cardId ? 'Edit' : 'Save'}}
        </v-btn>
        
    </v-form>
</template>

<script>

  export default {

    //form validation
    data: () => ({
      valid: true,

    
      cardTypeRules: [
        v => !!v || 'Card type is required',
      ],
 
      cardNumRules: [
        v => !!v || 'Card number is required',
        // v => (v && v.length == 16) || 'Card number must be 16 digits',
      ],
   
      exdateRules: [
        v => !!v || 'Expiry date is required',
      ],
   
      cvvRules: [
        v => !!v || 'CVV is required',
        v => (v && v.length == 3) || 'CVV must be 3 digits',
      ],
  
      cardnameRules: [
        v => !!v || "Cardholder's Name is required",
      ],
  
      billaddressRules: [
        v => !!v || 'Billing Address is required',
      ],

    }),

    computed:{
    //getters and setters of the variables
      cardId:{
        get(){
          return this.$store.state.card.cardId;
        },
        set(value){
          this.$store.commit("card/storeId", value);
        }
      },

      cardtype:{
        get(){
          return this.$store.state.card.cardtype;
        },
        set(value){
          this.$store.commit("card/storeCardtype", value);
        }
      },

      cardnum:{
        get(){
          return this.$store.state.card.cardnum;
        },
        set(value){
          this.$store.commit("card/storeCardnum", value);
        }
      },

      exdate:{
        get(){
          return this.$store.state.card.exdate;
        },
        set(value){
          this.$store.commit("card/storeExdate", value);
        }
      },

      cvv:{
        get(){
          return this.$store.state.card.cvv;
        },
        set(value){
          this.$store.commit("card/storeCvv", value);
        }
      },

      cardname:{
        get(){
          return this.$store.state.card.cardname;
        },
        set(value){
          this.$store.commit("card/storeCardname", value);
        }
      },

      billaddress:{
        get(){
          return this.$store.state.card.billaddress;
        },
        set(value){
          this.$store.commit("card/storeBilladdress", value);
        }
      }

    },

    methods:{
      //inserting data to the database table
      async submitCard(card){
        if(card.cardId){
          //updating cards on cards table
          await this.$axios.put("http://localhost:8000/cards/" + card.cardId, card);
        }else{
          await this.$axios.post("http://localhost:8000/cards/", card);
        }
        await this.resetForm({cardId:0, cardtype:'', cardnum:'', exdate:'', cvv:'', cardname:'', billaddress:''});
        await this.$store.commit("users/storeData", (await this.$axios.get('http://localhost:8000/cards/')).data);
      },
      resetForm(card){
        this.$store.commit("card/storeId", card.cardId);
        this.$store.commit("card/storeCardtype", card.cardtype);
        this.$store.commit("card/storeCardnum", card.cardnum);
        this.$store.commit("card/storeExdate", card.exdate);
        this.$store.commit("card/storeCvv", card.cvv);
        this.$store.commit("card/storeCardname", card.cardname);
        this.$store.commit("card/storeBilladdress", card.billaddress);
      },

      validate () {
        this.$refs.form.validate()
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
    margin-right: 50px;
    border-radius: 10px;
    background: #ffffff;
}

.loginForm {
    width: 95%;
    float: right;
    margin-top: 0;
    padding-top: 0;
    background: #ededed;
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
    margin-top: 20px;
    margin-right: 70px;
    margin-left: 42%;
    margin-bottom: 20px;
}

</style>