<template>
    <div>
        我是首页
        <router-link to="/home/a">a菜单</router-link>
        <router-link to="/home/b">b菜单</router-link>

        {{ $store.state.count }}

        {{ $store.state.a.list }}
        {{ $store.state.b.prolist }}

        <ul>
            <li v-for="(obj, index) in $store.state.a.list" :key="index">
                {{ obj.name }}
            </li>
            
        </ul>
        <ul>
            <li v-for="(obj,index) in $store.state.b.prolist" :key="index">{{obj.name}}</li>
        </ul>
        <button @click="$store.commit('a/add')">add</button>
        <button @click="$store.commit('b/add1')">add1</button>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
  // methods:{
  //     change(){
  //         this.$store.commit('a/add')
  //     }
  // }
};
</script>

<style lang="scss" scoped>
</style>