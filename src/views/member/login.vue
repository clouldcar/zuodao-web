<template>
    <div class="page-login">
        <cp-login-con tab-name="帐号登录">
            <i-form ref="loginForm" :model="loginForm" :rules="ruleCustom" :label-width="0">
                <FormItem label="" prop="passport">
                    <Input type="text" v-model="loginForm.passport" placeholder="请输入手机号或邮箱"></Input>
                </FormItem>
                <FormItem label="" prop="password">
                    <Input type="password" v-model="loginForm.password" placeholder="请输入密码"></Input>
                </FormItem>
                <FormItem class="login-bar" label="">
                    <div class="register">
                        <a @click="register" href="javascript:;">用户注册</a>
                    </div>
                    <a @click="forget" href="javascript:;">忘记密码？</a>
                </FormItem>
                <FormItem>
                    <Button long type="primary" @click="login('loginForm')">登录</Button>
                </FormItem>
            </i-form>
        </cp-login-con>
        <cp-footer></cp-footer>
    </div>
</template>

<script>
export default {
    data(){
        return {
            loginForm: {
                passport: '',
                password: ''
            },
            ruleCustom: {
                passport: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        login(name){
            this.$refs[name].validate((valid) => {
                if (valid) {
                    console.log(this.loginForm)
                    this.$router.push('/member/supplement')
                } else {
                    this.$Message.error('请仔细检查输入是否正确!');
                }
            })
        },
        register(){
            this.$router.push('/member/wx_login')
        },
        forget(){

        }
    }
}
</script>

<style lang="less">
    .page-login{
        background: #f1f1f1;
        .login-bar{
            >.ivu-form-item-content{
                display: flex;
                .register{
                    flex: 1;
                }
            }
        }
    }
</style>
