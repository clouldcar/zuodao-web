<template>
  <cp-template active="老P">
    <cp-wheel-news></cp-wheel-news>
    <cp-tabs :list="tabs" :active="active"></cp-tabs>
  </cp-template>
</template>

<script>
// @ is an alias to /src
import {_lpTypes} from '../../datas/tabs'
export default {
  data(){
    return {
        active: 'info',
        tabs: _lpTypes
    }
  }
}
</script>

<style lang="less">
  
</style>


