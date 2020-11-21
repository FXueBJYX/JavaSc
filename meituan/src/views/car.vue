<template>
    <div>
        <div class="car" >
            <div class="icon-cir">
                <span class="iconfont icon-icon-">
                    <span class="count-num" v-if="$store.getters.total != 0">{{$store.getters.total}}</span>
                </span>
                
            </div>
            <div class="peisong">
                <!-- <p>另需配送费{{list.fee}}元</p> -->
                <p>总价：{{$store.getters.totalPrice}}</p>

            </div>
            <div class="price">
                <p>{{list.price}}元起送</p>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        props:["list"]
        
    }
</script>

<style lang="scss" scoped>
   .car{
        position: fixed;
        bottom: 0;
        left: 0;
        height: 50px;
        background-color: #3b3b3c;
        width: 100%;
        display: flex;
        .icon-cir{
            position: relative;

            .icon-icon-{
                padding: 5px;
                background-color: #656565;
                color: #c4c4c4;

                font-size: 40px;
                border-radius: 50%;
                position: absolute;
                top: -10px;
                left: 10px;
                .count-num{
                    position: absolute;
                    height: 15px;
                    width: 15px;
                    right: 0;
                    top: 0;
                    background-color: #f00;
                    color: #fff;
                    border-radius: 50%;
                    font-size: 10px;
                    text-align: center;
                }

            }
            
        }
        .peisong{
            color: #fff;
            flex: 3;
            margin-left: 80px;
            line-height: 50px;
            font-size: 20px;
        }
        .price{
            flex: 1;
            color: #999;
            line-height: 50px;
            font-size: 12px;
        }
        
        
    }
</style>