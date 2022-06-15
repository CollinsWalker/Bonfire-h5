<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <!-- - Go to your new project: cd .\bonfire-h5
      - Run ionic serve within the app directory to see your app in the browser
      - Run ionic capacitor add to add a native iOS or Android project using Capacitor
      - Generate your app icon and splash screens using cordova-res --skip-config --copy
      - Explore the Ionic docs for components, tutorials, and more: https://ion.link/docs
      - Building an enterprise app? Ionic has Enterprise Support and Features: https://ion.link/enterprise-edition -->
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/home">
          <ion-icon :icon="home" />
          <ion-label>首页</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/explore">
          <ion-icon :icon="planet" />
          <ion-label>探索</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/notify">
          <ion-icon :icon="notifications" />
          <ion-label>通知</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/profile">
          <ion-icon :icon="person" />
          <ion-label>个人</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { home, planet, notifications, person } from "ionicons/icons";

export default defineComponent({
  name: "TabsPage",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      home,
      planet,
      notifications,
      person,
    };
  },
});
</script>
