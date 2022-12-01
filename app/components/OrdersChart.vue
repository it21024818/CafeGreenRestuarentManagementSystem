<template>
  <div class="hello">
    
    <canvas id="myChart" width="" height=""></canvas>

  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'OrdersChart',
  props: {
    msg: String
  },
  mounted() {
    console.log('Componenet mounted')

    const ctx = document.getElementById('myChart');
    const data = {
  labels: [
    'Completed',
    'Delayed',
    'In progress',
    'Waiting on customer'
    
  ],
  // setting data for the pie chart
  datasets: [{
    label: 'My First Dataset',
    data: [22,11, 44, 22],
    backgroundColor: [
      '#0d8a04',
      '#8a0200',
      '#e6d543',
      '#f59342'
    ],
    hoverOffset: 4
  }]
};
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data:data
  
});
myChart;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello{
  height: 300px;
  width: 300px;
  background-color: rgb(241, 245, 248);
  border-radius: 15px;

}


</style>
