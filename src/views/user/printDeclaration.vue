<template>
  <cp-template>
    <div class="header-button">
      <Button @click="updateDeclaration" type="primary">修改成就宣言</Button>
    </div>
    <Divider>成就宣言</Divider>
    <CellGroup>
      <Cell title="姓名：李刚" />
      <Cell title="性别：男" />
      <Cell title="出生日期：1985-05-25" />
      <Cell title="移动电话：15311887789" />
      <Cell title="工作单位：阿里巴巴" />
      <Cell title="住址：北京市大兴区黄村镇海悦公馆41号楼4单元602" />
      <Cell title="微信：webn716" />
    </CellGroup>
    <Divider />
    <CellGroup>
      <Cell title="一、团队立场：我/我们承诺创造一个和谐、友爱、共赢的世界！" />
      <Cell title="二、个人约誓：我是一个自信、勇敢、负责任的男人！" />
      <Cell title="三、个人立场：我承诺创造和谐、友爱、共赢的世界！" />
      <Cell title="四、个人成就宣告：（数量不限）" />
      <Row class="my-declaration">
        <i-col span="22" offset="1">（1）事业</i-col>
        <i-col span="22" offset="2">目的：提高时间管理能力和项目管理能力</i-col>
        <i-col span="22" offset="2">行动：</i-col>
        <i-col span="22" offset="2">（1）把现有的两项工作（对外合作、推荐标签）收尾，运维支持做部分系统解耦（redis、日志存储），其它没有做的事，整理待办事项列表，4月30号前完成</i-col>
        <i-col span="22" offset="2">（2）每天制定工作计划，锻炼时间管理能力</i-col>
        <i-col span="22" offset="2">结果：不常加班，快乐工作，强化目标，提高效率，为晋升做好准备。</i-col>

        <i-col span="22" offset="1">（2）家庭</i-col>
        <i-col span="22" offset="2">目的：提高时间管理能力和项目管理能力</i-col>
        <i-col span="22" offset="2">行动：</i-col>
        <i-col span="22" offset="2">（1）把现有的两项工作（对外合作、推荐标签）收尾，运维支持做部分系统解耦（redis、日志存储），其它没有做的事，整理待办事项列表，4月30号前完成</i-col>
        <i-col span="22" offset="2">（2）每天制定工作计划，锻炼时间管理能力</i-col>
        <i-col span="22" offset="2">结果：不常加班，快乐工作，强化目标，提高效率，为晋升做好准备。</i-col>

        <i-col span="22" offset="1">（3）健康</i-col>
        <i-col span="22" offset="2">目的：提高时间管理能力和项目管理能力</i-col>
        <i-col span="22" offset="2">行动：</i-col>
        <i-col span="22" offset="2">（1）把现有的两项工作（对外合作、推荐标签）收尾，运维支持做部分系统解耦（redis、日志存储），其它没有做的事，整理待办事项列表，4月30号前完成</i-col>
        <i-col span="22" offset="2">（2）每天制定工作计划，锻炼时间管理能力</i-col>
        <i-col span="22" offset="2">结果：不常加班，快乐工作，强化目标，提高效率，为晋升做好准备。</i-col>
      </Row>
      <Cell title="五、我承诺在实践阶段通过自己的学习、改变和成长去影响别人，感召到5个人来到这个学习旅程，以累计最高正分。" />
      <Cell title="六、我承诺在实践阶段自发性地投入社区服务  3  次，尽自己的力量回馈社会。于开始前先决定对象。" />
    </CellGroup>
  </cp-template>
</template>

<script>
// @ is an alias to /src
export default {
  data(){
    return {
        
    }
  },
  methods: {
    updateDeclaration(){
      this.$router.push('/user/declaration/add')
    }
  }
}
</script>

<style lang="less">
  .header-button{
    text-align: right;
  }
  .my-declaration{
    .ivu-col{
      // height: 30px;
      line-height: 30px;
    }
  }
</style>


