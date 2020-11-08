<template>
    <div class="comm-list">
        <div class="type-box">
            <!-- <div>全部</div>
            <div>差评</div>
            <div>不好吃</div> -->
            <div :class="{active:obj.id == typeid}" v-for="obj in list.label" :key="obj.id" @click="change(obj.id)">{{obj.name}} ({{obj.count}}) </div>
            
        </div>
        
        <ul class="list-box">
            <!-- <li class="list">
                <img class="list-img" src="http://admin.gxxmglzx.com/tender/upload/test/head1.jpg" alt />
                <div class="list-info">
                <div class="name">薇薇2v</div>
                <div class="desc">包装很完美诶，虽然送的晚了一点，但是没有凉，串都很好吃，活动力度大，以后点外卖肯定首选你家哦～～～好吃！</div>
                </div>
            </li>
            <li class="list">
                <img class="list-img" src="http://admin.gxxmglzx.com/tender/upload/test/head1.jpg" alt />
                <div class="list-info">
                    <div class="name">薇薇2v</div>
                    <div class="desc">包装很完美诶，虽然送的晚了一点，但是没有凉，串都很好吃，活动力度大，以后点外卖肯定首选你家哦～～～好吃！</div>
                </div>
            </li> -->
            <li class="list" v-for="obj in list.rate" :key="obj.id">
                <img class="list-img" :src="obj.portrait" alt />
                <div class="list-info">
                    <div class="name">{{obj.name}}</div>
                    <div class="desc">{{obj.content}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:["list"],
        data(){
            return{
                typeid:1
            }
            
        },
        methods:{
            change(id){
                this.$emit("update",id)
                this.typeid=id
            }
        }
    }
</script>

<style lang="scss" scoped>
    .comm-list{
        padding: 0.2rem;
        border-top: 0.2rem solid #f4f4f4;
        .type-box{
            padding-bottom: 0.2rem;
            font-size: 0.26rem;
            margin-left: 0.18rem;
            div {
                display: inline-block;
                padding: 0.1rem 0.24rem;
                border: 1px solid rgb(197, 197, 197);
                border-radius: 0.28rem;
                margin-right: 0.2rem;
                margin-bottom: 0.25rem;
                color: #666;
            }
            .active{
                border-color: #FFB000;
                background-color: #fffbf1; 
                color: #FFB000;
            }
        }
        .list-box {
            .list {
                padding-bottom: 0.25rem;
                // margin-bottom: 0.25rem;
                margin-left: 0.18rem;
                display: flex;
                border-top: solid #f4f4f4 0.02rem;
                padding-top: 0.25rem;
                .list-img {
                    width: 0.8rem;
                    height: 0.8rem;
                    border-radius: 50%;
                    margin-right: 0.25rem;
                }
                .list-info{
                    color: #2f2f2f;
                    .name{
                        font-size: 0.4rem;
                        margin-bottom: 0.15rem;
                    }
                    .desc{
                        line-height: 0.45rem;
                    }
                }
            }
        }
    }
</style>