<template>
    <div class="hot">
        <div class="hot-top">
            <img src="@/assets/img/icons/07.png" alt="">
            <span>本周热门榜单</span>
            <span class="hot-title">全部榜单</span>
        </div>
        <ul class="hot-list">
            <li class="hot-item" v-for="item in hotList" >
                <img :src="item.urlList" alt="">
                <p>{{item.title}}</p>
                <p>
                    <span class="hot-mark">￥{{item.mark}}起</span>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        props:['hotList'],
        data(){
            return{
               
            }
        }
    }
</script>

<style  scoped >

.hot{
    margin-top: .2rem;
    background: #fff;
    font-size: .28rem;

}
.hot-top{
padding-top: .2rem;
position: relative;
}
.hot-top img{
    width: .3rem;
    height: .3rem;
}
.hot-top span{
    color: #212121;
    font-size: .3rem;
}
.hot-title{
     position: absolute;
     right: .2rem;
     top: .3rem;
}
.hot-list{
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
   height: 3.2rem;
}
.hot-item{
    padding: 0.2rem;
    width: 2rem;
    height: 2rem;
    display: inline-block;
   
}
.hot-item img{
    width: 100%;
    height: 100%;
}
.hot-item p{
    margin-top: .1rem;
    text-align: center;
}
.hot-item .hot-mark{
    color:#ff8300;
	font-size:.2rem;
}
</style>