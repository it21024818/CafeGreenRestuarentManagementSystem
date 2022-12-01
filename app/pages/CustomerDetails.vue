<template>
        <div class="maindiv">
        <TopBar />
        <NavBar />
        <!-- ghcgh -->
            <div class="rightContainer">
                <h4>Customer Information</h4>
                <div class="details" id="employee">
                    <CusInfoTable />              
                </div>
                <div >
                    <signupForm />
                </div>
            </div>
        </div>   
</template>

<script>




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
        justify-content: space-between;
    }
    .userbar-left{
        padding: 25px;
    }
    .userbar-right {
        padding: 10px;
        display: flex;
        align-items: baseline;
    }
    .userbar-right img{
        width: 30px;
        padding: 5px;
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
    /*Right */
    .details {
        width: 58%;
        float: left;
        height: 725px;
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    #employee {
        border-collapse: collapse;
        height: 570px;
        width: 62%;
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
    .Update-vendor:hover{
        transform: scale(1.1);
    }
    .Delete-vendor:hover{
        transform: scale(1.1);
    }
    /* .loginForm {
        padding-top: 15px;
        width: 50%;
    } */

    .loginForm {
        width: 35%;
        float: right;
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
        width: 48%;
        margin-top: 20px;
        float: left;
        margin-left: 5px;
    }
    .formdiv-2 {
        width: 48%;
        margin-top: 20px;
        margin-left: 5px;
        float: right;
    }
    .formbtn {
        padding: 10px 50px;
        border-radius: 10px;
        border: 1px solid #000000;
        background-color: #20DC49;
        margin-top: 120px;
        cursor: pointer;
    }
    .formbtn:hover{
        transform: scale(1.01);
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
 
    .morebutton{
        padding: 3px 10px;
        border-radius: 10px;
        border: 1px solid #000000;
        background-color: #ffffff;
        font-size: 8px;
        cursor: pointer;
        margin-bottom: 3px;
        background-color: ivory;
    }
    .morebutton:hover{
        transform: scale(1.1);
    }
    .active,.morebutton:hover{
        background-color: whitesmoke;
    }
    .fullinfo{
        width: 100%;
        background-color: #ed1f1f;
        height:30px;
    }
.more:before{
font-weight: bold;
content: "+";
}   

#toggle:checked ~ #fullinfo{
    height: 200px;
}
    </style>