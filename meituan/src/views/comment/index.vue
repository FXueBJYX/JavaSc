<template>
    <div>
        <!-- 评价页88888 -->
        <CommentHeader :list="list"></CommentHeader>

        <comment-List :list="list" @update="fn"></comment-List>
        

    </div>
</template>

<script>
import axios from 'axios'
import CommentHeader from "./CommentHeader"
import commentList from './CommentList'

    export default {
        data(){
            return {
                id:this.$route.query.id,
                list:{}
            }
        },
        components:{
            CommentHeader,
            commentList
        },
        methods:{
            fn(id){
                this.getData(id);
            },
            getData(typeid){
                axios.get(`http://admin.gxxmglzx.com/tender/test/get_info?id=${this.id}&type=${typeid}`)
                .then((res)=>{
                    console.log(res.data.data);
                    this.list=res.data.data;
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
    
</style>