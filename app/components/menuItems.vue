<template>
    <v-form  ref="form" v-model = "valid" lazy-validation class="loginForm">
          <v-row>
                  <h4>Add Menu Items</h4>
          </v-row>
          <hr><br><br>
          <v-row>
                  <v-text-field v-model="mItemName" :rules="nameRules" label="Item Name" counter ="1000" placeholder="Enter Item Name" class="field" required><br>
                    </v-text-field>
          </v-row>
          <v-row>
                  <v-text-field type="text" :rules="nameRules" label="Item Price" counter ="50" v-model="mItemPrice" placeholder="Enter Item Price" class="field" id="field" required><br>
                    </v-text-field>
          </v-row>
          <v-row>
                  <v-text-field type="text"  label="Photo Link" counter ="10000" v-model="mItemPhotoLink" placeholder="Enter the link here" class="field" required><br>
                        </v-text-field>
          </v-row>
          
          <v-btn class="formbtn"
          color="#20DC49"
          @click="submitUser({mItemID, mItemName, mItemPrice, mItemPhotoLink})"
          :disabled = "!valid"
          >
          {{mItemID ? 'Edit' : 'Save'}}
          </v-btn>
      </v-form>
</template>
  
  <script>
    export default {
      data: () => ({
        valid: true,
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 1000) || 'Name must be less than 1000 characters',
        ],
        valid: true,
        nameRules: [
          v => !!v || 'Price is required',
          v => (v && v.length <= 50) || 'Price must be less than 50 numbers',
        ],
        valid: true,
        addressRules: [
          v => !!v || 'Link is required',
          v => (v && v.length <= 10000) || 'Link must be less than 10000 characters',
        ],
      }),
      computed:{
        mItemID:{
          get(){
            return this.$store.state.menu.mItemID
          },
          set(value){
            this.$store.commit("menu/storeMenuItemID", value)
          }
        },
        mItemName:{
          get(){
            return this.$store.state.menu.mItemName
          },
          set(value){
            this.$store.commit("menu/storeMenuItemName", value)
          }
        },
        mItemPrice:{
          get(){
            return this.$store.state.menu.mItemPrice
          },
          set(value){
            this.$store.commit("menu/storeMenuItemPrice", value)
          }
        },
        mItemPhotoLink:{
          get(){
            return this.$store.state.menu.mItemPhotoLink
          },
          set(value){
            this.$store.commit("menu/storeMenuItemPhotoLink", value)
          }
        },
      },

      methods:{
        async submitUser(menu){
          if(menu.mItemID){
            await this.$axios.put("http://localhost:8000/menu/" + menu.mItemID, menu)
          }else{
            await this.$axios.post("http://localhost:8000/menu/", menu)
          }
          await this.resetForm({mItemID:0, mItemName:'', mItemPrice:'', mItemPhotoLink:''})
          await this.$store.commit("users/storeData", (await this.$axios.get('http://localhost:8000/menu/')).data)
        },

        resetForm(menu){
          this.$store.commit("menu/storeMenuItemID", menu.mItemID);
          this.$store.commit("menu/storeMenuItemName", menu.mItemName);
          this.$store.commit("menu/storeMenuItemPrice", menu.mItemPrice);
          this.$store.commit("menu/storeMenuItemPhotoLink", menu.mItemPhotoLink);
         },
        validate () {
          this.$refs.form.validate()
        },
      },
     
    }
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