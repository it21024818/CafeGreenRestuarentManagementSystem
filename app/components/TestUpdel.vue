<template>
  <v-card  id="stocks" ref="document">
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
      id="stocksdetails"
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
          { text: 'Item Category', value: 'itemCategory' },
          { text: 'Item Name', value: 'itemName' },
          { text: 'Item Brand', value: 'itemBrand' },
          { text: "Item Quantity", value: 'itemQuantity' },
          { text: 'Storage', value: 'storage' },
          { text: 'RequiredQ', value: 'requiredQ' },
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
      await this.$store.commit('users/storeData', (await this.$axios.get('http://localhost:8000/stocks/')).data)
    },
    methods: {

      //export the invoice as a pdf
      exportToPDF() {
        html2pdf(document.getElementById("stocksdetails"), {
          margin: 45,
          filename: "Stock Details.pdf",
        });
      },

      editItem(stock){
        this.$store.commit("stock/storeIcode", stock.itemCode);
        this.$store.commit("stock/storeIcategory", stock.itemCategory);
        this.$store.commit("stock/storeIname", stock.itemName);
        this.$store.commit("stock/storeIbrand", stock.itemBrand);
        this.$store.commit("stock/storeIquantity", stock.itemQuantity);
        this.$store.commit("stock/storeStorage", stock.storage);
        this.$store.commit("stock/storeRequiredQ", stock.requiredQ);
      },
      async deleteItem(stock){
        await this.$axios.delete('http://localhost:8000/stocks/' + stock.itemCode,  stock);
        this.$store.commit(
          "users/storeData",
          (await this.$axios.get("http://localhost:8000/stocks/")).data
        );
      },

    },
  }
    

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

</style>