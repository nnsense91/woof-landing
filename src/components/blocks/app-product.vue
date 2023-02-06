<template>
    <div class="product">
        <div class="product__content">
            <figure class="product__picture">
                <img :src="product.thumbnail" alt="product-preview" />
            </figure>
            <ul class="product__description">
               <li class="product__description-item">
                   <span class="product__description-key">Brand: </span>
                   {{ product.brand }}
               </li>
               <li class="product__description-item">
                   <span class="product__description-key">Category: </span>
                   {{ product.category }}
               </li>
               <li class="product__description-item" :title="product.description">
                   <span class="product__description-key">Description: </span>
                   {{ product.description }}
               </li>
               <li class="product__description-item">
                   <span class="product__description-key">In stock: </span>
                   {{ stock }}
               </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { TProduct } from "../../models";
import { getRandomTimer } from "../../helpers/randomTimer";

@Component
export default class AppProduct extends Vue {
    @Prop() readonly product!: TProduct;

    private stock: TProduct["stock"] | null = null;
    private interval: number | null = null;

    private decreaseStock() {
        const updateInterval = getRandomTimer();

        if (this.stock && this.stock > 0) {
            this.interval = window.setInterval(() => {
                this.stock = this.stock! - 1
            }, updateInterval)
        }
    }

    private clearTimer() {
        if (this.interval) {
            clearInterval(this.interval)
        }
    }

    created() {
        this.stock = this.product.stock
    }
    mounted() {
        this.decreaseStock()
    }
    beforeDestroy() {
        this.clearTimer()
    }

    @Watch("stock")
    onStockChanged(prev: TProduct["stock"], next: TProduct["stock"]) {
        if (next === 1 && this.interval) this.clearTimer()
    }
}
</script>

<style scoped lang="scss">
.product {
    &__picture {
        width: 100%;
        height: 206px;
        margin: 0;

        &> img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__description {
        margin-top: 9px;

        &-item:not(:first-child) {
            margin-top: 9px;
            -ms-text-overflow: ellipsis;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            overflow: hidden;
            -ms-line-clamp: 2;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            display: -webkit-box;
            display: box;
            word-wrap: break-word;
            -webkit-box-orient: vertical;
            box-orient: vertical;
        }

        &-key {
            font-weight: 600;
        }
    }
}


</style>