<template>
  <div>
    <el-button @click="enterChat"></el-button>
  </div>
  <router-view></router-view>
</template>

<script>
import HomeHeader from './pages/Homepage/HomeHeader/index.vue'
import HomeAside from './pages/Homepage/HomeAside/index.vue'
import { useRouter } from 'vue-router'
export default {
  components: { HomeHeader, HomeAside },

  setup() {
    const router = useRouter()
    const enterChat = () => {
      router.push({ name: 'Chatroom' })
    }
    return { enterChat }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
