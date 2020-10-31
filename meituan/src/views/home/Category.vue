<template>
    <div>
        <ul class="cate-box">
            <!-- 加   ::::::: 动态绑定 -->
            <li v-for="obj in list " :key=obj.id class="cate">
                <img :src="obj.img" alt="">
                <p>{{obj.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios' 
    export default {
        data(){
            // ??????????????????????????
            return {list:[]}
        },
        created(){
            axios.get("http://admin.gxxmglzx.com/tender/test/get_type")
            .then((res)=>{
                //console.log(res.data);
                if(res.data.errcode == 200){
                    // 要加this.list
                    this.list = res.data.data
                }
            }).catch((error)=>{
                console.log(error);
            })
            
        }
        
    }
</script>

<style lang="scss" scoped>
    .cate-box{
        display: flex;
        flex-wrap: wrap;;
    }
    .cate{
        
        text-align: center;
        // display: inline-block;
        width: 20%;
        font-size: 12px;
        margin-top: 0.35rem;
        img{
            //padding-top: 18px;
            //width: 44px;
            width: 65%;
        }
    }

</style>