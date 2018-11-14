<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>
          Flip Images Example in Vue
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <p>Test Flipimages Web component in Vue.js</p>
      <ion-button @click="goToAbout" size="large">Go to About</ion-button>
      <ion-button @click="goToFlipImages('l_horizontal')" size="large">Flip L Images Horizontal</ion-button>
      <ion-button @click="goToFlipImages('l_vertical')" size="large">Flip L Images Vertical</ion-button>
      <ion-button @click="goToFlipImages('p_horizontal')" size="large">Flip P Images Horizontal</ion-button>
      <ion-button @click="goToFlipImages('p_vertical')" size="large">Flip P Images Vertical</ion-button>
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
    goToFlipImages: function(type) {
      this.$router.push("flipimages/" + type);
    }
  }
};
</script>
