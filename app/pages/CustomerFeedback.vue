<template>
    <div class="feedbackMain">
        <!-- <TopBar class="topbar" /> -->
         <router-link to="/"><img class="userpic" src="../assets/LogoResturant.png" /></router-link>
        <div class="leftContainer">
            <div class="fbText">
                
                <!-- <h1>Cutomer Feedback</h1> -->
            </div>
            <div class="fbForm">
                <!-- <input type="text" v-model="email" placeholder="Email" class="field" id="field"><br>
                <input type="password" v-model="password" placeholder="Password" class="field" id="field"><br>
                <textarea placeholder="Feedback" class="field"></textarea><br>
                <button class="formbtn">Submit</button> -->
                <customer-fb-form class="fbformComp"/>
            </div>
        </div>
        <div class="rightContainer">
            <div class="upper">
                <img src="../assets/Feddback.png" alt="" class="picture">
            </div>
            <div class="lower">
                <div class="fb1">
                    <!-- <feedbackComp /> -->
                    <customer-fb-table />
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import CustomerFbForm from '../components/customerFbForm.vue'
import CustomerFbTable from '../components/customerFbTable.vue'
import feedbackComp from '../components/feedbacksArea.vue'
import TopBar from '../components/TopBar.vue'
export default {
  name: 'feedbackArea',
  components: {
    feedbackComp,
    CustomerFbForm,
    CustomerFbTable,
    TopBar
  }
}

</script>

<style scoped>
.userpic{
    margin-left: 20px;
    margin-top: 20px;
    width: 100px;
}
.feedbackMain{
    display: flex;
    height: 100ch;
    background-color: #F5F6F9;
    font-family: 'Jost';
}
.leftContainer{
    margin-top: 50px;
    margin-left: -100px;
}
.fbText{
    margin-left: 20px;
    margin-bottom: 40px;
    margin-top: 20px;
}
.fbformComp {
    
}
.field{
    padding: 15px 0;
    padding-right: 100px;
    padding-left: 10px;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    margin: 25px;
    background-color: #fff;
}
.formbtn{
    padding: 12px 80px;
    border-radius: 10px;
    border: 1px solid #20DC49;
    background-color: #20DC49;
    margin-top: 50px;
    margin-left: 70px;
}
.formbtn:hover{
    cursor: pointer;
    border: 1.5px solid #117727;
    transition: 0.1s;
}
.rightContainer{
    margin-top: 50px;
    margin-left: 80px;
}
.picture{
    margin-left: 60px;
    width: 70%;
}
.upper{
    margin-left: -20px;
}
.lower{
    margin-left: 100px;
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
