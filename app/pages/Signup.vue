<template>
    <div class="register">
        <div class="leftContainer">
            <img src="../assets/food2.png" alt="" class="mainImg">
        </div>
        <div class="RightContainer">
            <div class="header">
                <div class="logoPicture">
                    <router-link to="/"><LogoPic class="logopic"/></router-link>
                </div>
                <div class="headerText">
                    <p class="textLink">Have an account?</p>
                    <router-link to="/login"><p class="textLink" id="textLink">Sign In!</p></router-link>
                </div>
            </div>
            <div class="loginForm">
                <div class="div1">
                    <h1>Get Started With Maker</h1>
                    <h5 id="subtitle">Getting started is easy</h5>
                </div>
                <SocialButtons class="formstyle"/>
                <div class="formdiv">
                    <signupForm />
                </div>
                <br>
                <p class="terms">By continuing you indicate that you read and agreed to the Terms of Use</p>
            </div>
        </div>
    </div>
</template>

<script>
import LogoPic from '../components/Logo.vue'
import SocialButtons from '../components/socialMediaBtn.vue'
import signupForm from '../components/signupForm.vue'
export default {
  name: 'SignUp',
  components: {
    LogoPic, SocialButtons, signupForm
  }
  
}
</script>

<style scoped>
.register{
    display: flex;
    justify-content: space-between;
    background-color: #F5F6F9;
    font-family: 'Jost';
}
.header{
    display: flex;
    justify-content: space-between;
}
.logopic{
    left: -200px;
    padding-top: 15px;
}
.headerText{
    display: flex;
    padding-top: 50px;
    padding-right: 10px;
}
a{
    text-decoration: none;
}
.textLink{
    font-size: 14px;
}
#textLink{
    color: #20DC49;
    padding-left: 5px;
}
#textLink:hover{
    cursor: pointer;
    color: #23b342;
    transition: 0.5s;
}
#subtitle{
    margin: 10px 0;
}
.loginForm{
    text-align: center;
    padding-top: 30px;
}
.formstyle{
    padding: 10px 0;
}
.field{
    width: 40%;
    padding: 15px 20px;
    border-radius: 10px;
   
}
#field{
    margin: 10px 0;
}
.formbtn{
    padding: 12px 85px;
    border-radius: 10px;
    border: 1px solid #20DC49;
    background-color: #20DC49;
    margin-top: 20px;
}
.formbtn:hover{
    cursor: pointer;
    border: 1.5px solid #117727;
    transition: 0.1s;
}
.mainImg{
    width: 100vh;
    height: 115vh;
    object-fit: cover;
}
.terms{
  margin-top: 550px;
  font-size: 10px;
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
