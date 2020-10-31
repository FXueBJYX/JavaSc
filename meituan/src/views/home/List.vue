<template>
    <div>
        <ul class="list-box">
            <li class="list" v-for="obj in list" :key="obj.id">
                <img :src="obj.img" alt="">
                <div class="list-info">
                    <h2>{{obj.name}}</h2>
                    <div class="list-con">
                        月售：{{obj.num}}
                        {{obj.distance}}
                    </div>
                    <div class="list-con">
                        配送时间：{{obj.minute}}
                    </div>
                </div>    
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
                return {
                    list:[]
                } 
        },
        created(){
            
            //console.log(1111);
            axios.get("http://admin.gxxmglzx.com/tender/test/get_store?current=1&size=10")
            .then((res)=>{
                console.log(res.data.data);
                if(res.data.errcode==200)
                {
                    this.list=res.data.data.list;
                }

            }).catch((error)=>{
                console.log(err);
            })
        }
    }
</script>

<style lang="scss" scoped>
    .list-box{
        margin: 0.1rem 0.25rem;
        .list{
            margin:0.8rem 0 ;
            display: flex;
            img{
                width: 1.73rem;
            }
            .list-info{
                align-content: space-between;
                flex: 1;
                margin-left: 0.25rem;
                .list-con{
                    font-size: 12px;
                    color: #333;
                }
            }
        }
    }
</style>