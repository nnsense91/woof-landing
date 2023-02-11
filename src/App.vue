<template>
    <main class="main">
        <app-header :is-show-controls="showControlsState" />
        <app-slider
            v-if="woofs.length && !isWoofsLoading"
            :woofs="woofs"
            @slidesCountChanged="setNeedToShowControls"
        />
        <app-loader v-if="isWoofsLoading" />
        <app-products
            v-if="products.length && !isProductsLoading"
            :products="products"
        />
        <app-loader v-if="isProductsLoading" />
    </main>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

import AppHeader from "@components/sections/app-header.vue";
import AppProducts from "@components/sections/app-products.vue";
import AppSlider from "@components/sections/app-slider.vue";
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
    }
})
export default class App extends Vue {
    products: TProduct[] = [];
    woofs: TWoof[] = []
    showControlsState = true;
    isWoofsLoading = false;
    isProductsLoading = false;
    
    @Provide() getProductsFn = this.getProducts
    

    private async getProducts(): Promise<void> {
        const productsFromLs = getProductsFromLs();

        if (productsFromLs) {
            this.products = productsFromLs;

            return;
        }

        try {
            this.isProductsLoading = true;
            this.products = await fetchProducts(100);
        } catch (e) {
            throw new Error("failed to load products");
        } finally {
            this.isProductsLoading = false;
        }
    }

    private async fetchWoof(): Promise<void> {
        try {
            this.isWoofsLoading = true;
            this.woofs = await fetchWoofs();
        } catch (e) {
            throw new Error("failed to load slides")
        } finally {
            this.isWoofsLoading = false;
        }
    }

    public setNeedToShowControls(slides: number) {
        this.showControlsState = slides !== 1;
    }

    private created() {
        this.fetchWoof()
    }
}
</script>

<style lang="scss">

</style>
