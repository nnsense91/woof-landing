<template>
    <figure class="woof">
        <img
            class="woof__img"
            alt="doggy"
            :srcset="`${woofUrl} 480w`"
            sizes="(max-width: 1921px) 480px"
        >
    </figure>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { TWoof } from "../../models";

@Component
export default class AppWoof extends Vue {
    @Prop() woofUrl!: TWoof;
}
</script>

<style scoped lang="scss">
    .woof {
        width: 100%;
        height: 100%; /* Высота области */
        margin: 0; /* Обнуляем отступы */

        &__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>