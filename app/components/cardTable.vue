<template> 
  <v-data-table
    :headers="headers"
    :items="users"
    class="details"
    id="cards"
  >
    <template v-slot:[`item.edit`]="{ item }">
      <v-btn color="#20DC49" @click="editItem(item)"> Edit </v-btn>
    </template> 
    <template v-slot:[`item.delete`]="{ item }">
      <v-btn color="#aa1717" @click="deleteItem(item)"> Remove </v-btn>
    </template>
    
  </v-data-table>
</template>

<script>

  export default {
    //displaying table
    data () {
      return {
        headers: [
          { text: 'Card Type', value: 'cardtype' },
          { text: 'Card Number', value: 'cardnum' },
          { text: 'Expiry Date', value: 'exdate' },
          { text: "Cardholder's Name", value: 'cardname' },
          { text: 'Billing Address', value: 'billaddress' },
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

    //retrieving data from the database
    async fetch(){
      await this.$store.commit('users/storeData', (await this.$axios.get('http://localhost:8000/cards/')).data)
    },
    methods: {
      //retrieving card details to the form
      editItem(card){
        this.$store.commit("card/storeId", card.cardId);
        this.$store.commit("card/storeCardtype", card.cardtype);
        this.$store.commit("card/storeCardnum", card.cardnum);
        this.$store.commit("card/storeExdate", card.exdate);
        this.$store.commit("card/storeCvv", card.cvv);
        this.$store.commit("card/storeCardname", card.cardname);
        this.$store.commit("card/storeBilladdress", card.billaddress);
      },
      //deleting cards on cards table
      async deleteItem(card){
        await this.$axios.delete("http://localhost:8000/cards/" + card.cardId, card);
        this.$store.commit(
          "users/storeData",
          (await this.$axios.get("http://localhost:8000/cards/")).data
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