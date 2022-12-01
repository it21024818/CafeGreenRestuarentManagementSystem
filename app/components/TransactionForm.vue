<template>
    <v-form class="form-v" v-model="valid"
    lazy-validation>
      <v-text-field :rules="transacTypeRules" v-model="stcname" label="Company Name"></v-text-field>
      <v-text-field :rules="transacTypeRules" v-model="stdate" label="Date" type="date"></v-text-field>
      <v-text-field :rules="transacTypeRules" v-model="stitem"  label="Item"></v-text-field>
      <v-text-field :rules="transacQuantityRules" v-model="stquantity" counter ="7" label="Quantity"></v-text-field>
      <v-text-field :rules="transacQuantityRules" v-model="stamount" counter ="7" label="Amount"></v-text-field>

      <v-btn :disabled="!valid" color="#20DC49" @click="submitTransac({stid, stcname, stdate, stitem, stquantity, stamount})">
        {{stid ? 'Edit' : 'Submit'}}
      </v-btn>
      <!-- <v-btn @click="clear">
        clear
      </v-btn> -->
    </v-form>
</template>

<script>
export default {
  //form validation
    data: () => ({
      valid: true,
    
      transacTypeRules: [
        v => !!v || 'This field is required',
      ],

      transacQuantityRules: [
        v => !!v || 'This field is required',
        v => (v && v.length <= 7) || 'This field should not exceed 7 digits',
      ],

    }),

  computed:{
    stid:{
      get(){
        return this.$store.state.transaction.stid
      },
      set(value){
        this.$store.commit("transaction/storeStId", value)
      }
    },
    stcname:{
      get(){
        return this.$store.state.transaction.stcname
      },
      set(value){
        this.$store.commit("transaction/storeStCname", value)
      }
    },
    stdate:{
      get(){
        return this.$store.state.transaction.stdate
      },
      set(value){
        this.$store.commit("transaction/storeStDate", value)
      }
    },
    stitem:{
      get(){
        return this.$store.state.transaction.stitem
      },
      set(value){
        this.$store.commit("transaction/storeStItem", value)
      }
    },
    stquantity:{
      get(){
        return this.$store.state.transaction.stquantity
      },
      set(value){
        this.$store.commit("transaction/storeStQuantity", value)
      }
    },
    stamount:{
      get(){
        return this.$store.state.transaction.stamount
      },
      set(value){
        this.$store.commit("transaction/storeStAmount", value)
      }
    },
  },
  methods:{
    async submitTransac(transaction){
      if (transaction.stid) {
        await this.$axios.put("http://localhost:8000/transac/" + transaction.stid, transaction);
      } else {
        await this.$axios.post("http://localhost:8000/transac/", transaction);
      }
      await this.resetForm({stid:0, stcname:'', stdate:'', stitem:'', stquantity:'', stamount:''});
      await this.$store.commit("transactions/storeData", (await this.$axios.get('http://localhost:8000/transac/')).data);
    },
    resetForm(transaction){
      this.$store.commit("transaction/storeStId",transaction.stid);
      this.$store.commit("transaction/storeStCname", transaction.stcname);
      this.$store.commit("transaction/storeStDate", transaction.stdate);
      this.$store.commit("transaction/storeStItem", transaction.stitem);
      this.$store.commit("transaction/storeStQuantity", transaction.stquantity);
      this.$store.commit("transaction/storeStAmount", transaction.stamount);
    },
  },
}
</script>

<style>
*{
    padding: 0px;
    margin: 0px;
    list-style-type: none;
    text-decoration: none;
    font-family: 'Jost';
}

.form-v{
  height: 500px;
  width: 400px;
  background: #ffffff;
  padding: 50px;
  border-radius: 20px;
  margin-top: 30px;
  margin-left: 90px;
  margin-right: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.form-v h4{
  margin-bottom: 40px;
}
</style>
