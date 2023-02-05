<template>
    <section class="woof">
        <div class="container">
            <div ref="swiper" class="swiper">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide" v-for="(woof, index) in woofs" :key="index">
                        <AppWoof :woof-url="woof"/>
                    </li>
                </ul>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from "vue-property-decorator";
import Swiper, { Pagination, Navigation } from 'swiper'
import AppWoof from "@components/blocks/app-woof.vue";
import 'swiper/css'
import 'swiper/css/pagination'
import { TWoof } from "../../models";

@Component({
    components: {
        Swiper,
        AppWoof
    },
})
export default class AppSlider extends Vue {
    @Prop() readonly woofs!: TWoof[];
    @Ref() readonly swiper!: HTMLDivElement;

    mounted() {
        new Swiper(this.swiper, {
            modules: [Pagination, Navigation],
            spaceBetween: 37,
            slidesPerView: 3,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    }
}
</script>

<style scoped lang="scss">
section {
    padding-top: 20px;
}
.swiper {
    padding-bottom: 28px;
    &-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 294px;
    }
}
</style>