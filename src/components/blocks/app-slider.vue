<template>
    <section class="slider">
        <div class="container">
            <div ref="swiper" class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 4</div>
                    <div class="swiper-slide">Slide 5</div>
                    <div class="swiper-slide">Slide 6</div>
                    <div class="swiper-slide">Slide 7</div>
                    <div class="swiper-slide">Slide 8</div>
                    <div class="swiper-slide">Slide 9</div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    </section>

</template>

<script lang="ts">
import {Component, Ref, Vue} from "vue-property-decorator";
import Swiper, { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

@Component({
    components: {
        Swiper,
    },
})
export default class AppSlider extends Vue {
    @Ref() readonly swiper!: HTMLDivElement

    mounted() {
        new Swiper(this.swiper, {
            modules: [Pagination, Navigation],
            slidesPerView: 3,
            loop: true,
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
.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
}
</style>