<template>
    <div class="page-home">
    <layout>
      <cp-header :active="active"></cp-header>
      <slot name="header_after"></slot>
      <cp-layout>
        <Card class="page-content">
            <slot></slot>
        </Card>
        <cp-sider slot="sider"></cp-sider>
      </cp-layout>
      <cp-footer></cp-footer>
    </layout>
  </div>
</template>

<script>
export default {
    name: 'cp-template',
    props: {
        active: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="less">
    @import '../styles/mixins.less';

    .page-home{
        .cp-layout{
            margin-top: 10px;
        }
        .page-content{
        background-color: #fff;
        .flex-content{
            display: flex;
            .flex-item{
            flex: 1;
            }
        }
        }
    }
</style>
