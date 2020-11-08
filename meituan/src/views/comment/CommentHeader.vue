<template>
    <div class="head">
        <div class="store-score">
            <div class="num">{{list.delivery}}</div>
            <div>商家评价</div>
        </div>
        <div class="score">
            <div id="score-kou">
                <div id="kou">口味</div> 
                <div class="kou"> 
                    <Star :num="list.flavor"></Star>
                    {{list.flavor}}分
                </div>
            </div>
            
            <div id="score-bao">
                <div id="bao">包装</div> 
                <div class="bao"> 
                    <Star :num="list.packing"></Star>
                    {{list.packing}}分
                </div>
            </div>
            
        </div>
        <div class="send-score">
            <div class="num">{{list.score}}</div>
            <div>配送评价</div>
        </div>
    </div>
</template>

<script>
import Star from "@/components/Star"
    export default {
        props:['list'],
        components:{
            Star
        }
    }
</script>

<style lang="scss" scoped>
    .head{
        color: #999;
        display: flex;
        padding: 0.3rem;
        font-size: 0.28rem;
        .store-score,.send-score{
            width: 1.46rem;
            font-size: 12px;
            text-align: center;
            .num{
                font-size: 0.54rem;
                line-height: 0.54rem ;
                // font-weight: bold;

            }
        }
        .store-score{
            .num{
                color: #ffb000;
            }
        }
        .send-score{
            .num{
                color: #999;
            }
        }
        .score{
            flex: 1;
            color: #666;
            #score-kou,#score-bao{
                display: flex;
            }
            #kou,#bao,.kou,.bao{
                display: inline-block;
            }
            .kou{
                margin-bottom: 0.25rem;
                
            }
            .kou,.bao{
                display: flex; 
                color: #ffb000;
                margin-left: 0.2rem;
                font-size: 13px;
            }
        }

    }
</style>