<template>
    <div class="page-wx-login">
        <cp-login-con tab-name="微信登录">
            <div id="login_container" class="wx-login"></div>
        </cp-login-con>
        <cp-footer></cp-footer>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    mounted(){
        var obj = new WxLogin({
            self_redirect:false,
            id:"login_container", 
            appid: "wx0c2876cfb615aa3e", 
            scope: "snsapi_login", 
            redirect_uri: encodeURIComponent("http://api.zuodao.club/wechart/auth"),
            state: Math.ceil(Math.random()*1000),
            style: "white",
            href: ""
        });
    }
}
</script>

<style lang="less">
    .page-wx-login{
        .login-tab{
            .ivu-tabs-bar{
                margin-bottom: 0;
            }
        }
        .wx-login{
            width: 300px;
            height: auto;
            margin: 0 auto;
        }
    }
</style>
