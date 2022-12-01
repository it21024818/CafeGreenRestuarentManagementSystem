<template>
    <div class="mainContainer">
        <div class="googleButton">
            <button class="google">
                <img src="../assets/google.png" alt="" class="googleImg img"><span class="text">Google</span>
            </button>
        </div>
        <div class="facebookButton">
            <button class="facebook">
                <img src="../assets/facebook.png" alt="" class="facebookImg img"><span class="text">Facebook</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SocialButtons'
}
</script>

<style scoped>
button{
    text-decoration: none;
    border: none;
    cursor: pointer;
    background-color: #fff;
}

button:hover{
    background-color: #F5F5F5;
    transition: 0.5s
}
.mainContainer{
    display: flex;
    justify-content: center;
}
.img{
    width: 20px;
    height: 20px;
    background-color: transparent;
}
.google{
    padding: 7px 20px;
}
.facebook{
    padding: 7px 12px;
}
.google, .facebook{
    margin: 5px;
    border-radius: 5px;
}
.text{
    padding: 10px;
    position: relative;
    bottom: 4px;
    background-color: transparent;
}
</style>
