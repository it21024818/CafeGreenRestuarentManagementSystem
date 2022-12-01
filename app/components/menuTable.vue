<template>

   <v-card class="details" id="employees" ref="document">
      <v-card-title>
        <!-- search items in the table -->
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
      id="employees"
    >
      <template v-slot:[`item.edit`]="{ item }">
        <v-btn color="#20DC49" @click="editItem(item)"> Edit </v-btn>
      </template> 
      <template v-slot:[`item.delete`]="{ item }">
        <v-btn color="#aa1717" @click="deleteItem(item)"> Remove </v-btn>
      </template>
      
    </v-data-table>
    <v-btn class="formbtn" color="#20DC49" @click="exportToPDF">export as pdf</v-btn>
  </v-card>   
     
</template>
 
<script>
import html2pdf from "html2pdf.js";

 export default {
     data () {
       return {
         search: '',
         headers: [
           { text: 'Menu Item Name', value: 'mItemName'},
           { text: 'Menu Item Price', value: 'mItemPrice' },
           { text: 'Photo Link', value: 'mItemPhotoLink' },
            { text: 'Edit', value: 'edit' },
            { text: 'Remove', value: 'delete' },
         ],
         
       }; },
     computed: {
       users(){
         return this.$store.state.users.data
       }
     },
     async fetch(){
       await this.$store.commit('users/storeData', (await this.$axios.get('http://localhost:8000/menu/')).data)
     },
     methods: {
      //export the invoice as a pdf
      exportToPDF() {
        html2pdf(document.getElementById("employees"), {
          margin: 20,
          filename: "Menu Items.pdf",
        });
      },
      
       editItem(menu){
         this.$store.commit("menu/storeMenuItemID", menu.mItemID);
         this.$store.commit("menu/storeMenuItemName", menu.mItemName);
         this.$store.commit("menu/storeMenuItemPrice", menu.mItemPrice);
         this.$store.commit("menu/storeMenuItemPhotoLink", menu.mItemPhotoLink);
       },
       async deleteItem(menu){
         await this.$axios.delete('http://localhost:8000/menu/' + menu.mItemID, menu);
         this.$store.commit(
           "users/storeData",
           (await this.$axios.get("http://localhost:8000/menu/")).data
         );
       },
     },
   }
     
</script>
 
<style scoped>
 .details {
     width: 100%;
     float: left;
     height: 570px;
     background: #ffffff;
     border-radius: 20px;
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 }
 #employees {
     border-collapse: collapse;
     height: 570px;
     width: 100%;
 }
 #employees td, #employees th {
     border-bottom: 1px solid #ddd;
     text-align: center;
     font-size: 10px;
     padding:15px;
 }
 #employees tr:hover {
     background-color: #F0F0F0;
 }
 #employees th {
     text-align: center;
     background-color: #F0F0F0;
     color: #5A5A5A;
     font-size: 10px;
 }
 #employees tr:first-of-type th:first-of-type {
     border-radius:20px 0 0 0;
 }
 #employees tr:first-of-type th:last-of-type{
     border-radius:0 20px 0 0;
 }
 .formbtn {
    padding: 10px 50px;
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: #20DC49;
    margin-right: 70px;
    position: absolute;
    top: 88%;
    left: 30%;
}
</style>