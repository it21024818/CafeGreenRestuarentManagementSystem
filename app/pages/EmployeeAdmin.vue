<template>
    <div class="fullDiv">
        <!-- <div class="userbar">
            <div class="userbar-left">
                <h5>Dashboard</h5>
            </div>
            <div class="userbar-right">
                <img src="" alt="">
                <h5>Chithral Somapala</h5>
            </div>
        </div> -->
        <div class="maindiv">
            <TopBar />
            <NavBar />
            </div>
            <!-- ghcgh -->
            <div class="rightContainer">
                <div class = "emppro">
                    <h4>Employee Profile</h4>
                    <img class = "emppic" src="../assets/chithral.png" alt = "" employee pic/>

                    <ul class="empdet">
                        <li>Full Name : Chithral Somapala</li>
                        <li>Address : 34, Anfisdf, Calosfg</li>
                        <li>Contact  : 0777555444</li>
                        <li>E-mail : abc@gmail.com</li>
                        <li>Hired Date : 22/08/2022</li>
                        <li>Role : Head Chef</li>
                    </ul>

                </div>

                <div class = "leave">
                    <h4>No. of Leaves</h4>
                    <!-- <img src="../assets/empChart.png" alt="" class="empChart"> -->
                    <LeavesChart />
                </div>

                <div class = "requests">
                    <h4>Requests</h4>
                    <table id = "reqs">
                        <tr>
                            <td>22/08/2021</td>
                            <td>Leave Request</td>
                            <td><button>Pending</button></td>
                        </tr>
                        <tr>
                            <td>18/05/2021</td>
                            <td>Leave Request</td>
                            <td><button>Resolved</button></td>
                        </tr>
                    </table>
                </div>

                <div class = "makereq">
                    
                    <addReqForm />
                    <!-- <form class = "reqform" action = "">
                        <label for = "field1"> Date</label><br>
                        <input   type="date" v-model="email" placeholder="Date" class="field" id="field1"><br>
                        <label for = "field2"> Title</label><br>
                        <input  type="text" v-model="email" placeholder="Title here" class="field" id ="field2"><br>
                        <label for = "field3"> Message</label><br>
                        <input  type="text" v-model="email" placeholder="Enter your message" class="field" id="field3"><br>
                        <input type = "submit" class = "formbtn"/>
                    </form> -->

                </div>

                <div class = "updatepass">
                    <h4>Change Password</h4>
                    <form class = "reqform" action = "">
                        <label for = "field2"> Current Password</label><br>
                        <input  type="password" v-model="email" placeholder="" class="field" id ="field2"><br>
                        <label for = "field3"> New Password</label><br>
                        <input  type="password" v-model="email" placeholder="" class="field" id="field3"><br>
                        <input type = "submit" class = "formbtn"/>
                    </form>
                </div>
            </div>
    </div>
</template>
<script>

</script>
<style scoped>
* {
        padding: 0px;
        margin: 0px;
        list-style-type: none;
        text-decoration: none;
        font-family: 'Jost';
    }
    .userbar {
        width: 100%;
        height: 50px;
        display: flex;
        background-color: #F0F0F0;
        justify-content: space-between;
    }
    .userbar-left{
        padding: 25px;
    }
    .userbar-right {
        padding: 10px;
        display: flex;
        align-items: baseline;
    }
    .userbar-right img{
        width: 30px;
        padding: 5px;
    }
    .sidebar {
        margin-right: 0;
        height: 1100px;
        width: 10%;
        float: left;
        background-color: rgb(255, 255, 255);
    }
    .rightContainer {
        margin-top: 30px;
        margin-right: 20px;
        padding: 0;
        float: right;
        width: 82%;
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
        margin-top: 300px;
        text-align: center;
    }
    .version img{
      width: 100px;
      height: 100px;
    }
    .emppro{
        width: 100%;
        float: left;
        height: 300px;
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .emppro h4{
        width: 90%;
        border-radius: 20px;
        float: left;
        background: #ffffff;
        margin-bottom: 20px;
        text-align: left;
        color: #5A5A5A;
        font-size: 23px;
        margin-left: 25px;
        margin-top: 10px;
       
    }
.empdet{
    float:right;
    margin-right: 350px;
    font-size: 20px;
    font-family: 'Jost';
}
.empdet li{
    padding-bottom: 5px;
}
.emppic{
    width: 200px;
    height: 190px;
    border-radius: 100px;
    margin-left: 200px;
}
.empChart{
    margin-left: 90px;
    width: 60%;
}
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
    .leave{
        float: left;
        height: 300px;
        width: 35%;
        margin-top: 15px;
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .leave h4{
        width: 90%;
        border-radius: 20px;
        float: left;
        background: #ffffff;
        margin-bottom: 20px;
        text-align: left;
        color: #5A5A5A;
        font-size: 23px;
        margin-left: 25px;
        margin-top: 10px;

    }
    .requests{
        float:right;
        height: 300px;
        margin-left: 15px;
        width: 63%;
        margin-top: 15px;
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .requests h4{
        width: 90%;
        border-radius: 20px;
        float: left;
        background: #ffffff;
        margin-bottom: 20px;
        text-align: left;
        color: #5A5A5A;
        font-size: 23px;
        margin-left: 25px;
        margin-top: 10px;
    }
#reqs{
    border-collapse: collapse;
    width: 100%;
}
#reqs td{
    border-bottom: 1px solid #ddd;
    text-align: center;
    font-size: 18px;
    padding:5px;
}
#reqs button{
    padding: 2px 10px 2px 10px;
    border-radius: 15px;
    border:none;
    background-color: rgb(212, 36, 197);
    color: white;
    font-weight: bold;
}
.makereq{
    float: left;
     height: 400px;
    width: 50%;
     margin-top: 20px;
     background: #ffffff;
     border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.makereq h4{
       width: 95%;
        border-radius: 20px;
        float: left;
        background: #ffffff;
        margin-bottom: 20px;
        text-align: left;
        color: #5A5A5A;
        font-size: 23px;
        margin-left: 25px;
        margin-top: 10px;
}
.reqform{
    margin-left: 20px;
}
.field{
    width: 180px;
    padding: 10px 20px;
    margin-bottom: 5px;
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    margin-left: 20px;
}

.reqform label{
    margin-left: 25px;
    text-align: left;
     color: #5A5A5A;
    font-family: 'Jost';
    font-size: 18px;
    margin-left:25px;
}
.formbtn {
        padding: 10px 50px;
        border-radius: 10px;
        border: 1px solid #000000;
        background-color: #20DC49;
        margin-top: 30px;
        margin-left: 50px;
        cursor:pointer;
    }

.updatepass{
    float: right;
   height: 400px;
    width: 45%;
     margin-top: 20px;
     background: #ffffff;
     border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.updatepass h4{
    width: 95%;
     border-radius: 20px;
 float: left;
   background: #ffffff;
    margin-bottom: 20px;
    text-align: left;
    color: #5A5A5A;
    font-size: 23px;
    margin-left: 25px;
    margin-top: 10px;
}
</style>
