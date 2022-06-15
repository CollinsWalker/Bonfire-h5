<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Notifications</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-segment value="all">
          <ion-segment-button value="all">All</ion-segment-button>
          <ion-segment-button value="favorites">Favorites</ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true"> </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import {
    IonPage,
    IonHeader,
    IonContent,
    IonToolbar,
    IonSegment,
    IonSegmentButton,
    IonTitle
  } from '@ionic/vue'

  export default defineComponent({
    name: 'NotifyPage',
    components: {
      IonHeader,
      IonContent,
      IonPage,
      IonToolbar,
      IonSegment,
      IonSegmentButton,
      IonTitle
    }
  })
</script>
