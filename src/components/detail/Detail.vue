<template>
  <div>
    <detail-banner></detail-banner>
    <detail-head></detail-head>
    <div style="height:2000px;"></div>
  </div>
</template>

 <script>
import detailBanner from "./pages/Banner.vue";
import detailHead from "./pages/Head.vue";
export default {
  components: {
    detailBanner,
    detailHead,
  },
  activated(){
    document.documentElement.scrollTop=0;
  }
};
</script>

<style scoped>
</style>