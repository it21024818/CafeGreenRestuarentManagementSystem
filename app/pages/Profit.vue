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
    <div class="rightcontainer" ref="document" id="profit">
        <h1>Profit Report</h1>
        <div class="dropdown">

            <button class="dropbtn">Select Month</button>

            <div class="dropdown-content">
                <a href="#">January</a>
                <a href="#">February</a>
                <a href="#">March</a>
                <a href="#">April</a>
                <a href="#">May</a>
                <a href="#">June</a>
                <a href="#">July</a>
                <a href="#">August</a>
                <a href="#">September</a>
                <a href="#">October</a>
                <a href="#">November</a>
                <a href="#">December</a>
            </div>

        </div>
        <div class="bottomdiv">
            <table id="profittable">
                <tr>
                    <td>Sales</td>
                    <td>650 000</td>
                </tr>
                <tr>
                    <td>Cost of suplies</td>
                    <td>200 000</td>
                </tr>
                <tr>
                    <td>Gross Profit</td>
                    <td>450 000</td>
                </tr>
                <tr>
                    <td>Other income</td>
                    <td> 50 000</td>
                </tr>
                <tr>
                    <td>Rent</td>
                    <td> 20 000</td>
                </tr>
                <tr>
                    <td>Wages</td>
                    <td>100 000</td>
                </tr>
                <tr>
                    <td>Other expenses</td>
                    <td>200 000</td>
                </tr>
                <tr>
                    <td>Net Profit</td>
                    <td>180 000</td>
                </tr>
            </table>
        </div>
        <div class="dwnldBtn">
            <button class="dwnld" @click="exportToPDF">Download</button>
        </div>
    </div>
</div>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
  name: 'profitView',

   methods: {
        
      //export the invoice as a pdf
      exportToPDF() {
        html2pdf(document.getElementById("profit"), {
          margin: 0,
          filename: "Profit Report.pdf",
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
.userbar-left{
    display: flex;
    align-items: center;
}
.userbar-right {
    display: flex;
    align-items: baseline;
}

.sidebar {
    margin-right: 0;
    height: 88vh;
    width: 10%;
    float: left;
    background-color: rgb(255, 255, 255);
}
.dwnld {
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
.dwnld:hover {
    background-color: #91ff00
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

.rightcontainer h1 {
    margin-left: 300px;
    font-size: 40px;
    margin-bottom: 30px;
    text-align: left;
    color: #5A5A5A;
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
.bottomdiv{
    margin-left: 550px;
    margin-top: 60px;

}

.version img{
  width: 100px;
  height: 100px;
}

#profittable td, #profittable th {

    text-align: left;
    font-size: 20px;
    padding:15px;
    width: 80%;
    height: 50px;
    margin-top: 100px;
    align-content: center;

}
.upcontainer-button{
    font-size: 50px;
}

#profittable tr:hover {
    background-color: #F0F0F0;
}
/*Dropdown*/
.dropbtn {
    background-color: #04AA6D;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
}

.dropdown {
    position: relative;
    display: inline-block;
    margin-left: 1000px;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: #ddd;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    background-color: #3e8e41;
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
