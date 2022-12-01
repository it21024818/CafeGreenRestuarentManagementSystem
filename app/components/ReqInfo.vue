<template>
    
    <v-data-table
    :headers="headers"
    :items="users"
    class="details"
    id="request"
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
    data () {
      return {
        headers: [
          { text: 'Date', value: 'ereqdate' },
          { text: 'Email', value: 'reqemail' },
          { text: 'Title', value: 'etitle' },
          { text: "Message", value: 'emessage' }
        ],
        
      }; },
    computed: {
      users(){
        return this.$store.state.users.data
      }

    },

    async fetch(){
      await this.$store.commit('users/storeData', (await this.$axios.get('http://localhost:8000/cards/')).data)
    },
    methods: {
      editItem(request){
        this.$store.commit("request/storeReqId", request.reqid);
        this.$store.commit("request/storeReqDate", request.ereqdate);
        this.$store.commit("request/storeReqEmail", request.reqemail);
        this.$store.commit("request/storeReqTitle", request.etitle);
        this.$store.commit("request/storeReqMessage", request.emessage);
        
      },
      async deleteItem(reqid){
        await this.$axios.delete('http://localhost:8000/cards/{cardId}' + reqid);
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

#request {
    border-collapse: collapse;
    height: 570px;
    width: 100%;
}
#request td, #employees th {
    border-bottom: 1px solid #ddd;
    text-align: center;
    font-size: 10px;
    padding:15px;
}
#request tr:hover {
    background-color: #F0F0F0;
}

#request th {
    text-align: center;
    background-color: #F0F0F0;
    color: #5A5A5A;
    font-size: 10px;
}

#request tr:first-of-type th:first-of-type {
    border-radius:20px 0 0 0;
}

#request tr:first-of-type th:last-of-type{
    border-radius:0 20px 0 0;
}



</style>