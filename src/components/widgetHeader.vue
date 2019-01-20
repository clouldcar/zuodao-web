<template>
    <div class="cp-widget-header">
        <div class="widget-crumb">
            <Breadcrumb>
                <BreadcrumbItem to="/">首页</BreadcrumbItem>
                <BreadcrumbItem to="/user/week_plan">周计划</BreadcrumbItem>
                <BreadcrumbItem>列表</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="widget-tab">
            
        </div>
        <div class="widget-btn-group">
            <ButtonGroup>
                <Button type="primary" to="/weekplan/add">
                    创建周计划
                </Button>
            </ButtonGroup>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cp-widget-header',
    props: {
        crumbs: {
            type: Array,
            default: function(){
                return []
            }
        },
        tabs: {
            type: Array,
            default: function(){
                return []
            }
        },
        btnGroup: {
            type: Array,
            default: function(){
                return []
            }
        }
    }
}
</script>

<style lang="less">
    .cp-widget-header{
        display: flex;
        .widget{
            &-tab{
                flex: 1;
            }
        }
    }
</style>
