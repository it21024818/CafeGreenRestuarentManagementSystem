<template>
    <v-form class="form-v" v-model="valid"
    lazy-validation>
      <h4>Vendor Registration Form</h4>
      <!-- <v-text-field v-if="vid" v-model="vid"></v-text-field> -->
      <v-text-field :rules="vendorTypeRules" v-model="vname" label="Company Name"></v-text-field>
      <v-text-field :rules="vendorContactRules" v-model="vcontact" counter="10" label="Contact Number"></v-text-field>
      <v-text-field :rules="vendorTypeRules" v-model="vtype" label="Business Type"></v-text-field>
      <v-text-field :rules="vendorEmailRules" v-model="vemail" label="Email"></v-text-field>
      <v-text-field :rules="vendorZipRules" v-model="vzip" counter="5" label="Zip Code"></v-text-field>
      <v-text-field :rules="vendorTypeRules" v-model="vaddress" label="Address"></v-text-field>
      <v-btn :disabled="!valid" color="#20DC49" @click="submitVendor({vid, vname, vcontact, vtype, vemail, vzip, vaddress})">
        {{vid ? 'Edit' : 'Submit'}}
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
    
      vendorTypeRules: [
        v => !!v || 'This field is required',
      ],

      vendorContactRules: [
        v => !!v || 'This field is required',
        v => (v && v.length <= 10) || 'This field should not exceed 10 digits',
      ],

      vendorZipRules: [
        v => !!v || 'This field is required',
        v => (v && v.length <= 5) || 'This field should not exceed 5 digits',
      ],

      vendorEmailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

    }),

  computed:{
    vid:{
      get(){
        return this.$store.state.vendor.vid
      },
      set(value){
        this.$store.commit("vendor/storeVId", value)
      }
    },
    vname:{
      get(){
        return this.$store.state.vendor.vname
      },
      set(value){
        this.$store.commit("vendor/storeVName", value)
      }
    },
    vcontact:{
      get(){
        return this.$store.state.vendor.vcontact
      },
      set(value){
        this.$store.commit("vendor/storeVContact", value)
      }
    },
    vtype:{
      get(){
        return this.$store.state.vendor.vtype
      },
      set(value){
        this.$store.commit("vendor/storeVType", value)
      }
    },
    vemail:{
      get(){
        return this.$store.state.vendor.vemail
      },
      set(value){
        this.$store.commit("vendor/storeVEmail", value)
      }
    },
    vzip:{
      get(){
        return this.$store.state.vendor.vzip
      },
      set(value){
        this.$store.commit("vendor/storeVZip", value)
      }
    },
    vaddress:{
      get(){
        return this.$store.state.vendor.vaddress
      },
      set(value){
        this.$store.commit("vendor/storeVAddress", value)
      }
    },
  },
  methods:{
    async submitVendor(vendor){
      if (vendor.vid) {
        await this.$axios.put("http://localhost:8000/vendors/" + vendor.vid, vendor);
      } else {
        await this.$axios.post("http://localhost:8000/vendors/", vendor);
      }
      await this.resetForm({vid:0, vname:'', vcontact:'', vtype:'', vemail:'', vzip:'', vaddress:''});
      await this.$store.commit("users/storeData", (await this.$axios.get('http://localhost:8000/vendors/')).data);
    },
    resetForm(vendor){
      this.$store.commit("vendor/storeVId", vendor.vid);
      this.$store.commit("vendor/storeVName", vendor.vname);
      this.$store.commit("vendor/storeVContact", vendor.vcontact);
      this.$store.commit("vendor/storeVType", vendor.vtype);
      this.$store.commit("vendor/storeVEmail", vendor.vemail);
      this.$store.commit("vendor/storeVZip", vendor.vzip);
      this.$store.commit("vendor/storeVAddress", vendor.vaddress);
    },
  },
};
</script>

<style scoped>
*{
    padding: 0px;
    margin: 0px;
    list-style-type: none;
    text-decoration: none;
    font-family: 'Jost';
}

.form-v{
  height: 500px;
  width: 350px;
  background: #ffffff;
  padding: 50px;
  border-radius: 20px;
  margin-top: 55px;
  margin-left: 70px;
  margin-right: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.form-v h4{
  margin-bottom: 40px;
}

</style>