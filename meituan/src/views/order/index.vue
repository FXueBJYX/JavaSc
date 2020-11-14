<template>
    
    <div class="order-con">
        <!-- 左侧分类 -->
        <div class="cate-box">
            <ul>
                <li v-for="(obj,index) in nav" :key="obj.id" @click="click(index)">{{obj.name}}</li>
            </ul>
        </div>
        
        <!-- 右侧商品 -->
        <!-- <div>

        </div> -->
        <div class="pro-box">
            <div>
                <div  class="prod-cate-box" v-for="(obj,index) in goods" :key="index">
                    <p>{{obj.name}}</p>
                    <ul>
                        <li class="prod-list" v-for="prod in obj.content" :key="prod.id">
                            <img class="prod-img" :src="prod.img" alt="">
                            <h2>{{prod.name}}</h2>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import BetterScroll from 'better-scroll'


    export default {
        data(){
            return{
                goods:[],
                nav:[]
            }
        },
        created(){
            axios.get(`http://admin.gxxmglzx.com/tender/test/get_nav?id=${this.$route.query.id}`)
            .then((res)=>{
                // console.log(res.data.data);
                this.goods=res.data.data.goods;
                this.nav=res.data.data.nav;


                // 渲染到页面后 -> new BetterScroll
                this.$nextTick(() => {
                    this.cateScroll = new BetterScroll(".cate-box", {
                        click: true,
                        bounce: false
                    });
                    this.prodScroll = new BetterScroll(".pro-box", {
                        click: true,
                        bounce: false
                    });
                });
                

            }).catch((err)=>{
                console.log(err);
            })
        },
        methods:{
            click(index){
                // 获取到跟index索引对应的 .prod-cate-box
                let prodCateList = document.getElementsByClassName("prod-cate-box")
                console.log(prodCateList[index]);
                // ele 元素
                this.prodScroll.scrollToElement(prodCateList[index],300)

            }
        }
    };
</script>

<style lang="scss" scoped>
    .order-con {
        display: flex;
        font-size: 0.24rem;
        padding-bottom: 1rem;
        .cate-box {
            flex: 1;
            height: calc(100vh - 94px);
            li {
                padding: 0.18rem 0.24rem 0.44rem;
                background: #f5f5f5;
                
            }
        }
        .pro-box {
            flex: 3;
            height: calc(100vh - 94px);
            .prod-list {
                display: flex;
                .prod-img {
                    width: 1.5rem;
                }
                p{
                    flex:1
                }
            }
        }
    }
</style>