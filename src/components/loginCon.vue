<template>
    <div class="cp-login-con">
        <cp-logo></cp-logo>
        <Tabs class="login-tab" value="tab">
            <TabPane :label="tabName" name="tab">
                <slot></slot>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
export default {
    name: 'cp-login-con',
    props: {
        tabName: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            
        }
    }
}
</script>

<style lang="less">
    .cp-login-con{
        position: relative;
        top: 80px;
        margin: 0 auto;
        margin-bottom: 80px;
        width: 530px;
        height: auto;
        padding: 60px 50px 20px 50px;
        background: #fff;
        overflow: hidden;
        .ivu-input{
            padding: 20px 10px;
        }
        .login-tab{
            .ivu-tabs-bar{
                margin: 20px 0 40px 0;
            }
        }
        button{
            font-size: 18px;
            padding: 15px 0;
        }
    }
</style>
