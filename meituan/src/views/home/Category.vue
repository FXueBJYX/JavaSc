<template>
    <div>
        <ul class="cate-box">
            <li class="cate" v-for="obj in list" :key="obj.id">
                <img :src="obj.img" alt="">
                <p>{{obj.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                list:[]
            }
        },
        created(){
            axios.get("http://admin.gxxmglzx.com/tender/test/get_type")
            .then((res)=>{
                // console.log(res.data)
                if(res.data.errcode==200){
                    this.list=res.data.data
                }
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
</script>

<style lang="scss" scoped>
    .cate-box{
        display: flex;
        flex-wrap: wrap;
    }
    .cate{
        text-align: center;
        width: 20%;
        font-size: 12px;
        margin-top: 0.35rem;
        img{
            width: 65%;
        }
    }

</style>