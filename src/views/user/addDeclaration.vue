<template>
  <cp-template>
    <Tabs value="declaration">
        <TabPane label="成就宣言" name="declaration">
          <Divider orientation="left">填写基础信息</Divider>
          <i-form :model="form" :label-width="120">
            <FormItem label="姓名">
                <Input v-model="form.name" placeholder="请输入你的真实姓名"></Input>
            </FormItem>
            <FormItem label="性别">
                <RadioGroup v-model="form.sex">
                    <Radio label="male">男</Radio>
                    <Radio label="female">女</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="电话">
                <Input v-model="form.name" placeholder="请输入你的电话号码"></Input>
            </FormItem>
            <FormItem label="出生日期">
                <CalendarPicker type="date" size="large" placeholder="请选择出生日期" v-model="form.date"></CalendarPicker>
            </FormItem>
            <FormItem label="工作单位">
                <Input v-model="form.name" placeholder="请输入你的工作单位"></Input>
            </FormItem>
            <FormItem label="所在城市">
                <al-cascader level="1" v-model="res_s" placeholder="请选择所在城市"></al-cascader>
            </FormItem>
            <FormItem label="微信号">
                <Input v-model="form.name" placeholder="请输入你的微信号"></Input>
            </FormItem>
            <FormItem label="上传一寸相片">
                
            </FormItem>
            <Divider orientation="left">填写成就宣言</Divider>
            <FormItem label="团队立场">
                我/我们承诺创造一个<Input v-model="form.name" style="width: auto"></Input>的世界
            </FormItem>
            <FormItem label="立人誓约">
                我是一个<Input v-model="form.name" style="width: auto"></Input>的男人/女人
            </FormItem>
            <FormItem label="个人立场">
                我承诺创造一个<Input v-model="form.name" style="width: auto"></Input>的世界
            </FormItem>
            <Divider orientation="left">个人成就</Divider>
            <FormItem label="权重">
                <Slider v-model="value1"></Slider>
            </FormItem>
            <FormItem label="方向">
              <CheckboxGroup v-model="form.checkbox">
                  <Checkbox label="事业"></Checkbox>
                  <Checkbox label="家庭"></Checkbox>
                  <Checkbox label="健康"></Checkbox>
                  <Checkbox label="人际关系"></Checkbox>
                  <Checkbox label="经济"></Checkbox>
              </CheckboxGroup>
            </FormItem>
            <!-- 列表项 -->
            <Tag class="form-tag" type="border" closable color="primary">1、事业</Tag>
            <FormItem label="目的">
                <Input v-model="form.name" placeholder="请输入你的目的"></Input>
            </FormItem>
            <FormItem label="行动">
                <Input v-model="form.name" placeholder="请输入你的行动"></Input>
            </FormItem>
            <FormItem label="成果">
                <Input v-model="form.name" placeholder="请输入你的成果"></Input>
            </FormItem>
            <Tag class="form-tag" type="border" closable color="primary">2、家庭</Tag>
            <FormItem label="目的">
                <Input v-model="form.name" placeholder="请输入你的目的"></Input>
            </FormItem>
            <FormItem label="行动">
                <Input v-model="form.name" placeholder="请输入你的行动"></Input>
            </FormItem>
            <FormItem label="成果">
                <Input v-model="form.name" placeholder="请输入你的成果"></Input>
            </FormItem>
            <Tag class="form-tag" type="border" closable color="primary">3、健康</Tag>
            <FormItem label="目的">
                <Input v-model="form.name" placeholder="请输入你的目的"></Input>
            </FormItem>
            <FormItem label="行动">
                <Input v-model="form.name" placeholder="请输入你的行动"></Input>
            </FormItem>
            <FormItem label="成果">
                <Input v-model="form.name" placeholder="请输入你的成果"></Input>
            </FormItem>
            <!-- 列表项 -->
            <Divider orientation="left">社会服务</Divider>
            <FormItem label="权重">
                <Slider v-model="value2"></Slider>
            </FormItem>
            <FormItem label="">
                我承诺在实践阶段自发性地投入社区服务<InputNumber :max="100" :min="1" v-model="value4"></InputNumber>次，尽自己的力量回馈社会。于开始前先决定对象。
            </FormItem>
            <Divider orientation="left">感召</Divider>
            <FormItem label="权重">
                <Slider v-model="value3"></Slider>
            </FormItem>
            <FormItem label="">
                我承诺在实践阶段通过自己的学习、改变和成长去影响别人，感召到<InputNumber :max="100" :min="1" v-model="value5"></InputNumber>个人来到这个学习旅程，以累计最高正分。
            </FormItem>
            <FormItem class="form-bottom-btns">
                <Button type="primary" @click="handleSubmit('formDynamic')">保存</Button>
                <Button @click="handleReset('formDynamic')" style="margin-left: 8px">返回</Button>
            </FormItem>
          </i-form>
        </TabPane>
    </Tabs>
  </cp-template>
</template>

<script>
// @ is an alias to /src
export default {
  data(){
    return {
        form: {

        },
        res_s: [],
        value1: 0,
        value2: 0,
        value3: 0,
        value4: 0,
        value5: 0
    }
  },
  methods:{
      handleSubmit(){

      },
      handleReset(){
          
      }
  }
}
</script>

<style lang="less">
  .form-tag{
    margin: 0 0 15px 80px;
  }
</style>


