<template>
    <section class="products">
        <div class="container">
            <ul class="products__list">
                <li v-for="(product, index) in products" :key="product.id" class="products__item">
                    <app-product
                        :product="product"
                        :top="index === 0"
                        :sale="index === 1"
                        :popular="index === 2"
                    />
                </li>
            </ul>
        </div>
    </section>
</template>

<script lang="ts">
import { Prop, Component, Vue} from "vue-property-decorator";
import { TProduct } from "../../models";
import AppProduct from "@components/blocks/app-product.vue";

@Component({
     components: {
         AppProduct
     }
})
export default class AppProducts extends Vue {
    @Prop() readonly products!: TProduct[]
}
</script>

<style scoped lang="scss">
    .products {
        &__list {
            display: grid;
            grid-template-columns: repeat(4, minmax(5rem, 1fr));
            column-gap: 24px;
            grid-row-gap: 1rem;

            @include small-desktop {
                column-gap: 16px;
            }
            @include wide-tablet {
                grid-template-columns: repeat(3, minmax(5rem, 1fr));
            }
            @include small-tablet {
                grid-template-columns: repeat(2, minmax(5rem, 1fr));
            }
            @include wide-phone {
                grid-template-columns: repeat(1, minmax(5rem, 1fr));
                column-gap: 8px;
            }
            
        }

        &__item {
            height: 378px;
            padding: 8px;
            border: 1px solid $color-grey;
        }
    }
</style>