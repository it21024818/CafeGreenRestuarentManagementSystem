<template>
  <div class="team">
    <h1 class="subheading grey--text">Customer Feedbacks</h1>

       <v-card class="details" id="cards" ref="document">
  
        <v-data-table :headers="headers" :items="users" :search="search" id="cards">
            <template v-slot:[`item.edit`]="{ item }">
                <v-btn color="#20DC49" @click="editItem(item)"> Edit </v-btn>
            </template> 
            <template v-slot:[`item.delete`]="{ item }">
                <v-btn color="#aa1717" @click="deleteItem(item)"> Remove </v-btn>
            </template>
            
        </v-data-table>
    </v-card>
    
  </div>
</template>
  
<script>
  
    export default {
      data () {
        return {
          headers: [
            { text: 'Name', value: 'feedbackCustName' },
            { text: "Feedback", value: 'feedback' },
          ],
          
        };
      },
      computed: {
        users(){
          return this.$store.state.users.data
        }
      },
  
      async fetch(){
        await this.$store.commit('users/storeData', (await this.$axios.get('http://localhost:8000/feedbacks/')).data)
      },
      methods: {
        editItem(feedback){
          this.$store.commit("feedback/feedbackId", feedback.feedbackId);
          this.$store.commit("feedback/feedbackCustName", feedback.feedbackCustName);
          this.$store.commit("feedback/feedbackCustEmail", feedback.feedbackCustEmail);
          this.$store.commit("feedback/feedback", feedback.feedback);
        },
        async deleteItem(feedback){
          await this.$axios.delete("http://localhost:8000/feedbacks/" + cusorder.custOrderID, feedback);
          this.$store.commit(
            "users/storeData",
            (await this.$axios.get("http://localhost:8000/feedbacks/")).data
          );
        },

      },
    }
  
</script>
  
<style scoped>
  
  .details {
      width: 80%;
      float: left;
      height: 400px;
      background: #ffffff;
      border-radius: 20px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  
  #cards {
      border-collapse: collapse;
      height: 450px;
      width: 90%;
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