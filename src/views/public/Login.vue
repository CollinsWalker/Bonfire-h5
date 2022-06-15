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
        <ion-label position="floating">用户名或邮箱</ion-label>
        <ion-input v-model="userInfo.username"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">密码</ion-label>
        <ion-input type="password" v-model="userInfo.password"></ion-input>
      </ion-item>

      <ion-button expand="block" class="c-login" @click="doLogin">登录</ion-button>
      <ion-button expand="block" fill="outline" class="c-to-login" router-link="/register"
        >没有账户去注册</ion-button
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
  import { useRouter } from 'vue-router'
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
        password: ''
      })

      const router = useRouter()

      // 点击登录事件
      const doLogin = () => {
        let { username, password } = userInfo.value
        console.log(username, password)
        if (!username) {
          toastShow('用户名或邮箱为空！', 'danger')
          return
        } else if (!password) {
          toastShow('密码为空！', 'danger')
          return
        } else {
          loginUser(username, password)
        }
      }

      // 登录用户
      const loginUser = async (username: string, password: string) => {
        const user = await Parse.User.logIn(username, password)
        // Do stuff after successful login.
        console.log(user, 'user')
        if (user.id) {
          toastShow('登录成功', 'success')
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
        userInfo,
        doLogin,
        toastShow,
        router
      }
    },
    mounted() {
      // console.log('tab 1')
      console.log(this.$route.meta.title)
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
    .c-login {
      margin-top: 20px;
    }
    .c-to-login {
      position: absolute;
      bottom: 20px;
      width: 90%;
    }
  }
</style>
