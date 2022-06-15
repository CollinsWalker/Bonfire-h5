<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>首页</ion-title>
      </ion-toolbar>
      <!-- <img src="https://djjpg.com/wp-content/themes/cx-multi/images/logo.png" /> -->
    </ion-header>
    <ion-content :fullscreen="true">
      <!-- 内容 -->
      <ion-list v-if="isShowSkeleton">
        <item-skeleton v-for="item in 5" :key="item"></item-skeleton>
      </ion-list>
      <ion-list class="c-list" v-else>
        <item-group v-for="item in dataLists" :key="item.id" :groupData="item"></item-group>
      </ion-list>
      <ion-infinite-scroll
        @ionInfinite="loadData($event)"
        threshold="100px"
        id="infinite-scroll"
        :disabled="isDisabled"
      >
        <ion-infinite-scroll-content loading-spinner="crescent" loading-text="正在加载...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    onIonViewWillEnter,
    onIonViewDidEnter,
    onIonViewWillLeave,
    onIonViewDidLeave,
    IonList,
    InfiniteScrollCustomEvent,
    IonInfiniteScroll,
    IonInfiniteScrollContent
  } from '@ionic/vue'

  import itemSkeleton from './components/itemSkeleton.vue'
  import itemGroup from './components/itemGroup.vue'

  import { queryLimitData } from '../../utils/parse/api'
  import Parse from '../../utils/parse'

  export default defineComponent({
    name: 'HomePage',
    components: {
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonPage,
      IonList,
      itemSkeleton,
      itemGroup,
      IonInfiniteScroll,
      IonInfiniteScrollContent
    },
    setup() {
      onIonViewDidEnter(() => {
        console.log('Home page did enter')
      })

      onIonViewDidLeave(() => {
        console.log('Home page did leave')
      })

      onIonViewWillEnter(() => {
        // subSubscribe()
        console.log('Home page will enter')
      })

      onIonViewWillLeave(() => {
        console.log('Home page will leave')
      })

      const isDisabled = ref(false)
      const initRefresher = ref(false)
      const isShowSkeleton = ref(true)
      const limit = ref(3)
      const skip = ref(0)
      const dataLists = ref<object[]>([])

      const getGroupData = async () => {
        let res: any = []
        if (initRefresher.value) {
          res = await queryLimitData('Group', limit.value, skip.value)
          if (res.length <= 0) {
            isDisabled.value = true
            return
          }
          res.forEach((ele: object) => {
            dataLists.value.push(ele)
          })
        } else {
          res = await queryLimitData('Group', limit.value, skip.value)
          dataLists.value = res.length > 0 ? res : []
          isShowSkeleton.value = false
        }
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const subSubscribe = async () => {
        const query = new Parse.Query('Group')
        const subscription = await query.subscribe()
        // 创建活动
        subscription.on('create', () => {
          console.log('object created')
        })
        // 更新事件
        subscription.on('update', () => {
          console.log('object updated')
        })
      }

      const loadData = (ev: InfiniteScrollCustomEvent) => {
        console.log('加载数据')
        skip.value = skip.value + dataLists.value.length
        initRefresher.value = true
        getGroupData().then(() => {
          // 加载完成
          ev.target.complete()
        })
      }

      return {
        isDisabled,
        dataLists,
        loadData,
        getGroupData,
        isShowSkeleton
      }
    },
    mounted() {
      this.getGroupData()
    }
  })
</script>

<style lang="less" scoped>
  .c-list {
    background-color: #f0f2f5;
  }
</style>
