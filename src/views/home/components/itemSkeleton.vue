<template>
  <ion-item>
    <ion-thumbnail slot="start">
      <ion-skeleton-text animated></ion-skeleton-text>
    </ion-thumbnail>
    <ion-label>
      <h3>
        <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
      </h3>
      <p>
        <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
      </p>
      <p>
        <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
      </p>
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
  import { IonItem, IonLabel, IonSkeletonText, IonThumbnail } from '@ionic/vue'
  import { defineComponent } from 'vue'
  export default defineComponent({
    components: {
      IonItem,
      IonLabel,
      IonSkeletonText,
      IonThumbnail
    }
  })
</script>

<style></style>
