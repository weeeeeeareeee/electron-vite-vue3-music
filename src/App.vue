<template>
  <div class="box">
    <homeHeader></homeHeader>
    <homeAside></homeAside>
    <router-view></router-view>
  </div>
</template>

<script>
import homeHeader from "./view/homeHeader/index.vue";
import homeAside from "./view/homeAside/index.vue";
export default {
  components: { homeHeader, homeAside }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
