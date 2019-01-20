<template>
    <div class="cp-carousel">
        <Carousel class="carousel" autoplay v-model="value" loop>
            <CarouselItem v-for="(item,index) in list" :key="index">
                <div class="zd-carousel">
                    <a :href="item.href"><img class="img" :src="item.src" :alt="item.title"></a>
                </div>
            </CarouselItem>
        </Carousel>
    </div>
</template>

<script>
import baseMix from '../mixins/base'

export default {
    name: 'cp-carousel',
    mixins: [baseMix],
    data(){
        return {
            value: 0,
            list: [{
                title: '奇妙的宇宙',
                href: '/lp/index',
                src: 'http://cdn.qinmudi.cn/banner1.jpg'
            },{
                title: '奇妙的宇宙',
                href: '/lp/index',
                src: 'http://cdn.qinmudi.cn/banner2.jpg'
            },{
                title: '奇妙的宇宙',
                href: '/lp/index',
                src: 'http://cdn.qinmudi.cn/banner3.png'
            },{
                title: '奇妙的宇宙',
                href: '/lp/index',
                src: 'http://cdn.qinmudi.cn/banner4.jpg'
            }]
        }
    }
}
</script>

<style lang="less">
    .cp-carousel{
        width: 1200px;
        margin: 0 auto;
        margin-top: 10px;
        .carousel{
            height: 300px;
            background-color: #358ccc;
            overflow: hidden;
            .zd-carousel{
                position: relative;
                height: 300px;
                line-height: 300px;
                font-size: 30px;
                .img{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate3d(-50%,-50%,0);
                    width: 100%;
                    background-size: contain;
                }
            }
        }
    }
</style>
