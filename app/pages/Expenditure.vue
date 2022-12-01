<template>

<!-- <div class="userbar">
    <div class="userbar-left">
        <h5>Dashboard</h5>
    </div>
    <div class="userbar-right">
        <img src="" alt="">
        <h5>Chithral Somapala</h5>
    </div>
</div> -->
<div class="maindiv">
    <TopBar />
    <NavBar />
    <!-- ghcgh -->
    <div class="rightContainer">
        <h1>Expenses Report</h1>
        <div class="mloginForm">
            <newExpenditure />
        </div>
        <div class="details" ref="document" id="Expenditure">
            <expensesTable />
        </div>
    </div>
    <button class="reportSubmit" @click="exportToPDF">Create Report</button>
</div>
</template>

<script>
import html2pdf from "html2pdf.js";
export default {
    
    methods: {
        
      //export the invoice as a pdf
      exportToPDF() {
        html2pdf(document.getElementById("Expenditure"), {
          margin: 16,
          filename: "Expenditure Report.pdf",
        });
      },
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
.userbar {
    width: 100%;
    height: 50px;
    display: flex;
    background-color: #F0F0F0;
}

.userbar-right {
    display: flex;
    align-items: right;
}

.sidebar {
    margin-right: 0;
    height: 88vh;
    width: 10%;
    float: left;
    background-color: rgb(255, 255, 255);
}
.rightContainer {
    margin-top: 30px;
    margin-right: 40px;
    padding: 0;
    float: right;
    width: 80%;
}
.rightContainer h1 {
    font-size: 40px;
    margin-bottom: 80px;
    text-align: left;
    color: #5A5A5A;
}

.sidenav li {
    width: 75%;
    margin-bottom: 15px;
    margin-left: 10%;
    margin-top: 10px;
    text-align: justify;
}

.sidenav {
  height: 100%;
  width: 200px;
  background-color: #D7D7D7;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a, .dropdown-btn {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 18px;
  color: #5A5A5A;
  display: block;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  outline: none;
}

.sidenav a:hover, .dropdown-btn:hover {
  color: #000000;
}
.dropdown-container {
    display: none;
    background-color: #262626;
    padding-left: 8px;
}
.version {
    width: 100%;
    height: 25%;
    align-content: left;
    height: 100px;
    background-color: #D7D7D7;
    margin-top: 200px;
    text-align: center;
}

.version img{
  width: 100px;
  height: 100px;
}

*::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: rgb(255, 255, 255);
  }

  *::-webkit-scrollbar-thumb {
    background-color: #F0F0F0;
    border-radius: 20px;
    border: 1px solid #D7D7D7;
  }

.details {
    width: 50%;
    height: 400px;
    background: #ffffff;
    border-radius: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    float: left;
}
#Edetails {
    border-collapse: collapse;
    font-size: 20px;
    height: 530px;
    width: 100%;
}
#Edetails td, #Edetails th {
    border-bottom: 1px solid #ddd;
    text-align: center;
    font-size: 20px;
    padding:15px;
}

#Edetails tr:hover {
    background-color: #F0F0F0;
}

#employee th {
    text-align: center;
    background-color: #F0F0F0;
    color: #5A5A5A;
    font-size: 20px;
}

#Edetails tr:first-of-type th:first-of-type {
    border-radius:20px 0 0 0;
}

#employee tr:first-of-type th:last-of-type{
    border-radius:0 20px 0 0;
}

.Update-expense {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: #20DC49;
    font-size: 15px;
    margin-bottom: 4px;
}
.Update-expense:hover {
    background-color: #91ff00
}

.Delete-expense {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: #ffffff;
    font-size: 15px;
}
.Delete-expense:hover {
    background-color: #585858;
    color:#ddd
}

.mloginForm {
    width: 50%;
    float: right;
}

.field {
    width: 200px;
    height: 40px;
    padding: 5px 20px;
    margin-bottom: 50px;
    border-radius: 250px;
    border: 5px solid #D9D9D9;
}

.formdiv-1 {
    width: 100%;
    margin-top: 30px;
    display: flex;
}

.formbtn {
    cursor: pointer;
    margin-left: 5%;
    padding: 10px 20px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: #20DC49;
}
.formbtn:hover {
    background-color: #91ff00
}
.reportSubmit{
    text-align: center;
    cursor: pointer;
    margin-top: 25px;
    margin-left: 600px;
    padding: 10px 20px;
    height: 45px;
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: #6de086;
}
/* cyrillic */
@font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zPtBhPNqw79Ij1E865zBUv7myjJTVFNIg8mg.woff2) format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* latin-ext */
@font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zPtBhPNqw79Ij1E865zBUv7myjJTVPNIg8mg.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/jost/v14/92zPtBhPNqw79Ij1E865zBUv7myjJTVBNIg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>
