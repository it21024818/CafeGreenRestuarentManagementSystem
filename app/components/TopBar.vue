<template>
    <div class="topbar">
        <div class="topbar-left">
            <h5>Cafe Green</h5>
            <router-link to="/"><img class="userpic" src="../assets/LogoResturant.png" /></router-link>
        </div>
        <div class="topbar-right">
            <img src="../assets/chithral.png" alt="">
            <h5>Chithral Somapala</h5>
            <i class="uil uil-bell icon"></i>
            <i class="uil uil-signout icon"></i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>
<style scoped>
.topbar {
    width: 100%;
    height: 50px;
    display: flex;
    background-color: #F0F0F0;
    justify-content: space-between;
}

.topbar-left h5{
    margin-top: 15px;
    margin-left: 17%;
}

.topbar-right {
    display: flex;
}

.topbar-right img{
    width: 30px;
    height: 30px;
    margin-top: 10px;
}

.topbar-right h5{
    margin-right: 15px;
    margin-left: 15px;
    margin-top: 15px;
    cursor: pointer;
}

.icon{
    margin-top: 15px;
    margin-right: 15px;
    color:#929292;
    cursor: pointer;
}

.userpic{
    width:10%;
    margin-top: -20%;
    margin-left: 6%;
}
</style>
