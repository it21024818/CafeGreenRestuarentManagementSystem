<template>
    
    <div class="sidebar">
        <div class="sidenav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
            <button class="dropdown-btn">Dropdown
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-container">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            </div>
            <a href="#contact">Search</a>
            <div class="version">
                <img class="userpic" src="../assets/logo.jpg" />
                <h3 style="color:#5A5A5A">Green Cafe</h3>
                <h5 style="color:#5A5A5A">Version 1.2.3</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.sidebar {
    margin-right: 0;
    height: 88vh;
    width: 10%;
    float: left;
    background-color: rgb(255, 255, 255);
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
</style>