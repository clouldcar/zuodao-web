<template>
  <cp-template active="首页">
    <cp-carousel slot="header_after"></cp-carousel>
    <!-- 新闻 -->
    <div class="flex-content">
      <div class="flex-item pd15">
        <Card class="card-news">
          <p slot="title">最新</p>
          <a href="#" slot="extra" @click.prevent="changeLimit">
              <Icon type="ios-loop-strong"></Icon>
              查看更多
          </a>
          <cp-link-list :list="demoList"></cp-link-list>
        </Card>
      </div>
      <div class="flex-item pd15">
        <Card class="card-hot">
          <p slot="title">最热</p>
          <a href="#" slot="extra" @click.prevent="changeLimit">
              <Icon type="ios-loop-strong"></Icon>
              查看更多
          </a>
          <cp-link-list :list="demoList"></cp-link-list>
        </Card>
      </div>
    </div>
    <!-- 新团队 -->
    <cp-new-team :list="teamList"></cp-new-team>
    <!-- 导师和教练 -->
    <div class="flex-content">
      <div class="flex-item">
        <cp-image-text title="推荐导师" :list="tutorList"></cp-image-text>
      </div>
      <div class="flex-item">
        <cp-image-text title="推荐教练" :list="coachList"></cp-image-text>
      </div>
    </div>
  </cp-template>
</template>

<script>
// @ is an alias to /src
import {_createRandomList,_createTeamList} from '../datas/news'
import {_createTutorList, _createCoachList} from '../datas/users'
export default {
  data(){
    return {
      demoList: _createRandomList(5),
      teamList: _createTeamList(6),
      tutorList: _createTutorList(3),
      coachList: _createCoachList(3)
    }
  }
}
</script>

<style lang="less">
  
</style>


