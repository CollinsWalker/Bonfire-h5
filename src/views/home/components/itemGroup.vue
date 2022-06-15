<template>
  <ion-item class="c-item ion-no-padding" lines="none">
    <ion-card class="c-card ion-no-margin">
      <ion-thumbnail class="c-thumbnail ion-no-margin">
        <ion-img :src="itemData.cover"></ion-img>
      </ion-thumbnail>
      <div class="c-date">
        <span class="c-month">{{ getDate(itemData.createdAt) }}</span
        ><span class="c-day">{{ getDay(itemData.createdAt) }}</span>
      </div>
      <ion-card-header>
        <ion-card-title class="c-title">{{ itemData.title }}</ion-card-title>
        <ion-card-subtitle class="c-sub-title">{{
          `${itemData.founder.username} · Going ${itemData.title} people`
        }}</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content class="c-content">
        <ion-grid class="ion-no-padding">
          <ion-row>
            <ion-col size="9">
              <!-- 小组人员头像 -->
              <item-avatar></item-avatar>
            </ion-col>
            <ion-col size="3" class="ion-text-end">
              <ion-button @click="toGroupDetail">加入</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card-content>
    </ion-card>
  </ion-item>
</template>

<script lang="ts">
  import {
    IonItem,
    IonCard,
    IonThumbnail,
    IonImg,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonGrid,
    IonCol,
    IonRow,
    IonButton
  } from '@ionic/vue'
  import itemAvatar from './itemAvatar.vue'
  import { defineComponent, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import moment from 'moment'
  export default defineComponent({
    components: {
      IonItem,
      IonCard,
      IonThumbnail,
      IonImg,
      IonCardContent,
      IonCardHeader,
      IonCardTitle,
      IonCardSubtitle,
      itemAvatar,
      IonGrid,
      IonCol,
      IonRow,
      IonButton
    },
    props: ['groupData'],
    setup(props, context) {
      const router = useRouter()
      // 跳转到小组详情
      const toGroupDetail = () => {
        router.push('/groupDetail')
      }

      // 对返回的数据处理成JSON格式
      const itemData = ref(props.groupData.toJSON())
      // console.log(props.groupData.toJSON())

      const getDate = (createdAt: string) => {
        let monthArray = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ]
        let m = parseInt(moment(createdAt).format('MM'))
        return monthArray[m]
      }

      const getDay = (createdAt: string) => {
        return parseInt(moment(createdAt).format('DD'))
      }

      return {
        toGroupDetail,
        getDate,
        getDay,
        itemData
      }
    }
  })
</script>

<style lang="less" scoped>
  .c-item {
    // 清楚item里的padding
    --inner-padding-bottom: 0;
    --inner-padding-end: 0;
    --inner-padding-start: 0;
    --inner-padding-top: 0;
    box-shadow: 0px 0.5px #c9cdd3, 0px -0.5px #c9cdd3;
    margin-bottom: 10px;
    .c-card {
      width: 100%;
      border-radius: 0;
      box-shadow: none;
    }
    .c-thumbnail {
      width: 100%;
      height: 144px;
      background-color: #f3f5f8;
    }
    .c-date {
      width: 48px;
      height: 52px;
      display: flex;
      flex-direction: column;
      background-color: #f1f5f8;
      justify-content: center;
      align-items: center;
      margin-left: 16px;
      margin-top: -36px;
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
    .c-title {
      height: 22px;
      font-size: 17px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: -0.41px;
    }
    .c-sub-title {
      height: 16px;
      color: #8991a0;
      font-size: 13px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: -0.08px;
    }
    .c-content {
      // padding-bottom: 0;
      .c-icon {
        font-size: 24px;
        color: #c2c9d6;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
