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
                <div class="swiper-button-prev">
                    <svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6727 29.0746C15.5692 29.1778 15.4463 29.2596 15.311 29.3154C15.1756 29.3713 15.0305 29.4 14.884 29.4C14.7375 29.4 14.5924 29.3713 14.457 29.3154C14.3217 29.2596 14.1988 29.1778 14.0953 29.0746L0.727281 15.7839C0.623537 15.681 0.54123 15.5588 0.48507 15.4242C0.42891 15.2896 0.400002 15.1454 0.400002 14.9997C0.400002 14.854 0.42891 14.7098 0.48507 14.5752C0.54123 14.4407 0.623537 14.3184 0.727281 14.2156L14.0953 0.924806C14.3045 0.716835 14.5882 0.6 14.884 0.6C15.1798 0.6 15.4635 0.716835 15.6727 0.924807C15.8819 1.13278 15.9994 1.41485 15.9994 1.70896C15.9994 2.00307 15.8819 2.28514 15.6727 2.49311L3.09119 14.9997L15.6727 27.5063C15.7765 27.6092 15.8588 27.7314 15.9149 27.866C15.9711 28.0005 16 28.1448 16 28.2905C16 28.4361 15.9711 28.5804 15.9149 28.7149C15.8588 28.8495 15.7765 28.9717 15.6727 29.0746Z" fill="white"/>
                    </svg>
                </div>
                <div class="swiper-button-next">
                    <svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6727 29.0746C15.5692 29.1778 15.4463 29.2596 15.311 29.3154C15.1756 29.3713 15.0305 29.4 14.884 29.4C14.7375 29.4 14.5924 29.3713 14.457 29.3154C14.3217 29.2596 14.1988 29.1778 14.0953 29.0746L0.727281 15.7839C0.623537 15.681 0.54123 15.5588 0.48507 15.4242C0.42891 15.2896 0.400002 15.1454 0.400002 14.9997C0.400002 14.854 0.42891 14.7098 0.48507 14.5752C0.54123 14.4407 0.623537 14.3184 0.727281 14.2156L14.0953 0.924806C14.3045 0.716835 14.5882 0.6 14.884 0.6C15.1798 0.6 15.4635 0.716835 15.6727 0.924807C15.8819 1.13278 15.9994 1.41485 15.9994 1.70896C15.9994 2.00307 15.8819 2.28514 15.6727 2.49311L3.09119 14.9997L15.6727 27.5063C15.7765 27.6092 15.8588 27.7314 15.9149 27.866C15.9711 28.0005 16 28.1448 16 28.2905C16 28.4361 15.9711 28.5804 15.9149 28.7149C15.8588 28.8495 15.7765 28.9717 15.6727 29.0746Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue, Watch } from "vue-property-decorator";
import Swiper, { Pagination, Navigation } from 'swiper'
import AppWoof from "@components/blocks/app-woof.vue";
import 'swiper/css'
import 'swiper/css/pagination'
import { TWoof } from "../../models";

@Component({
    components: {
        Swiper,
        AppWoof
    }
})
export default class AppSlider extends Vue {
    @Prop() readonly woofs!: TWoof[];
    @Ref() readonly swiper!: HTMLDivElement;
    activeIndex = 0;
    mySwiper: null | Swiper = null;

    get slidesOnScreen() {
        return this.mySwiper?.params.slidesPerView;
    }

    mounted() {
        this.mySwiper = new Swiper(this.swiper, {
            modules: [Pagination, Navigation],
            spaceBetween: 30,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                744: { slidesPerView: 3 }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                slideChange: (swiper) => {
                    this.activeIndex = swiper.realIndex
                },
            },
        })
    }

    @Watch("slidesOnScreen")
    onStockChanged(next: number) {
        this.$emit('slidesCountChanged', next);
    }
}
</script>

<style scoped lang="scss">
section {
    padding-top: 20px;
}
.swiper {
    position: relative;
    padding-bottom: 28px;
    &-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 294px;
    }

    &-button-prev {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        top: 40%;
        left: 1%;
        z-index: 3;

        &> svg {
            margin-right: 10%;
        }
    }
    &-button-next {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        top: 40%;
        right: 1%;
        z-index: 2;

        &> svg {
            margin-left: 10%;
            transform: rotate(180deg);
        }
    }
}
</style>