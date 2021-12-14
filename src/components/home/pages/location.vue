<template>
    <div class="location border-top" >
        <div class="location-item border-right">
           
            <span class="iconfont icon-iconfontlocationon"></span>
            江西南昌
        </div>
        <div class="location-item"> 
            <span class="iconfont icon-diqiuquanqiu"></span>
            玩水季
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.location{
    display: flex;
    /* margin-top: 10px; */
    position: relative;
    background: #fff;
}

.location .location-item {
    flex: 1;
    font-size:.28rem ;
    text-align: center;
    line-height: .8rem;
    /* background: red; */
}
</style>