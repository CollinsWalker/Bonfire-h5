<template>
  <ion-page>
    <ion-content fullscreen="true" scroll-y="true">
      <ion-toolbar class="c-toolbar">
        <ion-thumbnail class="c-thumbnail ion-no-margin">
          <ion-img src="https://w.wallhaven.cc/full/v9/wallhaven-v9v3r5.jpg"></ion-img>
        </ion-thumbnail>
        <div class="c-user">
          <!-- 用户头像 -->
          <img
            class="c-avatar"
            src="https://img.vm.laomishuo.com/image/2022/05/2022053113025188.jpg"
          />
          <!-- 用户的名称和ID -->
          <div class="c-info">
            <p class="c-name ion-no-margin">Frank Clarke</p>
            <p class="c-id ion-no-margin">@frankcl</p>
          </div>
        </div>
      </ion-toolbar>
      <!-- 用户简介 -->
      <p class="c-user-des"
        >Living in today’s metropolitan world of cellular phones, mobile computers and other
        high-tech gadgets is not just hectic but very impersonal.
      </p>
      <!-- 用户操作按钮 -->
      <!-- <div class="c-user-action" v-if="!userInfo.isSelf">
          <ion-button shape="round">
            <ion-icon slot="start" :icon="personAddOutline"></ion-icon>
            Follow
          </ion-button>
          <ion-button shape="round">
            <ion-icon slot="start" :icon="chatbubbleOutline"></ion-icon>
            Message
          </ion-button>
        </div> -->
      <!-- 小组数 - 关注数 - 粉丝 -->
      <div class="c-follow">
        <div class="c-follow-item"><span>12</span><span>Group</span></div>
        <div class="c-follow-item"><span>132</span><span>Followers</span></div>
        <div class="c-follow-item"><span>766</span><span>Following</span></div>
      </div>
      <!-- 用户标签 -->
      <div class="c-tags">
        <ion-chip class="c-chip ion-no-margin" v-for="item in 8" :key="item">
          <ion-label class="c-label">Logo</ion-label>
        </ion-chip>
      </div>
      <!-- 用户小组 -->
      <h2 class="c-title ion-no-margin">Groups</h2>
      <ion-list class="c-list">
        <!-- <item-group v-for="item in 3" :key="item"></item-group> -->
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import {
    IonPage,
    IonToolbar,
    IonContent,
    IonThumbnail,
    IonImg,
    IonLabel,
    IonChip,
    IonList
    // virtual-scroll-element
  } from '@ionic/vue'
  import { personAddOutline, chatbubbleOutline } from 'ionicons/icons'
  export default defineComponent({
    name: 'Tab3Page',
    components: {
      IonToolbar,
      IonContent,
      IonPage,
      IonThumbnail,
      IonImg,
      IonLabel,
      IonChip,
      IonList
    },
    setup() {
      // 用户信息
      const userInfo = ref({
        isSelf: true
      })
      return {
        personAddOutline,
        chatbubbleOutline,
        userInfo
      }
    }
  })
</script>

<style lang="less" scoped>
  .header-md::after {
    content: none;
  }
  .c-toolbar {
    position: relative;
  }
  .c-thumbnail {
    width: 100%;
    height: 228px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
    margin-bottom: 16px;
  }
  .c-user {
    width: 100%;
    height: 96px;
    position: absolute;
    left: 0;
    bottom: 0;
    padding-left: 16px;
    display: flex;
    .c-avatar {
      width: 96px;
      height: 96px;
      background: #e7eaf0;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 16px;
    }
    .c-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .c-name {
      color: #ffffff;
      font-size: 28px;
      font-weight: 400;
      line-height: 34px;
      letter-spacing: 0.36px;
    }
    .c-id {
      height: 18px;
      color: #ffffff;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: -0.154px;
    }
  }
  .c-user-des {
    height: 66px;
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.24px;
    margin: 16px;
  }
  .c-user-action {
    padding-left: 16px;
  }
  .c-follow {
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    .c-follow-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        &:first-child {
          height: 30px;
          font-size: 24px;
          font-weight: 400;
          line-height: 30px;
          text-align: center;
        }
        &:last-child {
          height: 15px;
          color: #7c8494;
          font-size: 12px;
          font-weight: 400;
          line-height: 15px;
        }
      }
    }
  }
  .c-tags {
    padding: 16px;
    .c-chip {
      margin-bottom: 10px;
      margin-right: 10px;
      background-color: #f4f4f9;
      border-radius: 5px;
      .c-label {
        height: 18px;
        color: #7c8494;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: -0.154px;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .c-title {
    height: 26px;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.38px;
    padding-left: 16px;
  }
</style>
