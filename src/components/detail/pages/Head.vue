<template>
  <div class="head">
    <div class="head-return" v-show="showHead" @click="returnHome">
      <span class="border-return"></span>
      <span class="iconfont return"> &#xe624; </span>
    </div>
    <div class="head-top" v-show="!showHead" :style="styleOpecity">
      <div class="header-left">
        <span class="iconfont"> &#xe624; </span>
        <div class="text">北京国际鲜花展</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showHead: true,
      styleOpecity:0
    };
  },
  methods:{
    returnHome(){
      this.$router.push('/')
    }
  },
  mounted() {
    let that = this;
    window.addEventListener("scroll", function () {
      let top = document.documentElement.scrollTop;
      if (top > 30) {
        let opacity = top/150;
        opacity=opacity>1?1:opacity
        that.styleOpecity={opacity}
        that.showHead = false;
      } else {
        that.showHead = true;
      }
    });
  },
};
</script>

<style  scoped>
.head-return {
  
  position: absolute;
  top: -0.2rem;
  left: 0.2rem;
  width: 0.72rem;
  height: 0.72rem;
}

.return {
  font-size: 0.6rem;
  border: 1px solid #fff;
  border-radius: 50%;
  opacity: 0.4;
  color: #fff;
  background: black;
}
.head-top {
  
  position: fixed;
  top: 0;
  width: 100%;
  line-height: 0.88rem;
  background: #00bcd4;
  font-size: 0.36rem;
  color: #fff;
  display: flex;
  /* opacity: .5; */
}
.head-left {
  width: 0.4rem;
  padding: 0 0.2rem;
  text-align: center;
  font-weight: bold;
}
.header-left .text {
  display: inline-block;
  padding-left: 1.4rem;
}
</style>