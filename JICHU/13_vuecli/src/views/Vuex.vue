<template>
    <div>
        <!-- count在其他页面也可以用 -->
        vuex
        {{$store.state.count}}

        {{count}}
        <!-- $store.commit触发mutations里的方法 -->
        <button @click="$store.commit('add',5)">++</button>
        <button @click=add(5)>++</button>
    </div>
</template>

<script>
import{ mapState,mapMutations}from "vuex"

    export default {
        computed:{
            ...mapState(['count'])
        },
        methods:{
            ...mapMutations(['add'])
        }
        
        
    }
</script>

// 状态管理


<style lang="scss" scoped>

</style>