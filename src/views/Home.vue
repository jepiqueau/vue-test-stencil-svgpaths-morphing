<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>
          Line Chart Example in Vue
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <p>Test Linechart Web component in Vue.js</p>
      <ion-button @click="goToAbout" size="large">Go to About</ion-button>
      <ion-button @click="goToLineChart('basic')" size="large">Basic LineChart</ion-button>
      <ion-button @click="goToLineChart('markers')" size="large">Line with Markers</ion-button>
      <ion-button @click="goToLineChart('multiplelines')" size="large">Multiple Lines</ion-button>
      <ion-button @click="goToLineChart('multipleplots')" size="large">Multiple Plots</ion-button>
    </ion-content>
  </ion-app>
</template>
<script>

export default {
  name: "home",
  methods: {
    goToAbout: function() {
      this.$router.push("about");
    },
    goToLineChart: function(type) {
      this.$router.push("linechart/"+type);
    },
    goToTest: function(type) {
      this.$router.push("test/"+type);
    }
  }
};
</script>
