<template>
    <div class="cp-team-banner">
        <div class="team-info">
            <div class="team-info-logo">
                <img class="img" src="http://cdn.qinmudi.cn/段奥娟.jpg" alt="队名">
                <Button type="primary" class="btn-join">申请加入</Button>
            </div>
            <div class="team-info-desc">
                <div class="title">
                    <a class="config" href="javascript:;">团队设置</a>
                    <h3>吴宣仪粉丝团</h3>
                </div>
                <div class="sub-content">
                    <span>管理员：<a href="javascript:;">李刚</a></span>
                    <span>创建时间：2019-01-20</span>
                </div>
                <div class="position">团队立场：我/我们承诺创建一个和谐、友爱、共赢的世界。我/我们承诺创建一个和谐、友爱、共赢的世界。我/我们承诺创建一个和谐、友爱、共赢的世界。</div>
                <div class="user-list">
                    <a :title="user.name" v-for="(user,index) in userList" :key="index" href="javascript:;">
                        <img class="img" :src="user.src" :alt="user.name">
                    </a>
                    <a href="javascript:;" class="btn-more"><Icon type="ios-more" /></a>
                    <span class="user-count">共15位成员</span>
                </div>
            </div>
        </div>
        <div class="team-flag">
            <img class="img" src="http://cdn.qinmudi.cn/team-flag.jpeg" alt="队旗">
        </div>
    </div>
</template>

<script>
import {_createTeamList} from  '../datas/team'
export default {
    name: 'cp-team-banner',
    data(){
        return {
            userList: _createTeamList(7)
        }
    }
}
</script>

<style lang="less">
    .cp-team-banner{
        display: flex;
        width: 1200px;
        margin: 10px auto 0 auto;
        background-color: #fff;
        .team{
            &-info{
                flex: 1;
                display: flex;
                &-logo{
                    position: relative;
                    top: 15px;
                    left: 15px;
                    width: 150px;
                    text-align: center;
                    .img{
                        width: 130px;
                        height: 130px;
                        border-radius: 130px;
                    }
                    .btn-join{
                        margin: 10px auto;
                    }
                }
                &-desc{
                    flex: 1;
                    padding: 20px 30px;
                    line-height: 25px;
                    font-size: 14px;
                    .sub-content span{
                        margin-right: 20px;
                    }
                    .title{
                        margin-bottom: 10px;
                        font-size: 20px;
                        .config{
                            margin: 5px;
                            font-size: 14px;
                            float: right;
                        }
                    }
                    .user-list{
                        margin-top: 10px;
                        .img{
                            width: 50px;
                            height: 50px;
                            border-radius: 50px;
                            margin: 0 10px;
                        }
                        .btn-more{
                            display: inline-block;
                            width: 50px;
                            height: 50px;
                            line-height: 50px;
                            border-radius: 50px;
                            border: solid 1px #ccc;
                            vertical-align: top;
                            text-align: center;
                            color: #ccc;
                            font-size: 30px;
                            .ivu-icon{
                                margin-bottom: 5px;
                            }
                        }
                        .user-count{
                            height: 50px;
                            line-height: 50px;
                            display: inline-block;
                            vertical-align: top;
                            margin-left: 20px;
                            color: #b8b8b8;
                        }
                    }
                }
            }
            &-flag{
                width: 340px;
                height: 218px;
                .img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
