<template>
    <div class="product">
        <div class="product__content">
            <div class="product__picture">
                <img :src="product.thumbnail" alt="product-preview" />
            </div>
            <ul class="product__description">
               <li class="product__description-item">
                   <span class="product__description-key">Brand: </span>
                   {{ product.brand }}
               </li>
               <li class="product__description-item">
                   <span class="product__description-key">Category: </span>
                   {{ product.category }}
               </li>
               <li class="product__description-item">
                   <span class="product__description-key">Description: </span>
                   {{ product.description }}
               </li>
               <li class="product__description-item">
                   <span class="product__description-key">In stock: </span>
                   {{ product.stock }}
               </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IProduct } from "../../api";

@Component
export default class AppProduct extends Vue {
    @Prop() readonly product!: IProduct
}
</script>

<style scoped lang="scss">
.product {
    &__picture {
        height: 206px;
        width: 100%;
        overflow: hidden;

        &> img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 25%;
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