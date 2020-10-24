<template>
    <div>
        <!-- count在其他页面也可以用 -->
        vuex
        {{$store.state.count}}

        {{count}}
        <!-- $store.commit触发mutations里的方法 -->
        <button @click="$store.commit('add',5)">++</button>
        <button @click=add(5)>++</button>
        <h3>{{$store.getters.sum}}</h3>

        {{sum}}
    </div>
</template>

<script>
import{ mapState,mapMutations,mapGetters}from "vuex"
import axios from 'axios'

    export default {
        computed:{
            ...mapState(['count']),
            ...mapGetters(['sum'])
        },
        methods:{
            ...mapMutations(['add'])
        },
        created(){
            this.$store.dispatch('getMovielist')
        }
        
        
    }
</script>

// 状态管理


<style lang="scss" scoped>

</style>