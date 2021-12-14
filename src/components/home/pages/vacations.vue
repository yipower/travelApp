<template>
    <div class="vacation">
        <div class="vacation-title">
           周末去哪儿
        </div>
        <ul>
            <li class="vacation-item" v-for="item in vacationList">
                <div class="vacation-img">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="vacation-text">
                    <p class="vacation-text-top">{{item.text1}}</p>
                    <p class="vacation-text-bottom">{{item.text2}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['vacationList'],
        data(){
            return{
               
            }
        }
    }
</script>

<style  scoped>
.vacation-title{
    font-size: .3rem;
    padding: .2rem .2rem;
}
.vacation-item{
    background: #fff;
}
.vacation-img img{
    width: 100%;
    height:100%;
}
.vacation-text{
    font-size: .1rem;
    color: #212121;
    
}
.vacation-text .vacation-text-top{
    padding: .1rem .1rem;
}
.vacation-text .vacation-text-bottom{
    padding-left: .1rem;
    padding-bottom: .1rem;
}
</style>