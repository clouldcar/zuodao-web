<template>
    <div class="cp-image-text">
        <h3 class="title">{{title}}</h3>
        <div v-for="(item,index) in list" :key="index" class="cp-image-text-item">
            <img class="img" :src="item.src" alt="item.name">
            <div class="desc">
                <div class="name">{{item.name}}</div>
                <div class="content">
                    {{item.desc}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cp-image-text',
    props: {
        title: {
            type: String,
            default: ''
        },
        list: {
            type: Array,
            default: function(){
                return []
            }
        }
    }
}
</script>

<style lang="less">
    @import '../styles/mixins.less';

    .cp-image-text{
        width: 100%;
        .title{
            padding: 20px 0 0 10px;
        }
        &-item{
            display: flex;
            border: solid 1px #dcdee2;
            margin: 10px;
            padding: 10px;
            .img{
                width: 120px;
                height: 120px;
                border-radius: 120px;
            }
            .desc{
                padding: 10px;
                .name{
                    font-size: 16px;
                    font-weight: bolder;
                    margin-bottom: 5px;
                }
                .content{
                    flex: 1;
                    .ellipsis(4);
                }
            }
        }
    }
</style>
