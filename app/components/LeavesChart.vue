<template>
  <div class="hello">
    
    <canvas id="myChart" width="" height=""></canvas>

  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    console.log('Componenet mounted')

    const ctx = document.getElementById('myChart');
    const data = {
  labels: [
    'Leaves taken',
    'Total Available',
    
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [10,20],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)'
    ],
    hoverOffset: 4
  }]
};
const myChart = new Chart(ctx, {
    type: 'pie',
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
  background-color: aliceblue;
}


</style>
