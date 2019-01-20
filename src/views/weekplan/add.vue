<template>
  <cp-template>
    <div class="page-weekplan-add">
        <i-form ref="formDynamic" :model="formDynamic" :label-width="80">
            <Divider orientation="left">创建周计划</Divider>
            <FormItem label="周计划日期">
                <CalendarPicker type="date" size="large" placeholder="请选择开始日期" v-model="formDynamic.startTime"></CalendarPicker>
            </FormItem>
            <FormItem label="监视人">
                <i-select v-model="formDynamic.superviser" style="width:200px">
                    <i-option v-for="item in userList" :value="item" :key="item">{{ item }}</i-option>
                </i-select>
            </FormItem>
            <Divider orientation="left">计划详情</Divider>
            <div v-for="(matter,mIndex) in list" :key="mIndex" class="plan-item">
                <Tag type="border" class="week-tag" closable color="primary">{{matter.label}}</Tag>
                <FormItem
                        v-for="(item, index) in formDynamic.items"
                        v-if="item.status"
                        :key="index"
                        :label="`事项${index + 1}`"
                        :prop="'items.' + index + '.value'"
                        :rules="{required: true, message: `事项${index + 1}不能为空`, trigger: 'blur'}">
                    <Row>
                        <i-col span="18">
                            <Input type="text" v-model="item.value" placeholder="请输入你要完成的事项"></Input>
                        </i-col>
                        <i-col class="form-buttons" span="4" offset="1">
                            <Button @click="handleAdd" icon="md-add"></Button>
                            <Button @click="handleRemove(index)" icon="md-close"></Button>
                        </i-col>
                    </Row>
                </FormItem>
            </div>
            <FormItem class="form-bottom-btns">
                <Button type="primary" @click="handleSubmit('formDynamic')">保存</Button>
                <Button @click="handleReset('formDynamic')" style="margin-left: 8px">返回</Button>
            </FormItem>
        </i-form>
    </div>
  </cp-template>
</template>

<script>
import {_users} from '../../datas/data'
export default {
  data(){
    return {
        index: 1,
        formDynamic: {
            startTime: '',
            superviser: '',
            items: [
                {
                    value: '',
                    index: 1,
                    status: 1
                },
                {
                    value: '',
                    index: 1,
                    status: 1
                },
                {
                    value: '',
                    index: 1,
                    status: 1
                }
            ]
        },
        list: [{
            label: '事业'
        },{
            label: '感召'
        },{
            label: '社服'
        }],
        userList: _users
    }
  },
  methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        },
        handleAdd () {
            this.index++;
            this.formDynamic.items.push({
                value: '',
                index: this.index,
                status: 1
            });
        },
        handleRemove (index) {
            this.formDynamic.items[index].status = 0;
        }
    }
}
</script>

<style lang="less">
    .page-weekplan-add{
        .form-buttons{
            button{
                margin-right: 10px;
            }
        }
    }
</style>


