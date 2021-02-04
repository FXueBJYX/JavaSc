<template>
    <div>
        <!-- 我是首页 -->
        <!-- Head -->
        <Head></Head>
        <!-- Categoy -->
        <Category></Category>
        <!-- List -->
        <List></List>
    </div>
</template>

<script>
    import Head from './Head'
    import Category from './Category'
    import List from './List'
    export default {
        components:{
            Head,
            Category,
            List
        }
        
    }
</script>

<style lang="scss" scoped>

</style>