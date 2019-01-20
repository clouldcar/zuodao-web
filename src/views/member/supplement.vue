<template>
    <div class="page-supplement">
        <cp-login-con tab-name="完善资料">
            <i-form ref="editForm" :model="editForm" :rules="ruleCustom" :label-width="0">
                <FormItem label="" prop="name">
                    <Input type="text" v-model="editForm.name" placeholder="请输入真实姓名"></Input>
                </FormItem>
                <FormItem label="" prop="mobile">
                    <Input type="text" v-model="editForm.mobile" placeholder="请输入手机号"></Input>
                </FormItem>
                <FormItem label="" prop="vCode">
                    <Input type="text" v-model="editForm.vCode" placeholder="请输入验证码"></Input>
                </FormItem>
                <FormItem label="" prop="email">
                    <Input type="text" v-model="editForm.email" placeholder="请输入邮箱"></Input>
                </FormItem>
                <FormItem label="" prop="birthday">
                    <CalendarPicker type="date" size="large" placeholder="请选择出生日期" v-model="editForm.birthday"></CalendarPicker>
                </FormItem>
                <FormItem label="" prop="city">
                    <al-cascader level="1" v-model="editForm.city" placeholder="请选择所在城市"></al-cascader>
                </FormItem>
                <FormItem label="" prop="platform">
                    <Input type="text" v-model="editForm.platform" placeholder="请输入毕业平台"></Input>
                </FormItem>
                <FormItem>
                    <Button long type="primary" @click="update('editForm')">登录</Button>
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
            editForm: {
                name: '',
                mobile: '',
                vCode: '',
                email: '',
                birthday: '',
                city: []
            },
            ruleCustom: {
                name: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                mobile: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        update(name){
            this.$refs[name].validate((valid) => {
                if (valid) {
                    console.log(this.editForm)
                    this.$router.push('/')
                } else {
                    this.$Message.error('请仔细检查输入是否正确!');
                }
            })
        },
        register(){

        },
        forget(){

        }
    }
}
</script>

<style lang="less">
    .page-supplement{
        background: #f1f1f1;
    }
</style>
