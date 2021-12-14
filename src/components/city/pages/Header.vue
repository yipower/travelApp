<template>
    <div>
        <div class="header">
            <div class="header-left" @click="toHome">
                <span class="iconfont">
                    &#xe624;
                </span>
            </div>
            <div class="header-mid">
                <span>城市选择</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            toHome(){
                this.$router.push('/')
            }
        }
    }
</script>


    
<style scoped>
  
.header{
	width:100%;
	line-height: .88rem;
	background: #00bcd4;
	font-size:.36rem;
	/* display: flex; */
    color: #fff;
    position: relative;
}
.header-left{
	width:.4rem;
	padding:0 .2rem;
	text-align: center;
	font-weight: bold;
    position: absolute;
}
.header-mid{
    text-align: center;
}
</style>