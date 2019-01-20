<template>
    <div class="cp-week-plan-list">
        <cp-widget-header></cp-widget-header>
        <div class="plan-list">
            <div v-for="(item,index) in list" :key="index" class="plan-list-item">
                <img class="avatar" :src="item.avatar" alt="姓名">
                <div class="title">{{item.title}}</div>
                <div class="datetime">{{item.datetime}}</div>
                <div class="progress">
                    <Progress :percent="item.progress.achievement" />
                    <Progress :percent="item.progress.call" status="active"/>
                    <Progress :percent="item.progress.service" status="wrong"/>
                </div>
                <div class="superviser">
                    <a href="javascript:;">{{item.superviser}}</a>
                </div>
                <div class="options">
                    <a @click="inspect" href="javascript:;">查看</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {_createPlanList} from '../datas/plans'

export default {
    name: 'cp-week-plan-list',
    props: {
        request:{
            type: Object,
            default: function(){
                return {}
            }
        }
    },
    data(){
        return {
            list: _createPlanList(10)
        }
    },
    methods: {
        inspect(){
            this.$router.push('/weekplan/detail')
        }
    }
}
</script>

<style lang="less">
    .cp-week-plan-list{
        .plan-list{
            &-item{
                display: flex;
                height: 100px;
                padding: 20px 0;
                border-bottom: solid 1px #e8eaec;
                .avatar{
                    width: 50px;
                    height: 50px;
                    border-radius: 50px;
                }
                .title{
                    margin-left: 20px;
                    width: 150px;
                    line-height: 50px;
                }
                .datetime{
                    width: 120px;
                    line-height: 50px;
                }
                .progress{
                    flex: 1;
                }
                .superviser{
                    width: 60px;
                    line-height: 50px;
                }
                .options{
                    width: 80px;
                    text-align: center;
                    line-height: 50px;
                }
            }
        }
    }
</style>

