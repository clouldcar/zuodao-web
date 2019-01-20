<template>
  <cp-template active="团队">
    <cp-team-banner slot="header_after"></cp-team-banner>
    <cp-tabs :list="tabs" :active="active"></cp-tabs>
  </cp-template>
</template>

<script>
// @ is an alias to /src
import {_teamTypes} from '../../datas/tabs'
export default {
  data(){
    return {
        active: 'info',
        tabs: _teamTypes
    }
  }
}
</script>

<style lang="less">
  
</style>