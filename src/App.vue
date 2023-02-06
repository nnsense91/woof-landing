<template>
    <main class="main">
        <app-header />
        <app-slider :woofs="woofs"/>
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

@Component({
    components: {
        AppHeader,
        AppProducts,
        AppSlider
    },
})
export default class App extends Vue {
    @Provide() getProductsFn = this.getProducts
    products: TProduct[] = [];
    woofs: TWoof[] = []

    public async getProducts(): Promise<void> {
        this.products = await fetchProducts(100);
    }

    public async fetchWoof(): Promise<void> {
        this.woofs = await fetchWoofs();
    }

    private created() {
        this.fetchWoof()
    }
}
</script>

<style lang="scss">

</style>
