<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ $route.meta.title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding c-content">
      <!-- 内容 -->
      <ion-item>
        <ion-label position="floating">用户名</ion-label>
        <ion-input v-model="userInfo.username" maxlength="8"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">邮箱</ion-label>
        <ion-input v-model="userInfo.email" spellcheck="true"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">密码</ion-label>
        <ion-input type="password" v-model="userInfo.password" maxlength="16"></ion-input>
      </ion-item>

      <ion-button expand="block" class="c-register" @click="doLogin">注册</ion-button>
      <ion-button expand="block" fill="outline" class="c-to-register" router-link="/login"
        >返回登录</ion-button
      >
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
    IonButton,
    IonLabel,
    IonInput,
    toastController,
    IonItem
  } from '@ionic/vue'
  import Parse from '../../utils/parse'
  export default defineComponent({
    name: 'HomePage',
    components: {
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonPage,
      IonButton,
      IonLabel,
      IonInput,
      IonItem
    },
    setup() {
      // 用户登录信息
      const userInfo = ref({
        username: '',
        email: '',
        password: ''
      })
      // 点击登录事件
      const doLogin = () => {
        let { username, email, password } = userInfo.value
        if (!username) {
          toastShow('用户名为空！', 'danger')
          return
        } else if (!email) {
          toastShow('邮箱为空！', 'danger')
          return
        } else if (!password) {
          toastShow('密码为空！', 'danger')
          return
        } else {
          signUp(username, email, password)
        }
      }

      // parse注册事件

      const signUp = async (username: string, email: string, password: string) => {
        const user = new Parse.User()
        user.set('username', username)
        user.set('email', email)
        user.set('password', password)
        try {
          let res = await user.signUp()
          console.log(res, 'res')
          if (res.id) {
            toastShow('注册成功', 'success')
          }
          // Hooray! Let them use the app now.
        } catch (error) {
          // Show the error message somewhere and let the user try again.
          console.log('Error: ', error)
          toastShow('Error: ' + error, 'danger')
        }
      }

      // 消息弹窗
      const toastShow = async (message: string, color: string) => {
        const toast = await toastController.create({
          message,
          duration: 3000,
          color,
          position: 'top'
        })
        return toast.present()
      }

      return {
        userInfo,
        doLogin,
        toastShow
      }
    },
    mounted() {
      console.log('tab 1')
    },
    methods: {
      async openToast() {
        const toast = await toastController.create({
          message: 'Your settings have been saved.',
          duration: 2000,
          color: 'success'
        })
        return toast.present()
      }
    }
  })
</script>

<style lang="less" scoped>
  .c-content {
    position: relative;
    .c-register {
      margin-top: 20px;
    }
    .c-to-register {
      position: absolute;
      bottom: 20px;
      width: 90%;
    }
  }
</style>
