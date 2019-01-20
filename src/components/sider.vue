<template>
    <div class="cp-sider">
        <!-- 个人成就 -->
        <Card>
            <p slot="title">个人成就</p>
            <div class="card-content">
                <Steps :current="0" direction="vertical">
                    <Step title="个人成就 完成40%" content="事业 家庭 健康"></Step>
                    <Step title="社服 完成40%" content="感召到5个人来到这个学习旅程。"></Step>
                    <Step title="感召 完成20%" content="投入社区服务3次。"></Step>
                </Steps>
            </div>
        </Card>
        <!-- 按钮组 -->
        <Card>
            <div class="sider-buttons">
                <Button type="primary">信息发布</Button>
                <Button>占位</Button>
            </div>
        </Card>
        <!-- 新闻列表 -->
        <Card class="cp-news-card">
            <p slot="title">
                活动
            </p>
            <a href="#" slot="extra" @click.prevent="changeLimit">
                <Icon type="ios-loop-strong"></Icon>
                查看更多
            </a>
            <cp-link-list :list="activeList"></cp-link-list>
        </Card>
        <!-- 课程资料 -->
        <Card class="cp-news-card">
            <p slot="title">
                课程资料
            </p>
            <a href="#" slot="extra" @click.prevent="changeLimit">
                <Icon type="ios-loop-strong"></Icon>
                查看更多
            </a>
            <cp-link-list :list="activeList"></cp-link-list>
        </Card>
        <!-- 本周之星 -->
        <Card class="cp-news-card">
            <p slot="title">
                本周之星
            </p>
            <a href="#" slot="extra" @click.prevent="changeLimit">
                <Icon type="ios-loop-strong"></Icon>
                查看更多
            </a>
            <ul class="news-list">
                <li class="user-item" v-for="(item,index) in starList" :key="index">
                    <img class="avatar" :src="item.avatar" :alt="item.title">
                    <a :href="item.href" target="_blank">{{ item.title }}</a>
                    <span>{{item.team}}</span>
                </li>
            </ul>
        </Card>
    </div>
</template>

<script>
import {_createStarList,_createRandomList} from '../datas/news'
export default {
    name: 'cp-sider',
    data(){
        return {
            activeList: _createRandomList(10),
            starList: _createStarList(5)
        }
    }
}
</script>

<style lang="less">
    @import '../styles/mixins.less';

    .cp-sider{
        text-align: left;
        .ivu-card{
            margin-bottom: 10px;
        }
        .sider-buttons{
            text-align: center;
            button{
                margin: 0 5px;
            }
        }
    }
    .cp-news-card{
        .news-list{
            li{
                list-style: none;
                line-height: 1.5;
                &.user-item{
                    line-height: 2.5;
                    height: 50px;
                    display: flex;
                    a{
                        margin-right: 20px;
                        .ellipsis();
                        height: 35px;
                        line-height: 35px;
                    }
                }
                span{
                    float: right;
                    font-size: 12px;
                    color: #999;
                }
                .avatar{
                    margin-right: 20px;
                    width: 35px;
                    height: 35px;
                    border-radius: 35px;
                    vertical-align: middle;
                }
            }
        }
    }
</style>
