<template>
  <div class="icons">
    
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item, key) in page" :key="key" >
        
          <div class="icons-item" v-for="page in item" :key='item.id'>
            <img :src="page.iconUrl" alt="">
            <span>{{ page.title }}</span>
          
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props:["iconList"],
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
  computed: {
    page() {
      let pages = [0];
      this.iconList.forEach((item, index) => {
        let idx = Math.floor(index / 8);
        if (!pages[idx]) pages[idx] = [];
        pages[idx].push(item);
      });
      return pages;
    },
  },
};
</script>

<style  scoped>
.icon {
  width: 100%;
  background: #fff;
  /* overflow: hidden; */
 
}
.icons-item {
  width: 25%;
  padding-bottom: 21%;
  height: 0; 
  /* background-color: #ccc; */
  float: left;
}
.icons-item img {
  width: .8rem;
  height: .8rem;
  display: block;
  margin: 0 auto;
  padding-top: 0.1rem;
}
.icons-item span {
  margin-top: 0.1rem;
  font-size: 0.28rem;
  color: #212121;
  float: left;
  /* text-align: center; */
  margin-left: 30px;
  
}
</style>