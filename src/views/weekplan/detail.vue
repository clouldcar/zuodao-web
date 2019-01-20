<template>
  <cp-template>
    <Divider orientation="left">{{showDate}} 早宣晚总</Divider>
    <i-form ref="form" :model="form" :label-width="80">
      <FormItem label="被检视人">
        吴宣仪
      </FormItem>
      <FormItem label="检视日期">
        <CalendarPicker type="date" size="large" placeholder="请选择开始日期" v-model="form.datetime" format="yyyy年MM月dd日" @on-change="handleChange"></CalendarPicker>
      </FormItem>
      <FormItem label="检视进度">
        <Progress :percent="33" status="active" />
      </FormItem>
      <FormItem label="检视情况">
        <div class="superviser-list">
          <div v-for="(item,index) in 3" :key="index" class="superviser-list-item">
            <img class="avatar" :src="getAvatar(index)" alt="检视人">
            <Tag v-if="index==0" class="tag" color="error">已超时</Tag>
            <Tag v-if="index==1" class="tag" color="success">已检视</Tag>
            <Tag v-if="index==2" class="tag" color="default">未检视</Tag>
          </div>
        </div>
      </FormItem>
      <div v-for="(matter,mIndex) in list" :key="mIndex" class="plan-item">
        <Tag type="border" class="week-tag" closable color="primary">{{matter.label}}</Tag>
        <FormItem
                v-for="(item, index) in form.items"
                v-if="item.status"
                :key="index"
                :label="`事项${index + 1}`"
                :prop="'items.' + index + '.value'"
                :rules="{required: true, message: `事项${index + 1}不能为空`, trigger: 'blur'}">
            <Row>
              <i-col span="18">
                <div class="title">定一个小目标，这个月先赚它一个亿。</div>
                <Progress v-if="index%3==0" :percent="form.items[index]['status']" status="active" />
                <Progress v-if="index%3==1" :percent="form.items[index]['status']" />
                <Progress v-if="index%3==2" :percent="form.items[index]['status']" status="wrong" />
                <Slider v-model="form.items[index]['status']"></Slider>
              </i-col>
              <i-col class="form-buttons" span="4" offset="1">
                  <i-switch size="large">
                    <span slot="open">检视</span>
                    <span slot="close">未检视</span>
                  </i-switch>
              </i-col>
            </Row>
          </FormItem>
        </div>
        <FormItem class="form-bottom-btns">
          <Button type="primary" @click="handleSubmit('formDynamic')">保存</Button>
          <Button @click="handleReset('formDynamic')" style="margin-left: 8px">返回</Button>
        </FormItem>
    </i-form>
  </cp-template>
</template>

<script>
import baseMix from '../../mixins/base'
import {_users} from '../../datas/data'

export default {
  mixins: [baseMix],
  data(){
    return {
      showDate: '2019-01-19',
      index: 1,
      form: {
        datetime: '',
        startTime: '',
        superviser: '',
        items: [
            {
                value: '',
                index: 1,
                status: 10
            },
            {
                value: '',
                index: 1,
                status: 20
            },
            {
                value: '',
                index: 1,
                status: 30
            }
        ]
      },
      list: [{
          label: '事业'
      },{
          label: '感召'
      },{
          label: '社服'
      }]
    }
  },
  methods: {
    handleChange(){
      this.showDate = this.dateFormat(this.form.datetime)
    },
    getAvatar(num){
      let name = _users[num]
      return `http://cdn.qinmudi.cn/${name}.jpg`
    }
  }
}
</script>

<style lang="less">
  .superviser-list{
    display: flex;
    &-item{
      margin-right: 10px;
    }
    .avatar{
      width: 50px;
      height: 50px;
      border-radius: 50px;
      vertical-align: middle;
      padding: 10px;
    }
  }
</style>


