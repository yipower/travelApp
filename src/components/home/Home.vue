<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :imgUrlList="imgUrlList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <location></location>
    <active></active>
    <hot :hotList="hotList"></hot>
    <like :likeList="likeList"></like>
    <vacations :vacationList="vacationList"></vacations>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HomeHeader from "./pages/Header";
import HomeSwiper from "./pages/Swiper";
import HomeIcons from "./pages/Icons";
import Location from "./pages/location.vue";
import active from "./pages/active";
import Hot from "./pages/hot.vue";
import Like from "./pages/Like.vue";
import Vacations from "./pages/vacations.vue";
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    Location,
    active,
    Hot,
    Like,
    Vacations,
  },
  data() {
    return {
      imgUrlList: [],
      vacationList: [],
      likeList: [],
      hotList: [],
      iconList: [],
    };
  },
  computed: {
    ...mapState(["city"]),
  },
  mounted() {
    this.getHttp()
  },
  methods:{
    getHttp(){
       this.$http.get("http://localhost:8080/static/mock/dataHome.json")
      .then((res) => {
        const data = res.data.data;
        // console.log(data)
        data.forEach((item, index) => {
          if (item.city == this.city) {
            // console.log(item)
            // const data =res.data.data[0]
               this.imgUrlList = item.imgUrlList,
              this.vacationList = item.vacationList,
              this.likeList = item.likeList,
              this.hotList = item.hotList,
              this.iconList = item.iconList;
          }
        });
      });
    }
  },
  activated(){
    // console.log(this.city)
  }
};
</script>

<style  scoped>
.home {
  background: #f5f5f5;
}
</style>