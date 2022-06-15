<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <!-- 内容 -->
      <ion-thumbnail class="c-thumbnail ion-no-margin">
        <ion-img src="https://img.vm.laomishuo.com/image/2022/05/2022053113025188.jpg"></ion-img>
      </ion-thumbnail>
      <div class="c-info">
        <div class="c-date"> <span class="c-month">JAN</span><span class="c-day">17</span> </div>
        <div class="c-title-box">
          <p class="c-title ion-no-margin">Compatible Inkjet Cartridge Which…</p>
          <p class="c-sub-title ion-no-margin">South Rocky · Going 11 people</p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { IonPage, IonContent } from '@ionic/vue'

  export default defineComponent({
    name: 'HomePage',
    components: {
      IonPage,
      IonContent
    },
    setup() {
      return {}
    },
    // mounted() {},
    methods: {}
  })
</script>

<style lang="less" scoped>
  .c-thumbnail {
    width: 100%;
    height: 200px;
  }
  .c-info {
    height: 108px;
    padding: 16px;
    display: flex;
    border-bottom: 0.5px solid #dfe2e7;
    .c-title-box {
      margin-left: 16px;
      .c-title {
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.32px;
      }
      .c-sub-title {
        color: #8991a0;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: -0.08px;
      }
    }
  }
  .c-date {
    width: 48px;
    height: 52px;
    display: flex;
    flex-direction: column;
    background-color: #f1f5f8;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    .c-month {
      width: 30px;
      height: 16px;
      color: #f9572a;
      font-size: 13px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: -0.078px;
      text-align: center;
    }
    .c-day {
      width: 30px;
      height: 28px;
      color: #000000;
      font-size: 22px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0.32px;
      text-align: center;
    }
  }
</style>
