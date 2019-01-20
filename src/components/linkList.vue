<template>
    <div v-if="list.length > 0" class="cp-link-list">
        <ul class="cp-link-list-item">
            <li v-for="(item,index) in list" :key="index">
                <a class="title" :href="item.href" target="_blank">{{ item.title }}</a>
                <span class="date-time">{{item.datetime}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'cp-link-list',
    props: {
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

    .cp-link-list{
        &-item{
            li{
                display: flex;
                height: 30px;
                line-height: 30px;
                .title{
                    flex: 1;
                    margin-right: 20px;
                    overflow: hidden;
                    .ellipsis();
                    font-size: 14px;
                }
                .date-time{
                    width: 100px;
                    color: #999;
                    font-size: 12px;
                    overflow: hidden;
                }
            }
        }
    }
</style>
