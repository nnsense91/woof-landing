<template>
    <main class="main">
        <app-header :isShowControls="showControlsState"/>
        <app-slider :woofs="woofs" @slidesCountChanged="setNeedToControls"/>
        <app-products :products="products" />
    </main>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

import AppHeader from "@components/sections/app-header.vue";
import AppProducts from "@components/sections/app-products.vue";
import AppSlider from "@components/blocks/app-slider.vue";
import { fetchProducts, fetchWoofs } from "./api";
import { TProduct, TWoof } from "./models";
import {getProductsFromLs} from "./helpers/localStorage";

@Component({
    components: {
        AppHeader,
        AppProducts,
        AppSlider
    },
})
export default class App extends Vue {
    products: TProduct[] = [];
    woofs: TWoof[] = []
    showControlsState = true;
    
    @Provide() getProductsFn = this.getProducts
    

    public async getProducts(): Promise<void> {
        const productsFromLs = getProductsFromLs();

        if (productsFromLs) {
            this.products = productsFromLs;

            return
        }
        this.products = await fetchProducts(100);
    }

    private async fetchWoof(): Promise<void> {
        this.woofs = await fetchWoofs();
    }

    public setNeedToControls(slides: number) {
        this.showControlsState = slides === 1 ? false : true;
    }

    private created() {
        this.fetchWoof()
    }
}
</script>

<style lang="scss">

</style>
