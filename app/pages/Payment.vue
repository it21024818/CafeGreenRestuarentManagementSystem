<template>
    <v-row>
        <TopBar />
        <v-col cols="5">
            <img width="90%" height="800px" src="../assets/pay.jpg" />
        </v-col>
        <v-col cols="4">
            <br>
            <h4>Invoice</h4>
            <Invoice />
        </v-col>
        <v-col cols="2">
            <br><br><br>
        <ConfirmPayment class="confirmPayment"/>
        </v-col>
    </v-row>
</template>

<script>

export default {

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
    justify-content: space-between;
}

.userbar-left h5{
    padding: 25px;
    margin-left: 30px;
    margin-bottom: 30px;
    font-size: 15px;
}

.userbar-right {
    padding: 10px;
    display: flex;
    align-items: baseline;
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

.uil uil-bell

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

.confirmPayment{
    margin-top: 20px;
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
