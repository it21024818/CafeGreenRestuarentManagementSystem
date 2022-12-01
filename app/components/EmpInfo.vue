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
          { text: 'Employee Name', value: 'efirstname'},
          { text: 'Role', value: 'role' },
          { text: 'E-mail', value: 'empemail' },
          { text: "Address", value: 'eaddress' },
          { text: 'Hired Date', value: 'hireddate' },
          { text: 'No. of Leaves', value: 'noofleaves' },
          { text: 'Salary', value: 'salary' },
          // { text: 'Password', value: 'emppass' },
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
      await this.$store.commit('users/storeData', (await this.$axios.get('http://localhost:8000/employee/')).data)
    },
    methods: {
        
      //export the invoice as a pdf
      exportToPDF() {
        html2pdf(document.getElementById("employees"), {
          margin: 20,
          filename: "Employee Details.pdf",
        });
      },

      editItem(employee){
        this.$store.commit("employee/storeEmpId", employee.eid);
        this.$store.commit("employee/storeEmpFName", employee.efirstname);
        this.$store.commit("employee/storeEmpLName", employee.elastname);
        this.$store.commit("employee/storeEmpMail", employee.empemail);
        this.$store.commit("employee/storeEmpAddress", employee.eaddress);
        this.$store.commit("employee/storeHiredDate", employee.hireddate);
        this.$store.commit("employee/storeNoofLeaves", employee.noofleaves);
        this.$store.commit("employee/storeSalary", employee.salary);
        this.$store.commit("employee/storeEmpPass", employee.emppass);
        this.$store.commit("employee/storeRole", employee.role);
      },
      async deleteItem(employee){
        await this.$axios.delete('http://localhost:8000/employee/' + employee.eid, employee);
        this.$store.commit(
          "users/storeData",
          (await this.$axios.get("http://localhost:8000/employee/")).data
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
    border-radius:20px 20px 0 0;
}



</style>