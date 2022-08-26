<template>
  <el-icon style="height: 100%" :size="size" class="icon">
    <component :is="defaults[iconName]" />
  </el-icon>
</template>

<script>
import * as ElIcons from "@element-plus/icons-vue";
import { computed } from "vue-demi";
export default {
  name: "CustomIcon",
  props: {
    name: String,
    size: {
      type: [String, Number],
      default: "18px"
    }
  },
  setup(props) {
    const defaults = computed(() => ElIcons);
    const iconName = computed(() => props.name);
    return { defaults, iconName };
  }
};
</script>

<style lang="less" scoped>
.icon {
  vertical-align:text-top;
  line-height: 20px;
  margin-right: 10px;
}
</style>
