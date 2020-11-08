<template>
    <div  >
        <div class="addsafe">
            <div class="add">{{list.address}}</div>
            <div class="safe"></div>
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
                {{list.full}}
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
    .addsafe{
        color: #999;
        margin-bottom: 0.5rem;
    }
    .peisong{
        margin-bottom: 0.5rem;

    }
    .detail{
        margin-bottom: 0.5rem;

    }
</style>