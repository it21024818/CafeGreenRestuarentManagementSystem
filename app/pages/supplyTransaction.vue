<template>
    <div class="maindiv">
        <TopBar />
        <NavBar />
        <!-- ghcgh -->
        <div class="rightContainer">
            <h4>Transactions</h4>
            <div class="details">
                <TransactionTable />
            </div>
            <div class="form-all">
                <div class="pic">
                    <img src="../assets/handshake.png" alt="">
                </div>
                <div class="loginForm">
                    <h4>Transaction Details</h4>
                    <hr>
                    <div class="formdiv-1">
                        <h5>Company Name</h5><br>
                        <input type="text" v-model="email" placeholder="Company Name" class="field" id="field"><br>
                        <h5>Item</h5><br>
                        <input type="text" v-model="email" placeholder="Item" class="field"><br>
                        <h5>Amount</h5><br>
                        <input type="text" v-model="email" placeholder="Amount" class="field" id="field"><br>
                        <button class="formbtn">Save</button><br>
                    </div>
                    <div class="formdiv-2">
                        <h5>Date</h5><br>
                        <input type="date" v-model="email" placeholder="Date" class="field"><br>
                        <h5>Quantity</h5><br>
                        <input type="text" v-model="email" placeholder="Quantity" class="field" id="field"><br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import NavBar from '../components/NavBar.vue'

export default {
  name: 'transactionView',
  components: {
    TopBar,
    NavBar
  }
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

#employee {
    border-collapse: collapse;
    height: 570px;
    width: 100%;
}

#employee td, #employee th {
    border-bottom: 1px solid #ddd;
    text-align: center;
    font-size: 10px;
    padding:15px;
}

#employee tr:hover {
    background-color: #F0F0F0;
}

#employee th {
    text-align: center;
    background-color: #F0F0F0;
    color: #5A5A5A;
    font-size: 10px;
}

#employee tr:first-of-type th:first-of-type {
    border-radius:20px 0 0 0;
}

#employee tr:first-of-type th:last-of-type{
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

.loginForm {
    padding-top: 15px;
    padding-left: 15px;
}

.field {
    width: 180px;
    padding: 10px 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
}

.loginForm {
    width: 45%;
    height: 500px;
    float: left;
    margin-top: 0;
    padding-top: 0;
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.loginForm h5 {
    text-align: left;
    color: #5A5A5A;
    font-family: 'Jost';
    font-size: 12px;
    margin-left: 45px;
    margin-bottom: 0;
    padding-bottom: 0;
}

.loginForm h4 {
    color: #5A5A5A;
    text-align: left;
    font-family: 'Jost';
    margin: 30px 0px 30px 45px;
}

.loginForm hr {
    padding-left: 40px;
}

.formdiv-1 {
    width: 50%;
    margin-top: 20px;
    float: left;
    padding-left: 30px;
}

.formdiv-2 {
    width: 50%;
    margin-top: 20px;
    float: right;
    padding-left: 30px;
}

.pic img{
    width: 67px;
    padding: 10px;
}

.formbtn {
    padding: 10px 50px;
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: #20DC49;
    margin-top: 20px;
    margin-right: 70px;
    cursor: pointer;
}
</style>
