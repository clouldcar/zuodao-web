<template>
    <div class="cp-notice-list">
        <Tabs value="notice">
            <TabPane label="消息中心" name="notice">
                <div class="notice-list">
                    <div v-for="(item,index) in list" :key="index" class="notice-list-item">
                        <img class="img" :src="item.avatar" :alt="item.name">
                        <div class="content">
                            <a href="javascript:;">{{item.name}}</a>&nbsp;<a href="javascript:;">{{item.notice}}</a>
                            <div class="tag">
                                <Tag v-if="item.isRead" color="default">已读</Tag>
                                <Tag v-else color="primary">未读</Tag>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- pager -->
                <Page class="cp-pager" :total="40" size="small" show-elevator show-sizer />
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
import {_createNoticeList} from '../datas/notice'
export default {
    name: 'cp-notice-list',
    data(){
        return {
            list: _createNoticeList(10)
        }
    }
}
</script>

<style lang="less">
    .cp-notice-list{
        .notice-list{
            &-item{
                padding: 15px;
                display: flex;
                border-bottom: solid 1px #e8eaec;
                .img{
                    width: 35px;
                    height: 35px;
                    border-radius: 35px;
                }
                .content{
                    flex: 1;
                    margin: 10px;
                    .tag{
                        margin-top: 5px;
                    }
                }
            }
        }
    }
</style>
