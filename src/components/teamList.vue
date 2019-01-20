<template>
    <div class="cp-team-list">
        <Card v-for="(item,index) in list" :key="index" class="team-item">
            <img class="img" :src="item.src">
            <div class="team-desc">
                <div class="team-name">{{item.name}}</div>
                <div class="team-organize">机构：{{item.organize}}</div>
                <div class="team-count">团员：{{item.count}}人</div>
                <div class="team-time">创建时间：{{item.createTime}}</div>
                <div class="team-buttons">
                    <Button to="/team/detail" type="primary">查看详情</Button>
                </div>
            </div>
        </Card>
        <!-- pager -->
        <Page class="cp-pager" :total="40" size="small" show-elevator show-sizer />
    </div>
</template>

<script>
import {_createTeamList} from '../datas/team'

export default {
    name: 'cp-team-list',
    data(){
        return {
            list: _createTeamList(12)
        }
    }
}
</script>

<style lang="less">
    .cp-team-list{
        .team-item{
            display: inline-block;
            width: 30.3%;
            margin: 0 1% 30px 1%;
            .ivu-card-body{
                padding: 0;
            }
            .img{
                width: 100%;
                height: 135px;
                overflow: hidden;
                background-size: contain;
            }
            .team{
                &-name{
                    font-size: 20px;
                    font-weight: bolder;
                    margin-bottom: 5px;
                }
                &-desc{
                    padding: 5px 10px;
                }
                &-buttons{
                    margin-bottom: 5px;
                    text-align: right;
                }
            }
        }
    }
</style>
