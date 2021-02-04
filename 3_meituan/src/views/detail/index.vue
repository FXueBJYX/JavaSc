<template>
    <div class="bs-wrapper">
        <div class="bs-content">
            <!-- 详情页 -->
            <DetailHead :list="list"></DetailHead>
            <!-- tab切换 -->
            <!-- 吸顶  -->
            <van-tabs v-model="active" animated sticky color="#ffb000" line-width="20px" line-height="2px">
                <van-tab :title="'点菜'" >
                    <Order></Order>
                </van-tab>
                <van-tab :title="'评价'" >
                    <Comment></Comment>
                </van-tab>
                <van-tab :title="'商家'" >
                    <Merchant :list="list"></Merchant>
                </van-tab>
            </van-tabs>
            <!-- 向父组件传id -->
            <!-- {{$route.query.id}} -->
        </div>
        
        <!-- 解决betterscroll和fixed问题放吧是里不行 -->
        <car v-if="active==0" :list="list"></car>
    </div>
</template>

<script>
import DetailHead from "./DetailHead";
import Comment from "../comment/index";
import Order from '../order/index'
import axios from 'axios';
import Merchant from '../merchant/index';
import car from '../car'

import BetterScroll from 'better-scroll'

    export default {
        data(){
            return {
                active:0,
                list:{},
                id:this.$route.query.id
            }
        },
        components: {
            DetailHead,
            Comment,
            Merchant,
            Order,
            car
        },
        created(){
            axios.get(`http://admin.gxxmglzx.com/tender/test/get_store_id?id=${this.id}`)
            .then((res)=>{
                // console.log(res.data.data);

                this.list=res.data.data
            }).catch((err)=>{
                console.log(err);
            })
        },
        mounted(){
            // 异步请求数据  要有个延时
            // 滚动条隐藏
            setTimeout(() => {     
                let bs = new BetterScroll('.bs-wrapper', {
                    click: true,
                    bounce: false
                });
            }, 1000);
            // this.$nextTick(()=>{
            //     let bs = new BetterScroll('.bs-wrapper', {
            //         click: true,
            //         bounce: false
            //     })
            // })
            
        }
    }
</script>

<style lang="scss" scoped>
    .bs-wrapper{
        height: 100vh;
        overflow: hidden;
        
    }
    
</style>