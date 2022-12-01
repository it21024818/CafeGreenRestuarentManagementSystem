<template>
  <div class="maindiv">
    <!-- header div -->
    <div class="headerDiv">
      <div class="logoAndText">
        <LogoPic class="logoPic"/>
        <h3 class="logoText">Cafe Green</h3>
      </div>
    </div>
    <div class = "loginview">
      <div class = "customer">
        <router-link to="/Login">
        <img src="../assets/customerHome.png" alt="" class="customerPic"/>
        <div class = "loginvtext">
          Customer
        </div>
        </router-link>
      </div>
      
      <div class=" customer">
        <router-link to="/orders">
        <img src="../assets/staffHome.png" alt="" class="staffPicture">
        <div class = "loginvtext">
          Employee
        </div>
        </router-link>
      </div>
      </div>
    <!-- middle div -->
    <div class="middleDiv">
    <div class="footerDiv">
      <div class="logoAndText">
        <LogoPic width="100px" class="logoPic"/>
      </div>
      <!-- <div class="version" justify-content= "center" text-align="center">
        <img class="userpic" width="100px" text-align="center" justify-content= "center" src="../assets/LogoResturant.png" />
      </div> -->
      <div>
        <h3 class="logoText">Cafe Green</h3>
      </div>
      <div class="socialBtn">
        <social-media-btn />
        <router-link to="#" class="sb"><i class="uil uil-google sb"></i></router-link>
        <router-link to="#" class="sb"><i class="uil uil-facebook sb"></i></router-link>
        <router-link to="#" class="sb"><i class="uil uil-instagram-alt sb"></i></router-link>
        <h4 class="contactText">Contact Us: 011 2 345 678</h4>

      </div>
    </div>
  </div>
  </div>
</template>

<script>
import LogoPic from '../components/Logo.vue'
import SocialMediaBtn from '../components/socialMediaBtn.vue'

export default {
  name: 'HomeView',
  components: {
    LogoPic,
    SocialMediaBtn
  }
}
</script>

<style scoped>
.maindiv{
  background-color:  #e0ebeb;
}
/*Header div*/
.headerDiv {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #d5e8d3;
  z-index: 1;
}

.logoAndText{
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: transparent;
}

.logoPic{
  width: 250px;
  background-color: transparent;
  margin-right: -190px;
  
}

.logoText{
  margin-top: 12px;
  background-color: transparent;
  justify-content: center;
  text-align: center;
}

/*Middle div*/
.middleDiv{
  display: flex;
  justify-content: space-evenly;
  margin-top: 120px;
}

.adminDiv, .customerDiv{
  position: relative;
  width: 250px;
  height: 350px;
}

.picture{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2e26164d;
  opacity: 0;
}

.overlay:hover {
  opacity: 1;
  transition: 0.2s;
}

.homeBtn{
  position: absolute;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #F0F2F5;
  background-color: #20DC49;
  cursor: pointer;
  bottom: 20px;
  left: 35%;
}

/*footer div*/
.footerDiv{
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #d5e8d3;
}
.socialBtn{
  margin: 8px 0;
  background-color: transparent;
  text-align: center;
}

.sb{
  background-color: transparent;
  color: #161675;
  margin: 5px;
  font-size: 18px;
}
.contactText{
  background-color: transparent;
  font-size: 14px;
  margin: 5px 0;
}
.customer{
  background-color: transparent;
  position: relative;
  margin-left: 30px;
}

.loginview{
  display: flex;
  margin-top: 40px;
  padding-top: 50px;
  justify-content: center;
  position:relative;
  background-color: transparent;
}
.customerPic{
  height: 400px;
  width: 300px;
  border-radius: 40px;
  filter: brightness(0.8);
}
.staffPicture{
  height: 400px;
  width: 300px;
  border-radius:40px;
  filter: brightness(0.8);
}
.loginvtext{
  position:absolute;
  background-color: transparent;
  top: 75%;
  margin-left: 30px;
  font-size: 30px;
  font-weight: bold;
  color: rgb(222, 222, 50);
}
.customerPic:hover{
  transform: scale(1.08);
  transition: 300ms;
  border: 5px solid rgb(196, 196, 89);
  cursor: pointer;
}
.staffPicture:hover{
  transform: scale(1.08);
  transition: 300ms;
  border: 5px solid rgb(196, 196, 89);
  cursor: pointer;
}
.loginvtext:hover{
  cursor: pointer;
  transition: 300ms;

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

* {
    padding: 0px;
    margin: 0px;
    list-style-type: none;
    text-decoration: none;
    font-family: 'Jost';
}
</style>
