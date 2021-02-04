<template>
    <div>
        
        <img class="loading" v-show="isShow" src="@/assets/images/loading.gif" alt="">
    
        <ul class="list-box">
            <!-- <h3 class="">附近商家</h3> -->
            <li class="list" v-for="obj in list" :key="obj.id"
                @click="$router.push({path:'/detail',query:{id:obj.id}})"
            >
                <img :src="obj.img" alt="">
                <div class="list-info">
                    <h2>{{obj.name}}</h2>
                    <div class="list-con">
                        <Star :num="parseFloat(obj.score)"></Star>
                        {{obj.score}}
                        
                        月售：{{obj.num}}
                        {{obj.distance}}
                    </div>
                    <div class="list-con">
                        配送时间：{{obj.minute}}
                    </div>
                </div>    
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    import Star from '@/components/Star'
    export default {
        data(){
                return {
                    list:[],
                    pageNum:0,
                    isShow:true,  //判断loading是否显示  true显示|false隐藏
                    isFinished:false
                } 
        },
        components:{
            Star
        },
        methods:{
            getData(){
                axios.get("http://admin.gxxmglzx.com/tender/test/get_store?current="+this.pageNum+"&size=10")
                .then((res)=>{
                    // console.log(res.data.data);
                    if(res.data.errcode==200)
                    {
                        // this.list=res.data.data.list;
                        // 原来的和后加的连一起
                        this.pageNum++;
                        this.list=[...this.list,...res.data.data.list];
                        this.isShow = false; //loading隐藏
                        // 判断是不是请求完了
                        if(this.list.length == res.data.data.total){
                            this.isFinished = true
                        }
                    }

                }).catch((error)=>{
                    console.log(err);
                })
            }
        },
        created(){
            
            this.getData()
            
            // 滚动条滚动
            window.onscroll =()=>{
                // 滚动条滚动高度
                let scrollTop=document.documentElement.scrollTop;
                // 当前页面高度
                let clientHeight=document.documentElement.clientHeight;
                // 整个页面高度
                let scrollHeight=document.documentElement.scrollHeight;

                // console.log(scrollTop,clientHeight,scrollHeight)
                if( (Math.ceil(scrollTop) + clientHeight) == scrollHeight){
                // if( (scrollTop + clientHeight) == scrollHeight){
                    this.isShow = true; //loading
                    this.getData();
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-box{
        margin: 0.1rem 0.25rem;
        .list{
            margin:0.5rem 0 ;
            display: flex;
            img{
                width: 1.73rem;
            }
            .list-info{
                align-content: space-between;
                flex: 1;
                margin-left: 0.25rem;
                .list-con{
                    font-size: 12px;
                    color: #333;
                    
                    
                }
            }
        }
    }
    .loading{
        position: fixed;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        width:1.4rem;
        height:1.4rem;
    }
</style>