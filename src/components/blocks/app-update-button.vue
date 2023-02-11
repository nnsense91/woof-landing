<template>
    <button
        class="button update-products"
        @click="getProductsFn"
    >
        Update Products
    </button>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Inject } from "vue-property-decorator"

@Component
export default class AppUpdateButton extends Vue {
    @Inject() readonly getProductsFn!: () => void
}
</script>

<style scoped lang="scss">
    .update-products {
        background-color: $color-primary-white;
        font-size: 12px;
        font-weight: 600;
        padding: 8px 16px;
        border-radius: 100px;
    }
</style>