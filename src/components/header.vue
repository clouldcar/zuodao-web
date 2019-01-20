<template>
    <div class="cp-header">
        <Header>
            <Menu mode="horizontal" theme="light" :active-name="active" @on-select="onMenuSelect">
            <div class="cp-header-logo">做到</div>
            <div class="cp-header-nav">
                <MenuItem v-for="(menu,index) in menus" :key="index" :name="menu.name" :to="menu.url">
                    {{menu.name}}
                </MenuItem>
            </div>
            <cp-user-bar></cp-user-bar>
            </Menu>
        </Header>
    </div>
</template>

<script>
export default {
    name: 'cp-header',
    props: {
        active: {
            type: String,
            default: ''
        }
    },
    data(){
        return {
            menus: [{
                name: '首页',
                url: '/'
            },{
                name: '团队',
                url: '/team/index'
            },{
                name: '导师',
                url: '/tutor/list'
            },{
                name: '教练',
                url: '/coach/list'
            },{
                name: '老P',
                url: '/lp/index'
            }]
        }
    },
    methods: {
        onMenuSelect(name){
            
        }
    }
}
</script>

<style lang="less">
    .cp-header{
        background-color: #fff;
        border-bottom: solid 1px #dcdee2;
        box-shadow: 0 1px 2px rgba(26, 26, 26, 0.1);
        .ivu-layout-header{
            width: 1200px;
            margin: 0 auto;
        }
        .ivu{
            &-menu{
                display: flex;
                &::after{
                    display: none;
                }
            }
        }
        &-logo{
            font-size: 30px;
            color: #0084FF;
            margin-right: 30px;
        }
        &-nav{
            flex: 1;
        }
    }
</style>
