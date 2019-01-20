<template>
    <div class="cp-user-list">
        <!-- user-item -->
        <div class="user-item" @click="navigate(`/${prefix}/detail`)" v-for="(user,index) in list" :key="index">
            <img class="img" :src="user.src" :alt="user.name">
            <div class="desc">
                <div class="name">{{user.name}}</div>
                <div class="conetnt">{{user.desc}}</div>
            </div>
        </div>
        <!-- pager -->
        <Page class="cp-pager" :total="40" size="small" show-elevator show-sizer />
    </div>
</template>

<script>
import {_createTutorList,_createCoachList} from '../datas/users'
import baseMix from '../mixins/base'

export default {
    name: 'cp-user-list',
    mixins: [baseMix],
    props: {
        prefix: {
            type: String,
            default: ''
        },
        request: {
            type: Object,
            default: function(){
                return {}
            }
        }
    },
    data(){
        return {
            list: (this.prefix==='tutor')?_createTutorList(10):_createCoachList(10)
        }
    }
}
</script>

<style lang="less">
    @import '../styles/mixins.less';

    .cp-user-list{
        text-align: center;
        .user-item{
            display: flex;
            height: 180px;
            padding: 30px 20px;
            text-align: left;
            border-bottom: solid 1px #dcdee2;
            cursor: pointer;
            .img{
                width: 120px;
                height: 120px;
                border-radius: 120px;
            }
            .desc{
                flex: 1;
                margin: 10px 20px;
                .name{
                    font-size: 16px;
                    font-weight: bolder;
                    margin-bottom: 10px;
                }
                .conetnt{
                    font-size: 14px;
                    color: #333;
                    line-height: 1.5;
                    .ellipsis(3);
                }
            }
        }
    }
</style>
