<template>
  <div class="mainDiv">
    <TopBar />
    <NavBar />
    <div class="subMain">
      <h1 class= "head">Schedule Calendar</h1>



<div class="month">      
  <ul class="calenderHeader">
    <li class="prev">&#10094;</li>
    <li>
      September<br>
      <span style="font-size:18px">2022</span>
    </li>
    <li class="next">&#10095;</li>
  </ul>
</div>



<ul class="weekdays">
  <li>Mon</li>
  <li>Tue</li>
  <li>Wed</li>
  <li>Thur</li>
  <li>Fri</li>
  <li>Sat</li>
  <li>Sun</li>
</ul>



<ul class="days">  
  <li>1<br>200 Packets</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9<br>80 Bottles</li>
  <li>10</li>
  <li>11</li>
  <li>12<br>30 Packets</li>
  <li>13</li>
  <li>14<br>15 Dessart</li>
  <li>15</li>
  <li>16</li>
  <li>17<br>100 Packets</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22<br>50 Packets</li>
  <li>23</li>
  <li>24</li>
  <li>25<br>80 Packets</li>
  <li><span class="active">26</span></li>
  <li>27</li>
  <li>28</li>
  <li>29<br>20 Juices</li>
  <li>30</li>
  <li>31</li>
</ul>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  font-family: 'Jost';
  width: 1200px;
}

ul {list-style-type: none;}
.mainDiv{
  width: 100%;
}
.subMain{
  margin: 50px 15%;
}

.calenderHeader{
  display: flex;
}
.month {
  padding: 20px 25px;
  width: 100%;
  background: #1abc9c;
  text-align: center;
}



.month ul {
  margin: 0;
  padding: 0;
}



.month ul li {
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
}



.month .prev {
  float: left;
  padding-top: 10px;
}



.month .next {
  float: right;
  padding-top: 10px;
}



.weekdays {
  margin: 0;
  padding: 10px 0;
  background-color: #ddd;
}



.weekdays li {
  display: inline-block;
  width: 13.6%;
  color: #666;
  text-align: center;
}



.days {
  padding: 10px;
  background: #eee;

  margin: 0;
}



.days li {
  list-style-type: none;
  display: inline-block;
  width: 13.6%;
  text-align: center;
  margin-bottom: 5px;
  font-size:12px;
  color: #777;
  height:50px;
}



.days li .active {
  padding: 5px;
  background: #1abc9c;
  color: white !important
}
.head{
text-align: center;
}



/* Add media queries for smaller screens */
@media screen and (max-width:720px) {
  .weekdays li, .days li {width: 13.1%;}
}



@media screen and (max-width: 420px) {
  .weekdays li, .days li {width: 12.5%;}
  .days li .active {padding: 2px;}
}



@media screen and (max-width: 290px) {
  .weekdays li, .days li {width: 12.2%;}
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