<template>
    <div class="content">
        <div>
            <!-- 评价页88888 -->
            <CommentHeader :list="list"></CommentHeader>

            <comment-List :list="list" @update="fn"></comment-List>
            

        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
import CommentHeader from "./CommentHeader"
import commentList from './CommentList'
import BetterScroll from "better-scroll";


    export default {
        data(){
            return {
                // 改接口那的id
                id:this.$route.query.id,
                // 往子组件传值
                list:{}
            }
        },
        components:{
            CommentHeader,
            commentList
        },
        methods:{
            // 子组件给自己传的
            fn(typeid){
                this.getData(typeid);
            },
            getData(typeid){
                axios.get(`http://admin.gxxmglzx.com/tender/test/get_info?id=${this.id}&type=${typeid}`)
                .then((res)=>{
                    // console.log(res.data.data);
                    this.list=res.data.data;

                    this.$nextTick(() => {
                    this.cateScroll = new BetterScroll(".content", {
                        click: true,
                        bounce: false
                    });
                   
                });
                }).catch((err)=>{
                    console.log(err);
                })
            }
        },
        created(){
            // console.log("121212");
            this.getData(1);
        }
    }
</script>

<style lang="scss" scoped>
    .content{
        height: calc(100vh - 44px);
    }
</style>