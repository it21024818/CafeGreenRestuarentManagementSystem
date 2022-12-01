<template>
    <v-form class="loginForm" v-model="valid" lazy-validation>
      
        <v-row>
                <h4>Add Stocks</h4>
        </v-row>
        <hr><br>
        <!-- <v-row>        
                <h5>Item Code</h5><br>              
                <input type="text" v-model="itemCode" placeholder="Enter Item Code" class="field" required><br>
        </v-row> -->
        <v-row>        
                <h5>Item Category</h5><br>
                <v-text-field :rules="requiredRules" type="text" v-model="itemCategory" placeholder="Enter Item Category" class="field" id="field" required></v-text-field><br>
        </v-row>
        <v-row>

        </v-row>
        <v-row>
                <h5>Item Name</h5><br>
                <v-text-field :rules="requiredRules" type="text" v-model="itemName" placeholder="Enter Item Name" class="field" required></v-text-field><br>
        </v-row>
        <v-row>
                <h5>Item Brand</h5><br>
                <v-text-field :rules="requiredRules" type="text" v-model="itemBrand" placeholder="Enter Item Brand" class="field" id="field" required></v-text-field><br>
        </v-row>
        <v-row>
                <h5>Item Quantity</h5><br>
                <v-text-field :rules="requiredRules" type="text" v-model="itemQuantity" placeholder="Enter Item Quantity" class="field" id="field" required></v-text-field><br>
        </v-row>
        <v-row>
                <h5>Storage</h5><br>
                <v-text-field :rules="requiredRules" type="text" v-model="storage" placeholder="Storage" class="field" id="field" required></v-text-field><br>
        </v-row>
        <v-row>
                <h5>Required Quantity</h5><br>
                <v-text-field :rules="requiredRules" type="text" v-model="requiredQ" placeholder="Required Quantity" class="field" id="field" required></v-text-field><br>
        </v-row>
      
        <v-btn class="formbtn"
        :disabled="!valid"
        color="#20DC49"
        @click="confirmDEtails({itemCode, itemCategory, itemName, itemBrand, itemQuantity,storage,requiredQ})"
        >
        {{itemCode ? 'Edit' : 'Save'}}
        </v-btn>
        
    </v-form>
</template>

<script>

  export default {

    //form validation
    data: () => ({
      valid: true,

    
      requiredRules: [
        v => !!v || 'This field is required',
      ],

    }),

    computed:{
        itemCode:{
        get(){
          return this.$store.state.stock.itemCode
        },
        set(value){
          this.$store.commit("stock/storeIcode", value)
        }
      },

      itemCategory:{
        get(){
          return this.$store.state.stock.itemCategory
        },
        set(value){
          this.$store.commit("stock/storeIcategory", value)
        }
      },

      itemName:{
        get(){
          return this.$store.state.stock.itemName
        },
        set(value){
          this.$store.commit("stock/storeIname", value)
        }
      },

      itemBrand:{
        get(){
          return this.$store.state.stock.itemBrand
        },
        set(value){
          this.$store.commit("stock/storeIbrand", value)
        }
      },

      itemQuantity:{
        get(){
          return this.$store.state.stock.itemQuantity
        },
        set(value){
          this.$store.commit("stock/storeIquantity", value)
        }
      },

      storage:{
        get(){
          return this.$store.state.stock.storage
        },
        set(value){
          this.$store.commit("stock/storeStorage", value)
        }
      },

      requiredQ:{
        get(){
          return this.$store.state.stock.requiredQ
        },
        set(value){
          this.$store.commit("stock/storeRequiredQ", value)
        }
      },

    },

    methods:{
      async confirmDEtails(stock){
        if(stock.itemCode){
          await this.$axios.put("http://localhost:8000/stocks/" + stock.itemCode, stock)
        }else{
          await this.$axios.post("http://localhost:8000/stocks/", stock)
        }
        await this.resetForm({eid:0, empemail:'', emppass:''})
        await this.$store.commit("users/storeData", (await this.$axios.get('http://localhost:8000/stocks/')).data)
      },
      resetForm(stock){
        this.$store.commit("stock/storeIcode", stock.itemCode);
        this.$store.commit("stock/storeIcategory", stock.itemCategory);
        this.$store.commit("stock/storeIname", stock.itemName);
        this.$store.commit("stock/storeIbrand", stock.itemBrand);
        this.$store.commit("stock/storeIquantity", stock.itemQuantity);
        this.$store.commit("stock/storeStorage", stock.storage);
        this.$store.commit("stock/storeRequiredQ", stock.requiredQ);

      },
    },
   
  };

</script>

<style scoped>
* {
    padding: 0px;
    margin: 0px;
    list-style-type: none;
    text-decoration: none;
    font-family: 'Jost';
}

/* scroll bar */

*::-webkit-scrollbar {
    width: 12px;
}

*::-webkit-scrollbar-track {
    background: rgb(255, 255, 255);
}

*::-webkit-scrollbar-thumb {
    background-color: #F0F0F0;
    border-radius: 20px;
    border: 2px solid #D7D7D7;
}

/* topbar */
/* sidebar */
.rightContainer {
    margin-top: 30px;
    margin-right: 20px;
    padding: 0;
    float: right;
    width: 82%;
}

.rightContainer h4 {
    margin-bottom: 20px;
    text-align: left;
    color: #5A5A5A;
}

/*Right */
.details {
    width: 50%;
    float: right;
    height: 570px;
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    overflow-x: hidden;
    overflow-y:auto;
}

#stock {
    border-collapse: collapse;
    height: 570px;
    width: 100%;
}

#stock td, #stock th {
    border-bottom: 1px solid #ddd;
    text-align: center;
    font-size: 10px;
    padding:15px;
}

#stock tr:hover {
    background-color: #F0F0F0;
}

#stock th {
    text-align: center;
    background-color: #F0F0F0;
    color: #5A5A5A;
    font-size: 10px;
}

#stock tr:first-of-type th:first-of-type {
    border-radius:20px 0 0 0;
}

#stock tr:first-of-type th:last-of-type{
    border-radius:0 20px 0 0;
}

.Update-vendor {
    padding: 3px 10px;
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: #20DC49;
    font-size: 8px;
    margin-bottom: 3px;
    cursor: pointer;
}

.Delete-vendor {
    padding: 3px 10px;
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: #ffffff;
    font-size: 8px;
    cursor: pointer;
}

.field {
    width: 50px;
    height: 50px;
    padding: 10px 20px;
    border-radius: 10px;
   
}

.loginForm {
    width: 40%;
    height: 600px;
    float: left;
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

.formdiv-1 {
    margin-top: 20px;
    float: left;
}

.formdiv-2 {
    width: 50%;
    margin-top: 20px;
    float: right;
}

.pic img{
    width: 45px;
    padding: 10px;
    float: left;
}

.formbtn {
    padding: 10px 50px;
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: #20DC49;
    margin-top: 50px;
    margin-right: 50px;
    position: absolute;
    top: 80%;
    left: 25%;
}

.label {
    margin: 10px 50px;
    display: inline-block;
    float: left;
    clear: left;
    width: 250px;
    text-align: left;
}
</style>