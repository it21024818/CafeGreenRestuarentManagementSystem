<template>
  <div class="maindiv">
    <TopBar />
    <NavBar />
      <!-- ghcgh -->
      <h2>Event Form</h2>
      <div class="rightContainer">
          <div class="loginForm">
              <h4>Schedule</h4>
              <hr>
              <div class="formdiv-1">
                  <h5>Name</h5><br>
                  <input type="text" v-model="email" placeholder="Name" class="field" id="field"><br>
                  <h5>Address</h5><br>
                  <input type="text" v-model="email" placeholder="Address" class="field"><br>
                  <h5>Mobile Number</h5><br>
                  <input type="text" v-model="email" placeholder="Mobile Number" class="field" id="field"><br>
                  <button class="formbtn">Submit</button><br>
              </div>
              <div class="formdiv-2">
                  <h5>Date</h5><br>
                  <input type="date" v-model="email" placeholder="Date" class="field"><br>
                  <h5>Time</h5><br>
                  <input type="Time" v-model="email" placeholder="Time" class="field" id="field"><br>
                  <h5>Order Details</h5><br>
                  <input type="text" v-model="email" placeholder="Order Details" class="field"><br>
              </div>
          </div>
      </div>
  </div>
  </template>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
  list-style-type: none;
  text-decoration: none;
  font-family: 'Jost';
}
h2{
  text-align: center;
}
.rightContainer {
  margin-top: 30px;
  margin-left: 35%;
  padding: 0;
  width: 82%;
}
.rightContainer h4 {
  margin-bottom: 20px;
  text-align: left;
  color: #5A5A5A;
}
.loginForm {
  padding-top: 15px;
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
  height: 570px;
  margin-top: 0;
  padding-top: 0;
  background: #ffffff;
  border-radius: 10px;
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
  width: 40%;
  margin-top: 20px;
  float: left;
  margin-left: 10px;
}
.formdiv-2 {
  width: 45%;
  margin-top: 20px;
  float: right;
}
.formbtn {
  padding: 10px 50px;
  border-radius: 10px;
  border: 1px solid #000000;
  background-color: #20DC49;
  margin-top: 60px;
  margin-left: 70%;
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
