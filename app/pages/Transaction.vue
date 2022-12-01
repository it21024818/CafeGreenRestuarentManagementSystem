<template>
    <div class="maindiv">
        <v-row>
        <TopBar />
        <NavBar />
        <v-col cols="4">
            <h4 class="headertitle">Transaction Details</h4>
            <TransactionForm />
        </v-col>
        <v-col cols="6">    
        <TransactionTable />
        </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
  name: 'transactionView'
}
</script>

<style scoped>
.headertitle {
    margin-left: 80px;
}

</style>
