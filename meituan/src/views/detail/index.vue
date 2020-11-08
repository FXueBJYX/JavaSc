<template>
    <div>
        <!-- 详情页 -->
        <DetailHead :list="list"></DetailHead>
        <!-- tab切换 -->
        <van-tabs v-model="active" animated>
            <van-tab :title="'点餐'" >点餐页</van-tab>
            <van-tab :title="'评论'" >
                <Comment></Comment>
            </van-tab>
            <van-tab :title="'商家'" >
                <Merchant :list="list"></Merchant>
            </van-tab>
        </van-tabs>
        <!-- 向父组件传id -->
        <!-- {{$route.query.id}} -->
    </div>
</template>

<script>
import DetailHead from "./DetailHead";
import Comment from "../comment/index";
import axios from 'axios';
import Merchant from '../merchant/Merchant'
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
            Merchant
        },
        created(){
            axios.get(`http://admin.gxxmglzx.com/tender/test/get_store_id?id=${this.id}`)
            .then((res)=>{
                console.log(res.data.data);

                this.list=res.data.data
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>