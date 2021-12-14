<template>
  <div class="header-swiper"> 
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in imgUrlList" :key="item.id">
      <img :src="item.imgUrl" alt="">
      </swiper-slide>
    
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props:['imgUrlList'],
  data() {
    return {
       
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
      },
    };
  },
};
</script>

<style  scoped>
.header-swiper {
  height: 1.7rem;
  width: 100%;
}
.header-swiper img {
  width: 100%;
  height: 100%;
}
</style>