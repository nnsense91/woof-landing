<template>
    <div class="loader" />
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class AppLoader extends Vue {};
</script>

<style scoped lang="scss">
.loader {
    margin: 0 auto;
    border: 0.3rem solid $color-primary-blue;
    border-radius: 50%;
    border-top: 0.3rem solid $color-primary-white;
    width: 4rem;
    height: 4rem;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>