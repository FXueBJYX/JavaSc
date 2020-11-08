<template>
    <div class="bs-wrapper">
        <div class="bs-content">
            <!-- 详情页 -->
            <DetailHead :list="list"></DetailHead>
            <!-- tab切换 -->
            <!-- 吸顶 sticky -->
            <van-tabs v-model="active" animated  color="#ffb000">
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
        
    </div>
</template>

<script>
import DetailHead from "./DetailHead";
import Comment from "../comment/index";
import Order from '../order/index'
import axios from 'axios';
import Merchant from '../merchant/index';

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
            Order
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
            setTimeout(() => {     
                let bs = new BetterScroll('.bs-wrapper', {
                    click:true
                })
            }, 1000);
            
        }
    }
</script>

<style lang="scss" scoped>
    .bs-wrapper{
        height: 100vh;
        overflow: hidden;
    }
</style>