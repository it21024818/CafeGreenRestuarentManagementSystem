<template>
  <v-card class="table-t" ref="document" >
    <v-card-title>
      Details of Vendors
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="users" :search="search" id="vendorinfo">
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
                value: 'vname',
              },
                { text: 'Name', value:'vname'},
                { text: 'Contact', value:'vcontact'},
                { text: 'Business Type', value:'vtype'},
                { text: 'Email', value:'vemail'},
                { text: 'Zip Code', value:'vzip'},
                { text: 'Address', value:'vaddress'},
                { text: 'Edit', value:'edit'},
                { text: 'Delete', value:'delete'},
            ],
        }
    },
    computed: {
        users(){
            return this.$store.state.users.data
        }
    },
    async fetch() {
        this.$store.commit(
            'users/storeData',
            (await this.$axios.get("http://localhost:8000/vendors/")).data
        );
    },
    methods: {

      //export the invoice as a pdf
      exportToPDF() {
        html2pdf(document.getElementById("vendorinfo"), {
          margin: 20,
          filename: "Vendors Details.pdf",
        });
      },

        editItem(vendor) {
          this.$store.commit("vendor/storeVId", vendor.vid);
          this.$store.commit("vendor/storeVName", vendor.vname);
          this.$store.commit("vendor/storeVContact", vendor.vcontact);
          this.$store.commit("vendor/storeVType", vendor.vtype);
          this.$store.commit("vendor/storeVEmail", vendor.vemail);
          this.$store.commit("vendor/storeVZip", vendor.vzip);
          this.$store.commit("vendor/storeVAddress", vendor.vaddress);
        },
        async deleteItem(vendor) {
            await this.$axios.delete("http://localhost:8000/vendors/" + vendor.vid, vendor);
            this.$store.commit(
              'users/storeData', 
              (await this.$axios.get("http://localhost:8000/vendors/")).data);
        },


    },
};
</script>

<style>
.table-t{
  height: 800px;
  width: 850px;
  background: #ffffff;
  padding: 50px;
  border-radius: 40px;
  margin-top: 40px;
  margin-left: 80px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>