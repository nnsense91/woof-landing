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
                <div class="swiper-button-prev arrow">
                    <svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6727 29.0746C15.5692 29.1778 15.4463 29.2596 15.311 29.3154C15.1756 29.3713 15.0305 29.4 14.884 29.4C14.7375 29.4 14.5924 29.3713 14.457 29.3154C14.3217 29.2596 14.1988 29.1778 14.0953 29.0746L0.727281 15.7839C0.623537 15.681 0.54123 15.5588 0.48507 15.4242C0.42891 15.2896 0.400002 15.1454 0.400002 14.9997C0.400002 14.854 0.42891 14.7098 0.48507 14.5752C0.54123 14.4407 0.623537 14.3184 0.727281 14.2156L14.0953 0.924806C14.3045 0.716835 14.5882 0.6 14.884 0.6C15.1798 0.6 15.4635 0.716835 15.6727 0.924807C15.8819 1.13278 15.9994 1.41485 15.9994 1.70896C15.9994 2.00307 15.8819 2.28514 15.6727 2.49311L3.09119 14.9997L15.6727 27.5063C15.7765 27.6092 15.8588 27.7314 15.9149 27.866C15.9711 28.0005 16 28.1448 16 28.2905C16 28.4361 15.9711 28.5804 15.9149 28.7149C15.8588 28.8495 15.7765 28.9717 15.6727 29.0746Z" fill="white"/>
                    </svg>
                </div>
                <div class="swiper-button-next arrow">
                    <svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.327279 0.925389C0.43076 0.822245 0.553692 0.740412 0.689032 0.684577C0.824372 0.628741 0.969463 0.6 1.11599 0.6C1.26252 0.6 1.40761 0.628741 1.54295 0.684577C1.67829 0.740412 1.80122 0.822245 1.90471 0.925389L15.2727 14.2161C15.3765 14.319 15.4588 14.4412 15.5149 14.5758C15.5711 14.7104 15.6 14.8546 15.6 15.0003C15.6 15.146 15.5711 15.2902 15.5149 15.4248C15.4588 15.5593 15.3765 15.6816 15.2727 15.7844L1.90471 29.0752C1.69553 29.2832 1.41182 29.4 1.11599 29.4C0.820167 29.4 0.536459 29.2832 0.327279 29.0752C0.118099 28.8672 0.000583254 28.5852 0.000583254 28.291C0.000583254 27.9969 0.118099 27.7149 0.327279 27.5069L12.9088 15.0003L0.327279 2.4937C0.223536 2.39081 0.141227 2.26859 0.085067 2.13404C0.028907 1.99948 0 1.85523 0 1.70954C0 1.56386 0.028907 1.41961 0.085067 1.28505C0.141227 1.15049 0.223536 1.02827 0.327279 0.925389Z" fill="white"/>
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

        @include middle-desktop {
            height: 272px;
        }
        @include small-desktop {
            height: 250px;
        }
        @include wide-tablet {
            height: 187px;
        }
        @include middle-tablet {
            height: 167px;
        }
        @include small-tablet {
            height: 208px;
        }
        @include wide-phone {
            height: 130px;
        }
        @include middle-phone {
            height: 143px;
        }
    }

    &-button-prev {
        left: 1%;

        &> svg {
            margin-right: 10%;
        }
    }
    &-button-next {
        right: 1%;

        &> svg {
            margin-left: 10%;
        }
    }
}

.arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 39%;
    bottom: 0;
    cursor: pointer;
    width: 48px;
    height: 48px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    z-index: 3;

    @include middle-desktop {
        width: 40px;
        height: 40px;
    }
    @include wide-tablet {
        width: 32px;
        height: 32px;

        &> svg {
            transform: scale(0.7);
        }
    }
    @include wide-phone {
        width: 24px;
        height: 24px;

        &> svg {
            transform: scale(0.5);
        }
    }
}
</style>