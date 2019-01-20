<template>
  <cp-template>
    <cp-tabs :list="tabs" :active="active"></cp-tabs>
  </cp-template>
</template>

<script>
// @ is an alias to /src
import {_userInfoTypes} from '../../datas/tabs'
export default {
  data(){
    return {
        active: 'declaration',
        tabs: _userInfoTypes
    }
  }
}
</script>

<style lang="less">
  
</style>


