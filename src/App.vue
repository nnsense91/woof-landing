<template>
    <main class="main">
        <app-header />
        <app-slider />
        {{ woofs }}
        <app-products :products="products" />
    </main>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

import AppHeader from "@components/sections/app-header.vue";
import AppProducts from "@components/sections/app-products.vue";
import AppSlider from "@components/blocks/app-slider.vue";
import {fetchProducts, requestWoofs, IProduct} from "./api";

@Component({
    components: {
        AppHeader,
        AppProducts,
        AppSlider
    },
})
export default class App extends Vue {
    @Provide() getProductsFn = this.getProducts
    products: IProduct[] = [];
    woofs: string[] = []

    async getProducts(): Promise<void> {
        const data = await fetchProducts(100);

        this.products = data;
    }

    public async fetchWoof(): Promise<void> {
       const data = await requestWoofs()
        this.woofs = data;
    }

    created() {
        this.fetchWoof()
    }
}
</script>

<style lang="scss">

</style>
