<template>
    <div class="maindiv">
        <TopBar />
        <NavBar />
        <!-- ghcgh -->
        <div class="rightContainer">
            
            <h4>Progress and Planning</h4><br>
            <div class="details">
                <EventTable />
            
            </div>
           
            <div class="form-all">
                <PlanForm />
               
            </div>
        </div>
    </div>
</template>

<script>
import EventTable from '../components/EventTable.vue'

export default {
  components: { EventTable },

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

/*Right */
.details {
    width: 58%;
    float: left;
    height: 570px;
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    overflow-x: hidden;
    overflow-y:auto;
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





.loginForm {
    width: 40%;
    height: 610px;
    
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
    margin-top: 20px;
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


label {
    margin: 10px 50px;
    display: inline-block;
    float: left;
    clear: left;
    width: 250px;
    text-align: left;
}
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
