<template>
    <div class="cp-wheel-news">
        <div class="swiper-imgs">
            <swiper class="swiper-left" :options="swiperOptionLeft" ref="swiperLeft">
                <swiper-slide v-for="(swiper,index) in swiperList" :key="index" class="slide-item">
                    <img class="img" @click="navigate('/lp/detail')" :src="swiper.src" :alt="swiper.title">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="swiper-content">
            <swiper class="swiper-right" :options="swiperOptionRight" ref="swiperRight">
                <swiper-slide v-for="(swiper,index) in swiperList" :key="index" class="slide-item">
                    <div @click="navigate('/lp/detail')">
                        <div class="news-title">{{swiper.title}}</div>
                        <div class="news-desc">{{swiper.desc}}</div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import {_createSwiperList} from '../datas/swipers'
import baseMix from '../mixins/base'

export default {
    name: 'cp-wheel-news',
    mixins: [baseMix],
    data(){
        return {
            swiperOptionLeft: {
                spaceBetween: 10,
                autoplay: true,
                loop: true,
                loopedSlides: 5,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            },
            swiperOptionRight: {
                spaceBetween: 10,
                loop: true,
                loopedSlides: 5
            },
            swiperList: _createSwiperList(3)
        }
    },
    mounted() {
      this.$nextTick(() => {
        const swiperLeft = this.$refs.swiperLeft.swiper
        const swiperRight = this.$refs.swiperRight.swiper
        swiperLeft.controller.control = swiperRight
        swiperRight.controller.control = swiperLeft
      })
    }
}
</script>

<style lang="less">
    @import '../styles/mixins.less';

    .cp-wheel-news{
        display: flex;
        overflow: hidden;
        .swiper-imgs{
            width: 280px;
            height: 180px;
            cursor: pointer;
            .slide-item{
                height: 180px;
                .img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .swiper-content{
            flex: 1;
            width: 480px;
            margin-left: 20px;
            overflow: hidden;
            text-align:justify;
            text-justify:inter-ideograph;
            .swiper-right{
                width: 100%;
                cursor: pointer;
                .news-title{
                    font-size: 20px;
                    font-weight: bolder;
                    margin: 10px 0;
                }
                .news-desc{
                    line-height: 1.5;
                    .ellipsis(6);
                }
            }
        }
    }
</style>
