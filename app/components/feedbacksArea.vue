<template>
    <div class="mainContainer">
        <h5 class="name">Emma Watson</h5>
        <p class="fbText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, labore!</p>
    </div>
</template>

<script>
export default {
  name: 'feedbackComp'
}
</script>

<style scoped>
.mainContainer{
    width: 75%;
    height: 105px;
    background: #fff;
    border: 1px solid #fff;
    border-radius: 20px;
    text-align: left;
}
p{
    font-size: 14px;
}
.name {
    background-color: transparent;
    padding: 10px;
}
.fbText{
    background-color: transparent;
    padding: 0 10px;
}
</style>
