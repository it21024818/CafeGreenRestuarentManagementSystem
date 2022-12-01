<template>
    <v-card class="table-t" ref="document">
      <v-card-title>
        Transaction Details
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
        <v-data-table :headers="headers" :items="transactions" :search="search" id="transacdetails">
          <template v-slot:[`item.edit`]="{ item }">
              <v-btn color="#20DC49" @click="editItem(item)"> Edit </v-btn>
          </template>
          <template v-slot:[`item.delete`]="{ item }">
              <v-btn color="#aa1717" @click="deleteItem(item)"> Delete </v-btn>
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
          {
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Company Name', value:'stcname'},
          { text: 'Date', value:'stdate'},
          { text: 'Item', value:'stitem'},
          { text: 'Quantity', value:'stquantity'},
          { text: 'Amount', value:'stamount'},
          { text: 'Edit', value:'edit'},
          { text: 'Delete', value:'delete'},
        ],
      }
    },
    computed: {
      transactions(){
            return this.$store.state.transactions.data
        }
    },
    async fetch() {
        this.$store.commit(
            'transactions/storeData',
            (await this.$axios.get("http://localhost:8000/transac/")).data
        );
    },
    methods: {

      //export the invoice as a pdf
      exportToPDF() {
        html2pdf(document.getElementById("transacdetails"), {
          margin: 50,
          filename: "Transaction Details.pdf",
        });
      },

      editItem(transaction) {
        this.$store.commit("transaction/storeStId",transaction.stid);
        this.$store.commit("transaction/storeStCname", transaction.stcname);
        this.$store.commit("transaction/storeStDate", transaction.stdate);
        this.$store.commit("transaction/storeStItem", transaction.stitem);
        this.$store.commit("transaction/storeStQuantity", transaction.stquantity);
        this.$store.commit("transaction/storeStAmount", transaction.stamount);
      },
      async deleteItem(transaction) {
          await this.$axios.delete("http://localhost:8000/transac/" + transaction.stid, transaction);
          this.$store.commit(
            'transactions/storeData', 
            (await this.$axios.get("http://localhost:8000/transac/")).data);
      }
  }
};
</script>

<style>
.table-t{
  height: 500px;
  width: 1000px;
  background: #ffffff;
  padding: 50px;
  border-radius: 40px;
  margin-top: 50px;
  margin-left: 80px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>