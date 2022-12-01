<template>
    <div class="maindiv">
        <TopBar />
        <NavBar />
        <!-- ghcgh -->
        <div class="rightContainer">
            <h4>Stock Requirements</h4>
            <div class="details">
                <div class="details-1">
                    <table id="employee">
                        <h4>Food Items</h4>
                        <tr>
                            <th>Item Code</th>
                            <th>Item Name</th>
                            <th>Required Quantity</th>
                            <th>Due Date</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>S001</td>
                            <td>Sugar</td>
                            <td>5kg</td>
                            <td>2022/10/20</td>
                            <td><Button class="Update-vendor">Update</Button><br></td>
                        </tr>
                        <tr>
                            <td>R001</td>
                            <td>Rice</td>
                            <td>10Kg</td>
                            <td>2022/10/20</td>
                            <td><Button class="Update-vendor">Update</Button><br></td>
                        </tr>
                        <tr>
                            <td>S002</td>
                            <td>Salt</td>
                            <td>10Kg</td>
                            <td>2022/10/20</td>
                            <td><Button class="Update-vendor">Update</Button><br></td>
                        </tr>
                        <tr>
                            <td>S002</td>
                            <td>Salt</td>
                            <td>10Kg</td>
                            <td>2022/10/20</td>
                            <td><Button class="Update-vendor">Update</Button><br></td>
                        </tr>
                        <tr>
                            <td>S002</td>
                            <td>Salt</td>
                            <td>10Kg</td>
                            <td>2022/10/20</td>
                            <td><Button class="Update-vendor">Update</Button><br></td>
                        </tr>
                        <tr>
                            <td>S002</td>
                            <td>Salt</td>
                            <td>10Kg</td>
                            <td>2022/10/20</td>
                            <td><Button class="Update-vendor">Update</Button><br></td>
                        </tr>
                    </table>
                </div>
                <div class="details-2">
                    <table id="employee">
                        <h4>Bevarages</h4>
                        <tr>
                            <th>Item Code</th>
                            <th>Item Name</th>
                            <th>Required Quantity</th>
                            <th>Due Date</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>F001</td>
                            <td>Fresh Milk</td>
                            <td>10L</td>
                            <td>2022/10/20</td>
                            <td><Button class="Update-vendor">Update</Button><br></td>
                        </tr>
                        <tr>
                            <td>F002</td>
                            <td>Fanta</td>
                            <td>5L</td>
                            <td>2022/10/20</td>
                            <td><Button class="Update-vendor">Update</Button><br></td>
                        </tr>
                        <tr>
                            <td>E001</td>
                            <td>EGB</td>
                            <td>10L</td>
                            <td>2022/10/20</td>
                            <td><Button class="Update-vendor">Update</Button><br></td>
                        </tr>
                        <tr>
                            <td>E001</td>
                            <td>EGB</td>
                            <td>10L</td>
                            <td>2022/10/20</td>
                            <td><Button class="Update-vendor">Update</Button><br></td>
                        </tr>
                        <tr>
                            <td>E001</td>
                            <td>EGB</td>
                            <td>10L</td>
                            <td>2022/10/20</td>
                            <td><Button class="Update-vendor">Update</Button><br></td>
                        </tr>
                        <tr>
                            <td>E001</td>
                            <td>EGB</td>
                            <td>10L</td>
                            <td>2022/10/20</td>
                            <td><Button class="Update-vendor">Update</Button><br></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="form-all">
                <div class="loginForm-1">
                    <h4>Food Items</h4>
                    <hr>
                    <div class="formdiv-1">
                        <label>Item Code</label>
                        <input type="text" v-model="email" placeholder="" class="field" id="field"><br>
                        <label>Item Name</label>
                        <input type="text" v-model="email" placeholder="" class="field" id="field"><br>
                        <label>Required Quantity</label>
                        <input type="text" v-model="email" placeholder="" class="field"><br>
                        <label>Due date</label>
                        <input type="text" v-model="email" placeholder="" class="field" id="field"><br>
                        <button class="formbtna">Confirm</button><br>
                    </div>
                </div>
                <div class="loginForm-2">
                    <h4>Bevarages</h4>
                    <hr>
                    <div class="formdiv-1">
                        <label>Item Code</label>
                        <input type="text" v-model="email" placeholder="" class="field" id="field"><br>
                        <label>Item Name</label>
                        <input type="text" v-model="email" placeholder="" class="field" id="field"><br>
                        <label>Required Quantity</label>
                        <input type="text" v-model="email" placeholder="" class="field"><br>
                        <label>Due date</label>
                        <input type="text" v-model="email" placeholder="" class="field" id="field"><br>
                        <button class="formbtn">Confirm</button><br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'NewReq'
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
    margin-left: 20px;
    text-align: left;
    color: #5A5A5A;
}

/*Right */
.details {
    width: 50%;
    float: right;
    height: 600px;
    background: #ffffff;
    border-radius: 20px;
}

.details-1{
    margin-bottom: 30px;
    height: 270px;
    overflow-x: hidden;
    overflow-y: auto;
}

.details-2{
    height: 270px;
    overflow-x: hidden;
    overflow-y: auto;
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

.field {
    width: 180px;
    padding: 10px 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
}

.form-all {
    width: 45%;
    height: 600px;
    float: left;
    margin-top: 0;
    padding-top: 0;
    background: #ffffff;
    border-radius: 20px;
}

.loginForm-1{
    margin-bottom: 30px;
    height: 320px;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.loginForm-2{
    height: 315px;
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
    margin-top: 20px;
    margin-left: 20px;
    float: left;
}

.formdiv-2 {
    width: 50%;
    margin-top: 20px;
    float: right;
}

.pic img{
    width: 45px;
    padding: 10px;
    float: left;
}

.formbtn {
    padding: 8px 45px;
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: #20DC49;
    margin-top: 20px;
    margin-right: 70px;
    position: absolute;
    top: 96%;
    left: 40%;
}

.formbtna {
    padding: 8px 45px;
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: #20DC49;
    margin-top: 20px;
    margin-right: 70px;
    position: absolute;
    top: 47%;
    left: 40%;
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
