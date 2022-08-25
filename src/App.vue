<template>
  <div>
    <Homepage></Homepage>
  </div>
</template>

<script>
import router from './router/index.js'
import Homepage from './pages/Homepage/index.vue'
import {getCurrentInstance} from 'vue'
export default {
  components:{Homepage},
  setup() { 
    const enterChat = () => {
      console.log(getCurrentInstance());
      router.push("/")
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
