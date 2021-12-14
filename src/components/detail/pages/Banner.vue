<template>
  <div class="banner">
    <div @click="showSwiper">
      <div class="banner-img">
        <img src="@/assets/img/icons/11.jpg" alt="" />
      </div>
      <div class="banner-title">金海湖AAAA级风景区</div>
    </div>
    <div @click="hiddenSwiper" class="img-swiper" v-show="imgSwiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in bannerList" :key="item.id">
          <img :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
      },
      bannerList: [
        {
          id: "01",
          imgUrl: require("@/assets/img/icons/11.jpg"),
        },
        {
          id: "02",
          imgUrl: require("@/assets/img/icons/11.jpg"),
        },
        {
          id: "03",
          imgUrl: require("@/assets/img/icons/11.jpg"),
        },
      ],
      imgSwiper: false,
    };
  },
  methods: {
    showSwiper() {
      this.imgSwiper = true;
    },
    hiddenSwiper() {
      this.imgSwiper = false;
    },
  },
};
</script>

<style scoped>
.banner {
  position: relative;
}
.banner-img {
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}
.banner-img img {
  width: 100%;
}
.banner-title {
  position: absolute;
  bottom: 0.4rem;
  left: 0.3rem;
  font-size: 0.36rem;
  color: #fff;
}
.img-swiper {
  background: #000;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.img-swiper img {
  width: 100%;
}
</style>