<template>
    <div  class="box">
        <div class="addsafe">
            <div class="add">{{list.address}}</div>
            <div class="safe">查看食品安全档案</div>
        </div>
        <div class="peisong">
            <div class="mode">配送服务：{{list.server}}</div>
            <div class="time">配送时间：{{list.delivery_time}}</div>
        </div>
        <div class="detail">
            <div class="notice">
                {{list.notice}}    
            </div>
            <div class="full">
                <div>{{list.full}}</div>
                {{list.sales}}
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props:["list"],
        
    }
</script>

<style lang="scss" scoped>
    .box{
        margin-left: 0.4rem;
        .addsafe{
            color: #333;
            margin-bottom: 0.5rem;
            .add{
                font-family: mtsi-font;
                margin-bottom: 0.2rem;
            }
            
        }
        .peisong{
            margin-bottom: 0.5rem;
            .time{
                font-family: mtsi-font;
            }

        }
        .detail{
            margin-bottom: 0.5rem;
            // width:0; /*不受子元素宽度撑大*/
            .notice{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-bottom: 0.2rem;

            }
            .full{
                font-family: mtsi-font;
            }
            

        }
    }
    
</style>