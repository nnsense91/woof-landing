<template>
    <main class="main">
        <app-header :isShowControls="showControlsState"/>
        <app-slider v-if="woofs.length && !isWoofsLoading" :woofs="woofs" @slidesCountChanged="setNeedToControls"/>
        <app-loader v-if="isWoofsLoading" />
        <app-products v-if="products.length && !isProductsLoading" :products="products" />
        <app-loader v-if="isProductsLoading" />
    </main>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

import AppHeader from "@components/sections/app-header.vue";
import AppProducts from "@components/sections/app-products.vue";
import AppSlider from "@components/blocks/app-slider.vue";
import AppLoader from "@components/blocks/app-loader.vue";
import { fetchProducts, fetchWoofs } from "./api";
import { TProduct, TWoof } from "./models";
import {getProductsFromLs} from "./helpers/localStorage";

@Component({
    components: {
        AppHeader,
        AppProducts,
        AppSlider,
        AppLoader
    },
})
export default class App extends Vue {
    products: TProduct[] = [];
    woofs: TWoof[] = []
    showControlsState = true;
    isWoofsLoading = false;
    isProductsLoading = false;
    
    @Provide() getProductsFn = this.getProducts
    

    public async getProducts(): Promise<void> {
        const productsFromLs = getProductsFromLs();

        if (productsFromLs) {
            this.products = productsFromLs;

            return
        }
        this.isProductsLoading = true;
        this.products = await fetchProducts(100);
        this.isProductsLoading = false;
    }

    private async fetchWoof(): Promise<void> {
        this.isWoofsLoading = true;
        this.woofs = await fetchWoofs();
        this.isWoofsLoading = false;
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
