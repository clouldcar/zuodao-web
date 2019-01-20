<template>
    <div class="cp-new-team">
        <h3 class="title">新团队</h3>
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in list" :key="index">
            <Card class="team-card">
                <div style="text-align:center">
                    <img class="img" :src="item.logo">
                    <p class="title">{{item.title}}</p>
                </div>
            </Card>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'cp-new-team',
    props: {
        list: {
            type: Array,
            default: function(){
                return []
            }
        }
    },
    data(){
        return {
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerGroup: 3,
                loop: true,
                loopFillGroupWithBlank: true,
                pagination: {
                el: '.swiper-pagination',
                clickable: true
                },
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
                }
            }
        }
    }
}
</script>

<style lang="less">
    @import '../styles/mixins.less';

    .cp-new-team{
        position: relative;
        width: 800px;
        margin: 0 auto;
        .title{
            margin: 10px 0;
        }
        .team-card{
          .ivu-card-head{
            display: none;
          }
          .img{
            width: 120px;
            height: 120px;
            border-radius: 120px;
          }
          .title{
            margin-top: 10px;
            .ellipsis();
            font-size: 14px;
          }
        }
    }
</style>
