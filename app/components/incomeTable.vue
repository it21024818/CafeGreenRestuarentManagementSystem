<template> 
<v-card class="details" id="cards" ref="document">
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
      id="cards"
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
  
    export default {
      data () {
        return {
          search: '',
          headers: [
            { text: 'Transaction ID', value: 'iTransID' },
            { text: 'Description', value: 'iDescription' },
            { text: 'Value', value: 'iValue' },
            { text: "Date", value: 'iDate' },
            { text: 'Edit', value: 'edit' },
            { text: 'Remove', value: 'delete' },
          ],
          
        };
      },
      computed: {
        users(){
          return this.$store.state.users.data
        }
  
      },
  
      async fetch(){
        await this.$store.commit('users/storeData', (await this.$axios.get('http://localhost:8000/incomes/')).data)
      },
      methods: {
        editItem(income){
          this.$store.commit("income/storeITransID", income.iTransID);
          this.$store.commit("income/storeIDescription", income.iDescription);
          this.$store.commit("income/storeIValue", income.iValue);
          this.$store.commit("income/storeIDate", income.iDate);
        },
        async deleteItem(income){
          await this.$axios.delete("http://localhost:8000/incomes/" + income.iTransID, income);
          this.$store.commit(
            "users/storeData",
            (await this.$axios.get("http://localhost:8000/incomes/")).data
          );
        },
  
      },
    }
  
</script>
  
<style scoped>
  
  .details {
      width: 40%;
      float: left;
      height: 570px;
      background: #ffffff;
      border-radius: 20px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  
  #cards {
      border-collapse: collapse;
      height: 600px;
      width: 100%;
      background: rgb(241, 245, 248);
  }
  
  #cards td, #cards th {
      border-bottom: 1px solid #ddd;
      text-align: center;
      font-size: 10px;
      padding:15px;
  }
  
  #cards tr:hover {
      background-color: #F0F0F0;
  }
  
  #cards th {
      text-align: center;
      background-color: #F0F0F0;
      color: #5A5A5A;
      font-size: 10px;
  }
  
  #cards tr:first-of-type th:first-of-type {
      border-radius:20px 0 0 0;
  }
  
  #cards tr:first-of-type th:last-of-type{
      border-radius:0 20px 0 0;
  }
  
  .Update-vendor {
      padding: 3px 10px;
      border-radius: 10px;
      background-color: #20DC49;
      font-size: 8px;
      margin-bottom: 3px;
  }
  
  .Delete-vendor {
      padding: 3px 10px;
      border-radius: 10px;
      background-color: #aa1717;
      font-size: 8px;
  }
</style>