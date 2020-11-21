<template>
    
    <div class="order-con">
        <!-- 左侧分类 -->
        <div class="cate-box">
            <ul>
                <li 
                    :class="{active:index == currentIndex,'cate-list':true}" 
                    v-for="(obj,index) in nav" 
                    :key="obj.id" 
                    @click="click(index)">
                    {{obj.name}}
                </li>
            </ul>
        </div>
        
        <!-- 右侧商品 -->
        <div class="pro-box">
            <div>
                <div  class="prod-cate-box" v-for="(obj,index) in goods" :key="index">
                    <p>{{obj.name}}</p>
                    <ul>
                        <li class="prod-list" v-for="(prod, typeIndex) in obj.content" :key="prod.id">
                            <img class="prod-img" :src="prod.img" alt="">
                            <div>
                                <h2>{{prod.name}}</h2>
                                <p>{{prod.price}}</p>
                            </div>
                            
                            <!-- 加减号和数量 -->
                            <div class="_icon">
                                <!-- 不选商品的时候不显示减号 -->
                                <span class="iconfont icon-jian" @click="$store.commit('reduce',{index,typeIndex})" v-if="prod.count>0"></span>
                                <span class="num" v-if="prod.count != 0">{{prod.count}}</span>
                                <span class="iconfont icon-jia" @click="$store.commit('add',{index,typeIndex})"></span>
                            </div>

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
                nav:[],
                currentIndex:0,
                // 右侧滚动左侧也跟着的用到的
                scrollY: 0, //prodScroll 滚动的高度
                pos: [] //记录所有分类div的位置prod-cate-box
            }
        },
        created(){
            axios.get(`http://admin.gxxmglzx.com/tender/test/get_nav?id=${this.$route.query.id}`)
            .then((res)=>{
                // console.log(res.data.data);
                this.goods=res.data.data.goods;
                this.nav=res.data.data.nav;

                // vuex中存储商品  调用vuex中mutation中的方法
                this.$store.commit('save',this.goods);


                // 渲染到页面后 -> new BetterScroll
                // 两个页面分别的滚动条
                this.$nextTick(() => {
                    this.cateScroll = new BetterScroll(".cate-box", {
                        click: false,
                        bounce: false
                    });
                    this.prodScroll = new BetterScroll(".pro-box", {
                        click: false,
                        bounce: false,
                        // ?????
                        probeType: 3
                    });

                    // 右侧滚动左侧跟着
                    this.prodScroll.on("scroll", position => {
                        // console.log(position.x, position.y);
                        this.scrollY = Math.abs(position.y);
                        // console.log(this.scrollY)
                    });

                    // 计算每个分类的位置
                    this.getPos();

                    
                });
                

            }).catch((err)=>{
                console.log(err);
            })
        },
        methods:{
            click(index){
                // 获取到跟index索引对应的 .prod-cate-box
                // 获取DOM元素
                let prodCateList = document.getElementsByClassName("prod-cate-box")
                // console.log(prodCateList[index]);
                // ele 元素

                this.prodScroll.scrollToElement(prodCateList[index],300)

                this.currentIndex=index;

            },
            // 当右侧滚动时候  求-滚动到第几个分类
            getPos() {
                let prodCateList = document.getElementsByClassName("prod-cate-box");
                let H = 0;
                for (let i = 0; i < prodCateList.length; i++) {
                    if (i == 0) {
                        this.pos.push(0);
                    } else {
                        H += prodCateList[i - 1].offsetHeight;
                        this.pos.push(H);
                    }
                }
                console.log(this.pos);
            }
        },
        watch:{
            // 右侧滚动左侧分类变
            scrollY(val) {
                // console.log(val)
                // val在哪个坐标范围内 
                let cateList = document.querySelectorAll('.cate-list');
                for (let index = 0; index < this.pos.length; index++) {
                    let pos1 = this.pos[index];
                    let pos2 = this.pos[index+1];
                    if(val>= pos1 && val <pos2){
                        //  console.log(index);
                        this.currentIndex = index;
                        //  参数element
                        this.cateScroll.scrollToElement(cateList[index],300)
                        break;
                    }
                }
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
            // 94是上面的tab标签页的44加上下面预留出的50
            height: calc(100vh - 94px);
            li {
                padding: 0.18rem 0.24rem 0.44rem;
                background: #f5f5f5;
                &.active{
                    // 给li加个class叫active
                    color: red;
                    background-color: rgb(248, 248, 248);
                }
                
            }
        }
        .pro-box {
            flex: 3;
            height: calc(100vh - 94px);
            .prod-list {
                display: flex;
                margin-bottom: 0.1rem;
                position: relative;
                .prod-img {
                    width: 2rem;
                }
                p{
                    flex:1
                }
                ._icon{
                    position: absolute;
                    bottom: 0;
                    right: 0.05rem;
                    
                    .num{
                        vertical-align: middle;
                    }
                    .icon-jia,.icon-jian{
                        font-size: 0.4rem;
                        padding: 0 0.08rem;
                        vertical-align: middle;
                    }
                    .icon-jia{
                        color: #ffc134;
                    }
                    .icon-jian{
                        color: #e2e3e5;
                    }
                }
            }
        }
    }
</style>