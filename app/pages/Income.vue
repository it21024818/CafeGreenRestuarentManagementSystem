<template>
    <div class="maindiv">
        <TopBar />
        <NavBar />
        <!-- ghcgh -->
        <div class="rightContainer">
            <h1>Income Report</h1>
            <div class="mloginForm">
                <new-income />

            </div>
            <div class="details">
                <income-table />
               
            </div>
        </div>
    </div>
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


.rightContainer {
    margin-top: 30px;
    margin-right: 40px;
    padding: 0;
    float: right;
    width: 80%;
}

.rightContainer h1 {
    font-size: 40px;
    margin-bottom: 80px;
    text-align: left;
    color: #5A5A5A;
}
/*  */

.details {
    width: 60%;
    height: 400px;
    background: #ffffff;
    border-radius: 20px;
    overflow-x: hidden;
    overflow-y: auto;
}

.mloginForm{
    width: 40%;
    float: right;
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
