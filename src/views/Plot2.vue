<template>
  <div>
    <h1>Visualisation of Automobile data</h1>
        <h2>Line chart of vehicle price vs curb weight for Volkswagen</h2>
    <line-chart :data="{'7775':2261, '7975': 2209,'8195':2264,'9995':2212,'9495':2275,'11595':2319,'12290':2254}" xtitle ="Price" ytitle ="Weight"></line-chart>
    <h2>Scatter chart of vehicle price vs curb weight for Volkswagen</h2>
    <scatter-chart :data="{'7775':2261, '7975': 2209,'8195':2264,'9995':2212,'9495':2275,'11595':2319,'12290':2254}" xtitle ="Price" ytitle ="Weight"></scatter-chart>
  </div>
</template>

