<template> 
  <v-card class="details" id="cards">
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
      <!-- <template v-slot:[`item.edit`]="{ item }">
        <v-btn color="#20DC49" @click="editItem(item)"> Edit </v-btn>
      </template>  -->
      <template v-slot:[`item.delete`]="{ item }">
        <v-btn color="#aa1717" @click="deleteItem(item)"> Remove </v-btn>
      </template>
      
    </v-data-table>
  </v-card>
</template>

<script>

  export default {
    data () {
      return {
        search: '',

        headers: [
          { text: 'Order ID', value: 'orderId' },
          { text: 'Customer Name', value: 'cusName' },
          { text: 'Order Type', value: 'orderType' },
          { text: "Order Date & Time", value: 'orderDateTime' },
          { text: 'Food items', value: 'fooditems' },
          { text: 'Quantity', align: 'start', filterable: false, value: 'quantity' },
          { text: 'Order Total', align: 'start', filterable: false, value: 'orderTotal' },
          { text: 'Status', value: 'status' },
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
      await this.$store.commit('users/storeData', (await this.$axios.get('http://localhost:8000/orders/')).data)
    },
    methods: {
      //updating data
      editItem(order){
        this.$store.commit("order/storeOrderId", order.orderId);
        this.$store.commit("order/storeCusName", order.cusName);
        this.$store.commit("order/storeOrderType", order.orderType);
        this.$store.commit("order/storeOrderDateTime", order.orderDateTime);
        this.$store.commit("order/storeFooditems", order.fooditems);
        this.$store.commit("order/storeQuantity", order.quantity);
        this.$store.commit("order/storeOrderTotal", order.orderTotal);
        this.$store.commit("order/storeStatus", order.status);
      },
      //deleting orders
      async deleteItem(order){
        await this.$axios.delete('http://localhost:8000/orders/' + order.orderId, order);
        this.$store.commit(
          "users/storeData",
          (await this.$axios.get("http://localhost:8000/orders/")).data
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
    background: rgb(241, 245, 248);
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#cards {
    border-collapse: collapse;
    height: 500px;
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