<template>
  <cp-template active="团队">
    <Tabs value="teamlist">
        <TabPane label="团队列表" name="teamlist">
          <cp-team-list></cp-team-list>
        </TabPane>
    </Tabs>
  </cp-template>
</template>

<script>
// @ is an alias to /src
export default {
  data(){
    return {
        
    }
  }
}
</script>

<style lang="less">
  
</style>


