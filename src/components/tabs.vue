<template>
    <div class="cp-tabs">
        <Tabs :value="active" @on-click="tabTap">
            <TabPane v-for="(tab,index) in list" :key="index" :label="tab.label" :name="tab.name">
                <cp-tab-list></cp-tab-list>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
export default {
    name: 'cp-tabs',
    props: {
        active: {
            type: String,
            default: ''
        },
        list: {
            type: Array,
            default: function(){
                return []
            }
        }
    },
    data(){
        return {
            dataList: []
        }
    },
    methods: {
        tabTap(name){
            console.log(name)
        }
    }
}
</script>

<style lang="less">
    .cp-tabs{
        margin-top: 10px;
    }
</style>
