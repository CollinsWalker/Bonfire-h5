<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ $route.meta.title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding c-content">
      <!-- 内容 -->
      <ion-item>
        <ion-label position="floating">封面</ion-label>
        <ion-input v-model="groupInfo.cover"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">标题</ion-label>
        <ion-input v-model="groupInfo.title"></ion-input>
      </ion-item>

      <ion-button expand="block" @click="addGroup">添加</ion-button>
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
    IonButtons,
    IonBackButton,
    IonItem,
    IonInput,
    IonButton,
    IonLabel,
    toastController
  } from '@ionic/vue'
  import { addObject } from '../../utils/parse/api'
  import Parse from '../../utils/parse'
  import { useRouter } from 'vue-router'

  export default defineComponent({
    name: 'AddGroupPage',
    components: {
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonPage,
      IonButtons,
      IonBackButton,
      IonItem,
      IonInput,
      IonButton,
      IonLabel
    },
    setup() {
      // 用户登录信息
      const groupInfo = ref({
        cover: '',
        title: ''
      })

      const router = useRouter()

      const addGroup = () => {
        let { cover, title } = groupInfo.value
        setGroup(cover, title)
      }

      const setGroup = async (cover: string, title: string) => {
        const currentUser = Parse.User.current()
        let params = {
          cover,
          title,
          founder: currentUser
        }
        let res = await addObject('Group', params)
        if (res) {
          toastShow('添加成功', 'success')
          router.push('/home')
        }
      }

      // 消息弹窗
      const toastShow = async (message: string, color: string) => {
        const toast = await toastController.create({
          message,
          duration: 3000,
          color
        })
        return toast.present()
      }

      return {
        groupInfo,
        addGroup,
        toastShow
      }
    }
  })
</script>

<style lang="less" scoped>
  .c-content {
  }
</style>
