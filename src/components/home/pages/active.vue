<template>
    <div class="active border-top" >
        <div class="active-item border-right">
            <img src="@/assets/img/icons/05.png" alt="">
        </div>
        <div class="active-item"> 
            <img src="@/assets/img/icons/06.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.active{
	margin-top: .2rem;
	position: relative;
	display: flex;
	background: #fff;
}
.active .active-item{
	flex:1;
	font-size:.28rem;
	text-align: center;
	height: 1.4rem;
}
.active .active-item img{
	width:100%;
	height: 100%;
}
</style>