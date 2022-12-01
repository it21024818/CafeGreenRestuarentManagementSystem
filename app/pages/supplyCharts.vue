<template>
    <div class="maindiv">
        <TopBar />
        <NavBar />
        <!-- ghcgh -->
        <div class="rightContainer">
            <div class="headings">
                <h4>Supply Requirement</h4>
                <h4>Weekly Supply Process</h4>
            </div>
            <div class="icons">
                <img src="../assets/FoodItems.png" alt="foodItems" class="img1" style="width:50px"><br>
                <img src="../assets/Beverages.png" alt="foodItems" class="img2" style="width:50px">
            </div>
            <div class="details">
                <div class="details-1">
                    <table id="employee">
                        <tr>
                            <th><h3>Food Items</h3>Item</th>
                            <th><br>Quantity</th>
                            <th><br>Due Date</th>
                            <th><br></th>
                        </tr>
                        <tr>
                            <td>Sugar</td>
                            <td>5KG</td>
                            <td>10/10/2022</td>
                            <td><Button class="Delete-vendor">Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Sugar</td>
                            <td>5KG</td>
                            <td>10/10/2022</td>
                            <td><Button class="Delete-vendor">Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Sugar</td>
                            <td>5KG</td>
                            <td>10/10/2022</td>
                            <td><Button class="Delete-vendor">Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Sugar</td>
                            <td>5KG</td>
                            <td>10/10/2022</td>
                            <td><Button class="Delete-vendor">Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Sugar</td>
                            <td>5KG</td>
                            <td>10/10/2022</td>
                            <td><Button class="Delete-vendor">Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Sugar</td>
                            <td>5KG</td>
                            <td>10/10/2022</td>
                            <td><Button class="Delete-vendor">Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Sugar</td>
                            <td>5KG</td>
                            <td>10/10/2022</td>
                            <td><Button class="Delete-vendor">Delete</Button></td>
                        </tr>
                    </table>
                </div>
                <div class="details-2">
                    <table id="employee">
                        <tr>
                            <th><h3>Beverages</h3>Item</th>
                            <th><br>Quantity</th>
                            <th><br>Due Date</th>
                            <th><br></th>
                        </tr>
                        <tr>
                            <td>Fresh Milk</td>
                            <td>20L</td>
                            <td>10/10/2022</td>
                            <td><Button class="Delete-vendor">Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Fresh Milk</td>
                            <td>20L</td>
                            <td>10/10/2022</td>
                            <td><Button class="Delete-vendor">Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Fresh Milk</td>
                            <td>20L</td>
                            <td>10/10/2022</td>
                            <td><Button class="Delete-vendor">Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Fresh Milk</td>
                            <td>20L</td>
                            <td>10/10/2022</td>
                            <td><Button class="Delete-vendor">Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Fresh Milk</td>
                            <td>20L</td>
                            <td>10/10/2022</td>
                            <td><Button class="Delete-vendor">Delete</Button></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="loginForm">
                <div class="stats" style="display:flex">
                    <h4>Count of<br>Vendors</h4>
                    <h4>Item<br>Obtained</h4>
                    <h4>Item<br>Returned</h4>
                    <h4>Total<br>Spent</h4>
                </div>
                <div class="chat">
                    <img src="../assets/supplystats.png" alt="" style="width:300px">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TopBar from '../components/TopBar.vue'
import NavBar from '../components/NavBar.vue'

export default {
  name: 'chartsView',
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

/* Scroll bar */

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

/* Topbar */

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
    float:left;
    width: 50%;
    color: #5A5A5A;
}

/*Right */
.icons{
    width: 10%;
    float: left;
    background: #ffffff;
}

.img1{
    margin-top: 100px;
}

.img2{
    margin-top: 250px;
}

.details {
    width: 35%;
    float: left;
    background: #ffffff;
}

.details-1 {
    width: 100%;
    height: 240px;
    background: #ffffff;
    overflow-x: hidden;
    overflow-y:auto;
    margin-bottom: 50px;
}

.details-2 {
    width: 100%;
    height: 240px;
    background: #ffffff;
    overflow-x: hidden;
    overflow-y:auto;
}

#employee {
    border-collapse: collapse;
    height: 100%;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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

.field {
    width: 180px;
    padding: 10px 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
}

.loginForm {
    width: 45%;
    height: 540px;
    float: right;
    margin-top: 0;
    margin-right: 50px;
    padding-top: 0;
    padding-top: 15px;
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
}

.formdiv-2 {
    width: 50%;
    margin-top: 20px;
    float: right;
}

.formbtn {
    padding: 10px 50px;
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: #20DC49;
    margin-top: 60px;
    margin-right: 70px;
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
