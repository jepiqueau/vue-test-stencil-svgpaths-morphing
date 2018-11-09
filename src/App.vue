<template>
    <router-view></router-view>
</template>
<script>
export default {
  name: "app"
};
</script>
<style>
:root {
    --chart-width: 100%;
    --chart-height: 400px;
    --chart-top: 0px;
    --chart-left: 0px;
    --chart-background-color: #ffffff;
    --chart-axis-color: #000000;   
    --chart-font-family: Verdana;  
    --chart-label-font-size: 10px;
    --chart-title-color: #000000;
    --chart-title-font-size: 25px;
    --chart-subtitle-color: #000000;
    --chart-subtitle-font-size: 20px;
    --chart-axis-title-color: #000000;
    --chart-axis-title-font-size: 15px;
    --chart-line-color: #4ba96e;
    --chart-label-color:#000000;
    --chart-tick-x-length: 5px;
    --chart-tick-y-length: 4px;
    --chart-grid-x: false;
    --chart-axis-x-zero: false;
    --chart-axis-y-zero: false;
    --chart-axis-x-interval: 20;
    --chart-axis-y-interval: 50;
    --chart-animation-duration: 1s;
    --chart-legend-font-size: 12px;
    --chart-legend-top: true;
}
</style>
