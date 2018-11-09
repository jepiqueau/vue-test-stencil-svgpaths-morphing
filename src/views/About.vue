<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>
          Line Chart Example in Vue | About
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <p>This is the About page.</p>
      <ion-button @click="goBackHome()" full>Go Back!</ion-button>
    </ion-content>
  </ion-app>
</template>
<script>
export default {
  name: "about",
  methods: {
    goBackHome: function() {
      this.$router.push("/");
    }
  }
};
</script>
