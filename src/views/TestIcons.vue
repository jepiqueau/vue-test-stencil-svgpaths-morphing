<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Test Icons</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <p>This is the Test Icons page.</p>
      <ion-icon name="arrow-back" color="primary"></ion-icon>
      <ion-icon name="star" color="secondary"></ion-icon>
      <ion-icon name="trash" color="danger"></ion-icon>
      <ion-icon name="create"></ion-icon>
    </ion-content>
  </div>
</template>
<script>
export default {
  name: "testicons"
};
</script>
