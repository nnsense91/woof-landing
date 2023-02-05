<template>
    <section class="products">
        <div class="container">
            <ul class="products__list">
                <li v-for="product in products" :key="product.id" class="products__item">
                    <app-product :product="product"/>
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
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            row-gap: 24px;
        }

        &__item {
            max-width: calc(25% - 26px);
            height: 378px;
            padding: 8px;
            border: 1px solid $color-grey;
        }
    }
</style>