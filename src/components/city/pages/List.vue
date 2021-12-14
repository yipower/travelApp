<template>
<main class="position-box">
    <vue-better-scroll class="wrapper"
                         ref="scroll"
                         :scrollbar="scrollbarObj"
                         :pullDownRefresh="pullDownRefreshObj"
                         :pullUpLoad="pullUpLoadObj"
                         
                        >
  <!-- sort -->
  <div class="sort">
    <div class="sort-title">字母排序</div>
    <ul class="sort-list">
      <li class="sort-item" v-for="(val,key) in cities"
      @click="changeSort(key)">{{key}}</li>
     
    </ul>
  </div>
	<!--hot-->
			<div class='hot'>
				<div class='hot-title'>热门城市</div>
				<ul class='hot-list'>
					<li class='hot-item'
					v-for='item in hotCities'
					:key='item.id'
          @click="changeCityName(item.name)"
					>
						{{item.name}}
					</li>
				</ul>
			</div>
  <div class="list">
    <div v-for="(val,key) in cities" :ref="key">
      <div class="list-title">{{ key }}</div>
      <ul class="list-list">
        <li class="list-item" v-for="item in val"  @click="changeCityName(item.name)">{{ item.name }}</li>
      </ul>
    </div>
  </div>
  </vue-better-scroll>
 </main>
</template>

 <script>
// import BScroll from 'better-scroll'

import VueBetterScroll from 'vue2-better-scroll'

import {mapMutations} from 'vuex'
export default {
  props: ["hotCities", "cities"],
  components: {
    VueBetterScroll
  },
  data() {
    return{
      scrollbarObj: {
          fade: true
        },
        // 这个配置用于做下拉刷新功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启下拉刷新，可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
        pullDownRefreshObj: {
          threshold: 90,
          stop: 40
        },
        // 这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载，可以配置离底部距离阈值（threshold）来决定开始加载的时机
        pullUpLoadObj: {
          threshold: 0,
          txt: {
            more: '加载更多',
            noMore: '没有更多数据了'
          }
        },
        
    }
  },
  mounted() {
    // this.onPullingDown()
  }, 
  methods:{
    
   changeSort(sortName){
     console.log(this.$refs)
      this.$refs.scroll.scrollToElement(this.$refs[sortName][0])
   },
   changeCityName(cityName){
     console.log(cityName)
    this.$router.push('/')
    this.changeCity(cityName)
     
   },
    ...mapMutations(['changeCity'])
  }
};
</script>

<style  scoped>
.position-box{
  position: fixed;
  overflow: hidden;  
  left: 0;
  right: 0;
  bottom: 0;
  top: .88rem;
  background: #f5f5f5;
  
}
/* .sort {
  clear: both;
  
} */
.sort-title {
  font-size: 0.26rem;
  color: #212121;
  padding: 0.2rem;
  /* background-color: #f5f5f5; */
}
.sort-list {
  font-size: 0.28rem;
 background: #fff;
 overflow: hidden;
}
.sort-item {
  width: 16.66666%;
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
  background-color: #fff;
}
.hot {
  display: inline-block;
  width: 100%;
}
.hot-title {
  font-size: 0.24rem;
  color: #212121;
  padding: 0.2rem 0.3rem;
}
.hot-list {
  width: 100%;
  position: relative;
  overflow: hidden;
  background: #fff;
  font-size: 0.28rem;
  color: #212121;
}

.hot-item {
  position: relative;
  width: 33%;
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
  border-bottom: 0.02rem solid #ddd;
  border-left: 1px solid #ddd;
}
.list {
  clear: both;
}
.list-title {
  font-size: 0.26rem;
  color: #212121;
  padding: 0.2rem;
  background-color: #f5f5f5;
}
.list-list {
  background-color: #fff;
  font-size: 0.28rem;
  overflow: hidden;
}
.list-item {
  width: 25%;
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>