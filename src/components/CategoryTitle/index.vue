<template>
  <div class="CategoryTitle">
   {{title}}
   <CustomIcon :name="icon" size="20px"></CustomIcon>
  </div>
</template>

<script>
import { ref } from 'vue'
import CustomIcon from '../CustomIcon/index.vue'
export default {
  components: { CustomIcon },
  props: {
    title: String,
    icon: String,
  },
  
  setup() {
    
  }
}
</script>

<style lang="less" scoped>
.CategoryTitle {
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  cursor: pointer;
  text-align:left
}
</style>