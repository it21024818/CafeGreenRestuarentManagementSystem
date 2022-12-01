<template>
    <v-form class="loginForm">
      
  
        <h4>Proceed with the Payment</h4>

        <br>
             
        <input type="radio"  >
        <label for="html">  Pay at the counter</label><br>
              
        <input type="radio"  >
        <label for="css">   Pay online by card</label>  <br><br>     

        <v-select
          :items="items"
          label="Select card"
          dense
          width="50px"
        ></v-select>
      
        <v-btn class="formbtn"
        color="#979797"
        ><router-link class="link" to="/cardDetails">Add Card</router-link></v-btn>
        <br>
        <br>
        <v-btn class="formbtn"
        color="#20DC49"
        ><router-link class="link" to="/CustomerFeedback">Confirm</router-link></v-btn>
        
    </v-form>
</template>

<script>

  export default {
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>

<style scoped>

.field {
    width: 80%;
    padding: 10px 20px;
    margin-bottom: 20px;
    margin-left: 45px;
    border-radius: 10px;
    border: 1px solid #f0efef;
}

.loginForm {
    width: 95%;    
    margin-top: 0;
    padding: 10px;
    background: #ebe8e8;
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
    margin: 30px 0px 10px 4px;
}

.loginForm hr {
    padding-left: 40px;
}

.formbtn {
    padding: 10px 50px;
    border-radius: 10px;
    text-align: center;
    background-color: #20DC49;
    margin-top: 20px;
    margin-right: 70px;
    margin-left: 50px;
    margin-bottom: 20px;
}

.link{
  text-decoration: none;
  color: #000;
}
</style>