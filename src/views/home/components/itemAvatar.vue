<template>
  <div class="c-avatar-content">
    <ion-avatar class="c-avatar" v-for="item in 3" :key="item">
      <!-- <img src="https://img.vm.laomishuo.com/image/2022/05/2022053113025188.jpg" /> -->
    </ion-avatar>
  </div>
</template>

<script lang="ts">
  import { IonAvatar } from '@ionic/vue'
  import { defineComponent } from 'vue'
  export default defineComponent({
    components: {
      IonAvatar
    },
    props: ['avatarData']
  })
</script>

<style lang="less" scoped>
  .c-avatar-content {
    display: flex;
    .c-avatar {
      width: 28px;
      height: 28px;
      border: solid #ffffff;
      background-color: #e7eaf0;
      background-blend-mode: normal;
      margin-left: -8px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
</style>
