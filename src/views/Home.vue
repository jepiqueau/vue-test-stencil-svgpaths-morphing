<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>
          SVG Morphing Example in Vue
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <p>Test Svg Morphing Web component in Vue.js</p>
      <ion-button @click="goToAbout" size="large">Go to About</ion-button>
      <ion-button @click="goToSvgMorphing('basic')" size="large"
        >Basic Paths</ion-button
      >
      <ion-button @click="goToSvgMorphing('pathIndex')" size="large"
        >PathIndex Control</ion-button
      >
      <ion-button @click="goToSvgMorphing('fullControl')" size="large"
        >Full Control</ion-button
      >
      <ion-button @click="goToSvgMorphing('silhouette')" size="large"
        >Silhouette</ion-button
      >
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
    goToSvgMorphing: function(type) {
      this.$router.push("svgmorphing/" + type);
    }
  }
};
</script>
