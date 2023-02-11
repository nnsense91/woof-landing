<template>
    <header class="header">
        <div class="container container--header">
            <div v-if="isShowControls" class="header__content">
                <AppLogo />
                <AppUpdateButton />
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import AppLogo from "@components/blocks/app-logo.vue";
import AppUpdateButton from "@components/blocks/app-update-button.vue";

@Component({
    components: {
        AppLogo,
        AppUpdateButton
    }
})
export default class AppHeader extends Vue {
    @Prop() readonly isShowControls!: boolean;
}
</script>

<style scoped lang="scss">
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $color-primary-blue;
        padding: 10px 0;
        height: 48px;


        &__content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
    }

    .container--header {
        display: flex;
        align-items: center;
    }
</style>