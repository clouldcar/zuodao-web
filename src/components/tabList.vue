<template>
    <div class="cp-tab-list">
        <!-- tab-item -->
        <div class="tab-item" v-for="(item,index) in list" :key="index" @click="navigate('/lp/detail')">
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
            <div class="user-bar">
                <a href="javascript:;">
                    <img class="img" :src="item.avator" :alt="item.username">
                </a>
                <a href="javascript:;">{{item.username}}</a>
                <span>发布于</span>
                <span>{{item.datetime}}</span>
            </div>
        </div>
        <!-- pager -->
        <Page class="cp-pager" :total="40" size="small" show-elevator show-sizer />
    </div>
</template>

<script>
import {_createMessageList} from '../datas/message'
import baseMix from '../mixins/base'

export default {
    name: 'cp-tab-list',
    mixins: [baseMix],
    data(){
        return {
            list: _createMessageList(10)
        }
    }
}
</script>

<style lang="less">
    @import '../styles/mixins.less';

    div.cp-tab-list{
        padding: 10px 20px;
        height: 1820px;
        .tab-item{
            cursor: pointer;
            .title{
                font-size: 20px;
                font-weight: bolder;
                margin-bottom: 10px;
            }
            .desc{
                font-size: 14px;
                line-height: 1.5;
                .ellipsis(3);
            }
            .user-bar{
                margin: 20px 0;
                height: 30px;
                line-height: 30px;
                .img{
                    width: 30px;
                    height: 30px;
                    border-radius: 30px;
                    vertical-align: middle;
                }
                a,span{
                    margin-right: 10px;
                }
            }
        }
    }
</style>
