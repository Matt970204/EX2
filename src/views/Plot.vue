<template>
  <div id="app">
    <h1>Visualisation of Automobile data</h1>
    <h2>Bar chart of average price of vehicles per manufacturer</h2>
    <bar-chart :data="chartData"></bar-chart>

    <h2>PieChart chart of average price of vehicles per manufacturer</h2>
    <pie-chart :data="chartData"></pie-chart>
    
    <button @click="updateChart">Updata Data</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      chartData: {
        'Audi':165000,
        'BMW': 205000,
        'Chevrolet': 134000,
        'Dodge': 80300,
        'isuzu' : 11000,
        'Mazda': 95000
      }
    }
  }, 

  methods: {
    updateChart(){
      this.chartData ={
        'Audi':165000,
        'BMW': 205000,
        'Chevrolet': 134000,
        'Dodge': 80300,
        'isuzu' : 11000,
        'Mazda': 95000
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
