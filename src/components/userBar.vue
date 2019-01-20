<template>
    <div class="cp-user-bar">
        <Badge :count="3">
            <a href="javascript:;" class="message" @click="navigate('/user/message')">
                <Icon type="ios-mail-outline" />
            </a>
        </Badge>
        <Dropdown class="drop-menu" @on-click="handleClick">
          <Avatar :src="userAvator"/>
          <Icon :size="18" type="md-arrow-dropdown"></Icon>
          <DropdownMenu slot="list">
            <DropdownItem name="usercenter"><Icon type="ios-contact-outline" />个人中心</DropdownItem>
            <DropdownItem name="declaration"><Icon type="ios-trophy-outline" />个人成就</DropdownItem>
            <DropdownItem name="weekplan"><Icon type="ios-calendar-outline" />周计划</DropdownItem>
            <DropdownItem name="logout"><Icon type="ios-exit-outline" />退出登录</DropdownItem>
          </DropdownMenu>
        </Dropdown>
    </div>
</template>

<script>
import baseMix from '../mixins/base'

export default {
    name: 'cp-user-bar',
    mixins: [baseMix],
    data(){
        return {
            userAvator: ''
        }
    },
    methods: {
        handleClick(name){
            switch(name){
                case 'usercenter':
                    this.$router.push('/user/index')
                    break;
                case 'declaration':
                    this.$router.push('/user/declaration/print')
                    break;
                case 'weekplan':
                    this.$router.push('/weekplan/list')
                    break;
                case 'logout':
                    this.$router.push('/member/login')
                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style lang="less">
    .cp-user-bar{
        .ivu-badge{
            line-height: 1;
        }
        .ivu-dropdown{
            margin-left: 20px;
        }
        .message .ivu-icon{
            font-size: 30px;
        }
        .drop-menu{
            text-align: left;
            .ivu-icon{
                font-size: 20px;
                margin-right: 5px;
            }
        }
    }
</style>
