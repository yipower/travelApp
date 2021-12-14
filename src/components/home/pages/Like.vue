<template>
  <div class="like">
    <div class="like-top">
      <img src="@/assets/img/icons/09.png" alt="" />
      <span>猜你喜欢</span>
    </div>
    <ul>
      <li class="like-item border-bottom" v-for="item in likeList" @click="toDetail" >
        <div class="like-img">
          <img :src='item.imgUrl' alt="" />
        </div>
        <div class="like-text">
          <div class="like-title">{{item.title}}</div>
          <div class="like-message">{{item.msg}}</div>
          <div class="like-map">
            <span class="like-mark">￥<b>{{item.mark}}</b>起 </span>
            <span class="like-map-right">{{item.map}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props:["likeList"],
  data() {
    return {
      
    };
  },
  methods:{
    toDetail(){
      this.$router.push("/detail")
    }
  }
};
</script>

<style  scoped>
.like {
  margin-top: 0.2rem;
  font-size: 0.28rem;
  background: #fff;
  padding: 0 0.2rem;
}
.like-top {
  padding-top: 0.2rem;
  font-size: 0.32rem;
}
.like-top img {
  width: 0.3rem;
  height: 0.3rem;
}
ul .like-item .like-img img {
  width: 100px;
  height: 100px;
  float: left;
}
.like-item {
  position: relative;
  overflow: hidden;
  margin-top: .2rem;
}
.like-text{
    margin-top: -.22rem;
    padding-left:.22rem ;
    margin-left:2.2rem;
}
.like-title{
    font-size: .36rem;
    color: #212121;
    margin-top: .4rem;
}
.like-message{
    margin-top: .3rem;
    color: #616161;
    font-size: .24rem;
}
.like-map{
    margin-top: .3rem;
    position: relative;
}
.like-mark{
    color: #ff8300;
}
.like-mark b{
    font-size: .36rem;
}
.like-map-right{
    position: absolute;
    right: 0;
    font-size: .2rem;
}
</style>