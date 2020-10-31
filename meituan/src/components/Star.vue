

<template>
    <!-- <div> -->
        <ul>
            <!-- 传过来num = 3.5  1  class名 根据num和i对比  -->
            <!-- 类那里是哪个后面是真的就显示哪个 -->
            <li v-for="i in 5" :key="i" :class="{
                //'active':i<=num,
                //'unactive':i>num
                'active':i<=num,
                'half-active':i>num&&i-num<1,
                'unactive':i>num&&i-num>=1
                
            }"></li>
            <!-- 老师的 -->
            <!-- 'active':i<=num,
            'half-active': ((i-num)>0)&&((i-num)<1),  
            'unactive':i> Math.ceil(num) -->
            <!-- 向上取整 ↑ -->
            <!-- <li class="active"></li>
            <li class="half-active"></li>
            <li class="unactive"></li> -->
        </ul>
    <!-- </div> -->
</template>

<script>
export default {
    // 父组件传子组件
    props: {
        num: {
            type: Number,
            default: 5
        }
    }
};
</script>

<style lang="scss" scoped>
ul {
    display: inline;
    li {
        display: inline-block;
        width: 12px;
        height: 12px;
        background-size: 12px 12px;
    }
    .active {
        background-image: url(./images/star-active.png);
    }
    .half-active {
        background-image: url(./images/star-half.png);
    }
    .unactive {
        background-image: url(./images/star.png);
    }
}
</style>
