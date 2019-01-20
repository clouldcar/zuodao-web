<template>
    <div class="cp-layout">
        <div class="cp-layout-content">
            <slot></slot>
        </div>
        <div class="cp-layout-sider">
            <slot name="sider">
                
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cp-layout'
}
</script>

<style lang="less">
    .cp-layout{
        display: flex;
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
        &-content{
            flex: 1;
            margin-right: 10px;
        }
        &-sider{
            width: 330px;
        }
    }
</style>
